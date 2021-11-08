const Description = ({ name, description, picture }) => {
  return (
    <div className="container description-wrapper">
      <div className="col1">
        <h1>{name}</h1>
        <p className="p-description">{description}</p>
      </div>

      <div className="col2">
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

export default Description;
