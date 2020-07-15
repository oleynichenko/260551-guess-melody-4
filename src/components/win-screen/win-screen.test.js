import WinScreen from "./win-screen.jsx";
import {Router} from "react-router-dom";
import history from "../../history";

describe(`WinScreen`, () => {
  describe(`should render with 3 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer
        .create(
            <Router history={history}>
              <WinScreen
                questionsCount={3}
                mistakesCount={0}
                onReplayButtonClick={() => {}}
              />
            </Router>
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer
        .create(
            <Router history={history}>
              <WinScreen
                questionsCount={3}
                mistakesCount={1}
                onReplayButtonClick={() => {}}
              />
            </Router>
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`should render with 2 questions`, () => {
    it(`With 0 mistake`, () => {
      const tree = renderer
        .create(
            <Router history={history}>
              <WinScreen
                questionsCount={2}
                mistakesCount={0}
                onReplayButtonClick={() => {}}
              />
            </Router>
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it(`With 1 mistake`, () => {
      const tree = renderer
        .create(
            <Router history={history}>
              <WinScreen
                questionsCount={2}
                mistakesCount={1}
                onReplayButtonClick={() => {}}
              />
            </Router>
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
