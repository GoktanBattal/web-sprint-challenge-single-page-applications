import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import validationSchema from './formValidation';
import data from './data';
import './App.css';
import HomePage from './components/HomePage';
import PizzaStores from './components/PizzaStores';
import OrderForm from './components/OrderForm';
import TopNav from './components/TopNav';
import HelpPage from './components/HelpPage';
import ConfirmationPage from './components/ConfirmationPage';

const initialValues = {
  name: '',
  size: '',
  sauce: '',
  substitute: false,
  special: '',
  quantity: 1,
  Pepperoni: false,
  Sausage: false,
  Canadian_Bacon: false,
  Spicy_Italian_Sausage: false,
  Grilled_Chicken: false,
  Onion: false,
  Green_Peppers: false,
  Diced_Tomatoes: false,
  Black_Olives: false,
  Roasted_Garlic: false,
  Artichoke_Hearts: false,
  Three_Cheese: false,
  Pineapple: false,
  Extra_Cheese: false
};

const initialErrors = {
  name: '',
  size: '',
  sauce: ''
};

const fetchList = () => {
  return Promise.resolve({ data });
};

const App = () => {
  const history = useHistory();

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [storeList, setStoreList] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchList().then((response) => setStoreList(response.data));
  }, []);

  const validate = (name, value) => {
    yup
      .reach(validationSchema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: '' });
      })
      .catch((error) => {
        setErrors({ ...errors, [name]: error.errors[0] });
      });
  };

  const reset = () => {
    setValues(initialValues);
  };

  const submitValidation = () => {
    Object.keys(values).forEach((key) => {
      validate(key, values[key]);
    });
  };

  const onChange = (name, value) => {
    validate(name, value);
    setValues({ ...values, [name]: value });
  };

  const orderPost = (order) => {
    axios
      .post('https://reqres.in/api/orders', order)
      .then((response) => setOrders([response.data, ...orders]))
      .catch((error) => console.error(error));
  };

  const onSubmit = async () => {
    submitValidation();
    const isValid = await validationSchema.isValid(values);
    if (isValid) {
      const order = {
        name: values.name.trim(),
        size: values.size,
        sauce: values.sauce,
        toppings: ['Pepperoni', 'Sausage', 'Canadian_Bacon', 'Spicy_Italian_Sausage', 'Grilled_Chicken', 'Onion', 'Green_Peppers', 'Diced_Tomatoes', 'Black_Olives', 'Roasted_Garlic', 'Artichoke_Hearts', 'Three_Cheese', 'Pineapple', 'Extra_Cheese'].filter((topping) => !!values[topping]),
        special: values.special.trim(),
        quantity: values.quantity,
        substitute: values.substitute
      };
      // console.log('onSubmit Order', JSON.stringify(order, null, 2));
      orderPost(order);
      reset();
      history.push('/confirmation');
    }
  };

  return (
    <>
      <div className="App">
        <TopNav />
        <Switch>
          <Route exact path="/">
            <HomePage />
            <PizzaStores list={storeList} />
          </Route>
          <Route exact path="/pizza">
            <OrderForm list={storeList} change={onChange} values={values} submit={onSubmit} errors={errors} />
          </Route>
          <Route exact path="/help">
            <HelpPage />
          </Route>
          <Route exact path="/confirmation">
            <ConfirmationPage />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
