// Copyright 2025 Google LLC
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
    var $root = $protobuf.roots._google_cloud_access_context_manager_protos || ($protobuf.roots._google_cloud_access_context_manager_protos = {});
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.identity = (function() {
    
            /**
             * Namespace identity.
             * @memberof google
             * @namespace
             */
            var identity = {};
    
            identity.accesscontextmanager = (function() {
    
                /**
                 * Namespace accesscontextmanager.
                 * @memberof google.identity
                 * @namespace
                 */
                var accesscontextmanager = {};
    
                accesscontextmanager.type = (function() {
    
                    /**
                     * Namespace type.
                     * @memberof google.identity.accesscontextmanager
                     * @namespace
                     */
                    var type = {};
    
                    /**
                     * DeviceEncryptionStatus enum.
                     * @name google.identity.accesscontextmanager.type.DeviceEncryptionStatus
                     * @enum {number}
                     * @property {number} ENCRYPTION_UNSPECIFIED=0 ENCRYPTION_UNSPECIFIED value
                     * @property {number} ENCRYPTION_UNSUPPORTED=1 ENCRYPTION_UNSUPPORTED value
                     * @property {number} UNENCRYPTED=2 UNENCRYPTED value
                     * @property {number} ENCRYPTED=3 ENCRYPTED value
                     */
                    type.DeviceEncryptionStatus = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "ENCRYPTION_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "ENCRYPTION_UNSUPPORTED"] = 1;
                        values[valuesById[2] = "UNENCRYPTED"] = 2;
                        values[valuesById[3] = "ENCRYPTED"] = 3;
                        return values;
                    })();
    
                    /**
                     * OsType enum.
                     * @name google.identity.accesscontextmanager.type.OsType
                     * @enum {number}
                     * @property {number} OS_UNSPECIFIED=0 OS_UNSPECIFIED value
                     * @property {number} DESKTOP_MAC=1 DESKTOP_MAC value
                     * @property {number} DESKTOP_WINDOWS=2 DESKTOP_WINDOWS value
                     * @property {number} DESKTOP_LINUX=3 DESKTOP_LINUX value
                     * @property {number} DESKTOP_CHROME_OS=6 DESKTOP_CHROME_OS value
                     * @property {number} ANDROID=4 ANDROID value
                     * @property {number} IOS=5 IOS value
                     */
                    type.OsType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "OS_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "DESKTOP_MAC"] = 1;
                        values[valuesById[2] = "DESKTOP_WINDOWS"] = 2;
                        values[valuesById[3] = "DESKTOP_LINUX"] = 3;
                        values[valuesById[6] = "DESKTOP_CHROME_OS"] = 6;
                        values[valuesById[4] = "ANDROID"] = 4;
                        values[valuesById[5] = "IOS"] = 5;
                        return values;
                    })();
    
                    /**
                     * DeviceManagementLevel enum.
                     * @name google.identity.accesscontextmanager.type.DeviceManagementLevel
                     * @enum {number}
                     * @property {number} MANAGEMENT_UNSPECIFIED=0 MANAGEMENT_UNSPECIFIED value
                     * @property {number} NONE=1 NONE value
                     * @property {number} BASIC=2 BASIC value
                     * @property {number} COMPLETE=3 COMPLETE value
                     */
                    type.DeviceManagementLevel = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "MANAGEMENT_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "NONE"] = 1;
                        values[valuesById[2] = "BASIC"] = 2;
                        values[valuesById[3] = "COMPLETE"] = 3;
                        return values;
                    })();
    
                    return type;
                })();
    
                accesscontextmanager.v1 = (function() {
    
                    /**
                     * Namespace v1.
                     * @memberof google.identity.accesscontextmanager
                     * @namespace
                     */
                    var v1 = {};
    
                    v1.AccessContextManager = (function() {
    
                        /**
                         * Constructs a new AccessContextManager service.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents an AccessContextManager
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function AccessContextManager(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }
    
                        (AccessContextManager.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AccessContextManager;
    
                        /**
                         * Creates new AccessContextManager service using the specified rpc implementation.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {AccessContextManager} RPC service. Useful where requests and/or responses are streamed.
                         */
                        AccessContextManager.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|listAccessPolicies}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef ListAccessPoliciesCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse} [response] ListAccessPoliciesResponse
                         */
    
                        /**
                         * Calls ListAccessPolicies.
                         * @function listAccessPolicies
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IListAccessPoliciesRequest} request ListAccessPoliciesRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.ListAccessPoliciesCallback} callback Node-style callback called with the error, if any, and ListAccessPoliciesResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.listAccessPolicies = function listAccessPolicies(request, callback) {
                            return this.rpcCall(listAccessPolicies, $root.google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest, $root.google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse, request, callback);
                        }, "name", { value: "ListAccessPolicies" });
    
                        /**
                         * Calls ListAccessPolicies.
                         * @function listAccessPolicies
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IListAccessPoliciesRequest} request ListAccessPoliciesRequest message or plain object
                         * @returns {Promise<google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|getAccessPolicy}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef GetAccessPolicyCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.identity.accesscontextmanager.v1.AccessPolicy} [response] AccessPolicy
                         */
    
                        /**
                         * Calls GetAccessPolicy.
                         * @function getAccessPolicy
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IGetAccessPolicyRequest} request GetAccessPolicyRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.GetAccessPolicyCallback} callback Node-style callback called with the error, if any, and AccessPolicy
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.getAccessPolicy = function getAccessPolicy(request, callback) {
                            return this.rpcCall(getAccessPolicy, $root.google.identity.accesscontextmanager.v1.GetAccessPolicyRequest, $root.google.identity.accesscontextmanager.v1.AccessPolicy, request, callback);
                        }, "name", { value: "GetAccessPolicy" });
    
                        /**
                         * Calls GetAccessPolicy.
                         * @function getAccessPolicy
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IGetAccessPolicyRequest} request GetAccessPolicyRequest message or plain object
                         * @returns {Promise<google.identity.accesscontextmanager.v1.AccessPolicy>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|createAccessPolicy}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef CreateAccessPolicyCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls CreateAccessPolicy.
                         * @function createAccessPolicy
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IAccessPolicy} request AccessPolicy message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.CreateAccessPolicyCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.createAccessPolicy = function createAccessPolicy(request, callback) {
                            return this.rpcCall(createAccessPolicy, $root.google.identity.accesscontextmanager.v1.AccessPolicy, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "CreateAccessPolicy" });
    
                        /**
                         * Calls CreateAccessPolicy.
                         * @function createAccessPolicy
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IAccessPolicy} request AccessPolicy message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|updateAccessPolicy}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef UpdateAccessPolicyCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls UpdateAccessPolicy.
                         * @function updateAccessPolicy
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IUpdateAccessPolicyRequest} request UpdateAccessPolicyRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.UpdateAccessPolicyCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.updateAccessPolicy = function updateAccessPolicy(request, callback) {
                            return this.rpcCall(updateAccessPolicy, $root.google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "UpdateAccessPolicy" });
    
                        /**
                         * Calls UpdateAccessPolicy.
                         * @function updateAccessPolicy
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IUpdateAccessPolicyRequest} request UpdateAccessPolicyRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|deleteAccessPolicy}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef DeleteAccessPolicyCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls DeleteAccessPolicy.
                         * @function deleteAccessPolicy
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IDeleteAccessPolicyRequest} request DeleteAccessPolicyRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.DeleteAccessPolicyCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.deleteAccessPolicy = function deleteAccessPolicy(request, callback) {
                            return this.rpcCall(deleteAccessPolicy, $root.google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "DeleteAccessPolicy" });
    
                        /**
                         * Calls DeleteAccessPolicy.
                         * @function deleteAccessPolicy
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IDeleteAccessPolicyRequest} request DeleteAccessPolicyRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|listAccessLevels}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef ListAccessLevelsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.identity.accesscontextmanager.v1.ListAccessLevelsResponse} [response] ListAccessLevelsResponse
                         */
    
                        /**
                         * Calls ListAccessLevels.
                         * @function listAccessLevels
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IListAccessLevelsRequest} request ListAccessLevelsRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.ListAccessLevelsCallback} callback Node-style callback called with the error, if any, and ListAccessLevelsResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.listAccessLevels = function listAccessLevels(request, callback) {
                            return this.rpcCall(listAccessLevels, $root.google.identity.accesscontextmanager.v1.ListAccessLevelsRequest, $root.google.identity.accesscontextmanager.v1.ListAccessLevelsResponse, request, callback);
                        }, "name", { value: "ListAccessLevels" });
    
                        /**
                         * Calls ListAccessLevels.
                         * @function listAccessLevels
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IListAccessLevelsRequest} request ListAccessLevelsRequest message or plain object
                         * @returns {Promise<google.identity.accesscontextmanager.v1.ListAccessLevelsResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|getAccessLevel}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef GetAccessLevelCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.identity.accesscontextmanager.v1.AccessLevel} [response] AccessLevel
                         */
    
                        /**
                         * Calls GetAccessLevel.
                         * @function getAccessLevel
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IGetAccessLevelRequest} request GetAccessLevelRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.GetAccessLevelCallback} callback Node-style callback called with the error, if any, and AccessLevel
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.getAccessLevel = function getAccessLevel(request, callback) {
                            return this.rpcCall(getAccessLevel, $root.google.identity.accesscontextmanager.v1.GetAccessLevelRequest, $root.google.identity.accesscontextmanager.v1.AccessLevel, request, callback);
                        }, "name", { value: "GetAccessLevel" });
    
                        /**
                         * Calls GetAccessLevel.
                         * @function getAccessLevel
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IGetAccessLevelRequest} request GetAccessLevelRequest message or plain object
                         * @returns {Promise<google.identity.accesscontextmanager.v1.AccessLevel>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|createAccessLevel}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef CreateAccessLevelCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls CreateAccessLevel.
                         * @function createAccessLevel
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.ICreateAccessLevelRequest} request CreateAccessLevelRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.CreateAccessLevelCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.createAccessLevel = function createAccessLevel(request, callback) {
                            return this.rpcCall(createAccessLevel, $root.google.identity.accesscontextmanager.v1.CreateAccessLevelRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "CreateAccessLevel" });
    
                        /**
                         * Calls CreateAccessLevel.
                         * @function createAccessLevel
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.ICreateAccessLevelRequest} request CreateAccessLevelRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|updateAccessLevel}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef UpdateAccessLevelCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls UpdateAccessLevel.
                         * @function updateAccessLevel
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IUpdateAccessLevelRequest} request UpdateAccessLevelRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.UpdateAccessLevelCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.updateAccessLevel = function updateAccessLevel(request, callback) {
                            return this.rpcCall(updateAccessLevel, $root.google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "UpdateAccessLevel" });
    
                        /**
                         * Calls UpdateAccessLevel.
                         * @function updateAccessLevel
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IUpdateAccessLevelRequest} request UpdateAccessLevelRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|deleteAccessLevel}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef DeleteAccessLevelCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls DeleteAccessLevel.
                         * @function deleteAccessLevel
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IDeleteAccessLevelRequest} request DeleteAccessLevelRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.DeleteAccessLevelCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.deleteAccessLevel = function deleteAccessLevel(request, callback) {
                            return this.rpcCall(deleteAccessLevel, $root.google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "DeleteAccessLevel" });
    
                        /**
                         * Calls DeleteAccessLevel.
                         * @function deleteAccessLevel
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IDeleteAccessLevelRequest} request DeleteAccessLevelRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|replaceAccessLevels}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef ReplaceAccessLevelsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls ReplaceAccessLevels.
                         * @function replaceAccessLevels
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IReplaceAccessLevelsRequest} request ReplaceAccessLevelsRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.ReplaceAccessLevelsCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.replaceAccessLevels = function replaceAccessLevels(request, callback) {
                            return this.rpcCall(replaceAccessLevels, $root.google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "ReplaceAccessLevels" });
    
                        /**
                         * Calls ReplaceAccessLevels.
                         * @function replaceAccessLevels
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IReplaceAccessLevelsRequest} request ReplaceAccessLevelsRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|listServicePerimeters}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef ListServicePerimetersCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.identity.accesscontextmanager.v1.ListServicePerimetersResponse} [response] ListServicePerimetersResponse
                         */
    
                        /**
                         * Calls ListServicePerimeters.
                         * @function listServicePerimeters
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IListServicePerimetersRequest} request ListServicePerimetersRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.ListServicePerimetersCallback} callback Node-style callback called with the error, if any, and ListServicePerimetersResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.listServicePerimeters = function listServicePerimeters(request, callback) {
                            return this.rpcCall(listServicePerimeters, $root.google.identity.accesscontextmanager.v1.ListServicePerimetersRequest, $root.google.identity.accesscontextmanager.v1.ListServicePerimetersResponse, request, callback);
                        }, "name", { value: "ListServicePerimeters" });
    
                        /**
                         * Calls ListServicePerimeters.
                         * @function listServicePerimeters
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IListServicePerimetersRequest} request ListServicePerimetersRequest message or plain object
                         * @returns {Promise<google.identity.accesscontextmanager.v1.ListServicePerimetersResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|getServicePerimeter}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef GetServicePerimeterCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.identity.accesscontextmanager.v1.ServicePerimeter} [response] ServicePerimeter
                         */
    
                        /**
                         * Calls GetServicePerimeter.
                         * @function getServicePerimeter
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IGetServicePerimeterRequest} request GetServicePerimeterRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.GetServicePerimeterCallback} callback Node-style callback called with the error, if any, and ServicePerimeter
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.getServicePerimeter = function getServicePerimeter(request, callback) {
                            return this.rpcCall(getServicePerimeter, $root.google.identity.accesscontextmanager.v1.GetServicePerimeterRequest, $root.google.identity.accesscontextmanager.v1.ServicePerimeter, request, callback);
                        }, "name", { value: "GetServicePerimeter" });
    
                        /**
                         * Calls GetServicePerimeter.
                         * @function getServicePerimeter
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IGetServicePerimeterRequest} request GetServicePerimeterRequest message or plain object
                         * @returns {Promise<google.identity.accesscontextmanager.v1.ServicePerimeter>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|createServicePerimeter}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef CreateServicePerimeterCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls CreateServicePerimeter.
                         * @function createServicePerimeter
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.ICreateServicePerimeterRequest} request CreateServicePerimeterRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.CreateServicePerimeterCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.createServicePerimeter = function createServicePerimeter(request, callback) {
                            return this.rpcCall(createServicePerimeter, $root.google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "CreateServicePerimeter" });
    
                        /**
                         * Calls CreateServicePerimeter.
                         * @function createServicePerimeter
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.ICreateServicePerimeterRequest} request CreateServicePerimeterRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|updateServicePerimeter}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef UpdateServicePerimeterCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls UpdateServicePerimeter.
                         * @function updateServicePerimeter
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IUpdateServicePerimeterRequest} request UpdateServicePerimeterRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.UpdateServicePerimeterCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.updateServicePerimeter = function updateServicePerimeter(request, callback) {
                            return this.rpcCall(updateServicePerimeter, $root.google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "UpdateServicePerimeter" });
    
                        /**
                         * Calls UpdateServicePerimeter.
                         * @function updateServicePerimeter
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IUpdateServicePerimeterRequest} request UpdateServicePerimeterRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|deleteServicePerimeter}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef DeleteServicePerimeterCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls DeleteServicePerimeter.
                         * @function deleteServicePerimeter
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IDeleteServicePerimeterRequest} request DeleteServicePerimeterRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.DeleteServicePerimeterCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.deleteServicePerimeter = function deleteServicePerimeter(request, callback) {
                            return this.rpcCall(deleteServicePerimeter, $root.google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "DeleteServicePerimeter" });
    
                        /**
                         * Calls DeleteServicePerimeter.
                         * @function deleteServicePerimeter
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IDeleteServicePerimeterRequest} request DeleteServicePerimeterRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|replaceServicePerimeters}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef ReplaceServicePerimetersCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls ReplaceServicePerimeters.
                         * @function replaceServicePerimeters
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IReplaceServicePerimetersRequest} request ReplaceServicePerimetersRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.ReplaceServicePerimetersCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.replaceServicePerimeters = function replaceServicePerimeters(request, callback) {
                            return this.rpcCall(replaceServicePerimeters, $root.google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "ReplaceServicePerimeters" });
    
                        /**
                         * Calls ReplaceServicePerimeters.
                         * @function replaceServicePerimeters
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IReplaceServicePerimetersRequest} request ReplaceServicePerimetersRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|commitServicePerimeters}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef CommitServicePerimetersCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls CommitServicePerimeters.
                         * @function commitServicePerimeters
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.ICommitServicePerimetersRequest} request CommitServicePerimetersRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.CommitServicePerimetersCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.commitServicePerimeters = function commitServicePerimeters(request, callback) {
                            return this.rpcCall(commitServicePerimeters, $root.google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "CommitServicePerimeters" });
    
                        /**
                         * Calls CommitServicePerimeters.
                         * @function commitServicePerimeters
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.ICommitServicePerimetersRequest} request CommitServicePerimetersRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|listGcpUserAccessBindings}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef ListGcpUserAccessBindingsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsResponse} [response] ListGcpUserAccessBindingsResponse
                         */
    
                        /**
                         * Calls ListGcpUserAccessBindings.
                         * @function listGcpUserAccessBindings
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IListGcpUserAccessBindingsRequest} request ListGcpUserAccessBindingsRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.ListGcpUserAccessBindingsCallback} callback Node-style callback called with the error, if any, and ListGcpUserAccessBindingsResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.listGcpUserAccessBindings = function listGcpUserAccessBindings(request, callback) {
                            return this.rpcCall(listGcpUserAccessBindings, $root.google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsRequest, $root.google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsResponse, request, callback);
                        }, "name", { value: "ListGcpUserAccessBindings" });
    
                        /**
                         * Calls ListGcpUserAccessBindings.
                         * @function listGcpUserAccessBindings
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IListGcpUserAccessBindingsRequest} request ListGcpUserAccessBindingsRequest message or plain object
                         * @returns {Promise<google.identity.accesscontextmanager.v1.ListGcpUserAccessBindingsResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|getGcpUserAccessBinding}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef GetGcpUserAccessBindingCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.identity.accesscontextmanager.v1.GcpUserAccessBinding} [response] GcpUserAccessBinding
                         */
    
                        /**
                         * Calls GetGcpUserAccessBinding.
                         * @function getGcpUserAccessBinding
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IGetGcpUserAccessBindingRequest} request GetGcpUserAccessBindingRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.GetGcpUserAccessBindingCallback} callback Node-style callback called with the error, if any, and GcpUserAccessBinding
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.getGcpUserAccessBinding = function getGcpUserAccessBinding(request, callback) {
                            return this.rpcCall(getGcpUserAccessBinding, $root.google.identity.accesscontextmanager.v1.GetGcpUserAccessBindingRequest, $root.google.identity.accesscontextmanager.v1.GcpUserAccessBinding, request, callback);
                        }, "name", { value: "GetGcpUserAccessBinding" });
    
                        /**
                         * Calls GetGcpUserAccessBinding.
                         * @function getGcpUserAccessBinding
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IGetGcpUserAccessBindingRequest} request GetGcpUserAccessBindingRequest message or plain object
                         * @returns {Promise<google.identity.accesscontextmanager.v1.GcpUserAccessBinding>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|createGcpUserAccessBinding}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef CreateGcpUserAccessBindingCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls CreateGcpUserAccessBinding.
                         * @function createGcpUserAccessBinding
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.ICreateGcpUserAccessBindingRequest} request CreateGcpUserAccessBindingRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.CreateGcpUserAccessBindingCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.createGcpUserAccessBinding = function createGcpUserAccessBinding(request, callback) {
                            return this.rpcCall(createGcpUserAccessBinding, $root.google.identity.accesscontextmanager.v1.CreateGcpUserAccessBindingRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "CreateGcpUserAccessBinding" });
    
                        /**
                         * Calls CreateGcpUserAccessBinding.
                         * @function createGcpUserAccessBinding
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.ICreateGcpUserAccessBindingRequest} request CreateGcpUserAccessBindingRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|updateGcpUserAccessBinding}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef UpdateGcpUserAccessBindingCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls UpdateGcpUserAccessBinding.
                         * @function updateGcpUserAccessBinding
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IUpdateGcpUserAccessBindingRequest} request UpdateGcpUserAccessBindingRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.UpdateGcpUserAccessBindingCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.updateGcpUserAccessBinding = function updateGcpUserAccessBinding(request, callback) {
                            return this.rpcCall(updateGcpUserAccessBinding, $root.google.identity.accesscontextmanager.v1.UpdateGcpUserAccessBindingRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "UpdateGcpUserAccessBinding" });
    
                        /**
                         * Calls UpdateGcpUserAccessBinding.
                         * @function updateGcpUserAccessBinding
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IUpdateGcpUserAccessBindingRequest} request UpdateGcpUserAccessBindingRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|deleteGcpUserAccessBinding}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef DeleteGcpUserAccessBindingCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls DeleteGcpUserAccessBinding.
                         * @function deleteGcpUserAccessBinding
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IDeleteGcpUserAccessBindingRequest} request DeleteGcpUserAccessBindingRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.DeleteGcpUserAccessBindingCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.deleteGcpUserAccessBinding = function deleteGcpUserAccessBinding(request, callback) {
                            return this.rpcCall(deleteGcpUserAccessBinding, $root.google.identity.accesscontextmanager.v1.DeleteGcpUserAccessBindingRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "DeleteGcpUserAccessBinding" });
    
                        /**
                         * Calls DeleteGcpUserAccessBinding.
                         * @function deleteGcpUserAccessBinding
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.identity.accesscontextmanager.v1.IDeleteGcpUserAccessBindingRequest} request DeleteGcpUserAccessBindingRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|setIamPolicy}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef SetIamPolicyCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.iam.v1.Policy} [response] Policy
                         */
    
                        /**
                         * Calls SetIamPolicy.
                         * @function setIamPolicy
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.iam.v1.ISetIamPolicyRequest} request SetIamPolicyRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.SetIamPolicyCallback} callback Node-style callback called with the error, if any, and Policy
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.setIamPolicy = function setIamPolicy(request, callback) {
                            return this.rpcCall(setIamPolicy, $root.google.iam.v1.SetIamPolicyRequest, $root.google.iam.v1.Policy, request, callback);
                        }, "name", { value: "SetIamPolicy" });
    
                        /**
                         * Calls SetIamPolicy.
                         * @function setIamPolicy
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.iam.v1.ISetIamPolicyRequest} request SetIamPolicyRequest message or plain object
                         * @returns {Promise<google.iam.v1.Policy>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|getIamPolicy}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef GetIamPolicyCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.iam.v1.Policy} [response] Policy
                         */
    
                        /**
                         * Calls GetIamPolicy.
                         * @function getIamPolicy
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.iam.v1.IGetIamPolicyRequest} request GetIamPolicyRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.GetIamPolicyCallback} callback Node-style callback called with the error, if any, and Policy
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.getIamPolicy = function getIamPolicy(request, callback) {
                            return this.rpcCall(getIamPolicy, $root.google.iam.v1.GetIamPolicyRequest, $root.google.iam.v1.Policy, request, callback);
                        }, "name", { value: "GetIamPolicy" });
    
                        /**
                         * Calls GetIamPolicy.
                         * @function getIamPolicy
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.iam.v1.IGetIamPolicyRequest} request GetIamPolicyRequest message or plain object
                         * @returns {Promise<google.iam.v1.Policy>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.identity.accesscontextmanager.v1.AccessContextManager|testIamPermissions}.
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @typedef TestIamPermissionsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.iam.v1.TestIamPermissionsResponse} [response] TestIamPermissionsResponse
                         */
    
                        /**
                         * Calls TestIamPermissions.
                         * @function testIamPermissions
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.iam.v1.ITestIamPermissionsRequest} request TestIamPermissionsRequest message or plain object
                         * @param {google.identity.accesscontextmanager.v1.AccessContextManager.TestIamPermissionsCallback} callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessContextManager.prototype.testIamPermissions = function testIamPermissions(request, callback) {
                            return this.rpcCall(testIamPermissions, $root.google.iam.v1.TestIamPermissionsRequest, $root.google.iam.v1.TestIamPermissionsResponse, request, callback);
                        }, "name", { value: "TestIamPermissions" });
    
                        /**
                         * Calls TestIamPermissions.
                         * @function testIamPermissions
                         * @memberof google.identity.accesscontextmanager.v1.AccessContextManager
                         * @instance
                         * @param {google.iam.v1.ITestIamPermissionsRequest} request TestIamPermissionsRequest message or plain object
                         * @returns {Promise<google.iam.v1.TestIamPermissionsResponse>} Promise
                         * @variation 2
                         */
    
                        return AccessContextManager;
                    })();
    
                    v1.ListAccessPoliciesRequest = (function() {
    
                        /**
                         * Properties of a ListAccessPoliciesRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IListAccessPoliciesRequest
                         * @property {string|null} [parent] ListAccessPoliciesRequest parent
                         * @property {number|null} [pageSize] ListAccessPoliciesRequest pageSize
                         * @property {string|null} [pageToken] ListAccessPoliciesRequest pageToken
                         */
    
                        /**
                         * Constructs a new ListAccessPoliciesRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a ListAccessPoliciesRequest.
                         * @implements IListAccessPoliciesRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IListAccessPoliciesRequest=} [properties] Properties to set
                         */
                        function ListAccessPoliciesRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ListAccessPoliciesRequest parent.
                         * @member {string} parent
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest
                         * @instance
                         */
                        ListAccessPoliciesRequest.prototype.parent = "";
    
                        /**
                         * ListAccessPoliciesRequest pageSize.
                         * @member {number} pageSize
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest
                         * @instance
                         */
                        ListAccessPoliciesRequest.prototype.pageSize = 0;
    
                        /**
                         * ListAccessPoliciesRequest pageToken.
                         * @member {string} pageToken
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest
                         * @instance
                         */
                        ListAccessPoliciesRequest.prototype.pageToken = "";
    
                        /**
                         * Creates a new ListAccessPoliciesRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListAccessPoliciesRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest} ListAccessPoliciesRequest instance
                         */
                        ListAccessPoliciesRequest.create = function create(properties) {
                            return new ListAccessPoliciesRequest(properties);
                        };
    
                        /**
                         * Encodes the specified ListAccessPoliciesRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListAccessPoliciesRequest} message ListAccessPoliciesRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListAccessPoliciesRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
                            if (message.pageToken != null && Object.hasOwnProperty.call(message, "pageToken"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pageToken);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListAccessPoliciesRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListAccessPoliciesRequest} message ListAccessPoliciesRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListAccessPoliciesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListAccessPoliciesRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest} ListAccessPoliciesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListAccessPoliciesRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.parent = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.pageSize = reader.int32();
                                        break;
                                    }
                                case 3: {
                                        message.pageToken = reader.string();
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
                         * Decodes a ListAccessPoliciesRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest} ListAccessPoliciesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListAccessPoliciesRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ListAccessPoliciesRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ListAccessPoliciesRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                if (!$util.isString(message.parent))
                                    return "parent: string expected";
                            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                                if (!$util.isInteger(message.pageSize))
                                    return "pageSize: integer expected";
                            if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                                if (!$util.isString(message.pageToken))
                                    return "pageToken: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a ListAccessPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest} ListAccessPoliciesRequest
                         */
                        ListAccessPoliciesRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest();
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            if (object.pageSize != null)
                                message.pageSize = object.pageSize | 0;
                            if (object.pageToken != null)
                                message.pageToken = String(object.pageToken);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ListAccessPoliciesRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest} message ListAccessPoliciesRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ListAccessPoliciesRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.parent = "";
                                object.pageSize = 0;
                                object.pageToken = "";
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                object.parent = message.parent;
                            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                                object.pageSize = message.pageSize;
                            if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                                object.pageToken = message.pageToken;
                            return object;
                        };
    
                        /**
                         * Converts this ListAccessPoliciesRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ListAccessPoliciesRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ListAccessPoliciesRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ListAccessPoliciesRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.ListAccessPoliciesRequest";
                        };
    
                        return ListAccessPoliciesRequest;
                    })();
    
                    v1.ListAccessPoliciesResponse = (function() {
    
                        /**
                         * Properties of a ListAccessPoliciesResponse.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IListAccessPoliciesResponse
                         * @property {Array.<google.identity.accesscontextmanager.v1.IAccessPolicy>|null} [accessPolicies] ListAccessPoliciesResponse accessPolicies
                         * @property {string|null} [nextPageToken] ListAccessPoliciesResponse nextPageToken
                         */
    
                        /**
                         * Constructs a new ListAccessPoliciesResponse.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a ListAccessPoliciesResponse.
                         * @implements IListAccessPoliciesResponse
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IListAccessPoliciesResponse=} [properties] Properties to set
                         */
                        function ListAccessPoliciesResponse(properties) {
                            this.accessPolicies = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ListAccessPoliciesResponse accessPolicies.
                         * @member {Array.<google.identity.accesscontextmanager.v1.IAccessPolicy>} accessPolicies
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse
                         * @instance
                         */
                        ListAccessPoliciesResponse.prototype.accessPolicies = $util.emptyArray;
    
                        /**
                         * ListAccessPoliciesResponse nextPageToken.
                         * @member {string} nextPageToken
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse
                         * @instance
                         */
                        ListAccessPoliciesResponse.prototype.nextPageToken = "";
    
                        /**
                         * Creates a new ListAccessPoliciesResponse instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListAccessPoliciesResponse=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse} ListAccessPoliciesResponse instance
                         */
                        ListAccessPoliciesResponse.create = function create(properties) {
                            return new ListAccessPoliciesResponse(properties);
                        };
    
                        /**
                         * Encodes the specified ListAccessPoliciesResponse message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListAccessPoliciesResponse} message ListAccessPoliciesResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListAccessPoliciesResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.accessPolicies != null && message.accessPolicies.length)
                                for (var i = 0; i < message.accessPolicies.length; ++i)
                                    $root.google.identity.accesscontextmanager.v1.AccessPolicy.encode(message.accessPolicies[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextPageToken);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListAccessPoliciesResponse message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListAccessPoliciesResponse} message ListAccessPoliciesResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListAccessPoliciesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListAccessPoliciesResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse} ListAccessPoliciesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListAccessPoliciesResponse.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.accessPolicies && message.accessPolicies.length))
                                            message.accessPolicies = [];
                                        message.accessPolicies.push($root.google.identity.accesscontextmanager.v1.AccessPolicy.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 2: {
                                        message.nextPageToken = reader.string();
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
                         * Decodes a ListAccessPoliciesResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse} ListAccessPoliciesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListAccessPoliciesResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ListAccessPoliciesResponse message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ListAccessPoliciesResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.accessPolicies != null && message.hasOwnProperty("accessPolicies")) {
                                if (!Array.isArray(message.accessPolicies))
                                    return "accessPolicies: array expected";
                                for (var i = 0; i < message.accessPolicies.length; ++i) {
                                    var error = $root.google.identity.accesscontextmanager.v1.AccessPolicy.verify(message.accessPolicies[i]);
                                    if (error)
                                        return "accessPolicies." + error;
                                }
                            }
                            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                                if (!$util.isString(message.nextPageToken))
                                    return "nextPageToken: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a ListAccessPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse} ListAccessPoliciesResponse
                         */
                        ListAccessPoliciesResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse();
                            if (object.accessPolicies) {
                                if (!Array.isArray(object.accessPolicies))
                                    throw TypeError(".google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse.accessPolicies: array expected");
                                message.accessPolicies = [];
                                for (var i = 0; i < object.accessPolicies.length; ++i) {
                                    if (typeof object.accessPolicies[i] !== "object")
                                        throw TypeError(".google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse.accessPolicies: object expected");
                                    message.accessPolicies[i] = $root.google.identity.accesscontextmanager.v1.AccessPolicy.fromObject(object.accessPolicies[i]);
                                }
                            }
                            if (object.nextPageToken != null)
                                message.nextPageToken = String(object.nextPageToken);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ListAccessPoliciesResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse} message ListAccessPoliciesResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ListAccessPoliciesResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.accessPolicies = [];
                            if (options.defaults)
                                object.nextPageToken = "";
                            if (message.accessPolicies && message.accessPolicies.length) {
                                object.accessPolicies = [];
                                for (var j = 0; j < message.accessPolicies.length; ++j)
                                    object.accessPolicies[j] = $root.google.identity.accesscontextmanager.v1.AccessPolicy.toObject(message.accessPolicies[j], options);
                            }
                            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                                object.nextPageToken = message.nextPageToken;
                            return object;
                        };
    
                        /**
                         * Converts this ListAccessPoliciesResponse to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ListAccessPoliciesResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ListAccessPoliciesResponse
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ListAccessPoliciesResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.ListAccessPoliciesResponse";
                        };
    
                        return ListAccessPoliciesResponse;
                    })();
    
                    v1.GetAccessPolicyRequest = (function() {
    
                        /**
                         * Properties of a GetAccessPolicyRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IGetAccessPolicyRequest
                         * @property {string|null} [name] GetAccessPolicyRequest name
                         */
    
                        /**
                         * Constructs a new GetAccessPolicyRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a GetAccessPolicyRequest.
                         * @implements IGetAccessPolicyRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IGetAccessPolicyRequest=} [properties] Properties to set
                         */
                        function GetAccessPolicyRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * GetAccessPolicyRequest name.
                         * @member {string} name
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessPolicyRequest
                         * @instance
                         */
                        GetAccessPolicyRequest.prototype.name = "";
    
                        /**
                         * Creates a new GetAccessPolicyRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessPolicyRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IGetAccessPolicyRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.GetAccessPolicyRequest} GetAccessPolicyRequest instance
                         */
                        GetAccessPolicyRequest.create = function create(properties) {
                            return new GetAccessPolicyRequest(properties);
                        };
    
                        /**
                         * Encodes the specified GetAccessPolicyRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.GetAccessPolicyRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessPolicyRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IGetAccessPolicyRequest} message GetAccessPolicyRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetAccessPolicyRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified GetAccessPolicyRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.GetAccessPolicyRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessPolicyRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IGetAccessPolicyRequest} message GetAccessPolicyRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetAccessPolicyRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a GetAccessPolicyRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessPolicyRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.GetAccessPolicyRequest} GetAccessPolicyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetAccessPolicyRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.GetAccessPolicyRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.name = reader.string();
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
                         * Decodes a GetAccessPolicyRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessPolicyRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.GetAccessPolicyRequest} GetAccessPolicyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetAccessPolicyRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a GetAccessPolicyRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessPolicyRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GetAccessPolicyRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a GetAccessPolicyRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessPolicyRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.GetAccessPolicyRequest} GetAccessPolicyRequest
                         */
                        GetAccessPolicyRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.GetAccessPolicyRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.GetAccessPolicyRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a GetAccessPolicyRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessPolicyRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.GetAccessPolicyRequest} message GetAccessPolicyRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GetAccessPolicyRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.name = "";
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            return object;
                        };
    
                        /**
                         * Converts this GetAccessPolicyRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessPolicyRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GetAccessPolicyRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for GetAccessPolicyRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessPolicyRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        GetAccessPolicyRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.GetAccessPolicyRequest";
                        };
    
                        return GetAccessPolicyRequest;
                    })();
    
                    v1.UpdateAccessPolicyRequest = (function() {
    
                        /**
                         * Properties of an UpdateAccessPolicyRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IUpdateAccessPolicyRequest
                         * @property {google.identity.accesscontextmanager.v1.IAccessPolicy|null} [policy] UpdateAccessPolicyRequest policy
                         * @property {google.protobuf.IFieldMask|null} [updateMask] UpdateAccessPolicyRequest updateMask
                         */
    
                        /**
                         * Constructs a new UpdateAccessPolicyRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents an UpdateAccessPolicyRequest.
                         * @implements IUpdateAccessPolicyRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IUpdateAccessPolicyRequest=} [properties] Properties to set
                         */
                        function UpdateAccessPolicyRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * UpdateAccessPolicyRequest policy.
                         * @member {google.identity.accesscontextmanager.v1.IAccessPolicy|null|undefined} policy
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest
                         * @instance
                         */
                        UpdateAccessPolicyRequest.prototype.policy = null;
    
                        /**
                         * UpdateAccessPolicyRequest updateMask.
                         * @member {google.protobuf.IFieldMask|null|undefined} updateMask
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest
                         * @instance
                         */
                        UpdateAccessPolicyRequest.prototype.updateMask = null;
    
                        /**
                         * Creates a new UpdateAccessPolicyRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IUpdateAccessPolicyRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest} UpdateAccessPolicyRequest instance
                         */
                        UpdateAccessPolicyRequest.create = function create(properties) {
                            return new UpdateAccessPolicyRequest(properties);
                        };
    
                        /**
                         * Encodes the specified UpdateAccessPolicyRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IUpdateAccessPolicyRequest} message UpdateAccessPolicyRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UpdateAccessPolicyRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.policy != null && Object.hasOwnProperty.call(message, "policy"))
                                $root.google.identity.accesscontextmanager.v1.AccessPolicy.encode(message.policy, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.updateMask != null && Object.hasOwnProperty.call(message, "updateMask"))
                                $root.google.protobuf.FieldMask.encode(message.updateMask, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified UpdateAccessPolicyRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IUpdateAccessPolicyRequest} message UpdateAccessPolicyRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UpdateAccessPolicyRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an UpdateAccessPolicyRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest} UpdateAccessPolicyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UpdateAccessPolicyRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.policy = $root.google.identity.accesscontextmanager.v1.AccessPolicy.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.updateMask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
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
                         * Decodes an UpdateAccessPolicyRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest} UpdateAccessPolicyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UpdateAccessPolicyRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an UpdateAccessPolicyRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        UpdateAccessPolicyRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.policy != null && message.hasOwnProperty("policy")) {
                                var error = $root.google.identity.accesscontextmanager.v1.AccessPolicy.verify(message.policy);
                                if (error)
                                    return "policy." + error;
                            }
                            if (message.updateMask != null && message.hasOwnProperty("updateMask")) {
                                var error = $root.google.protobuf.FieldMask.verify(message.updateMask);
                                if (error)
                                    return "updateMask." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates an UpdateAccessPolicyRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest} UpdateAccessPolicyRequest
                         */
                        UpdateAccessPolicyRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest();
                            if (object.policy != null) {
                                if (typeof object.policy !== "object")
                                    throw TypeError(".google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest.policy: object expected");
                                message.policy = $root.google.identity.accesscontextmanager.v1.AccessPolicy.fromObject(object.policy);
                            }
                            if (object.updateMask != null) {
                                if (typeof object.updateMask !== "object")
                                    throw TypeError(".google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest.updateMask: object expected");
                                message.updateMask = $root.google.protobuf.FieldMask.fromObject(object.updateMask);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an UpdateAccessPolicyRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest} message UpdateAccessPolicyRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        UpdateAccessPolicyRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.policy = null;
                                object.updateMask = null;
                            }
                            if (message.policy != null && message.hasOwnProperty("policy"))
                                object.policy = $root.google.identity.accesscontextmanager.v1.AccessPolicy.toObject(message.policy, options);
                            if (message.updateMask != null && message.hasOwnProperty("updateMask"))
                                object.updateMask = $root.google.protobuf.FieldMask.toObject(message.updateMask, options);
                            return object;
                        };
    
                        /**
                         * Converts this UpdateAccessPolicyRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        UpdateAccessPolicyRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for UpdateAccessPolicyRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        UpdateAccessPolicyRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.UpdateAccessPolicyRequest";
                        };
    
                        return UpdateAccessPolicyRequest;
                    })();
    
                    v1.DeleteAccessPolicyRequest = (function() {
    
                        /**
                         * Properties of a DeleteAccessPolicyRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IDeleteAccessPolicyRequest
                         * @property {string|null} [name] DeleteAccessPolicyRequest name
                         */
    
                        /**
                         * Constructs a new DeleteAccessPolicyRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a DeleteAccessPolicyRequest.
                         * @implements IDeleteAccessPolicyRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IDeleteAccessPolicyRequest=} [properties] Properties to set
                         */
                        function DeleteAccessPolicyRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * DeleteAccessPolicyRequest name.
                         * @member {string} name
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest
                         * @instance
                         */
                        DeleteAccessPolicyRequest.prototype.name = "";
    
                        /**
                         * Creates a new DeleteAccessPolicyRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IDeleteAccessPolicyRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest} DeleteAccessPolicyRequest instance
                         */
                        DeleteAccessPolicyRequest.create = function create(properties) {
                            return new DeleteAccessPolicyRequest(properties);
                        };
    
                        /**
                         * Encodes the specified DeleteAccessPolicyRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IDeleteAccessPolicyRequest} message DeleteAccessPolicyRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeleteAccessPolicyRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified DeleteAccessPolicyRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IDeleteAccessPolicyRequest} message DeleteAccessPolicyRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeleteAccessPolicyRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a DeleteAccessPolicyRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest} DeleteAccessPolicyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DeleteAccessPolicyRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.name = reader.string();
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
                         * Decodes a DeleteAccessPolicyRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest} DeleteAccessPolicyRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DeleteAccessPolicyRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a DeleteAccessPolicyRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DeleteAccessPolicyRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a DeleteAccessPolicyRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest} DeleteAccessPolicyRequest
                         */
                        DeleteAccessPolicyRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a DeleteAccessPolicyRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest} message DeleteAccessPolicyRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DeleteAccessPolicyRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.name = "";
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            return object;
                        };
    
                        /**
                         * Converts this DeleteAccessPolicyRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DeleteAccessPolicyRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for DeleteAccessPolicyRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        DeleteAccessPolicyRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.DeleteAccessPolicyRequest";
                        };
    
                        return DeleteAccessPolicyRequest;
                    })();
    
                    v1.ListAccessLevelsRequest = (function() {
    
                        /**
                         * Properties of a ListAccessLevelsRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IListAccessLevelsRequest
                         * @property {string|null} [parent] ListAccessLevelsRequest parent
                         * @property {number|null} [pageSize] ListAccessLevelsRequest pageSize
                         * @property {string|null} [pageToken] ListAccessLevelsRequest pageToken
                         * @property {google.identity.accesscontextmanager.v1.LevelFormat|null} [accessLevelFormat] ListAccessLevelsRequest accessLevelFormat
                         */
    
                        /**
                         * Constructs a new ListAccessLevelsRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a ListAccessLevelsRequest.
                         * @implements IListAccessLevelsRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IListAccessLevelsRequest=} [properties] Properties to set
                         */
                        function ListAccessLevelsRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ListAccessLevelsRequest parent.
                         * @member {string} parent
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsRequest
                         * @instance
                         */
                        ListAccessLevelsRequest.prototype.parent = "";
    
                        /**
                         * ListAccessLevelsRequest pageSize.
                         * @member {number} pageSize
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsRequest
                         * @instance
                         */
                        ListAccessLevelsRequest.prototype.pageSize = 0;
    
                        /**
                         * ListAccessLevelsRequest pageToken.
                         * @member {string} pageToken
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsRequest
                         * @instance
                         */
                        ListAccessLevelsRequest.prototype.pageToken = "";
    
                        /**
                         * ListAccessLevelsRequest accessLevelFormat.
                         * @member {google.identity.accesscontextmanager.v1.LevelFormat} accessLevelFormat
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsRequest
                         * @instance
                         */
                        ListAccessLevelsRequest.prototype.accessLevelFormat = 0;
    
                        /**
                         * Creates a new ListAccessLevelsRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListAccessLevelsRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessLevelsRequest} ListAccessLevelsRequest instance
                         */
                        ListAccessLevelsRequest.create = function create(properties) {
                            return new ListAccessLevelsRequest(properties);
                        };
    
                        /**
                         * Encodes the specified ListAccessLevelsRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessLevelsRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListAccessLevelsRequest} message ListAccessLevelsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListAccessLevelsRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
                            if (message.pageToken != null && Object.hasOwnProperty.call(message, "pageToken"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pageToken);
                            if (message.accessLevelFormat != null && Object.hasOwnProperty.call(message, "accessLevelFormat"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.accessLevelFormat);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListAccessLevelsRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessLevelsRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListAccessLevelsRequest} message ListAccessLevelsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListAccessLevelsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListAccessLevelsRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessLevelsRequest} ListAccessLevelsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListAccessLevelsRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.ListAccessLevelsRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.parent = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.pageSize = reader.int32();
                                        break;
                                    }
                                case 3: {
                                        message.pageToken = reader.string();
                                        break;
                                    }
                                case 4: {
                                        message.accessLevelFormat = reader.int32();
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
                         * Decodes a ListAccessLevelsRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessLevelsRequest} ListAccessLevelsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListAccessLevelsRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ListAccessLevelsRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ListAccessLevelsRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                if (!$util.isString(message.parent))
                                    return "parent: string expected";
                            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                                if (!$util.isInteger(message.pageSize))
                                    return "pageSize: integer expected";
                            if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                                if (!$util.isString(message.pageToken))
                                    return "pageToken: string expected";
                            if (message.accessLevelFormat != null && message.hasOwnProperty("accessLevelFormat"))
                                switch (message.accessLevelFormat) {
                                default:
                                    return "accessLevelFormat: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            return null;
                        };
    
                        /**
                         * Creates a ListAccessLevelsRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessLevelsRequest} ListAccessLevelsRequest
                         */
                        ListAccessLevelsRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.ListAccessLevelsRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.ListAccessLevelsRequest();
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            if (object.pageSize != null)
                                message.pageSize = object.pageSize | 0;
                            if (object.pageToken != null)
                                message.pageToken = String(object.pageToken);
                            switch (object.accessLevelFormat) {
                            default:
                                if (typeof object.accessLevelFormat === "number") {
                                    message.accessLevelFormat = object.accessLevelFormat;
                                    break;
                                }
                                break;
                            case "LEVEL_FORMAT_UNSPECIFIED":
                            case 0:
                                message.accessLevelFormat = 0;
                                break;
                            case "AS_DEFINED":
                            case 1:
                                message.accessLevelFormat = 1;
                                break;
                            case "CEL":
                            case 2:
                                message.accessLevelFormat = 2;
                                break;
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ListAccessLevelsRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ListAccessLevelsRequest} message ListAccessLevelsRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ListAccessLevelsRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.parent = "";
                                object.pageSize = 0;
                                object.pageToken = "";
                                object.accessLevelFormat = options.enums === String ? "LEVEL_FORMAT_UNSPECIFIED" : 0;
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                object.parent = message.parent;
                            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                                object.pageSize = message.pageSize;
                            if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                                object.pageToken = message.pageToken;
                            if (message.accessLevelFormat != null && message.hasOwnProperty("accessLevelFormat"))
                                object.accessLevelFormat = options.enums === String ? $root.google.identity.accesscontextmanager.v1.LevelFormat[message.accessLevelFormat] === undefined ? message.accessLevelFormat : $root.google.identity.accesscontextmanager.v1.LevelFormat[message.accessLevelFormat] : message.accessLevelFormat;
                            return object;
                        };
    
                        /**
                         * Converts this ListAccessLevelsRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ListAccessLevelsRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ListAccessLevelsRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ListAccessLevelsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.ListAccessLevelsRequest";
                        };
    
                        return ListAccessLevelsRequest;
                    })();
    
                    v1.ListAccessLevelsResponse = (function() {
    
                        /**
                         * Properties of a ListAccessLevelsResponse.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IListAccessLevelsResponse
                         * @property {Array.<google.identity.accesscontextmanager.v1.IAccessLevel>|null} [accessLevels] ListAccessLevelsResponse accessLevels
                         * @property {string|null} [nextPageToken] ListAccessLevelsResponse nextPageToken
                         */
    
                        /**
                         * Constructs a new ListAccessLevelsResponse.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a ListAccessLevelsResponse.
                         * @implements IListAccessLevelsResponse
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IListAccessLevelsResponse=} [properties] Properties to set
                         */
                        function ListAccessLevelsResponse(properties) {
                            this.accessLevels = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ListAccessLevelsResponse accessLevels.
                         * @member {Array.<google.identity.accesscontextmanager.v1.IAccessLevel>} accessLevels
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsResponse
                         * @instance
                         */
                        ListAccessLevelsResponse.prototype.accessLevels = $util.emptyArray;
    
                        /**
                         * ListAccessLevelsResponse nextPageToken.
                         * @member {string} nextPageToken
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsResponse
                         * @instance
                         */
                        ListAccessLevelsResponse.prototype.nextPageToken = "";
    
                        /**
                         * Creates a new ListAccessLevelsResponse instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListAccessLevelsResponse=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessLevelsResponse} ListAccessLevelsResponse instance
                         */
                        ListAccessLevelsResponse.create = function create(properties) {
                            return new ListAccessLevelsResponse(properties);
                        };
    
                        /**
                         * Encodes the specified ListAccessLevelsResponse message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessLevelsResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListAccessLevelsResponse} message ListAccessLevelsResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListAccessLevelsResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.accessLevels != null && message.accessLevels.length)
                                for (var i = 0; i < message.accessLevels.length; ++i)
                                    $root.google.identity.accesscontextmanager.v1.AccessLevel.encode(message.accessLevels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextPageToken);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListAccessLevelsResponse message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListAccessLevelsResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListAccessLevelsResponse} message ListAccessLevelsResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListAccessLevelsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListAccessLevelsResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessLevelsResponse} ListAccessLevelsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListAccessLevelsResponse.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.ListAccessLevelsResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.accessLevels && message.accessLevels.length))
                                            message.accessLevels = [];
                                        message.accessLevels.push($root.google.identity.accesscontextmanager.v1.AccessLevel.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 2: {
                                        message.nextPageToken = reader.string();
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
                         * Decodes a ListAccessLevelsResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessLevelsResponse} ListAccessLevelsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListAccessLevelsResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ListAccessLevelsResponse message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ListAccessLevelsResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.accessLevels != null && message.hasOwnProperty("accessLevels")) {
                                if (!Array.isArray(message.accessLevels))
                                    return "accessLevels: array expected";
                                for (var i = 0; i < message.accessLevels.length; ++i) {
                                    var error = $root.google.identity.accesscontextmanager.v1.AccessLevel.verify(message.accessLevels[i]);
                                    if (error)
                                        return "accessLevels." + error;
                                }
                            }
                            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                                if (!$util.isString(message.nextPageToken))
                                    return "nextPageToken: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a ListAccessLevelsResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.ListAccessLevelsResponse} ListAccessLevelsResponse
                         */
                        ListAccessLevelsResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.ListAccessLevelsResponse)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.ListAccessLevelsResponse();
                            if (object.accessLevels) {
                                if (!Array.isArray(object.accessLevels))
                                    throw TypeError(".google.identity.accesscontextmanager.v1.ListAccessLevelsResponse.accessLevels: array expected");
                                message.accessLevels = [];
                                for (var i = 0; i < object.accessLevels.length; ++i) {
                                    if (typeof object.accessLevels[i] !== "object")
                                        throw TypeError(".google.identity.accesscontextmanager.v1.ListAccessLevelsResponse.accessLevels: object expected");
                                    message.accessLevels[i] = $root.google.identity.accesscontextmanager.v1.AccessLevel.fromObject(object.accessLevels[i]);
                                }
                            }
                            if (object.nextPageToken != null)
                                message.nextPageToken = String(object.nextPageToken);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ListAccessLevelsResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ListAccessLevelsResponse} message ListAccessLevelsResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ListAccessLevelsResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.accessLevels = [];
                            if (options.defaults)
                                object.nextPageToken = "";
                            if (message.accessLevels && message.accessLevels.length) {
                                object.accessLevels = [];
                                for (var j = 0; j < message.accessLevels.length; ++j)
                                    object.accessLevels[j] = $root.google.identity.accesscontextmanager.v1.AccessLevel.toObject(message.accessLevels[j], options);
                            }
                            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                                object.nextPageToken = message.nextPageToken;
                            return object;
                        };
    
                        /**
                         * Converts this ListAccessLevelsResponse to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ListAccessLevelsResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ListAccessLevelsResponse
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.ListAccessLevelsResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ListAccessLevelsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.ListAccessLevelsResponse";
                        };
    
                        return ListAccessLevelsResponse;
                    })();
    
                    v1.GetAccessLevelRequest = (function() {
    
                        /**
                         * Properties of a GetAccessLevelRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IGetAccessLevelRequest
                         * @property {string|null} [name] GetAccessLevelRequest name
                         * @property {google.identity.accesscontextmanager.v1.LevelFormat|null} [accessLevelFormat] GetAccessLevelRequest accessLevelFormat
                         */
    
                        /**
                         * Constructs a new GetAccessLevelRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a GetAccessLevelRequest.
                         * @implements IGetAccessLevelRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IGetAccessLevelRequest=} [properties] Properties to set
                         */
                        function GetAccessLevelRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * GetAccessLevelRequest name.
                         * @member {string} name
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessLevelRequest
                         * @instance
                         */
                        GetAccessLevelRequest.prototype.name = "";
    
                        /**
                         * GetAccessLevelRequest accessLevelFormat.
                         * @member {google.identity.accesscontextmanager.v1.LevelFormat} accessLevelFormat
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessLevelRequest
                         * @instance
                         */
                        GetAccessLevelRequest.prototype.accessLevelFormat = 0;
    
                        /**
                         * Creates a new GetAccessLevelRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IGetAccessLevelRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.GetAccessLevelRequest} GetAccessLevelRequest instance
                         */
                        GetAccessLevelRequest.create = function create(properties) {
                            return new GetAccessLevelRequest(properties);
                        };
    
                        /**
                         * Encodes the specified GetAccessLevelRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.GetAccessLevelRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IGetAccessLevelRequest} message GetAccessLevelRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetAccessLevelRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.accessLevelFormat != null && Object.hasOwnProperty.call(message, "accessLevelFormat"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.accessLevelFormat);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified GetAccessLevelRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.GetAccessLevelRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IGetAccessLevelRequest} message GetAccessLevelRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetAccessLevelRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a GetAccessLevelRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessLevelRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.GetAccessLevelRequest} GetAccessLevelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetAccessLevelRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.GetAccessLevelRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.name = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.accessLevelFormat = reader.int32();
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
                         * Decodes a GetAccessLevelRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessLevelRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.GetAccessLevelRequest} GetAccessLevelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetAccessLevelRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a GetAccessLevelRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessLevelRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GetAccessLevelRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.accessLevelFormat != null && message.hasOwnProperty("accessLevelFormat"))
                                switch (message.accessLevelFormat) {
                                default:
                                    return "accessLevelFormat: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            return null;
                        };
    
                        /**
                         * Creates a GetAccessLevelRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessLevelRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.GetAccessLevelRequest} GetAccessLevelRequest
                         */
                        GetAccessLevelRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.GetAccessLevelRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.GetAccessLevelRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            switch (object.accessLevelFormat) {
                            default:
                                if (typeof object.accessLevelFormat === "number") {
                                    message.accessLevelFormat = object.accessLevelFormat;
                                    break;
                                }
                                break;
                            case "LEVEL_FORMAT_UNSPECIFIED":
                            case 0:
                                message.accessLevelFormat = 0;
                                break;
                            case "AS_DEFINED":
                            case 1:
                                message.accessLevelFormat = 1;
                                break;
                            case "CEL":
                            case 2:
                                message.accessLevelFormat = 2;
                                break;
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a GetAccessLevelRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.GetAccessLevelRequest} message GetAccessLevelRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GetAccessLevelRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.name = "";
                                object.accessLevelFormat = options.enums === String ? "LEVEL_FORMAT_UNSPECIFIED" : 0;
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.accessLevelFormat != null && message.hasOwnProperty("accessLevelFormat"))
                                object.accessLevelFormat = options.enums === String ? $root.google.identity.accesscontextmanager.v1.LevelFormat[message.accessLevelFormat] === undefined ? message.accessLevelFormat : $root.google.identity.accesscontextmanager.v1.LevelFormat[message.accessLevelFormat] : message.accessLevelFormat;
                            return object;
                        };
    
                        /**
                         * Converts this GetAccessLevelRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessLevelRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GetAccessLevelRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for GetAccessLevelRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.GetAccessLevelRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        GetAccessLevelRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.GetAccessLevelRequest";
                        };
    
                        return GetAccessLevelRequest;
                    })();
    
                    v1.CreateAccessLevelRequest = (function() {
    
                        /**
                         * Properties of a CreateAccessLevelRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface ICreateAccessLevelRequest
                         * @property {string|null} [parent] CreateAccessLevelRequest parent
                         * @property {google.identity.accesscontextmanager.v1.IAccessLevel|null} [accessLevel] CreateAccessLevelRequest accessLevel
                         */
    
                        /**
                         * Constructs a new CreateAccessLevelRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a CreateAccessLevelRequest.
                         * @implements ICreateAccessLevelRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.ICreateAccessLevelRequest=} [properties] Properties to set
                         */
                        function CreateAccessLevelRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * CreateAccessLevelRequest parent.
                         * @member {string} parent
                         * @memberof google.identity.accesscontextmanager.v1.CreateAccessLevelRequest
                         * @instance
                         */
                        CreateAccessLevelRequest.prototype.parent = "";
    
                        /**
                         * CreateAccessLevelRequest accessLevel.
                         * @member {google.identity.accesscontextmanager.v1.IAccessLevel|null|undefined} accessLevel
                         * @memberof google.identity.accesscontextmanager.v1.CreateAccessLevelRequest
                         * @instance
                         */
                        CreateAccessLevelRequest.prototype.accessLevel = null;
    
                        /**
                         * Creates a new CreateAccessLevelRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.CreateAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ICreateAccessLevelRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.CreateAccessLevelRequest} CreateAccessLevelRequest instance
                         */
                        CreateAccessLevelRequest.create = function create(properties) {
                            return new CreateAccessLevelRequest(properties);
                        };
    
                        /**
                         * Encodes the specified CreateAccessLevelRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.CreateAccessLevelRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.CreateAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ICreateAccessLevelRequest} message CreateAccessLevelRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CreateAccessLevelRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                            if (message.accessLevel != null && Object.hasOwnProperty.call(message, "accessLevel"))
                                $root.google.identity.accesscontextmanager.v1.AccessLevel.encode(message.accessLevel, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified CreateAccessLevelRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.CreateAccessLevelRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.CreateAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ICreateAccessLevelRequest} message CreateAccessLevelRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CreateAccessLevelRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a CreateAccessLevelRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.CreateAccessLevelRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.CreateAccessLevelRequest} CreateAccessLevelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CreateAccessLevelRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.CreateAccessLevelRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.parent = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.accessLevel = $root.google.identity.accesscontextmanager.v1.AccessLevel.decode(reader, reader.uint32());
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
                         * Decodes a CreateAccessLevelRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.CreateAccessLevelRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.CreateAccessLevelRequest} CreateAccessLevelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CreateAccessLevelRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a CreateAccessLevelRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.CreateAccessLevelRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        CreateAccessLevelRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                if (!$util.isString(message.parent))
                                    return "parent: string expected";
                            if (message.accessLevel != null && message.hasOwnProperty("accessLevel")) {
                                var error = $root.google.identity.accesscontextmanager.v1.AccessLevel.verify(message.accessLevel);
                                if (error)
                                    return "accessLevel." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a CreateAccessLevelRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.CreateAccessLevelRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.CreateAccessLevelRequest} CreateAccessLevelRequest
                         */
                        CreateAccessLevelRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.CreateAccessLevelRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.CreateAccessLevelRequest();
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            if (object.accessLevel != null) {
                                if (typeof object.accessLevel !== "object")
                                    throw TypeError(".google.identity.accesscontextmanager.v1.CreateAccessLevelRequest.accessLevel: object expected");
                                message.accessLevel = $root.google.identity.accesscontextmanager.v1.AccessLevel.fromObject(object.accessLevel);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a CreateAccessLevelRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.CreateAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.CreateAccessLevelRequest} message CreateAccessLevelRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        CreateAccessLevelRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.parent = "";
                                object.accessLevel = null;
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                object.parent = message.parent;
                            if (message.accessLevel != null && message.hasOwnProperty("accessLevel"))
                                object.accessLevel = $root.google.identity.accesscontextmanager.v1.AccessLevel.toObject(message.accessLevel, options);
                            return object;
                        };
    
                        /**
                         * Converts this CreateAccessLevelRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.CreateAccessLevelRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        CreateAccessLevelRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for CreateAccessLevelRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.CreateAccessLevelRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        CreateAccessLevelRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.CreateAccessLevelRequest";
                        };
    
                        return CreateAccessLevelRequest;
                    })();
    
                    v1.UpdateAccessLevelRequest = (function() {
    
                        /**
                         * Properties of an UpdateAccessLevelRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IUpdateAccessLevelRequest
                         * @property {google.identity.accesscontextmanager.v1.IAccessLevel|null} [accessLevel] UpdateAccessLevelRequest accessLevel
                         * @property {google.protobuf.IFieldMask|null} [updateMask] UpdateAccessLevelRequest updateMask
                         */
    
                        /**
                         * Constructs a new UpdateAccessLevelRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents an UpdateAccessLevelRequest.
                         * @implements IUpdateAccessLevelRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IUpdateAccessLevelRequest=} [properties] Properties to set
                         */
                        function UpdateAccessLevelRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * UpdateAccessLevelRequest accessLevel.
                         * @member {google.identity.accesscontextmanager.v1.IAccessLevel|null|undefined} accessLevel
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest
                         * @instance
                         */
                        UpdateAccessLevelRequest.prototype.accessLevel = null;
    
                        /**
                         * UpdateAccessLevelRequest updateMask.
                         * @member {google.protobuf.IFieldMask|null|undefined} updateMask
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest
                         * @instance
                         */
                        UpdateAccessLevelRequest.prototype.updateMask = null;
    
                        /**
                         * Creates a new UpdateAccessLevelRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IUpdateAccessLevelRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest} UpdateAccessLevelRequest instance
                         */
                        UpdateAccessLevelRequest.create = function create(properties) {
                            return new UpdateAccessLevelRequest(properties);
                        };
    
                        /**
                         * Encodes the specified UpdateAccessLevelRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IUpdateAccessLevelRequest} message UpdateAccessLevelRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UpdateAccessLevelRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.accessLevel != null && Object.hasOwnProperty.call(message, "accessLevel"))
                                $root.google.identity.accesscontextmanager.v1.AccessLevel.encode(message.accessLevel, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.updateMask != null && Object.hasOwnProperty.call(message, "updateMask"))
                                $root.google.protobuf.FieldMask.encode(message.updateMask, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified UpdateAccessLevelRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IUpdateAccessLevelRequest} message UpdateAccessLevelRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UpdateAccessLevelRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an UpdateAccessLevelRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest} UpdateAccessLevelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UpdateAccessLevelRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.accessLevel = $root.google.identity.accesscontextmanager.v1.AccessLevel.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.updateMask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
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
                         * Decodes an UpdateAccessLevelRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest} UpdateAccessLevelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UpdateAccessLevelRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an UpdateAccessLevelRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        UpdateAccessLevelRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.accessLevel != null && message.hasOwnProperty("accessLevel")) {
                                var error = $root.google.identity.accesscontextmanager.v1.AccessLevel.verify(message.accessLevel);
                                if (error)
                                    return "accessLevel." + error;
                            }
                            if (message.updateMask != null && message.hasOwnProperty("updateMask")) {
                                var error = $root.google.protobuf.FieldMask.verify(message.updateMask);
                                if (error)
                                    return "updateMask." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates an UpdateAccessLevelRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest} UpdateAccessLevelRequest
                         */
                        UpdateAccessLevelRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest();
                            if (object.accessLevel != null) {
                                if (typeof object.accessLevel !== "object")
                                    throw TypeError(".google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest.accessLevel: object expected");
                                message.accessLevel = $root.google.identity.accesscontextmanager.v1.AccessLevel.fromObject(object.accessLevel);
                            }
                            if (object.updateMask != null) {
                                if (typeof object.updateMask !== "object")
                                    throw TypeError(".google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest.updateMask: object expected");
                                message.updateMask = $root.google.protobuf.FieldMask.fromObject(object.updateMask);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an UpdateAccessLevelRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest} message UpdateAccessLevelRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        UpdateAccessLevelRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.accessLevel = null;
                                object.updateMask = null;
                            }
                            if (message.accessLevel != null && message.hasOwnProperty("accessLevel"))
                                object.accessLevel = $root.google.identity.accesscontextmanager.v1.AccessLevel.toObject(message.accessLevel, options);
                            if (message.updateMask != null && message.hasOwnProperty("updateMask"))
                                object.updateMask = $root.google.protobuf.FieldMask.toObject(message.updateMask, options);
                            return object;
                        };
    
                        /**
                         * Converts this UpdateAccessLevelRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        UpdateAccessLevelRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for UpdateAccessLevelRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        UpdateAccessLevelRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.UpdateAccessLevelRequest";
                        };
    
                        return UpdateAccessLevelRequest;
                    })();
    
                    v1.DeleteAccessLevelRequest = (function() {
    
                        /**
                         * Properties of a DeleteAccessLevelRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IDeleteAccessLevelRequest
                         * @property {string|null} [name] DeleteAccessLevelRequest name
                         */
    
                        /**
                         * Constructs a new DeleteAccessLevelRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a DeleteAccessLevelRequest.
                         * @implements IDeleteAccessLevelRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IDeleteAccessLevelRequest=} [properties] Properties to set
                         */
                        function DeleteAccessLevelRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * DeleteAccessLevelRequest name.
                         * @member {string} name
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest
                         * @instance
                         */
                        DeleteAccessLevelRequest.prototype.name = "";
    
                        /**
                         * Creates a new DeleteAccessLevelRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IDeleteAccessLevelRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest} DeleteAccessLevelRequest instance
                         */
                        DeleteAccessLevelRequest.create = function create(properties) {
                            return new DeleteAccessLevelRequest(properties);
                        };
    
                        /**
                         * Encodes the specified DeleteAccessLevelRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IDeleteAccessLevelRequest} message DeleteAccessLevelRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeleteAccessLevelRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified DeleteAccessLevelRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IDeleteAccessLevelRequest} message DeleteAccessLevelRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeleteAccessLevelRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a DeleteAccessLevelRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest} DeleteAccessLevelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DeleteAccessLevelRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.name = reader.string();
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
                         * Decodes a DeleteAccessLevelRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest} DeleteAccessLevelRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DeleteAccessLevelRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a DeleteAccessLevelRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DeleteAccessLevelRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a DeleteAccessLevelRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest} DeleteAccessLevelRequest
                         */
                        DeleteAccessLevelRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a DeleteAccessLevelRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest} message DeleteAccessLevelRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DeleteAccessLevelRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.name = "";
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            return object;
                        };
    
                        /**
                         * Converts this DeleteAccessLevelRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DeleteAccessLevelRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for DeleteAccessLevelRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        DeleteAccessLevelRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.DeleteAccessLevelRequest";
                        };
    
                        return DeleteAccessLevelRequest;
                    })();
    
                    v1.ReplaceAccessLevelsRequest = (function() {
    
                        /**
                         * Properties of a ReplaceAccessLevelsRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IReplaceAccessLevelsRequest
                         * @property {string|null} [parent] ReplaceAccessLevelsRequest parent
                         * @property {Array.<google.identity.accesscontextmanager.v1.IAccessLevel>|null} [accessLevels] ReplaceAccessLevelsRequest accessLevels
                         * @property {string|null} [etag] ReplaceAccessLevelsRequest etag
                         */
    
                        /**
                         * Constructs a new ReplaceAccessLevelsRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a ReplaceAccessLevelsRequest.
                         * @implements IReplaceAccessLevelsRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IReplaceAccessLevelsRequest=} [properties] Properties to set
                         */
                        function ReplaceAccessLevelsRequest(properties) {
                            this.accessLevels = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ReplaceAccessLevelsRequest parent.
                         * @member {string} parent
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest
                         * @instance
                         */
                        ReplaceAccessLevelsRequest.prototype.parent = "";
    
                        /**
                         * ReplaceAccessLevelsRequest accessLevels.
                         * @member {Array.<google.identity.accesscontextmanager.v1.IAccessLevel>} accessLevels
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest
                         * @instance
                         */
                        ReplaceAccessLevelsRequest.prototype.accessLevels = $util.emptyArray;
    
                        /**
                         * ReplaceAccessLevelsRequest etag.
                         * @member {string} etag
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest
                         * @instance
                         */
                        ReplaceAccessLevelsRequest.prototype.etag = "";
    
                        /**
                         * Creates a new ReplaceAccessLevelsRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IReplaceAccessLevelsRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest} ReplaceAccessLevelsRequest instance
                         */
                        ReplaceAccessLevelsRequest.create = function create(properties) {
                            return new ReplaceAccessLevelsRequest(properties);
                        };
    
                        /**
                         * Encodes the specified ReplaceAccessLevelsRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IReplaceAccessLevelsRequest} message ReplaceAccessLevelsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReplaceAccessLevelsRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                            if (message.accessLevels != null && message.accessLevels.length)
                                for (var i = 0; i < message.accessLevels.length; ++i)
                                    $root.google.identity.accesscontextmanager.v1.AccessLevel.encode(message.accessLevels[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.etag != null && Object.hasOwnProperty.call(message, "etag"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.etag);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ReplaceAccessLevelsRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IReplaceAccessLevelsRequest} message ReplaceAccessLevelsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReplaceAccessLevelsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ReplaceAccessLevelsRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest} ReplaceAccessLevelsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReplaceAccessLevelsRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.parent = reader.string();
                                        break;
                                    }
                                case 2: {
                                        if (!(message.accessLevels && message.accessLevels.length))
                                            message.accessLevels = [];
                                        message.accessLevels.push($root.google.identity.accesscontextmanager.v1.AccessLevel.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 4: {
                                        message.etag = reader.string();
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
                         * Decodes a ReplaceAccessLevelsRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest} ReplaceAccessLevelsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReplaceAccessLevelsRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ReplaceAccessLevelsRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ReplaceAccessLevelsRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                if (!$util.isString(message.parent))
                                    return "parent: string expected";
                            if (message.accessLevels != null && message.hasOwnProperty("accessLevels")) {
                                if (!Array.isArray(message.accessLevels))
                                    return "accessLevels: array expected";
                                for (var i = 0; i < message.accessLevels.length; ++i) {
                                    var error = $root.google.identity.accesscontextmanager.v1.AccessLevel.verify(message.accessLevels[i]);
                                    if (error)
                                        return "accessLevels." + error;
                                }
                            }
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                if (!$util.isString(message.etag))
                                    return "etag: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a ReplaceAccessLevelsRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest} ReplaceAccessLevelsRequest
                         */
                        ReplaceAccessLevelsRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest();
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            if (object.accessLevels) {
                                if (!Array.isArray(object.accessLevels))
                                    throw TypeError(".google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest.accessLevels: array expected");
                                message.accessLevels = [];
                                for (var i = 0; i < object.accessLevels.length; ++i) {
                                    if (typeof object.accessLevels[i] !== "object")
                                        throw TypeError(".google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest.accessLevels: object expected");
                                    message.accessLevels[i] = $root.google.identity.accesscontextmanager.v1.AccessLevel.fromObject(object.accessLevels[i]);
                                }
                            }
                            if (object.etag != null)
                                message.etag = String(object.etag);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ReplaceAccessLevelsRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest} message ReplaceAccessLevelsRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ReplaceAccessLevelsRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.accessLevels = [];
                            if (options.defaults) {
                                object.parent = "";
                                object.etag = "";
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                object.parent = message.parent;
                            if (message.accessLevels && message.accessLevels.length) {
                                object.accessLevels = [];
                                for (var j = 0; j < message.accessLevels.length; ++j)
                                    object.accessLevels[j] = $root.google.identity.accesscontextmanager.v1.AccessLevel.toObject(message.accessLevels[j], options);
                            }
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                object.etag = message.etag;
                            return object;
                        };
    
                        /**
                         * Converts this ReplaceAccessLevelsRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ReplaceAccessLevelsRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ReplaceAccessLevelsRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ReplaceAccessLevelsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.ReplaceAccessLevelsRequest";
                        };
    
                        return ReplaceAccessLevelsRequest;
                    })();
    
                    v1.ReplaceAccessLevelsResponse = (function() {
    
                        /**
                         * Properties of a ReplaceAccessLevelsResponse.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IReplaceAccessLevelsResponse
                         * @property {Array.<google.identity.accesscontextmanager.v1.IAccessLevel>|null} [accessLevels] ReplaceAccessLevelsResponse accessLevels
                         */
    
                        /**
                         * Constructs a new ReplaceAccessLevelsResponse.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a ReplaceAccessLevelsResponse.
                         * @implements IReplaceAccessLevelsResponse
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IReplaceAccessLevelsResponse=} [properties] Properties to set
                         */
                        function ReplaceAccessLevelsResponse(properties) {
                            this.accessLevels = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ReplaceAccessLevelsResponse accessLevels.
                         * @member {Array.<google.identity.accesscontextmanager.v1.IAccessLevel>} accessLevels
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse
                         * @instance
                         */
                        ReplaceAccessLevelsResponse.prototype.accessLevels = $util.emptyArray;
    
                        /**
                         * Creates a new ReplaceAccessLevelsResponse instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IReplaceAccessLevelsResponse=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse} ReplaceAccessLevelsResponse instance
                         */
                        ReplaceAccessLevelsResponse.create = function create(properties) {
                            return new ReplaceAccessLevelsResponse(properties);
                        };
    
                        /**
                         * Encodes the specified ReplaceAccessLevelsResponse message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IReplaceAccessLevelsResponse} message ReplaceAccessLevelsResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReplaceAccessLevelsResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.accessLevels != null && message.accessLevels.length)
                                for (var i = 0; i < message.accessLevels.length; ++i)
                                    $root.google.identity.accesscontextmanager.v1.AccessLevel.encode(message.accessLevels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ReplaceAccessLevelsResponse message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IReplaceAccessLevelsResponse} message ReplaceAccessLevelsResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReplaceAccessLevelsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ReplaceAccessLevelsResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse} ReplaceAccessLevelsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReplaceAccessLevelsResponse.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.accessLevels && message.accessLevels.length))
                                            message.accessLevels = [];
                                        message.accessLevels.push($root.google.identity.accesscontextmanager.v1.AccessLevel.decode(reader, reader.uint32()));
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
                         * Decodes a ReplaceAccessLevelsResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse} ReplaceAccessLevelsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReplaceAccessLevelsResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ReplaceAccessLevelsResponse message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ReplaceAccessLevelsResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.accessLevels != null && message.hasOwnProperty("accessLevels")) {
                                if (!Array.isArray(message.accessLevels))
                                    return "accessLevels: array expected";
                                for (var i = 0; i < message.accessLevels.length; ++i) {
                                    var error = $root.google.identity.accesscontextmanager.v1.AccessLevel.verify(message.accessLevels[i]);
                                    if (error)
                                        return "accessLevels." + error;
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates a ReplaceAccessLevelsResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse} ReplaceAccessLevelsResponse
                         */
                        ReplaceAccessLevelsResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse();
                            if (object.accessLevels) {
                                if (!Array.isArray(object.accessLevels))
                                    throw TypeError(".google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse.accessLevels: array expected");
                                message.accessLevels = [];
                                for (var i = 0; i < object.accessLevels.length; ++i) {
                                    if (typeof object.accessLevels[i] !== "object")
                                        throw TypeError(".google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse.accessLevels: object expected");
                                    message.accessLevels[i] = $root.google.identity.accesscontextmanager.v1.AccessLevel.fromObject(object.accessLevels[i]);
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ReplaceAccessLevelsResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse} message ReplaceAccessLevelsResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ReplaceAccessLevelsResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.accessLevels = [];
                            if (message.accessLevels && message.accessLevels.length) {
                                object.accessLevels = [];
                                for (var j = 0; j < message.accessLevels.length; ++j)
                                    object.accessLevels[j] = $root.google.identity.accesscontextmanager.v1.AccessLevel.toObject(message.accessLevels[j], options);
                            }
                            return object;
                        };
    
                        /**
                         * Converts this ReplaceAccessLevelsResponse to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ReplaceAccessLevelsResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ReplaceAccessLevelsResponse
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ReplaceAccessLevelsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.ReplaceAccessLevelsResponse";
                        };
    
                        return ReplaceAccessLevelsResponse;
                    })();
    
                    v1.ListServicePerimetersRequest = (function() {
    
                        /**
                         * Properties of a ListServicePerimetersRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IListServicePerimetersRequest
                         * @property {string|null} [parent] ListServicePerimetersRequest parent
                         * @property {number|null} [pageSize] ListServicePerimetersRequest pageSize
                         * @property {string|null} [pageToken] ListServicePerimetersRequest pageToken
                         */
    
                        /**
                         * Constructs a new ListServicePerimetersRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a ListServicePerimetersRequest.
                         * @implements IListServicePerimetersRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IListServicePerimetersRequest=} [properties] Properties to set
                         */
                        function ListServicePerimetersRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ListServicePerimetersRequest parent.
                         * @member {string} parent
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersRequest
                         * @instance
                         */
                        ListServicePerimetersRequest.prototype.parent = "";
    
                        /**
                         * ListServicePerimetersRequest pageSize.
                         * @member {number} pageSize
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersRequest
                         * @instance
                         */
                        ListServicePerimetersRequest.prototype.pageSize = 0;
    
                        /**
                         * ListServicePerimetersRequest pageToken.
                         * @member {string} pageToken
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersRequest
                         * @instance
                         */
                        ListServicePerimetersRequest.prototype.pageToken = "";
    
                        /**
                         * Creates a new ListServicePerimetersRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListServicePerimetersRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.ListServicePerimetersRequest} ListServicePerimetersRequest instance
                         */
                        ListServicePerimetersRequest.create = function create(properties) {
                            return new ListServicePerimetersRequest(properties);
                        };
    
                        /**
                         * Encodes the specified ListServicePerimetersRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListServicePerimetersRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListServicePerimetersRequest} message ListServicePerimetersRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListServicePerimetersRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
                            if (message.pageToken != null && Object.hasOwnProperty.call(message, "pageToken"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pageToken);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListServicePerimetersRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListServicePerimetersRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListServicePerimetersRequest} message ListServicePerimetersRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListServicePerimetersRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListServicePerimetersRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.ListServicePerimetersRequest} ListServicePerimetersRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListServicePerimetersRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.ListServicePerimetersRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.parent = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.pageSize = reader.int32();
                                        break;
                                    }
                                case 3: {
                                        message.pageToken = reader.string();
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
                         * Decodes a ListServicePerimetersRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.ListServicePerimetersRequest} ListServicePerimetersRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListServicePerimetersRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ListServicePerimetersRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ListServicePerimetersRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                if (!$util.isString(message.parent))
                                    return "parent: string expected";
                            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                                if (!$util.isInteger(message.pageSize))
                                    return "pageSize: integer expected";
                            if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                                if (!$util.isString(message.pageToken))
                                    return "pageToken: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a ListServicePerimetersRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.ListServicePerimetersRequest} ListServicePerimetersRequest
                         */
                        ListServicePerimetersRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.ListServicePerimetersRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.ListServicePerimetersRequest();
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            if (object.pageSize != null)
                                message.pageSize = object.pageSize | 0;
                            if (object.pageToken != null)
                                message.pageToken = String(object.pageToken);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ListServicePerimetersRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ListServicePerimetersRequest} message ListServicePerimetersRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ListServicePerimetersRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.parent = "";
                                object.pageSize = 0;
                                object.pageToken = "";
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                object.parent = message.parent;
                            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                                object.pageSize = message.pageSize;
                            if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                                object.pageToken = message.pageToken;
                            return object;
                        };
    
                        /**
                         * Converts this ListServicePerimetersRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ListServicePerimetersRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ListServicePerimetersRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ListServicePerimetersRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.ListServicePerimetersRequest";
                        };
    
                        return ListServicePerimetersRequest;
                    })();
    
                    v1.ListServicePerimetersResponse = (function() {
    
                        /**
                         * Properties of a ListServicePerimetersResponse.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IListServicePerimetersResponse
                         * @property {Array.<google.identity.accesscontextmanager.v1.IServicePerimeter>|null} [servicePerimeters] ListServicePerimetersResponse servicePerimeters
                         * @property {string|null} [nextPageToken] ListServicePerimetersResponse nextPageToken
                         */
    
                        /**
                         * Constructs a new ListServicePerimetersResponse.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a ListServicePerimetersResponse.
                         * @implements IListServicePerimetersResponse
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IListServicePerimetersResponse=} [properties] Properties to set
                         */
                        function ListServicePerimetersResponse(properties) {
                            this.servicePerimeters = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ListServicePerimetersResponse servicePerimeters.
                         * @member {Array.<google.identity.accesscontextmanager.v1.IServicePerimeter>} servicePerimeters
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersResponse
                         * @instance
                         */
                        ListServicePerimetersResponse.prototype.servicePerimeters = $util.emptyArray;
    
                        /**
                         * ListServicePerimetersResponse nextPageToken.
                         * @member {string} nextPageToken
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersResponse
                         * @instance
                         */
                        ListServicePerimetersResponse.prototype.nextPageToken = "";
    
                        /**
                         * Creates a new ListServicePerimetersResponse instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListServicePerimetersResponse=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.ListServicePerimetersResponse} ListServicePerimetersResponse instance
                         */
                        ListServicePerimetersResponse.create = function create(properties) {
                            return new ListServicePerimetersResponse(properties);
                        };
    
                        /**
                         * Encodes the specified ListServicePerimetersResponse message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListServicePerimetersResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListServicePerimetersResponse} message ListServicePerimetersResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListServicePerimetersResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.servicePerimeters != null && message.servicePerimeters.length)
                                for (var i = 0; i < message.servicePerimeters.length; ++i)
                                    $root.google.identity.accesscontextmanager.v1.ServicePerimeter.encode(message.servicePerimeters[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextPageToken);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListServicePerimetersResponse message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ListServicePerimetersResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IListServicePerimetersResponse} message ListServicePerimetersResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListServicePerimetersResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListServicePerimetersResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.ListServicePerimetersResponse} ListServicePerimetersResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListServicePerimetersResponse.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.ListServicePerimetersResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.servicePerimeters && message.servicePerimeters.length))
                                            message.servicePerimeters = [];
                                        message.servicePerimeters.push($root.google.identity.accesscontextmanager.v1.ServicePerimeter.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 2: {
                                        message.nextPageToken = reader.string();
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
                         * Decodes a ListServicePerimetersResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.ListServicePerimetersResponse} ListServicePerimetersResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListServicePerimetersResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ListServicePerimetersResponse message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ListServicePerimetersResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.servicePerimeters != null && message.hasOwnProperty("servicePerimeters")) {
                                if (!Array.isArray(message.servicePerimeters))
                                    return "servicePerimeters: array expected";
                                for (var i = 0; i < message.servicePerimeters.length; ++i) {
                                    var error = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.verify(message.servicePerimeters[i]);
                                    if (error)
                                        return "servicePerimeters." + error;
                                }
                            }
                            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                                if (!$util.isString(message.nextPageToken))
                                    return "nextPageToken: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a ListServicePerimetersResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.ListServicePerimetersResponse} ListServicePerimetersResponse
                         */
                        ListServicePerimetersResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.ListServicePerimetersResponse)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.ListServicePerimetersResponse();
                            if (object.servicePerimeters) {
                                if (!Array.isArray(object.servicePerimeters))
                                    throw TypeError(".google.identity.accesscontextmanager.v1.ListServicePerimetersResponse.servicePerimeters: array expected");
                                message.servicePerimeters = [];
                                for (var i = 0; i < object.servicePerimeters.length; ++i) {
                                    if (typeof object.servicePerimeters[i] !== "object")
                                        throw TypeError(".google.identity.accesscontextmanager.v1.ListServicePerimetersResponse.servicePerimeters: object expected");
                                    message.servicePerimeters[i] = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.fromObject(object.servicePerimeters[i]);
                                }
                            }
                            if (object.nextPageToken != null)
                                message.nextPageToken = String(object.nextPageToken);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ListServicePerimetersResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ListServicePerimetersResponse} message ListServicePerimetersResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ListServicePerimetersResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.servicePerimeters = [];
                            if (options.defaults)
                                object.nextPageToken = "";
                            if (message.servicePerimeters && message.servicePerimeters.length) {
                                object.servicePerimeters = [];
                                for (var j = 0; j < message.servicePerimeters.length; ++j)
                                    object.servicePerimeters[j] = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.toObject(message.servicePerimeters[j], options);
                            }
                            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                                object.nextPageToken = message.nextPageToken;
                            return object;
                        };
    
                        /**
                         * Converts this ListServicePerimetersResponse to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ListServicePerimetersResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ListServicePerimetersResponse
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.ListServicePerimetersResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ListServicePerimetersResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.ListServicePerimetersResponse";
                        };
    
                        return ListServicePerimetersResponse;
                    })();
    
                    v1.GetServicePerimeterRequest = (function() {
    
                        /**
                         * Properties of a GetServicePerimeterRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IGetServicePerimeterRequest
                         * @property {string|null} [name] GetServicePerimeterRequest name
                         */
    
                        /**
                         * Constructs a new GetServicePerimeterRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a GetServicePerimeterRequest.
                         * @implements IGetServicePerimeterRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IGetServicePerimeterRequest=} [properties] Properties to set
                         */
                        function GetServicePerimeterRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * GetServicePerimeterRequest name.
                         * @member {string} name
                         * @memberof google.identity.accesscontextmanager.v1.GetServicePerimeterRequest
                         * @instance
                         */
                        GetServicePerimeterRequest.prototype.name = "";
    
                        /**
                         * Creates a new GetServicePerimeterRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.GetServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IGetServicePerimeterRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.GetServicePerimeterRequest} GetServicePerimeterRequest instance
                         */
                        GetServicePerimeterRequest.create = function create(properties) {
                            return new GetServicePerimeterRequest(properties);
                        };
    
                        /**
                         * Encodes the specified GetServicePerimeterRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.GetServicePerimeterRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.GetServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IGetServicePerimeterRequest} message GetServicePerimeterRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetServicePerimeterRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified GetServicePerimeterRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.GetServicePerimeterRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.GetServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IGetServicePerimeterRequest} message GetServicePerimeterRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetServicePerimeterRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a GetServicePerimeterRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.GetServicePerimeterRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.GetServicePerimeterRequest} GetServicePerimeterRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetServicePerimeterRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.GetServicePerimeterRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.name = reader.string();
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
                         * Decodes a GetServicePerimeterRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.GetServicePerimeterRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.GetServicePerimeterRequest} GetServicePerimeterRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetServicePerimeterRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a GetServicePerimeterRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.GetServicePerimeterRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GetServicePerimeterRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a GetServicePerimeterRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.GetServicePerimeterRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.GetServicePerimeterRequest} GetServicePerimeterRequest
                         */
                        GetServicePerimeterRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.GetServicePerimeterRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.GetServicePerimeterRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a GetServicePerimeterRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.GetServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.GetServicePerimeterRequest} message GetServicePerimeterRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GetServicePerimeterRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.name = "";
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            return object;
                        };
    
                        /**
                         * Converts this GetServicePerimeterRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.GetServicePerimeterRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GetServicePerimeterRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for GetServicePerimeterRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.GetServicePerimeterRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        GetServicePerimeterRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.GetServicePerimeterRequest";
                        };
    
                        return GetServicePerimeterRequest;
                    })();
    
                    v1.CreateServicePerimeterRequest = (function() {
    
                        /**
                         * Properties of a CreateServicePerimeterRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface ICreateServicePerimeterRequest
                         * @property {string|null} [parent] CreateServicePerimeterRequest parent
                         * @property {google.identity.accesscontextmanager.v1.IServicePerimeter|null} [servicePerimeter] CreateServicePerimeterRequest servicePerimeter
                         */
    
                        /**
                         * Constructs a new CreateServicePerimeterRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a CreateServicePerimeterRequest.
                         * @implements ICreateServicePerimeterRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.ICreateServicePerimeterRequest=} [properties] Properties to set
                         */
                        function CreateServicePerimeterRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * CreateServicePerimeterRequest parent.
                         * @member {string} parent
                         * @memberof google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest
                         * @instance
                         */
                        CreateServicePerimeterRequest.prototype.parent = "";
    
                        /**
                         * CreateServicePerimeterRequest servicePerimeter.
                         * @member {google.identity.accesscontextmanager.v1.IServicePerimeter|null|undefined} servicePerimeter
                         * @memberof google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest
                         * @instance
                         */
                        CreateServicePerimeterRequest.prototype.servicePerimeter = null;
    
                        /**
                         * Creates a new CreateServicePerimeterRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ICreateServicePerimeterRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest} CreateServicePerimeterRequest instance
                         */
                        CreateServicePerimeterRequest.create = function create(properties) {
                            return new CreateServicePerimeterRequest(properties);
                        };
    
                        /**
                         * Encodes the specified CreateServicePerimeterRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ICreateServicePerimeterRequest} message CreateServicePerimeterRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CreateServicePerimeterRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                            if (message.servicePerimeter != null && Object.hasOwnProperty.call(message, "servicePerimeter"))
                                $root.google.identity.accesscontextmanager.v1.ServicePerimeter.encode(message.servicePerimeter, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified CreateServicePerimeterRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ICreateServicePerimeterRequest} message CreateServicePerimeterRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CreateServicePerimeterRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a CreateServicePerimeterRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest} CreateServicePerimeterRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CreateServicePerimeterRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.parent = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.servicePerimeter = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.decode(reader, reader.uint32());
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
                         * Decodes a CreateServicePerimeterRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest} CreateServicePerimeterRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CreateServicePerimeterRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a CreateServicePerimeterRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        CreateServicePerimeterRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                if (!$util.isString(message.parent))
                                    return "parent: string expected";
                            if (message.servicePerimeter != null && message.hasOwnProperty("servicePerimeter")) {
                                var error = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.verify(message.servicePerimeter);
                                if (error)
                                    return "servicePerimeter." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a CreateServicePerimeterRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest} CreateServicePerimeterRequest
                         */
                        CreateServicePerimeterRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest();
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            if (object.servicePerimeter != null) {
                                if (typeof object.servicePerimeter !== "object")
                                    throw TypeError(".google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest.servicePerimeter: object expected");
                                message.servicePerimeter = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.fromObject(object.servicePerimeter);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a CreateServicePerimeterRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest} message CreateServicePerimeterRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        CreateServicePerimeterRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.parent = "";
                                object.servicePerimeter = null;
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                object.parent = message.parent;
                            if (message.servicePerimeter != null && message.hasOwnProperty("servicePerimeter"))
                                object.servicePerimeter = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.toObject(message.servicePerimeter, options);
                            return object;
                        };
    
                        /**
                         * Converts this CreateServicePerimeterRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        CreateServicePerimeterRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for CreateServicePerimeterRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        CreateServicePerimeterRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.CreateServicePerimeterRequest";
                        };
    
                        return CreateServicePerimeterRequest;
                    })();
    
                    v1.UpdateServicePerimeterRequest = (function() {
    
                        /**
                         * Properties of an UpdateServicePerimeterRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IUpdateServicePerimeterRequest
                         * @property {google.identity.accesscontextmanager.v1.IServicePerimeter|null} [servicePerimeter] UpdateServicePerimeterRequest servicePerimeter
                         * @property {google.protobuf.IFieldMask|null} [updateMask] UpdateServicePerimeterRequest updateMask
                         */
    
                        /**
                         * Constructs a new UpdateServicePerimeterRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents an UpdateServicePerimeterRequest.
                         * @implements IUpdateServicePerimeterRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IUpdateServicePerimeterRequest=} [properties] Properties to set
                         */
                        function UpdateServicePerimeterRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * UpdateServicePerimeterRequest servicePerimeter.
                         * @member {google.identity.accesscontextmanager.v1.IServicePerimeter|null|undefined} servicePerimeter
                         * @memberof google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest
                         * @instance
                         */
                        UpdateServicePerimeterRequest.prototype.servicePerimeter = null;
    
                        /**
                         * UpdateServicePerimeterRequest updateMask.
                         * @member {google.protobuf.IFieldMask|null|undefined} updateMask
                         * @memberof google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest
                         * @instance
                         */
                        UpdateServicePerimeterRequest.prototype.updateMask = null;
    
                        /**
                         * Creates a new UpdateServicePerimeterRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IUpdateServicePerimeterRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest} UpdateServicePerimeterRequest instance
                         */
                        UpdateServicePerimeterRequest.create = function create(properties) {
                            return new UpdateServicePerimeterRequest(properties);
                        };
    
                        /**
                         * Encodes the specified UpdateServicePerimeterRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IUpdateServicePerimeterRequest} message UpdateServicePerimeterRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UpdateServicePerimeterRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.servicePerimeter != null && Object.hasOwnProperty.call(message, "servicePerimeter"))
                                $root.google.identity.accesscontextmanager.v1.ServicePerimeter.encode(message.servicePerimeter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.updateMask != null && Object.hasOwnProperty.call(message, "updateMask"))
                                $root.google.protobuf.FieldMask.encode(message.updateMask, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified UpdateServicePerimeterRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IUpdateServicePerimeterRequest} message UpdateServicePerimeterRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        UpdateServicePerimeterRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an UpdateServicePerimeterRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest} UpdateServicePerimeterRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UpdateServicePerimeterRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.servicePerimeter = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.updateMask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
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
                         * Decodes an UpdateServicePerimeterRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest} UpdateServicePerimeterRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        UpdateServicePerimeterRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an UpdateServicePerimeterRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        UpdateServicePerimeterRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.servicePerimeter != null && message.hasOwnProperty("servicePerimeter")) {
                                var error = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.verify(message.servicePerimeter);
                                if (error)
                                    return "servicePerimeter." + error;
                            }
                            if (message.updateMask != null && message.hasOwnProperty("updateMask")) {
                                var error = $root.google.protobuf.FieldMask.verify(message.updateMask);
                                if (error)
                                    return "updateMask." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates an UpdateServicePerimeterRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest} UpdateServicePerimeterRequest
                         */
                        UpdateServicePerimeterRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest();
                            if (object.servicePerimeter != null) {
                                if (typeof object.servicePerimeter !== "object")
                                    throw TypeError(".google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest.servicePerimeter: object expected");
                                message.servicePerimeter = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.fromObject(object.servicePerimeter);
                            }
                            if (object.updateMask != null) {
                                if (typeof object.updateMask !== "object")
                                    throw TypeError(".google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest.updateMask: object expected");
                                message.updateMask = $root.google.protobuf.FieldMask.fromObject(object.updateMask);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an UpdateServicePerimeterRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest} message UpdateServicePerimeterRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        UpdateServicePerimeterRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.servicePerimeter = null;
                                object.updateMask = null;
                            }
                            if (message.servicePerimeter != null && message.hasOwnProperty("servicePerimeter"))
                                object.servicePerimeter = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.toObject(message.servicePerimeter, options);
                            if (message.updateMask != null && message.hasOwnProperty("updateMask"))
                                object.updateMask = $root.google.protobuf.FieldMask.toObject(message.updateMask, options);
                            return object;
                        };
    
                        /**
                         * Converts this UpdateServicePerimeterRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        UpdateServicePerimeterRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for UpdateServicePerimeterRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        UpdateServicePerimeterRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.UpdateServicePerimeterRequest";
                        };
    
                        return UpdateServicePerimeterRequest;
                    })();
    
                    v1.DeleteServicePerimeterRequest = (function() {
    
                        /**
                         * Properties of a DeleteServicePerimeterRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IDeleteServicePerimeterRequest
                         * @property {string|null} [name] DeleteServicePerimeterRequest name
                         */
    
                        /**
                         * Constructs a new DeleteServicePerimeterRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a DeleteServicePerimeterRequest.
                         * @implements IDeleteServicePerimeterRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IDeleteServicePerimeterRequest=} [properties] Properties to set
                         */
                        function DeleteServicePerimeterRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * DeleteServicePerimeterRequest name.
                         * @member {string} name
                         * @memberof google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest
                         * @instance
                         */
                        DeleteServicePerimeterRequest.prototype.name = "";
    
                        /**
                         * Creates a new DeleteServicePerimeterRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IDeleteServicePerimeterRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest} DeleteServicePerimeterRequest instance
                         */
                        DeleteServicePerimeterRequest.create = function create(properties) {
                            return new DeleteServicePerimeterRequest(properties);
                        };
    
                        /**
                         * Encodes the specified DeleteServicePerimeterRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IDeleteServicePerimeterRequest} message DeleteServicePerimeterRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeleteServicePerimeterRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified DeleteServicePerimeterRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IDeleteServicePerimeterRequest} message DeleteServicePerimeterRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeleteServicePerimeterRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a DeleteServicePerimeterRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest} DeleteServicePerimeterRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DeleteServicePerimeterRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.name = reader.string();
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
                         * Decodes a DeleteServicePerimeterRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest} DeleteServicePerimeterRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DeleteServicePerimeterRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a DeleteServicePerimeterRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DeleteServicePerimeterRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a DeleteServicePerimeterRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest} DeleteServicePerimeterRequest
                         */
                        DeleteServicePerimeterRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a DeleteServicePerimeterRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest} message DeleteServicePerimeterRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DeleteServicePerimeterRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.name = "";
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            return object;
                        };
    
                        /**
                         * Converts this DeleteServicePerimeterRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DeleteServicePerimeterRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for DeleteServicePerimeterRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        DeleteServicePerimeterRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.DeleteServicePerimeterRequest";
                        };
    
                        return DeleteServicePerimeterRequest;
                    })();
    
                    v1.ReplaceServicePerimetersRequest = (function() {
    
                        /**
                         * Properties of a ReplaceServicePerimetersRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IReplaceServicePerimetersRequest
                         * @property {string|null} [parent] ReplaceServicePerimetersRequest parent
                         * @property {Array.<google.identity.accesscontextmanager.v1.IServicePerimeter>|null} [servicePerimeters] ReplaceServicePerimetersRequest servicePerimeters
                         * @property {string|null} [etag] ReplaceServicePerimetersRequest etag
                         */
    
                        /**
                         * Constructs a new ReplaceServicePerimetersRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a ReplaceServicePerimetersRequest.
                         * @implements IReplaceServicePerimetersRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IReplaceServicePerimetersRequest=} [properties] Properties to set
                         */
                        function ReplaceServicePerimetersRequest(properties) {
                            this.servicePerimeters = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ReplaceServicePerimetersRequest parent.
                         * @member {string} parent
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest
                         * @instance
                         */
                        ReplaceServicePerimetersRequest.prototype.parent = "";
    
                        /**
                         * ReplaceServicePerimetersRequest servicePerimeters.
                         * @member {Array.<google.identity.accesscontextmanager.v1.IServicePerimeter>} servicePerimeters
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest
                         * @instance
                         */
                        ReplaceServicePerimetersRequest.prototype.servicePerimeters = $util.emptyArray;
    
                        /**
                         * ReplaceServicePerimetersRequest etag.
                         * @member {string} etag
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest
                         * @instance
                         */
                        ReplaceServicePerimetersRequest.prototype.etag = "";
    
                        /**
                         * Creates a new ReplaceServicePerimetersRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IReplaceServicePerimetersRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest} ReplaceServicePerimetersRequest instance
                         */
                        ReplaceServicePerimetersRequest.create = function create(properties) {
                            return new ReplaceServicePerimetersRequest(properties);
                        };
    
                        /**
                         * Encodes the specified ReplaceServicePerimetersRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IReplaceServicePerimetersRequest} message ReplaceServicePerimetersRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReplaceServicePerimetersRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                            if (message.servicePerimeters != null && message.servicePerimeters.length)
                                for (var i = 0; i < message.servicePerimeters.length; ++i)
                                    $root.google.identity.accesscontextmanager.v1.ServicePerimeter.encode(message.servicePerimeters[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.etag != null && Object.hasOwnProperty.call(message, "etag"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.etag);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ReplaceServicePerimetersRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IReplaceServicePerimetersRequest} message ReplaceServicePerimetersRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReplaceServicePerimetersRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ReplaceServicePerimetersRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest} ReplaceServicePerimetersRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReplaceServicePerimetersRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.parent = reader.string();
                                        break;
                                    }
                                case 2: {
                                        if (!(message.servicePerimeters && message.servicePerimeters.length))
                                            message.servicePerimeters = [];
                                        message.servicePerimeters.push($root.google.identity.accesscontextmanager.v1.ServicePerimeter.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 3: {
                                        message.etag = reader.string();
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
                         * Decodes a ReplaceServicePerimetersRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest} ReplaceServicePerimetersRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReplaceServicePerimetersRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ReplaceServicePerimetersRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ReplaceServicePerimetersRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                if (!$util.isString(message.parent))
                                    return "parent: string expected";
                            if (message.servicePerimeters != null && message.hasOwnProperty("servicePerimeters")) {
                                if (!Array.isArray(message.servicePerimeters))
                                    return "servicePerimeters: array expected";
                                for (var i = 0; i < message.servicePerimeters.length; ++i) {
                                    var error = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.verify(message.servicePerimeters[i]);
                                    if (error)
                                        return "servicePerimeters." + error;
                                }
                            }
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                if (!$util.isString(message.etag))
                                    return "etag: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a ReplaceServicePerimetersRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest} ReplaceServicePerimetersRequest
                         */
                        ReplaceServicePerimetersRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest();
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            if (object.servicePerimeters) {
                                if (!Array.isArray(object.servicePerimeters))
                                    throw TypeError(".google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest.servicePerimeters: array expected");
                                message.servicePerimeters = [];
                                for (var i = 0; i < object.servicePerimeters.length; ++i) {
                                    if (typeof object.servicePerimeters[i] !== "object")
                                        throw TypeError(".google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest.servicePerimeters: object expected");
                                    message.servicePerimeters[i] = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.fromObject(object.servicePerimeters[i]);
                                }
                            }
                            if (object.etag != null)
                                message.etag = String(object.etag);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ReplaceServicePerimetersRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest} message ReplaceServicePerimetersRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ReplaceServicePerimetersRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.servicePerimeters = [];
                            if (options.defaults) {
                                object.parent = "";
                                object.etag = "";
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                object.parent = message.parent;
                            if (message.servicePerimeters && message.servicePerimeters.length) {
                                object.servicePerimeters = [];
                                for (var j = 0; j < message.servicePerimeters.length; ++j)
                                    object.servicePerimeters[j] = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.toObject(message.servicePerimeters[j], options);
                            }
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                object.etag = message.etag;
                            return object;
                        };
    
                        /**
                         * Converts this ReplaceServicePerimetersRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ReplaceServicePerimetersRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ReplaceServicePerimetersRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ReplaceServicePerimetersRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.ReplaceServicePerimetersRequest";
                        };
    
                        return ReplaceServicePerimetersRequest;
                    })();
    
                    v1.ReplaceServicePerimetersResponse = (function() {
    
                        /**
                         * Properties of a ReplaceServicePerimetersResponse.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface IReplaceServicePerimetersResponse
                         * @property {Array.<google.identity.accesscontextmanager.v1.IServicePerimeter>|null} [servicePerimeters] ReplaceServicePerimetersResponse servicePerimeters
                         */
    
                        /**
                         * Constructs a new ReplaceServicePerimetersResponse.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a ReplaceServicePerimetersResponse.
                         * @implements IReplaceServicePerimetersResponse
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.IReplaceServicePerimetersResponse=} [properties] Properties to set
                         */
                        function ReplaceServicePerimetersResponse(properties) {
                            this.servicePerimeters = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ReplaceServicePerimetersResponse servicePerimeters.
                         * @member {Array.<google.identity.accesscontextmanager.v1.IServicePerimeter>} servicePerimeters
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse
                         * @instance
                         */
                        ReplaceServicePerimetersResponse.prototype.servicePerimeters = $util.emptyArray;
    
                        /**
                         * Creates a new ReplaceServicePerimetersResponse instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IReplaceServicePerimetersResponse=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse} ReplaceServicePerimetersResponse instance
                         */
                        ReplaceServicePerimetersResponse.create = function create(properties) {
                            return new ReplaceServicePerimetersResponse(properties);
                        };
    
                        /**
                         * Encodes the specified ReplaceServicePerimetersResponse message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IReplaceServicePerimetersResponse} message ReplaceServicePerimetersResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReplaceServicePerimetersResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.servicePerimeters != null && message.servicePerimeters.length)
                                for (var i = 0; i < message.servicePerimeters.length; ++i)
                                    $root.google.identity.accesscontextmanager.v1.ServicePerimeter.encode(message.servicePerimeters[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ReplaceServicePerimetersResponse message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.IReplaceServicePerimetersResponse} message ReplaceServicePerimetersResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ReplaceServicePerimetersResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ReplaceServicePerimetersResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse} ReplaceServicePerimetersResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReplaceServicePerimetersResponse.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.servicePerimeters && message.servicePerimeters.length))
                                            message.servicePerimeters = [];
                                        message.servicePerimeters.push($root.google.identity.accesscontextmanager.v1.ServicePerimeter.decode(reader, reader.uint32()));
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
                         * Decodes a ReplaceServicePerimetersResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse} ReplaceServicePerimetersResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ReplaceServicePerimetersResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ReplaceServicePerimetersResponse message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ReplaceServicePerimetersResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.servicePerimeters != null && message.hasOwnProperty("servicePerimeters")) {
                                if (!Array.isArray(message.servicePerimeters))
                                    return "servicePerimeters: array expected";
                                for (var i = 0; i < message.servicePerimeters.length; ++i) {
                                    var error = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.verify(message.servicePerimeters[i]);
                                    if (error)
                                        return "servicePerimeters." + error;
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates a ReplaceServicePerimetersResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse} ReplaceServicePerimetersResponse
                         */
                        ReplaceServicePerimetersResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse();
                            if (object.servicePerimeters) {
                                if (!Array.isArray(object.servicePerimeters))
                                    throw TypeError(".google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse.servicePerimeters: array expected");
                                message.servicePerimeters = [];
                                for (var i = 0; i < object.servicePerimeters.length; ++i) {
                                    if (typeof object.servicePerimeters[i] !== "object")
                                        throw TypeError(".google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse.servicePerimeters: object expected");
                                    message.servicePerimeters[i] = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.fromObject(object.servicePerimeters[i]);
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ReplaceServicePerimetersResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse} message ReplaceServicePerimetersResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ReplaceServicePerimetersResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.servicePerimeters = [];
                            if (message.servicePerimeters && message.servicePerimeters.length) {
                                object.servicePerimeters = [];
                                for (var j = 0; j < message.servicePerimeters.length; ++j)
                                    object.servicePerimeters[j] = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.toObject(message.servicePerimeters[j], options);
                            }
                            return object;
                        };
    
                        /**
                         * Converts this ReplaceServicePerimetersResponse to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ReplaceServicePerimetersResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ReplaceServicePerimetersResponse
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ReplaceServicePerimetersResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.ReplaceServicePerimetersResponse";
                        };
    
                        return ReplaceServicePerimetersResponse;
                    })();
    
                    v1.CommitServicePerimetersRequest = (function() {
    
                        /**
                         * Properties of a CommitServicePerimetersRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface ICommitServicePerimetersRequest
                         * @property {string|null} [parent] CommitServicePerimetersRequest parent
                         * @property {string|null} [etag] CommitServicePerimetersRequest etag
                         */
    
                        /**
                         * Constructs a new CommitServicePerimetersRequest.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a CommitServicePerimetersRequest.
                         * @implements ICommitServicePerimetersRequest
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.ICommitServicePerimetersRequest=} [properties] Properties to set
                         */
                        function CommitServicePerimetersRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * CommitServicePerimetersRequest parent.
                         * @member {string} parent
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest
                         * @instance
                         */
                        CommitServicePerimetersRequest.prototype.parent = "";
    
                        /**
                         * CommitServicePerimetersRequest etag.
                         * @member {string} etag
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest
                         * @instance
                         */
                        CommitServicePerimetersRequest.prototype.etag = "";
    
                        /**
                         * Creates a new CommitServicePerimetersRequest instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ICommitServicePerimetersRequest=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest} CommitServicePerimetersRequest instance
                         */
                        CommitServicePerimetersRequest.create = function create(properties) {
                            return new CommitServicePerimetersRequest(properties);
                        };
    
                        /**
                         * Encodes the specified CommitServicePerimetersRequest message. Does not implicitly {@link google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ICommitServicePerimetersRequest} message CommitServicePerimetersRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CommitServicePerimetersRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                            if (message.etag != null && Object.hasOwnProperty.call(message, "etag"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.etag);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified CommitServicePerimetersRequest message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ICommitServicePerimetersRequest} message CommitServicePerimetersRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CommitServicePerimetersRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a CommitServicePerimetersRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest} CommitServicePerimetersRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CommitServicePerimetersRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.parent = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.etag = reader.string();
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
                         * Decodes a CommitServicePerimetersRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest} CommitServicePerimetersRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CommitServicePerimetersRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a CommitServicePerimetersRequest message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        CommitServicePerimetersRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                if (!$util.isString(message.parent))
                                    return "parent: string expected";
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                if (!$util.isString(message.etag))
                                    return "etag: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a CommitServicePerimetersRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest} CommitServicePerimetersRequest
                         */
                        CommitServicePerimetersRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest();
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            if (object.etag != null)
                                message.etag = String(object.etag);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a CommitServicePerimetersRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest} message CommitServicePerimetersRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        CommitServicePerimetersRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.parent = "";
                                object.etag = "";
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                object.parent = message.parent;
                            if (message.etag != null && message.hasOwnProperty("etag"))
                                object.etag = message.etag;
                            return object;
                        };
    
                        /**
                         * Converts this CommitServicePerimetersRequest to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        CommitServicePerimetersRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for CommitServicePerimetersRequest
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        CommitServicePerimetersRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.identity.accesscontextmanager.v1.CommitServicePerimetersRequest";
                        };
    
                        return CommitServicePerimetersRequest;
                    })();
    
                    v1.CommitServicePerimetersResponse = (function() {
    
                        /**
                         * Properties of a CommitServicePerimetersResponse.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @interface ICommitServicePerimetersResponse
                         * @property {Array.<google.identity.accesscontextmanager.v1.IServicePerimeter>|null} [servicePerimeters] CommitServicePerimetersResponse servicePerimeters
                         */
    
                        /**
                         * Constructs a new CommitServicePerimetersResponse.
                         * @memberof google.identity.accesscontextmanager.v1
                         * @classdesc Represents a CommitServicePerimetersResponse.
                         * @implements ICommitServicePerimetersResponse
                         * @constructor
                         * @param {google.identity.accesscontextmanager.v1.ICommitServicePerimetersResponse=} [properties] Properties to set
                         */
                        function CommitServicePerimetersResponse(properties) {
                            this.servicePerimeters = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * CommitServicePerimetersResponse servicePerimeters.
                         * @member {Array.<google.identity.accesscontextmanager.v1.IServicePerimeter>} servicePerimeters
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse
                         * @instance
                         */
                        CommitServicePerimetersResponse.prototype.servicePerimeters = $util.emptyArray;
    
                        /**
                         * Creates a new CommitServicePerimetersResponse instance using the specified properties.
                         * @function create
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ICommitServicePerimetersResponse=} [properties] Properties to set
                         * @returns {google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse} CommitServicePerimetersResponse instance
                         */
                        CommitServicePerimetersResponse.create = function create(properties) {
                            return new CommitServicePerimetersResponse(properties);
                        };
    
                        /**
                         * Encodes the specified CommitServicePerimetersResponse message. Does not implicitly {@link google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ICommitServicePerimetersResponse} message CommitServicePerimetersResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CommitServicePerimetersResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.servicePerimeters != null && message.servicePerimeters.length)
                                for (var i = 0; i < message.servicePerimeters.length; ++i)
                                    $root.google.identity.accesscontextmanager.v1.ServicePerimeter.encode(message.servicePerimeters[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified CommitServicePerimetersResponse message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.ICommitServicePerimetersResponse} message CommitServicePerimetersResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CommitServicePerimetersResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a CommitServicePerimetersResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse} CommitServicePerimetersResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CommitServicePerimetersResponse.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.servicePerimeters && message.servicePerimeters.length))
                                            message.servicePerimeters = [];
                                        message.servicePerimeters.push($root.google.identity.accesscontextmanager.v1.ServicePerimeter.decode(reader, reader.uint32()));
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
                         * Decodes a CommitServicePerimetersResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse} CommitServicePerimetersResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CommitServicePerimetersResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a CommitServicePerimetersResponse message.
                         * @function verify
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        CommitServicePerimetersResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.servicePerimeters != null && message.hasOwnProperty("servicePerimeters")) {
                                if (!Array.isArray(message.servicePerimeters))
                                    return "servicePerimeters: array expected";
                                for (var i = 0; i < message.servicePerimeters.length; ++i) {
                                    var error = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.verify(message.servicePerimeters[i]);
                                    if (error)
                                        return "servicePerimeters." + error;
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates a CommitServicePerimetersResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse} CommitServicePerimetersResponse
                         */
                        CommitServicePerimetersResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse)
                                return object;
                            var message = new $root.google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse();
                            if (object.servicePerimeters) {
                                if (!Array.isArray(object.servicePerimeters))
                                    throw TypeError(".google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse.servicePerimeters: array expected");
                                message.servicePerimeters = [];
                                for (var i = 0; i < object.servicePerimeters.length; ++i) {
                                    if (typeof object.servicePerimeters[i] !== "object")
                                        throw TypeError(".google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse.servicePerimeters: object expected");
                                    message.servicePerimeters[i] = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.fromObject(object.servicePerimeters[i]);
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a CommitServicePerimetersResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse
                         * @static
                         * @param {google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse} message CommitServicePerimetersResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        CommitServicePerimetersResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.servicePerimeters = [];
                            if (message.servicePerimeters && message.servicePerimeters.length) {
                                object.servicePerimeters = [];
                                for (var j = 0; j < message.servicePerimeters.length; ++j)
                                    object.servicePerimeters[j] = $root.google.identity.accesscontextmanager.v1.ServicePerimeter.toObject(message.servicePerimeters[j], options);
                            }
                            return object;
                        };
    
                        /**
                         * Converts this CommitServicePerimetersResponse to JSON.
                         * @function toJSON
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        CommitServicePerimetersResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for CommitServicePerimetersResponse
                         * @function getTypeUrl
                         * @memberof google.identity.accesscontextmanager.v1.CommitServicePerimetersResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        CommitServicePerimetersResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                 