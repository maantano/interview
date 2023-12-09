class Kitchen {
  constructor() {}
  cookBurger() {
    console.log("Cooking burger");
  }
  cookSide() {
    console.log("Cooking side dishes");
  }
  prepareDrinks() {
    console.log("preparing drinks");
  }
}

class FoodService {
  serve() {
    console.log("Order ready , serving food now");
  }
}

class RestaurantFacade {
  newOrder() {
    const kitchen = new Kitchen();

    kitchen.cookBurger();
    kitchen.cookSide();
    kitchen.prepareDrinks();

    const foodService = new FoodService();
    return foodService.serve();
  }
}

const order = new RestaurantFacade();

order.newOrder();
