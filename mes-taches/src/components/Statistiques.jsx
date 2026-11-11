
import "../index.css";

function Statistique({ taches }) {
  const total = taches.length;

  const terminees = taches.filter(t => t.terminee).length;

  const restantes = taches.filter(t => !t.terminee).length;

  return (
    <div className="stats">
      <div><strong>{total}</strong> au total</div>
      <div className="terminees">
        <strong>{terminees}</strong> terminée(s)
      </div>
      <div><strong>{restantes}</strong> à faire</div>
    </div>
  );
}

export default Statistique;
