import WelcomeScreen from "@components/welcome-screen/welcome-screen";

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
