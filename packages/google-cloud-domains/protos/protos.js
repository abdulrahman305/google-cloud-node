// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("google-gax/build/src/protobuf").protobufMinimal);

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots._google_cloud_domains_protos || ($protobuf.roots._google_cloud_domains_protos = {});
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.cloud = (function() {
    
            /**
             * Namespace cloud.
             * @memberof google
             * @namespace
             */
            var cloud = {};
    
            cloud.domains = (function() {
    
                /**
                 * Namespace domains.
                 * @memberof google.cloud
                 * @namespace
                 */
                var domains = {};
    
                domains.v1 = (function() {
    
                    /**
                     * Namespace v1.
                     * @memberof google.cloud.domains
                     * @namespace
                     */
                    var v1 = {};
    
                    v1.Domains = (function() {
    
                        /**
                         * Constructs a new Domains service.
                         * @memberof google.cloud.domains.v1
                         * @classdesc Represents a Domains
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function Domains(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }
    
                        (Domains.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Domains;
    
                        /**
                         * Creates new Domains service using the specified rpc implementation.
                         * @function create
                         * @memberof google.cloud.domains.v1.Domains
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {Domains} RPC service. Useful where requests and/or responses are streamed.
                         */
                        Domains.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|searchDomains}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef SearchDomainsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.domains.v1.SearchDomainsResponse} [response] SearchDomainsResponse
                         */
    
                        /**
                         * Calls SearchDomains.
                         * @function searchDomains
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.ISearchDomainsRequest} request SearchDomainsRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.SearchDomainsCallback} callback Node-style callback called with the error, if any, and SearchDomainsResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.searchDomains = function searchDomains(request, callback) {
                            return this.rpcCall(searchDomains, $root.google.cloud.domains.v1.SearchDomainsRequest, $root.google.cloud.domains.v1.SearchDomainsResponse, request, callback);
                        }, "name", { value: "SearchDomains" });
    
                        /**
                         * Calls SearchDomains.
                         * @function searchDomains
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.ISearchDomainsRequest} request SearchDomainsRequest message or plain object
                         * @returns {Promise<google.cloud.domains.v1.SearchDomainsResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|retrieveRegisterParameters}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef RetrieveRegisterParametersCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.domains.v1.RetrieveRegisterParametersResponse} [response] RetrieveRegisterParametersResponse
                         */
    
                        /**
                         * Calls RetrieveRegisterParameters.
                         * @function retrieveRegisterParameters
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IRetrieveRegisterParametersRequest} request RetrieveRegisterParametersRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.RetrieveRegisterParametersCallback} callback Node-style callback called with the error, if any, and RetrieveRegisterParametersResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.retrieveRegisterParameters = function retrieveRegisterParameters(request, callback) {
                            return this.rpcCall(retrieveRegisterParameters, $root.google.cloud.domains.v1.RetrieveRegisterParametersRequest, $root.google.cloud.domains.v1.RetrieveRegisterParametersResponse, request, callback);
                        }, "name", { value: "RetrieveRegisterParameters" });
    
                        /**
                         * Calls RetrieveRegisterParameters.
                         * @function retrieveRegisterParameters
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IRetrieveRegisterParametersRequest} request RetrieveRegisterParametersRequest message or plain object
                         * @returns {Promise<google.cloud.domains.v1.RetrieveRegisterParametersResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|registerDomain}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef RegisterDomainCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls RegisterDomain.
                         * @function registerDomain
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IRegisterDomainRequest} request RegisterDomainRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.RegisterDomainCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.registerDomain = function registerDomain(request, callback) {
                            return this.rpcCall(registerDomain, $root.google.cloud.domains.v1.RegisterDomainRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "RegisterDomain" });
    
                        /**
                         * Calls RegisterDomain.
                         * @function registerDomain
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IRegisterDomainRequest} request RegisterDomainRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|retrieveTransferParameters}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef RetrieveTransferParametersCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.domains.v1.RetrieveTransferParametersResponse} [response] RetrieveTransferParametersResponse
                         */
    
                        /**
                         * Calls RetrieveTransferParameters.
                         * @function retrieveTransferParameters
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IRetrieveTransferParametersRequest} request RetrieveTransferParametersRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.RetrieveTransferParametersCallback} callback Node-style callback called with the error, if any, and RetrieveTransferParametersResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.retrieveTransferParameters = function retrieveTransferParameters(request, callback) {
                            return this.rpcCall(retrieveTransferParameters, $root.google.cloud.domains.v1.RetrieveTransferParametersRequest, $root.google.cloud.domains.v1.RetrieveTransferParametersResponse, request, callback);
                        }, "name", { value: "RetrieveTransferParameters" });
    
                        /**
                         * Calls RetrieveTransferParameters.
                         * @function retrieveTransferParameters
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IRetrieveTransferParametersRequest} request RetrieveTransferParametersRequest message or plain object
                         * @returns {Promise<google.cloud.domains.v1.RetrieveTransferParametersResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|transferDomain}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef TransferDomainCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls TransferDomain.
                         * @function transferDomain
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.ITransferDomainRequest} request TransferDomainRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.TransferDomainCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.transferDomain = function transferDomain(request, callback) {
                            return this.rpcCall(transferDomain, $root.google.cloud.domains.v1.TransferDomainRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "TransferDomain" });
    
                        /**
                         * Calls TransferDomain.
                         * @function transferDomain
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.ITransferDomainRequest} request TransferDomainRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|listRegistrations}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef ListRegistrationsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.domains.v1.ListRegistrationsResponse} [response] ListRegistrationsResponse
                         */
    
                        /**
                         * Calls ListRegistrations.
                         * @function listRegistrations
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IListRegistrationsRequest} request ListRegistrationsRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.ListRegistrationsCallback} callback Node-style callback called with the error, if any, and ListRegistrationsResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.listRegistrations = function listRegistrations(request, callback) {
                            return this.rpcCall(listRegistrations, $root.google.cloud.domains.v1.ListRegistrationsRequest, $root.google.cloud.domains.v1.ListRegistrationsResponse, request, callback);
                        }, "name", { value: "ListRegistrations" });
    
                        /**
                         * Calls ListRegistrations.
                         * @function listRegistrations
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IListRegistrationsRequest} request ListRegistrationsRequest message or plain object
                         * @returns {Promise<google.cloud.domains.v1.ListRegistrationsResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|getRegistration}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef GetRegistrationCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.domains.v1.Registration} [response] Registration
                         */
    
                        /**
                         * Calls GetRegistration.
                         * @function getRegistration
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IGetRegistrationRequest} request GetRegistrationRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.GetRegistrationCallback} callback Node-style callback called with the error, if any, and Registration
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.getRegistration = function getRegistration(request, callback) {
                            return this.rpcCall(getRegistration, $root.google.cloud.domains.v1.GetRegistrationRequest, $root.google.cloud.domains.v1.Registration, request, callback);
                        }, "name", { value: "GetRegistration" });
    
                        /**
                         * Calls GetRegistration.
                         * @function getRegistration
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IGetRegistrationRequest} request GetRegistrationRequest message or plain object
                         * @returns {Promise<google.cloud.domains.v1.Registration>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|updateRegistration}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef UpdateRegistrationCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls UpdateRegistration.
                         * @function updateRegistration
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IUpdateRegistrationRequest} request UpdateRegistrationRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.UpdateRegistrationCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.updateRegistration = function updateRegistration(request, callback) {
                            return this.rpcCall(updateRegistration, $root.google.cloud.domains.v1.UpdateRegistrationRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "UpdateRegistration" });
    
                        /**
                         * Calls UpdateRegistration.
                         * @function updateRegistration
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IUpdateRegistrationRequest} request UpdateRegistrationRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|configureManagementSettings}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef ConfigureManagementSettingsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls ConfigureManagementSettings.
                         * @function configureManagementSettings
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IConfigureManagementSettingsRequest} request ConfigureManagementSettingsRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.ConfigureManagementSettingsCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.configureManagementSettings = function configureManagementSettings(request, callback) {
                            return this.rpcCall(configureManagementSettings, $root.google.cloud.domains.v1.ConfigureManagementSettingsRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "ConfigureManagementSettings" });
    
                        /**
                         * Calls ConfigureManagementSettings.
                         * @function configureManagementSettings
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IConfigureManagementSettingsRequest} request ConfigureManagementSettingsRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|configureDnsSettings}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef ConfigureDnsSettingsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls ConfigureDnsSettings.
                         * @function configureDnsSettings
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IConfigureDnsSettingsRequest} request ConfigureDnsSettingsRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.ConfigureDnsSettingsCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.configureDnsSettings = function configureDnsSettings(request, callback) {
                            return this.rpcCall(configureDnsSettings, $root.google.cloud.domains.v1.ConfigureDnsSettingsRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "ConfigureDnsSettings" });
    
                        /**
                         * Calls ConfigureDnsSettings.
                         * @function configureDnsSettings
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IConfigureDnsSettingsRequest} request ConfigureDnsSettingsRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|configureContactSettings}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef ConfigureContactSettingsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls ConfigureContactSettings.
                         * @function configureContactSettings
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IConfigureContactSettingsRequest} request ConfigureContactSettingsRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.ConfigureContactSettingsCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.configureContactSettings = function configureContactSettings(request, callback) {
                            return this.rpcCall(configureContactSettings, $root.google.cloud.domains.v1.ConfigureContactSettingsRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "ConfigureContactSettings" });
    
                        /**
                         * Calls ConfigureContactSettings.
                         * @function configureContactSettings
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IConfigureContactSettingsRequest} request ConfigureContactSettingsRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|exportRegistration}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef ExportRegistrationCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls ExportRegistration.
                         * @function exportRegistration
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IExportRegistrationRequest} request ExportRegistrationRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.ExportRegistrationCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.exportRegistration = function exportRegistration(request, callback) {
                            return this.rpcCall(exportRegistration, $root.google.cloud.domains.v1.ExportRegistrationRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "ExportRegistration" });
    
                        /**
                         * Calls ExportRegistration.
                         * @function exportRegistration
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IExportRegistrationRequest} request ExportRegistrationRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|deleteRegistration}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef DeleteRegistrationCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls DeleteRegistration.
                         * @function deleteRegistration
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IDeleteRegistrationRequest} request DeleteRegistrationRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.DeleteRegistrationCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.deleteRegistration = function deleteRegistration(request, callback) {
                            return this.rpcCall(deleteRegistration, $root.google.cloud.domains.v1.DeleteRegistrationRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "DeleteRegistration" });
    
                        /**
                         * Calls DeleteRegistration.
                         * @function deleteRegistration
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IDeleteRegistrationRequest} request DeleteRegistrationRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|retrieveAuthorizationCode}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef RetrieveAuthorizationCodeCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.domains.v1.AuthorizationCode} [response] AuthorizationCode
                         */
    
                        /**
                         * Calls RetrieveAuthorizationCode.
                         * @function retrieveAuthorizationCode
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IRetrieveAuthorizationCodeRequest} request RetrieveAuthorizationCodeRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.RetrieveAuthorizationCodeCallback} callback Node-style callback called with the error, if any, and AuthorizationCode
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.retrieveAuthorizationCode = function retrieveAuthorizationCode(request, callback) {
                            return this.rpcCall(retrieveAuthorizationCode, $root.google.cloud.domains.v1.RetrieveAuthorizationCodeRequest, $root.google.cloud.domains.v1.AuthorizationCode, request, callback);
                        }, "name", { value: "RetrieveAuthorizationCode" });
    
                        /**
                         * Calls RetrieveAuthorizationCode.
                         * @function retrieveAuthorizationCode
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IRetrieveAuthorizationCodeRequest} request RetrieveAuthorizationCodeRequest message or plain object
                         * @returns {Promise<google.cloud.domains.v1.AuthorizationCode>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.domains.v1.Domains|resetAuthorizationCode}.
                         * @memberof google.cloud.domains.v1.Domains
                         * @typedef ResetAuthorizationCodeCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.domains.v1.AuthorizationCode} [response] AuthorizationCode
                         */
    
                        /**
                         * Calls ResetAuthorizationCode.
                         * @function resetAuthorizationCode
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IResetAuthorizationCodeRequest} request ResetAuthorizationCodeRequest message or plain object
                         * @param {google.cloud.domains.v1.Domains.ResetAuthorizationCodeCallback} callback Node-style callback called with the error, if any, and AuthorizationCode
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(Domains.prototype.resetAuthorizationCode = function resetAuthorizationCode(request, callback) {
                            return this.rpcCall(resetAuthorizationCode, $root.google.cloud.domains.v1.ResetAuthorizationCodeRequest, $root.google.cloud.domains.v1.AuthorizationCode, request, callback);
                        }, "name", { value: "ResetAuthorizationCode" });
    
                        /**
                         * Calls ResetAuthorizationCode.
                         * @function resetAuthorizationCode
                         * @memberof google.cloud.domains.v1.Domains
                         * @instance
                         * @param {google.cloud.domains.v1.IResetAuthorizationCodeRequest} request ResetAuthorizationCodeRequest message or plain object
                         * @returns {Promise<google.cloud.domains.v1.AuthorizationCode>} Promise
                         * @variation 2
                         */
    
                        return Domains;
                    })();
    
                    v1.Registration = (function() {
    
                        /**
                         * Properties of a Registration.
                         * @memberof google.cloud.domains.v1
                         * @interface IRegistration
                         * @property {string|null} [name] Registration name
                         * @property {string|null} [domainName] Registration domainName
                         * @property {google.protobuf.ITimestamp|null} [createTime] Registration createTime
                         * @property {google.protobuf.ITimestamp|null} [expireTime] Registration expireTime
                         * @property {google.cloud.domains.v1.Registration.State|null} [state] Registration state
                         * @property {Array.<google.cloud.domains.v1.Registration.Issue>|null} [issues] Registration issues
                         * @property {Object.<string,string>|null} [labels] Registration labels
                         * @property {google.cloud.domains.v1.IManagementSettings|null} [managementSettings] Registration managementSettings
                         * @property {google.cloud.domains.v1.IDnsSettings|null} [dnsSettings] Registration dnsSettings
                         * @property {google.cloud.domains.v1.IContactSettings|null} [contactSettings] Registration contactSettings
                         * @property {google.cloud.domains.v1.IContactSettings|null} [pendingContactSettings] Registration pendingContactSettings
                         * @property {Array.<google.cloud.domains.v1.ContactPrivacy>|null} [supportedPrivacy] Registration supportedPrivacy
                         */
    
                        /**
                         * Constructs a new Registration.
                         * @memberof google.cloud.domains.v1
                         * @classdesc Represents a Registration.
                         * @implements IRegistration
                         * @constructor
                         * @param {google.cloud.domains.v1.IRegistration=} [properties] Properties to set
                         */
                        function Registration(properties) {
                            this.issues = [];
                            this.labels = {};
                            this.supportedPrivacy = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Registration name.
                         * @member {string} name
                         * @memberof google.cloud.domains.v1.Registration
                         * @instance
                         */
                        Registration.prototype.name = "";
    
                        /**
                         * Registration domainName.
                         * @member {string} domainName
                         * @memberof google.cloud.domains.v1.Registration
                         * @instance
                         */
                        Registration.prototype.domainName = "";
    
                        /**
                         * Registration createTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} createTime
                         * @memberof google.cloud.domains.v1.Registration
                         * @instance
                         */
                        Registration.prototype.createTime = null;
    
                        /**
                         * Registration expireTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} expireTime
                         * @memberof google.cloud.domains.v1.Registration
                         * @instance
                         */
                        Registration.prototype.expireTime = null;
    
                        /**
                         * Registration state.
                         * @member {google.cloud.domains.v1.Registration.State} state
                         * @memberof google.cloud.domains.v1.Registration
                         * @instance
                         */
                        Registration.prototype.state = 0;
    
                        /**
                         * Registration issues.
                         * @member {Array.<google.cloud.domains.v1.Registration.Issue>} issues
                         * @memberof google.cloud.domains.v1.Registration
                         * @instance
                         */
                        Registration.prototype.issues = $util.emptyArray;
    
                        /**
                         * Registration labels.
                         * @member {Object.<string,string>} labels
                         * @memberof google.cloud.domains.v1.Registration
                         * @instance
                         */
                        Registration.prototype.labels = $util.emptyObject;
    
                        /**
                         * Registration managementSettings.
                         * @member {google.cloud.domains.v1.IManagementSettings|null|undefined} managementSettings
                         * @memberof google.cloud.domains.v1.Registration
                         * @instance
                         */
                        Registration.prototype.managementSettings = null;
    
                        /**
                         * Registration dnsSettings.
                         * @member {google.cloud.domains.v1.IDnsSettings|null|undefined} dnsSettings
                         * @memberof google.cloud.domains.v1.Registration
                         * @instance
                         */
                        Registration.prototype.dnsSettings = null;
    
                        /**
                         * Registration contactSettings.
                         * @member {google.cloud.domains.v1.IContactSettings|null|undefined} contactSettings
                         * @memberof google.cloud.domains.v1.Registration
                         * @instance
                         */
                        Registration.prototype.contactSettings = null;
    
                        /**
                         * Registration pendingContactSettings.
                         * @member {google.cloud.domains.v1.IContactSettings|null|undefined} pendingContactSettings
                         * @memberof google.cloud.domains.v1.Registration
                         * @instance
                         */
                        Registration.prototype.pendingContactSettings = null;
    
                        /**
                         * Registration supportedPrivacy.
                         * @member {Array.<google.cloud.domains.v1.ContactPrivacy>} supportedPrivacy
                         * @memberof google.cloud.domains.v1.Registration
                         * @instance
                         */
                        Registration.prototype.supportedPrivacy = $util.emptyArray;
    
                        /**
                         * Creates a new Registration instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.domains.v1.Registration
                         * @static
                         * @param {google.cloud.domains.v1.IRegistration=} [properties] Properties to set
                         * @returns {google.cloud.domains.v1.Registration} Registration instance
                         */
                        Registration.create = function create(properties) {
                            return new Registration(properties);
                        };
    
                        /**
                         * Encodes the specified Registration message. Does not implicitly {@link google.cloud.domains.v1.Registration.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.domains.v1.Registration
                         * @static
                         * @param {google.cloud.domains.v1.IRegistration} message Registration message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Registration.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.domainName != null && Object.hasOwnProperty.call(message, "domainName"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.domainName);
                            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                                $root.google.protobuf.Timestamp.encode(message.createTime, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.expireTime != null && Object.hasOwnProperty.call(message, "expireTime"))
                                $root.google.protobuf.Timestamp.encode(message.expireTime, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.state);
                            if (message.issues != null && message.issues.length) {
                                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                                for (var i = 0; i < message.issues.length; ++i)
                                    writer.int32(message.issues[i]);
                                writer.ldelim();
                            }
                            if (message.labels != null && Object.hasOwnProperty.call(message, "labels"))
                                for (var keys = Object.keys(message.labels), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.labels[keys[i]]).ldelim();
                            if (message.managementSettings != null && Object.hasOwnProperty.call(message, "managementSettings"))
                                $root.google.cloud.domains.v1.ManagementSettings.encode(message.managementSettings, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                            if (message.dnsSettings != null && Object.hasOwnProperty.call(message, "dnsSettings"))
                                $root.google.cloud.domains.v1.DnsSettings.encode(message.dnsSettings, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                            if (message.contactSettings != null && Object.hasOwnProperty.call(message, "contactSettings"))
                                $root.google.cloud.domains.v1.ContactSettings.encode(message.contactSettings, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                            if (message.pendingContactSettings != null && Object.hasOwnProperty.call(message, "pendingContactSettings"))
                                $root.google.cloud.domains.v1.ContactSettings.encode(message.pendingContactSettings, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                            if (message.supportedPrivacy != null && message.supportedPrivacy.length) {
                                writer.uint32(/* id 14, wireType 2 =*/114).fork();
                                for (var i = 0; i < message.supportedPrivacy.length; ++i)
                                    writer.int32(message.supportedPrivacy[i]);
                                writer.ldelim();
                            }
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Registration message, length delimited. Does not implicitly {@link google.cloud.domains.v1.Registration.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.domains.v1.Registration
                         * @static
                         * @param {google.cloud.domains.v1.IRegistration} message Registration message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Registration.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a Registration message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.domains.v1.Registration
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.domains.v1.Registration} Registration
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Registration.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.domains.v1.Registration(), key, value;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.name = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.domainName = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.createTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 6: {
                                        message.expireTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 7: {
                                        message.state = reader.int32();
                                        break;
                                    }
                                case 8: {
                                        if (!(message.issues && message.issues.length))
                                            message.issues = [];
                                        if ((tag & 7) === 2) {
                                            var end2 = reader.uint32() + reader.pos;
                                            while (reader.pos < end2)
                                                message.issues.push(reader.int32());
                                        } else
                                            message.issues.push(reader.int32());
                                        break;
                                    }
                                case 9: {
                                        if (message.labels === $util.emptyObject)
                                            message.labels = {};
                                        var end2 = reader.uint32() + reader.pos;
                                        key = "";
                                        value = "";
                                        while (reader.pos < end2) {
                                            var tag2 = reader.uint32();
                                            switch (tag2 >>> 3) {
                                            case 1:
                                                key = reader.string();
                                                break;
                                            case 2:
                                                value = reader.string();
                                                break;
                                            default:
                                                reader.skipType(tag2 & 7);
                                                break;
                                            }
                                        }
                                        message.labels[key] = value;
                                        break;
                                    }
                                case 10: {
                                        message.managementSettings = $root.google.cloud.domains.v1.ManagementSettings.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 11: {
                                        message.dnsSettings = $root.google.cloud.domains.v1.DnsSettings.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 12: {
                                        message.contactSettings = $root.google.cloud.domains.v1.ContactSettings.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 13: {
                                        message.pendingContactSettings = $root.google.cloud.domains.v1.ContactSettings.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 14: {
                                        if (!(message.supportedPrivacy && message.supportedPrivacy.length))
                                            message.supportedPrivacy = [];
                                        if ((tag & 7) === 2) {
                                            var end2 = reader.uint32() + reader.pos;
                                            while (reader.pos < end2)
                                                message.supportedPrivacy.push(reader.int32());
                                        } else
                                            message.supportedPrivacy.push(reader.int32());
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a Registration message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.domains.v1.Registration
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.domains.v1.Registration} Registration
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Registration.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a Registration message.
                         * @function verify
                         * @memberof google.cloud.domains.v1.Registration
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Registration.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.domainName != null && message.hasOwnProperty("domainName"))
                                if (!$util.isString(message.domainName))
                                    return "domainName: string expected";
                            if (message.createTime != null && message.hasOwnProperty("createTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.createTime);
                                if (error)
                                    return "createTime." + error;
                            }
                            if (message.expireTime != null && message.hasOwnProperty("expireTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.expireTime);
                                if (error)
                                    return "expireTime." + error;
                            }
                            if (message.state != null && message.hasOwnProperty("state"))
                                switch (message.state) {
                                default:
                                    return "state: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 6:
                                case 7:
                                case 8:
                                    break;
                                }
                            if (message.issues != null && message.hasOwnProperty("issues")) {
                                if (!Array.isArray(message.issues))
                                    return "issues: array expected";
                                for (var i = 0; i < message.issues.length; ++i)
                                    switch (message.issues[i]) {
                                    default:
                                        return "issues: enum value[] expected";
                                    case 0:
                                    case 1:
                                    case 2:
                                        break;
                                    }
                            }
                            if (message.labels != null && message.hasOwnProperty("labels")) {
                                if (!$util.isObject(message.labels))
                                    return "labels: object expected";
                                var key = Object.keys(message.labels);
                                for (var i = 0; i < key.length; ++i)
                                    if (!$util.isString(message.labels[key[i]]))
                                        return "labels: string{k:string} expected";
                            }
                            if (message.managementSettings != null && message.hasOwnProperty("managementSettings")) {
                                var error = $root.google.cloud.domains.v1.ManagementSettings.verify(message.managementSettings);
                                if (error)
                                    return "managementSettings." + error;
                            }
                            if (message.dnsSettings != null && message.hasOwnProperty("dnsSettings")) {
                                var error = $root.google.cloud.domains.v1.DnsSettings.verify(message.dnsSettings);
                                if (error)
                                    return "dnsSettings." + error;
                            }
                            if (message.contactSettings != null && message.hasOwnProperty("contactSettings")) {
                                var error = $root.google.cloud.domains.v1.ContactSettings.verify(message.contactSettings);
                                if (error)
                                    return "contactSettings." + error;
                            }
                            if (message.pendingContactSettings != null && message.hasOwnProperty("pendingContactSettings")) {
                                var error = $root.google.cloud.domains.v1.ContactSettings.verify(message.pendingContactSettings);
                                if (error)
                                    return "pendingContactSettings." + error;
                            }
                            if (message.supportedPrivacy != null && message.hasOwnProperty("supportedPrivacy")) {
                                if (!Array.isArray(message.supportedPrivacy))
                                    return "supportedPrivacy: array expected";
                                for (var i = 0; i < message.supportedPrivacy.length; ++i)
                                    switch (message.supportedPrivacy[i]) {
                                    default:
                                        return "supportedPrivacy: enum value[] expected";
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                        break;
                                    }
                            }
                            return null;
                        };
    
                        /**
                         * Creates a Registration message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.domains.v1.Registration
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.domains.v1.Registration} Registration
                         */
                        Registration.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.domains.v1.Registration)
                                return object;
                            var message = new $root.google.cloud.domains.v1.Registration();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.domainName != null)
                                message.domainName = String(object.domainName);
                            if (object.createTime != null) {
                                if (typeof object.createTime !== "object")
                                    throw TypeError(".google.cloud.domains.v1.Registration.createTime: object expected");
                                message.createTime = $root.google.protobuf.Timestamp.fromObject(object.createTime);
                            }
                            if (object.expireTime != null) {
                                if (typeof object.expireTime !== "object")
                                    throw TypeError(".google.cloud.domains.v1.Registration.expireTime: object expected");
                                message.expireTime = $root.google.protobuf.Timestamp.fromObject(object.expireTime);
                            }
                            switch (object.state) {
                            default:
                                if (typeof object.state === "number") {
                                    message.state = object.state;
                                    break;
                                }
                                break;
                            case "STATE_UNSPECIFIED":
                            case 0:
                                message.state = 0;
                                break;
                            case "REGISTRATION_PENDING":
                            case 1:
                                message.state = 1;
                                break;
                            case "REGISTRATION_FAILED":
                            case 2:
                                message.state = 2;
                                break;
                            case "TRANSFER_PENDING":
                            case 3:
                                message.state = 3;
                                break;
                            case "TRANSFER_FAILED":
                            case 4:
                                message.state = 4;
                                break;
                            case "ACTIVE":
                            case 6:
                                message.state = 6;
                                break;
                            case "SUSPENDED":
                            case 7:
                                message.state = 7;
                                break;
                            case "EXPORTED":
                            case 8:
                                message.state = 8;
                                break;
                            }
                            if (object.issues) {
                                if (!Array.isArray(object.issues))
                                    throw TypeError(".google.cloud.domains.v1.Registration.issues: array expected");
                                message.issues = [];
                                for (var i = 0; i < object.issues.length; ++i)
                                    switch (object.issues[i]) {
                                    default:
                                        if (typeof object.issues[i] === "number") {
                                            message.issues[i] = object.issues[i];
                                            break;
                                        }
                                    case "ISSUE_UNSPECIFIED":
                                    case 0:
                                        message.issues[i] = 0;
                                        break;
                                    case "CONTACT_SUPPORT":
                                    case 1:
                                        message.issues[i] = 1;
                                        break;
                                    case "UNVERIFIED_EMAIL":
                                    case 2:
                                        message.issues[i] = 2;
                                        break;
                                    }
                            }
                            if (object.labels) {
                                if (typeof object.labels !== "object")
                                    throw TypeError(".google.cloud.domains.v1.Registration.labels: object expected");
                                message.labels = {};
                                for (var keys = Object.keys(object.labels), i = 0; i < keys.length; ++i)
                                    message.labels[keys[i]] = String(object.labels[keys[i]]);
                            }
                            if (object.managementSettings != null) {
                                if (typeof object.managementSettings !== "object")
                                    throw TypeError(".google.cloud.domains.v1.Registration.managementSettings: object expected");
                                message.managementSettings = $root.google.cloud.domains.v1.ManagementSettings.fromObject(object.managementSettings);
                            }
                            if (object.dnsSettings != null) {
                                if (typeof object.dnsSettings !== "object")
                                    throw TypeError(".google.cloud.domains.v1.Registration.dnsSettings: object expected");
                                message.dnsSettings = $root.google.cloud.domains.v1.DnsSettings.fromObject(object.dnsSettings);
                            }
                            if (object.contactSettings != null) {
                                if (typeof object.contactSettings !== "object")
                                    throw TypeError(".google.cloud.domains.v1.Registration.contactSettings: object expected");
                                message.contactSettings = $root.google.cloud.domains.v1.ContactSettings.fromObject(object.contactSettings);
                            }
                            if (object.pendingContactSettings != null) {
                                if (typeof object.pendingContactSettings !== "object")
                                    throw TypeError(".google.cloud.domains.v1.Registration.pendingContactSettings: object expected");
                                message.pendingContactSettings = $root.google.cloud.domains.v1.ContactSettings.fromObject(object.pendingContactSettings);
                            }
                            if (object.supportedPrivacy) {
                                if (!Array.isArray(object.supportedPrivacy))
                                    throw TypeError(".google.cloud.domains.v1.Registration.supportedPrivacy: array expected");
                                message.supportedPrivacy = [];
                                for (var i = 0; i < object.supportedPrivacy.length; ++i)
                                    switch (object.supportedPrivacy[i]) {
                                    default:
                                        if (typeof object.supportedPrivacy[i] === "number") {
                                            message.supportedPrivacy[i] = object.supportedPrivacy[i];
                                            break;
                                        }
                                    case "CONTACT_PRIVACY_UNSPECIFIED":
                                    case 0:
                                        message.supportedPrivacy[i] = 0;
                                        break;
                                    case "PUBLIC_CONTACT_DATA":
                                    case 1:
                                        message.supportedPrivacy[i] = 1;
                                        break;
                                    case "PRIVATE_CONTACT_DATA":
                                    case 2:
                                        message.supportedPrivacy[i] = 2;
                                        break;
                                    case "REDACTED_CONTACT_DATA":
                                    case 3:
                                        message.supportedPrivacy[i] = 3;
                                        break;
                                    }
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a Registration message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.domains.v1.Registration
                         * @static
                         * @param {google.cloud.domains.v1.Registration} message Registration
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Registration.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.issues = [];
                                object.supportedPrivacy = [];
                            }
                            if (options.objects || options.defaults)
                                object.labels = {};
                            if (options.defaults) {
                                object.name = "";
                                object.domainName = "";
                                object.createTime = null;
                                object.expireTime = null;
                                object.state = options.enums === String ? "STATE_UNSPECIFIED" : 0;
                                object.managementSettings = null;
                                object.dnsSettings = null;
                                object.contactSettings = null;
                                object.pendingContactSettings = null;
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.domainName != null && message.hasOwnProperty("domainName"))
                                object.domainName = message.domainName;
                            if (message.createTime != null && message.hasOwnProperty("createTime"))
                                object.createTime = $root.google.protobuf.Timestamp.toObject(message.createTime, options);
                            if (message.expireTime != null && message.hasOwnProperty("expireTime"))
                                object.expireTime = $root.google.protobuf.Timestamp.toObject(message.expireTime, options);
                            if (message.state != null && message.hasOwnProperty("state"))
                                object.state = options.enums === String ? $root.google.cloud.domains.v1.Registration.State[message.state] === undefined ? message.state : $root.google.cloud.domains.v1.Registration.State[message.state] : message.state;
                            if (message.issues && message.issues.length) {
                                object.issues = [];
                                for (var j = 0; j < message.issues.length; ++j)
                                    object.issues[j] = options.enums === String ? $root.google.cloud.domains.v1.Registration.Issue[message.issues[j]] === undefined ? message.issues[j] : $root.google.cloud.domains.v1.Registration.Issue[message.issues[j]] : message.issues[j];
                            }
                            var keys2;
                            if (message.labels && (keys2 = Object.keys(message.labels)).length) {
                                object.labels = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.labels[keys2[j]] = message.labels[keys2[j]];
                            }
                            if (message.managementSettings != null && message.hasOwnProperty("managementSettings"))
                                object.managementSettings = $root.google.cloud.domains.v1.ManagementSettings.toObject(message.managementSettings, options);
                            if (message.dnsSettings != null && message.hasOwnProperty("dnsSettings"))
                                object.dnsSettings = $root.google.cloud.domains.v1.DnsSettings.toObject(message.dnsSettings, options);
                            if (message.contactSettings != null && message.hasOwnProperty("contactSettings"))
                                object.contactSettings = $root.google.cloud.domains.v1.ContactSettings.toObject(message.contactSettings, options);
                            if (message.pendingContactSettings != null && message.hasOwnProperty("pendingContactSettings"))
                                object.pendingContactSettings = $root.google.cloud.domains.v1.ContactSettings.toObject(message.pendingContactSettings, options);
                            if (message.supportedPrivacy && message.supportedPrivacy.length) {
                                object.supportedPrivacy = [];
                                for (var j = 0; j < message.supportedPrivacy.length; ++j)
                                    object.supportedPrivacy[j] = options.enums === String ? $root.google.cloud.domains.v1.ContactPrivacy[message.supportedPrivacy[j]] === undefined ? message.supportedPrivacy[j] : $root.google.cloud.domains.v1.ContactPrivacy[message.supportedPrivacy[j]] : message.supportedPrivacy[j];
                            }
                            return object;
                        };
    
                        /**
                         * Converts this Registration to JSON.
                         * @function toJSON
                         * @memberof google.cloud.domains.v1.Registration
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Registration.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for Registration
                         * @function getTypeUrl
                         * @memberof google.cloud.domains.v1.Registration
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Registration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.domains.v1.Registration";
                        };
    
                        /**
                         * State enum.
                         * @name google.cloud.domains.v1.Registration.State
                         * @enum {number}
                         * @property {number} STATE_UNSPECIFIED=0 STATE_UNSPECIFIED value
                         * @property {number} REGISTRATION_PENDING=1 REGISTRATION_PENDING value
                         * @property {number} REGISTRATION_FAILED=2 REGISTRATION_FAILED value
                         * @property {number} TRANSFER_PENDING=3 TRANSFER_PENDING value
                         * @property {number} TRANSFER_FAILED=4 TRANSFER_FAILED value
                         * @property {number} ACTIVE=6 ACTIVE value
                         * @property {number} SUSPENDED=7 SUSPENDED value
                         * @property {number} EXPORTED=8 EXPORTED value
                         */
                        Registration.State = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "STATE_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "REGISTRATION_PENDING"] = 1;
                            values[valuesById[2] = "REGISTRATION_FAILED"] = 2;
                            values[valuesById[3] = "TRANSFER_PENDING"] = 3;
                            values[valuesById[4] = "TRANSFER_FAILED"] = 4;
                            values[valuesById[6] = "ACTIVE"] = 6;
                            values[valuesById[7] = "SUSPENDED"] = 7;
                            values[valuesById[8] = "EXPORTED"] = 8;
                            return values;
                        })();
    
                        /**
                         * Issue enum.
                         * @name google.cloud.domains.v1.Registration.Issue
                         * @enum {number}
                         * @property {number} ISSUE_UNSPECIFIED=0 ISSUE_UNSPECIFIED value
                         * @property {number} CONTACT_SUPPORT=1 CONTACT_SUPPORT value
                         * @property {number} UNVERIFIED_EMAIL=2 UNVERIFIED_EMAIL value
                         */
                        Registration.Issue = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "ISSUE_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "CONTACT_SUPPORT"] = 1;
                            values[valuesById[2] = "UNVERIFIED_EMAIL"] = 2;
                            return values;
                        })();
    
                        return Registration;
                    })();
    
                    v1.ManagementSettings = (function() {
    
                        /**
                         * Properties of a ManagementSettings.
                         * @memberof google.cloud.domains.v1
                         * @interface IManagementSettings
                         * @property {google.cloud.domains.v1.ManagementSettings.RenewalMethod|null} [renewalMethod] ManagementSettings renewalMethod
                         * @property {google.cloud.domains.v1.TransferLockState|null} [transferLockState] ManagementSettings transferLockState
                         */
    
                        /**
                         * Constructs a new ManagementSettings.
                         * @memberof google.cloud.domains.v1
                         * @classdesc Represents a ManagementSettings.
                         * @implements IManagementSettings
                         * @constructor
                         * @param {google.cloud.domains.v1.IManagementSettings=} [properties] Properties to set
                         */
                        function ManagementSettings(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ManagementSettings renewalMethod.
                         * @member {google.cloud.domains.v1.ManagementSettings.RenewalMethod} renewalMethod
                         * @memberof google.cloud.domains.v1.ManagementSettings
                         * @instance
                         */
                        ManagementSettings.prototype.renewalMethod = 0;
    
                        /**
                         * ManagementSettings transferLockState.
                         * @member {google.cloud.domains.v1.TransferLockState} transferLockState
                         * @memberof google.cloud.domains.v1.ManagementSettings
                         * @instance
                         */
                        ManagementSettings.prototype.transferLockState = 0;
    
                        /**
                         * Creates a new ManagementSettings instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.domains.v1.ManagementSettings
                         * @static
                         * @param {google.cloud.domains.v1.IManagementSettings=} [properties] Properties to set
                         * @returns {google.cloud.domains.v1.ManagementSettings} ManagementSettings instance
                         */
                        ManagementSettings.create = function create(properties) {
                            return new ManagementSettings(properties);
                        };
    
                        /**
                         * Encodes the specified ManagementSettings message. Does not implicitly {@link google.cloud.domains.v1.ManagementSettings.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.domains.v1.ManagementSettings
                         * @static
                         * @param {google.cloud.domains.v1.IManagementSettings} message ManagementSettings message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ManagementSettings.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.renewalMethod != null && Object.hasOwnProperty.call(message, "renewalMethod"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.renewalMethod);
                            if (message.transferLockState != null && Object.hasOwnProperty.call(message, "transferLockState"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.transferLockState);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ManagementSettings message, length delimited. Does not implicitly {@link google.cloud.domains.v1.ManagementSettings.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.domains.v1.ManagementSettings
                         * @static
                         * @param {google.cloud.domains.v1.IManagementSettings} message ManagementSettings message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ManagementSettings.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ManagementSettings message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.domains.v1.ManagementSettings
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.domains.v1.ManagementSettings} ManagementSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ManagementSettings.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.domains.v1.ManagementSettings();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 3: {
                                        message.renewalMethod = reader.int32();
                                        break;
                                    }
                                case 4: {
                                        message.transferLockState = reader.int32();
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ManagementSettings message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.domains.v1.ManagementSettings
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.domains.v1.ManagementSettings} ManagementSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ManagementSettings.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ManagementSettings message.
                         * @function verify
                         * @memberof google.cloud.domains.v1.ManagementSettings
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ManagementSettings.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.renewalMethod != null && message.hasOwnProperty("renewalMethod"))
                                switch (message.renewalMethod) {
                                default:
                                    return "renewalMethod: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            if (message.transferLockState != null && message.hasOwnProperty("transferLockState"))
                                switch (message.transferLockState) {
                                default:
                                    return "transferLockState: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            return null;
                        };
    
                        /**
                         * Creates a ManagementSettings message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.domains.v1.ManagementSettings
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.domains.v1.ManagementSettings} ManagementSettings
                         */
                        ManagementSettings.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.domains.v1.ManagementSettings)
                                return object;
                            var message = new $root.google.cloud.domains.v1.ManagementSettings();
                            switch (object.renewalMethod) {
                            default:
                                if (typeof object.renewalMethod === "number") {
                                    message.renewalMethod = object.renewalMethod;
                                    break;
                                }
                                break;
                            case "RENEWAL_METHOD_UNSPECIFIED":
                            case 0:
                                message.renewalMethod = 0;
                                break;
                            case "AUTOMATIC_RENEWAL":
                            case 1:
                                message.renewalMethod = 1;
                                break;
                            case "MANUAL_RENEWAL":
                            case 2:
                                message.renewalMethod = 2;
                                break;
                            }
                            switch (object.transferLockState) {
                            default:
                                if (typeof object.transferLockState === "number") {
                                    message.transferLockState = object.transferLockState;
                                    break;
                                }
                                break;
                            case "TRANSFER_LOCK_STATE_UNSPECIFIED":
                            case 0:
                                message.transferLockState = 0;
                                break;
                            case "UNLOCKED":
                            case 1:
                                message.transferLockState = 1;
                                break;
                            case "LOCKED":
                            case 2:
                                message.transferLockState = 2;
                                break;
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ManagementSettings message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.domains.v1.ManagementSettings
                         * @static
                         * @param {google.cloud.domains.v1.ManagementSettings} message ManagementSettings
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ManagementSettings.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.renewalMethod = options.enums === String ? "RENEWAL_METHOD_UNSPECIFIED" : 0;
                                object.transferLockState = options.enums === String ? "TRANSFER_LOCK_STATE_UNSPECIFIED" : 0;
                            }
                            if (message.renewalMethod != null && message.hasOwnProperty("renewalMethod"))
                                object.renewalMethod = options.enums === String ? $root.google.cloud.domains.v1.ManagementSettings.RenewalMethod[message.renewalMethod] === undefined ? message.renewalMethod : $root.google.cloud.domains.v1.ManagementSettings.RenewalMethod[message.renewalMethod] : message.renewalMethod;
                            if (message.transferLockState != null && message.hasOwnProperty("transferLockState"))
                                object.transferLockState = options.enums === String ? $root.google.cloud.domains.v1.TransferLockState[message.transferLockState] === undefined ? message.transferLockState : $root.google.cloud.domains.v1.TransferLockState[message.transferLockState] : message.transferLockState;
                            return object;
                        };
    
                        /**
                         * Converts this ManagementSettings to JSON.
                         * @function toJSON
                         * @memberof google.cloud.domains.v1.ManagementSettings
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ManagementSettings.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ManagementSettings
                         * @function getTypeUrl
                         * @memberof google.cloud.domains.v1.ManagementSettings
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ManagementSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.domains.v1.ManagementSettings";
                        };
    
                        /**
                         * RenewalMethod enum.
                         * @name google.cloud.domains.v1.ManagementSettings.RenewalMethod
                         * @enum {number}
                         * @property {number} RENEWAL_METHOD_UNSPECIFIED=0 RENEWAL_METHOD_UNSPECIFIED value
                         * @property {number} AUTOMATIC_RENEWAL=1 AUTOMATIC_RENEWAL value
                         * @property {number} MANUAL_RENEWAL=2 MANUAL_RENEWAL value
                         */
                        ManagementSettings.RenewalMethod = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "RENEWAL_METHOD_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "AUTOMATIC_RENEWAL"] = 1;
                            values[valuesById[2] = "MANUAL_RENEWAL"] = 2;
                            return values;
                        })();
    
                        return ManagementSettings;
                    })();
    
                    v1.DnsSettings = (function() {
    
                        /**
                         * Properties of a DnsSettings.
                         * @memberof google.cloud.domains.v1
                         * @interface IDnsSettings
                         * @property {google.cloud.domains.v1.DnsSettings.ICustomDns|null} [customDns] DnsSettings customDns
                         * @property {google.cloud.domains.v1.DnsSettings.IGoogleDomainsDns|null} [googleDomainsDns] DnsSettings googleDomainsDns
                         * @property {Array.<google.cloud.domains.v1.DnsSettings.IGlueRecord>|null} [glueRecords] DnsSettings glueRecords
                         */
    
                        /**
                         * Constructs a new DnsSettings.
                         * @memberof google.cloud.domains.v1
                         * @classdesc Represents a DnsSettings.
                         * @implements IDnsSettings
                         * @constructor
                         * @param {google.cloud.domains.v1.IDnsSettings=} [properties] Properties to set
                         */
                        function DnsSettings(properties) {
                            this.glueRecords = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * DnsSettings customDns.
                         * @member {google.cloud.domains.v1.DnsSettings.ICustomDns|null|undefined} customDns
                         * @memberof google.cloud.domains.v1.DnsSettings
                         * @instance
                         */
                        DnsSettings.prototype.customDns = null;
    
                        /**
                         * DnsSettings googleDomainsDns.
                         * @member {google.cloud.domains.v1.DnsSettings.IGoogleDomainsDns|null|undefined} googleDomainsDns
                         * @memberof google.cloud.domains.v1.DnsSettings
                         * @instance
                         */
                        DnsSettings.prototype.googleDomainsDns = null;
    
                        /**
                         * DnsSettings glueRecords.
                         * @member {Array.<google.cloud.domains.v1.DnsSettings.IGlueRecord>} glueRecords
                         * @memberof google.cloud.domains.v1.DnsSettings
                         * @instance
                         */
                        DnsSettings.prototype.glueRecords = $util.emptyArray;
    
                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;
    
                        /**
                         * DnsSettings dnsProvider.
                         * @member {"customDns"|"googleDomainsDns"|undefined} dnsProvider
                         * @memberof google.cloud.domains.v1.DnsSettings
                         * @instance
                         */
                        Object.defineProperty(DnsSettings.prototype, "dnsProvider", {
                            get: $util.oneOfGetter($oneOfFields = ["customDns", "googleDomainsDns"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * Creates a new DnsSettings instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.domains.v1.DnsSettings
                         * @static
                         * @param {google.cloud.domains.v1.IDnsSettings=} [properties] Properties to set
                         * @returns {google.cloud.domains.v1.DnsSettings} DnsSettings instance
                         */
                        DnsSettings.create = function create(properties) {
                            return new DnsSettings(properties);
                        };
    
                        /**
                         * Encodes the specified DnsSettings message. Does not implicitly {@link google.cloud.domains.v1.DnsSettings.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.domains.v1.DnsSettings
                         * @static
                         * @param {google.cloud.domains.v1.IDnsSettings} message DnsSettings message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DnsSettings.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.customDns != null && Object.hasOwnProperty.call(message, "customDns"))
                                $root.google.cloud.domains.v1.DnsSettings.CustomDns.encode(message.customDns, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.googleDomainsDns != null && Object.hasOwnProperty.call(message, "googleDomainsDns"))
                                $root.google.cloud.domains.v1.DnsSettings.GoogleDomainsDns.encode(message.googleDomainsDns, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.glueRecords != null && message.glueRecords.length)
                                for (var i = 0; i < message.glueRecords.length; ++i)
                                    $root.google.cloud.domains.v1.DnsSettings.GlueRecord.encode(message.glueRecords[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified DnsSettings message, length delimited. Does not implicitly {@link google.cloud.domains.v1.DnsSettings.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.domains.v1.DnsSettings
                         * @static
                         * @param {google.cloud.domains.v1.IDnsSettings} message DnsSettings message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DnsSettings.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a DnsSettings message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.domains.v1.DnsSettings
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.domains.v1.DnsSettings} DnsSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DnsSettings.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.domains.v1.DnsSettings();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.customDns = $root.google.cloud.domains.v1.DnsSettings.CustomDns.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.googleDomainsDns = $root.google.cloud.domains.v1.DnsSettings.GoogleDomainsDns.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 4: {
                                        if (!(message.glueRecords && message.glueRecords.length))
                                            message.glueRecords = [];
                                        message.glueRecords.push($root.google.cloud.domains.v1.DnsSettings.GlueRecord.decode(reader, reader.uint32()));
                                        break;
                                    }
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a DnsSettings message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.domains.v1.DnsSettings
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.domains.v1.DnsSettings} DnsSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DnsSettings.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a DnsSettings message.
                         * @function verify
                         * @memberof google.cloud.domains.v1.DnsSettings
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DnsSettings.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.customDns != null && message.hasOwnProperty("customDns")) {
                                properties.dnsProvider = 1;
                                {
                                    var error = $root.google.cloud.domains.v1.DnsSettings.CustomDns.verify(message.customDns);
                                    if (error)
                                        return "customDns." + error;
                                }
                            }
                            if (message.googleDomainsDns != null && message.hasOwnProperty("googleDomainsDns")) {
                                if (properties.dnsProvider === 1)
                                    return "dnsProvider: multiple values";
                                properties.dnsProvider = 1;
                                {
                                    var error = $root.google.cloud.domains.v1.DnsSettings.GoogleDomainsDns.verify(message.googleDomainsDns);
                                    if (error)
                                        return "googleDomainsDns." + error;
                                }
                            }
                            if (message.glueRecords != null && message.hasOwnProperty("glueRecords")) {
                                if (!Array.isArray(message.glueRecords))
                                    return "glueRecords: array expected";
                                for (var i = 0; i < message.glueRecords.length; ++i) {
                                    var error = $root.google.cloud.domains.v1.DnsSettings.GlueRecord.verify(message.glueRecords[i]);
                                    if (error)
                                        return "glueRecords." + error;
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates a DnsSettings message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.domains.v1.DnsSettings
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.domains.v1.DnsSettings} DnsSettings
                         */
                        DnsSettings.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.domains.v1.DnsSettings)
                                return object;
                            var message = new $root.google.cloud.domains.v1.DnsSettings();
                            if (object.customDns != null) {
                                if (typeof object.customDns !== "object")
                                    throw TypeError(".google.cloud.domains.v1.DnsSettings.customDns: object expected");
                                message.customDns = $root.google.cloud.domains.v1.DnsSettings.CustomDns.fromObject(object.customDns);
                            }
                            if (object.googleDomainsDns != null) {
                                if (typeof object.googleDomainsDns !== "object")
                                    throw TypeError(".google.cloud.domains.v1.DnsSettings.googleDomainsDns: object expected");
                                message.googleDomainsDns = $root.google.cloud.domains.v1.DnsSettings.GoogleDomainsDns.fromObject(object.googleDomainsDns);
                            }
                            if (object.glueRecords) {
                                if (!Array.isArray(object.glueRecords))
                                    throw TypeError(".google.cloud.domains.v1.DnsSettings.glueRecords: array expected");
                                message.glueRecords = [];
                                for (var i = 0; i < object.glueRecords.length; ++i) {
                                    if (typeof object.glueRecords[i] !== "object")
                                        throw TypeError(".google.cloud.domains.v1.DnsSettings.glueRecords: object expected");
                                    message.glueRecords[i] = $root.google.cloud.domains.v1.DnsSettings.GlueRecord.fromObject(object.glueRecords[i]);
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a DnsSettings message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.domains.v1.DnsSettings
                         * @static
                         * @param {google.cloud.domains.v1.DnsSettings} message DnsSettings
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DnsSettings.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.glueRecords = [];
                            if (message.customDns != null && message.hasOwnProperty("customDns")) {
                                object.customDns = $root.google.cloud.domains.v1.DnsSettings.CustomDns.toObject(message.customDns, options);
                                if (options.oneofs)
                                    object.dnsProvider = "customDns";
                            }
                            if (message.googleDomainsDns != null && message.hasOwnProperty("googleDomainsDns")) {
                                object.googleDomainsDns = $root.google.cloud.domains.v1.DnsSettings.GoogleDomainsDns.toObject(message.googleDomainsDns, options);
                                if (options.oneofs)
                                    object.dnsProvider = "googleDomainsDns";
                            }
                            if (message.glueRecords && message.glueRecords.length) {
                                object.glueRecords = [];
                                for (var j = 0; j < message.glueRecords.length; ++j)
                                    object.glueRecords[j] = $root.google.cloud.domains.v1.DnsSettings.GlueRecord.toObject(message.glueRecords[j], options);
                            }
                            return object;
                        };
    
                        /**
                         * Converts this DnsSettings to JSON.
                         * @function toJSON
                         * @memberof google.cloud.domains.v1.DnsSettings
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DnsSettings.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for DnsSettings
                         * @function getTypeUrl
                         * @memberof google.cloud.domains.v1.DnsSettings
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        DnsSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.domains.v1.DnsSettings";
                        };
    
                        DnsSettings.CustomDns = (function() {
    
                            /**
                             * Properties of a CustomDns.
                             * @memberof google.cloud.domains.v1.DnsSettings
                             * @interface ICustomDns
                             * @property {Array.<string>|null} [nameServers] CustomDns nameServers
                             * @property {Array.<google.cloud.domains.v1.DnsSettings.IDsRecord>|null} [dsRecords] CustomDns dsRecords
                             */
    
                            /**
                             * Constructs a new CustomDns.
                             * @memberof google.cloud.domains.v1.DnsSettings
                             * @classdesc Represents a CustomDns.
                             * @implements ICustomDns
                             * @constructor
                             * @param {google.cloud.domains.v1.DnsSettings.ICustomDns=} [properties] Properties to set
                             */
                            function CustomDns(properties) {
                                this.nameServers = [];
                                this.dsRecords = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * CustomDns nameServers.
                             * @member {Array.<string>} nameServers
                             * @memberof google.cloud.domains.v1.DnsSettings.CustomDns
                             * @instance
                             */
                            CustomDns.prototype.nameServers = $util.emptyArray;
    
                            /**
                             * CustomDns dsRecords.
                             * @member {Array.<google.cloud.domains.v1.DnsSettings.IDsRecord>} dsRecords
                             * @memberof google.cloud.domains.v1.DnsSettings.CustomDns
                             * @instance
                             */
                            CustomDns.prototype.dsRecords = $util.emptyArray;
    
                            /**
                             * Creates a new CustomDns instance using the specified properties.
                             * @function create
                             * @memberof google.cloud.domains.v1.DnsSettings.CustomDns
                             * @static
                             * @param {google.cloud.domains.v1.DnsSettings.ICustomDns=} [properties] Propert