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
            return index < 6 && <Category key={index} category={item} />;
          })}
        </div>

        <div className="panier-container">
          <Panier />
        </div>
      </div>
    </div>
  );
}

export default App;
