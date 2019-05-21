// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = neighborhoodId++;
    store.neighborhoods.push(this);
  }
  
  deliveries() { 
    return store.deliveries.filter(delivery => delivery.neighborhoodId === this.id);
  }
  
  meals() {
    
  }
}

let customerId = 0;

class Customer {
  constructor(name, neighborhood) {
    this.name = name;
    this.neighborhoodId = neighborhood;
    this.id = ++customerId;
    store.customers.push(this);
  }
  
  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.customerId === this.id;
    });
  }
  
  meals() {
    return store.meals.filter(meal => {
      return meal.customerId === this.id;
    });
  }
  
  totalSpent() {
    
  }
}

let mealId = 0;

class Meal {
  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    store.meals.push(this);
  }
  
  deliveries() {
    return store.meals.filter(meal => {
      return deliveries.mealId === this.id;
    });
  }
  
  customers() {
    return store.meals.filter(meal => {
      return 
    })
  }
}
