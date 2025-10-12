import ConsumeContext from "../Hooks/consumeContext";

export default function Cards() {
  const cardStyle = {
    backgroundColor: "#f7f7f7",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px",
    color: "black",
  };

  const { counter, label } = ConsumeContext();

  return (
    <div>
      <div style={cardStyle}>
        <h1>My card</h1>
        <p>Current count is:{counter}</p>
        {label ? <h4>useContext example Labels</h4> :null}
      </div>
    </div>
  );
}
