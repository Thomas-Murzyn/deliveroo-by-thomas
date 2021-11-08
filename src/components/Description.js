const Description = ({ name, description, picture }) => {
  return (
    <div className="container description">
      <div className="col1">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>

      <div className="col2">
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

export default Description;
