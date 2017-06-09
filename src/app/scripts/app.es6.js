/**
 * Created by jay.witcher on 7/21/2016.
 */

import angular from 'angular';

import FirstController from '/src/app/scripts/controllers/first-controller.es6.js';
import FirstService from '/src/app/scripts/services/first-service.es6.js';

export default angular.module('ng-es6', [])
    .controller('FirstController', FirstController)
    .service('FirstService', FirstService);