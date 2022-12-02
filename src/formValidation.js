import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().trim().required('name must be at least 2 characters').min(2, 'name must be at least 2 characters'),
  size: yup.string().oneOf(['Small', 'Medium', 'Large', 'Extra Large'], 'Must pick a size.'),
  sauce: yup.string().oneOf(['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'], 'Must select a sauce.'),
  substitute: yup.boolean(),
  quantity: yup.number().oneOf([1, 2, 3, 4, 5], 'Must select a quantity between 1 and 5'),
  special: yup.string().optional(),
  Pepperoni: yup.boolean(),
  Sausage: yup.boolean(),
  Canadian_Bacon: yup.boolean(),
  Spicy_Italian_Sausage: yup.boolean(),
  Grilled_Chicken: yup.boolean(),
  Onion: yup.boolean(),
  Green_Peppers: yup.boolean(),
  Diced_Tomatoes: yup.boolean(),
  Black_Olives: yup.boolean(),
  Roasted_Garlic: yup.boolean(),
  Artichoke_Hearts: yup.boolean(),
  Three_Cheese: yup.boolean(),
  Pineapple: yup.boolean(),
  Extra_Cheese: yup.boolean()
});

export default validationSchema;
