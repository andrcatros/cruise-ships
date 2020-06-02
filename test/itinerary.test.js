const Itinerary = require('../src/itinerary.js')

describe("Itinerary", () => {
    test("returns a new Itinerary object", () => {
    expect(new Itinerary).toBeInstanceOf(Object)});
})

describe("Itinerary", () => {
    const testItinerary = new Itinerary();
    test("returns an Itinerary object's ports property", () => {
        expect(testItinerary).toHaveProperty('ports');
    })
})