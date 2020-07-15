import {Switch, Router, Route} from "react-router-dom";
import {connect} from "react-redux";
import WelcomeScreen from "@components/welcome-screen/welcome-screen";
import GenreQuestionScreen from "@components/genre-question-screen/genre-question-screen";
import GameOverScreen from "@components/game-over-screen/game-over-screen";
import WinScreen from "@components/win-screen/win-screen.jsx";
import QuestionArtistScreen from "@components/question-artist-screen/question-artist-screen";
import GameScreen from "@components/game-screen/game-screen";
import withActivePlayer from "@hocs/with-active-player/with-active-player";
import {AppRoute, GameType} from "../../constants";
import {ActionCreator} from "../../reducer/game/game";
import withUserAnswer from "@hocs/with-user-answer/with-user-answer";
import {getStep, getMistakes, getMaxMistakes} from "../../reducer/game/selectors";
import {getQuestions} from "../../reducer/data/selectors";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {Operation as UserOperation} from "../../reducer/user/user";
import {AuthorizationStatus} from "../../reducer/user/user";
import AuthScreen from "@components/auth-screen/auth-screen";
import PrivateRoute from "../private-route/private-route";
import history from "../../history";

const GenreQuestionScreenWrapped = withActivePlayer(withUserAnswer(GenreQuestionScreen));
const QuestionArtistScreenWrapped = withActivePlayer(QuestionArtistScreen);

const App = (props) => {
  const {
    authorizationStatus,
    maxMistakes,
    mistakes,
    questions,
    onUserAnswer,
    onWelcomeButtonClick,
    step,
    login,
    resetGame
  } = props;

  const _renderGameScreen = () => {

    const question = questions[step];

    if (step === -1) {
      return (
        <WelcomeScreen
          errorCount={maxMistakes}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
      );
    }

    if (mistakes >= maxMistakes) {
      return history.push(AppRoute.LOSE);
    }

    if (step >= questions.length) {
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        return history.push(AppRoute.RESULT);
      } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        return history.push(AppRoute.LOGIN);
      }

      return null;
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen type={question.type}>
              <QuestionArtistScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );

        case GameType.GENRE:
          return (
            <GameScreen type={question.type}>
              <GenreQuestionScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
      }
    }

    return null;
  };

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          {_renderGameScreen()}
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <AuthScreen
            onReplayButtonClick={resetGame}
            onSubmit={login}
          />
        </Route>
        <Route exact path={AppRoute.LOSE}>
          <GameOverScreen
            onReplayButtonClick={resetGame}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.RESULT}
          render={() => {
            return (
              <WinScreen
                questionsCount={questions.length}
                mistakesCount={mistakes}
                onReplayButtonClick={resetGame}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  step: getStep(state),
  maxMistakes: getMaxMistakes(state),
  questions: getQuestions(state),
  mistakes: getMistakes(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementMistake(question, answer));
    dispatch(ActionCreator.incrementStep());
  },
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
