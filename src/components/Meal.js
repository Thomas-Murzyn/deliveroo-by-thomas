const Meal = ({ meal, addToPanier }) => {
  return (
    <div
      className="item"
      onClick={() => {
        addToPanier(meal);
      }}
    >
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
