"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const _1 = require(".");
describe("fromTemplateString tests", () => {
    it("hello, world", () => {
        const name = new rxjs_1.BehaviorSubject("World");
        const greeting = new rxjs_1.BehaviorSubject("Hello");
        const obs = _1.fromTemplateStrings `${greeting}, ${name}-${name}!`;
        const subcriber = jest.fn();
        obs.subscribe(subcriber);
        expect(subcriber.mock.calls.length).toBe(1);
        expect(subcriber.mock.calls[0][0]).toBe(`${greeting.getValue()}, ${name.getValue()}-${name.getValue()}!`);
        subcriber.mockClear();
        greeting.next("Goodbye");
        expect(subcriber.mock.calls.length).toBe(1);
        expect(subcriber.mock.calls[0][0]).toBe(`${greeting.getValue()}, ${name.getValue()}-${name.getValue()}!`);
    });
});
