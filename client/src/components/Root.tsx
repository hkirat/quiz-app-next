import { Nav } from '.';

export function Root() {
  return (
    <div className="h-screen">
      <Nav />
      <main className="flex h-full w-full justify-center items-center">
        <h1 className="text-5xl">
          <span className="underline decoration-wavy decoration-cyan-400">
            Live
          </span>{' '}
          <span className="underline decoration-slice decoration-fuchsia-600">
            Quizz
          </span>{' '}
          <span className="underline decoration-clone decoration-green-500">
            App
          </span>
        </h1>
      </main>
    </div>
  );
}
