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
        .module('dhis2-execution-manual')
        .controller('ExecutionManualController', controller);

    controller.$inject = ['$state', 'ExecutionResource', 'integrations', 'periods'];

    function controller($state, ExecutionResource, integrations, periods) {

        var vm = this;

        vm.$onInit = onInit;
        vm.goToExecutionList  = goToExecutionList;
        vm.startManualExecution = startManualExecution;

        /**
         * @ngdoc property
         * @propertyOf dhis2-execution-manual:ExecutionManualController
         * @name integrations
         * @type {Array}
         *

         * @description
         * List of all integrations.
         */
        vm.integrations = undefined;

        /**
         * @ngdoc property
         * @propertyOf dhis2-execution-manual:ExecutionManualController
         * @name periods
         * @type {Object}
         *
         * @description
         * Holds options for period of executions.
         */
        vm.periods = undefined;

        /**
         * @ngdoc method
         * @propertyOf dhis2-execution-manual:ExecutionManualController
         * @name $onInit
         *
         * @description
         * Method that is executed on initiating ExecutionManualController.
         */
        function onInit() {
            vm.integrations = integrations;
            vm.periods = periods;
        }

        /**
         * @ngdoc method
         * @methodOf dhis2-execution-manual:ExecutionManualController
         * @name goToExecutionList
         *
         * @description
         * Redirects to execution list screen.
         */
        function goToExecutionList(reload) {
            $state.go('openlmis.administration.dhis2.executions', {}, {
                reload: reload
            });
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
            return new ExecutionResource()
                .startManualExecution({
                    integrationId: vm.selectedIntegration.id,
                    periodId: vm.selectedPeriod.id
                })
                .then(function() {
                    goToExecutionList(true);
                });

        }
    }
})();
