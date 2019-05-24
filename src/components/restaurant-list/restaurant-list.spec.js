import React from "react";
import { restaurants } from "../../fixtures";
import { mount } from "enzyme";
import RestaurantList from "./restaurant-list";

const firstRestaurantId = restaurants[0].id;

describe("when show RestaurantList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<RestaurantList restaurants={restaurants} />);
  });

  describe("when click on Open menu in Restaurant", () => {
    beforeEach(() => {
      wrapper
        .find(`button[data-automation-id="toggle-menu-${firstRestaurantId}"]`)
        .simulate("click");
    });

    it("should open menu", () => {
      expect(wrapper.find('[data-automation-id="menu"]').length).toEqual(1);
    });
  });

  describe("when click on Open reviews in Restaurant", () => {
    beforeEach(() => {
      wrapper
        .find(
          `button[data-automation-id="toggle-review-list-${firstRestaurantId}"]`
        )
        .simulate("click");
    });

    it("should open menu", () => {
      expect(
        wrapper.find('.ant-list[data-automation-id="review-list"]').length
      ).toEqual(1);
    });
  });
});

describe("when show RestaurantList with fetchData provided", () => {
  it("shout fetch data", done => {
    const fetchData = () => done();
    mount(<RestaurantList restaurants={restaurants} fetchData={fetchData} />);
  });
});
