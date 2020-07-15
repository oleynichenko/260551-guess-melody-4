import {GameScreen} from "./game-screen.jsx";
import {GameType} from "../../constants";
import history from "../../history";
import {Router} from "react-router-dom";

const noop = () => {};
const children = <div className="children-component" />;

describe(`GameScreen`, () => {
  it(`should render with type GameType.ARTIST`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <GameScreen
            type={GameType.ARTIST}
            mistakes={0}
            goToWelcome={noop}
          >
            {children}
          </GameScreen>
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with type GameType.GENRE`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <GameScreen
            type={GameType.GENRE}
            mistakes={2}
            goToWelcome={noop}
          >
            {children}
          </GameScreen>
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
