import { createSelector } from "reselect";

export const idSelector = (_, ownProps) => ownProps.id;
export const cartMapSelector = state => state.cart;
export const restaurantsListSelector = ({ restaurants }) =>
  restaurants.get("entities");
export const dishesMapSelector = state => state.dishes.entities;
export const reviewsMapSelector = state => state.reviews.entities;
export const usersMapSelector = state => state.users.entities;

export const restaurantsLoadingSelector = state =>
  state.restaurants.get("loading");
export const restaurantsLoadedSelector = state =>
  state.restaurants.get("loaded");

export const reviewsLoadingSelector = state => state.reviews.get("loading");

export const reviewsLoadedSelector = state => state.reviews.loaded;

export const usersLoadingSelector = state => state.users.loading;
export const usersLoadedSelector = state => state.users.loaded;

export const dishesLoadingSelector = state => state.dishes.loading;
export const dishesLoadedSelector = state => state.dishes.loaded;

export const cartSelector = createSelector(
  cartMapSelector,
  cartMap => cartMap.toJS()
);

export const cartAmountSelector = createSelector(
  cartSelector,
  cart => Object.values(cart).reduce((total, dishes) => total + dishes, 0)
);

export const restaurantsSelector = createSelector(
  restaurantsListSelector,
  restaurantsList => restaurantsList.toJS()
);

export const reviewsArraySelector = createSelector(
  reviewsMapSelector,
  reviewsMap => {
    return reviewsMap.valueSeq().toArray();
  }
);

export const dishesArraySelector = createSelector(
  dishesMapSelector,
  dishesMap => {
    return dishesMap.valueSeq().toArray();
  }
);

export const usersSelector = createSelector(
  usersMapSelector,
  usersMap => {
    return usersMap.valueSeq().toArray();
  }
);

export const dishesSelector = createSelector(
  dishesMapSelector,
  dishesMap => {
    return dishesMap.valueSeq().toArray();
  }
);

export const createDishSelector = () =>
  createSelector(
    dishesMapSelector,
    idSelector,
    (dishesMap, id) => {
      return dishesMap.get(id);
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
    usersMapSelector,
    idSelector,
    (usersMap, id) => {
      return usersMap.get(id);
    }
  );

export const createReviewsSelector = () =>
  createSelector(
    reviewsArraySelector,
    restaurantSelector,
    (reviews, restaurant) => {
      return restaurant.reviews
        .map(reviewId => reviews.find(review => review.id === reviewId))
        .filter(Boolean);
    }
  );

export const createDishesSelector = () =>
  createSelector(
    dishesMapSelector,
    restaurantSelector,
    (dishesMap, restaurant) => {
      return restaurant.menu
        .map(dishId => dishesMap.get(dishId))
        .filter(Boolean);
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
