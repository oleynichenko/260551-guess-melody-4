import WelcomeScreen from "@components/welcome-screen/welcome-screen";
import ArtistQuestionScreen from "@components/genre-question-screen/genre-question-screen";
import GenreQuestionScreen from "@components/question-artist-screen/question-artist-screen";
import {Switch, BrowserRouter, Route} from "react-router-dom";

const welcomeButtonHandler = () => {};

const App = (props) => {
  const {errorCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen
            errorCount={errorCount}
            onWelcomeButtonClick={welcomeButtonHandler}
          />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired
};

export default App;
