import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation des styles Bootstrap
import ReactDOM from 'react-dom/client'; // Importation de ReactDOM pour manipuler le DOM
import './index.css'; // Importation des styles personnalisés
import App from './App'; // Importation du composant principal App
import reportWebVitals from './reportWebVitals'; // Importation de la fonction reportWebVitals pour mesurer les performances

// Création de la racine React et attachement à l'élément DOM avec l'ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Rendu du composant App */}
  </React.StrictMode>
);

// Si vous souhaitez commencer à mesurer les performances de votre application, passez une fonction
// pour enregistrer les résultats (par exemple: reportWebVitals(console.log))
// ou envoyez-les à un point de terminaison d'analyse. En savoir plus: https://bit.ly/CRA-vitals
reportWebVitals();
