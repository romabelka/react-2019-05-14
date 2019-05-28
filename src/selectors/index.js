import { createSelector } from "reselect";

export const cartSelector = state => state.cart;
export const restaurantsSelector = state => state.restaurants;

export const selectAllDishesAndTotalPrice = createSelector(
  cartSelector,
  restaurantsSelector,
  (cart, restaurants) => {
    console.log("selectAllDishesAndTotalPrice");
    let totalPrice = 0;
    const allDishes = restaurants.reduce((dishes, restaurant) => {
      restaurant.menu.forEach(dish => {
        const amount = cart[dish.id];
        if (amount) {
          const totalDishPrice = amount * dish.price;
          totalPrice += totalDishPrice;
          dishes.push({
            ...dish,
            amount,
            totalDishPrice
          });
        }
      });
      return dishes;
    }, []);

    return {
      dishes: allDishes,
      totalPrice
    };
  }
);
