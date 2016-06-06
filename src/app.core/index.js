import angular from 'angular';

console.log(angular);
import 'angulr-ui-router';
import 'angular-cookies';

// Import the config file
import {config} from './config';

// import {RegController} from './controllers/reg.controller';

// Import Modules
angular
  .module('app.core', ['ui.router', 'ngCookies'])
  .config(config)
  .controller('RegController', RegController)
;

export ( )
