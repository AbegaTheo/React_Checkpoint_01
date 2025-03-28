import React from 'react'; // Importation de la bibliothèque React
import product from '../product'; // Importation de l'objet product depuis le fichier product.js

// Définition du composant fonctionnel Image
const Image = () => {
  // Retourne un élément img avec l'URL de l'image et le nom du produit comme texte alternatif
  // Applique un style en ligne pour définir la largeur de l'image à 25%
  return <img src={product.image} alt={product.name} style={{ width: "25%" }} />;
};

// Exportation du composant Image pour qu'il puisse être utilisé dans d'autres fichiers
export default Image;