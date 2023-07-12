import {
  getValuesMatchingCondition,
  getUniqueValues,
} from "../utils/generalFunctions";

export const getOptionsAfterClick = (
  optionsData: Array<Object>,
  selectedOptions: Object,
  currentDropdown: string
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
  dropdownOptions[currentDropdown] = [];
  delete selectedOptionsCopy[currentDropdown];

  getValuesMatchingCondition(optionsData, selectedOptionsCopy, dropdownOptions);

  return getUniqueValues(dropdownOptions[currentDropdown]);
};
