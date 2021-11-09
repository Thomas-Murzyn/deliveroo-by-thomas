const Panier = ({ panier, setPanier, price, setPrice }) => {
  return (
    <div className="panier">
      <h4>Valider mon panier</h4>
      {panier.length > 0 ? (
        panier.map((item, index) => {
          return (
            <>
              <div className="panier-line1">
                <p>
                  <span>- </span>1 <span>+</span>
                </p>
                <p>{item.title}</p>
              </div>
              {index === panier.length - 1 && (
                <>
                  {" "}
                  <div className="panier-line2">
                    <p>Sous total</p>
                    <span>{price.replace(".", ",")}€</span>
                  </div>
                  <div className="panier-line3">
                    <p>Frais de livraison</p>
                    <span>2,50€</span>
                  </div>
                </>
              )}
            </>
          );
        })
      ) : (
        <p>Votre Panier est vide</p>
      )}
    </div>
  );
};

export default Panier;
