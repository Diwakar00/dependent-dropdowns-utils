# dependent-dropdowns-utils

Allows users to select multiple options from a dropdown list which are interdepenedent to each other. The available options in dropdowns are dynamically updated based on the values selected in all the dropdowns, creating a dependency relationship between the dropdowns.

dependent-dropdowns-utils provide a convenient way to handle complex data structures and allow users to select multiple options while ensuring that the available options in subsequent dropdowns are updated accordingly. They enhance the user experience by providing a more intuitive and streamlined interface, reducing manual input and potential errors.

By incorporating dependent-dropdowns-utils in your application, you can create a more interactive and efficient user interface for managing complex selections and dependencies, providing a better overall user experience.

## Introduction

This type of dropdown is commonly used when there is a hierarchical or dependent relationship between the options. For example, imagine a scenario where the dropdowns represents a list of regions, countries, cities and population, and the dropdowns should display the countries, cities and population corresponding to the selected region. As the user selects different regions, the options in the dropdowns should change to reflect the countries, cities and population associated with the selected region. Similarly the dropdowns should display the regions, countries, and population corresponding to the selected city.

-In this package we have two funtions "getOptionsAfterClick" and "getOptionsBeforeClick".
-Both functions retuns the options list based on values selected in dropdowns.
-The state which saves holds the selected dropdown values should have the same naming convention of the options data.
-This package works for both mutiselect and single select dropdowns.

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

here the state object property names are same as the property names in OptionsDataArray

## getOptionsAfterClick

getOptionsAfterClick will give the list of options for the dropdown on which user clicks on. getOptionsAfterClick will give list of options to a dropdown based on the values selected in other dropdowns.
This is the recomended function to use if your dropdown supports to get options list onClick of it, since it has less time complexity.

<h4>Note:</h4>
getOptionsAfterClick function should be called on click of dropdown whith dependency as options data array, selected options Object and property name of the data of which dropdown is displaying.

<h4>Example for getOptionsAfterClick</h4>

[Click here to see the Example](https://codesandbox.io/s/youthful-mountain-vh46nh?file=/demo.tsx)

## getOptionsBeforeClick

getOptionsBeforeClick will give the list of options for all the dropdown and displays it when user clicks on any dropdown and when user selcts any option from any dropdown getOptionsBeforeClick will return a new set of options list.

<h4>Note:</h4>
getOptionsBeforeClick function should be called inside a useEffect whith dependency as options data array and selected options Object.

<h4>Example for getOptionsBeforeClick</h4>

[Click here to see the Example](https://codesandbox.io/s/sleepy-austin-5gn4lf?file=/demo.tsx)
