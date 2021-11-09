import { useState } from "react";

const Panier = ({ panier, setPanier, price, setPrice }) => {
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="panier">
      <h4>Valider mon panier</h4>
      {panier.length > 0 ? (
        panier.map((item, index) => {
          return (
            item.quantity > 0 &&
            panier.length > 0 && (
              <div key={item.id}>
                <div className="panier-line1">
                  <p>
                    <span
                      className="panier-moins"
                      onClick={() => {
                        item.quantity = item.quantity - 1;
                        setPrice(
                          (Number(price) - Number(item.price)).toFixed(2)
                        );
                        setRefresh(item.quantity);
                        const newTab = [...panier];
                        const index = newTab.indexOf(item);
                        newTab.slice(index, 1);
                        setPanier(newTab);
                      }}
                    >
                      -{" "}
                    </span>
                    {item.quantity}{" "}
                    <span
                      className="panier-plus"
                      onClick={() => {
                        item.quantity = item.quantity + 1;
                        setPrice(
                          (Number(price) + Number(item.price)).toFixed(2)
                        );
                        setRefresh(item.quantity);
                      }}
                    >
                      +
                    </span>
                  </p>
                  <p>{item.title}</p>
                </div>
                {index === panier.length - 1 && (
                  <>
                    {" "}
                    <div className="panier-line2">
                      <div>
                        <p>Sous total</p>
                        <span>{price.replace(".", ",")}€</span>
                      </div>

                      <div>
                        <p>Frais de livraison</p>
                        <span>2,50€</span>
                      </div>
                    </div>
                    <div className="panier-line3">
                      <p>Total</p>
                      <span>
                        {(Number(price) + 2.5).toFixed(2).replace(".", ",")}€
                      </span>
                    </div>
                  </>
                )}
              </div>
            )
          );
        })
      ) : (
        <p>Votre Panier est vide</p>
      )}
    </div>
  );
};

export default Panier;
