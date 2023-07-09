const getOptions = (optionsData, selectedOptions, dropdown) => {
  const dropdownOptions = [];
  const selectedOptCopy = { ...selectedOptions };

  for (const key in selectedOptCopy) {
    if (selectedOptCopy[key] === null || selectedOptCopy[key].length === 0)
      delete selectedOptCopy[key];
  }
  delete selectedOptCopy[dropdown];

  optionsData.forEach((obj) => {
    let flag = true;
    for (const key in selectedOptCopy) {
      if (!selectedOptCopy[key].includes(obj[key])) {
        flag = false;
        break;
      }
    }
    if (flag && !!obj[dropdown]) dropdownOptions.push(obj[dropdown]);
  });

  return [...new Set(dropdownOptions)];
};

export default getOptions;
