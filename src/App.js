import "./App.css";
import Header from "./components/Header";
import Description from "./components/Description";
import Category from "./components/Category";
import Panier from "./components/Panier";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [panier, setPanier] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-backend-by-thomas.herokuapp.com/"
        );
        setData(response.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const addToPanier = (item) => {
    const newPanier = [...panier];

    const exist = newPanier.find((elem) => elem.id === item.id);

    if (!exist) {
      item.quantity = 1;
      newPanier.push(item);
      setPanier(newPanier);
    } else {
      exist.quantity++;
      setPanier(newPanier);
    }
  };

  return !isLoading ? (
    <div>Chargement en cours</div>
  ) : (
    <div className="content">
      <Header />
      <div className="description">
        <Description
          name={data.restaurant.name}
          description={data.restaurant.description}
          picture={data.restaurant.picture}
        />
      </div>

      <div className="container meals">
        <div className="category-container">
          {data.categories.map((item, index) => {
            return (
              item.meals.length > 0 && (
                <Category
                  key={index}
                  category={item}
                  addToPanier={addToPanier}
                />
              )
            );
          })}
        </div>

        <div className="panier-container">
          <Panier
            panier={panier}
            setPanier={setPanier}
            price={price}
            setPrice={setPrice}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
