import Cards from "./useContextEg/Cards";
import Counter from "./useContextEg/Counter";
import GetPosts from "./components/getPosts";
import GetQuotes from "./components/getQuotes";
import Map from "./components/map";

import UseEffect from "./components/useEffect";
import UseRef from "./components/useRef";
import CountProvider from "./providers/contextProvider";

function App() {
  return (
    <div>
      {/* <Cards title='title-1' content="content-1"/>
      <Cards title='title-2' content="content-2"/> */}
      <CountProvider>
        <Counter />
        <Cards />
        <Cards />
        <Cards />
      </CountProvider>
      {/* <Map/> */}
      {/* <UseEffect/> */}

      {/* <UseRef/> */}
      {/* <GetQuotes/> */}
      {/* <GetPosts/> */}
    </div>
  );
}

export default App;
