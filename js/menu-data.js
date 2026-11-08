// Données du menu : modifie ici les plats, prix et descriptions.
// Format : ["Nom", "Prix", "Description (optionnelle)"]
// Une ligne ["#Titre"] crée un sous-titre dans l'onglet.
const MENU = {
  "Formules": [
    ["Primo", "13,90", "1 msemen, 2 baghrirs, une boisson chaude et une boisson froide, miel & amilou."],
    ["Manzil", "19,90", "1 msemen, 1 baghrir, 1 harcha, 2 œufs au plat ou brouillés, boisson chaude et froide, tranche de blanc de poulet, fromage, miel, amilou, olives, huile d’olive & pain."],
    ["Healthy", "15,90", "Assiette de deux œufs au plat ou brouillés, un demi-avocat, une salade, une tranche de blanc de poulet, un fromage, une boisson chaude et une froide."],
    ["Orient", "21,90", "1 msemen, 1 baghrir, 1 harcha, un tiramisu amilou ou pistache, une boisson chaude et une froide."],
    ["Duo", "49,90", "2 soupes, 2 msemens, 2 baghrirs, 2 harchas, 2 assiettes d’œufs, 2 boissons chaudes, 2 froides, miel, amilou, olives & huile d’olive."]
  ],
  "Salés": [
    ["Avocado toast", "14,90", "Guacamole d’avocat, fromage frais, œuf poché, paprika, sauce hollandaise, citron vert."],
    ["Msemen garni", "14,90", "Msemen frais, poulet mariné aux épices et cheddar fondant."],
    ["Soupe & brick", "13,90", "Soupe du jour, brick carré pomme de terre, poulet & cheddar."],
    ["Le Club", "15,90", "Pain de campagne toasté, pesto, tomates cerises à l’ail, stracciatella, pastrami, salade & vinaigre balsamique."],
    ["Msemen beef", "15,90", "Msemen frais, effiloché de bœuf cuisson longue durée, oignons confits & cheddar."],
    ["Manzil addict", "15,90", "Msemen, avocat tranché, bœuf effiloché, 2 œufs pochés, sauce hollandaise & paprika."]
  ],
  "Sucrés": [
    ["Trio de pancakes", "12,90", "Accompagnés de Nutella ou amilou & de fruits rouges frais."],
    ["Tiramisu maison", "8,90", "Pistache ou amilou."],
    ["Baghrir gourmand", "8,90", "3 baghrirs au miel et beurre fondu, fruits frais de saison, praliné caramélisé."],
    ["Msemen gourmand", "8,90", "Nutella ou amilou, fruits frais de saison, chantilly & praliné caramélisé."],
    ["Le Bowl", "11,90", "Yaourt grec, fruits frais de saison, amandes, avoine & miel."],
    ["Baklava bowl", "12,90", "Mascarpone, glace pistache & fleur d’oranger, graoula de baklava, pistache, amande & miel."]
  ],
  "À la carte": [
    ["Assortiment nature", "3,50", "Msemen ou baghrir ou harcha."],
    ["Assortiment fromage", "4,50", "Msemen fromage ou harcha fromage."],
    ["Soupe", "6,90", "Soupe du jour."],
    ["Brick", "6,90", "Brick carré pomme de terre & cheddar."],
    ["Suppléments", "2,00", "Nutella, amilou, fromage, miel."]
  ],
  "Boissons": [
    ["#Boissons chaudes"],
    ["Expresso", "2,50"],
    ["Thé à la menthe", "2,50"],
    ["Americano", "3,00"],
    ["Latte", "4,00"],
    ["Cappuccino", "4,50"],
    ["Chocolat chaud", "4,50"],
    ["Double expresso", "4,50"],
    ["#Boissons froides"],
    ["Orange pressée", "6,00"],
    ["Manzil", "6,90", "Jus d’avocat, amandes, dattes & lait."],
    ["Duo fruité", "6,90", "Smoothie fraîcheur fraise & banane."],
    ["Détox", "6,90", "Citron vert, concombre, pomme verte, gingembre, céleri & menthe, sans sucre."],
    ["Tropical", "7,50", "Smoothie fraise, mangue, ananas & jus d’orange pressé."],
    ["Mangue ananas fusion", "7,50", "Smoothie à base de jus d’orange pressé, mangue & ananas."],
    ["#Sodas"],
    ["Selecto", "2,50"],
    ["Hamoud", "2,50"],
    ["Cristalline", "2,50"],
    ["#Cafés & thés glacés"],
    ["Iced latte", "4,90", "Caramel ou pistache +2 €."],
    ["Spanish latte", "5,90"],
    ["Thé glacé pêche", "5,90"],
    ["Thé glacé à la rose", "5,90"],
    ["Thé glacé à l’hibiscus", "5,90"]
  ]
};
