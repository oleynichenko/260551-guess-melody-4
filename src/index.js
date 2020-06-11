import ReactDOM from 'react-dom';
import App from "Components/app/app";

const init = () => {
  const settings = {
    errorCount: 3,
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
      />,
      document.querySelector(`#root`)
  );
};

init();
