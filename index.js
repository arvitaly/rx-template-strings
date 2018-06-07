"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function fromTemplateStrings(strings, ...keys) {
    const observables = [];
    const observablesIndexes = {};
    keys.map((key, index) => {
        if (typeof (key.subscribe) === "function") {
            const existing = observables.indexOf(key);
            let observableIndex;
            if (existing === -1) {
                observables.push(key);
                observableIndex = observables.length - 1;
            }
            else {
                observableIndex = existing;
            }
            observablesIndexes[index] = observableIndex;
        }
    });
    return rxjs_1.combineLatest(observables).pipe(operators_1.map((observablesValues) => {
        const newKeys = keys.map((key, index) => {
            if (typeof (observablesIndexes[index]) !== "undefined") {
                return observablesValues[observablesIndexes[index]];
            }
            return key;
        });
        return String.raw(strings, ...newKeys);
    }));
}
exports.fromTemplateStrings = fromTemplateStrings;
exports.t = fromTemplateStrings;
