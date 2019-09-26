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
     * @name dhis2-execution-manual:ExecutionManualController
     *
     * @description
     * Controller for managing manual execution view screen.
     */
    angular
        .module('dhis2-integration-edit')
        .controller('ExecutionManualController', controller);

    controller.$inject = ['$state'];

    function controller($state) {

        var vm = this;

        vm.$onInit = onInit;
        vm.goToExecutionList  = goToExecutionList;
        vm.startManualExecution = startManualExecution;

        /**
         * @ngdoc method
         * @propertyOf dhis2-execution-manual:ExecutionManualController
         * @name $onInit
         *
         * @description
         * Method that is executed on initiating ExecutionManualController.
         */
        function onInit() {
        }

        /**
         * @ngdoc property
         * @propertyOf dhis2-execution-manual:ExecutionManualController
         * @name integrations
         * @type {Array}
         *

         * @description
         * List of all integrations.
         */
        vm.integrations = ['Integration-1', 'Integration-2', 'Integration-3', 'Integration-4'];

        /**
         * @ngdoc property
         * @propertyOf dhis2-execution-manual:ExecutionManualController
         * @name periods
         * @type {Object}
         *
         * @description
         * Holds options for period of executions.
         */
        vm.periods = ['Period-name-1', 'Period-name-2', 'Period-name-3', 'Period-name-4'];

        /**
         * @ngdoc method
         * @methodOf dhis2-execution-manual:ExecutionManualController
         * @name goToExecutionList
         *
         * @description
         * Redirects to execution list screen.
         */
        function goToExecutionList() {
            $state.go('openlmis.administration.dhis2.executions', {}, {});
        }

        /**
         * @ngdoc method
         * @methodOf dhis2-execution-manual:ExecutionManualController
         * @name startManualExecution
         *
         * @description
         * Start manual execution and return to the execution list on success.
         */
        function startManualExecution() {
            $state.go('openlmis.administration.dhis2.executions', {}, {
                reload: true
            });
        }
    }
})();
