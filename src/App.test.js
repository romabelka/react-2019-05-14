import React from "react";
import App from "./App";
import { restaurants } from "./fixtures";
import { mount } from "enzyme";

describe("App at start", () => {
  it("should not crash", () => {
    mount(<App restaurants={restaurants} />);
  });
});
