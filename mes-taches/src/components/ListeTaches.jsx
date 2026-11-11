
import "../index.css";

function ListeTaches() {
  return (
    <ul className="liste-taches">

      <li className="tache">
        <span className="titre">run</span>
        <button>Supprimer</button>
      </li>

      <li className="tache terminee">
        <span className="titre">read</span>
        <button>Supprimer</button>
      </li>

      <li className="tache">
        <span className="titre">swim</span>
        <button>Supprimer</button>
      </li>

    </ul>
  );
}

export default ListeTaches;
