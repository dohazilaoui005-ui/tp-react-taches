import "../index.css";

function Pied({auteur}) {
    const d = new Date();
let year = d.getFullYear();
  return (
    <footer className="pied">
        <p> « TP React – » </p>
        {year}
        <p>{auteur}</p>
    </footer>
  )
}

export default Pied