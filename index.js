// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
    this
  }
  
  deliveries () {
    return store.deliveries.filter(delivery => {
      return delivery.neighborhoodId === this.id;
    });
  }
  
  meals() {
    
  }
}

let customerID = 0;

class Customer {
  constructor(name, neighborhood) {
    this.name = name;
    this.neighborhoodId = neighborhood;
    this.id = ++customerID;
  }
}