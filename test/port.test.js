const Port = require('../src/port.js')

describe("Port", () => {
    const Singapore = new Port('Singapore')
    test("returns a new Port object with the property 'name'", () => {
        expect(new Port('Dover')).toBeInstanceOf(Object)
        expect(Singapore.name).toBe('Singapore');
    })
})
