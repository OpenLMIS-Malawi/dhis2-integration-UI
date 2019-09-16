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
     * @ngdoc service
     * @name dhis2-execution.executionService
     *
     * @description
     * Responsible for retrieving Executions from the server.
     */
    angular
        .module('dhis2-execution')
        .factory('executionService', service);

    service.$inject = ['dhis2UrlFactory', '$resource'];

    function service(dhis2UrlFactory, $resource) {

        var resource = $resource(dhis2UrlFactory('/api/integrationExecutions/:id'), {}, {
            postExecution: {
                method: 'POST',
                url: dhis2UrlFactory('/api/integrationExecutions')
            },
            get: {
                transformResponse: transformGetResponse
            },
            query: {
                method: 'GET',
                url: dhis2UrlFactory('/api/integrationExecutions'),
                transformResponse: transformGetAllResponse
            },
            update: {
                method: 'PUT'
            }
        });

        return {
            get: get,
            getAll: getAll,
            query: query,
            postExecution: postExecution
        };

        /**
         * @ngdoc method
         * @methodOf dhis2-execution.executionService
         * @name update
         *
         * @description
         * Post manual Execution. It will create a new manual execution in service.
         *
         * @param  {Object}     manualExecution   the updated Execution
         * @return {Promise}                    the promise resolving to the updated item
         */
        function postExecution(manualExecution) {
            return resource.postExecution({}, manualExecution).$promise;
        }

        /**
         * @ngdoc method
         * @methodOf dhis2-execution.executionService
         * @name get
         *
         * @description
         * Gets Execution by id.
         *
         * @param  {String}  id Execution UUID
         * @return {Promise}    Execution info
         */
        function get(id) {
            return resource.get({
                id: id
            }).$promise;
        }

        /**
         * @ngdoc method
         * @methodOf dhis2-execution.executionService
         * @name getAll
         *
         * @description
         * Gets all Execution.
         *
         * @return {Promise}    Execution info
         * @param  {Object}  paginationParams the pagination params
         */
        function getAll(paginationParams) {
            return resource.get(paginationParams).$promise;
        }

        /**
         * @ngdoc method
         * @methodOf dhis2-execution.executionService
         * @name query
         *
         * @description
         * Query Executions.
         *
         * @param  {Object} params query parameters
         * @return {Promise}       Page of all Executions
         */
        function query(params) {
            return resource.query(params).$promise;
        }

        function transformGetResponse(data, status) {
            return transformResponse(data, status);
        }

        function transformGetAllResponse(data, status) {
            return transformResponse(data, status, function(response) {
                return response;
            });
        }

        function transformResponse(data, status, transformer) {
            if (status === 200) {
                return transformer(angular.fromJson(data));
            }
            return data;
        }
    }
})();
