document.getElementById("fetchQuoteBtn").addEventListener("click", async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    document.getElementById("quoteContainer").innerText = `"${data.value}"`;
  } catch (error) {
    console.error("Error fetching the quote:", error);
  }
});
