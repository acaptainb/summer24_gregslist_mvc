import { CarsController } from "./controllers/CarsController.js";
import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '', //http://localhost:8080
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/about',  //http://localhost:8080/#/about
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/cars',  //http://localhost:8080/#/cars
    controllers: [CarsController],
    view: 'app/views/CarsView.html'
  },
  {
    path: '#/houses',  //http://localhost:8080/#/houses
    controllers: [HousesController],
    view: 'app/views/HousesView.html'
  }
])