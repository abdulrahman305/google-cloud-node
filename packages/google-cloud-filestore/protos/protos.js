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
    var $root = $protobuf.roots._google_cloud_filestore_protos || ($protobuf.roots._google_cloud_filestore_protos = {});
    
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
    
            cloud.common = (function() {
    
                /**
                 * Namespace common.
                 * @memberof google.cloud
                 * @namespace
                 */
                var common = {};
    
                common.OperationMetadata = (function() {
    
                    /**
                     * Properties of an OperationMetadata.
                     * @memberof google.cloud.common
                     * @interface IOperationMetadata
                     * @property {google.protobuf.ITimestamp|null} [createTime] OperationMetadata createTime
                     * @property {google.protobuf.ITimestamp|null} [endTime] OperationMetadata endTime
                     * @property {string|null} [target] OperationMetadata target
                     * @property {string|null} [verb] OperationMetadata verb
                     * @property {string|null} [statusDetail] OperationMetadata statusDetail
                     * @property {boolean|null} [cancelRequested] OperationMetadata cancelRequested
                     * @property {string|null} [apiVersion] OperationMetadata apiVersion
                     */
    
                    /**
                     * Constructs a new OperationMetadata.
                     * @memberof google.cloud.common
                     * @classdesc Represents an OperationMetadata.
                     * @implements IOperationMetadata
                     * @constructor
                     * @param {google.cloud.common.IOperationMetadata=} [properties] Properties to set
                     */
                    function OperationMetadata(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * OperationMetadata createTime.
                     * @member {google.protobuf.ITimestamp|null|undefined} createTime
                     * @memberof google.cloud.common.OperationMetadata
                     * @instance
                     */
                    OperationMetadata.prototype.createTime = null;
    
                    /**
                     * OperationMetadata endTime.
                     * @member {google.protobuf.ITimestamp|null|undefined} endTime
                     * @memberof google.cloud.common.OperationMetadata
                     * @instance
                     */
                    OperationMetadata.prototype.endTime = null;
    
                    /**
                     * OperationMetadata target.
                     * @member {string} target
                     * @memberof google.cloud.common.OperationMetadata
                     * @instance
                     */
                    OperationMetadata.prototype.target = "";
    
                    /**
                     * OperationMetadata verb.
                     * @member {string} verb
                     * @memberof google.cloud.common.OperationMetadata
                     * @instance
                     */
                    OperationMetadata.prototype.verb = "";
    
                    /**
                     * OperationMetadata statusDetail.
                     * @member {string} statusDetail
                     * @memberof google.cloud.common.OperationMetadata
                     * @instance
                     */
                    OperationMetadata.prototype.statusDetail = "";
    
                    /**
                     * OperationMetadata cancelRequested.
                     * @member {boolean} cancelRequested
                     * @memberof google.cloud.common.OperationMetadata
                     * @instance
                     */
                    OperationMetadata.prototype.cancelRequested = false;
    
                    /**
                     * OperationMetadata apiVersion.
                     * @member {string} apiVersion
                     * @memberof google.cloud.common.OperationMetadata
                     * @instance
                     */
                    OperationMetadata.prototype.apiVersion = "";
    
                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @function create
                     * @memberof google.cloud.common.OperationMetadata
                     * @static
                     * @param {google.cloud.common.IOperationMetadata=} [properties] Properties to set
                     * @returns {google.cloud.common.OperationMetadata} OperationMetadata instance
                     */
                    OperationMetadata.create = function create(properties) {
                        return new OperationMetadata(properties);
                    };
    
                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.common.OperationMetadata.verify|verify} messages.
                     * @function encode
                     * @memberof google.cloud.common.OperationMetadata
                     * @static
                     * @param {google.cloud.common.IOperationMetadata} message OperationMetadata message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperationMetadata.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                            $root.google.protobuf.Timestamp.encode(message.createTime, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                            $root.google.protobuf.Timestamp.encode(message.endTime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.target);
                        if (message.verb != null && Object.hasOwnProperty.call(message, "verb"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.verb);
                        if (message.statusDetail != null && Object.hasOwnProperty.call(message, "statusDetail"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.statusDetail);
                        if (message.cancelRequested != null && Object.hasOwnProperty.call(message, "cancelRequested"))
                            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.cancelRequested);
                        if (message.apiVersion != null && Object.hasOwnProperty.call(message, "apiVersion"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.apiVersion);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.common.OperationMetadata.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.cloud.common.OperationMetadata
                     * @static
                     * @param {google.cloud.common.IOperationMetadata} message OperationMetadata message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperationMetadata.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.cloud.common.OperationMetadata
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.cloud.common.OperationMetadata} OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperationMetadata.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.common.OperationMetadata();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.createTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    message.endTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                    break;
                                }
                            case 3: {
                                    message.target = reader.string();
                                    break;
                                }
                            case 4: {
                                    message.verb = reader.string();
                                    break;
                                }
                            case 5: {
                                    message.statusDetail = reader.string();
                                    break;
                                }
                            case 6: {
                                    message.cancelRequested = reader.bool();
                                    break;
                                }
                            case 7: {
                                    message.apiVersion = reader.string();
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
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.cloud.common.OperationMetadata
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.cloud.common.OperationMetadata} OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperationMetadata.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an OperationMetadata message.
                     * @function verify
                     * @memberof google.cloud.common.OperationMetadata
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    OperationMetadata.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.createTime != null && message.hasOwnProperty("createTime")) {
                            var error = $root.google.protobuf.Timestamp.verify(message.createTime);
                            if (error)
                                return "createTime." + error;
                        }
                        if (message.endTime != null && message.hasOwnProperty("endTime")) {
                            var error = $root.google.protobuf.Timestamp.verify(message.endTime);
                            if (error)
                                return "endTime." + error;
                        }
                        if (message.target != null && message.hasOwnProperty("target"))
                            if (!$util.isString(message.target))
                                return "target: string expected";
                        if (message.verb != null && message.hasOwnProperty("verb"))
                            if (!$util.isString(message.verb))
                                return "verb: string expected";
                        if (message.statusDetail != null && message.hasOwnProperty("statusDetail"))
                            if (!$util.isString(message.statusDetail))
                                return "statusDetail: string expected";
                        if (message.cancelRequested != null && message.hasOwnProperty("cancelRequested"))
                            if (typeof message.cancelRequested !== "boolean")
                                return "cancelRequested: boolean expected";
                        if (message.apiVersion != null && message.hasOwnProperty("apiVersion"))
                            if (!$util.isString(message.apiVersion))
                                return "apiVersion: string expected";
                        return null;
                    };
    
                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.cloud.common.OperationMetadata
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.cloud.common.OperationMetadata} OperationMetadata
                     */
                    OperationMetadata.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.cloud.common.OperationMetadata)
                            return object;
                        var message = new $root.google.cloud.common.OperationMetadata();
                        if (object.createTime != null) {
                            if (typeof object.createTime !== "object")
                                throw TypeError(".google.cloud.common.OperationMetadata.createTime: object expected");
                            message.createTime = $root.google.protobuf.Timestamp.fromObject(object.createTime);
                        }
                        if (object.endTime != null) {
                            if (typeof object.endTime !== "object")
                                throw TypeError(".google.cloud.common.OperationMetadata.endTime: object expected");
                            message.endTime = $root.google.protobuf.Timestamp.fromObject(object.endTime);
                        }
                        if (object.target != null)
                            message.target = String(object.target);
                        if (object.verb != null)
                            message.verb = String(object.verb);
                        if (object.statusDetail != null)
                            message.statusDetail = String(object.statusDetail);
                        if (object.cancelRequested != null)
                            message.cancelRequested = Boolean(object.cancelRequested);
                        if (object.apiVersion != null)
                            message.apiVersion = String(object.apiVersion);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.cloud.common.OperationMetadata
                     * @static
                     * @param {google.cloud.common.OperationMetadata} message OperationMetadata
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    OperationMetadata.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.createTime = null;
                            object.endTime = null;
                            object.target = "";
                            object.verb = "";
                            object.statusDetail = "";
                            object.cancelRequested = false;
                            object.apiVersion = "";
                        }
                        if (message.createTime != null && message.hasOwnProperty("createTime"))
                            object.createTime = $root.google.protobuf.Timestamp.toObject(message.createTime, options);
                        if (message.endTime != null && message.hasOwnProperty("endTime"))
                            object.endTime = $root.google.protobuf.Timestamp.toObject(message.endTime, options);
                        if (message.target != null && message.hasOwnProperty("target"))
                            object.target = message.target;
                        if (message.verb != null && message.hasOwnProperty("verb"))
                            object.verb = message.verb;
                        if (message.statusDetail != null && message.hasOwnProperty("statusDetail"))
                            object.statusDetail = message.statusDetail;
                        if (message.cancelRequested != null && message.hasOwnProperty("cancelRequested"))
                            object.cancelRequested = message.cancelRequested;
                        if (message.apiVersion != null && message.hasOwnProperty("apiVersion"))
                            object.apiVersion = message.apiVersion;
                        return object;
                    };
    
                    /**
                     * Converts this OperationMetadata to JSON.
                     * @function toJSON
                     * @memberof google.cloud.common.OperationMetadata
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    OperationMetadata.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for OperationMetadata
                     * @function getTypeUrl
                     * @memberof google.cloud.common.OperationMetadata
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    OperationMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.cloud.common.OperationMetadata";
                    };
    
                    return OperationMetadata;
                })();
    
                return common;
            })();
    
            cloud.filestore = (function() {
    
                /**
                 * Namespace filestore.
                 * @memberof google.cloud
                 * @namespace
                 */
                var filestore = {};
    
                filestore.v1 = (function() {
    
                    /**
                     * Namespace v1.
                     * @memberof google.cloud.filestore
                     * @namespace
                     */
                    var v1 = {};
    
                    v1.CloudFilestoreManager = (function() {
    
                        /**
                         * Constructs a new CloudFilestoreManager service.
                         * @memberof google.cloud.filestore.v1
                         * @classdesc Represents a CloudFilestoreManager
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function CloudFilestoreManager(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }
    
                        (CloudFilestoreManager.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CloudFilestoreManager;
    
                        /**
                         * Creates new CloudFilestoreManager service using the specified rpc implementation.
                         * @function create
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {CloudFilestoreManager} RPC service. Useful where requests and/or responses are streamed.
                         */
                        CloudFilestoreManager.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|listInstances}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef ListInstancesCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.filestore.v1.ListInstancesResponse} [response] ListInstancesResponse
                         */
    
                        /**
                         * Calls ListInstances.
                         * @function listInstances
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IListInstancesRequest} request ListInstancesRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.ListInstancesCallback} callback Node-style callback called with the error, if any, and ListInstancesResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.listInstances = function listInstances(request, callback) {
                            return this.rpcCall(listInstances, $root.google.cloud.filestore.v1.ListInstancesRequest, $root.google.cloud.filestore.v1.ListInstancesResponse, request, callback);
                        }, "name", { value: "ListInstances" });
    
                        /**
                         * Calls ListInstances.
                         * @function listInstances
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IListInstancesRequest} request ListInstancesRequest message or plain object
                         * @returns {Promise<google.cloud.filestore.v1.ListInstancesResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|getInstance}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef GetInstanceCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.filestore.v1.Instance} [response] Instance
                         */
    
                        /**
                         * Calls GetInstance.
                         * @function getInstance
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IGetInstanceRequest} request GetInstanceRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.GetInstanceCallback} callback Node-style callback called with the error, if any, and Instance
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.getInstance = function getInstance(request, callback) {
                            return this.rpcCall(getInstance, $root.google.cloud.filestore.v1.GetInstanceRequest, $root.google.cloud.filestore.v1.Instance, request, callback);
                        }, "name", { value: "GetInstance" });
    
                        /**
                         * Calls GetInstance.
                         * @function getInstance
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IGetInstanceRequest} request GetInstanceRequest message or plain object
                         * @returns {Promise<google.cloud.filestore.v1.Instance>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|createInstance}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef CreateInstanceCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls CreateInstance.
                         * @function createInstance
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.ICreateInstanceRequest} request CreateInstanceRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.CreateInstanceCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.createInstance = function createInstance(request, callback) {
                            return this.rpcCall(createInstance, $root.google.cloud.filestore.v1.CreateInstanceRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "CreateInstance" });
    
                        /**
                         * Calls CreateInstance.
                         * @function createInstance
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.ICreateInstanceRequest} request CreateInstanceRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|updateInstance}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef UpdateInstanceCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls UpdateInstance.
                         * @function updateInstance
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IUpdateInstanceRequest} request UpdateInstanceRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.UpdateInstanceCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.updateInstance = function updateInstance(request, callback) {
                            return this.rpcCall(updateInstance, $root.google.cloud.filestore.v1.UpdateInstanceRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "UpdateInstance" });
    
                        /**
                         * Calls UpdateInstance.
                         * @function updateInstance
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IUpdateInstanceRequest} request UpdateInstanceRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|restoreInstance}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef RestoreInstanceCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls RestoreInstance.
                         * @function restoreInstance
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IRestoreInstanceRequest} request RestoreInstanceRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.RestoreInstanceCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.restoreInstance = function restoreInstance(request, callback) {
                            return this.rpcCall(restoreInstance, $root.google.cloud.filestore.v1.RestoreInstanceRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "RestoreInstance" });
    
                        /**
                         * Calls RestoreInstance.
                         * @function restoreInstance
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IRestoreInstanceRequest} request RestoreInstanceRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|revertInstance}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef RevertInstanceCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls RevertInstance.
                         * @function revertInstance
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IRevertInstanceRequest} request RevertInstanceRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.RevertInstanceCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.revertInstance = function revertInstance(request, callback) {
                            return this.rpcCall(revertInstance, $root.google.cloud.filestore.v1.RevertInstanceRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "RevertInstance" });
    
                        /**
                         * Calls RevertInstance.
                         * @function revertInstance
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IRevertInstanceRequest} request RevertInstanceRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|deleteInstance}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef DeleteInstanceCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls DeleteInstance.
                         * @function deleteInstance
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IDeleteInstanceRequest} request DeleteInstanceRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.DeleteInstanceCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.deleteInstance = function deleteInstance(request, callback) {
                            return this.rpcCall(deleteInstance, $root.google.cloud.filestore.v1.DeleteInstanceRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "DeleteInstance" });
    
                        /**
                         * Calls DeleteInstance.
                         * @function deleteInstance
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IDeleteInstanceRequest} request DeleteInstanceRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|listSnapshots}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef ListSnapshotsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.filestore.v1.ListSnapshotsResponse} [response] ListSnapshotsResponse
                         */
    
                        /**
                         * Calls ListSnapshots.
                         * @function listSnapshots
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IListSnapshotsRequest} request ListSnapshotsRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.ListSnapshotsCallback} callback Node-style callback called with the error, if any, and ListSnapshotsResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.listSnapshots = function listSnapshots(request, callback) {
                            return this.rpcCall(listSnapshots, $root.google.cloud.filestore.v1.ListSnapshotsRequest, $root.google.cloud.filestore.v1.ListSnapshotsResponse, request, callback);
                        }, "name", { value: "ListSnapshots" });
    
                        /**
                         * Calls ListSnapshots.
                         * @function listSnapshots
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IListSnapshotsRequest} request ListSnapshotsRequest message or plain object
                         * @returns {Promise<google.cloud.filestore.v1.ListSnapshotsResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|getSnapshot}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef GetSnapshotCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.filestore.v1.Snapshot} [response] Snapshot
                         */
    
                        /**
                         * Calls GetSnapshot.
                         * @function getSnapshot
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IGetSnapshotRequest} request GetSnapshotRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.GetSnapshotCallback} callback Node-style callback called with the error, if any, and Snapshot
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.getSnapshot = function getSnapshot(request, callback) {
                            return this.rpcCall(getSnapshot, $root.google.cloud.filestore.v1.GetSnapshotRequest, $root.google.cloud.filestore.v1.Snapshot, request, callback);
                        }, "name", { value: "GetSnapshot" });
    
                        /**
                         * Calls GetSnapshot.
                         * @function getSnapshot
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IGetSnapshotRequest} request GetSnapshotRequest message or plain object
                         * @returns {Promise<google.cloud.filestore.v1.Snapshot>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|createSnapshot}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef CreateSnapshotCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls CreateSnapshot.
                         * @function createSnapshot
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.ICreateSnapshotRequest} request CreateSnapshotRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.CreateSnapshotCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.createSnapshot = function createSnapshot(request, callback) {
                            return this.rpcCall(createSnapshot, $root.google.cloud.filestore.v1.CreateSnapshotRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "CreateSnapshot" });
    
                        /**
                         * Calls CreateSnapshot.
                         * @function createSnapshot
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.ICreateSnapshotRequest} request CreateSnapshotRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|deleteSnapshot}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef DeleteSnapshotCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls DeleteSnapshot.
                         * @function deleteSnapshot
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IDeleteSnapshotRequest} request DeleteSnapshotRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.DeleteSnapshotCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.deleteSnapshot = function deleteSnapshot(request, callback) {
                            return this.rpcCall(deleteSnapshot, $root.google.cloud.filestore.v1.DeleteSnapshotRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "DeleteSnapshot" });
    
                        /**
                         * Calls DeleteSnapshot.
                         * @function deleteSnapshot
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IDeleteSnapshotRequest} request DeleteSnapshotRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|updateSnapshot}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef UpdateSnapshotCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls UpdateSnapshot.
                         * @function updateSnapshot
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IUpdateSnapshotRequest} request UpdateSnapshotRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.UpdateSnapshotCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.updateSnapshot = function updateSnapshot(request, callback) {
                            return this.rpcCall(updateSnapshot, $root.google.cloud.filestore.v1.UpdateSnapshotRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "UpdateSnapshot" });
    
                        /**
                         * Calls UpdateSnapshot.
                         * @function updateSnapshot
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IUpdateSnapshotRequest} request UpdateSnapshotRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|listBackups}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef ListBackupsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.filestore.v1.ListBackupsResponse} [response] ListBackupsResponse
                         */
    
                        /**
                         * Calls ListBackups.
                         * @function listBackups
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IListBackupsRequest} request ListBackupsRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.ListBackupsCallback} callback Node-style callback called with the error, if any, and ListBackupsResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.listBackups = function listBackups(request, callback) {
                            return this.rpcCall(listBackups, $root.google.cloud.filestore.v1.ListBackupsRequest, $root.google.cloud.filestore.v1.ListBackupsResponse, request, callback);
                        }, "name", { value: "ListBackups" });
    
                        /**
                         * Calls ListBackups.
                         * @function listBackups
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IListBackupsRequest} request ListBackupsRequest message or plain object
                         * @returns {Promise<google.cloud.filestore.v1.ListBackupsResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|getBackup}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef GetBackupCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.filestore.v1.Backup} [response] Backup
                         */
    
                        /**
                         * Calls GetBackup.
                         * @function getBackup
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IGetBackupRequest} request GetBackupRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.GetBackupCallback} callback Node-style callback called with the error, if any, and Backup
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.getBackup = function getBackup(request, callback) {
                            return this.rpcCall(getBackup, $root.google.cloud.filestore.v1.GetBackupRequest, $root.google.cloud.filestore.v1.Backup, request, callback);
                        }, "name", { value: "GetBackup" });
    
                        /**
                         * Calls GetBackup.
                         * @function getBackup
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IGetBackupRequest} request GetBackupRequest message or plain object
                         * @returns {Promise<google.cloud.filestore.v1.Backup>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|createBackup}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef CreateBackupCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls CreateBackup.
                         * @function createBackup
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.ICreateBackupRequest} request CreateBackupRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.CreateBackupCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.createBackup = function createBackup(request, callback) {
                            return this.rpcCall(createBackup, $root.google.cloud.filestore.v1.CreateBackupRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "CreateBackup" });
    
                        /**
                         * Calls CreateBackup.
                         * @function createBackup
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.ICreateBackupRequest} request CreateBackupRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|deleteBackup}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef DeleteBackupCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls DeleteBackup.
                         * @function deleteBackup
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IDeleteBackupRequest} request DeleteBackupRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.DeleteBackupCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.deleteBackup = function deleteBackup(request, callback) {
                            return this.rpcCall(deleteBackup, $root.google.cloud.filestore.v1.DeleteBackupRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "DeleteBackup" });
    
                        /**
                         * Calls DeleteBackup.
                         * @function deleteBackup
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IDeleteBackupRequest} request DeleteBackupRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|updateBackup}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef UpdateBackupCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls UpdateBackup.
                         * @function updateBackup
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IUpdateBackupRequest} request UpdateBackupRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.UpdateBackupCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.updateBackup = function updateBackup(request, callback) {
                            return this.rpcCall(updateBackup, $root.google.cloud.filestore.v1.UpdateBackupRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "UpdateBackup" });
    
                        /**
                         * Calls UpdateBackup.
                         * @function updateBackup
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IUpdateBackupRequest} request UpdateBackupRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|promoteReplica}.
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @typedef PromoteReplicaCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls PromoteReplica.
                         * @function promoteReplica
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IPromoteReplicaRequest} request PromoteReplicaRequest message or plain object
                         * @param {google.cloud.filestore.v1.CloudFilestoreManager.PromoteReplicaCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(CloudFilestoreManager.prototype.promoteReplica = function promoteReplica(request, callback) {
                            return this.rpcCall(promoteReplica, $root.google.cloud.filestore.v1.PromoteReplicaRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "PromoteReplica" });
    
                        /**
                         * Calls PromoteReplica.
                         * @function promoteReplica
                         * @memberof google.cloud.filestore.v1.CloudFilestoreManager
                         * @instance
                         * @param {google.cloud.filestore.v1.IPromoteReplicaRequest} request PromoteReplicaRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        return CloudFilestoreManager;
                    })();
    
                    v1.NetworkConfig = (function() {
    
                        /**
                         * Properties of a NetworkConfig.
                         * @memberof google.cloud.filestore.v1
                         * @interface INetworkConfig
                         * @property {string|null} [network] NetworkConfig network
                         * @property {Array.<google.cloud.filestore.v1.NetworkConfig.AddressMode>|null} [modes] NetworkConfig modes
                         * @property {string|null} [reservedIpRange] NetworkConfig reservedIpRange
                         * @property {Array.<string>|null} [ipAddresses] NetworkConfig ipAddresses
                         * @property {google.cloud.filestore.v1.NetworkConfig.ConnectMode|null} [connectMode] NetworkConfig connectMode
                         */
    
                        /**
                         * Constructs a new NetworkConfig.
                         * @memberof google.cloud.filestore.v1
                         * @classdesc Represents a NetworkConfig.
                         * @implements INetworkConfig
                         * @constructor
                         * @param {google.cloud.filestore.v1.INetworkConfig=} [properties] Properties to set
                         */
                        function NetworkConfig(properties) {
                            this.modes = [];
                            this.ipAddresses = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * NetworkConfig network.
                         * @member {string} network
                         * @memberof google.cloud.filestore.v1.NetworkConfig
                         * @instance
                         */
                        NetworkConfig.prototype.network = "";
    
                        /**
                         * NetworkConfig modes.
                         * @member {Array.<google.cloud.filestore.v1.NetworkConfig.AddressMode>} modes
                         * @memberof google.cloud.filestore.v1.NetworkConfig
                         * @instance
                         */
                        NetworkConfig.prototype.modes = $util.emptyArray;
    
                        /**
                         * NetworkConfig reservedIpRange.
                         * @member {string} reservedIpRange
                         * @memberof google.cloud.filestore.v1.NetworkConfig
                         * @instance
                         */
                        NetworkConfig.prototype.reservedIpRange = "";
    
                        /**
                         * NetworkConfig ipAddresses.
                         * @member {Array.<string>} ipAddresses
                         * @memberof google.cloud.filestore.v1.NetworkConfig
                         * @instance
                         */
                        NetworkConfig.prototype.ipAddresses = $util.emptyArray;
    
                        /**
                         * NetworkConfig connectMode.
                         * @member {google.cloud.filestore.v1.NetworkConfig.ConnectMode} connectMode
                         * @memberof google.cloud.filestore.v1.NetworkConfig
                         * @instance
                         */
                        NetworkConfig.prototype.connectMode = 0;
    
                        /**
                         * Creates a new NetworkConfig instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.filestore.v1.NetworkConfig
                         * @static
                         * @param {google.cloud.filestore.v1.INetworkConfig=} [properties] Properties to set
                         * @returns {google.cloud.filestore.v1.NetworkConfig} NetworkConfig instance
                         */
                        NetworkConfig.create = function create(properties) {
                            return new NetworkConfig(properties);
                        };
    
                        /**
                         * Encodes the specified NetworkConfig message. Does not implicitly {@link google.cloud.filestore.v1.NetworkConfig.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.filestore.v1.NetworkConfig
                         * @static
                         * @param {google.cloud.filestore.v1.INetworkConfig} message NetworkConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        NetworkConfig.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.network != null && Object.hasOwnProperty.call(message, "network"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.network);
                            if (message.modes != null && message.modes.length) {
                                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                                for (var i = 0; i < message.modes.length; ++i)
                                    writer.int32(message.modes[i]);
                                writer.ldelim();
                            }
                            if (message.reservedIpRange != null && Object.hasOwnProperty.call(message, "reservedIpRange"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.reservedIpRange);
                            if (message.ipAddresses != null && message.ipAddresses.length)
                                for (var i = 0; i < message.ipAddresses.length; ++i)
                                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.ipAddresses[i]);
                            if (message.connectMode != null && Object.hasOwnProperty.call(message, "connectMode"))
                                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.connectMode);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.NetworkConfig.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.filestore.v1.NetworkConfig
                         * @static
                         * @param {google.cloud.filestore.v1.INetworkConfig} message NetworkConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        NetworkConfig.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a NetworkConfig message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.filestore.v1.NetworkConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.filestore.v1.NetworkConfig} NetworkConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        NetworkConfig.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.filestore.v1.NetworkConfig();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.network = reader.string();
                                        break;
                                    }
                                case 3: {
                                        if (!(message.modes && message.modes.length))
                                            message.modes = [];
                                        if ((tag & 7) === 2) {
                                            var end2 = reader.uint32() + reader.pos;
                                            while (reader.pos < end2)
                                                message.modes.push(reader.int32());
                                        } else
                                            message.modes.push(reader.int32());
                                        break;
                                    }
                                case 4: {
                                        message.reservedIpRange = reader.string();
                                        break;
                                    }
                                case 5: {
                                        if (!(message.ipAddresses && message.ipAddresses.length))
                                            message.ipAddresses = [];
                                        message.ipAddresses.push(reader.string());
                                        break;
                                    }
                                case 6: {
                                        message.connectMode = reader.int32();
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
                         * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.filestore.v1.NetworkConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.filestore.v1.NetworkConfig} NetworkConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        NetworkConfig.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a NetworkConfig message.
                         * @function verify
                         * @memberof google.cloud.filestore.v1.NetworkConfig
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        NetworkConfig.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.network != null && message.hasOwnProperty("network"))
                                if (!$util.isString(message.network))
                                    return "network: string expected";
                            if (message.modes != null && message.hasOwnProperty("modes")) {
                                if (!Array.isArray(message.modes))
                                    return "modes: array expected";
                                for (var i = 0; i < message.modes.length; ++i)
                                    switch (message.modes[i]) {
                                    default:
                                        return "modes: enum value[] expected";
                                    case 0:
                                    case 1:
                                        break;
                                    }
                            }
                            if (message.reservedIpRange != null && message.hasOwnProperty("reservedIpRange"))
                                if (!$util.isString(message.reservedIpRange))
                                    return "reservedIpRange: string expected";
                            if (message.ipAddresses != null && message.hasOwnProperty("ipAddresses")) {
                                if (!Array.isArray(message.ipAddresses))
                                    return "ipAddresses: array expected";
                                for (var i = 0; i < message.ipAddresses.length; ++i)
                                    if (!$util.isString(message.ipAddresses[i]))
                                        return "ipAddresses: string[] expected";
                            }
                            if (message.connectMode != null && message.hasOwnProperty("connectMode"))
                                switch (message.connectMode) {
                                default:
                                    return "connectMode: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            return null;
                        };
    
                        /**
                         * Creates a NetworkConfig message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.filestore.v1.NetworkConfig
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.filestore.v1.NetworkConfig} NetworkConfig
                         */
                        NetworkConfig.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.filestore.v1.NetworkConfig)
                                return object;
                            var message = new $root.google.cloud.filestore.v1.NetworkConfig();
                            if (object.network != null)
                                message.network = String(object.network);
                            if (object.modes) {
                                if (!Array.isArray(object.modes))
                                    throw TypeError(".google.cloud.filestore.v1.NetworkConfig.modes: array expected");
                                message.modes = [];
                                for (var i = 0; i < object.modes.length; ++i)
                                    switch (object.modes[i]) {
                                    default:
                                        if (typeof object.modes[i] === "number") {
                                            message.modes[i] = object.modes[i];
                                            break;
                                        }
                                    case "ADDRESS_MODE_UNSPECIFIED":
                                    case 0:
                                        message.modes[i] = 0;
                                        break;
                                    case "MODE_IPV4":
                                    case 1:
                                        message.modes[i] = 1;
                                        break;
                                    }
                            }
                            if (object.reservedIpRange != null)
                                message.reservedIpRange = String(object.reservedIpRange);
                            if (object.ipAddresses) {
                                if (!Array.isArray(object.ipAddresses))
                                    throw TypeError(".google.cloud.filestore.v1.NetworkConfig.ipAddresses: array expected");
                                message.ipAddresses = [];
                                for (var i = 0; i < object.ipAddresses.length; ++i)
                                    message.ipAddresses[i] = String(object.ipAddresses[i]);
                            }
                            switch (object.connectMode) {
                            default:
                                if (typeof object.connectMode === "number") {
                                    message.connectMode = object.connectMode;
                                    break;
                                }
                                break;
                            case "CONNECT_MODE_UNSPECIFIED":
                            case 0:
                                message.connectMode = 0;
                                break;
                            case "DIRECT_PEERING":
                            case 1:
                                message.connectMode = 1;
                                break;
                            case "PRIVATE_SERVICE_ACCESS":
                            case 2:
                                message.connectMode = 2;
                                break;
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.filestore.v1.NetworkConfig
                         * @static
                         * @param {google.cloud.filestore.v1.NetworkConfig} message NetworkConfig
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        NetworkConfig.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.modes = [];
                                object.ipAddresses = [];
                            }
                            if (options.defaults) {
                                object.network = "";
                                object.reservedIpRange = "";
                                object.connectMode = options.enums === String ? "CONNECT_MODE_UNSPECIFIED" : 0;
                            }
                            if (message.network != null && message.hasOwnProperty("network"))
                                object.network = message.network;
                            if (message.modes && message.modes.length) {
                                object.modes = [];
                                for (var j = 0; j < message.modes.length; ++j)
                                    object.modes[j] = options.enums === String ? $root.google.cloud.filestore.v1.NetworkConfig.AddressMode[message.modes[j]] === undefined ? message.modes[j] : $root.google.cloud.filestore.v1.NetworkConfig.AddressMode[message.modes[j]] : message.modes[j];
                            }
                            if (message.reservedIpRange != null && message.hasOwnProperty("reservedIpRange"))
                                object.reservedIpRange = message.reservedIpRange;
                            if (message.ipAddresses && message.ipAddresses.length) {
                                object.ipAddresses = [];
                                for (var j = 0; j < message.ipAddresses.length; ++j)
                                    object.ipAddresses[j] = message.ipAddresses[j];
                            }
                            if (message.connectMode != null && message.hasOwnProperty("connectMode"))
                                object.connectMode = options.enums === String ? $root.google.cloud.filestore.v1.NetworkConfig.ConnectMode[message.connectMode] === undefined ? message.connectMode : $root.google.cloud.filestore.v1.NetworkConfig.ConnectMode[message.connectMode] : message.connectMode;
                            return object;
                        };
    
                        /**
                         * Converts this NetworkConfig to JSON.
                         * @function toJSON
                         * @memberof google.cloud.filestore.v1.NetworkConfig
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Ne