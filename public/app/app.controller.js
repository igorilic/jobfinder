(function() {
    /* global angular */
    angular
        .module('app')
        .controller('TestCtrl', TestCtrl);
    TestCtrl.$inject = ['$resource'];
    function TestCtrl($resource) {
        var vm = this;
        vm.jobs = $resource('/api/jobs').query();
    }
})();