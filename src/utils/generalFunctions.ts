export const getValuesMatchingCondition = (
  arr: Array<Object>,
  selectedValuesObj: Object | any,
  dropdownOptions: Object | any
): void => {
  arr.forEach((obj: Object | any) => {
    let flag: boolean = true;
    for (const key in selectedValuesObj) {
      if (!selectedValuesObj[key].includes(obj[key])) {
        flag = false;
        break;
      }
    }
    if (flag) {
      for (const key in dropdownOptions) {
        !!obj[key] && dropdownOptions[key].push(obj[key]);
      }
    }
  });
};

export const getUniqueValues = (arr: Array<string>): Array<string> => {
  return Array.from(new Set(arr));
};
