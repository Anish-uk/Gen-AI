import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
