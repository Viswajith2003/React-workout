import React, { useEffect, useState } from "react";

export default function GetQuotes() {
  const [getQuote, setgetQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const getQuotes = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setgetQuote(data.slip.advice);
      setLoading(false);
      console.log(data.slip.advice);
    } catch (error) {
      error.message;
    }
  };

  if (loading) {
    return <div>Loading for the quote</div>;
  }

  useEffect(() => {
    getQuotes();
  }, []);
  return (
    <div>
      <h2>
        Today Quote is:
        <p>{getQuote}</p>
      </h2>
      <button onClick={getQuotes}>Get Quote</button>
    </div>
  );
}
