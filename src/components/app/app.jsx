import React from 'react';
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";

const welcomeButtonHandler = () => {};

const App = (props) => {
  const {errorCount} = props;

  return <WelcomeScreen
    errorCount={errorCount}
    onWelcomeButtonClick={welcomeButtonHandler}
  />;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired
};

export default App;
