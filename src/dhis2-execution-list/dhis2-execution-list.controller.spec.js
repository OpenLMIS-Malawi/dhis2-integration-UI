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

describe('ExecutionListController', function() {

    beforeEach(function() {
        module('dhis2-execution-list');
        module('referencedata-period');

        inject(function($injector) {
            this.$controller = $injector.get('$controller');
            this.$state = $injector.get('$state');
            this.ExecutionDataBuilder = $injector.get('ExecutionDataBuilder');
            this.PeriodDataBuilder = $injector.get('PeriodDataBuilder');
        });

        this.executions = [
            new this.ExecutionDataBuilder().build(),
            new this.ExecutionDataBuilder().build()
        ];

        this.periods = [
            new this.PeriodDataBuilder().build(),
            new this.PeriodDataBuilder().build()
        ];

        this.periodsMap = this.periods.reduce(function(periodsMap, period) {
            periodsMap[period.id] = period;
            return periodsMap;
        }, {});

        this.stateParams = {
            page: 0,
            size: 10
        };

        this.vm = this.$controller('ExecutionListController', {
            executions: this.executions,
            periodsMap: this.periodsMap,
            $stateParams: this.stateParams
        });
        this.vm.$onInit();

        spyOn(this.$state, 'go').andReturn();
    });

    describe('onInit', function() {

        it('should expose executions array', function() {
            expect(this.vm.executions).toEqual(this.executions);
        });

        it('should expose periods', function() {
            expect(this.vm.periods).toEqual(this.periodsMap);
        });
    });

    describe('refreshPage', function() {

        it('should call state go method', function() {
            this.vm.refreshPage();

            expect(this.$state.go).toHaveBeenCalled();
        });
    });
});
