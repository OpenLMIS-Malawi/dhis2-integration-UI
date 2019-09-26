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
     * @name dhis2-configuration-add-edit-general:ConfigurationAddEditGeneralController
     *
     * @description
     * Controller for managing configuration view screen.
     */
    angular
        .module('dhis2-configuration-edit')
        .controller('ConfigurationAddEditGeneralController', controller);

    controller.$inject = ['$state'];

    function controller($state) {

        var vm = this;

        vm.$onInit = onInit;
        vm.goToConfigurationList  = goToConfigurationList;
        vm.saveConfiguration = saveConfiguration;

        /**
         * @ngdoc method
         * @propertyOf dhis2-configuration-add-edit-general:ConfigurationAddEditGeneralController
         * @name $onInit
         *
         * @description
         * Method that is executed on initiating ConfigurationAddEditGeneralController.
         */
        function onInit() {
        }

        /**
         * @ngdoc method
         * @methodOf dhis2-configuration-add-edit-general:ConfigurationAddEditGeneralController
         * @name goToConfigurationList
         *
         * @description
         * Redirects to configuration list screen.
         */
        function goToConfigurationList() {
            $state.go('openlmis.administration.dhis2.configuration', {}, {});
        }

        /**
         * @ngdoc method
         * @methodOf dhis2-configuration-add-edit-general:ConfigurationAddEditGeneralController
         * @name saveConfiguration
         *
         * @description
         * Updates the configuration and return to the configuration list on success.
         */
        function saveConfiguration() {
            $state.go('openlmis.administration.dhis2.configuration', {}, {});
        }

    }
})();
