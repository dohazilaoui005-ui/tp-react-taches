import { createElement } from "react";

function Filter({filtre,onChanger}) {
    ///Toutes, À faire et Terminées
    const opt =[{ valeur: 'toutes', libelle: 'Toutes' }, 
                {valeur: 'actives', libelle: 'À faire'},
                {valeur: 'terminees', libelle: 'Terminées'}
    ]
  return (
   <>
  {opt.map((val)=>createElement(
    'button',
{
            key: val.valeur,
            className: filtre === val.valeur ? 'actif' : '',
            onClick: () => onChanger(val.valeur)
},
   val.libelle
  ))}
   </>
  );
}

export default Filter;