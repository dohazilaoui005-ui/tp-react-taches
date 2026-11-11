import Entete from './components/Entete.jsx'
import ListeTaches from './components/ListeTaches.jsx'
import Pied from './components/Pied.jsx'
import Carte from './components/Carte.jsx'
import { useState } from 'react'
import FormulaireAjout from './components/FormulaireAjout.jsx'
import Filter from './Filtres.jsx'
import Statistique from './components/Statistiques.jsx'
function App() {
  const TACHES_INITIALES = [
  { id: 1, titre: 'Installer Node.js et Vite', terminee: true },
  { id: 2, titre: 'Comprendre les composants', terminee: true },
  { id: 3, titre: 'Passer des données avec les props', terminee: false },
  { id: 4, titre: "Gérer l'état avec useState", terminee: false },
]
const [taches, setTaches] = useState(TACHES_INITIALES)
 const [filtre, setFiltre] = useState('actives')
 const tachesVisibles = taches.filter(tache => {
  if (filtre === 'actives') {
    return !tache.terminee;
  }

  if (filtre === 'terminees') {
    return tache.terminee;
  }
  return true;
});
function basculerTache(id) {
  setTaches(
    taches.map((tache) =>
      tache.id === id ? { ...tache, terminee: !tache.terminee } : tache,
    ),
  )
}
function ajouterTache(titre){
  setTaches((taches)=> [
    ...taches,
    {
      id: Date.now(),
      titre,
      terminee: false
    }
  ])
}
function supprimerTache(id) {
  setTaches(prev => prev.filter(tache => tache.id !== id));
}
function onChanger(nouveauFiltre) {
  setFiltre(nouveauFiltre);
}
  return (
    <div className="app">
      <Entete
  titre="Mes tâches"
  sousTitre="Organise ton travail"
/>
<Carte titre="Statistiques">
<Statistique taches={tachesVisibles}></Statistique>
</Carte>
<Filter filtre={filtre} onChanger={onChanger}> 

   </Filter>
      <Carte titre="Compteur" >
          <ListeTaches taches={tachesVisibles} onBasculer={basculerTache} onSupprimer={supprimerTache} />
      </Carte>
      <Carte titre="Nouvelle tâche"   >
    <FormulaireAjout onAjouter={ajouterTache} ></FormulaireAjout>
      </Carte>
   
      <Pied auteur="abc def" />
    </div>
  )
}

export default App