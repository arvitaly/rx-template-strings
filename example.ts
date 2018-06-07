// tslint:disable no-console
import { BehaviorSubject } from "rxjs";
import { fromTemplateStrings } from ".";
const name = new BehaviorSubject("World");
const greeting = new BehaviorSubject("Hello");

// Non-unique observable will be processing only one time
fromTemplateStrings`${greeting}, ${name}-${name}!`
    .subscribe((value) => console.log(value));

name.next("John");
greeting.next("Goodbye");

/* Output
Hello, World-World!
Hello, John-John!
Goodbye, John-John!
*/
