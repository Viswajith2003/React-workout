import React, { useRef, useState } from "react";

export default function UseRef() {
  const [fact, setFact] = useState();
  const [loading, setLoading] = useState(false);
  const numberRef = useRef();

  //   const data={
  //     0:"zero to hero",
  //     1:"you're unstoppable"
  //   }
  // http://numbersapi.com/$
  const getFact = async () => {
    const number = numberRef.current.value;
    if (!number) {
      alert("Please enter the number");
    }
    setLoading(true);
    try {
      const res = await fetch(
        `https://thingproxy.freeboard.io/fetch/https://numbersapi.com/${number}`
      );
      const text = await res.text();
      //   console.log(text);
      setLoading(false);
      setFact(text);
    } catch (error) {
      console.log(error.message);
    }

    // setFact(data[numberRef.current.value]);
    // console.log(numberRef.current.value);
  };

  if (loading) {
    return <div>Loading the data from server</div>;
  }
  return (
    <div>
      <h1>useRef Hook</h1>

      <input ref={numberRef} type="number" placeholder="Enter Number" />
      <br />
      <br />
      <button onClick={getFact}>Get Fact</button>

      <h4>Your fact is: {fact}</h4>
    </div>
  );
}
