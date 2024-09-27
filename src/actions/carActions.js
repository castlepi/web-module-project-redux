const ADD_FEATURE = "ADD_FEATURE";
const DEL_FEATURE = "DEL_FEATURE";

const addFeature = (featureId) => {
  return { type: ADD_FEATURE, payload: featureId };
};

const delFeature = (featureId) => {
  return { type: DEL_FEATURE, payload: featureId };
};

export { addFeature, delFeature, ADD_FEATURE, DEL_FEATURE };
