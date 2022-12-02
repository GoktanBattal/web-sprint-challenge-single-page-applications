import React from 'react';

const PizzaStores = (props) => {
  const { list } = props;

  return (
    <div className="container">
      <div className="store-wrapper">
        {list.map((store) => (
          <div className="store-card" key={store.id}>
            <img className="store-image" src={store.imageUrl} alt={store.name} />
            <h4>{store.name}</h4>
            <h5>{store.description}</h5>
            <div className="store-info">
              <p>{store.time}</p>
              <p>${store.price} Delivery Fee</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaStores;
