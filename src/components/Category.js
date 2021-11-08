const Category = ({ category }) => {
  return (
    <div className="container category">
      <h2>{category.name}</h2>
      {category.meals.map((meal, index) => {
        return (
          <div className="category-container">
            <div className="category-col1">
              <h3>{meal.title}</h3>
              <p>{meal.description}</p>
              <span>{meal.price} </span>
              {meal.popular && <span>Populaire</span>}
            </div>
            <div className="category-col2"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
