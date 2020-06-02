const Ship = require('../src/ship.js')
const Port = require('../src/port.js')
const Itinerary = require('../src/itinerary.js')


describe("Ship", () => {
    const coldItinerary = new Itinerary(['Copenhagen', 'Antarctica'])
    const sinking = new Ship(coldItinerary)
    test("returns a new Ship object", () => {
        expect(sinking).toBeInstanceOf(Object);
        })
    ;})

describe("Ship.startingPoint", () => {
    const coldItinerary = new Itinerary(['Copenhagen', 'Antarctica'])
    test("returns the value of the startingPort property", () => {
        expect(new Ship(coldItinerary)).toHaveProperty('startingPort');
        expect(new Ship(coldItinerary)).toHaveProperty('currentPort');
    })
})

describe("Ship.setSail()", () => {
    const coldItinerary = new Itinerary(['Copenhagen', 'Antarctica'])
    const sinking = new Ship(coldItinerary);
    sinking.setSail();
    test("sets out on Ship object's itinerary", () => {
        expect(sinking.currentPort).toBeFalsy;
        expect(sinking.previousPort).toBe('Copenhagen');
    });
})

describe("Ship.setSail()", () => {
    const coldItinerary = new Itinerary(['Copenhagen', 'Antarctica'])
    const sinking = new Ship(coldItinerary);
    sinking.setSail();
    sinking.dock();
    test("throw Error if the last port of the itinerary has already been reached", () => {
        expect(() => sinking.setSail()).toThrowError(new Error('End of itinerary reached.'))
    });
});

describe("Ship.dock()", () => {
    const hotItinerary = new Itinerary(['Singapore', 'Fremantle']);
    const sinking = new Ship(hotItinerary);
    sinking.setSail();
    sinking.dock();
    test("changes a Ship object's current Port property to the next port in the itinerary", () => {
        expect(sinking.currentPort).toBe(hotItinerary.ports[1]);
    });
})

