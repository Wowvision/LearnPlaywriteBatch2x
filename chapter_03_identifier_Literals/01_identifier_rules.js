// ============================================================
// JAVASCRIPT IDENTIFIER RULES — All examples in one file
// ============================================================

// 1. CAN start with: letter, underscore _, dollar sign $
let name = "John";
let _private = "secret";
let $money = 100;
let userName = "john_doe";    // camelCase (convention)

// 2. CAN contain: letters, digits, _, $
let item2 = "second";
let my_name = "Alice";
let $dollar$ = "cash";

// 3. CANNOT start with a digit
// let 1name = "bad";    // ❌ SyntaxError

// 4. CANNOT be a reserved keyword
// let let = "bad";      // ❌ SyntaxError
// let const = "bad";    // ❌ SyntaxError
// let class = "bad";    // ❌ SyntaxError

// 5. Case-sensitive
let city = "New York";
let City = "Los Angeles";
let CITY = "Chicago";
console.log(city, City, CITY); // New York Los Angeles Chicago

// 6. Unicode letters allowed
let nombre = "José";
let 姓名 = "张三";
let café = "coffee";
console.log(nombre, 姓名, café);

// 7. Dollar sign is just a regular character (not special)
let $ = "dollar";
let $$ = "double";
let $valid = true;

// 8. Underscore alone is allowed (common in loops)
let _ = "underscore";
let _unused = null;

// 9. Naming conventions (not enforced, just conventions)
let camelCase = "variables & functions";     // camelCase
let PascalCase = "classes & constructors";   // PascalCase
const UPPER_SNAKE = "constants";            // UPPER_SNAKE_CASE

// 10. typeof still works because it's a keyword, not an identifier
console.log(typeof 42); // "number"

// ============================================================
// SUMMARY TABLE (as comments):
// Valid:     name, _tmp, $id, user2, 姓名, café
// Invalid:   2fast, my-var, my var, class, let
// ============================================================
