import {App} from "./app";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore([]);

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `https://api.adorable.io/avatars/128/1`,
      artist: `John Snow`,
    }, {
      picture: `https://api.adorable.io/avatars/128/2`,
      artist: `Jack Daniels`,
    }, {
      picture: `https://api.adorable.io/avatars/128/3`,
      artist: `Jim Beam`,
    }],
  },
];

describe(`AppComponent`, () => {
  it(`should render WelcomeScreen`, () => {
    const store = mockStore({
      mistakes: 0,
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App
            maxMistakes={3}
            mistakes={0}
            questions={questions}
            onUserAnswer={() => {}}
            onWelcomeButtonClick={() => {}}
            resetGame={() => {}}
            step={-1}
          />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render GenreQuestionScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              maxMistakes={3}
              mistakes={0}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              resetGame={() => {}}
              step={0}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render ArtistQuestionScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              maxMistakes={3}
              mistakes={0}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              resetGame={() => {}}
              step={1}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render GameOverScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              maxMistakes={3}
              mistakes={3}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              resetGame={() => {}}
              step={1}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render WinScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3,
      },
    });

    const tree = renderer
        .create(
            <Provider store={store}>
              <App
                maxMistakes={3}
                mistakes={0}
                questions={questions}
                onUserAnswer={() => {}}
                onWelcomeButtonClick={() => {}}
                resetGame={() => {}}
                step={3}
              />
            </Provider>, {
              createNodeMock: () => {
                return {};
              }
            }
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
