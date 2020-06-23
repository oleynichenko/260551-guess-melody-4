import WelcomeScreen from "./welcome-screen";

describe(`WelcomeScreenComponent`, () => {
  it(`should `, function () {
    const onWelcomeButtonClick = jest.fn();
    const errorCount = 1;

    const welcomeScreen = Enzyme.shallow(
        <WelcomeScreen
          errorCount={errorCount}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);

    welcomeButton.props().onClick();

    expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
  });
});
