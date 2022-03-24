import React from "react";
const TestRenderer = require("react-test-renderer");

import Controls from "./Controls";

it("renders when there are no items", () => {
  const tree = TestRenderer.create(<Controls />).toJSON();
  expect(tree).toMatchSnapshot();
});
