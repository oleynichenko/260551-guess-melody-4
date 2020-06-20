import ReactDOM from 'react-dom';
import App from "@components/app/app";
import AppSettings from "./mocks/settings";
import questions from "./mocks/questions.js";

const init = () => {
  ReactDOM.render(
      <App
        errorCount={AppSettings.ERROR_COUNT}
        questions={questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
