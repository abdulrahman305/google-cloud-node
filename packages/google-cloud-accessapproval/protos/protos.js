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
    var $root = $protobuf.roots._google_cloud_access_approval_protos || ($protobuf.roots._google_cloud_access_approval_protos = {});
    
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
    
            cloud.accessapproval = (function() {
    
                /**
                 * Namespace accessapproval.
                 * @memberof google.cloud
                 * @namespace
                 */
                var accessapproval = {};
    
                accessapproval.v1 = (function() {
    
                    /**
                     * Namespace v1.
                     * @memberof google.cloud.accessapproval
                     * @namespace
                     */
                    var v1 = {};
    
                    v1.AccessApproval = (function() {
    
                        /**
                         * Constructs a new AccessApproval service.
                         * @memberof google.cloud.accessapproval.v1
                         * @classdesc Represents an AccessApproval
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function AccessApproval(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }
    
                        (AccessApproval.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AccessApproval;
    
                        /**
                         * Creates new AccessApproval service using the specified rpc implementation.
                         * @function create
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {AccessApproval} RPC service. Useful where requests and/or responses are streamed.
                         */
                        AccessApproval.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };
    
                        /**
                         * Callback as used by {@link google.cloud.accessapproval.v1.AccessApproval|listApprovalRequests}.
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @typedef ListApprovalRequestsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.accessapproval.v1.ListApprovalRequestsResponse} [response] ListApprovalRequestsResponse
                         */
    
                        /**
                         * Calls ListApprovalRequests.
                         * @function listApprovalRequests
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IListApprovalRequestsMessage} request ListApprovalRequestsMessage message or plain object
                         * @param {google.cloud.accessapproval.v1.AccessApproval.ListApprovalRequestsCallback} callback Node-style callback called with the error, if any, and ListApprovalRequestsResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessApproval.prototype.listApprovalRequests = function listApprovalRequests(request, callback) {
                            return this.rpcCall(listApprovalRequests, $root.google.cloud.accessapproval.v1.ListApprovalRequestsMessage, $root.google.cloud.accessapproval.v1.ListApprovalRequestsResponse, request, callback);
                        }, "name", { value: "ListApprovalRequests" });
    
                        /**
                         * Calls ListApprovalRequests.
                         * @function listApprovalRequests
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IListApprovalRequestsMessage} request ListApprovalRequestsMessage message or plain object
                         * @returns {Promise<google.cloud.accessapproval.v1.ListApprovalRequestsResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.accessapproval.v1.AccessApproval|getApprovalRequest}.
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @typedef GetApprovalRequestCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.accessapproval.v1.ApprovalRequest} [response] ApprovalRequest
                         */
    
                        /**
                         * Calls GetApprovalRequest.
                         * @function getApprovalRequest
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IGetApprovalRequestMessage} request GetApprovalRequestMessage message or plain object
                         * @param {google.cloud.accessapproval.v1.AccessApproval.GetApprovalRequestCallback} callback Node-style callback called with the error, if any, and ApprovalRequest
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessApproval.prototype.getApprovalRequest = function getApprovalRequest(request, callback) {
                            return this.rpcCall(getApprovalRequest, $root.google.cloud.accessapproval.v1.GetApprovalRequestMessage, $root.google.cloud.accessapproval.v1.ApprovalRequest, request, callback);
                        }, "name", { value: "GetApprovalRequest" });
    
                        /**
                         * Calls GetApprovalRequest.
                         * @function getApprovalRequest
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IGetApprovalRequestMessage} request GetApprovalRequestMessage message or plain object
                         * @returns {Promise<google.cloud.accessapproval.v1.ApprovalRequest>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.accessapproval.v1.AccessApproval|approveApprovalRequest}.
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @typedef ApproveApprovalRequestCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.accessapproval.v1.ApprovalRequest} [response] ApprovalRequest
                         */
    
                        /**
                         * Calls ApproveApprovalRequest.
                         * @function approveApprovalRequest
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IApproveApprovalRequestMessage} request ApproveApprovalRequestMessage message or plain object
                         * @param {google.cloud.accessapproval.v1.AccessApproval.ApproveApprovalRequestCallback} callback Node-style callback called with the error, if any, and ApprovalRequest
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessApproval.prototype.approveApprovalRequest = function approveApprovalRequest(request, callback) {
                            return this.rpcCall(approveApprovalRequest, $root.google.cloud.accessapproval.v1.ApproveApprovalRequestMessage, $root.google.cloud.accessapproval.v1.ApprovalRequest, request, callback);
                        }, "name", { value: "ApproveApprovalRequest" });
    
                        /**
                         * Calls ApproveApprovalRequest.
                         * @function approveApprovalRequest
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IApproveApprovalRequestMessage} request ApproveApprovalRequestMessage message or plain object
                         * @returns {Promise<google.cloud.accessapproval.v1.ApprovalRequest>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.accessapproval.v1.AccessApproval|dismissApprovalRequest}.
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @typedef DismissApprovalRequestCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.accessapproval.v1.ApprovalRequest} [response] ApprovalRequest
                         */
    
                        /**
                         * Calls DismissApprovalRequest.
                         * @function dismissApprovalRequest
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IDismissApprovalRequestMessage} request DismissApprovalRequestMessage message or plain object
                         * @param {google.cloud.accessapproval.v1.AccessApproval.DismissApprovalRequestCallback} callback Node-style callback called with the error, if any, and ApprovalRequest
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessApproval.prototype.dismissApprovalRequest = function dismissApprovalRequest(request, callback) {
                            return this.rpcCall(dismissApprovalRequest, $root.google.cloud.accessapproval.v1.DismissApprovalRequestMessage, $root.google.cloud.accessapproval.v1.ApprovalRequest, request, callback);
                        }, "name", { value: "DismissApprovalRequest" });
    
                        /**
                         * Calls DismissApprovalRequest.
                         * @function dismissApprovalRequest
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IDismissApprovalRequestMessage} request DismissApprovalRequestMessage message or plain object
                         * @returns {Promise<google.cloud.accessapproval.v1.ApprovalRequest>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.accessapproval.v1.AccessApproval|invalidateApprovalRequest}.
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @typedef InvalidateApprovalRequestCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.accessapproval.v1.ApprovalRequest} [response] ApprovalRequest
                         */
    
                        /**
                         * Calls InvalidateApprovalRequest.
                         * @function invalidateApprovalRequest
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IInvalidateApprovalRequestMessage} request InvalidateApprovalRequestMessage message or plain object
                         * @param {google.cloud.accessapproval.v1.AccessApproval.InvalidateApprovalRequestCallback} callback Node-style callback called with the error, if any, and ApprovalRequest
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessApproval.prototype.invalidateApprovalRequest = function invalidateApprovalRequest(request, callback) {
                            return this.rpcCall(invalidateApprovalRequest, $root.google.cloud.accessapproval.v1.InvalidateApprovalRequestMessage, $root.google.cloud.accessapproval.v1.ApprovalRequest, request, callback);
                        }, "name", { value: "InvalidateApprovalRequest" });
    
                        /**
                         * Calls InvalidateApprovalRequest.
                         * @function invalidateApprovalRequest
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IInvalidateApprovalRequestMessage} request InvalidateApprovalRequestMessage message or plain object
                         * @returns {Promise<google.cloud.accessapproval.v1.ApprovalRequest>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.accessapproval.v1.AccessApproval|getAccessApprovalSettings}.
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @typedef GetAccessApprovalSettingsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.accessapproval.v1.AccessApprovalSettings} [response] AccessApprovalSettings
                         */
    
                        /**
                         * Calls GetAccessApprovalSettings.
                         * @function getAccessApprovalSettings
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IGetAccessApprovalSettingsMessage} request GetAccessApprovalSettingsMessage message or plain object
                         * @param {google.cloud.accessapproval.v1.AccessApproval.GetAccessApprovalSettingsCallback} callback Node-style callback called with the error, if any, and AccessApprovalSettings
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessApproval.prototype.getAccessApprovalSettings = function getAccessApprovalSettings(request, callback) {
                            return this.rpcCall(getAccessApprovalSettings, $root.google.cloud.accessapproval.v1.GetAccessApprovalSettingsMessage, $root.google.cloud.accessapproval.v1.AccessApprovalSettings, request, callback);
                        }, "name", { value: "GetAccessApprovalSettings" });
    
                        /**
                         * Calls GetAccessApprovalSettings.
                         * @function getAccessApprovalSettings
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IGetAccessApprovalSettingsMessage} request GetAccessApprovalSettingsMessage message or plain object
                         * @returns {Promise<google.cloud.accessapproval.v1.AccessApprovalSettings>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.accessapproval.v1.AccessApproval|updateAccessApprovalSettings}.
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @typedef UpdateAccessApprovalSettingsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.accessapproval.v1.AccessApprovalSettings} [response] AccessApprovalSettings
                         */
    
                        /**
                         * Calls UpdateAccessApprovalSettings.
                         * @function updateAccessApprovalSettings
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IUpdateAccessApprovalSettingsMessage} request UpdateAccessApprovalSettingsMessage message or plain object
                         * @param {google.cloud.accessapproval.v1.AccessApproval.UpdateAccessApprovalSettingsCallback} callback Node-style callback called with the error, if any, and AccessApprovalSettings
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessApproval.prototype.updateAccessApprovalSettings = function updateAccessApprovalSettings(request, callback) {
                            return this.rpcCall(updateAccessApprovalSettings, $root.google.cloud.accessapproval.v1.UpdateAccessApprovalSettingsMessage, $root.google.cloud.accessapproval.v1.AccessApprovalSettings, request, callback);
                        }, "name", { value: "UpdateAccessApprovalSettings" });
    
                        /**
                         * Calls UpdateAccessApprovalSettings.
                         * @function updateAccessApprovalSettings
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IUpdateAccessApprovalSettingsMessage} request UpdateAccessApprovalSettingsMessage message or plain object
                         * @returns {Promise<google.cloud.accessapproval.v1.AccessApprovalSettings>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.accessapproval.v1.AccessApproval|deleteAccessApprovalSettings}.
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @typedef DeleteAccessApprovalSettingsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.protobuf.Empty} [response] Empty
                         */
    
                        /**
                         * Calls DeleteAccessApprovalSettings.
                         * @function deleteAccessApprovalSettings
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IDeleteAccessApprovalSettingsMessage} request DeleteAccessApprovalSettingsMessage message or plain object
                         * @param {google.cloud.accessapproval.v1.AccessApproval.DeleteAccessApprovalSettingsCallback} callback Node-style callback called with the error, if any, and Empty
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessApproval.prototype.deleteAccessApprovalSettings = function deleteAccessApprovalSettings(request, callback) {
                            return this.rpcCall(deleteAccessApprovalSettings, $root.google.cloud.accessapproval.v1.DeleteAccessApprovalSettingsMessage, $root.google.protobuf.Empty, request, callback);
                        }, "name", { value: "DeleteAccessApprovalSettings" });
    
                        /**
                         * Calls DeleteAccessApprovalSettings.
                         * @function deleteAccessApprovalSettings
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IDeleteAccessApprovalSettingsMessage} request DeleteAccessApprovalSettingsMessage message or plain object
                         * @returns {Promise<google.protobuf.Empty>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.accessapproval.v1.AccessApproval|getAccessApprovalServiceAccount}.
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @typedef GetAccessApprovalServiceAccountCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.accessapproval.v1.AccessApprovalServiceAccount} [response] AccessApprovalServiceAccount
                         */
    
                        /**
                         * Calls GetAccessApprovalServiceAccount.
                         * @function getAccessApprovalServiceAccount
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IGetAccessApprovalServiceAccountMessage} request GetAccessApprovalServiceAccountMessage message or plain object
                         * @param {google.cloud.accessapproval.v1.AccessApproval.GetAccessApprovalServiceAccountCallback} callback Node-style callback called with the error, if any, and AccessApprovalServiceAccount
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccessApproval.prototype.getAccessApprovalServiceAccount = function getAccessApprovalServiceAccount(request, callback) {
                            return this.rpcCall(getAccessApprovalServiceAccount, $root.google.cloud.accessapproval.v1.GetAccessApprovalServiceAccountMessage, $root.google.cloud.accessapproval.v1.AccessApprovalServiceAccount, request, callback);
                        }, "name", { value: "GetAccessApprovalServiceAccount" });
    
                        /**
                         * Calls GetAccessApprovalServiceAccount.
                         * @function getAccessApprovalServiceAccount
                         * @memberof google.cloud.accessapproval.v1.AccessApproval
                         * @instance
                         * @param {google.cloud.accessapproval.v1.IGetAccessApprovalServiceAccountMessage} request GetAccessApprovalServiceAccountMessage message or plain object
                         * @returns {Promise<google.cloud.accessapproval.v1.AccessApprovalServiceAccount>} Promise
                         * @variation 2
                         */
    
                        return AccessApproval;
                    })();
    
                    v1.AccessLocations = (function() {
    
                        /**
                         * Properties of an AccessLocations.
                         * @memberof google.cloud.accessapproval.v1
                         * @interface IAccessLocations
                         * @property {string|null} [principalOfficeCountry] AccessLocations principalOfficeCountry
                         * @property {string|null} [principalPhysicalLocationCountry] AccessLocations principalPhysicalLocationCountry
                         */
    
                        /**
                         * Constructs a new AccessLocations.
                         * @memberof google.cloud.accessapproval.v1
                         * @classdesc Represents an AccessLocations.
                         * @implements IAccessLocations
                         * @constructor
                         * @param {google.cloud.accessapproval.v1.IAccessLocations=} [properties] Properties to set
                         */
                        function AccessLocations(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * AccessLocations principalOfficeCountry.
                         * @member {string} principalOfficeCountry
                         * @memberof google.cloud.accessapproval.v1.AccessLocations
                         * @instance
                         */
                        AccessLocations.prototype.principalOfficeCountry = "";
    
                        /**
                         * AccessLocations principalPhysicalLocationCountry.
                         * @member {string} principalPhysicalLocationCountry
                         * @memberof google.cloud.accessapproval.v1.AccessLocations
                         * @instance
                         */
                        AccessLocations.prototype.principalPhysicalLocationCountry = "";
    
                        /**
                         * Creates a new AccessLocations instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.accessapproval.v1.AccessLocations
                         * @static
                         * @param {google.cloud.accessapproval.v1.IAccessLocations=} [properties] Properties to set
                         * @returns {google.cloud.accessapproval.v1.AccessLocations} AccessLocations instance
                         */
                        AccessLocations.create = function create(properties) {
                            return new AccessLocations(properties);
                        };
    
                        /**
                         * Encodes the specified AccessLocations message. Does not implicitly {@link google.cloud.accessapproval.v1.AccessLocations.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.accessapproval.v1.AccessLocations
                         * @static
                         * @param {google.cloud.accessapproval.v1.IAccessLocations} message AccessLocations message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AccessLocations.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.principalOfficeCountry != null && Object.hasOwnProperty.call(message, "principalOfficeCountry"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.principalOfficeCountry);
                            if (message.principalPhysicalLocationCountry != null && Object.hasOwnProperty.call(message, "principalPhysicalLocationCountry"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.principalPhysicalLocationCountry);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified AccessLocations message, length delimited. Does not implicitly {@link google.cloud.accessapproval.v1.AccessLocations.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.accessapproval.v1.AccessLocations
                         * @static
                         * @param {google.cloud.accessapproval.v1.IAccessLocations} message AccessLocations message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AccessLocations.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an AccessLocations message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.accessapproval.v1.AccessLocations
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.accessapproval.v1.AccessLocations} AccessLocations
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AccessLocations.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.accessapproval.v1.AccessLocations();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.principalOfficeCountry = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.principalPhysicalLocationCountry = reader.string();
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
                         * Decodes an AccessLocations message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.accessapproval.v1.AccessLocations
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.accessapproval.v1.AccessLocations} AccessLocations
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AccessLocations.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an AccessLocations message.
                         * @function verify
                         * @memberof google.cloud.accessapproval.v1.AccessLocations
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        AccessLocations.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.principalOfficeCountry != null && message.hasOwnProperty("principalOfficeCountry"))
                                if (!$util.isString(message.principalOfficeCountry))
                                    return "principalOfficeCountry: string expected";
                            if (message.principalPhysicalLocationCountry != null && message.hasOwnProperty("principalPhysicalLocationCountry"))
                                if (!$util.isString(message.principalPhysicalLocationCountry))
                                    return "principalPhysicalLocationCountry: string expected";
                            return null;
                        };
    
                        /**
                         * Creates an AccessLocations message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.accessapproval.v1.AccessLocations
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.accessapproval.v1.AccessLocations} AccessLocations
                         */
                        AccessLocations.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.accessapproval.v1.AccessLocations)
                                return object;
                            var message = new $root.google.cloud.accessapproval.v1.AccessLocations();
                            if (object.principalOfficeCountry != null)
                                message.principalOfficeCountry = String(object.principalOfficeCountry);
                            if (object.principalPhysicalLocationCountry != null)
                                message.principalPhysicalLocationCountry = String(object.principalPhysicalLocationCountry);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an AccessLocations message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.accessapproval.v1.AccessLocations
                         * @static
                         * @param {google.cloud.accessapproval.v1.AccessLocations} message AccessLocations
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AccessLocations.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.principalOfficeCountry = "";
                                object.principalPhysicalLocationCountry = "";
                            }
                            if (message.principalOfficeCountry != null && message.hasOwnProperty("principalOfficeCountry"))
                                object.principalOfficeCountry = message.principalOfficeCountry;
                            if (message.principalPhysicalLocationCountry != null && message.hasOwnProperty("principalPhysicalLocationCountry"))
                                object.principalPhysicalLocationCountry = message.principalPhysicalLocationCountry;
                            return object;
                        };
    
                        /**
                         * Converts this AccessLocations to JSON.
                         * @function toJSON
                         * @memberof google.cloud.accessapproval.v1.AccessLocations
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        AccessLocations.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for AccessLocations
                         * @function getTypeUrl
                         * @memberof google.cloud.accessapproval.v1.AccessLocations
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        AccessLocations.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.accessapproval.v1.AccessLocations";
                        };
    
                        return AccessLocations;
                    })();
    
                    v1.AccessReason = (function() {
    
                        /**
                         * Properties of an AccessReason.
                         * @memberof google.cloud.accessapproval.v1
                         * @interface IAccessReason
                         * @property {google.cloud.accessapproval.v1.AccessReason.Type|null} [type] AccessReason type
                         * @property {string|null} [detail] AccessReason detail
                         */
    
                        /**
                         * Constructs a new AccessReason.
                         * @memberof google.cloud.accessapproval.v1
                         * @classdesc Represents an AccessReason.
                         * @implements IAccessReason
                         * @constructor
                         * @param {google.cloud.accessapproval.v1.IAccessReason=} [properties] Properties to set
                         */
                        function AccessReason(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * AccessReason type.
                         * @member {google.cloud.accessapproval.v1.AccessReason.Type} type
                         * @memberof google.cloud.accessapproval.v1.AccessReason
                         * @instance
                         */
                        AccessReason.prototype.type = 0;
    
                        /**
                         * AccessReason detail.
                         * @member {string} detail
                         * @memberof google.cloud.accessapproval.v1.AccessReason
                         * @instance
                         */
                        AccessReason.prototype.detail = "";
    
                        /**
                         * Creates a new AccessReason instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.accessapproval.v1.AccessReason
                         * @static
                         * @param {google.cloud.accessapproval.v1.IAccessReason=} [properties] Properties to set
                         * @returns {google.cloud.accessapproval.v1.AccessReason} AccessReason instance
                         */
                        AccessReason.create = function create(properties) {
                            return new AccessReason(properties);
                        };
    
                        /**
                         * Encodes the specified AccessReason message. Does not implicitly {@link google.cloud.accessapproval.v1.AccessReason.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.accessapproval.v1.AccessReason
                         * @static
                         * @param {google.cloud.accessapproval.v1.IAccessReason} message AccessReason message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AccessReason.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                            if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.detail);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified AccessReason message, length delimited. Does not implicitly {@link google.cloud.accessapproval.v1.AccessReason.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.accessapproval.v1.AccessReason
                         * @static
                         * @param {google.cloud.accessapproval.v1.IAccessReason} message AccessReason message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AccessReason.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an AccessReason message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.accessapproval.v1.AccessReason
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.accessapproval.v1.AccessReason} AccessReason
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AccessReason.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.accessapproval.v1.AccessReason();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.type = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.detail = reader.string();
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
                         * Decodes an AccessReason message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.accessapproval.v1.AccessReason
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.accessapproval.v1.AccessReason} AccessReason
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AccessReason.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an AccessReason message.
                         * @function verify
                         * @memberof google.cloud.accessapproval.v1.AccessReason
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        AccessReason.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.type != null && message.hasOwnProperty("type"))
                                switch (message.type) {
                                default:
                                    return "type: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                    break;
                                }
                            if (message.detail != null && message.hasOwnProperty("detail"))
                                if (!$util.isString(message.detail))
                                    return "detail: string expected";
                            return null;
                        };
    
                        /**
                         * Creates an AccessReason message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.accessapproval.v1.AccessReason
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.accessapproval.v1.AccessReason} AccessReason
                         */
                        AccessReason.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.accessapproval.v1.AccessReason)
                                return object;
                            var message = new $root.google.cloud.accessapproval.v1.AccessReason();
                            switch (object.type) {
                            default:
                                if (typeof object.type === "number") {
                                    message.type = object.type;
                                    break;
                                }
                                break;
                            case "TYPE_UNSPECIFIED":
                            case 0:
                                message.type = 0;
                                break;
                            case "CUSTOMER_INITIATED_SUPPORT":
                            case 1:
                                message.type = 1;
                                break;
                            case "GOOGLE_INITIATED_SERVICE":
                            case 2:
                                message.type = 2;
                                break;
                            case "GOOGLE_INITIATED_REVIEW":
                            case 3:
                                message.type = 3;
                                break;
                            case "THIRD_PARTY_DATA_REQUEST":
                            case 4:
                                message.type = 4;
                                break;
                            case "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT":
                            case 5:
                                message.type = 5;
                                break;
                            }
                            if (object.detail != null)
                                message.detail = String(object.detail);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an AccessReason message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.accessapproval.v1.AccessReason
                         * @static
                         * @param {google.cloud.accessapproval.v1.AccessReason} message AccessReason
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AccessReason.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.type = options.enums === String ? "TYPE_UNSPECIFIED" : 0;
                                object.detail = "";
                            }
                            if (message.type != null && message.hasOwnProperty("type"))
                                object.type = options.enums === String ? $root.google.cloud.accessapproval.v1.AccessReason.Type[message.type] === undefined ? message.type : $root.google.cloud.accessapproval.v1.AccessReason.Type[message.type] : message.type;
                            if (message.detail != null && message.hasOwnProperty("detail"))
                                object.detail = message.detail;
                            return object;
                        };
    
                        /**
                         * Converts this AccessReason to JSON.
                         * @function toJSON
                         * @memberof google.cloud.accessapproval.v1.AccessReason
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        AccessReason.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for AccessReason
                         * @function getTypeUrl
                         * @memberof google.cloud.accessapproval.v1.AccessReason
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        AccessReason.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.accessapproval.v1.AccessReason";
                        };
    
                        /**
                         * Type enum.
                         * @name google.cloud.accessapproval.v1.AccessReason.Type
                         * @enum {number}
                         * @property {number} TYPE_UNSPECIFIED=0 TYPE_UNSPECIFIED value
                         * @property {number} CUSTOMER_INITIATED_SUPPORT=1 CUSTOMER_INITIATED_SUPPORT value
                         * @property {number} GOOGLE_INITIATED_SERVICE=2 GOOGLE_INITIATED_SERVICE value
                         * @property {number} GOOGLE_INITIATED_REVIEW=3 GOOGLE_INITIATED_REVIEW value
                         * @property {number} THIRD_PARTY_DATA_REQUEST=4 THIRD_PARTY_DATA_REQUEST value
                         * @property {number} GOOGLE_RESPONSE_TO_PRODUCTION_ALERT=5 GOOGLE_RESPONSE_TO_PRODUCTION_ALERT value
                         */
                        AccessReason.Type = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "TYPE_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "CUSTOMER_INITIATED_SUPPORT"] = 1;
                            values[valuesById[2] = "GOOGLE_INITIATED_SERVICE"] = 2;
                            values[valuesById[3] = "GOOGLE_INITIATED_REVIEW"] = 3;
                            values[valuesById[4] = "THIRD_PARTY_DATA_REQUEST"] = 4;
                            values[valuesById[5] = "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT"] = 5;
                            return values;
                        })();
    
                        return AccessReason;
                    })();
    
                    v1.SignatureInfo = (function() {
    
                        /**
                         * Properties of a SignatureInfo.
                         * @memberof google.cloud.accessapproval.v1
                         * @interface ISignatureInfo
                         * @property {Uint8Array|null} [signature] SignatureInfo signature
                         * @property {string|null} [googlePublicKeyPem] SignatureInfo googlePublicKeyPem
                         * @property {string|null} [customerKmsKeyVersion] SignatureInfo customerKmsKeyVersion
                         */
    
                        /**
                         * Constructs a new SignatureInfo.
                         * @memberof google.cloud.accessapproval.v1
                         * @classdesc Represents a SignatureInfo.
                         * @implements ISignatureInfo
                         * @constructor
                         * @param {google.cloud.accessapproval.v1.ISignatureInfo=} [properties] Properties to set
                         */
                        function SignatureInfo(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * SignatureInfo signature.
                         * @member {Uint8Array} signature
                         * @memberof google.cloud.accessapproval.v1.SignatureInfo
                         * @instance
                         */
                        SignatureInfo.prototype.signature = $util.newBuffer([]);
    
                        /**
                         * SignatureInfo googlePublicKeyPem.
                         * @member {string|null|undefined} googlePublicKeyPem
                         * @memberof google.cloud.accessapproval.v1.SignatureInfo
                         * @instance
                         */
                        SignatureInfo.prototype.googlePublicKeyPem = null;
    
                        /**
                         * SignatureInfo customerKmsKeyVersion.
                         * @member {string|null|undefined} customerKmsKeyVersion
                         * @memberof google.cloud.accessapproval.v1.SignatureInfo
                         * @instance
                         */
                        SignatureInfo.prototype.customerKmsKeyVersion = null;
    
                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;
    
                        /**
                         * SignatureInfo verificationInfo.
                         * @member {"googlePublicKeyPem"|"customerKmsKeyVersion"|undefined} verificationInfo
                         * @memberof google.cloud.accessapproval.v1.SignatureInfo
                         * @instance
                         */
                        Object.defineProperty(SignatureInfo.prototype, "verificationInfo", {
                            get: $util.oneOfGetter($oneOfFields = ["googlePublicKeyPem", "customerKmsKeyVersion"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * Creates a new SignatureInfo instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.accessapproval.v1.SignatureInfo
                         * @static
                         * @param {google.cloud.accessapproval.v1.ISignatureInfo=} [properties] Properties to set
                         * @returns {google.cloud.accessapproval.v1.SignatureInfo} SignatureInfo instance
                         */
                        SignatureInfo.create = function create(properties) {
                            return new SignatureInfo(properties);
                        };
    
                        /**
                         * Encodes the specified SignatureInfo message. Does not implicitly {@link google.cloud.accessapproval.v1.SignatureInfo.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.accessapproval.v1.SignatureInfo
                         * @static
                         * @param {google.cloud.accessapproval.v1.ISignatureInfo} message SignatureInfo message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SignatureInfo.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.signature);
                            if (message.googlePublicKeyPem != null && Object.hasOwnProperty.call(message, "googlePublicKeyPem"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.googlePublicKeyPem);
                            if (message.customerKmsKeyVersion != null && Object.hasOwnProperty.call(message, "customerKmsKeyVersion"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.customerKmsKeyVersion);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified SignatureInfo message, length delimited. Does not implicitly {@link google.cloud.accessapproval.v1.SignatureInfo.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.accessapproval.v1.SignatureInfo
                         * @static
                         * @param {google.cloud.accessapproval.v1.ISignatureInfo} message SignatureInfo message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SignatureInfo.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a SignatureInfo message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.accessapproval.v1.SignatureInfo
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.accessapproval.v1.SignatureInfo} SignatureInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SignatureInfo.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.accessapproval.v1.SignatureInfo();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.signature = reader.bytes();
                                        break;
                                    }
                                case 2: {
                                        message.googlePublicKeyPem = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.customerKmsKeyVersion = reader.string();
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
                         * Decodes a SignatureInfo message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.accessapproval.v1.SignatureInfo
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.accessapproval.v1.SignatureInfo} SignatureInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SignatureInfo.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a SignatureInfo message.
                         * @function verify
                         * @memberof google.cloud.accessapproval.v1.SignatureInfo
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SignatureInfo.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.signature != null && message.hasOwnProperty("signature"))
                                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                                    return "signature: buffer expected";
                            if (message.googlePublicKeyPem != null && message.hasOwnProperty("googlePublicKeyPem")) {
                                properties.verificationInfo = 1;
                                if (!$util.isString(message.googlePublicKeyPem))
                                    return "googlePublicKeyPem: string expected";
                            }
                            if (message.customerKmsKeyVersion != null && message.hasOwnProperty("customerKmsKeyVersion")) {
                                if (properties.verificationInfo === 1)
                                    return "verificationInfo: multiple values";
                                properties.verificationInfo = 1;
                                if (!$util.isString(message.customerKmsKeyVersion))
                                    return "customerKmsKeyVersion: string expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates a SignatureInfo message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.accessapproval.v1.SignatureInfo
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.accessapproval.v1.SignatureInfo} SignatureInfo
                         */
                        SignatureInfo.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.accessapproval.v1.SignatureInfo)
                                return object;
                            var message = new $root.google.cloud.accessapproval.v1.SignatureInfo();
                            if (object.signature != null)
                                if (typeof object.signature === "string")
                                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                                else if (object.signature.length >= 0)
                                    message.signature = object.signature;
                            if (object.googlePublicKeyPem != null)
                                message.googlePublicKeyPem = String(object.googlePublicKeyPem);
                            if (object.customerKmsKeyVersion != null)
                                message.customerKmsKeyVersion = String(object.customerKmsKeyVersion);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a SignatureInfo message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.accessapproval.v1.SignatureInfo
                         * @static
                         * @param {google.cloud.accessapproval.v1.SignatureInfo} message SignatureInfo
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SignatureInfo.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                if (options.bytes === String)
                                    object.signature = "";
                                else {
                                    object.signature = [];
                                    if (options.bytes !== Array)
                                        object.signature = $util.newBuffer(object.signature);
                                }
                            if (message.signature != null && message.hasOwnProperty("signature"))
                                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
                            if (message.googlePublicKeyPem != null && message.hasOwnProperty("googlePublicKeyPem")) {
                                object.googlePublicKeyPem = message.googlePublicKeyPem;
                                if (options.oneofs)
                                    object.verificationInfo = "googlePublicKeyPem";
                            }
                            if (message.customerKmsKeyVersion != null && message.hasOwnProperty("customerKmsKeyVersion")) {
                                object.customerKmsKeyVersion = message.customerKmsKeyVersion;
                                if (options.oneofs)
                                    object.verificationInfo = "customerKmsKeyVersion";
                            }
                            return object;
                        };
    
                        /**
                         * Converts this SignatureInfo to JSON.
                         * @function toJSON
                         * @memberof google.cloud.accessapproval.v1.SignatureInfo
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SignatureInfo.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for SignatureInfo
                         * @function getTypeUrl
                         * @memberof google.cloud.accessapproval.v1.SignatureInfo
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        SignatureInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.accessapproval.v1.SignatureInfo";
                        };
    
                        return SignatureInfo;
                    })();
    
                    v1.ApproveDecision = (function() {
    
                        /**
                         * Properties of an ApproveDecision.
                         * @memberof google.cloud.accessapproval.v1
                         * @interface IApproveDecision
                         * @property {google.protobuf.ITimestamp|null} [approveTime] ApproveDecision approveTime
                         * @property {google.protobuf.ITimestamp|null} [expireTime] ApproveDecision expireTime
                         * @property {google.protobuf.ITimestamp|null} [invalidateTime] ApproveDecision invalidateTime
                         * @property {google.cloud.accessapproval.v1.ISignatureInfo|null} [signatureInfo] ApproveDecision signatureInfo
                         * @property {boolean|null} [autoApproved] ApproveDecision autoApproved
                         */
    
                        /**
                         * Constructs a new ApproveDecision.
                         * @memberof google.cloud.accessapproval.v1
                         * @classdesc Represents an ApproveDecision.
                         * @implements IApproveDecision
                         * @constructor
                         * @param {google.cloud.accessapproval.v1.IApproveDecision=} [properties] Properties to set
                         */
                        function ApproveDecision(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ApproveDecision approveTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} approveTime
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @instance
                         */
                        ApproveDecision.prototype.approveTime = null;
    
                        /**
                         * ApproveDecision expireTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} expireTime
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @instance
                         */
                        ApproveDecision.prototype.expireTime = null;
    
                        /**
                         * ApproveDecision invalidateTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} invalidateTime
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @instance
                         */
                        ApproveDecision.prototype.invalidateTime = null;
    
                        /**
                         * ApproveDecision signatureInfo.
                         * @member {google.cloud.accessapproval.v1.ISignatureInfo|null|undefined} signatureInfo
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @instance
                         */
                        ApproveDecision.prototype.signatureInfo = null;
    
                        /**
                         * ApproveDecision autoApproved.
                         * @member {boolean} autoApproved
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @instance
                         */
                        ApproveDecision.prototype.autoApproved = false;
    
                        /**
                         * Creates a new ApproveDecision instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @static
                         * @param {google.cloud.accessapproval.v1.IApproveDecision=} [properties] Properties to set
                         * @returns {google.cloud.accessapproval.v1.ApproveDecision} ApproveDecision instance
                         */
                        ApproveDecision.create = function create(properties) {
                            return new ApproveDecision(properties);
                        };
    
                        /**
                         * Encodes the specified ApproveDecision message. Does not implicitly {@link google.cloud.accessapproval.v1.ApproveDecision.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @static
                         * @param {google.cloud.accessapproval.v1.IApproveDecision} message ApproveDecision message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ApproveDecision.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.approveTime != null && Object.hasOwnProperty.call(message, "approveTime"))
                                $root.google.protobuf.Timestamp.encode(message.approveTime, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.expireTime != null && Object.hasOwnProperty.call(message, "expireTime"))
                                $root.google.protobuf.Timestamp.encode(message.expireTime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.invalidateTime != null && Object.hasOwnProperty.call(message, "invalidateTime"))
                                $root.google.protobuf.Timestamp.encode(message.invalidateTime, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.signatureInfo != null && Object.hasOwnProperty.call(message, "signatureInfo"))
                                $root.google.cloud.accessapproval.v1.SignatureInfo.encode(message.signatureInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.autoApproved != null && Object.hasOwnProperty.call(message, "autoApproved"))
                                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.autoApproved);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ApproveDecision message, length delimited. Does not implicitly {@link google.cloud.accessapproval.v1.ApproveDecision.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @static
                         * @param {google.cloud.accessapproval.v1.IApproveDecision} message ApproveDecision message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ApproveDecision.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an ApproveDecision message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.accessapproval.v1.ApproveDecision} ApproveDecision
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ApproveDecision.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.accessapproval.v1.ApproveDecision();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.approveTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.expireTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 3: {
                                        message.invalidateTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 4: {
                                        message.signatureInfo = $root.google.cloud.accessapproval.v1.SignatureInfo.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 5: {
                                        message.autoApproved = reader.bool();
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
                         * Decodes an ApproveDecision message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.accessapproval.v1.ApproveDecision} ApproveDecision
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ApproveDecision.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an ApproveDecision message.
                         * @function verify
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ApproveDecision.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.approveTime != null && message.hasOwnProperty("approveTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.approveTime);
                                if (error)
                                    return "approveTime." + error;
                            }
                            if (message.expireTime != null && message.hasOwnProperty("expireTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.expireTime);
                                if (error)
                                    return "expireTime." + error;
                            }
                            if (message.invalidateTime != null && message.hasOwnProperty("invalidateTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.invalidateTime);
                                if (error)
                                    return "invalidateTime." + error;
                            }
                            if (message.signatureInfo != null && message.hasOwnProperty("signatureInfo")) {
                                var error = $root.google.cloud.accessapproval.v1.SignatureInfo.verify(message.signatureInfo);
                                if (error)
                                    return "signatureInfo." + error;
                            }
                            if (message.autoApproved != null && message.hasOwnProperty("autoApproved"))
                                if (typeof message.autoApproved !== "boolean")
                                    return "autoApproved: boolean expected";
                            return null;
                        };
    
                        /**
                         * Creates an ApproveDecision message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.accessapproval.v1.ApproveDecision} ApproveDecision
                         */
                        ApproveDecision.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.accessapproval.v1.ApproveDecision)
                                return object;
                            var message = new $root.google.cloud.accessapproval.v1.ApproveDecision();
                            if (object.approveTime != null) {
                                if (typeof object.approveTime !== "object")
                                    throw TypeError(".google.cloud.accessapproval.v1.ApproveDecision.approveTime: object expected");
                                message.approveTime = $root.google.protobuf.Timestamp.fromObject(object.approveTime);
                            }
                            if (object.expireTime != null) {
                                if (typeof object.expireTime !== "object")
                                    throw TypeError(".google.cloud.accessapproval.v1.ApproveDecision.expireTime: object expected");
                                message.expireTime = $root.google.protobuf.Timestamp.fromObject(object.expireTime);
                            }
                            if (object.invalidateTime != null) {
                                if (typeof object.invalidateTime !== "object")
                                    throw TypeError(".google.cloud.accessapproval.v1.ApproveDecision.invalidateTime: object expected");
                                message.invalidateTime = $root.google.protobuf.Timestamp.fromObject(object.invalidateTime);
                            }
                            if (object.signatureInfo != null) {
                                if (typeof object.signatureInfo !== "object")
                                    throw TypeError(".google.cloud.accessapproval.v1.ApproveDecision.signatureInfo: object expected");
                                message.signatureInfo = $root.google.cloud.accessapproval.v1.SignatureInfo.fromObject(object.signatureInfo);
                            }
                            if (object.autoApproved != null)
                                message.autoApproved = Boolean(object.autoApproved);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an ApproveDecision message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @static
                         * @param {google.cloud.accessapproval.v1.ApproveDecision} message ApproveDecision
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ApproveDecision.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.approveTime = null;
                                object.expireTime = null;
                                object.invalidateTime = null;
                                object.signatureInfo = null;
                                object.autoApproved = false;
                            }
                            if (message.approveTime != null && message.hasOwnProperty("approveTime"))
                                object.approveTime = $root.google.protobuf.Timestamp.toObject(message.approveTime, options);
                            if (message.expireTime != null && message.hasOwnProperty("expireTime"))
                                object.expireTime = $root.google.protobuf.Timestamp.toObject(message.expireTime, options);
                            if (message.invalidateTime != null && message.hasOwnProperty("invalidateTime"))
                                object.invalidateTime = $root.google.protobuf.Timestamp.toObject(message.invalidateTime, options);
                            if (message.signatureInfo != null && message.hasOwnProperty("signatureInfo"))
                                object.signatureInfo = $root.google.cloud.accessapproval.v1.SignatureInfo.toObject(message.signatureInfo, options);
                            if (message.autoApproved != null && message.hasOwnProperty("autoApproved"))
                                object.autoApproved = message.autoApproved;
                            return object;
                        };
    
                        /**
                         * Converts this ApproveDecision to JSON.
                         * @function toJSON
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ApproveDecision.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ApproveDecision
                         * @function getTypeUrl
                         * @memberof google.cloud.accessapproval.v1.ApproveDecision
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ApproveDecision.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.accessapproval.v1.ApproveDecision";
                        };
    
                        return ApproveDecision;
                    })();
    
                    v1.DismissDecision = (function() {
    
                        /**
                         * Properties of a DismissDecision.
                         * @memberof google.cloud.accessapproval.v1
                         * @interface IDismissDecision
                         * @property {google.protobuf.ITimestamp|null} [dismissTime] DismissDecision dismissTime
                         * @property {boolean|null} [implicit] DismissDecision implicit
                         */
    
                        /**
                         * Constructs a new DismissDecision.
                         * @memberof google.cloud.accessapproval.v1
                         * @classdesc Represents a DismissDecision.
                         * @implements IDismissDecision
                         * @constructor
                         * @param {google.cloud.accessapproval.v1.IDismissDecision=} [properties] Properties to set
                         */
                        function DismissDecision(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * DismissDecision dismissTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} dismissTime
                         * @memberof google.cloud.accessapproval.v1.DismissDecision
                         * @instance
                         */
                        DismissDecision.prototype.dismissTime = null;
    
                        /**
                         * DismissDecision implicit.
                         * @member {boolean} implicit
                         * @memberof google.cloud.accessapproval.v1.DismissDecision
                         * @instance
                         */
                        DismissDecision.prototype.implicit = false;
    
                        /**
                         * Creates a new DismissDecision instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.accessapproval.v1.DismissDecision
                         * @static
                         * @param {google.cloud.accessapproval.v1.IDismissDecision=} [properties] Properties to set
                         * @returns {google.cloud.accessapproval.v1.DismissDecision} DismissDecision instance
                         */
                        DismissDecision.create = function create(properties) {
                            return new DismissDecision(properties);
                        };
    
                        /**
                         * Encodes the specified DismissDecision message. Does not implicitly {@link google.cloud.accessapproval.v1.DismissDecision.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.accessapproval.v1.DismissDecision
                         * @static
                         * @param {google.cloud.accessapproval.v1.IDismissDecision} message DismissDecision message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DismissDecision.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.dismissTime != null && Object.hasOwnProperty.call(message, "dismissTime"))
                                $root.google.protobuf.Timestamp.encode(message.dismissTime, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.implicit != null && Object.hasOwnProperty.call(message, "implicit"))
                                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.implicit);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified DismissDecision message, length delimited. Does not implicitly {@link google.cloud.accessapproval.v1.DismissDecision.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.accessapproval.v1.DismissDecision
                         * @static
                         * @param {google.cloud.accessapproval.v1.IDismissDecision} message DismissDecision message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DismissDecision.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a DismissDecision message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.accessapproval.v1.DismissDecision
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.accessapproval.v1.DismissDecision} DismissDecision
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DismissDecision.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.accessapproval.v1.DismissDecision();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.dismissTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 2: {
                                        message.implicit = reader.bool();
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
                         * Decodes a DismissDecision message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.accessapproval.v1.DismissDecision
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.accessapproval.v1.DismissDecision} DismissDecision
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DismissDecision.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a DismissDecision message.
                         * @function verify
                         * @memberof google.cloud.accessapproval.v1.DismissDecision
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DismissDecision.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.dismissTime != null && message.hasOwnProperty("dismissTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.dismissTime);
                                if (error)
                                    return "dismissTime." + error;
                            }
                            if (message.implicit != null && message.hasOwnProperty("implicit"))
                                if (typeof message.implicit !== "boolean")
                                    return "implicit: boolean expected";
                            return null;
                        };
    
                        /**
                         * Creates a DismissDecision message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.accessapproval.v1.DismissDecision
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.accessapproval.v1.DismissDecision} DismissDecision
                         */
                        DismissDecision.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.accessapproval.v1.DismissDecision)
                                return object;
                            var message = new $root.google.cloud.accessapproval.v1.DismissDecision();
                            if (object.dismissTime != null) {
                                if (typeof object.dismissTime !== "object")
                                    throw TypeError(".google.cloud.accessapproval.v1.DismissDecision.dismissTime: object expected");
                                message.dismissTime = $root.google.protobuf.Timestamp.fromObject(object.dismissTime);
                            }
                            if (object.implicit != null)
                                message.implicit = Boolean(object.implicit);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a DismissDecision message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.accessapproval.v1.DismissDecision
                         * @static
                         * @param {google.cloud.accessapproval.v1.DismissDecision} message DismissDecision
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DismissDecision.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.dismissTime = null;
                                object.implicit = false;
                            }
                            if (message.dismissTime != null && message.hasOwnProperty("dismissTime"))
                                object.dismissTime = $root.google.protobuf.Timestamp.toObject(message.dismissTime, options);
                            if (message.implicit != null && message.hasOwnProperty("implicit"))
                                object.implicit = message.implicit;
                            return object;
                        };
    
                        /**
                         * Converts this DismissDecision to JSON.
                         * @function toJSON
                         * @memberof google.cloud.accessapproval.v1.DismissDecision
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DismissDecision.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for DismissDecision
                         * @function getTypeUrl
                         * @memberof google.cloud.accessapproval.v1.DismissDecision
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        DismissDecision.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.accessapproval.v1.DismissDecision";
                        };
    
                        return DismissDecision;
                    })();
    
                    v1.ResourceProperties = (function() {
    
                        /**
                         * Properties of a ResourceProperties.
                         * @memberof google.cloud.accessapproval.v1
                         * @interface IResourceProperties
                         * @property {boolean|null} [excludesDescendants] ResourceProperties excludesDescendants
                         */
    
                        /**
                         * Constructs a new ResourceProperties.
                         * @memberof google.cloud.accessapproval.v1
                         * @classdesc Represents a ResourceProperties.
                         * @implements IResourceProperties
                         * @constructor
                         * @param {google.cloud.accessapproval.v1.IResourceProperties=} [properties] Properties to set
                         */
                        function ResourceProperties(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ResourceProperties excludesDescendants.
                         * @member {boolean} excludesDescendants
                         * @memberof google.cloud.accessapproval.v1.ResourceProperties
                         * @instance
                         */
                        ResourceProperties.prototype.excludesDescendants = false;
    
                        /**
                         * Creates a new ResourceProperties instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.accessapproval.v1.ResourceProperties
                         * @static
                         * @param {google.cloud.accessapproval.v1.IResourceProperties=} [properties] Properties to set
                         * @returns {google.cloud.accessapproval.v1.ResourceProperties} ResourceProperties instance
                         */
                        ResourceProperties.create = function create(properties) {
                            return new ResourceProperties(properties);
                        };
    
                        /**
                         * Encodes the specified ResourceProperties message. Does not implicitly {@link google.cloud.accessapproval.v1.ResourceProperties.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.accessapproval.v1.ResourceProperties
                         * @static
                         * @param {google.cloud.accessapproval.v1.IResourceProperties} message ResourceProperties message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ResourceProperties.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.excludesDescendants != null && Object.hasOwnProperty.call(message, "excludesDescendants"))
                                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.excludesDescendants);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ResourceProperties message, length delimited. Does not implicitly {@link google.cloud.accessapproval.v1.ResourceProperties.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.accessapproval.v1.ResourceProperties
                         * @static
                         * @param {google.cloud.accessapproval.v1.IResourceProperties} message ResourceProperties message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ResourceProperties.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ResourceProperties message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.accessapproval.v1.ResourceProperties
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.accessapproval.v1.ResourceProperties} ResourceProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ResourceProperties.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.accessapproval.v1.ResourceProperties();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.excludesDescendants = reader.bool();
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
                         * Decodes a ResourceProperties message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.accessapproval.v1.ResourceProperties
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.accessapproval.v1.ResourceProperties} ResourceProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ResourceProperties.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ResourceProperties message.
                         * @function verify
                         * @memberof google.cloud.accessapproval.v1.ResourceProperties
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ResourceProperties.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.excludesDescendants != null && message.hasOwnProperty("excludesDescendants"))
                                if (typeof message.excludesDescendants !== "boolean")
                                    return "excludesDescendants: boolean expected";
                            return null;
                        };
    
                        /**
                         * Creates a ResourceProperties message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.accessapproval.v1.ResourceProperties
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.accessapproval.v1.ResourceProperties} ResourceProperties
                         */
                        ResourceProperties.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.accessapproval.v1.ResourceProperties)
                                return object;
                            var message = new $root.google.cloud.accessapproval.v1.ResourceProperties();
                            if (object.excludesDescendants != null)
                                message.excludesDescendants = Boolean(object.excludesDescendants);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ResourceProperties message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.accessapproval.v1.ResourceProperties
                         * @static
                         * @param {google.cloud.accessapproval.v1.ResourceProperties} message ResourceProperties
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ResourceProperties.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.excludesDescendants = false;
                            if (message.excludesDescendants != null && message.hasOwnProperty("excludesDescendants"))
                                object.excludesDescendants = message.excludesDescendants;
                            return object;
                        };
    
                        /**
                         * Converts this ResourceProperties to JSON.
                         * @function toJSON
                         * @memberof google.cloud.accessapproval.v1.ResourceProperties
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ResourceProperties.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ResourceProperties
                         * @function getTypeUrl
                         * @memberof google.cloud.accessapproval.v1.ResourceProperties
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ResourceProperties.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.accessapproval.v1.ResourceProperties";
                        };
    
                        return ResourceProperties;
                    })();
    
                    v1.ApprovalRequest = (function() {
    
                        /**
                         * Properties of an ApprovalRequest.
                         * @memberof google.cloud.accessapproval.v1
                         * @interface IApprovalRequest
                         * @property {string|null} [name] ApprovalRequest name
                         * @property {string|null} [requestedResourceName] ApprovalRequest requestedResourceName
                         * @property {google.cloud.accessapproval.v1.IResourceProperties|null} [requestedResourceProperties] ApprovalRequest requestedResourceProperties
                         * @property {google.cloud.accessapproval.v1.IAccessReason|null} [requestedReason] ApprovalRequest requestedReason
                         * @property {google.cloud.accessapproval.v1.IAccessLocations|null} [requestedLocations] ApprovalRequest requestedLocations
                         * @property {google.protobuf.ITimestamp|null} [requestTime] ApprovalRequest requestTime
                         * @property {google.protobuf.ITimestamp|null} [requestedExpiration] ApprovalRequest requestedExpiration
                         * @property {google.cloud.accessapproval.v1.IApproveDecision|null} [approve] ApprovalRequest approve
                         * @property {google.cloud.accessapproval.v1.IDismissDecision|null} [dismiss] ApprovalRequest dismiss
                         */
    
                        /**
                         * Constructs a new ApprovalRequest.
                         * @memberof google.cloud.accessapproval.v1
                         * @classdesc Represents an ApprovalRequest.
                         * @implements IApprovalRequest
                         * @constructor
                         * @param {google.cloud.accessapproval.v1.IApprovalRequest=} [properties] Properties to set
                         */
                        function ApprovalRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ApprovalRequest name.
                         * @member {string} name
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @instance
                         */
                        ApprovalRequest.prototype.name = "";
    
                        /**
                         * ApprovalRequest requestedResourceName.
                         * @member {string} requestedResourceName
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @instance
                         */
                        ApprovalRequest.prototype.requestedResourceName = "";
    
                        /**
                         * ApprovalRequest requestedResourceProperties.
                         * @member {google.cloud.accessapproval.v1.IResourceProperties|null|undefined} requestedResourceProperties
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @instance
                         */
                        ApprovalRequest.prototype.requestedResourceProperties = null;
    
                        /**
                         * ApprovalRequest requestedReason.
                         * @member {google.cloud.accessapproval.v1.IAccessReason|null|undefined} requestedReason
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @instance
                         */
                        ApprovalRequest.prototype.requestedReason = null;
    
                        /**
                         * ApprovalRequest requestedLocations.
                         * @member {google.cloud.accessapproval.v1.IAccessLocations|null|undefined} requestedLocations
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @instance
                         */
                        ApprovalRequest.prototype.requestedLocations = null;
    
                        /**
                         * ApprovalRequest requestTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} requestTime
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @instance
                         */
                        ApprovalRequest.prototype.requestTime = null;
    
                        /**
                         * ApprovalRequest requestedExpiration.
                         * @member {google.protobuf.ITimestamp|null|undefined} requestedExpiration
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @instance
                         */
                        ApprovalRequest.prototype.requestedExpiration = null;
    
                        /**
                         * ApprovalRequest approve.
                         * @member {google.cloud.accessapproval.v1.IApproveDecision|null|undefined} approve
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @instance
                         */
                        ApprovalRequest.prototype.approve = null;
    
                        /**
                         * ApprovalRequest dismiss.
                         * @member {google.cloud.accessapproval.v1.IDismissDecision|null|undefined} dismiss
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @instance
                         */
                        ApprovalRequest.prototype.dismiss = null;
    
                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;
    
                        /**
                         * ApprovalRequest decision.
                         * @member {"approve"|"dismiss"|undefined} decision
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @instance
                         */
                        Object.defineProperty(ApprovalRequest.prototype, "decision", {
                            get: $util.oneOfGetter($oneOfFields = ["approve", "dismiss"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * Creates a new ApprovalRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @static
                         * @param {google.cloud.accessapproval.v1.IApprovalRequest=} [properties] Properties to set
                         * @returns {google.cloud.accessapproval.v1.ApprovalRequest} ApprovalRequest instance
                         */
                        ApprovalRequest.create = function create(properties) {
                            return new ApprovalRequest(properties);
                        };
    
                        /**
                         * Encodes the specified ApprovalRequest message. Does not implicitly {@link google.cloud.accessapproval.v1.ApprovalRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @static
                         * @param {google.cloud.accessapproval.v1.IApprovalRequest} message ApprovalRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ApprovalRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.requestedResourceName != null && Object.hasOwnProperty.call(message, "requestedResourceName"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.requestedResourceName);
                            if (message.requestedReason != null && Object.hasOwnProperty.call(message, "requestedReason"))
                                $root.google.cloud.accessapproval.v1.AccessReason.encode(message.requestedReason, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.requestedLocations != null && Object.hasOwnProperty.call(message, "requestedLocations"))
                                $root.google.cloud.accessapproval.v1.AccessLocations.encode(message.requestedLocations, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.requestTime != null && Object.hasOwnProperty.call(message, "requestTime"))
                                $root.google.protobuf.Timestamp.encode(message.requestTime, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                            if (message.requestedExpiration != null && Object.hasOwnProperty.call(message, "requestedExpiration"))
                                $root.google.protobuf.Timestamp.encode(message.requestedExpiration, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                            if (message.approve != null && Object.hasOwnProperty.call(message, "approve"))
                                $root.google.cloud.accessapproval.v1.ApproveDecision.encode(message.approve, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                            if (message.dismiss != null && Object.hasOwnProperty.call(message, "dismiss"))
                                $root.google.cloud.accessapproval.v1.DismissDecision.encode(message.dismiss, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                            if (message.requestedResourceProperties != null && Object.hasOwnProperty.call(message, "requestedResourceProperties"))
                                $root.google.cloud.accessapproval.v1.ResourceProperties.encode(message.requestedResourceProperties, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ApprovalRequest message, length delimited. Does not implicitly {@link google.cloud.accessapproval.v1.ApprovalRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @static
                         * @param {google.cloud.accessapproval.v1.IApprovalRequest} message ApprovalRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ApprovalRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an ApprovalRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.accessapproval.v1.ApprovalRequest} ApprovalRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ApprovalRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.accessapproval.v1.ApprovalRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.name = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.requestedResourceName = reader.string();
                                        break;
                                    }
                                case 9: {
                                        message.requestedResourceProperties = $root.google.cloud.accessapproval.v1.ResourceProperties.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 3: {
                                        message.requestedReason = $root.google.cloud.accessapproval.v1.AccessReason.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 4: {
                                        message.requestedLocations = $root.google.cloud.accessapproval.v1.AccessLocations.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 5: {
                                        message.requestTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 6: {
                                        message.requestedExpiration = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 7: {
                                        message.approve = $root.google.cloud.accessapproval.v1.ApproveDecision.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 8: {
                                        message.dismiss = $root.google.cloud.accessapproval.v1.DismissDecision.decode(reader, reader.uint32());
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
                         * Decodes an ApprovalRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.accessapproval.v1.ApprovalRequest} ApprovalRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ApprovalRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an ApprovalRequest message.
                         * @function verify
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ApprovalRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.requestedResourceName != null && message.hasOwnProperty("requestedResourceName"))
                                if (!$util.isString(message.requestedResourceName))
                                    return "requestedResourceName: string expected";
                            if (message.requestedResourceProperties != null && message.hasOwnProperty("requestedResourceProperties")) {
                                var error = $root.google.cloud.accessapproval.v1.ResourceProperties.verify(message.requestedResourceProperties);
                                if (error)
                                    return "requestedResourceProperties." + error;
                            }
                            if (message.requestedReason != null && message.hasOwnProperty("requestedReason")) {
                                var error = $root.google.cloud.accessapproval.v1.AccessReason.verify(message.requestedReason);
                                if (error)
                                    return "requestedReason." + error;
                            }
                            if (message.requestedLocations != null && message.hasOwnProperty("requestedLocations")) {
                                var error = $root.google.cloud.accessapproval.v1.AccessLocations.verify(message.requestedLocations);
                                if (error)
                                    return "requestedLocations." + error;
                            }
                            if (message.requestTime != null && message.hasOwnProperty("requestTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.requestTime);
                                if (error)
                                    return "requestTime." + error;
                            }
                            if (message.requestedExpiration != null && message.hasOwnProperty("requestedExpiration")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.requestedExpiration);
                                if (error)
                                    return "requestedExpiration." + error;
                            }
                            if (message.approve != null && message.hasOwnProperty("approve")) {
                                properties.decision = 1;
                                {
                                    var error = $root.google.cloud.accessapproval.v1.ApproveDecision.verify(message.approve);
                                    if (error)
                                        return "approve." + error;
                                }
                            }
                            if (message.dismiss != null && message.hasOwnProperty("dismiss")) {
                                if (properties.decision === 1)
                                    return "decision: multiple values";
                                properties.decision = 1;
                                {
                                    var error = $root.google.cloud.accessapproval.v1.DismissDecision.verify(message.dismiss);
                                    if (error)
                                        return "dismiss." + error;
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates an ApprovalRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.accessapproval.v1.ApprovalRequest} ApprovalRequest
                         */
                        ApprovalRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.accessapproval.v1.ApprovalRequest)
                                return object;
                            var message = new $root.google.cloud.accessapproval.v1.ApprovalRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.requestedResourceName != null)
                                message.requestedResourceName = String(object.requestedResourceName);
                            if (object.requestedResourceProperties != null) {
                                if (typeof object.requestedResourceProperties !== "object")
                                    throw TypeError(".google.cloud.accessapproval.v1.ApprovalRequest.requestedResourceProperties: object expected");
                                message.requestedResourceProperties = $root.google.cloud.accessapproval.v1.ResourceProperties.fromObject(object.requestedResourceProperties);
                            }
                            if (object.requestedReason != null) {
                                if (typeof object.requestedReason !== "object")
                                    throw TypeError(".google.cloud.accessapproval.v1.ApprovalRequest.requestedReason: object expected");
                                message.requestedReason = $root.google.cloud.accessapproval.v1.AccessReason.fromObject(object.requestedReason);
                            }
                            if (object.requestedLocations != null) {
                                if (typeof object.requestedLocations !== "object")
                                    throw TypeError(".google.cloud.accessapproval.v1.ApprovalRequest.requestedLocations: object expected");
                                message.requestedLocations = $root.google.cloud.accessapproval.v1.AccessLocations.fromObject(object.requestedLocations);
                            }
                            if (object.requestTime != null) {
                                if (typeof object.requestTime !== "object")
                                    throw TypeError(".google.cloud.accessapproval.v1.ApprovalRequest.requestTime: object expected");
                                message.requestTime = $root.google.protobuf.Timestamp.fromObject(object.requestTime);
                            }
                            if (object.requestedExpiration != null) {
                                if (typeof object.requestedExpiration !== "object")
                                    throw TypeError(".google.cloud.accessapproval.v1.ApprovalRequest.requestedExpiration: object expected");
                                message.requestedExpiration = $root.google.protobuf.Timestamp.fromObject(object.requestedExpiration);
                            }
                            if (object.approve != null) {
                                if (typeof object.approve !== "object")
                                    throw TypeError(".google.cloud.accessapproval.v1.ApprovalRequest.approve: object expected");
                                message.approve = $root.google.cloud.accessapproval.v1.ApproveDecision.fromObject(object.approve);
                            }
                            if (object.dismiss != null) {
                                if (typeof object.dismiss !== "object")
                                    throw TypeError(".google.cloud.accessapproval.v1.ApprovalRequest.dismiss: object expected");
                                message.dismiss = $root.google.cloud.accessapproval.v1.DismissDecision.fromObject(object.dismiss);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an ApprovalRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @static
                         * @param {google.cloud.accessapproval.v1.ApprovalRequest} message ApprovalRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ApprovalRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.name = "";
                                object.requestedResourceName = "";
                                object.requestedReason = null;
                                object.requestedLocations = null;
                                object.requestTime = null;
                                object.requestedExpiration = null;
                                object.requestedResourceProperties = null;
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.requestedResourceName != null && message.hasOwnProperty("requestedResourceName"))
                                object.requestedResourceName = message.requestedResourceName;
                            if (message.requestedReason != null && message.hasOwnProperty("requestedReason"))
                                object.requestedReason = $root.google.cloud.accessapproval.v1.AccessReason.toObject(message.requestedReason, options);
                            if (message.requestedLocations != null && message.hasOwnProperty("requestedLocations"))
                                object.requestedLocations = $root.google.cloud.accessapproval.v1.AccessLocations.toObject(message.requestedLocations, options);
                            if (message.requestTime != null && message.hasOwnProperty("requestTime"))
                                object.requestTime = $root.google.protobuf.Timestamp.toObject(message.requestTime, options);
                            if (message.requestedExpiration != null && message.hasOwnProperty("requestedExpiration"))
                                object.requestedExpiration = $root.google.protobuf.Timestamp.toObject(message.requestedExpiration, options);
                            if (message.approve != null && message.hasOwnProperty("approve")) {
                                object.approve = $root.google.cloud.accessapproval.v1.ApproveDecision.toObject(message.approve, options);
                                if (options.oneofs)
                                    object.decision = "approve";
                            }
                            if (message.dismiss != null && message.hasOwnProperty("dismiss")) {
                                object.dismiss = $root.google.cloud.accessapproval.v1.DismissDecision.toObject(message.dismiss, options);
                                if (options.oneofs)
                                    object.decision = "dismiss";
                            }
                            if (message.requestedResourceProperties != null && message.hasOwnProperty("requestedResourceProperties"))
                                object.requestedResourceProperties = $root.google.cloud.accessapproval.v1.ResourceProperties.toObject(message.requestedResourceProperties, options);
                            return object;
                        };
    
                        /**
                         * Converts this ApprovalRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ApprovalRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ApprovalRequest
                         * @function getTypeUrl
                         * @memberof google.cloud.accessapproval.v1.ApprovalRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ApprovalRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.accessapproval.v1.ApprovalRequest";
                        };
    
                        return ApprovalRequest;
                    })();
    
                    /**
                     * EnrollmentLevel enum.
                     * @name google.cloud.accessapproval.v1.EnrollmentLevel
                     * @enum {number}
                     * @property {number} ENROLLMENT_LEVEL_UNSPECIFIED=0 ENROLLMENT_LEVEL_UNSPECIFIED value
                     * @property {number} BLOCK_ALL=1 BLOCK_ALL value
                     */
                    v1.EnrollmentLevel = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "ENROLLMENT_LEVEL_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "BLOCK_ALL"] = 1;
                        return values;
                    })();
    
                    v1.EnrolledService = (function() {
    
                        /**
                         * Properties of an EnrolledService.
                         * @memberof google.cloud.accessapproval.v1
                         * @interface IEnrolledService
                         * @property {string|null} [cloudProduct] EnrolledService cloudProduct
                         * @property {google.cloud.accessapproval.v1.EnrollmentLevel|null} [enrollmentLevel] EnrolledService enrollmentLevel
                         */
    
                        /**
                         * Constructs a new EnrolledService.
                         * @memberof google.cloud.accessapproval.v1
                         * @classdesc Represents an EnrolledService.
                         * @implements IEnrolledService
                         * @constructor
                         * @param {google.cloud.accessapproval.v1.IEnrolledService=} [properties] Properties to set
                         */
                        function EnrolledService(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * EnrolledService cloudProduct.
                         * @member {string} cloudProduct
                         * @memberof google.cloud.accessapproval.v1.EnrolledService
                         * @instance
                         */
                        EnrolledService.prototype.cloudProduct = "";
    
                        /**
                         * EnrolledService enrollmentLevel.
                         * @member {google.cloud.accessapproval.v1.EnrollmentLevel} enrollmentLevel
                         * @memberof google.cloud.accessapproval.v1.EnrolledService
                         * @instance
                         */
                        EnrolledService.prototype.enrollmentLevel = 0;
    
                        /**
                         * Creates a new EnrolledService instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.accessapproval.v1.EnrolledService
                         * @static
                         * @param {google.cloud.accessapproval.v1.IEnrolledService=} [properties] Properties to set
                         * @returns {google.cloud.accessapproval.v1.EnrolledService} EnrolledService instance
                         */
                        EnrolledService.create = function create(properties) {
                            return new EnrolledService(properties);
                        };
    
                        /**
                         * Encodes the specified EnrolledService message. Does not implicitly {@link google.cloud.accessapproval.v1.EnrolledService.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.accessapproval.v1.EnrolledService
                         * @static
                         * @param {google.cloud.accessapproval.v1.IEnrolledService} message EnrolledService message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EnrolledService.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.cloudProduct != null && Object.hasOwnProperty.call(message, "cloudProduct"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cloudProduct);
                            if (message.enrollmentLevel != null && Object.hasOwnProperty.call(message, "enrollmentLevel"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.enrollmentLevel);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified EnrolledService message, length delimited. Does not implicitly {@link google.cloud.accessapproval.v1.EnrolledService.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.accessapproval.v1.EnrolledService
                         * @static
                         * @param {google.cloud.accessapproval.v1.IEnrolledService} message EnrolledService message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EnrolledService.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an EnrolledService message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.accessapproval.v1.EnrolledService
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.accessapproval.v1.EnrolledService} EnrolledService
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EnrolledService.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.accessapproval.v1.EnrolledService();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.cloudProduct = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.enrollmentLevel = reader.int32();
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
                         * Decodes an EnrolledService message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.accessapproval.v1.EnrolledService
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.accessapproval.v1.EnrolledService} EnrolledService
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EnrolledService.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an EnrolledService message.
                         * @function verify
                         * @memberof google.cloud.accessapproval.v1.EnrolledService
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        EnrolledService.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.cloudProduct != null && message.hasOwnProperty("cloudProduct"))
                                if (!$util.isString(message.cloudProduct))
                                    return "cloudProduct: string expected";
                            if (message.enrollmentLevel != null && message.hasOwnProperty("enrollmentLevel"))
                                switch (message.enrollmentLevel) {
                                default:
                                    return "enrollmentLevel: enum value expected";
                                case 0:
                                case 1:
                                    break;
                                }
                            return null;
                        };
    
                        /**
                         * Creates an EnrolledService message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.accessapproval.v1.EnrolledService
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.accessapproval.v1.EnrolledService} EnrolledService
                         */
                        EnrolledService.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.accessapproval.v1.EnrolledService)
                                return object;
                            var message = new $root.google.cloud.accessapproval.v1.EnrolledService();
                            if (object.cloudProduct != null)
                                message.cloudProduct = String(object.cloudProduct);
                            switch (object.enrollmentLevel) {
                            default:
                                if (typeof object.enrollmentLevel === "number") {
                                    message.enrollmentLevel = object.enrollmentLevel;
                                    break;
                                }
                                break;
                            case "ENROLLMENT_LEVEL_UNSPECIFIED":
                            case 0:
                                message.enrollmentLevel = 0;
                                break;
                            case "BLOCK_ALL":
                            case 1:
                                message.enrollmentLevel = 1;
                                break;
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an EnrolledService message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.accessapproval.v1.EnrolledService
                         * @static
                         * @param {google.cloud.accessapproval.v1.EnrolledService} message EnrolledService
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        EnrolledService.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.cloudProduct = "";
                                object.enrollmentLevel = options.enums === String ? "ENROLLMENT_LEVEL_UNSPECIFIED" : 0;
                            }
                            if (message.cloudProduct != null && message.hasOwnProperty("cloudProduct"))
                                object.cloudProduct = message.cloudProduct;
                            if (message.enrollmentLevel != null && message.hasOwnProperty("enrollmentLevel"))
                                object.enrollmentLevel = options.enums === String ? $root.google.cloud.accessapproval.v1.EnrollmentLevel[message.enrollmentLevel] === undefined ? message.enrollmentLevel : $root.google.cloud.accessapproval.v1.EnrollmentLevel[message.enrollmentLevel] : message.enrollmentLevel;
                            return object;
                        };
    
                        /**
                         * Converts this EnrolledService to JSON.
                         * @function toJSON
                         * @memberof google.cloud.accessapproval.v1.EnrolledService
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        EnrolledService.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for EnrolledService
                         * @function getTypeUrl
                         * @memberof google.cloud.accessapproval.v1.EnrolledService
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        EnrolledService.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.accessapproval.v1.EnrolledService";
                        };
    
                        return EnrolledService;
                    })();
    
                    v1.AccessApprovalSettings = (function() {
    
                        /**
                         * Properties of an AccessApprovalSettings.
                         * @memberof google.cloud.accessapproval.v1
                         * @interface IAccessApprovalSettings
                         * @property {string|null} [name] AccessApprovalSettings name
                         * @property {Array.<string>|null} [notificationEmails] AccessApprovalSettings notificationEmails
                         * @property {Array.<google.cloud.accessapproval.v1.IEnrolledService>|null} [enrolledServices] AccessApprovalSettings enrolledServices
                         * @property {boolean|null} [enrolledAncestor] AccessApprovalSettings enrolledAncestor
                         * @property {string|null} [activeKeyVersion] AccessApprovalSettings activeKeyVersion
                         * @property {boolean|null} [ancestorHasActiveKeyVersion] AccessApprovalSettings ancestorHasActiveKeyVersion
                         * @property {boolean|null} [invalidKeyVersion] AccessApprovalSettings invalidKeyVersion
                         */
    
                        /**
                         * Constructs a new AccessApprovalSettings.
                         * @memberof google.cloud.accessapproval.v1
                         * @classdesc Represents an AccessApprovalSettings.
                         * @implements IAccessApprovalSettings
                         * @constructor
                         * @param {google.cloud.accessapproval.v1.IAccessApprovalSettings=} [properties] Properties to set
                         */
                        function AccessApprovalSettings(properties) {
                            this.notificationEmails = [];
                            this.enrolledServices = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * AccessApprovalSettings name.
                         * @member {string} name
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @instance
                         */
                        AccessApprovalSettings.prototype.name = "";
    
                        /**
                         * AccessApprovalSettings notificationEmails.
                         * @member {Array.<string>} notificationEmails
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @instance
                         */
                        AccessApprovalSettings.prototype.notificationEmails = $util.emptyArray;
    
                        /**
                         * AccessApprovalSettings enrolledServices.
                         * @member {Array.<google.cloud.accessapproval.v1.IEnrolledService>} enrolledServices
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @instance
                         */
                        AccessApprovalSettings.prototype.enrolledServices = $util.emptyArray;
    
                        /**
                         * AccessApprovalSettings enrolledAncestor.
                         * @member {boolean} enrolledAncestor
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @instance
                         */
                        AccessApprovalSettings.prototype.enrolledAncestor = false;
    
                        /**
                         * AccessApprovalSettings activeKeyVersion.
                         * @member {string} activeKeyVersion
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @instance
                         */
                        AccessApprovalSettings.prototype.activeKeyVersion = "";
    
                        /**
                         * AccessApprovalSettings ancestorHasActiveKeyVersion.
                         * @member {boolean} ancestorHasActiveKeyVersion
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @instance
                         */
                        AccessApprovalSettings.prototype.ancestorHasActiveKeyVersion = false;
    
                        /**
                         * AccessApprovalSettings invalidKeyVersion.
                         * @member {boolean} invalidKeyVersion
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @instance
                         */
                        AccessApprovalSettings.prototype.invalidKeyVersion = false;
    
                        /**
                         * Creates a new AccessApprovalSettings instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @static
                         * @param {google.cloud.accessapproval.v1.IAccessApprovalSettings=} [properties] Properties to set
                         * @returns {google.cloud.accessapproval.v1.AccessApprovalSettings} AccessApprovalSettings instance
                         */
                        AccessApprovalSettings.create = function create(properties) {
                            return new AccessApprovalSettings(properties);
                        };
    
                        /**
                         * Encodes the specified AccessApprovalSettings message. Does not implicitly {@link google.cloud.accessapproval.v1.AccessApprovalSettings.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @static
                         * @param {google.cloud.accessapproval.v1.IAccessApprovalSettings} message AccessApprovalSettings message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AccessApprovalSettings.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.notificationEmails != null && message.notificationEmails.length)
                                for (var i = 0; i < message.notificationEmails.length; ++i)
                                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.notificationEmails[i]);
                            if (message.enrolledServices != null && message.enrolledServices.length)
                                for (var i = 0; i < message.enrolledServices.length; ++i)
                                    $root.google.cloud.accessapproval.v1.EnrolledService.encode(message.enrolledServices[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.enrolledAncestor != null && Object.hasOwnProperty.call(message, "enrolledAncestor"))
                                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.enrolledAncestor);
                            if (message.activeKeyVersion != null && Object.hasOwnProperty.call(message, "activeKeyVersion"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.activeKeyVersion);
                            if (message.ancestorHasActiveKeyVersion != null && Object.hasOwnProperty.call(message, "ancestorHasActiveKeyVersion"))
                                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.ancestorHasActiveKeyVersion);
                            if (message.invalidKeyVersion != null && Object.hasOwnProperty.call(message, "invalidKeyVersion"))
                                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.invalidKeyVersion);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified AccessApprovalSettings message, length delimited. Does not implicitly {@link google.cloud.accessapproval.v1.AccessApprovalSettings.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @static
                         * @param {google.cloud.accessapproval.v1.IAccessApprovalSettings} message AccessApprovalSettings message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AccessApprovalSettings.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an AccessApprovalSettings message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.accessapproval.v1.AccessApprovalSettings} AccessApprovalSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AccessApprovalSettings.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.accessapproval.v1.AccessApprovalSettings();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.name = reader.string();
                                        break;
                                    }
                                case 2: {
                                        if (!(message.notificationEmails && message.notificationEmails.length))
                                            message.notificationEmails = [];
                                        message.notificationEmails.push(reader.string());
                                        break;
                                    }
                                case 3: {
                                        if (!(message.enrolledServices && message.enrolledServices.length))
                                            message.enrolledServices = [];
                                        message.enrolledServices.push($root.google.cloud.accessapproval.v1.EnrolledService.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 4: {
                                        message.enrolledAncestor = reader.bool();
                                        break;
                                    }
                                case 6: {
                                        message.activeKeyVersion = reader.string();
                                        break;
                                    }
                                case 7: {
                                        message.ancestorHasActiveKeyVersion = reader.bool();
                                        break;
                                    }
                                case 8: {
                                        message.invalidKeyVersion = reader.bool();
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
                         * Decodes an AccessApprovalSettings message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.accessapproval.v1.AccessApprovalSettings} AccessApprovalSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AccessApprovalSettings.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an AccessApprovalSettings message.
                         * @function verify
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        AccessApprovalSettings.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.notificationEmails != null && message.hasOwnProperty("notificationEmails")) {
                                if (!Array.isArray(message.notificationEmails))
                                    return "notificationEmails: array expected";
                                for (var i = 0; i < message.notificationEmails.length; ++i)
                                    if (!$util.isString(message.notificationEmails[i]))
                                        return "notificationEmails: string[] expected";
                            }
                            if (message.enrolledServices != null && message.hasOwnProperty("enrolledServices")) {
                                if (!Array.isArray(message.enrolledServices))
                                    return "enrolledServices: array expected";
                                for (var i = 0; i < message.enrolledServices.length; ++i) {
                                    var error = $root.google.cloud.accessapproval.v1.EnrolledService.verify(message.enrolledServices[i]);
                                    if (error)
                                        return "enrolledServices." + error;
                                }
                            }
                            if (message.enrolledAncestor != null && message.hasOwnProperty("enrolledAncestor"))
                                if (typeof message.enrolledAncestor !== "boolean")
                                    return "enrolledAncestor: boolean expected";
                            if (message.activeKeyVersion != null && message.hasOwnProperty("activeKeyVersion"))
                                if (!$util.isString(message.activeKeyVersion))
                                    return "activeKeyVersion: string expected";
                            if (message.ancestorHasActiveKeyVersion != null && message.hasOwnProperty("ancestorHasActiveKeyVersion"))
                                if (typeof message.ancestorHasActiveKeyVersion !== "boolean")
                                    return "ancestorHasActiveKeyVersion: boolean expected";
                            if (message.invalidKeyVersion != null && message.hasOwnProperty("invalidKeyVersion"))
                                if (typeof message.invalidKeyVersion !== "boolean")
                                    return "invalidKeyVersion: boolean expected";
                            return null;
                        };
    
                        /**
                         * Creates an AccessApprovalSettings message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.accessapproval.v1.AccessApprovalSettings} AccessApprovalSettings
                         */
                        AccessApprovalSettings.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.accessapproval.v1.AccessApprovalSettings)
                                return object;
                            var message = new $root.google.cloud.accessapproval.v1.AccessApprovalSettings();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.notificationEmails) {
                                if (!Array.isArray(object.notificationEmails))
                                    throw TypeError(".google.cloud.accessapproval.v1.AccessApprovalSettings.notificationEmails: array expected");
                                message.notificationEmails = [];
                                for (var i = 0; i < object.notificationEmails.length; ++i)
                                    message.notificationEmails[i] = String(object.notificationEmails[i]);
                            }
                            if (object.enrolledServices) {
                                if (!Array.isArray(object.enrolledServices))
                                    throw TypeError(".google.cloud.accessapproval.v1.AccessApprovalSettings.enrolledServices: array expected");
                                message.enrolledServices = [];
                                for (var i = 0; i < object.enrolledServices.length; ++i) {
                                    if (typeof object.enrolledServices[i] !== "object")
                                        throw TypeError(".google.cloud.accessapproval.v1.AccessApprovalSettings.enrolledServices: object expected");
                                    message.enrolledServices[i] = $root.google.cloud.accessapproval.v1.EnrolledService.fromObject(object.enrolledServices[i]);
                                }
                            }
                            if (object.enrolledAncestor != null)
                                message.enrolledAncestor = Boolean(object.enrolledAncestor);
                            if (object.activeKeyVersion != null)
                                message.activeKeyVersion = String(object.activeKeyVersion);
                            if (object.ancestorHasActiveKeyVersion != null)
                                message.ancestorHasActiveKeyVersion = Boolean(object.ancestorHasActiveKeyVersion);
                            if (object.invalidKeyVersion != null)
                                message.invalidKeyVersion = Boolean(object.invalidKeyVersion);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an AccessApprovalSettings message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @static
                         * @param {google.cloud.accessapproval.v1.AccessApprovalSettings} message AccessApprovalSettings
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AccessApprovalSettings.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.notificationEmails = [];
                                object.enrolledServices = [];
                            }
                            if (options.defaults) {
                                object.name = "";
                                object.enrolledAncestor = false;
                                object.activeKeyVersion = "";
                                object.ancestorHasActiveKeyVersion = false;
                                object.invalidKeyVersion = false;
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.notificationEmails && message.notificationEmails.length) {
                                object.notificationEmails = [];
                                for (var j = 0; j < message.notificationEmails.length; ++j)
                                    object.notificationEmails[j] = message.notificationEmails[j];
                            }
                            if (message.enrolledServices && message.enrolledServices.length) {
                                object.enrolledServices = [];
                                for (var j = 0; j < message.enrolledServices.length; ++j)
                                    object.enrolledServices[j] = $root.google.cloud.accessapproval.v1.EnrolledService.toObject(message.enrolledServices[j], options);
                            }
                            if (message.enrolledAncestor != null && message.hasOwnProperty("enrolledAncestor"))
                                object.enrolledAncestor = message.enrolledAncestor;
                            if (message.activeKeyVersion != null && message.hasOwnProperty("activeKeyVersion"))
                                object.activeKeyVersion = message.activeKeyVersion;
                            if (message.ancestorHasActiveKeyVersion != null && message.hasOwnProperty("ancestorHasActiveKeyVersion"))
                                object.ancestorHasActiveKeyVersion = message.ancestorHasActiveKeyVersion;
                            if (message.invalidKeyVersion != null && message.hasOwnProperty("invalidKeyVersion"))
                                object.invalidKeyVersion = message.invalidKeyVersion;
                            return object;
                        };
    
                        /**
                         * Converts this AccessApprovalSettings to JSON.
                         * @function toJSON
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        AccessApprovalSettings.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for AccessApprovalSettings
                         * @function getTypeUrl
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalSettings
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        AccessApprovalSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.accessapproval.v1.AccessApprovalSettings";
                        };
    
                        return AccessApprovalSettings;
                    })();
    
                    v1.AccessApprovalServiceAccount = (function() {
    
                        /**
                         * Properties of an AccessApprovalServiceAccount.
                         * @memberof google.cloud.accessapproval.v1
                         * @interface IAccessApprovalServiceAccount
                         * @property {string|null} [name] AccessApprovalServiceAccount name
                         * @property {string|null} [accountEmail] AccessApprovalServiceAccount accountEmail
                         */
    
                        /**
                         * Constructs a new AccessApprovalServiceAccount.
                         * @memberof google.cloud.accessapproval.v1
                         * @classdesc Represents an AccessApprovalServiceAccount.
                         * @implements IAccessApprovalServiceAccount
                         * @constructor
                         * @param {google.cloud.accessapproval.v1.IAccessApprovalServiceAccount=} [properties] Properties to set
                         */
                        function AccessApprovalServiceAccount(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * AccessApprovalServiceAccount name.
                         * @member {string} name
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalServiceAccount
                         * @instance
                         */
                        AccessApprovalServiceAccount.prototype.name = "";
    
                        /**
                         * AccessApprovalServiceAccount accountEmail.
                         * @member {string} accountEmail
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalServiceAccount
                         * @instance
                         */
                        AccessApprovalServiceAccount.prototype.accountEmail = "";
    
                        /**
                         * Creates a new AccessApprovalServiceAccount instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalServiceAccount
                         * @static
                         * @param {google.cloud.accessapproval.v1.IAccessApprovalServiceAccount=} [properties] Properties to set
                         * @returns {google.cloud.accessapproval.v1.AccessApprovalServiceAccount} AccessApprovalServiceAccount instance
                         */
                        AccessApprovalServiceAccount.create = function create(properties) {
                            return new AccessApprovalServiceAccount(properties);
                        };
    
                        /**
                         * Encodes the specified AccessApprovalServiceAccount message. Does not implicitly {@link google.cloud.accessapproval.v1.AccessApprovalServiceAccount.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalServiceAccount
                         * @static
                         * @param {google.cloud.accessapproval.v1.IAccessApprovalServiceAccount} message AccessApprovalServiceAccount message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AccessApprovalServiceAccount.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.accountEmail != null && Object.hasOwnProperty.call(message, "accountEmail"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.accountEmail);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified AccessApprovalServiceAccount message, length delimited. Does not implicitly {@link google.cloud.accessapproval.v1.AccessApprovalServiceAccount.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalServiceAccount
                         * @static
                         * @param {google.cloud.accessapproval.v1.IAccessApprovalServiceAccount} message AccessApprovalServiceAccount message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AccessApprovalServiceAccount.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an AccessApprovalServiceAccount message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalServiceAccount
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.accessapproval.v1.AccessApprovalServiceAccount} AccessApprovalServiceAccount
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AccessApprovalServiceAccount.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.accessapproval.v1.AccessApprovalServiceAccount();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.name = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.accountEmail = reader.string();
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
                         * Decodes an AccessApprovalServiceAccount message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalServiceAccount
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.accessapproval.v1.AccessApprovalServiceAccount} AccessApprovalServiceAccount
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AccessApprovalServiceAccount.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an AccessApprovalServiceAccount message.
                         * @function verify
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalServiceAccount
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        AccessApprovalServiceAccount.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.accountEmail != null && message.hasOwnProperty("accountEmail"))
                                if (!$util.isString(message.accountEmail))
                                    return "accountEmail: string expected";
                            return null;
                        };
    
                        /**
                         * Creates an AccessApprovalServiceAccount message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalServiceAccount
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.accessapproval.v1.AccessApprovalServiceAccount} AccessApprovalServiceAccount
                         */
                        AccessApprovalServiceAccount.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.accessapproval.v1.AccessApprovalServiceAccount)
                                return object;
                            var message = new $root.google.cloud.accessapproval.v1.AccessApprovalServiceAccount();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.accountEmail != null)
                                message.accountEmail = String(object.accountEmail);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an AccessApprovalServiceAccount message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalServiceAccount
                         * @static
                         * @param {google.cloud.accessapproval.v1.AccessApprovalServiceAccount} message AccessApprovalServiceAccount
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        AccessApprovalServiceAccount.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.name = "";
                                object.accountEmail = "";
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.accountEmail != null && message.hasOwnProperty("accountEmail"))
                                object.accountEmail = message.accountEmail;
                            return object;
                        };
    
                        /**
                         * Converts this AccessApprovalServiceAccount to JSON.
                         * @function toJSON
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalServiceAccount
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        AccessApprovalServiceAccount.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for AccessApprovalServiceAccount
                         * @function getTypeUrl
                         * @memberof google.cloud.accessapproval.v1.AccessApprovalServiceAccount
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        AccessApprovalServiceAccount.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.accessapproval.v1.AccessApprovalServiceAccount";
                        };
    
                        return AccessApprovalServiceAccount;
                    })();
    
                    v1.ListApprovalRequestsMessage = (function() {
    
                        /**
                         * Properties of a ListApprovalRequestsMessage.
                         * @memberof google.cloud.accessapproval.v1
                         * @interface IListApprovalRequestsMessage
                         * @property {string|null} [parent] ListApprovalRequestsMessage parent
                         * @property {string|null} [filter] ListApprovalRequestsMessage filter
                         * @property {number|null} [pageSize] ListApprovalRequestsMessage pageSize
                         * @property {string|null} [pageToken] ListApprovalRequestsMessage pageToken
                         */
    
                        /**
                         * Constructs a new ListApprovalRequestsMessage.
                         * @memberof google.cloud.accessapproval.v1
                         * @classdesc Represents a ListApprovalRequestsMessage.
                         * @implements IListApprovalRequestsMessage
                         * @constructor
                         * @param {google.cloud.accessapproval.v1.IListApprovalRequestsMessage=} [properties] Properties to set
                         */
                        function ListApprovalRequestsMessage(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ListApprovalRequestsMessage parent.
                         * @member {string} parent
                         * @memberof google.cloud.accessapproval.v1.ListApprovalRequestsMessage
                         * @instance
                         */
                        ListApprovalRequestsMessage.prototype.parent = "";
    
                        /**
                         * ListApprovalRequestsMessage filter.
                         * @member {string} filter
                         * @memberof google.cloud.accessapproval.v1.ListApprovalRequestsMessage
                         * @instance
                         */
                        ListApprovalRequestsMessage.prototype.filter = "";
    
                        /**
                         * ListApprovalRequestsMessage pageSize.
                         * @member {number} pageSize
                         * @memberof google.cloud.accessapproval.v1.ListApprovalRequestsMessage
                         * @instance
                         */
                        ListApprovalRequestsMessage.prototype.pageSize = 0;
    
                        /**
                         * ListApprovalRequestsMessage pageToken.
                         * @member {string} pageToken
                         * @memberof google.cloud.accessapproval.v1.ListApprovalRequestsMessage
                         * @instance
                         */
                        ListApprovalRequestsMessage.prototype.pageToken = "";
    
                        /**
                         * Creates a new ListApprovalRequestsMessage instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.accessapproval.v1.ListApprovalRequestsMessage
                         * @static
                         * @param {google.cloud.accessapproval.v1.IListApprovalRequestsMessage=} [properties] Properties to set
                         * @returns {google.cloud.accessapproval.v1.ListApprovalRequestsMessage} ListApprovalRequestsMessage instance
                         */
                        ListApprovalRequestsMessage.create = function create(properties) {
                            return new ListApprovalRequestsMessage(properties);
                        };
    
                        /**
                         * Encodes the specified ListApprovalRequestsMessage message. Does not implicitly {@link google.cloud.accessapproval.v1.ListApprovalRequestsMessage.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.accessapproval.v1.ListApprovalRequestsMessage
                         * @static
                         * @param {google.cloud.accessapproval.v1.IListApprovalRequestsMessage} message ListApprovalRequestsMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListApprovalRequestsMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.filter);
                            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageSize);
                            if (message.pageToken != null && Object.hasOwnProperty.call(message, "pageToken"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.pageToken);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListApprovalRequestsMessage message, length delimited. Does not implicitly {@link google.cloud.accessapproval.v1.ListApprovalRequestsMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.accessapproval.v1.ListApprovalRequestsMessage
                         * @static
                         * @param {google.cloud.accessapproval.v1.IListApprovalRequestsMessage} message ListApprovalRequestsMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListApprovalRequestsMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListApprovalRequestsMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.accessapproval.v1.ListApprovalRequestsMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.accessapproval.v1.ListApprovalRequestsMessage} ListApprovalRequestsMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListApprovalRequestsMessage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.accessapproval.v1.ListApprovalRequestsMessage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.parent = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.filter = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.pageSize = reader.int32();
                                        break;
                                    }
                                case 4: {
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
                         * Decodes a ListApprovalRequestsMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.accessapproval.v1.ListApprovalRequestsMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.accessapproval.v1.ListApprovalRequestsMessage} ListApprovalRequestsMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListApprovalRequestsMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ListApprovalRequestsMessage message.
                         * @function verify
                         * @memberof google.cloud.accessapproval.v1.ListApprovalRequestsMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ListApprovalRequestsMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                if (!$util.isString(message.parent))
                                    return "parent: string expected";
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                if (!$util.isString(message.filter))
                                    return "filter: string expected";
                            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                                if (!$util.isInteger(message.pageSize))
                                    return "pageSize: integer expected";
                            if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                                if (!$util.isString(message.pageToken))
                                    return "pageToken: string expected";
                            return null;
                        };
    
  