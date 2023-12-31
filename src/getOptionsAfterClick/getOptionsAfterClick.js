"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptionsAfterClick = void 0;
var generalFunctions_1 = require("../utils/generalFunctions");
var getOptionsAfterClick = function (optionsData, selectedOptions, currentDropdown) {
    var dropdownOptions = {};
    var selectedOptionsCopy = __assign({}, selectedOptions);
    for (var key in selectedOptionsCopy) {
        if (selectedOptionsCopy[key] === null ||
            selectedOptionsCopy[key].length === 0)
            delete selectedOptionsCopy[key];
    }
    dropdownOptions[currentDropdown] = [];
    delete selectedOptionsCopy[currentDropdown];
    (0, generalFunctions_1.getValuesMatchingCondition)(optionsData, selectedOptionsCopy, dropdownOptions);
    return (0, generalFunctions_1.getUniqueValues)(dropdownOptions[currentDropdown]);
};
exports.getOptionsAfterClick = getOptionsAfterClick;
