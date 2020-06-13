import React from 'react';
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";

const App = (props) => {
  const {errorCount} = props;

  return <WelcomeScreen
    errorCount={errorCount}
  />;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired
};

export default App;
