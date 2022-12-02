import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  const goToOrderPage = () => {
    history.push('/pizza');
  };

  return (
    <>
      <div className="container">
        <div className="bg-image">
          <h2 className="header">Build Your Own Pizza</h2>
        </div>
        <div className="headline">
          <button onClick={goToOrderPage} id="order-pizza" className="order-button">
            Wanna Pizzaa?
          </button>
        </div>
      </div>
    </>
  );
};
export default HomePage;
