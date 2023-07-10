const getValuesMatchingCondition = (
  arr,
  selectedValuesObj,
  dropdownOptions
) => {
  arr.forEach((obj) => {
    let flag = true;
    for (const key in selectedValuesObj) {
      if (!selectedValuesObj[key].includes(dataObj[key])) {
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

const getUniqueValues = (arr) => {
  return [...new Set(arr)];
};

module.exports = {
  getValuesMatchingCondition: getValuesMatchingCondition,
  getUniqueValues: getUniqueValues,
};
