
import { useState } from 'react';

function Compteur() {
  const [valeur, setValeur] = useState(0);

  return (
    <>
      <p className="valeur-compteur">{valeur}</p>

      <div className="ligne">

        <button
          className="principal"
          onClick={() => setValeur(valeur + 1)}
        >
          Ajouter 1
        </button>

        <button
          disabled={valeur === 0}
          onClick={() => setValeur(valeur - 1)}
        >
          Soustraire 1
        </button>

        <button onClick={() => setValeur(0)}>
          Reset
        </button>

      </div>
    </>
  );
}

export default Compteur;
