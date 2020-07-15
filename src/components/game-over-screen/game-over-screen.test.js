import GameOverScreen from "./game-over-screen.jsx";
import {Router} from "react-router-dom";
import history from "../../history";

it(`should GameOverScreen render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <GameOverScreen
            onReplayButtonClick={() => {}}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
