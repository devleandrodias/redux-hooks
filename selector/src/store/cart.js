const INITIAL_STATE = {
  items: [],
  shipping_value: 0,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD':
      return null;
    case 'SET_SHIPPING':
      return null;
    default:
      return state;
  }
}
