import { generateId } from "../utils/GenerateId.js"

export class House {
    constructor(data) {
        this.id = generateId()
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.img1URl = data.img1URl
        this.img2URl = data.img2URl
        this.img3URL = data.img3URL
    }

    get cardHTMLTemplate() {
        return `
        <div class="col-12 mb-3">
          <div class="house-card shadow" ">
            <div class="row">
              <div class="col-12 col-md-4 ">
                <img class="img-fluid bg-dark" src="${this.imgUrl}" alt="${this.name}">
                   <img class="img-fluid bg-dark" src="${this.img1URl}" alt="${this.name}">
                <img class="img-fluid bg-dark" src="${this.img2URl}" alt="${this.name}">
              </div>
              <div class="col-12 col-md-8">
                <div class="p-3">
                  <h2>${this.year} ${this.name}</h2>
                  <h2>$${this.price}</h2>
                  <h3>Listed on ${this.formattedListedDate} at ${this.formattedListedTime}</h3>
                  <h3>${this.sqft} Sqrt</h3>
                  <h4>Runs on ${this.bathrooms} ${this.bathrooms}</h4>
                  <p>${this.description}</p>
                  <div class="text-end">
                    <button onclick="app.CarsController.destroyCar('${this.id}')" class="btn btn-outline-danger" type="button">Delete Car</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
    }













    get houseHTMLTemplate() {
        return `
        <div class="col-12 mb-3">
        <div class="car-card shadow">
          <div class="row">
            <div class="col-12 col-md-7 ">
             ${this.ImageCarousel}
            </div>
            <div class="col-12 col-md-5">
              <div class="p-3">
                <h2>${this.year} ${this.name} </h2>
                <h2>$${this.price}</h2>
                <h3>${this.sqft} Sqrt</h3>
                <p>${this.description}</p>
                <h5>
                </h5>
                <div class="text-end">
                  <button class="btn btn-success" type="button">Notify Seller</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    }



    get ImageCarousel() {
        return `
        <div id="Carausel-${this.id}" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#Carausel-${this.id}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#Carausel-${this.id}" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#Carausel-${this.id}" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#Carausel-${this.id}" data-bs-slide-to="3" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src=" ${this.imgUrl}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${this.img1URl}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${this.img2URl}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${this.img3URL}" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#Carausel-${this.id}" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#Carausel-${this.id}" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    `
    }



}