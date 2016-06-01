import angular from 'angular';

console.log(angular);
import 'angulr-ui-router';

// Import the config file
import {config} from './config';

// Import Modules
angular
  .module('app.core', ['ui.router'])
  .config(config)
;

export ( )
