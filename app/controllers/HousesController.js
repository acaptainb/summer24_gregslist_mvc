import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

export class HousesController {
    constructor() {
        console.log("house controller is working");
        this.drawHouses()
    }

    drawHouses() {
        const houses = AppState.houses
        let innerHTMLString = ''
        houses.forEach((house) => innerHTMLString += house.houseHTMLTemplate)
        setHTML('houseListing', innerHTMLString)
    }


    createHouse() {
        event.preventDefault()
        console.log('creating car');
        const form = event.target
        const carData = getFormData(form)
        carsService.createCar(carData)

    }




}