'use strict';

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  included(app) {
    app.options.outputPaths.app.css['themes/addon-theme/app'] = '/assets/addon-theme.css';
  }
};
