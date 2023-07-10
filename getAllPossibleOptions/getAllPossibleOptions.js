const {
  getValuesMatchingCondition,
  getUniqueValues,
} = require("../utils/generalFunctions");
const getOptions = require("../getOptions");

const getAllPossibleOptions = (optionsData, selectedOptions) => {
  const dropdownOptions = {};
  const selectedOptionsCopy = { ...selectedOptions };

  for (const key in selectedOptionsCopy) {
    if (
      selectedOptionsCopy[key] === null ||
      selectedOptionsCopy[key].length === 0
    ) {
      dropdownOptions[key] = [];
      delete selectedOptionsCopy[key];
    }
  }

  getValuesMatchingCondition(optionsData, selectedOptionsCopy, dropdownOptions);

  for (const key in dropdownOptions)
    dropdownOptions[key] = getUniqueValues(dropdownOptions[key]);

  for (const key in selectedOptionsCopy)
    dropdownOptions[key] = getOptions(optionsData, selectedOptionsCopy, key);

  return dropdownOptions;
};

module.exports = getAllPossibleOptions;
