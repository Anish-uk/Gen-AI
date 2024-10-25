import Link from "next/link";

async function getQuote() {
  const res = await fetch("https://zenquotes.io/api/random");
  const data = await res.json();
  return data[0];
}

export default async function About() {
  const quote = await getQuote();

  return (
    <div className="container">
      <h1>Random Quote</h1>
      <p className="quote">"{quote.q}"</p>
      <p className="author">- {quote.a}</p>
      <Link href="/">Go Back Home</Link>
    </div>
  );
}
