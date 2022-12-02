import React from 'react';

const OrderForm = (props) => {
    const { values, submit, change, errors } = props;
    const toppingFields = ['Pepperoni', 'Sausage', 'Canadian_Bacon', 'Spicy_Italian_Sausage', 'Grilled_Chicken', 'Onion', 'Green_Peppers', 'Diced_Tomatoes', 'Black_Olives', 'Roasted_Garlic', 'Artichoke_Hearts', 'Three_Cheese', 'Pineapple', 'Extra_Cheese'];

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    return (
        <>
            <div id="pizza-form" className="container">
                <div className="form-container">
                    <form className="form" id="pizza-form" onSubmit={onSubmit}>
                        <div className="bg-image">
                            <h2 className="header">Build Your Own Pizza</h2>
                        </div>

                        <div className="form-input">
                            <div className="form-label">
                                <h2 className="required">Full Name</h2>
                                <span>Required</span>
                            </div>
                            <input className="text-input" type="text" name="name" value={values.name} id="name-input" onChange={onChange} />
                        </div>

                        <div className="form-input">
                            <div className="form-label">
                                <h2 className="required">Choice of Size</h2>
                                <span>Required</span>
                            </div>
                            <select className="select-box" value={values.size} name="size" id="size-dropdown" onChange={onChange}>
                                <option value="">Select size</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="X Large">Extra Large</option>
                            </select>
                        </div>

                        <div className="form-input">
                            <div className="form-label">
                                <h2 className="required">Choice of Sauce</h2>
                                <span>Required</span>
                            </div>
                            <div className="radio">
                                <label className="radio-option">
                                    <input type="radio" name="sauce" value={'Original Red'} onChange={onChange} checked={values.sauce === 'Original Red'} />
                                    Original Red
                                </label>

                                <label className="radio-option">
                                    <input type="radio" name="sauce" value={'Garlic Ranch'} onChange={onChange} checked={values.sauce === 'Garlic Ranch'} />
                                    Garlic Ranch
                                </label>

                                <label className="radio-option">
                                    <input type="radio" name="sauce" value={'BBQ Sauce'} onChange={onChange} checked={values.sauce === 'BBQ Sauce'} />
                                    BBQ Sauce
                                </label>

                                <label className="radio-option">
                                    <input type="radio" name="sauce" value={'Spinach Alfredo'} onChange={onChange} checked={values.sauce === 'Spinach Alfredo'} />
                                    Spinach Alfredo
                                </label>
                            </div>
                        </div>

                        <div className="form-input">
                            <div className="form-label">
                                <h2 className="required">Add Toppings</h2>
                                <span>Choose up to any number</span>
                            </div>

                            <div className="toppings">
                                {toppingFields.map((topping, idx) => (
                                    <div className="checkbox" key={idx}>
                                        <label>
                                            <input id={topping} type="checkbox" name={topping} value={values[topping]} onChange={onChange} />
                                            {topping.replace('_', ' ')}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="form-input">
                            <div className="form-label">
                                <h2 className="required">Choice of Substitute</h2>
                                <span>Choose up to 1</span>
                            </div>
                            <div className="checkbox">
                                <label className="toggle">
                                    <input type="checkbox" name="substitute" value={values.substitute} onChange={onChange} />
                                    <span className="info"> Gluten Free Crust (+$1.00)</span>
                                </label>
                            </div>
                        </div>

                        <div className="form-input">
                            <div className="form-label">
                                <h2 className="required">Special Instructions</h2>
                            </div>
                            <div className="text-input">
                                <label>
                                    <input onChange={onChange} placeholder="Anything else ?" className="text-input" type="text" name="special" value={values.special} id="special-text" />
                                </label>
                            </div>
                        </div>
                        <div className="errors">
                            <div>{errors.name}</div>
                            <div>{errors.size}</div>
                            <div>{errors.sauce}</div>
                            <div>{errors.quantity}</div>
                        </div>
                        <div className="form-footer">
                            <div className="submitbar">
                                <label>
                                    Quantity:
                                    <input onChange={onChange} className="text-input" type="number" name="quantity" value={values.quantity} />
                                </label>
                            </div>

                            <button id="order-button">Add to Order $23.75</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default OrderForm;
