import React from "react";
import { connect } from "react-redux";
import { delFeature } from "../actions/carActions";

const AddedFeature = (props) => {
  const { delFeature, feature } = props;

  const handleClick = () => {
    // console.log(feature.id);
    delFeature(feature.id);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>
        X
      </button>
      {feature.name}
    </li>
  );
};

const mapActionsToProps = {
  delFeature,
};

export default connect(null, mapActionsToProps)(AddedFeature);
