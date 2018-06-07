"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable no-console
const rxjs_1 = require("rxjs");
const _1 = require(".");
const name = new rxjs_1.BehaviorSubject("World");
const greeting = new rxjs_1.BehaviorSubject("Hello");
// Non-unique observable will be processing only one time
_1.fromTemplateStrings `${greeting}, ${name}-${name}!`
    .subscribe((value) => console.log(value));
name.next("John");
greeting.next("Goodbye");
/* Output
Hello, World-World!
Hello, John-John!
Goodbye, John-John!
*/
