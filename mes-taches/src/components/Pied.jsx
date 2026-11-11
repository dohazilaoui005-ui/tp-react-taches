function Pied() {
    const d = new Date();
let year = d.getFullYear();
  return (
    <footer className="pied">
        <p> « TP React – » </p>
        {year}
    </footer>
  )
}

export default Pied