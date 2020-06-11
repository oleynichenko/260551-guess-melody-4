import WelcomeScreen from "Components/welcome-screen/welcome-screen";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorCount} = props;

  return <WelcomeScreen
    errorCount={errorCount}
  />;
};

export default App;
