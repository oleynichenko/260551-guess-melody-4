import GameOverScreen from "./game-over-screen.jsx";

it(`should GameOverScreen render correctly`, () => {
  const tree = renderer
    .create(
        <GameOverScreen
          onReplayButtonClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
