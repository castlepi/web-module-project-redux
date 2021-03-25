import React from "react";

import AddedFeature from "./AddedFeature";

import { connect } from "react-redux";

const AddedFeatures = (props) => {
  const { features } = props;
  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map((item) => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { features } = state.car.car;
  return {
    features: features,
  };
};

export default connect(mapStateToProps, {})(AddedFeatures);
