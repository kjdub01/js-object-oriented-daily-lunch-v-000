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
  
  customers() {
    return store.customers.filter(customer => customer.neighborhoodId === this.id);
    }
 
 meals() {
    const allMeals = this.customers().map(customer => customer.meals());
    const merged = [].concat.apply([], allMeals);
    return [...new Set(merged)];
  } 
}

let customerId = 0;

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    this.id = customerId++;
    store.customers.push(this);
  }
  
  deliveries() {
    return store.deliveries.filter(delivery => delivery.customerId === this.id);
  }
  
  meals() {
    return this.deliveries().map(delivery => delivery.meal());
  }
  
  totalSpent() {
    return this.meals().reduce((total, meal) => (total += meal.price), 0);
  }
}

let mealId = 0;

class Meal {
  constructor(title, price = 0) {
    this.title = title;
    this.price = price;
    this.id = mealId++;
    store.meals.push(this);
  }
  
  deliveries() {
    return store.deliveries.filter(delivery => delivery.mealId === this.id);
  }
  
  customers() {
    const allCustomers = this.deliveries().map(delivery => delivery.customer());
    return [...new Set(allCustomers)];
  }

  static byPrice() {
      return store.meals.sort((a, b) => a.price < b.price);
  }
}

let deliveryId = 0;

class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    this.id = deliveryId++;
    store.deliveries.push(this)
  }
  
  meal() {
    store.meals.find(meal => )
  }
}
