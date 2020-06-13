import React from 'react';
import renderer from "react-test-renderer";
import App from "./app";

const errorCount = 1;

describe(`App`, () => {
  it(`should render App`, () => {
    const tree = renderer.create(
        <App
          errorCount={errorCount}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
