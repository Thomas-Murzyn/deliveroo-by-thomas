const Category = ({ category }) => {
  return (
    <>
      <h2>{category.name}</h2>
      <div className="category">
        {category.meals.map((meal, index) => {
          return (
            <div key={index} className="item">
              <div className="category-col1">
                <h3>{meal.title}</h3>
                <p className="category-description">
                  {meal.description.slice(0, 70)}
                </p>
                <p>
                  <span className="price">
                    {meal.price.replace(".", ",")} €{" "}
                  </span>
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
        })}
      </div>
    </>
  );
};

export default Category;
