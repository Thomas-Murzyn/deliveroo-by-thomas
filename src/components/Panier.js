const Panier = ({
  panier,
  setPanier,
  price,
  setPrice,
  addToPanier,
  removeToPanier,
}) => {
  return (
    <div className="panier">
      <h4>Valider mon panier</h4>
      {panier.length > 0 ? (
        panier.map((elem, index) => {
          return (
            <div className="line1">
              <div className="ff">
                <div className="one">
                  <button
                    onClick={() => {
                      removeToPanier(elem);
                    }}
                  >
                    -
                  </button>
                  <span>{elem.quantity}</span>
                  <button
                    onClick={() => {
                      addToPanier(elem);
                    }}
                  >
                    +
                  </button>
                </div>

                <div className="two">
                  <p>{elem.title}</p>
                </div>
              </div>

              <div className="three">
                <span>{(elem.price * elem.quantity).toFixed(2)}€</span>
              </div>
            </div>
          );
        })
      ) : (
        <p>Le panier est vide</p>
      )}
    </div>
  );
};

export default Panier;
