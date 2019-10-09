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
     * @ngdoc filter
     * @name dhis2-execution-list.filter:status
     *
     * @description
     * Parses the given status code into more user-friendly string message.
     *
     * @param   {Object} statusCode Status code to be formatted
     * @return  {String}           the formated status
     *
     * @example
     * In the HTML:
     * ```
     * <td>{{status.statusCode | status}}</td>
     * ```
     * In the JS:
     * ```
     * $filter('status')(status.statusCode);
     * ```
     */
    angular
        .module('dhis2-execution-list')
        .filter('status', statusFilter);

    function statusFilter() {
        return function(statusCode) {
            if (!statusCode) {
                return undefined;
            }
            if (statusCode === 202) {
                return 'Accepted(' + statusCode + ')';
            }
            if (statusCode === 500) {
                return 'Internal server error(' + statusCode + ')';
            }
            if (statusCode === 503) {
                return 'Service unavailable(' + statusCode + ')';
            }
        };
    }

})();
