import { FaRegUser } from "react-icons/fa";

type props = {
    sno: number;
    name: string;
    points: number;
    image?: string;
};

const colors = ["bg-blue-500", "bg-purple-200", "bg-green-300", "bg-indigo-300", "bg-red-400", "bg-orange-300"]


function Card({ sno, name, points, image }: props) {

    return (
        <div className="flex items-center  w-full max-w-2xl mb-4 rounded-md  gap-x-2 ">
            <p className="font-bold w-fit">{points}p</p>
            <div className={`${colors[Math.floor(Math.random() * colors.length)]} h-12 rounded-r-3xl`} style={{
                width: `${Math.min(95, Math.floor(100 / Math.sqrt(sno)))}%`
            }}>
            </div>

            <div className="bg-[#F4F4F6] p-1 rounded-full relative right-12 ">
                {image ? (
                    <img
                        src={image}
                        alt={image}
                        className="w-10 rounded-full"
                    />
                ) : (
                    <FaRegUser className="text-black text-3xl" />
                )}
            </div>
            <p className="font-normal text-lg relative right-12">{name}</p>
        </div>
    );
}

export default Card;