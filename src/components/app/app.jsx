import WelcomeScreen from "Components/welcome-screen/welcome-screen";
import PropTypes from "prop-types";

const App = (props) => {
  const {errorCount} = props;

  return <WelcomeScreen
    errorCount={errorCount}
  />;
};

App.propTypes = {
  errorCount: PropTypes.string.isRequired
};

export default App;
