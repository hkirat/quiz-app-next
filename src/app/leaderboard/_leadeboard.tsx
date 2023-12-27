"use client";
import React, { useEffect } from "react";
function getRandomRgbColor(): string {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}
function _leadeboard(props: { Data: { username: string; profilePicture?: string; points: number }[] }) {
    const { Data } = props;
    const maxPoints = Data.sort((a, b) => b.points - a.points)[0].points;
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1 className="text-6xl">Leaderboard</h1>

                <div className=" flex-col ">
                    {Data.sort((a, b) => b.points - a.points)
                        .slice(0, 10)
                        .map((item) => (
                            <div className="flex mb-2 gap-4 items-center">
                                <h3 className="font-semibold text-2xl w-[100px] text-right">{item.points} p</h3>
                                <div className="w-[40vw] flex">
                                    <div
                                        className="animate-slide"
                                        style={{
                                            height: "3rem",
                                            width: `${(item.points / maxPoints) * 100}%`,
                                            backgroundColor: getRandomRgbColor(),
                                        }}
                                    ></div>
                                    <div className="h-10 w-10 bg-no-repeat  rounded-full">
                                        <img src={item.profilePicture} />
                                        {item.profilePicture ? null : item.username.substring(0, 2)}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </main>
    );
}

export default _leadeboard;
