import Entete from './components/Entete.jsx'
import ListeTaches from './components/ListeTaches.jsx'
import Pied from './components/Pied.jsx'
import Carte from './components/Carte.jsx'

function App() {
  const TACHES = [
  { id: 1, titre: 'Installer Node.js et Vite', terminee: true },
  { id: 2, titre: 'Comprendre les composants', terminee: true },
  { id: 3, titre: 'Passer des données avec les props', terminee: false },
  { id: 4, titre: "Gérer l'état avec useState", terminee: false },
]
  return (
    <div className="app">
      <Entete
  titre="Mes tâches"
  sousTitre="Organise ton travail"
/>
      <Carte titre="Compteur">
          <ListeTaches taches={TACHES} />
      </Carte>
      <Pied auteur="abc def" />
    </div>
  )
}

export default App