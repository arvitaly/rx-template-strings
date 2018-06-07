import { BehaviorSubject } from "rxjs";
import { fromTemplateStrings } from ".";

describe("fromTemplateString tests", () => {
    it("hello, world", () => {
        const name = new BehaviorSubject("World");
        const greeting = new BehaviorSubject("Hello");
        const obs = fromTemplateStrings`${greeting}, ${name}-${name}!`;
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
