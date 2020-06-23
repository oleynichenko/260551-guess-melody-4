window.React = require(`react`);
window.PropTypes = require(`prop-types`);
window.Enzyme = require(`enzyme`);
window.renderer = require(`react-test-renderer`);
window.Adapter = require(`enzyme-adapter-react-16`);

Enzyme.configure({
  adapter: new Adapter(),
});
