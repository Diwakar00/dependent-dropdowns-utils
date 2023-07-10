const {
  getValuesMatchingCondition,
  getUniqueValues,
} = require("../utils/generalFunctions");

const getOptions = (optionsData, selectedOptions, dropdown) => {
  const dropdownOptions = {};
  const selectedOptionsCopy = { ...selectedOptions };

  for (const key in selectedOptionsCopy) {
    if (
      selectedOptionsCopy[key] === null ||
      selectedOptionsCopy[key].length === 0
    )
      delete selectedOptionsCopy[key];
  }
  dropdownOptions[dropdown] = [];
  delete selectedOptionsCopy[dropdown];

  getValuesMatchingCondition(optionsData, selectedOptionsCopy, dropdownOptions);

  return getUniqueValues(dropdownOptions[dropdown]);
};

module.exports = getOptions;