import Meal from "./Meal";

const Category = ({ category, addToPanier }) => {
  return (
    <>
      <h2>{category.name}</h2>
      <div className="category">
        {category.meals.map((meal, index) => {
          return (
            <Meal
              index={meal.id}
              key={index}
              meal={meal}
              addToPanier={addToPanier}
            />
          );
        })}
      </div>
    </>
  );
};

export default Category;
