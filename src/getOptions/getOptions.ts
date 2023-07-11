import {
  getValuesMatchingCondition,
  getUniqueValues,
} from "../utils/generalFunctions";

export const getOptions = (
  optionsData: Array<Object>,
  selectedOptions: Object,
  dropdown: string
): Array<string> => {
  const dropdownOptions: Object | any = {};
  const selectedOptionsCopy: Object | any = { ...selectedOptions };

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
