(function() {
    angular
        .module('app')
        .controller('TestCtrl', TestCtrl);
    function TestCtrl() {
        var vm = this;
        vm.jobs = [{
            title: 'Sales Person',
            description: 'you will fight dragons'
        }, {
            title: 'Accountant',
            description: 'you will use the keybord'
        }];
    }
})();