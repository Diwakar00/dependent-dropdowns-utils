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
exports.getOptionsBeforeClick = void 0;
var getOptionsAfterClick_1 = require("../getOptionsAfterClick");
var generalFunctions_1 = require("../utils/generalFunctions");
var getOptionsBeforeClick = function (optionsData, selectedOptions) {
    var dropdownOptions = {};
    var selectedOptionsCopy = __assign({}, selectedOptions);
    for (var key in selectedOptionsCopy) {
        if (selectedOptionsCopy[key] === null ||
            selectedOptionsCopy[key].length === 0) {
            dropdownOptions[key] = [];
            delete selectedOptionsCopy[key];
        }
    }
    (0, generalFunctions_1.getValuesMatchingCondition)(optionsData, selectedOptionsCopy, dropdownOptions);
    for (var key in dropdownOptions)
        dropdownOptions[key] = (0, generalFunctions_1.getUniqueValues)(dropdownOptions[key]);
    for (var key in selectedOptionsCopy)
        dropdownOptions[key] = (0, getOptionsAfterClick_1.getOptionsAfterClick)(optionsData, selectedOptionsCopy, key);
    return dropdownOptions;
};
exports.getOptionsBeforeClick = getOptionsBeforeClick;
