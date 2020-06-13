import React from 'react';
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

const errorCount = 1;

describe(`WelcomeScreen`, () => {
  it(`should render WelcomeScreen with 1 error count`, () => {
    const tree = renderer.create(
        <WelcomeScreen
          errorCount={errorCount}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
