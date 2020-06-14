import ReactDOM from 'react-dom';
import App from "@components/app/app";
import {AppSettings} from "./constants";

const init = () => {
  ReactDOM.render(
      <App
        errorCount={AppSettings.ERROR_COUNT}
      />,
      document.querySelector(`#root`)
  );
};

init();
