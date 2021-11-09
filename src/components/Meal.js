import { useState } from "react";

const Meal = ({ meal, panier, setPanier, price, setPrice }) => {
  const [inPanier, setInPanier] = useState(false);

  const addToPanier = () => {
    if (!inPanier) {
      const newPanier = [...panier];
      meal.quantity = 1;
      newPanier.push(meal);
      setPanier(newPanier);
      setPrice((Number(price) + Number(meal.price)).toFixed(2));

      setInPanier(true);
    } else {
      const newTab = [...panier];
      const index = newTab.indexOf(meal);
      newTab[index].quantity = newTab[index].quantity + 1;

      setPanier(newTab);
      setPrice((Number(price) + Number(meal.price)).toFixed(2));
    }
  };

  return (
    <div key={meal.id} className="item" onClick={addToPanier}>
      <div className="category-col1" style={{ width: !meal.picture && "100%" }}>
        <h3>{meal.title}</h3>
        <p className="category-description">{meal.description.slice(0, 70)}</p>
        <p>
          <span className="price">{meal.price.replace(".", ",")} € </span>
          {meal.popular && <span className="populaire">Populaire</span>}
        </p>
      </div>
      {meal.picture && (
        <div className="category-col2">
          <img src={meal.picture} alt="" />
        </div>
      )}
    </div>
  );
};

export default Meal;
