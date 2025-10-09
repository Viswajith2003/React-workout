import useCount from "../Hooks/useCount";

export default function Cards() {
  const cardStyle = {
    backgroundColor: "#f7f7f7",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px",
    color: "black",
  };

  const { counter } = useCount()

  return (
    <div>
      <div style={cardStyle}>
        <h1>My card</h1>
        <p>Current count is:{counter}</p>
      </div>
    </div>
  );
}
