const Ship = require('../src/ship.js')

describe("Ship", () => {
    test("returns a new Ship object", () => {
    expect(new Ship('Sinking')).toBeInstanceOf(Object)});})

describe("Ship.startingPoint", () => {
    test("returns the value of the startingPort property", () =>{
        expect(new Ship('Sinking')).toHaveProperty('startingPort')
    })
})


