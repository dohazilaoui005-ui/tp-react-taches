
import "../index.css";
function Tache({  id, titre, terminee, onBasculer, onSupprimer  }) {
  return (
    <li className={terminee ? "tache terminee" : "tache"}>
      <span className="titre">
        <input type="checkbox" checked={terminee} onChange={() => onBasculer(id)} /> ;
       {titre}
       <button className="danger" onClick={() => onSupprimer(id)}>Supprimer</button>
      </span>
    </li>
  );
}

export default Tache;