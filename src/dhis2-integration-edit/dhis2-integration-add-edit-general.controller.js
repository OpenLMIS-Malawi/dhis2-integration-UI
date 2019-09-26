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
     * @name dhis2-integration-add-edit-general:IntegrationAddEditGeneralController
     *
     * @description
     * Controller for managing integration view screen.
     */
    angular
        .module('dhis2-integration-edit')
        .controller('IntegrationAddEditGeneralController', controller);

    controller.$inject = ['$state', 'programs'];

    function controller($state, programs) {

        var vm = this;

        vm.$onInit = onInit;
        vm.goToIntegrationList  = goToIntegrationList;
        vm.saveIntegration = saveIntegration;

        /**
         * @ngdoc method
         * @propertyOf dhis2-integration-add-edit-general:IntegrationAddEditGeneralController
         * @name $onInit
         *
         * @description
         * Method that is executed on initiating IntegrationAddEditGeneralController.
         */
        function onInit() {
            vm.programs = programs;
        }

        /**
         * @ngdoc property
         * @propertyOf dhis2-integration-add-edit-general:IntegrationAddEditGeneralController
         * @name day
         * @type {Object}
         *
         * @description
         * Holds options for days.
         */
        vm.days = arrayDays();

        /**
         * @ngdoc property
         * @propertyOf dhis2-integration-add-edit-general:IntegrationAddEditGeneralController
         * @name programs
         * @type {Array}
         *

         * @description
         * List of all programs.
         */
        vm.programs = undefined;

        /**
         * @ngdoc property
         * @propertyOf dhis2-integration-add-edit-general:IntegrationAddEditGeneralController
         * @name configurations
         * @type {Array}
         *

         * @description
         * List of all configurations.
         */
        vm.configurations = ['Confuguration-1', 'Confuguration-2', 'Confuguration-3', 'Confuguration-4'];

        /**
         * @ngdoc method
         * @methodOf dhis2-integration-add-edit-general:IntegrationAddEditGeneralController
         * @name goToIntegrationList
         *
         * @description
         * Redirects to integration list screen.
         */
        function goToIntegrationList() {
            $state.go('openlmis.administration.dhis2.integration', {}, {});
        }

        /**
         * @ngdoc method
         * @methodOf dhis2-integration-add-edit-general:IntegrationAddEditGeneralController
         * @name saveIntegration
         *
         * @description
         * Updates the integration and return to the integration list on success.
         */
        function saveIntegration() {
            $state.go('openlmis.administration.dhis2.integration', {}, {});
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
