type Winner = {
  name : string,
  image ?: string,
  points : number
}

type LeaderBoardProps = {
  winners : Winner[]
}

export function LeaderBoard( { winners } : LeaderBoardProps ) {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Leader Board</h2>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
             Exit
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Names</span>
                      </th>
              

                      
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        pionts
                      </th>

                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {winners.map((winner) => (
                      <tr key={winner.name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              {winner.image &&  <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={winner.image}
                                alt=""
                              />}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{winner.name}</div>
                            </div>
                          </div>
                        </td>
                       
          
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {winner.points}
                        </td>
                     
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
