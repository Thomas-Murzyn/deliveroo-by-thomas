import "./App.css";
import Header from "./components/Header";
import Description from "./components/Description";
import Category from "./components/Category";
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
      <Description
        name={data.restaurant.name}
        description={data.restaurant.description}
        picture={data.restaurant.picture}
      />
      {data.categories.map((item, index) => {
        return <Category category={item} />;
      })}
    </div>
  );
}

export default App;
