import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

const Cart = ({ cart, total, addProduct, setShipping }) => {
  return (
    <div>
      <h1>Carrinho </h1>
      <p>
        Itens: <b>{cart.items.length}</b>
      </p>
      <p>
        Frete: R$<b>{cart.shipping_value}</b>
      </p>
      <p>
        Total: R$<b>{total}</b>
      </p>
      <button onClick={addProduct}>Adicionar produto</button>
      <button onClick={setShipping}>Calcular frete</button>
    </div>
  );
};

// Isso é um selector memorizavel que vai executar partir que váriavel mudar
const calculateTotal = createSelector(
  state => state.items,
  state => state.shipping_value,
  (items, shipping_value) => {
    console.log('CALCULOU');
    return (
      items.reduce((subTotal, item) => subTotal + item.price, 0) +
      shipping_value
    );
  }
);

const mapStateToProps = state => ({
  cart: state,
  // Isso sim é um selector dentro do redux, mas que não é memorizado
  total: calculateTotal(state),
});

const mapDispatchToProps = dispatch => ({
  addProduct: () =>
    dispatch({
      type: 'ADD',
    }),
  setShipping: () =>
    dispatch({
      type: 'SET_SHIPPING',
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
