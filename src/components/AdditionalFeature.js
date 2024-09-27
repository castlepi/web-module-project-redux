import React from "react";
import { addFeature } from "../actions/carActions";
import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  const { addFeature, feature } = props;
  const handleClick = () => {
    // console.log(feature.id);
    addFeature(feature.id);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleClick}>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

const mapActionsToProps = {
  addFeature,
};

export default connect(null, mapActionsToProps)(AdditionalFeature);
