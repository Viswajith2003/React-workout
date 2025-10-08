import Cards from "./components/Cards";
import Counter from "./components/Counter";


function App() {
  return (
    <div>
      <Cards title='title-1' content="content-1"/>
      <Cards title='title-2' content="content-2"/>

      <Counter/>
    </div>
  );
}

export default App;


