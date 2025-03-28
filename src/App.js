import React from "react"; // Importation de la bibliothèque React
import { Card, Container, Row, Col } from "react-bootstrap"; // Importation des composants de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Importation des styles Bootstrap
import product from "./product"; // Importation de l'objet d'informations sur le produit
import Name from "./composants/Name"; // Importation du composant Name
import Price from "./composants/Price"; // Importation du composant Price
import Description from "./composants/Description"; // Importation du composant Description

// Création de la fonction App qui renvoie le contenu de la page
const App = () => {
  const prénom = "John"; // Prénom de l'utilisateur

  return (
    <Container className="mt-5"> {/* Conteneur principal de la page */}
      <Row className="justify-content-center"> {/* Ligne de contenu */}
        <Col md={6}> {/* Colonne avec une largeur de 6 unités sur les écrans moyens et plus */}
          <Card className="shadow-lg text-center" style={{ maxWidth: "470px", margin: "auto" }}> {/* Carte de produit */}
            <Card.Img variant="top" src={product.image} alt="Produit" style={{ height: "350px", objectFit: "cover" }} /> {/* Image du produit */}
            <Card.Body>
              <Card.Title>
                <Name name={product.name} /> {/* Affichage du nom du produit */}
              </Card.Title>
              <Card.Text>
                <Description description={product.description} /> {/* Affichage de la description du produit */}
              </Card.Text>
              <h4>
                <Price price={product.price} /> {/* Affichage du prix du produit */}
              </h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4 text-center"> {/* Nouvelle ligne avec une marge en haut et un texte centré */}
        <Col>
          <p className="greeting">Bonjour {prénom ? prénom : "!"} !</p> {/* Affichage d'un message de bienvenue */}
          {prénom && ( // Affichage conditionnel de l'image si le prénom est défini
            <img
              className="image-small rounded-circle" // Classe CSS pour réduire la taille de l'image et la rendre circulaire
              src="https://cdn.webshopapp.com/shops/351572/files/464534801/1652x1652x2/john-doe-john-doe-jd-one-helmet-spectral.jpg" // URL de l'image
              alt="Profile" // Texte alternatif pour l'image
              width="100" // Largeur de l'image en pixels
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App; // Exportation du composant App pour qu'il puisse être utilisé dans d'autres fichiers