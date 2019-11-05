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

    angular
        .module('dhis2-execution-request-body')
        .config(dhis2ExecutionRequestBodyRoutes);

    dhis2ExecutionRequestBodyRoutes.$inject = ['modalStateProvider'];

    function dhis2ExecutionRequestBodyRoutes(modalStateProvider) {

        modalStateProvider.state('openlmis.administration.dhis2.executions.requestbody', {
            controller: 'ExecutionRequestBodyController',
            controllerAs: 'vm',
            templateUrl: 'dhis2-execution-request-body/dhis2-execution-request-body.html',
            url: '/:id/requestbody',
            resolve: {
                requestbody: function(RequestBodyResource, RequestBody, $stateParams) {
                    return new RequestBodyResource()
                        .get($stateParams.id)
                        .then(function(json) {
                            return new RequestBody(json);
                        });
                }
            }
        });

    }

})();
