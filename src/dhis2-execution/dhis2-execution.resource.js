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
     * @name dhis2-execution.ExecutionResource
     *
     * @description
     * Implementation of the ExecutionResource interface. Communicates with the REST API of the OpenLMIS
     * server.
     */

    angular
        .module('dhis2-execution')
        .factory('ExecutionResource', ExecutionResource);

    ExecutionResource.$inject = [
        'OpenlmisResource', 'classExtender',
        '$resource', 'openlmisUrlFactory'
    ];

    function ExecutionResource(OpenlmisResource, classExtender,
                               $resource, openlmisUrlFactory) {

        classExtender.extend(ExecutionResource, OpenlmisResource);

        ExecutionResource.prototype.startManualExecution = startManualExecution;
        ExecutionResource.prototype.queueItems = queueItems;

        return ExecutionResource;

        function ExecutionResource() {
            var url = '/api/integrationExecutions';
            var resourceUrl = openlmisUrlFactory(url);

            this.super(url);
            this.resource = $resource(resourceUrl + '/:id', {}, {
                query: {
                    url: resourceUrl,
                    isArray: false
                },
                update: {
                    method: 'PUT'
                },
                queue: {
                    url: resourceUrl + '/queue',
                    isArray: true
                }
            });
            this.originalCreate = OpenlmisResource.prototype.create;
        }

        function startManualExecution(manualExecution) {
            return this.originalCreate(manualExecution);
        }

        function queueItems() {
            return this.resource.queue();
        }
    }
})();
