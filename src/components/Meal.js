import { useState } from "react";

const Meal = ({ meal, panier, setPanier, price, setPrice }) => {
  const [inPanier, setInPanier] = useState(false);
  const [counter, setCounter] = useState(0);

  const addToPanier = () => {
    if (!inPanier) {
      const newPanier = [...panier];
      newPanier.push(meal);
      setPanier(newPanier);
      setPrice((Number(price) + Number(meal.price)).toFixed(2));
      setCounter(counter + 1);
      setInPanier(true);
    } else {
      setPrice((Number(price) + Number(meal.price)).toFixed(2));
      setCounter(counter + 1);
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
