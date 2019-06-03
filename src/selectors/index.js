import { createSelector } from "reselect";

export const idSelector = (_, ownProps) => ownProps.id;
export const cartSelector = state => state.cart;
export const restaurantsSelector = state => state.restaurants;
export const dishesSelector = state => state.dishes;
export const reviewsSelector = state => state.reviews;
export const usersSelector = state => state.users;

export const createDishSelector = () =>
  createSelector(
    dishesSelector,
    idSelector,
    (dishes, id) => {
      return dishes.find(dish => dish.id === id);
    }
  );

export const selectAllDishesAndTotalPrice = createSelector(
  cartSelector,
  dishesSelector,
  (cart, dishes) => {
    let totalPrice = 0;
    const allDishes = dishes.reduce((dishesInOrder, dish) => {
      const amount = cart[dish.id];
      if (amount) {
        const totalDishPrice = amount * dish.price;
        totalPrice += totalDishPrice;
        dishesInOrder.push({
          ...dish,
          amount,
          totalDishPrice
        });
      }
      return dishesInOrder;
    }, []);

    return {
      dishes: allDishes,
      totalPrice
    };
  }
);

export const restaurantSelector = createSelector(
  restaurantsSelector,
  idSelector,
  (restaurants, id) => {
    return restaurants.find(restaurant => restaurant.id === id);
  }
);

export const createUserSelector = () =>
  createSelector(
    usersSelector,
    idSelector,
    (users, id) => {
      return users.find(user => user.id === id);
    }
  );

export const createReviewsSelector = () =>
  createSelector(
    reviewsSelector,
    restaurantSelector,
    (reviews, restaurant) => {
      return restaurant.reviews.map(reviewId =>
        reviews.find(review => review.id === reviewId)
      );
    }
  );

export const createRatingSelector = () => {
  const reviewsSelector = createReviewsSelector();
  return createSelector(
    reviewsSelector,
    reviews => {
      const rawRating =
        reviews.reduce((acc, { rating }) => {
          return acc + rating;
        }, 0) / reviews.length;
      return Math.floor(rawRating * 2) / 2;
    }
  );
};
