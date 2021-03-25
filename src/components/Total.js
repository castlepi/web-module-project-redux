import React from "react";

import { connect } from "react-redux";

const Total = (props) => {
  const { price, additionalPrice } = props;
  // const { price } = props.car;
  // console.log(props.car.price);
  // console.log(additionalPrice);
  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { additionalPrice } = state.car;
  const { price } = state.car.car;
  return {
    price: price,
    additionalPrice: additionalPrice,
  };
};

export default connect(mapStateToProps)(Total);
