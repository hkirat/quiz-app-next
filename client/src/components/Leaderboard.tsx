import { useEffect, useState } from "react"

interface IWinner {
  id: number
  username: string
  profilePicture?: string
  points: number
}

interface IProps {
  winners?: IWinner[]
}

const Leaderboard = ({ winners }: IProps) => {
  const [maxPoint, setMaxPoint] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false);

  const winner: IWinner[] = [
    {
      id: 1,
      username: 'abc',
      points: 150
    },
    {
      id: 2,
      username: 'abc',
      points: 550
    },
    {
      id: 3,
      username: 'abc',
      points: 530
    },
    {
      id: 4,
      username: 'abc',
      points: 940
    },
    {
      id: 5,
      username: 'abc',
      points: 140
    },
    {
      id: 6,
      username: 'abc',
      points: 150
    },
    {
      id: 7,
      username: 'abc',
      points: 450
    },
    {
      id: 8,
      username: 'abc',
      points: 320
    },
  ]

  useEffect(() => {
    const max = winner.reduce((acc, curr) => {
      if (curr.points >= acc.points) return curr
      return acc
    }).points
    setMaxPoint(max)
  }, [winners, winner])

  useEffect(() => {
    const id = setTimeout(() => {
      setAnimationComplete(true)
    }, 1000)

    return () => {
      id
    }
  }, [winners])


  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl text-gray-900 font-semibold">Leaderboard</h1>
        <div className="mt-12 w-full flex flex-col gap-2 max-w-7xl mx-auto">
          <div className="max-w-5xl flex flex-row justify-center items-center mx-auto">
            {(() => {
              const slicedArray = winner
                .sort((a, b) => b.points - a.points)
                .slice(0, 3);

              [slicedArray[0], slicedArray[1]] = [slicedArray[1], slicedArray[0]];

              return slicedArray.map(({ points, profilePicture, username, id }, idx, array) => {
                let className = '';
                switch (idx) {
                  case 0:
                    className = "relative -mr-10 overflow-hidden w-56 aspect-square mx-auto rounded-full bg-pink-100"
                    break
                  case 1:
                    className = "relative z-30 overflow-hidden w-60 aspect-square mx-auto rounded-full bg-pink-100"
                    break;
                  case 2:
                    className = "relative -ml-10 overflow-hidden w-52 aspect-square mx-auto rounded-full bg-pink-100"
                    break;
                  default:
                    break;
                }

                return (
                  <div key={id} className={className}>
                    <img
                      src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"
                      alt="Profile pic"
                      className="w-full aspect-square rounded-full bg-white border-2 border-yellow-500"
                    />
                    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black/10 to-black" />
                    <div className="flex flex-col absolute bottom-4 left-1/2 -translate-x-1/2 font-bold text-red-400 items-center gap-1 text-2xl">
                      <p>{points} pts</p>
                      <p>{username}</p>
                    </div>
                  </div>
                )
              })
            })()}
            {}
          </div>
          <div className="mt-12 flex flex-col gap-2">
            {winner.sort((a, b) => b.points - a.points).map(({ username, points, profilePicture, id }) => {
              const width = animationComplete ? (points / maxPoint) * 600 : 0;
              return (
                <div key={id} className="flex text-lg">
                  <div className="flex items-center h-10 gap-2">
                    <p className="w-fit">{points} p</p>
                    <div
                      className="bg-pink-600 h-full rounded-tr-2xl rounded-br-2xl"
                      style={{
                        width: `${width}px`,
                        transition: 'width 0.2 ease-out'
                      }}
                    />
                    <div className="flex items-center gap-4 -mx-4">
                      <img
                        src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png"
                        alt="Profile pic"
                        className="w-8 aspect-square rounded-full bg-white border-2 border-yellow-500"
                      />
                      <div>{username}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Leaderboard
