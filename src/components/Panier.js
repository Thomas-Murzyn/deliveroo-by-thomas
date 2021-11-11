const Panier = ({ panier, setPanier, price, setPrice }) => {
  return (
    <div className="panier">
      <h4>Valider mon panier</h4>
      {panier.length > 0 ? (
        panier.map((elem, index) => {
          return <p key={index}>{elem.quantity}</p>;
        })
      ) : (
        <p>Le panier est vide</p>
      )}
    </div>
  );
};

export default Panier;
