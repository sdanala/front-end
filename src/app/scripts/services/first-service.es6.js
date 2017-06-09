/**
 * Created by jay.witcher on 7/21/2016.
 */
export default class FirstService {
    constructor($http) {
        this.$http = $http;
    }

    getData() {
        return this.$http({method: 'GET', url: '/api/example'})
    }
}

FirstService.$inject = ['$http'];