import { combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";
export function fromTemplateStrings(strings: TemplateStringsArray, ...keys: any[]) {
    const observables: Array<Observable<any>> = [];
    const observablesIndexes: { [index: number]: number } = {};
    keys.map((key, index) => {
        if (typeof (key.subscribe) === "function") {
            const existing = observables.indexOf(key);
            let observableIndex;
            if (existing === -1) {
                observables.push(key);
                observableIndex = observables.length - 1;
            } else {
                observableIndex = existing;
            }
            observablesIndexes[index] = observableIndex;
        }
    });
    return combineLatest(observables).pipe(map((observablesValues) => {
        const newKeys = keys.map((key, index) => {
            if (typeof (observablesIndexes[index]) !== "undefined") {
                return observablesValues[observablesIndexes[index]];
            }
            return key;
        });
        return String.raw(strings, ...newKeys);
    }));
}
export const t = fromTemplateStrings;
