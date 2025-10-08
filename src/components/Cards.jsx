export default function Cards({ title, content }) {
  const cardStyle = {
    backgroundColor: "#f7f7f7",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px",
    color: "black",
  };

  

  return (
    <div className="root">
      <div style={cardStyle}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}
