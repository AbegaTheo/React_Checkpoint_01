import React from 'react'; // Importation de la bibliothèque React
import product from '../product'; // Importation de l'objet product depuis le fichier product.js

// Définition du composant fonctionnel Name
const Name = () => {
  // Retourne un élément h2 avec la classe CSS "product-name"
  // Affiche le nom du produit en utilisant la propriété name de l'objet product
  return <h2 className="product-name">Nom: {product.name}</h2>;
};

// Exportation du composant Name pour qu'il puisse être utilisé dans d'autres fichiers
export default Name;