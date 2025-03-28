import React from 'react'; // Importation de la bibliothèque React
import product from '../product'; // Importation de l'objet product depuis le fichier product.js

// Définition du composant fonctionnel Description
const Description = () => {
  // Retourne un élément p avec la classe CSS "product-description"
  // Affiche la description du produit en utilisant la propriété description de l'objet product
  return <p className="product-description">Description: {product.description}</p>;
};

// Exportation du composant Description pour qu'il puisse être utilisé dans d'autres fichiers
export default Description;