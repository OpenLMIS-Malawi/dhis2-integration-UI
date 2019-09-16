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

describe('executionService', function() {

    beforeEach(function() {
        module('openlmis-pagination');
        module('dhis2-execution');

        inject(function($injector) {
            this.$rootScope = $injector.get('$rootScope');
            this.$httpBackend = $injector.get('$httpBackend');
            this.dhis2UrlFactory = $injector.get('dhis2UrlFactory');
            this.executionService = $injector.get('executionService');
            this.ExecutionDataBuilder = $injector.get('ExecutionDataBuilder');
            this.ManualExecutionDataBuilder = $injector.get('ManualExecutionDataBuilder');
            this.PageDataBuilder = $injector.get('PageDataBuilder');
        });

        this.manualExecution = new this.ManualExecutionDataBuilder()
            .build();

        this.execution = new this.ExecutionDataBuilder()
            .withId(1)
            .build();

        this.executions = [
            this.execution,
            new this.ExecutionDataBuilder()
                .withId(1)
                .build()
        ];

        this.executionPage = new this.PageDataBuilder()
            .withContent(this.execution)
            .build();

    });

    describe('postExecution', function() {

        it('should post new manual integration execution', function() {
            this.$httpBackend
                .expectPOST(this.dhis2UrlFactory('/api/integrationExecutions'), this.manualExecution)
                .respond(202);

            var result;
            this.executionService
                .postExecution(this.manualExecution)
                .then(function(response) {
                    result = response;
                });
            this.$httpBackend.flush();
            this.$rootScope.$apply();

            expect(angular.toJson(result)).toEqual(angular.toJson(this.manualExecution));
        });
    });

    describe('get All', function() {

        beforeEach(function() {
            this.paginationParams = {
                page: 0,
                size: 10
            };
        });

        it('should resolve to execution', function() {
            this.$httpBackend
                .expectGET(this.dhis2UrlFactory(
                    '/api/integrationExecutions' +
                    '?page=' + this.paginationParams.page +
                    '&size=' + this.paginationParams.size
                ))
                .respond(200, this.executionPage);

            var result;
            this.executionService
                .getAll(this.paginationParams)
                .then(function(executionPage) {
                    result = executionPage;
                });
            this.$httpBackend.flush();
            this.$rootScope.$apply();

            expect(angular.toJson(result)).toEqual(angular.toJson(this.executionPage));
        });
    });

    describe('get', function() {

        it('should resolve to execution', function() {
            this.$httpBackend
                .expectGET(this.dhis2UrlFactory('/api/integrationExecutions/' + this.execution.id))
                .respond(200, this.execution);

            var result;
            this.executionService
                .get(this.execution.id)
                .then(function(execution) {
                    result = execution;
                });
            this.$httpBackend.flush();
            this.$rootScope.$apply();

            expect(angular.toJson(result)).toEqual(angular.toJson(this.execution));
        });
    });

    afterEach(function() {
        this.$httpBackend.verifyNoOutstandingRequest();
        this.$httpBackend.verifyNoOutstandingExpectation();
    });

});
