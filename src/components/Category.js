import Meal from "./Meal";

const Category = ({
  category,
  panier,
  setPanier,
  price,
  setPrice,
  counter,
  setCounter,
}) => {
  return (
    <>
      <h2>{category.name}</h2>
      <div className="category">
        {category.meals.map((meal, index) => {
          return (
            <Meal
              panier={panier}
              setPanier={setPanier}
              key={meal.id}
              meal={meal}
              price={price}
              setPrice={setPrice}
            />
          );
        })}
      </div>
    </>
  );
};

export default Category;
