import App from "./app";

const errorCount = 1;

describe(`AppComponent`, () => {
  it(`should render App`, () => {
    const tree = renderer.create(
        <App
          errorCount={errorCount}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
