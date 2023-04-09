//👉 Write your tests below here:
import {test, expect} from "@jest/globals";
import {whichWife} from "./main.js";

test("should return 5 Katherine Howard Beheaded", () => {
const actual = whichWife(5);
const expected = "Wife number: 5, Wife name: Katherine Howard, Wife fate: Beheaded";
expect(actual),toBe(expected);
});

test("should return 2 Anne Boleyn Beheaded", () => {
    const actual = whichWife(2);
    const expected = "Wife number: 2, Wife name: Anne Boleyn, Wife fate: Beheaded";
    expect(actual),toBe(expected);
    });

test("should return 3 Jane Seymour Died", () => {
    const actual = whichWife(3);
    const expected = "Wife number: 3, Wife name: Jane Seymour, Wife fate: Died";
    expect(actual),toBe(expected);
    });

test("should return 4 Anne of Cleves Divorced", () => {
    const actual = whichWife(4);
    const expected = "Wife number: 4, Wife name: Anne of Cleves, Wife fate: Divorced";
    expect(actual),toBe(expected);
    });

test("should return 6 Katherine Parr Survived", () => {
    const actual = whichWife(6);
    const expected = "Wife number: 6, Wife name: Katherine Parr, Wife fate: Survived";
    expect(actual),toBe(expected);
    });

test("should return 1 Catherine of Aragon Divorced", () => {
    const actual = whichWife(1);
    const expected = "Wife number: 1, Wife name: Catherine of Aragon, Wife fate: Divorced";
    expect(actual),toBe(expected);
    });

test("should return Try again 1-6 only"), () => {
    const actual = whichWife(18);
    const expected = "Not a number between 1-6, try again";
    expect(actual).toBe(expected);
}