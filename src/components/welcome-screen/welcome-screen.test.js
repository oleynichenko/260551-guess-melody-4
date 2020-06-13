import React from 'react';
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

const errorCount = 1;

describe(`WelcomeScreenComponent`, () => {
  it(`should render WelcomeScreen with 1 error count`, () => {
    const tree = renderer.create(
        <WelcomeScreen
          errorCount={errorCount}
          onWelcomeButtonClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
