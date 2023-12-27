import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Link className="underline" href={"/enter"}>
        Page 1
      </Link>
    </main>
  );
}
