/**
 * @fileoverview Tests for no-dupe-keys rule.
 * @author Ian Christian Myers
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("../../../../lib/tests/eslintTester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.add("no-dupe-keys", {
    valid: [
        "var foo = { __proto__: 1, two: 2};",
        "var x = { foo: 1, bar: 2 };"
    ],
    invalid: [
        { code: "var x = { y: 1, y: 2 };", errors: [{ message: "Duplicate key 'y'.", type: "ObjectExpression"}] },
        { code: "var foo = { 0x1: 1, 1: 2};", errors: [{ message: "Duplicate key '1'.", type: "ObjectExpression"}] },
        { code: "var x = { \"z\": 1, z: 2 };", errors: [{ message: "Duplicate key 'z'.", type: "ObjectExpression"}] }
    ]
});
