/*
 * This program is part of the OpenLMIS logistics management information system platform software.
 * Copyright © 2017 VillageReach
 *
 * This program is free software: you can redistribute it and/or modify it under the terms
 * of the GNU Affero General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *  
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
 * See the GNU Affero General Public License for more details. You should have received a copy of
 * the GNU Affero General Public License along with this program. If not, see
 * http://www.gnu.org/licenses.  For additional information contact info@OpenLMIS.org. 
 */

(function() {

    'use strict';

    /**
     * @ngdoc controller
     * @name dhis2.controller:Dhis2TabController
     *
     * @description
     * Exposes method for adding/removing user roles.
     */
    angular
        .module('dhis2')
        .controller('Dhis2TabController', controller);

    controller.$inject = ['$state', '$stateParams', 'Execution', 'programs'];

    function controller($state, $stateParams, Execution, programs) {

        var vm = this;

        vm.$onInit = onInit;
        vm.search = search;

        /**
         * @ngdoc method
         * @methodOf dhis2.controller:Dhis2TabController
         * @name $onInit
         *
         * @description
         * Initialization method of the Dhis2TabController.
         */

        function onInit() {
            vm.Execution = Execution;
            vm.programs = programs;
            vm.isBearer = isBearer;
            vm.isBasic = isBasic;
            changeState();
        }

        /**
         * @ngdoc property
         * @propertyOf dhis2.controller:Dhis2TabController
         * @name programs
         * @type {Array}
         *

         * @description
         * List of all programs.
         */
        vm.programs = undefined;

        /**
         * @ngdoc property
         * @propertyOf dhis2.controller:Dhis2TabController
         * @name Execution
         * @type {Object}
         *
         * @description
         * Contains executions
         */
        vm.Execution = undefined;

        /**
         * @ngdoc property
         * @propertyOf dhis2.controller:Dhis2TabController
         * @name options
         * @type {Object}
         *
         * @description
         * Holds options for sorting user list.
         */
        vm.options = {
            'dhis2.successful': ['Successfull'],
            'dhis2.unsuccessful': ['Unsuccessful'],
            'dhis2.date': ['Date'],
            'dhis2.program': ['Program']
        };

        /**
         * @ngdoc property
         * @propertyOf dhis2.controller:Dhis2TabController
         * @name status
         * @type {Object}
         *
         * @description
         * Holds options for status of executions.
         */
        vm.status = ['Successfull', 'Unsuccessful'];

        /**
         * @ngdoc property
         * @propertyOf dhis2.controller:Dhis2TabController
         * @name periods
         * @type {Object}
         *
         * @description
         * Holds options for period of executions.
         */
        vm.periods = ['Period-name-1', 'Period-name-2', 'Period-name-3', 'Period-name-4'];

        /**
         * @ngdoc property
         * @propertyOf dhis2.controller:Dhis2TabController
         * @name day
         * @type {Object}
         *
         * @description
         * Holds options for days.
         */
        vm.days = arrayDays();

        /**
         * @ngdoc property
         * @propertyOf dhis2.controller:Dhis2TabController
         * @name periods
         * @type {Object}
         *
         * @description
         * Holds options for months.
         */
        vm.months = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        /**
         * @ngdoc property
         * @propertyOf dhis2.controller:Dhis2TabController
         * @name authType
         * @type {Object}
         *
         * @description
         * Holds options for authType.
         */
        vm.authTypes = ['Basic', 'Bearer'];

        /**
         * @ngdoc method
         * @methodOf dhis2.controller:Dhis2TabController
         * @name changeState
         *
         * @description
         * Change tab to default.
         *
         */

        function changeState() {
            $state.go('openlmis.administration.dhis2.executions');
        }

        /**
         * @ngdoc method
         * @methodOf  dhis2.controller:Dhis2TabController
         * @name search
         *
         * @description
         * Reloads page with new search parameters.
         */
        function search() {
            var stateParams = angular.copy($stateParams);

            stateParams.lastName = vm.lastName;

            $state.go('openlmis.administration.dhis2.executions', stateParams, {
                reload: true
            });
        }

        function isBearer(authType) {
            return authType === vm.authTypes[1];
        }

        function isBasic(authType) {
            return authType === vm.authTypes[0];
        }

        function arrayDays() {
            var array = [];
            for (var xx = 0; xx < 31; xx ++) {
                array[xx] = xx + 1;
            }
            return array;
        }
    }
})();
