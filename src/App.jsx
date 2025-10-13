import Cards from "./useContextEg/Cards";
import Counter from "./useContextEg/Counter";
import GetPosts from "./components/getPosts";
import GetQuotes from "./components/getQuotes";
import Map from "./components/map";

import UseEffect from "./components/useEffect";
import UseRef from "./components/useRef";
import CountProvider from "./providers/contextProvider";

import CounterMemo from "./useMemo/counter";
import { useCallback, useState } from "react";

function App() {
  const [text, setText] = useState("");

  // ✅ useCallback prevents the function from being recreated every render
  const handleClick = () => {
    console.log("Child button clicked");
  };

  console.log("🧑‍💻 Parent rendering");
  return (
    <div>
      {/* <Cards title='title-1' content="content-1"/>
      <Cards title='title-2' content="content-2"/> */}
      {/* <CountProvider>
        <Counter />
        <Cards />
        <Cards />
        <Cards />
      </CountProvider> */}
      {/* <Map/> */}
      {/* <UseEffect/> */}

      {/* <UseRef/> */}
      {/* <GetQuotes/> */}
      {/* <GetPosts/> */}

      {/* useMemo  */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <br />
      <br />

      <CounterMemo onClick={handleClick} />
    </div>
  );
}

export default App;
