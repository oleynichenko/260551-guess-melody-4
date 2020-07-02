import {GameScreen} from "./game-screen.jsx";
import {GameType} from "../../constants.js";

const children = <div className="children-component" />;

describe(`GameScreen`, () => {
  it(`should render with type GameType.ARTIST`, () => {
    const tree = renderer.create(
        <GameScreen
          type={GameType.ARTIST}
          mistakes={0}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render with type GameType.GENRE`, () => {
    const tree = renderer.create(
        <GameScreen
          type={GameType.GENRE}
          mistakes={2}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
