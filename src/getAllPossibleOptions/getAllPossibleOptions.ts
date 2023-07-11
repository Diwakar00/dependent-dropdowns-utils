import { getOptions } from "../getOptions";
import {
  getValuesMatchingCondition,
  getUniqueValues,
} from "../utils/generalFunctions";

export const getAllPossibleOptions = (
  optionsData: Array<Object>,
  selectedOptions: Object
): Object => {
  const dropdownOptions: any = {};
  const selectedOptionsCopy: any = { ...selectedOptions };

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
