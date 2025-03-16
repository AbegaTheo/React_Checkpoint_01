import React from 'react'; // Importation de la bibliothèque React
import product from '../product'; // Importation de l'objet product depuis le fichier product.js

// Définition du composant fonctionnel Price
const Price = () => {
  // Retourne un élément p avec la classe CSS "product-price"
  // Affiche le prix du produit en utilisant la propriété price de l'objet product
  return <p className="product-price">Prix: {product.price}</p>;
};

// Exportation du composant Price pour qu'il puisse être utilisé dans d'autres fichiers
export default Price;