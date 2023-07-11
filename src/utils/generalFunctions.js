"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueValues = exports.getValuesMatchingCondition = void 0;
var getValuesMatchingCondition = function (arr, selectedValuesObj, dropdownOptions) {
    arr.forEach(function (obj) {
        var flag = true;
        for (var key in selectedValuesObj) {
            if (!selectedValuesObj[key].includes(obj[key])) {
                flag = false;
                break;
            }
        }
        if (flag) {
            for (var key in dropdownOptions) {
                !!obj[key] && dropdownOptions[key].push(obj[key]);
            }
        }
    });
};
exports.getValuesMatchingCondition = getValuesMatchingCondition;
var getUniqueValues = function (arr) {
    return Array.from(new Set(arr));
};
exports.getUniqueValues = getUniqueValues;
