'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by jay.witcher on 7/21/2016.
 */

var FirstService = function () {
    function FirstService($http) {
        _classCallCheck(this, FirstService);

        this.$http = $http;
    }

    _createClass(FirstService, [{
        key: 'getData',
        value: function getData() {
            return this.$http({ method: 'GET', url: '/api/example' });
        }
    }]);

    return FirstService;
}();

exports.default = FirstService;


FirstService.$inject = ['$http'];

//# sourceMappingURL=first-service.es6-compiled.js.map