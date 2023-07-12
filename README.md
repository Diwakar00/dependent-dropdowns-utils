# dependent-dropdowns-utils

Allows users to select multiple options from a dropdown list which are interdependent to each other. The available options in drop-downs are dynamically updated based on the values selected in all the drop-downs, creating a dependency relationship between the drop-downs.

dependent-dropdowns-utils provide a convenient way to handle complex data structures and allow users to select multiple options while ensuring that the available options in subsequent drop-downs are updated accordingly. They enhance the user experience by providing a more intuitive and streamlined interface, reducing manual input and potential errors.

By incorporating dependent-dropdowns-utils in your application, you can create a more interactive and efficient user interface for managing complex selections and dependencies, providing a better overall user experience.

## Introduction

This type of dropdown is commonly used when there is a hierarchical or dependent relationship between the options. For example, imagine a scenario where the drop-downs represents a list of regions, countries, cities and population, and the drop-downs should display the countries, cities and population corresponding to the selected region. As the user selects different regions, the options in the drop-downs should change to reflect the countries, cities and populations associated with the selected region. Similarly, the drop-downs should display the regions, countries, and populations corresponding to the selected city.

## Overview

<b>-This package has two functions <i>"getOptionsAfterClick"</i> and <i>"getOptionsBeforeClick"</i>.<br>
-Both functions return the options list based on values selected in drop-downs.<br>
-The state that saves the selected dropdown values should have the same naming convention as the options data.<br>
-This package works for both multi-select and single-select drop-downs</b>

<h5>Example</h5>

```js
const [selectedOptions, setSelectedOptions] = React.useState({
  region: [],
  country: [],
  city: [],
  population: null, //null is for single select dropdowns,
});

const OptionsDataArray = [
  { region: "a", country: "a1", city: "a11", population: "10" },
  { region: "a", country: "a1", city: "a12", population: "20" },
  { region: "a", country: "a1", city: "a13", population: "10" },
  { region: "a", country: "a2", city: "a21", population: "10" },
  { region: "a", country: "a2", city: "a22", population: "20" },
  { region: "a", country: "a2", city: "a23", population: "10" },
  { region: "b", country: "b1", city: "b11", population: "10" },
  { region: "b", country: "b1", city: "b12", population: "20" },
  { region: "b", country: "b1", city: "b13", population: "20" },
  { region: "b", country: "b2", city: "b21", population: "10" },
  { region: "b", country: "b2", city: "b22", population: "10" },
  { region: "b", country: "b2", city: "b23", population: "20" },
];
```

here the state object property names are the same as the property names in OptionsDataArray

## getOptionsAfterClick

getOptionsAfterClick will give the list of options for the dropdown on which the user clicks, Also it will give a list of options to a dropdown based on the values selected in other drop-downs.<br>
This is the recommended function to use if your dropdown supports getting an options list on click of it since it has less time complexity.

<h4>Note:</h4>
getOptionsAfterClick function should be called on click of dropdown with dependency as options data array, selected options Object and property name of the data of which dropdown is displaying.

### [Click here to see the Example](https://codesandbox.io/s/youthful-mountain-vh46nh?file=/demo.tsx)

## getOptionsBeforeClick

getOptionsBeforeClick will give the list of options for all the dropdowns and display it when the user clicks on any dropdown or selects any option from any dropdown, returning a new set of options list.

<h4>Note:</h4>
getOptionsBeforeClick function should be called inside a useEffect with dependency as options data array and selected options Object.

### [Click here to see the Example](https://codesandbox.io/s/sleepy-austin-5gn4lf?file=/demo.tsx)
