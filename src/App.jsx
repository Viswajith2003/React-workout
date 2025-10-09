import { createContext, useState } from "react";
import Cards from "./components/Cards";
import Counter from "./components/Counter";
import GetPosts from "./components/getPosts";
import GetQuotes from "./components/getQuotes";
import Map from "./components/map";
import UseEffect from "./components/useEffect";
import UseRef from "./components/useRef";

export const countContext = createContext();
function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {/* <Cards title='title-1' content="content-1"/>
      <Cards title='title-2' content="content-2"/> */}
      <countContext.Provider value={{ counter, setCounter }}>
        <Counter />
        <Cards />
        <Cards />
        <Cards />
      </countContext.Provider>
      {/* <Map/> */}
      {/* <UseEffect/> */}
      {/* <UseRef/> */}
      {/* <GetQuotes/> */}
      {/* <GetPosts/> */}
    </div>
  );
}

export default App;
