import WinScreen from "./win-screen.jsx";

describe(`WinScreen`, () => {
  describe(`should render with 3 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer
        .create(
            <WinScreen
              questionsCount={3}
              mistakesCount={0}
              onReplayButtonClick={() => {}}
            />
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer
        .create(
            <WinScreen
              questionsCount={3}
              mistakesCount={1}
              onReplayButtonClick={() => {}}
            />
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`should render with 2 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer
        .create(
            <WinScreen
              questionsCount={2}
              mistakesCount={0}
              onReplayButtonClick={() => {}}
            />
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer
        .create(
            <WinScreen
              questionsCount={2}
              mistakesCount={1}
              onReplayButtonClick={() => {}}
            />
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
