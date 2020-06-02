
const Port = require('../src/port.js')
const Itinerary = require('../src/itinerary.js')

class Ship { 
    constructor(itinerary){
        if (itinerary.ports.length < 2){
            throw new Error('Itineraries must contain 2 or more ports')
        }
        else {
            this.internalItinerary = itinerary.ports
            this.startingPort = this.internalItinerary[0];
            this.currentPort = this.startingPort;
            this.previousPort = null;
            this.nextPort = null;
        }
 
    };

    setSail(){
        // throw error if current port is the last port in itinerary
        if (this.internalItinerary.indexOf(this.currentPort) === this.internalItinerary.length - 1){
            throw new Error('End of itinerary reached.')
        }
        // otherwise move ship to next port in the itinerary
        else {
            this.previousPort = this.currentPort;  
            this.nextPort = this.internalItinerary[this.internalItinerary.indexOf(this.currentPort)+1]
            this.currentPort = null; 
        } 
    };

    dock(){
        // throw error if current port is the last port in itinerary
        if (!this.nextPort){
            throw new Error('End of itinerary reached.')
        }
        else {
            this.currentPort = this.nextPort;
        }
        
    }
};





module.exports = Ship 