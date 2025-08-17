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
    var $root = $protobuf.roots._google_cloud_storagebatchoperations_protos || ($protobuf.roots._google_cloud_storagebatchoperations_protos = {});
    
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
    
            cloud.storagebatchoperations = (function() {
    
                /**
                 * Namespace storagebatchoperations.
                 * @memberof google.cloud
                 * @namespace
                 */
                var storagebatchoperations = {};
    
                storagebatchoperations.v1 = (function() {
    
                    /**
                     * Namespace v1.
                     * @memberof google.cloud.storagebatchoperations
                     * @namespace
                     */
                    var v1 = {};
    
                    v1.StorageBatchOperations = (function() {
    
                        /**
                         * Constructs a new StorageBatchOperations service.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a StorageBatchOperations
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function StorageBatchOperations(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }
    
                        (StorageBatchOperations.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = StorageBatchOperations;
    
                        /**
                         * Creates new StorageBatchOperations service using the specified rpc implementation.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {StorageBatchOperations} RPC service. Useful where requests and/or responses are streamed.
                         */
                        StorageBatchOperations.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };
    
                        /**
                         * Callback as used by {@link google.cloud.storagebatchoperations.v1.StorageBatchOperations|listJobs}.
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @typedef ListJobsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.storagebatchoperations.v1.ListJobsResponse} [response] ListJobsResponse
                         */
    
                        /**
                         * Calls ListJobs.
                         * @function listJobs
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @instance
                         * @param {google.cloud.storagebatchoperations.v1.IListJobsRequest} request ListJobsRequest message or plain object
                         * @param {google.cloud.storagebatchoperations.v1.StorageBatchOperations.ListJobsCallback} callback Node-style callback called with the error, if any, and ListJobsResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(StorageBatchOperations.prototype.listJobs = function listJobs(request, callback) {
                            return this.rpcCall(listJobs, $root.google.cloud.storagebatchoperations.v1.ListJobsRequest, $root.google.cloud.storagebatchoperations.v1.ListJobsResponse, request, callback);
                        }, "name", { value: "ListJobs" });
    
                        /**
                         * Calls ListJobs.
                         * @function listJobs
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @instance
                         * @param {google.cloud.storagebatchoperations.v1.IListJobsRequest} request ListJobsRequest message or plain object
                         * @returns {Promise<google.cloud.storagebatchoperations.v1.ListJobsResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.storagebatchoperations.v1.StorageBatchOperations|getJob}.
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @typedef GetJobCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.storagebatchoperations.v1.Job} [response] Job
                         */
    
                        /**
                         * Calls GetJob.
                         * @function getJob
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @instance
                         * @param {google.cloud.storagebatchoperations.v1.IGetJobRequest} request GetJobRequest message or plain object
                         * @param {google.cloud.storagebatchoperations.v1.StorageBatchOperations.GetJobCallback} callback Node-style callback called with the error, if any, and Job
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(StorageBatchOperations.prototype.getJob = function getJob(request, callback) {
                            return this.rpcCall(getJob, $root.google.cloud.storagebatchoperations.v1.GetJobRequest, $root.google.cloud.storagebatchoperations.v1.Job, request, callback);
                        }, "name", { value: "GetJob" });
    
                        /**
                         * Calls GetJob.
                         * @function getJob
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @instance
                         * @param {google.cloud.storagebatchoperations.v1.IGetJobRequest} request GetJobRequest message or plain object
                         * @returns {Promise<google.cloud.storagebatchoperations.v1.Job>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.storagebatchoperations.v1.StorageBatchOperations|createJob}.
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @typedef CreateJobCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls CreateJob.
                         * @function createJob
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @instance
                         * @param {google.cloud.storagebatchoperations.v1.ICreateJobRequest} request CreateJobRequest message or plain object
                         * @param {google.cloud.storagebatchoperations.v1.StorageBatchOperations.CreateJobCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(StorageBatchOperations.prototype.createJob = function createJob(request, callback) {
                            return this.rpcCall(createJob, $root.google.cloud.storagebatchoperations.v1.CreateJobRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "CreateJob" });
    
                        /**
                         * Calls CreateJob.
                         * @function createJob
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @instance
                         * @param {google.cloud.storagebatchoperations.v1.ICreateJobRequest} request CreateJobRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.storagebatchoperations.v1.StorageBatchOperations|deleteJob}.
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @typedef DeleteJobCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.protobuf.Empty} [response] Empty
                         */
    
                        /**
                         * Calls DeleteJob.
                         * @function deleteJob
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @instance
                         * @param {google.cloud.storagebatchoperations.v1.IDeleteJobRequest} request DeleteJobRequest message or plain object
                         * @param {google.cloud.storagebatchoperations.v1.StorageBatchOperations.DeleteJobCallback} callback Node-style callback called with the error, if any, and Empty
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(StorageBatchOperations.prototype.deleteJob = function deleteJob(request, callback) {
                            return this.rpcCall(deleteJob, $root.google.cloud.storagebatchoperations.v1.DeleteJobRequest, $root.google.protobuf.Empty, request, callback);
                        }, "name", { value: "DeleteJob" });
    
                        /**
                         * Calls DeleteJob.
                         * @function deleteJob
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @instance
                         * @param {google.cloud.storagebatchoperations.v1.IDeleteJobRequest} request DeleteJobRequest message or plain object
                         * @returns {Promise<google.protobuf.Empty>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.storagebatchoperations.v1.StorageBatchOperations|cancelJob}.
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @typedef CancelJobCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.storagebatchoperations.v1.CancelJobResponse} [response] CancelJobResponse
                         */
    
                        /**
                         * Calls CancelJob.
                         * @function cancelJob
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @instance
                         * @param {google.cloud.storagebatchoperations.v1.ICancelJobRequest} request CancelJobRequest message or plain object
                         * @param {google.cloud.storagebatchoperations.v1.StorageBatchOperations.CancelJobCallback} callback Node-style callback called with the error, if any, and CancelJobResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(StorageBatchOperations.prototype.cancelJob = function cancelJob(request, callback) {
                            return this.rpcCall(cancelJob, $root.google.cloud.storagebatchoperations.v1.CancelJobRequest, $root.google.cloud.storagebatchoperations.v1.CancelJobResponse, request, callback);
                        }, "name", { value: "CancelJob" });
    
                        /**
                         * Calls CancelJob.
                         * @function cancelJob
                         * @memberof google.cloud.storagebatchoperations.v1.StorageBatchOperations
                         * @instance
                         * @param {google.cloud.storagebatchoperations.v1.ICancelJobRequest} request CancelJobRequest message or plain object
                         * @returns {Promise<google.cloud.storagebatchoperations.v1.CancelJobResponse>} Promise
                         * @variation 2
                         */
    
                        return StorageBatchOperations;
                    })();
    
                    v1.ListJobsRequest = (function() {
    
                        /**
                         * Properties of a ListJobsRequest.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IListJobsRequest
                         * @property {string|null} [parent] ListJobsRequest parent
                         * @property {string|null} [filter] ListJobsRequest filter
                         * @property {number|null} [pageSize] ListJobsRequest pageSize
                         * @property {string|null} [pageToken] ListJobsRequest pageToken
                         * @property {string|null} [orderBy] ListJobsRequest orderBy
                         */
    
                        /**
                         * Constructs a new ListJobsRequest.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a ListJobsRequest.
                         * @implements IListJobsRequest
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IListJobsRequest=} [properties] Properties to set
                         */
                        function ListJobsRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ListJobsRequest parent.
                         * @member {string} parent
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @instance
                         */
                        ListJobsRequest.prototype.parent = "";
    
                        /**
                         * ListJobsRequest filter.
                         * @member {string} filter
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @instance
                         */
                        ListJobsRequest.prototype.filter = "";
    
                        /**
                         * ListJobsRequest pageSize.
                         * @member {number} pageSize
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @instance
                         */
                        ListJobsRequest.prototype.pageSize = 0;
    
                        /**
                         * ListJobsRequest pageToken.
                         * @member {string} pageToken
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @instance
                         */
                        ListJobsRequest.prototype.pageToken = "";
    
                        /**
                         * ListJobsRequest orderBy.
                         * @member {string} orderBy
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @instance
                         */
                        ListJobsRequest.prototype.orderBy = "";
    
                        /**
                         * Creates a new ListJobsRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IListJobsRequest=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.ListJobsRequest} ListJobsRequest instance
                         */
                        ListJobsRequest.create = function create(properties) {
                            return new ListJobsRequest(properties);
                        };
    
                        /**
                         * Encodes the specified ListJobsRequest message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.ListJobsRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IListJobsRequest} message ListJobsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListJobsRequest.encode = function encode(message, writer) {
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
                            if (message.orderBy != null && Object.hasOwnProperty.call(message, "orderBy"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.orderBy);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListJobsRequest message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.ListJobsRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IListJobsRequest} message ListJobsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListJobsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListJobsRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.ListJobsRequest} ListJobsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListJobsRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.ListJobsRequest();
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
                                case 5: {
                                        message.orderBy = reader.string();
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
                         * Decodes a ListJobsRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.ListJobsRequest} ListJobsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListJobsRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ListJobsRequest message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ListJobsRequest.verify = function verify(message) {
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
                            if (message.orderBy != null && message.hasOwnProperty("orderBy"))
                                if (!$util.isString(message.orderBy))
                                    return "orderBy: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a ListJobsRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.ListJobsRequest} ListJobsRequest
                         */
                        ListJobsRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.ListJobsRequest)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.ListJobsRequest();
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            if (object.filter != null)
                                message.filter = String(object.filter);
                            if (object.pageSize != null)
                                message.pageSize = object.pageSize | 0;
                            if (object.pageToken != null)
                                message.pageToken = String(object.pageToken);
                            if (object.orderBy != null)
                                message.orderBy = String(object.orderBy);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ListJobsRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ListJobsRequest} message ListJobsRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ListJobsRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.parent = "";
                                object.filter = "";
                                object.pageSize = 0;
                                object.pageToken = "";
                                object.orderBy = "";
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                object.parent = message.parent;
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                object.filter = message.filter;
                            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                                object.pageSize = message.pageSize;
                            if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                                object.pageToken = message.pageToken;
                            if (message.orderBy != null && message.hasOwnProperty("orderBy"))
                                object.orderBy = message.orderBy;
                            return object;
                        };
    
                        /**
                         * Converts this ListJobsRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ListJobsRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ListJobsRequest
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ListJobsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.ListJobsRequest";
                        };
    
                        return ListJobsRequest;
                    })();
    
                    v1.ListJobsResponse = (function() {
    
                        /**
                         * Properties of a ListJobsResponse.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IListJobsResponse
                         * @property {Array.<google.cloud.storagebatchoperations.v1.IJob>|null} [jobs] ListJobsResponse jobs
                         * @property {string|null} [nextPageToken] ListJobsResponse nextPageToken
                         * @property {Array.<string>|null} [unreachable] ListJobsResponse unreachable
                         */
    
                        /**
                         * Constructs a new ListJobsResponse.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a ListJobsResponse.
                         * @implements IListJobsResponse
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IListJobsResponse=} [properties] Properties to set
                         */
                        function ListJobsResponse(properties) {
                            this.jobs = [];
                            this.unreachable = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ListJobsResponse jobs.
                         * @member {Array.<google.cloud.storagebatchoperations.v1.IJob>} jobs
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsResponse
                         * @instance
                         */
                        ListJobsResponse.prototype.jobs = $util.emptyArray;
    
                        /**
                         * ListJobsResponse nextPageToken.
                         * @member {string} nextPageToken
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsResponse
                         * @instance
                         */
                        ListJobsResponse.prototype.nextPageToken = "";
    
                        /**
                         * ListJobsResponse unreachable.
                         * @member {Array.<string>} unreachable
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsResponse
                         * @instance
                         */
                        ListJobsResponse.prototype.unreachable = $util.emptyArray;
    
                        /**
                         * Creates a new ListJobsResponse instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsResponse
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IListJobsResponse=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.ListJobsResponse} ListJobsResponse instance
                         */
                        ListJobsResponse.create = function create(properties) {
                            return new ListJobsResponse(properties);
                        };
    
                        /**
                         * Encodes the specified ListJobsResponse message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.ListJobsResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsResponse
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IListJobsResponse} message ListJobsResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListJobsResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.jobs != null && message.jobs.length)
                                for (var i = 0; i < message.jobs.length; ++i)
                                    $root.google.cloud.storagebatchoperations.v1.Job.encode(message.jobs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextPageToken);
                            if (message.unreachable != null && message.unreachable.length)
                                for (var i = 0; i < message.unreachable.length; ++i)
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.unreachable[i]);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListJobsResponse message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.ListJobsResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsResponse
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IListJobsResponse} message ListJobsResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListJobsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListJobsResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.ListJobsResponse} ListJobsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListJobsResponse.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.ListJobsResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.jobs && message.jobs.length))
                                            message.jobs = [];
                                        message.jobs.push($root.google.cloud.storagebatchoperations.v1.Job.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 2: {
                                        message.nextPageToken = reader.string();
                                        break;
                                    }
                                case 3: {
                                        if (!(message.unreachable && message.unreachable.length))
                                            message.unreachable = [];
                                        message.unreachable.push(reader.string());
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
                         * Decodes a ListJobsResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.ListJobsResponse} ListJobsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListJobsResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ListJobsResponse message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ListJobsResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.jobs != null && message.hasOwnProperty("jobs")) {
                                if (!Array.isArray(message.jobs))
                                    return "jobs: array expected";
                                for (var i = 0; i < message.jobs.length; ++i) {
                                    var error = $root.google.cloud.storagebatchoperations.v1.Job.verify(message.jobs[i]);
                                    if (error)
                                        return "jobs." + error;
                                }
                            }
                            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                                if (!$util.isString(message.nextPageToken))
                                    return "nextPageToken: string expected";
                            if (message.unreachable != null && message.hasOwnProperty("unreachable")) {
                                if (!Array.isArray(message.unreachable))
                                    return "unreachable: array expected";
                                for (var i = 0; i < message.unreachable.length; ++i)
                                    if (!$util.isString(message.unreachable[i]))
                                        return "unreachable: string[] expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates a ListJobsResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.ListJobsResponse} ListJobsResponse
                         */
                        ListJobsResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.ListJobsResponse)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.ListJobsResponse();
                            if (object.jobs) {
                                if (!Array.isArray(object.jobs))
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.ListJobsResponse.jobs: array expected");
                                message.jobs = [];
                                for (var i = 0; i < object.jobs.length; ++i) {
                                    if (typeof object.jobs[i] !== "object")
                                        throw TypeError(".google.cloud.storagebatchoperations.v1.ListJobsResponse.jobs: object expected");
                                    message.jobs[i] = $root.google.cloud.storagebatchoperations.v1.Job.fromObject(object.jobs[i]);
                                }
                            }
                            if (object.nextPageToken != null)
                                message.nextPageToken = String(object.nextPageToken);
                            if (object.unreachable) {
                                if (!Array.isArray(object.unreachable))
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.ListJobsResponse.unreachable: array expected");
                                message.unreachable = [];
                                for (var i = 0; i < object.unreachable.length; ++i)
                                    message.unreachable[i] = String(object.unreachable[i]);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ListJobsResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsResponse
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ListJobsResponse} message ListJobsResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ListJobsResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.jobs = [];
                                object.unreachable = [];
                            }
                            if (options.defaults)
                                object.nextPageToken = "";
                            if (message.jobs && message.jobs.length) {
                                object.jobs = [];
                                for (var j = 0; j < message.jobs.length; ++j)
                                    object.jobs[j] = $root.google.cloud.storagebatchoperations.v1.Job.toObject(message.jobs[j], options);
                            }
                            if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                                object.nextPageToken = message.nextPageToken;
                            if (message.unreachable && message.unreachable.length) {
                                object.unreachable = [];
                                for (var j = 0; j < message.unreachable.length; ++j)
                                    object.unreachable[j] = message.unreachable[j];
                            }
                            return object;
                        };
    
                        /**
                         * Converts this ListJobsResponse to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ListJobsResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ListJobsResponse
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.ListJobsResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ListJobsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.ListJobsResponse";
                        };
    
                        return ListJobsResponse;
                    })();
    
                    v1.GetJobRequest = (function() {
    
                        /**
                         * Properties of a GetJobRequest.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IGetJobRequest
                         * @property {string|null} [name] GetJobRequest name
                         */
    
                        /**
                         * Constructs a new GetJobRequest.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a GetJobRequest.
                         * @implements IGetJobRequest
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IGetJobRequest=} [properties] Properties to set
                         */
                        function GetJobRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * GetJobRequest name.
                         * @member {string} name
                         * @memberof google.cloud.storagebatchoperations.v1.GetJobRequest
                         * @instance
                         */
                        GetJobRequest.prototype.name = "";
    
                        /**
                         * Creates a new GetJobRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.GetJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IGetJobRequest=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.GetJobRequest} GetJobRequest instance
                         */
                        GetJobRequest.create = function create(properties) {
                            return new GetJobRequest(properties);
                        };
    
                        /**
                         * Encodes the specified GetJobRequest message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.GetJobRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.GetJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IGetJobRequest} message GetJobRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetJobRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified GetJobRequest message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.GetJobRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.GetJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IGetJobRequest} message GetJobRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetJobRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a GetJobRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.GetJobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.GetJobRequest} GetJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetJobRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.GetJobRequest();
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
                         * Decodes a GetJobRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.GetJobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.GetJobRequest} GetJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetJobRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a GetJobRequest message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.GetJobRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GetJobRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a GetJobRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.GetJobRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.GetJobRequest} GetJobRequest
                         */
                        GetJobRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.GetJobRequest)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.GetJobRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a GetJobRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.GetJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.GetJobRequest} message GetJobRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GetJobRequest.toObject = function toObject(message, options) {
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
                         * Converts this GetJobRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.GetJobRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GetJobRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for GetJobRequest
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.GetJobRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        GetJobRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.GetJobRequest";
                        };
    
                        return GetJobRequest;
                    })();
    
                    v1.CreateJobRequest = (function() {
    
                        /**
                         * Properties of a CreateJobRequest.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface ICreateJobRequest
                         * @property {string|null} [parent] CreateJobRequest parent
                         * @property {string|null} [jobId] CreateJobRequest jobId
                         * @property {google.cloud.storagebatchoperations.v1.IJob|null} [job] CreateJobRequest job
                         * @property {string|null} [requestId] CreateJobRequest requestId
                         */
    
                        /**
                         * Constructs a new CreateJobRequest.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a CreateJobRequest.
                         * @implements ICreateJobRequest
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.ICreateJobRequest=} [properties] Properties to set
                         */
                        function CreateJobRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * CreateJobRequest parent.
                         * @member {string} parent
                         * @memberof google.cloud.storagebatchoperations.v1.CreateJobRequest
                         * @instance
                         */
                        CreateJobRequest.prototype.parent = "";
    
                        /**
                         * CreateJobRequest jobId.
                         * @member {string} jobId
                         * @memberof google.cloud.storagebatchoperations.v1.CreateJobRequest
                         * @instance
                         */
                        CreateJobRequest.prototype.jobId = "";
    
                        /**
                         * CreateJobRequest job.
                         * @member {google.cloud.storagebatchoperations.v1.IJob|null|undefined} job
                         * @memberof google.cloud.storagebatchoperations.v1.CreateJobRequest
                         * @instance
                         */
                        CreateJobRequest.prototype.job = null;
    
                        /**
                         * CreateJobRequest requestId.
                         * @member {string} requestId
                         * @memberof google.cloud.storagebatchoperations.v1.CreateJobRequest
                         * @instance
                         */
                        CreateJobRequest.prototype.requestId = "";
    
                        /**
                         * Creates a new CreateJobRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.CreateJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ICreateJobRequest=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.CreateJobRequest} CreateJobRequest instance
                         */
                        CreateJobRequest.create = function create(properties) {
                            return new CreateJobRequest(properties);
                        };
    
                        /**
                         * Encodes the specified CreateJobRequest message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.CreateJobRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.CreateJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ICreateJobRequest} message CreateJobRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CreateJobRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                            if (message.jobId != null && Object.hasOwnProperty.call(message, "jobId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.jobId);
                            if (message.job != null && Object.hasOwnProperty.call(message, "job"))
                                $root.google.cloud.storagebatchoperations.v1.Job.encode(message.job, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.requestId);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified CreateJobRequest message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.CreateJobRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.CreateJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ICreateJobRequest} message CreateJobRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CreateJobRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a CreateJobRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.CreateJobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.CreateJobRequest} CreateJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CreateJobRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.CreateJobRequest();
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
                                        message.jobId = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.job = $root.google.cloud.storagebatchoperations.v1.Job.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 4: {
                                        message.requestId = reader.string();
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
                         * Decodes a CreateJobRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.CreateJobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.CreateJobRequest} CreateJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CreateJobRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a CreateJobRequest message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.CreateJobRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        CreateJobRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                if (!$util.isString(message.parent))
                                    return "parent: string expected";
                            if (message.jobId != null && message.hasOwnProperty("jobId"))
                                if (!$util.isString(message.jobId))
                                    return "jobId: string expected";
                            if (message.job != null && message.hasOwnProperty("job")) {
                                var error = $root.google.cloud.storagebatchoperations.v1.Job.verify(message.job);
                                if (error)
                                    return "job." + error;
                            }
                            if (message.requestId != null && message.hasOwnProperty("requestId"))
                                if (!$util.isString(message.requestId))
                                    return "requestId: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a CreateJobRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.CreateJobRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.CreateJobRequest} CreateJobRequest
                         */
                        CreateJobRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.CreateJobRequest)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.CreateJobRequest();
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            if (object.jobId != null)
                                message.jobId = String(object.jobId);
                            if (object.job != null) {
                                if (typeof object.job !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.CreateJobRequest.job: object expected");
                                message.job = $root.google.cloud.storagebatchoperations.v1.Job.fromObject(object.job);
                            }
                            if (object.requestId != null)
                                message.requestId = String(object.requestId);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a CreateJobRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.CreateJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.CreateJobRequest} message CreateJobRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        CreateJobRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.parent = "";
                                object.jobId = "";
                                object.job = null;
                                object.requestId = "";
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                object.parent = message.parent;
                            if (message.jobId != null && message.hasOwnProperty("jobId"))
                                object.jobId = message.jobId;
                            if (message.job != null && message.hasOwnProperty("job"))
                                object.job = $root.google.cloud.storagebatchoperations.v1.Job.toObject(message.job, options);
                            if (message.requestId != null && message.hasOwnProperty("requestId"))
                                object.requestId = message.requestId;
                            return object;
                        };
    
                        /**
                         * Converts this CreateJobRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.CreateJobRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        CreateJobRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for CreateJobRequest
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.CreateJobRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        CreateJobRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.CreateJobRequest";
                        };
    
                        return CreateJobRequest;
                    })();
    
                    v1.CancelJobRequest = (function() {
    
                        /**
                         * Properties of a CancelJobRequest.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface ICancelJobRequest
                         * @property {string|null} [name] CancelJobRequest name
                         * @property {string|null} [requestId] CancelJobRequest requestId
                         */
    
                        /**
                         * Constructs a new CancelJobRequest.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a CancelJobRequest.
                         * @implements ICancelJobRequest
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.ICancelJobRequest=} [properties] Properties to set
                         */
                        function CancelJobRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * CancelJobRequest name.
                         * @member {string} name
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobRequest
                         * @instance
                         */
                        CancelJobRequest.prototype.name = "";
    
                        /**
                         * CancelJobRequest requestId.
                         * @member {string} requestId
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobRequest
                         * @instance
                         */
                        CancelJobRequest.prototype.requestId = "";
    
                        /**
                         * Creates a new CancelJobRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ICancelJobRequest=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.CancelJobRequest} CancelJobRequest instance
                         */
                        CancelJobRequest.create = function create(properties) {
                            return new CancelJobRequest(properties);
                        };
    
                        /**
                         * Encodes the specified CancelJobRequest message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.CancelJobRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ICancelJobRequest} message CancelJobRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CancelJobRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.requestId);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified CancelJobRequest message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.CancelJobRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ICancelJobRequest} message CancelJobRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CancelJobRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a CancelJobRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.CancelJobRequest} CancelJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CancelJobRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.CancelJobRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.name = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.requestId = reader.string();
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
                         * Decodes a CancelJobRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.CancelJobRequest} CancelJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CancelJobRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a CancelJobRequest message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        CancelJobRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.requestId != null && message.hasOwnProperty("requestId"))
                                if (!$util.isString(message.requestId))
                                    return "requestId: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a CancelJobRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.CancelJobRequest} CancelJobRequest
                         */
                        CancelJobRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.CancelJobRequest)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.CancelJobRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.requestId != null)
                                message.requestId = String(object.requestId);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a CancelJobRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.CancelJobRequest} message CancelJobRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        CancelJobRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.name = "";
                                object.requestId = "";
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.requestId != null && message.hasOwnProperty("requestId"))
                                object.requestId = message.requestId;
                            return object;
                        };
    
                        /**
                         * Converts this CancelJobRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        CancelJobRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for CancelJobRequest
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        CancelJobRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.CancelJobRequest";
                        };
    
                        return CancelJobRequest;
                    })();
    
                    v1.DeleteJobRequest = (function() {
    
                        /**
                         * Properties of a DeleteJobRequest.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IDeleteJobRequest
                         * @property {string|null} [name] DeleteJobRequest name
                         * @property {string|null} [requestId] DeleteJobRequest requestId
                         */
    
                        /**
                         * Constructs a new DeleteJobRequest.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a DeleteJobRequest.
                         * @implements IDeleteJobRequest
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IDeleteJobRequest=} [properties] Properties to set
                         */
                        function DeleteJobRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * DeleteJobRequest name.
                         * @member {string} name
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteJobRequest
                         * @instance
                         */
                        DeleteJobRequest.prototype.name = "";
    
                        /**
                         * DeleteJobRequest requestId.
                         * @member {string} requestId
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteJobRequest
                         * @instance
                         */
                        DeleteJobRequest.prototype.requestId = "";
    
                        /**
                         * Creates a new DeleteJobRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IDeleteJobRequest=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.DeleteJobRequest} DeleteJobRequest instance
                         */
                        DeleteJobRequest.create = function create(properties) {
                            return new DeleteJobRequest(properties);
                        };
    
                        /**
                         * Encodes the specified DeleteJobRequest message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.DeleteJobRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IDeleteJobRequest} message DeleteJobRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeleteJobRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.requestId);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified DeleteJobRequest message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.DeleteJobRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IDeleteJobRequest} message DeleteJobRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeleteJobRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a DeleteJobRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteJobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.DeleteJobRequest} DeleteJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DeleteJobRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.DeleteJobRequest();
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
                                        message.requestId = reader.string();
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
                         * Decodes a DeleteJobRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteJobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.DeleteJobRequest} DeleteJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DeleteJobRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a DeleteJobRequest message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteJobRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DeleteJobRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.requestId != null && message.hasOwnProperty("requestId"))
                                if (!$util.isString(message.requestId))
                                    return "requestId: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a DeleteJobRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteJobRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.DeleteJobRequest} DeleteJobRequest
                         */
                        DeleteJobRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.DeleteJobRequest)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.DeleteJobRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.requestId != null)
                                message.requestId = String(object.requestId);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a DeleteJobRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteJobRequest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.DeleteJobRequest} message DeleteJobRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DeleteJobRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.name = "";
                                object.requestId = "";
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.requestId != null && message.hasOwnProperty("requestId"))
                                object.requestId = message.requestId;
                            return object;
                        };
    
                        /**
                         * Converts this DeleteJobRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteJobRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DeleteJobRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for DeleteJobRequest
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteJobRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        DeleteJobRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.DeleteJobRequest";
                        };
    
                        return DeleteJobRequest;
                    })();
    
                    v1.CancelJobResponse = (function() {
    
                        /**
                         * Properties of a CancelJobResponse.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface ICancelJobResponse
                         */
    
                        /**
                         * Constructs a new CancelJobResponse.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a CancelJobResponse.
                         * @implements ICancelJobResponse
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.ICancelJobResponse=} [properties] Properties to set
                         */
                        function CancelJobResponse(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Creates a new CancelJobResponse instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobResponse
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ICancelJobResponse=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.CancelJobResponse} CancelJobResponse instance
                         */
                        CancelJobResponse.create = function create(properties) {
                            return new CancelJobResponse(properties);
                        };
    
                        /**
                         * Encodes the specified CancelJobResponse message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.CancelJobResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobResponse
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ICancelJobResponse} message CancelJobResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CancelJobResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified CancelJobResponse message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.CancelJobResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobResponse
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ICancelJobResponse} message CancelJobResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CancelJobResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a CancelJobResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.CancelJobResponse} CancelJobResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CancelJobResponse.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.CancelJobResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a CancelJobResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.CancelJobResponse} CancelJobResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CancelJobResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a CancelJobResponse message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        CancelJobResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            return null;
                        };
    
                        /**
                         * Creates a CancelJobResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.CancelJobResponse} CancelJobResponse
                         */
                        CancelJobResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.CancelJobResponse)
                                return object;
                            return new $root.google.cloud.storagebatchoperations.v1.CancelJobResponse();
                        };
    
                        /**
                         * Creates a plain object from a CancelJobResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobResponse
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.CancelJobResponse} message CancelJobResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        CancelJobResponse.toObject = function toObject() {
                            return {};
                        };
    
                        /**
                         * Converts this CancelJobResponse to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        CancelJobResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for CancelJobResponse
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.CancelJobResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        CancelJobResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.CancelJobResponse";
                        };
    
                        return CancelJobResponse;
                    })();
    
                    v1.OperationMetadata = (function() {
    
                        /**
                         * Properties of an OperationMetadata.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IOperationMetadata
                         * @property {string|null} [operation] OperationMetadata operation
                         * @property {google.protobuf.ITimestamp|null} [createTime] OperationMetadata createTime
                         * @property {google.protobuf.ITimestamp|null} [endTime] OperationMetadata endTime
                         * @property {boolean|null} [requestedCancellation] OperationMetadata requestedCancellation
                         * @property {string|null} [apiVersion] OperationMetadata apiVersion
                         * @property {google.cloud.storagebatchoperations.v1.IJob|null} [job] OperationMetadata job
                         */
    
                        /**
                         * Constructs a new OperationMetadata.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents an OperationMetadata.
                         * @implements IOperationMetadata
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IOperationMetadata=} [properties] Properties to set
                         */
                        function OperationMetadata(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * OperationMetadata operation.
                         * @member {string} operation
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.operation = "";
    
                        /**
                         * OperationMetadata createTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} createTime
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.createTime = null;
    
                        /**
                         * OperationMetadata endTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} endTime
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.endTime = null;
    
                        /**
                         * OperationMetadata requestedCancellation.
                         * @member {boolean} requestedCancellation
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.requestedCancellation = false;
    
                        /**
                         * OperationMetadata apiVersion.
                         * @member {string} apiVersion
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.apiVersion = "";
    
                        /**
                         * OperationMetadata job.
                         * @member {google.cloud.storagebatchoperations.v1.IJob|null|undefined} job
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.job = null;
    
                        /**
                         * Creates a new OperationMetadata instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IOperationMetadata=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.OperationMetadata} OperationMetadata instance
                         */
                        OperationMetadata.create = function create(properties) {
                            return new OperationMetadata(properties);
                        };
    
                        /**
                         * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.OperationMetadata.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IOperationMetadata} message OperationMetadata message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        OperationMetadata.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.operation != null && Object.hasOwnProperty.call(message, "operation"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.operation);
                            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                                $root.google.protobuf.Timestamp.encode(message.createTime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                                $root.google.protobuf.Timestamp.encode(message.endTime, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.requestedCancellation != null && Object.hasOwnProperty.call(message, "requestedCancellation"))
                                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.requestedCancellation);
                            if (message.apiVersion != null && Object.hasOwnProperty.call(message, "apiVersion"))
                                writer.uint32(/* id 8, wireType 2 =*/66).string(message.apiVersion);
                            if (message.job != null && Object.hasOwnProperty.call(message, "job"))
                                $root.google.cloud.storagebatchoperations.v1.Job.encode(message.job, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.OperationMetadata.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IOperationMetadata} message OperationMetadata message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        OperationMetadata.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an OperationMetadata message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.OperationMetadata} OperationMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        OperationMetadata.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.OperationMetadata();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.operation = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.createTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 3: {
                                        message.endTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 7: {
                                        message.requestedCancellation = reader.bool();
                                        break;
                                    }
                                case 8: {
                                        message.apiVersion = reader.string();
                                        break;
                                    }
                                case 10: {
                                        message.job = $root.google.cloud.storagebatchoperations.v1.Job.decode(reader, reader.uint32());
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
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.OperationMetadata} OperationMetadata
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
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        OperationMetadata.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.operation != null && message.hasOwnProperty("operation"))
                                if (!$util.isString(message.operation))
                                    return "operation: string expected";
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
                            if (message.requestedCancellation != null && message.hasOwnProperty("requestedCancellation"))
                                if (typeof message.requestedCancellation !== "boolean")
                                    return "requestedCancellation: boolean expected";
                            if (message.apiVersion != null && message.hasOwnProperty("apiVersion"))
                                if (!$util.isString(message.apiVersion))
                                    return "apiVersion: string expected";
                            if (message.job != null && message.hasOwnProperty("job")) {
                                var error = $root.google.cloud.storagebatchoperations.v1.Job.verify(message.job);
                                if (error)
                                    return "job." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.OperationMetadata} OperationMetadata
                         */
                        OperationMetadata.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.OperationMetadata)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.OperationMetadata();
                            if (object.operation != null)
                                message.operation = String(object.operation);
                            if (object.createTime != null) {
                                if (typeof object.createTime !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.OperationMetadata.createTime: object expected");
                                message.createTime = $root.google.protobuf.Timestamp.fromObject(object.createTime);
                            }
                            if (object.endTime != null) {
                                if (typeof object.endTime !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.OperationMetadata.endTime: object expected");
                                message.endTime = $root.google.protobuf.Timestamp.fromObject(object.endTime);
                            }
                            if (object.requestedCancellation != null)
                                message.requestedCancellation = Boolean(object.requestedCancellation);
                            if (object.apiVersion != null)
                                message.apiVersion = String(object.apiVersion);
                            if (object.job != null) {
                                if (typeof object.job !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.OperationMetadata.job: object expected");
                                message.job = $root.google.cloud.storagebatchoperations.v1.Job.fromObject(object.job);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.OperationMetadata} message OperationMetadata
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        OperationMetadata.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.operation = "";
                                object.createTime = null;
                                object.endTime = null;
                                object.requestedCancellation = false;
                                object.apiVersion = "";
                                object.job = null;
                            }
                            if (message.operation != null && message.hasOwnProperty("operation"))
                                object.operation = message.operation;
                            if (message.createTime != null && message.hasOwnProperty("createTime"))
                                object.createTime = $root.google.protobuf.Timestamp.toObject(message.createTime, options);
                            if (message.endTime != null && message.hasOwnProperty("endTime"))
                                object.endTime = $root.google.protobuf.Timestamp.toObject(message.endTime, options);
                            if (message.requestedCancellation != null && message.hasOwnProperty("requestedCancellation"))
                                object.requestedCancellation = message.requestedCancellation;
                            if (message.apiVersion != null && message.hasOwnProperty("apiVersion"))
                                object.apiVersion = message.apiVersion;
                            if (message.job != null && message.hasOwnProperty("job"))
                                object.job = $root.google.cloud.storagebatchoperations.v1.Job.toObject(message.job, options);
                            return object;
                        };
    
                        /**
                         * Converts this OperationMetadata to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        OperationMetadata.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for OperationMetadata
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.OperationMetadata
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        OperationMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.OperationMetadata";
                        };
    
                        return OperationMetadata;
                    })();
    
                    v1.Job = (function() {
    
                        /**
                         * Properties of a Job.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IJob
                         * @property {string|null} [name] Job name
                         * @property {string|null} [description] Job description
                         * @property {google.cloud.storagebatchoperations.v1.IBucketList|null} [bucketList] Job bucketList
                         * @property {google.cloud.storagebatchoperations.v1.IPutObjectHold|null} [putObjectHold] Job putObjectHold
                         * @property {google.cloud.storagebatchoperations.v1.IDeleteObject|null} [deleteObject] Job deleteObject
                         * @property {google.cloud.storagebatchoperations.v1.IPutMetadata|null} [putMetadata] Job putMetadata
                         * @property {google.cloud.storagebatchoperations.v1.IRewriteObject|null} [rewriteObject] Job rewriteObject
                         * @property {google.cloud.storagebatchoperations.v1.ILoggingConfig|null} [loggingConfig] Job loggingConfig
                         * @property {google.protobuf.ITimestamp|null} [createTime] Job createTime
                         * @property {google.protobuf.ITimestamp|null} [scheduleTime] Job scheduleTime
                         * @property {google.protobuf.ITimestamp|null} [completeTime] Job completeTime
                         * @property {google.cloud.storagebatchoperations.v1.ICounters|null} [counters] Job counters
                         * @property {Array.<google.cloud.storagebatchoperations.v1.IErrorSummary>|null} [errorSummaries] Job errorSummaries
                         * @property {google.cloud.storagebatchoperations.v1.Job.State|null} [state] Job state
                         */
    
                        /**
                         * Constructs a new Job.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a Job.
                         * @implements IJob
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IJob=} [properties] Properties to set
                         */
                        function Job(properties) {
                            this.errorSummaries = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Job name.
                         * @member {string} name
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Job.prototype.name = "";
    
                        /**
                         * Job description.
                         * @member {string} description
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Job.prototype.description = "";
    
                        /**
                         * Job bucketList.
                         * @member {google.cloud.storagebatchoperations.v1.IBucketList|null|undefined} bucketList
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Job.prototype.bucketList = null;
    
                        /**
                         * Job putObjectHold.
                         * @member {google.cloud.storagebatchoperations.v1.IPutObjectHold|null|undefined} putObjectHold
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Job.prototype.putObjectHold = null;
    
                        /**
                         * Job deleteObject.
                         * @member {google.cloud.storagebatchoperations.v1.IDeleteObject|null|undefined} deleteObject
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Job.prototype.deleteObject = null;
    
                        /**
                         * Job putMetadata.
                         * @member {google.cloud.storagebatchoperations.v1.IPutMetadata|null|undefined} putMetadata
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Job.prototype.putMetadata = null;
    
                        /**
                         * Job rewriteObject.
                         * @member {google.cloud.storagebatchoperations.v1.IRewriteObject|null|undefined} rewriteObject
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Job.prototype.rewriteObject = null;
    
                        /**
                         * Job loggingConfig.
                         * @member {google.cloud.storagebatchoperations.v1.ILoggingConfig|null|undefined} loggingConfig
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Job.prototype.loggingConfig = null;
    
                        /**
                         * Job createTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} createTime
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Job.prototype.createTime = null;
    
                        /**
                         * Job scheduleTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} scheduleTime
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Job.prototype.scheduleTime = null;
    
                        /**
                         * Job completeTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} completeTime
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Job.prototype.completeTime = null;
    
                        /**
                         * Job counters.
                         * @member {google.cloud.storagebatchoperations.v1.ICounters|null|undefined} counters
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Job.prototype.counters = null;
    
                        /**
                         * Job errorSummaries.
                         * @member {Array.<google.cloud.storagebatchoperations.v1.IErrorSummary>} errorSummaries
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Job.prototype.errorSummaries = $util.emptyArray;
    
                        /**
                         * Job state.
                         * @member {google.cloud.storagebatchoperations.v1.Job.State} state
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Job.prototype.state = 0;
    
                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;
    
                        /**
                         * Job source.
                         * @member {"bucketList"|undefined} source
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Object.defineProperty(Job.prototype, "source", {
                            get: $util.oneOfGetter($oneOfFields = ["bucketList"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * Job transformation.
                         * @member {"putObjectHold"|"deleteObject"|"putMetadata"|"rewriteObject"|undefined} transformation
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         */
                        Object.defineProperty(Job.prototype, "transformation", {
                            get: $util.oneOfGetter($oneOfFields = ["putObjectHold", "deleteObject", "putMetadata", "rewriteObject"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * Creates a new Job instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IJob=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.Job} Job instance
                         */
                        Job.create = function create(properties) {
                            return new Job(properties);
                        };
    
                        /**
                         * Encodes the specified Job message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.Job.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IJob} message Job message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Job.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                            if (message.putObjectHold != null && Object.hasOwnProperty.call(message, "putObjectHold"))
                                $root.google.cloud.storagebatchoperations.v1.PutObjectHold.encode(message.putObjectHold, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                            if (message.deleteObject != null && Object.hasOwnProperty.call(message, "deleteObject"))
                                $root.google.cloud.storagebatchoperations.v1.DeleteObject.encode(message.deleteObject, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                            if (message.putMetadata != null && Object.hasOwnProperty.call(message, "putMetadata"))
                                $root.google.cloud.storagebatchoperations.v1.PutMetadata.encode(message.putMetadata, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                            if (message.loggingConfig != null && Object.hasOwnProperty.call(message, "loggingConfig"))
                                $root.google.cloud.storagebatchoperations.v1.LoggingConfig.encode(message.loggingConfig, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                                $root.google.protobuf.Timestamp.encode(message.createTime, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                            if (message.scheduleTime != null && Object.hasOwnProperty.call(message, "scheduleTime"))
                                $root.google.protobuf.Timestamp.encode(message.scheduleTime, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                            if (message.completeTime != null && Object.hasOwnProperty.call(message, "completeTime"))
                                $root.google.protobuf.Timestamp.encode(message.completeTime, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                            if (message.counters != null && Object.hasOwnProperty.call(message, "counters"))
                                $root.google.cloud.storagebatchoperations.v1.Counters.encode(message.counters, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                            if (message.errorSummaries != null && message.errorSummaries.length)
                                for (var i = 0; i < message.errorSummaries.length; ++i)
                                    $root.google.cloud.storagebatchoperations.v1.ErrorSummary.encode(message.errorSummaries[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.state);
                            if (message.bucketList != null && Object.hasOwnProperty.call(message, "bucketList"))
                                $root.google.cloud.storagebatchoperations.v1.BucketList.encode(message.bucketList, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
                            if (message.rewriteObject != null && Object.hasOwnProperty.call(message, "rewriteObject"))
                                $root.google.cloud.storagebatchoperations.v1.RewriteObject.encode(message.rewriteObject, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Job message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.Job.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IJob} message Job message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Job.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a Job message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.Job} Job
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Job.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.Job();
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
                                        message.description = reader.string();
                                        break;
                                    }
                                case 19: {
                                        message.bucketList = $root.google.cloud.storagebatchoperations.v1.BucketList.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 5: {
                                        message.putObjectHold = $root.google.cloud.storagebatchoperations.v1.PutObjectHold.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 6: {
                                        message.deleteObject = $root.google.cloud.storagebatchoperations.v1.DeleteObject.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 8: {
                                        message.putMetadata = $root.google.cloud.storagebatchoperations.v1.PutMetadata.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 20: {
                                        message.rewriteObject = $root.google.cloud.storagebatchoperations.v1.RewriteObject.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 9: {
                                        message.loggingConfig = $root.google.cloud.storagebatchoperations.v1.LoggingConfig.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 10: {
                                        message.createTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 11: {
                                        message.scheduleTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 12: {
                                        message.completeTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 13: {
                                        message.counters = $root.google.cloud.storagebatchoperations.v1.Counters.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 14: {
                                        if (!(message.errorSummaries && message.errorSummaries.length))
                                            message.errorSummaries = [];
                                        message.errorSummaries.push($root.google.cloud.storagebatchoperations.v1.ErrorSummary.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 15: {
                                        message.state = reader.int32();
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
                         * Decodes a Job message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.Job} Job
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Job.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a Job message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Job.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.description != null && message.hasOwnProperty("description"))
                                if (!$util.isString(message.description))
                                    return "description: string expected";
                            if (message.bucketList != null && message.hasOwnProperty("bucketList")) {
                                properties.source = 1;
                                {
                                    var error = $root.google.cloud.storagebatchoperations.v1.BucketList.verify(message.bucketList);
                                    if (error)
                                        return "bucketList." + error;
                                }
                            }
                            if (message.putObjectHold != null && message.hasOwnProperty("putObjectHold")) {
                                properties.transformation = 1;
                                {
                                    var error = $root.google.cloud.storagebatchoperations.v1.PutObjectHold.verify(message.putObjectHold);
                                    if (error)
                                        return "putObjectHold." + error;
                                }
                            }
                            if (message.deleteObject != null && message.hasOwnProperty("deleteObject")) {
                                if (properties.transformation === 1)
                                    return "transformation: multiple values";
                                properties.transformation = 1;
                                {
                                    var error = $root.google.cloud.storagebatchoperations.v1.DeleteObject.verify(message.deleteObject);
                                    if (error)
                                        return "deleteObject." + error;
                                }
                            }
                            if (message.putMetadata != null && message.hasOwnProperty("putMetadata")) {
                                if (properties.transformation === 1)
                                    return "transformation: multiple values";
                                properties.transformation = 1;
                                {
                                    var error = $root.google.cloud.storagebatchoperations.v1.PutMetadata.verify(message.putMetadata);
                                    if (error)
                                        return "putMetadata." + error;
                                }
                            }
                            if (message.rewriteObject != null && message.hasOwnProperty("rewriteObject")) {
                                if (properties.transformation === 1)
                                    return "transformation: multiple values";
                                properties.transformation = 1;
                                {
                                    var error = $root.google.cloud.storagebatchoperations.v1.RewriteObject.verify(message.rewriteObject);
                                    if (error)
                                        return "rewriteObject." + error;
                                }
                            }
                            if (message.loggingConfig != null && message.hasOwnProperty("loggingConfig")) {
                                var error = $root.google.cloud.storagebatchoperations.v1.LoggingConfig.verify(message.loggingConfig);
                                if (error)
                                    return "loggingConfig." + error;
                            }
                            if (message.createTime != null && message.hasOwnProperty("createTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.createTime);
                                if (error)
                                    return "createTime." + error;
                            }
                            if (message.scheduleTime != null && message.hasOwnProperty("scheduleTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.scheduleTime);
                                if (error)
                                    return "scheduleTime." + error;
                            }
                            if (message.completeTime != null && message.hasOwnProperty("completeTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.completeTime);
                                if (error)
                                    return "completeTime." + error;
                            }
                            if (message.counters != null && message.hasOwnProperty("counters")) {
                                var error = $root.google.cloud.storagebatchoperations.v1.Counters.verify(message.counters);
                                if (error)
                                    return "counters." + error;
                            }
                            if (message.errorSummaries != null && message.hasOwnProperty("errorSummaries")) {
                                if (!Array.isArray(message.errorSummaries))
                                    return "errorSummaries: array expected";
                                for (var i = 0; i < message.errorSummaries.length; ++i) {
                                    var error = $root.google.cloud.storagebatchoperations.v1.ErrorSummary.verify(message.errorSummaries[i]);
                                    if (error)
                                        return "errorSummaries." + error;
                                }
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
                                    break;
                                }
                            return null;
                        };
    
                        /**
                         * Creates a Job message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.Job} Job
                         */
                        Job.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.Job)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.Job();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.description != null)
                                message.description = String(object.description);
                            if (object.bucketList != null) {
                                if (typeof object.bucketList !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.Job.bucketList: object expected");
                                message.bucketList = $root.google.cloud.storagebatchoperations.v1.BucketList.fromObject(object.bucketList);
                            }
                            if (object.putObjectHold != null) {
                                if (typeof object.putObjectHold !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.Job.putObjectHold: object expected");
                                message.putObjectHold = $root.google.cloud.storagebatchoperations.v1.PutObjectHold.fromObject(object.putObjectHold);
                            }
                            if (object.deleteObject != null) {
                                if (typeof object.deleteObject !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.Job.deleteObject: object expected");
                                message.deleteObject = $root.google.cloud.storagebatchoperations.v1.DeleteObject.fromObject(object.deleteObject);
                            }
                            if (object.putMetadata != null) {
                                if (typeof object.putMetadata !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.Job.putMetadata: object expected");
                                message.putMetadata = $root.google.cloud.storagebatchoperations.v1.PutMetadata.fromObject(object.putMetadata);
                            }
                            if (object.rewriteObject != null) {
                                if (typeof object.rewriteObject !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.Job.rewriteObject: object expected");
                                message.rewriteObject = $root.google.cloud.storagebatchoperations.v1.RewriteObject.fromObject(object.rewriteObject);
                            }
                            if (object.loggingConfig != null) {
                                if (typeof object.loggingConfig !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.Job.loggingConfig: object expected");
                                message.loggingConfig = $root.google.cloud.storagebatchoperations.v1.LoggingConfig.fromObject(object.loggingConfig);
                            }
                            if (object.createTime != null) {
                                if (typeof object.createTime !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.Job.createTime: object expected");
                                message.createTime = $root.google.protobuf.Timestamp.fromObject(object.createTime);
                            }
                            if (object.scheduleTime != null) {
                                if (typeof object.scheduleTime !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.Job.scheduleTime: object expected");
                                message.scheduleTime = $root.google.protobuf.Timestamp.fromObject(object.scheduleTime);
                            }
                            if (object.completeTime != null) {
                                if (typeof object.completeTime !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.Job.completeTime: object expected");
                                message.completeTime = $root.google.protobuf.Timestamp.fromObject(object.completeTime);
                            }
                            if (object.counters != null) {
                                if (typeof object.counters !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.Job.counters: object expected");
                                message.counters = $root.google.cloud.storagebatchoperations.v1.Counters.fromObject(object.counters);
                            }
                            if (object.errorSummaries) {
                                if (!Array.isArray(object.errorSummaries))
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.Job.errorSummaries: array expected");
                                message.errorSummaries = [];
                                for (var i = 0; i < object.errorSummaries.length; ++i) {
                                    if (typeof object.errorSummaries[i] !== "object")
                                        throw TypeError(".google.cloud.storagebatchoperations.v1.Job.errorSummaries: object expected");
                                    message.errorSummaries[i] = $root.google.cloud.storagebatchoperations.v1.ErrorSummary.fromObject(object.errorSummaries[i]);
                                }
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
                            case "RUNNING":
                            case 1:
                                message.state = 1;
                                break;
                            case "SUCCEEDED":
                            case 2:
                                message.state = 2;
                                break;
                            case "CANCELED":
                            case 3:
                                message.state = 3;
                                break;
                            case "FAILED":
                            case 4:
                                message.state = 4;
                                break;
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a Job message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.Job} message Job
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Job.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.errorSummaries = [];
                            if (options.defaults) {
                                object.name = "";
                                object.description = "";
                                object.loggingConfig = null;
                                object.createTime = null;
                                object.scheduleTime = null;
                                object.completeTime = null;
                                object.counters = null;
                                object.state = options.enums === String ? "STATE_UNSPECIFIED" : 0;
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.description != null && message.hasOwnProperty("description"))
                                object.description = message.description;
                            if (message.putObjectHold != null && message.hasOwnProperty("putObjectHold")) {
                                object.putObjectHold = $root.google.cloud.storagebatchoperations.v1.PutObjectHold.toObject(message.putObjectHold, options);
                                if (options.oneofs)
                                    object.transformation = "putObjectHold";
                            }
                            if (message.deleteObject != null && message.hasOwnProperty("deleteObject")) {
                                object.deleteObject = $root.google.cloud.storagebatchoperations.v1.DeleteObject.toObject(message.deleteObject, options);
                                if (options.oneofs)
                                    object.transformation = "deleteObject";
                            }
                            if (message.putMetadata != null && message.hasOwnProperty("putMetadata")) {
                                object.putMetadata = $root.google.cloud.storagebatchoperations.v1.PutMetadata.toObject(message.putMetadata, options);
                                if (options.oneofs)
                                    object.transformation = "putMetadata";
                            }
                            if (message.loggingConfig != null && message.hasOwnProperty("loggingConfig"))
                                object.loggingConfig = $root.google.cloud.storagebatchoperations.v1.LoggingConfig.toObject(message.loggingConfig, options);
                            if (message.createTime != null && message.hasOwnProperty("createTime"))
                                object.createTime = $root.google.protobuf.Timestamp.toObject(message.createTime, options);
                            if (message.scheduleTime != null && message.hasOwnProperty("scheduleTime"))
                                object.scheduleTime = $root.google.protobuf.Timestamp.toObject(message.scheduleTime, options);
                            if (message.completeTime != null && message.hasOwnProperty("completeTime"))
                                object.completeTime = $root.google.protobuf.Timestamp.toObject(message.completeTime, options);
                            if (message.counters != null && message.hasOwnProperty("counters"))
                                object.counters = $root.google.cloud.storagebatchoperations.v1.Counters.toObject(message.counters, options);
                            if (message.errorSummaries && message.errorSummaries.length) {
                                object.errorSummaries = [];
                                for (var j = 0; j < message.errorSummaries.length; ++j)
                                    object.errorSummaries[j] = $root.google.cloud.storagebatchoperations.v1.ErrorSummary.toObject(message.errorSummaries[j], options);
                            }
                            if (message.state != null && message.hasOwnProperty("state"))
                                object.state = options.enums === String ? $root.google.cloud.storagebatchoperations.v1.Job.State[message.state] === undefined ? message.state : $root.google.cloud.storagebatchoperations.v1.Job.State[message.state] : message.state;
                            if (message.bucketList != null && message.hasOwnProperty("bucketList")) {
                                object.bucketList = $root.google.cloud.storagebatchoperations.v1.BucketList.toObject(message.bucketList, options);
                                if (options.oneofs)
                                    object.source = "bucketList";
                            }
                            if (message.rewriteObject != null && message.hasOwnProperty("rewriteObject")) {
                                object.rewriteObject = $root.google.cloud.storagebatchoperations.v1.RewriteObject.toObject(message.rewriteObject, options);
                                if (options.oneofs)
                                    object.transformation = "rewriteObject";
                            }
                            return object;
                        };
    
                        /**
                         * Converts this Job to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Job.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for Job
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.Job
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Job.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.Job";
                        };
    
                        /**
                         * State enum.
                         * @name google.cloud.storagebatchoperations.v1.Job.State
                         * @enum {number}
                         * @property {number} STATE_UNSPECIFIED=0 STATE_UNSPECIFIED value
                         * @property {number} RUNNING=1 RUNNING value
                         * @property {number} SUCCEEDED=2 SUCCEEDED value
                         * @property {number} CANCELED=3 CANCELED value
                         * @property {number} FAILED=4 FAILED value
                         */
                        Job.State = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "STATE_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "RUNNING"] = 1;
                            values[valuesById[2] = "SUCCEEDED"] = 2;
                            values[valuesById[3] = "CANCELED"] = 3;
                            values[valuesById[4] = "FAILED"] = 4;
                            return values;
                        })();
    
                        return Job;
                    })();
    
                    v1.BucketList = (function() {
    
                        /**
                         * Properties of a BucketList.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IBucketList
                         * @property {Array.<google.cloud.storagebatchoperations.v1.BucketList.IBucket>|null} [buckets] BucketList buckets
                         */
    
                        /**
                         * Constructs a new BucketList.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a BucketList.
                         * @implements IBucketList
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IBucketList=} [properties] Properties to set
                         */
                        function BucketList(properties) {
                            this.buckets = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * BucketList buckets.
                         * @member {Array.<google.cloud.storagebatchoperations.v1.BucketList.IBucket>} buckets
                         * @memberof google.cloud.storagebatchoperations.v1.BucketList
                         * @instance
                         */
                        BucketList.prototype.buckets = $util.emptyArray;
    
                        /**
                         * Creates a new BucketList instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.BucketList
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IBucketList=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.BucketList} BucketList instance
                         */
                        BucketList.create = function create(properties) {
                            return new BucketList(properties);
                        };
    
                        /**
                         * Encodes the specified BucketList message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.BucketList.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.BucketList
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IBucketList} message BucketList message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BucketList.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.buckets != null && message.buckets.length)
                                for (var i = 0; i < message.buckets.length; ++i)
                                    $root.google.cloud.storagebatchoperations.v1.BucketList.Bucket.encode(message.buckets[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified BucketList message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.BucketList.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.BucketList
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IBucketList} message BucketList message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BucketList.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a BucketList message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.BucketList
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.BucketList} BucketList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BucketList.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.BucketList();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.buckets && message.buckets.length))
                                            message.buckets = [];
                                        message.buckets.push($root.google.cloud.storagebatchoperations.v1.BucketList.Bucket.decode(reader, reader.uint32()));
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
                         * Decodes a BucketList message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.BucketList
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.BucketList} BucketList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BucketList.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a BucketList message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.BucketList
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        BucketList.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.buckets != null && message.hasOwnProperty("buckets")) {
                                if (!Array.isArray(message.buckets))
                                    return "buckets: array expected";
                                for (var i = 0; i < message.buckets.length; ++i) {
                                    var error = $root.google.cloud.storagebatchoperations.v1.BucketList.Bucket.verify(message.buckets[i]);
                                    if (error)
                                        return "buckets." + error;
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates a BucketList message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.BucketList
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.BucketList} BucketList
                         */
                        BucketList.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.BucketList)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.BucketList();
                            if (object.buckets) {
                                if (!Array.isArray(object.buckets))
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.BucketList.buckets: array expected");
                                message.buckets = [];
                                for (var i = 0; i < object.buckets.length; ++i) {
                                    if (typeof object.buckets[i] !== "object")
                                        throw TypeError(".google.cloud.storagebatchoperations.v1.BucketList.buckets: object expected");
                                    message.buckets[i] = $root.google.cloud.storagebatchoperations.v1.BucketList.Bucket.fromObject(object.buckets[i]);
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a BucketList message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.BucketList
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.BucketList} message BucketList
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        BucketList.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.buckets = [];
                            if (message.buckets && message.buckets.length) {
                                object.buckets = [];
                                for (var j = 0; j < message.buckets.length; ++j)
                                    object.buckets[j] = $root.google.cloud.storagebatchoperations.v1.BucketList.Bucket.toObject(message.buckets[j], options);
                            }
                            return object;
                        };
    
                        /**
                         * Converts this BucketList to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.BucketList
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        BucketList.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for BucketList
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.BucketList
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        BucketList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.BucketList";
                        };
    
                        BucketList.Bucket = (function() {
    
                            /**
                             * Properties of a Bucket.
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList
                             * @interface IBucket
                             * @property {string|null} [bucket] Bucket bucket
                             * @property {google.cloud.storagebatchoperations.v1.IPrefixList|null} [prefixList] Bucket prefixList
                             * @property {google.cloud.storagebatchoperations.v1.IManifest|null} [manifest] Bucket manifest
                             */
    
                            /**
                             * Constructs a new Bucket.
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList
                             * @classdesc Represents a Bucket.
                             * @implements IBucket
                             * @constructor
                             * @param {google.cloud.storagebatchoperations.v1.BucketList.IBucket=} [properties] Properties to set
                             */
                            function Bucket(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * Bucket bucket.
                             * @member {string} bucket
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList.Bucket
                             * @instance
                             */
                            Bucket.prototype.bucket = "";
    
                            /**
                             * Bucket prefixList.
                             * @member {google.cloud.storagebatchoperations.v1.IPrefixList|null|undefined} prefixList
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList.Bucket
                             * @instance
                             */
                            Bucket.prototype.prefixList = null;
    
                            /**
                             * Bucket manifest.
                             * @member {google.cloud.storagebatchoperations.v1.IManifest|null|undefined} manifest
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList.Bucket
                             * @instance
                             */
                            Bucket.prototype.manifest = null;
    
                            // OneOf field names bound to virtual getters and setters
                            var $oneOfFields;
    
                            /**
                             * Bucket objectConfiguration.
                             * @member {"prefixList"|"manifest"|undefined} objectConfiguration
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList.Bucket
                             * @instance
                             */
                            Object.defineProperty(Bucket.prototype, "objectConfiguration", {
                                get: $util.oneOfGetter($oneOfFields = ["prefixList", "manifest"]),
                                set: $util.oneOfSetter($oneOfFields)
                            });
    
                            /**
                             * Creates a new Bucket instance using the specified properties.
                             * @function create
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList.Bucket
                             * @static
                             * @param {google.cloud.storagebatchoperations.v1.BucketList.IBucket=} [properties] Properties to set
                             * @returns {google.cloud.storagebatchoperations.v1.BucketList.Bucket} Bucket instance
                             */
                            Bucket.create = function create(properties) {
                                return new Bucket(properties);
                            };
    
                            /**
                             * Encodes the specified Bucket message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.BucketList.Bucket.verify|verify} messages.
                             * @function encode
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList.Bucket
                             * @static
                             * @param {google.cloud.storagebatchoperations.v1.BucketList.IBucket} message Bucket message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Bucket.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.bucket != null && Object.hasOwnProperty.call(message, "bucket"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.bucket);
                                if (message.prefixList != null && Object.hasOwnProperty.call(message, "prefixList"))
                                    $root.google.cloud.storagebatchoperations.v1.PrefixList.encode(message.prefixList, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                if (message.manifest != null && Object.hasOwnProperty.call(message, "manifest"))
                                    $root.google.cloud.storagebatchoperations.v1.Manifest.encode(message.manifest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified Bucket message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.BucketList.Bucket.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList.Bucket
                             * @static
                             * @param {google.cloud.storagebatchoperations.v1.BucketList.IBucket} message Bucket message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Bucket.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a Bucket message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList.Bucket
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.cloud.storagebatchoperations.v1.BucketList.Bucket} Bucket
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Bucket.decode = function decode(reader, length, error) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.BucketList.Bucket();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    if (tag === error)
                                        break;
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.bucket = reader.string();
                                            break;
                                        }
                                    case 2: {
                                            message.prefixList = $root.google.cloud.storagebatchoperations.v1.PrefixList.decode(reader, reader.uint32());
                                            break;
                                        }
                                    case 3: {
                                            message.manifest = $root.google.cloud.storagebatchoperations.v1.Manifest.decode(reader, reader.uint32());
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
                             * Decodes a Bucket message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList.Bucket
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.cloud.storagebatchoperations.v1.BucketList.Bucket} Bucket
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Bucket.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a Bucket message.
                             * @function verify
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList.Bucket
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            Bucket.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                var properties = {};
                                if (message.bucket != null && message.hasOwnProperty("bucket"))
                                    if (!$util.isString(message.bucket))
                                        return "bucket: string expected";
                                if (message.prefixList != null && message.hasOwnProperty("prefixList")) {
                                    properties.objectConfiguration = 1;
                                    {
                                        var error = $root.google.cloud.storagebatchoperations.v1.PrefixList.verify(message.prefixList);
                                        if (error)
                                            return "prefixList." + error;
                                    }
                                }
                                if (message.manifest != null && message.hasOwnProperty("manifest")) {
                                    if (properties.objectConfiguration === 1)
                                        return "objectConfiguration: multiple values";
                                    properties.objectConfiguration = 1;
                                    {
                                        var error = $root.google.cloud.storagebatchoperations.v1.Manifest.verify(message.manifest);
                                        if (error)
                                            return "manifest." + error;
                                    }
                                }
                                return null;
                            };
    
                            /**
                             * Creates a Bucket message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList.Bucket
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.cloud.storagebatchoperations.v1.BucketList.Bucket} Bucket
                             */
                            Bucket.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.cloud.storagebatchoperations.v1.BucketList.Bucket)
                                    return object;
                                var message = new $root.google.cloud.storagebatchoperations.v1.BucketList.Bucket();
                                if (object.bucket != null)
                                    message.bucket = String(object.bucket);
                                if (object.prefixList != null) {
                                    if (typeof object.prefixList !== "object")
                                        throw TypeError(".google.cloud.storagebatchoperations.v1.BucketList.Bucket.prefixList: object expected");
                                    message.prefixList = $root.google.cloud.storagebatchoperations.v1.PrefixList.fromObject(object.prefixList);
                                }
                                if (object.manifest != null) {
                                    if (typeof object.manifest !== "object")
                                        throw TypeError(".google.cloud.storagebatchoperations.v1.BucketList.Bucket.manifest: object expected");
                                    message.manifest = $root.google.cloud.storagebatchoperations.v1.Manifest.fromObject(object.manifest);
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a Bucket message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList.Bucket
                             * @static
                             * @param {google.cloud.storagebatchoperations.v1.BucketList.Bucket} message Bucket
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Bucket.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults)
                                    object.bucket = "";
                                if (message.bucket != null && message.hasOwnProperty("bucket"))
                                    object.bucket = message.bucket;
                                if (message.prefixList != null && message.hasOwnProperty("prefixList")) {
                                    object.prefixList = $root.google.cloud.storagebatchoperations.v1.PrefixList.toObject(message.prefixList, options);
                                    if (options.oneofs)
                                        object.objectConfiguration = "prefixList";
                                }
                                if (message.manifest != null && message.hasOwnProperty("manifest")) {
                                    object.manifest = $root.google.cloud.storagebatchoperations.v1.Manifest.toObject(message.manifest, options);
                                    if (options.oneofs)
                                        object.objectConfiguration = "manifest";
                                }
                                return object;
                            };
    
                            /**
                             * Converts this Bucket to JSON.
                             * @function toJSON
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList.Bucket
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            Bucket.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            /**
                             * Gets the default type url for Bucket
                             * @function getTypeUrl
                             * @memberof google.cloud.storagebatchoperations.v1.BucketList.Bucket
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            Bucket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.BucketList.Bucket";
                            };
    
                            return Bucket;
                        })();
    
                        return BucketList;
                    })();
    
                    v1.Manifest = (function() {
    
                        /**
                         * Properties of a Manifest.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IManifest
                         * @property {string|null} [manifestLocation] Manifest manifestLocation
                         */
    
                        /**
                         * Constructs a new Manifest.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a Manifest.
                         * @implements IManifest
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IManifest=} [properties] Properties to set
                         */
                        function Manifest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Manifest manifestLocation.
                         * @member {string} manifestLocation
                         * @memberof google.cloud.storagebatchoperations.v1.Manifest
                         * @instance
                         */
                        Manifest.prototype.manifestLocation = "";
    
                        /**
                         * Creates a new Manifest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.Manifest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IManifest=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.Manifest} Manifest instance
                         */
                        Manifest.create = function create(properties) {
                            return new Manifest(properties);
                        };
    
                        /**
                         * Encodes the specified Manifest message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.Manifest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.Manifest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IManifest} message Manifest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Manifest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.manifestLocation != null && Object.hasOwnProperty.call(message, "manifestLocation"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.manifestLocation);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Manifest message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.Manifest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.Manifest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IManifest} message Manifest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Manifest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a Manifest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.Manifest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.Manifest} Manifest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Manifest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.Manifest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 2: {
                                        message.manifestLocation = reader.string();
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
                         * Decodes a Manifest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.Manifest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.Manifest} Manifest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Manifest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a Manifest message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.Manifest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Manifest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.manifestLocation != null && message.hasOwnProperty("manifestLocation"))
                                if (!$util.isString(message.manifestLocation))
                                    return "manifestLocation: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a Manifest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.Manifest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.Manifest} Manifest
                         */
                        Manifest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.Manifest)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.Manifest();
                            if (object.manifestLocation != null)
                                message.manifestLocation = String(object.manifestLocation);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a Manifest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.Manifest
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.Manifest} message Manifest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Manifest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.manifestLocation = "";
                            if (message.manifestLocation != null && message.hasOwnProperty("manifestLocation"))
                                object.manifestLocation = message.manifestLocation;
                            return object;
                        };
    
                        /**
                         * Converts this Manifest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.Manifest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Manifest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for Manifest
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.Manifest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Manifest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.Manifest";
                        };
    
                        return Manifest;
                    })();
    
                    v1.PrefixList = (function() {
    
                        /**
                         * Properties of a PrefixList.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IPrefixList
                         * @property {Array.<string>|null} [includedObjectPrefixes] PrefixList includedObjectPrefixes
                         */
    
                        /**
                         * Constructs a new PrefixList.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a PrefixList.
                         * @implements IPrefixList
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IPrefixList=} [properties] Properties to set
                         */
                        function PrefixList(properties) {
                            this.includedObjectPrefixes = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * PrefixList includedObjectPrefixes.
                         * @member {Array.<string>} includedObjectPrefixes
                         * @memberof google.cloud.storagebatchoperations.v1.PrefixList
                         * @instance
                         */
                        PrefixList.prototype.includedObjectPrefixes = $util.emptyArray;
    
                        /**
                         * Creates a new PrefixList instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.PrefixList
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IPrefixList=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.PrefixList} PrefixList instance
                         */
                        PrefixList.create = function create(properties) {
                            return new PrefixList(properties);
                        };
    
                        /**
                         * Encodes the specified PrefixList message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.PrefixList.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.PrefixList
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IPrefixList} message PrefixList message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PrefixList.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.includedObjectPrefixes != null && message.includedObjectPrefixes.length)
                                for (var i = 0; i < message.includedObjectPrefixes.length; ++i)
                                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.includedObjectPrefixes[i]);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified PrefixList message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.PrefixList.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.PrefixList
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IPrefixList} message PrefixList message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PrefixList.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a PrefixList message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.PrefixList
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.PrefixList} PrefixList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PrefixList.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.PrefixList();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 2: {
                                        if (!(message.includedObjectPrefixes && message.includedObjectPrefixes.length))
                                            message.includedObjectPrefixes = [];
                                        message.includedObjectPrefixes.push(reader.string());
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
                         * Decodes a PrefixList message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.PrefixList
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.PrefixList} PrefixList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PrefixList.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a PrefixList message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.PrefixList
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PrefixList.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.includedObjectPrefixes != null && message.hasOwnProperty("includedObjectPrefixes")) {
                                if (!Array.isArray(message.includedObjectPrefixes))
                                    return "includedObjectPrefixes: array expected";
                                for (var i = 0; i < message.includedObjectPrefixes.length; ++i)
                                    if (!$util.isString(message.includedObjectPrefixes[i]))
                                        return "includedObjectPrefixes: string[] expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates a PrefixList message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.PrefixList
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.PrefixList} PrefixList
                         */
                        PrefixList.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.PrefixList)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.PrefixList();
                            if (object.includedObjectPrefixes) {
                                if (!Array.isArray(object.includedObjectPrefixes))
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.PrefixList.includedObjectPrefixes: array expected");
                                message.includedObjectPrefixes = [];
                                for (var i = 0; i < object.includedObjectPrefixes.length; ++i)
                                    message.includedObjectPrefixes[i] = String(object.includedObjectPrefixes[i]);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a PrefixList message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.PrefixList
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.PrefixList} message PrefixList
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PrefixList.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.includedObjectPrefixes = [];
                            if (message.includedObjectPrefixes && message.includedObjectPrefixes.length) {
                                object.includedObjectPrefixes = [];
                                for (var j = 0; j < message.includedObjectPrefixes.length; ++j)
                                    object.includedObjectPrefixes[j] = message.includedObjectPrefixes[j];
                            }
                            return object;
                        };
    
                        /**
                         * Converts this PrefixList to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.PrefixList
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PrefixList.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for PrefixList
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.PrefixList
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        PrefixList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.PrefixList";
                        };
    
                        return PrefixList;
                    })();
    
                    v1.PutObjectHold = (function() {
    
                        /**
                         * Properties of a PutObjectHold.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IPutObjectHold
                         * @property {google.cloud.storagebatchoperations.v1.PutObjectHold.HoldStatus|null} [temporaryHold] PutObjectHold temporaryHold
                         * @property {google.cloud.storagebatchoperations.v1.PutObjectHold.HoldStatus|null} [eventBasedHold] PutObjectHold eventBasedHold
                         */
    
                        /**
                         * Constructs a new PutObjectHold.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a PutObjectHold.
                         * @implements IPutObjectHold
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IPutObjectHold=} [properties] Properties to set
                         */
                        function PutObjectHold(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * PutObjectHold temporaryHold.
                         * @member {google.cloud.storagebatchoperations.v1.PutObjectHold.HoldStatus} temporaryHold
                         * @memberof google.cloud.storagebatchoperations.v1.PutObjectHold
                         * @instance
                         */
                        PutObjectHold.prototype.temporaryHold = 0;
    
                        /**
                         * PutObjectHold eventBasedHold.
                         * @member {google.cloud.storagebatchoperations.v1.PutObjectHold.HoldStatus} eventBasedHold
                         * @memberof google.cloud.storagebatchoperations.v1.PutObjectHold
                         * @instance
                         */
                        PutObjectHold.prototype.eventBasedHold = 0;
    
                        /**
                         * Creates a new PutObjectHold instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.PutObjectHold
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IPutObjectHold=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.PutObjectHold} PutObjectHold instance
                         */
                        PutObjectHold.create = function create(properties) {
                            return new PutObjectHold(properties);
                        };
    
                        /**
                         * Encodes the specified PutObjectHold message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.PutObjectHold.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.PutObjectHold
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IPutObjectHold} message PutObjectHold message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PutObjectHold.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.temporaryHold != null && Object.hasOwnProperty.call(message, "temporaryHold"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.temporaryHold);
                            if (message.eventBasedHold != null && Object.hasOwnProperty.call(message, "eventBasedHold"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.eventBasedHold);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified PutObjectHold message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.PutObjectHold.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.PutObjectHold
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IPutObjectHold} message PutObjectHold message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PutObjectHold.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a PutObjectHold message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.PutObjectHold
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.PutObjectHold} PutObjectHold
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PutObjectHold.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.PutObjectHold();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.temporaryHold = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.eventBasedHold = reader.int32();
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
                         * Decodes a PutObjectHold message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.PutObjectHold
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.PutObjectHold} PutObjectHold
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PutObjectHold.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a PutObjectHold message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.PutObjectHold
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PutObjectHold.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.temporaryHold != null && message.hasOwnProperty("temporaryHold"))
                                switch (message.temporaryHold) {
                                default:
                                    return "temporaryHold: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            if (message.eventBasedHold != null && message.hasOwnProperty("eventBasedHold"))
                                switch (message.eventBasedHold) {
                                default:
                                    return "eventBasedHold: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            return null;
                        };
    
                        /**
                         * Creates a PutObjectHold message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.PutObjectHold
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.PutObjectHold} PutObjectHold
                         */
                        PutObjectHold.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.PutObjectHold)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.PutObjectHold();
                            switch (object.temporaryHold) {
                            default:
                                if (typeof object.temporaryHold === "number") {
                                    message.temporaryHold = object.temporaryHold;
                                    break;
                                }
                                break;
                            case "HOLD_STATUS_UNSPECIFIED":
                            case 0:
                                message.temporaryHold = 0;
                                break;
                            case "SET":
                            case 1:
                                message.temporaryHold = 1;
                                break;
                            case "UNSET":
                            case 2:
                                message.temporaryHold = 2;
                                break;
                            }
                            switch (object.eventBasedHold) {
                            default:
                                if (typeof object.eventBasedHold === "number") {
                                    message.eventBasedHold = object.eventBasedHold;
                                    break;
                                }
                                break;
                            case "HOLD_STATUS_UNSPECIFIED":
                            case 0:
                                message.eventBasedHold = 0;
                                break;
                            case "SET":
                            case 1:
                                message.eventBasedHold = 1;
                                break;
                            case "UNSET":
                            case 2:
                                message.eventBasedHold = 2;
                                break;
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a PutObjectHold message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.PutObjectHold
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.PutObjectHold} message PutObjectHold
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PutObjectHold.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.temporaryHold = options.enums === String ? "HOLD_STATUS_UNSPECIFIED" : 0;
                                object.eventBasedHold = options.enums === String ? "HOLD_STATUS_UNSPECIFIED" : 0;
                            }
                            if (message.temporaryHold != null && message.hasOwnProperty("temporaryHold"))
                                object.temporaryHold = options.enums === String ? $root.google.cloud.storagebatchoperations.v1.PutObjectHold.HoldStatus[message.temporaryHold] === undefined ? message.temporaryHold : $root.google.cloud.storagebatchoperations.v1.PutObjectHold.HoldStatus[message.temporaryHold] : message.temporaryHold;
                            if (message.eventBasedHold != null && message.hasOwnProperty("eventBasedHold"))
                                object.eventBasedHold = options.enums === String ? $root.google.cloud.storagebatchoperations.v1.PutObjectHold.HoldStatus[message.eventBasedHold] === undefined ? message.eventBasedHold : $root.google.cloud.storagebatchoperations.v1.PutObjectHold.HoldStatus[message.eventBasedHold] : message.eventBasedHold;
                            return object;
                        };
    
                        /**
                         * Converts this PutObjectHold to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.PutObjectHold
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PutObjectHold.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for PutObjectHold
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.PutObjectHold
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        PutObjectHold.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.PutObjectHold";
                        };
    
                        /**
                         * HoldStatus enum.
                         * @name google.cloud.storagebatchoperations.v1.PutObjectHold.HoldStatus
                         * @enum {number}
                         * @property {number} HOLD_STATUS_UNSPECIFIED=0 HOLD_STATUS_UNSPECIFIED value
                         * @property {number} SET=1 SET value
                         * @property {number} UNSET=2 UNSET value
                         */
                        PutObjectHold.HoldStatus = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "HOLD_STATUS_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "SET"] = 1;
                            values[valuesById[2] = "UNSET"] = 2;
                            return values;
                        })();
    
                        return PutObjectHold;
                    })();
    
                    v1.DeleteObject = (function() {
    
                        /**
                         * Properties of a DeleteObject.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IDeleteObject
                         * @property {boolean|null} [permanentObjectDeletionEnabled] DeleteObject permanentObjectDeletionEnabled
                         */
    
                        /**
                         * Constructs a new DeleteObject.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a DeleteObject.
                         * @implements IDeleteObject
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IDeleteObject=} [properties] Properties to set
                         */
                        function DeleteObject(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * DeleteObject permanentObjectDeletionEnabled.
                         * @member {boolean} permanentObjectDeletionEnabled
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteObject
                         * @instance
                         */
                        DeleteObject.prototype.permanentObjectDeletionEnabled = false;
    
                        /**
                         * Creates a new DeleteObject instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteObject
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IDeleteObject=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.DeleteObject} DeleteObject instance
                         */
                        DeleteObject.create = function create(properties) {
                            return new DeleteObject(properties);
                        };
    
                        /**
                         * Encodes the specified DeleteObject message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.DeleteObject.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteObject
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IDeleteObject} message DeleteObject message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeleteObject.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.permanentObjectDeletionEnabled != null && Object.hasOwnProperty.call(message, "permanentObjectDeletionEnabled"))
                                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.permanentObjectDeletionEnabled);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified DeleteObject message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.DeleteObject.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteObject
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IDeleteObject} message DeleteObject message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeleteObject.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a DeleteObject message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteObject
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.DeleteObject} DeleteObject
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DeleteObject.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.DeleteObject();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.permanentObjectDeletionEnabled = reader.bool();
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
                         * Decodes a DeleteObject message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteObject
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.DeleteObject} DeleteObject
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DeleteObject.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a DeleteObject message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteObject
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        DeleteObject.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.permanentObjectDeletionEnabled != null && message.hasOwnProperty("permanentObjectDeletionEnabled"))
                                if (typeof message.permanentObjectDeletionEnabled !== "boolean")
                                    return "permanentObjectDeletionEnabled: boolean expected";
                            return null;
                        };
    
                        /**
                         * Creates a DeleteObject message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteObject
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.DeleteObject} DeleteObject
                         */
                        DeleteObject.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.DeleteObject)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.DeleteObject();
                            if (object.permanentObjectDeletionEnabled != null)
                                message.permanentObjectDeletionEnabled = Boolean(object.permanentObjectDeletionEnabled);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a DeleteObject message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteObject
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.DeleteObject} message DeleteObject
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DeleteObject.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.permanentObjectDeletionEnabled = false;
                            if (message.permanentObjectDeletionEnabled != null && message.hasOwnProperty("permanentObjectDeletionEnabled"))
                                object.permanentObjectDeletionEnabled = message.permanentObjectDeletionEnabled;
                            return object;
                        };
    
                        /**
                         * Converts this DeleteObject to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteObject
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DeleteObject.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for DeleteObject
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.DeleteObject
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        DeleteObject.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.DeleteObject";
                        };
    
                        return DeleteObject;
                    })();
    
                    v1.RewriteObject = (function() {
    
                        /**
                         * Properties of a RewriteObject.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IRewriteObject
                         * @property {string|null} [kmsKey] RewriteObject kmsKey
                         */
    
                        /**
                         * Constructs a new RewriteObject.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a RewriteObject.
                         * @implements IRewriteObject
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IRewriteObject=} [properties] Properties to set
                         */
                        function RewriteObject(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * RewriteObject kmsKey.
                         * @member {string|null|undefined} kmsKey
                         * @memberof google.cloud.storagebatchoperations.v1.RewriteObject
                         * @instance
                         */
                        RewriteObject.prototype.kmsKey = null;
    
                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;
    
                        // Virtual OneOf for proto3 optional field
                        Object.defineProperty(RewriteObject.prototype, "_kmsKey", {
                            get: $util.oneOfGetter($oneOfFields = ["kmsKey"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * Creates a new RewriteObject instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.RewriteObject
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IRewriteObject=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.RewriteObject} RewriteObject instance
                         */
                        RewriteObject.create = function create(properties) {
                            return new RewriteObject(properties);
                        };
    
                        /**
                         * Encodes the specified RewriteObject message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.RewriteObject.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.RewriteObject
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IRewriteObject} message RewriteObject message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RewriteObject.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.kmsKey != null && Object.hasOwnProperty.call(message, "kmsKey"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.kmsKey);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified RewriteObject message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.RewriteObject.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.RewriteObject
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IRewriteObject} message RewriteObject message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        RewriteObject.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a RewriteObject message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.RewriteObject
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.RewriteObject} RewriteObject
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RewriteObject.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.RewriteObject();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.kmsKey = reader.string();
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
                         * Decodes a RewriteObject message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.RewriteObject
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.RewriteObject} RewriteObject
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RewriteObject.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a RewriteObject message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.RewriteObject
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        RewriteObject.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.kmsKey != null && message.hasOwnProperty("kmsKey")) {
                                properties._kmsKey = 1;
                                if (!$util.isString(message.kmsKey))
                                    return "kmsKey: string expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates a RewriteObject message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.RewriteObject
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.RewriteObject} RewriteObject
                         */
                        RewriteObject.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.RewriteObject)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.RewriteObject();
                            if (object.kmsKey != null)
                                message.kmsKey = String(object.kmsKey);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a RewriteObject message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.RewriteObject
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.RewriteObject} message RewriteObject
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        RewriteObject.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (message.kmsKey != null && message.hasOwnProperty("kmsKey")) {
                                object.kmsKey = message.kmsKey;
                                if (options.oneofs)
                                    object._kmsKey = "kmsKey";
                            }
                            return object;
                        };
    
                        /**
                         * Converts this RewriteObject to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.RewriteObject
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        RewriteObject.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for RewriteObject
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.RewriteObject
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        RewriteObject.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.RewriteObject";
                        };
    
                        return RewriteObject;
                    })();
    
                    v1.PutMetadata = (function() {
    
                        /**
                         * Properties of a PutMetadata.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IPutMetadata
                         * @property {string|null} [contentDisposition] PutMetadata contentDisposition
                         * @property {string|null} [contentEncoding] PutMetadata contentEncoding
                         * @property {string|null} [contentLanguage] PutMetadata contentLanguage
                         * @property {string|null} [contentType] PutMetadata contentType
                         * @property {string|null} [cacheControl] PutMetadata cacheControl
                         * @property {string|null} [customTime] PutMetadata customTime
                         * @property {Object.<string,string>|null} [customMetadata] PutMetadata customMetadata
                         */
    
                        /**
                         * Constructs a new PutMetadata.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a PutMetadata.
                         * @implements IPutMetadata
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IPutMetadata=} [properties] Properties to set
                         */
                        function PutMetadata(properties) {
                            this.customMetadata = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * PutMetadata contentDisposition.
                         * @member {string|null|undefined} contentDisposition
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @instance
                         */
                        PutMetadata.prototype.contentDisposition = null;
    
                        /**
                         * PutMetadata contentEncoding.
                         * @member {string|null|undefined} contentEncoding
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @instance
                         */
                        PutMetadata.prototype.contentEncoding = null;
    
                        /**
                         * PutMetadata contentLanguage.
                         * @member {string|null|undefined} contentLanguage
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @instance
                         */
                        PutMetadata.prototype.contentLanguage = null;
    
                        /**
                         * PutMetadata contentType.
                         * @member {string|null|undefined} contentType
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @instance
                         */
                        PutMetadata.prototype.contentType = null;
    
                        /**
                         * PutMetadata cacheControl.
                         * @member {string|null|undefined} cacheControl
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @instance
                         */
                        PutMetadata.prototype.cacheControl = null;
    
                        /**
                         * PutMetadata customTime.
                         * @member {string|null|undefined} customTime
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @instance
                         */
                        PutMetadata.prototype.customTime = null;
    
                        /**
                         * PutMetadata customMetadata.
                         * @member {Object.<string,string>} customMetadata
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @instance
                         */
                        PutMetadata.prototype.customMetadata = $util.emptyObject;
    
                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;
    
                        // Virtual OneOf for proto3 optional field
                        Object.defineProperty(PutMetadata.prototype, "_contentDisposition", {
                            get: $util.oneOfGetter($oneOfFields = ["contentDisposition"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        // Virtual OneOf for proto3 optional field
                        Object.defineProperty(PutMetadata.prototype, "_contentEncoding", {
                            get: $util.oneOfGetter($oneOfFields = ["contentEncoding"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        // Virtual OneOf for proto3 optional field
                        Object.defineProperty(PutMetadata.prototype, "_contentLanguage", {
                            get: $util.oneOfGetter($oneOfFields = ["contentLanguage"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        // Virtual OneOf for proto3 optional field
                        Object.defineProperty(PutMetadata.prototype, "_contentType", {
                            get: $util.oneOfGetter($oneOfFields = ["contentType"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        // Virtual OneOf for proto3 optional field
                        Object.defineProperty(PutMetadata.prototype, "_cacheControl", {
                            get: $util.oneOfGetter($oneOfFields = ["cacheControl"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        // Virtual OneOf for proto3 optional field
                        Object.defineProperty(PutMetadata.prototype, "_customTime", {
                            get: $util.oneOfGetter($oneOfFields = ["customTime"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * Creates a new PutMetadata instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IPutMetadata=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.PutMetadata} PutMetadata instance
                         */
                        PutMetadata.create = function create(properties) {
                            return new PutMetadata(properties);
                        };
    
                        /**
                         * Encodes the specified PutMetadata message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.PutMetadata.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IPutMetadata} message PutMetadata message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PutMetadata.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.contentDisposition != null && Object.hasOwnProperty.call(message, "contentDisposition"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.contentDisposition);
                            if (message.contentEncoding != null && Object.hasOwnProperty.call(message, "contentEncoding"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.contentEncoding);
                            if (message.contentLanguage != null && Object.hasOwnProperty.call(message, "contentLanguage"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.contentLanguage);
                            if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.contentType);
                            if (message.cacheControl != null && Object.hasOwnProperty.call(message, "cacheControl"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.cacheControl);
                            if (message.customTime != null && Object.hasOwnProperty.call(message, "customTime"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.customTime);
                            if (message.customMetadata != null && Object.hasOwnProperty.call(message, "customMetadata"))
                                for (var keys = Object.keys(message.customMetadata), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.customMetadata[keys[i]]).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified PutMetadata message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.PutMetadata.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IPutMetadata} message PutMetadata message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        PutMetadata.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a PutMetadata message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.PutMetadata} PutMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PutMetadata.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.PutMetadata(), key, value;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.contentDisposition = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.contentEncoding = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.contentLanguage = reader.string();
                                        break;
                                    }
                                case 4: {
                                        message.contentType = reader.string();
                                        break;
                                    }
                                case 5: {
                                        message.cacheControl = reader.string();
                                        break;
                                    }
                                case 6: {
                                        message.customTime = reader.string();
                                        break;
                                    }
                                case 7: {
                                        if (message.customMetadata === $util.emptyObject)
                                            message.customMetadata = {};
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
                                        message.customMetadata[key] = value;
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
                         * Decodes a PutMetadata message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.PutMetadata} PutMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        PutMetadata.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a PutMetadata message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        PutMetadata.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.contentDisposition != null && message.hasOwnProperty("contentDisposition")) {
                                properties._contentDisposition = 1;
                                if (!$util.isString(message.contentDisposition))
                                    return "contentDisposition: string expected";
                            }
                            if (message.contentEncoding != null && message.hasOwnProperty("contentEncoding")) {
                                properties._contentEncoding = 1;
                                if (!$util.isString(message.contentEncoding))
                                    return "contentEncoding: string expected";
                            }
                            if (message.contentLanguage != null && message.hasOwnProperty("contentLanguage")) {
                                properties._contentLanguage = 1;
                                if (!$util.isString(message.contentLanguage))
                                    return "contentLanguage: string expected";
                            }
                            if (message.contentType != null && message.hasOwnProperty("contentType")) {
                                properties._contentType = 1;
                                if (!$util.isString(message.contentType))
                                    return "contentType: string expected";
                            }
                            if (message.cacheControl != null && message.hasOwnProperty("cacheControl")) {
                                properties._cacheControl = 1;
                                if (!$util.isString(message.cacheControl))
                                    return "cacheControl: string expected";
                            }
                            if (message.customTime != null && message.hasOwnProperty("customTime")) {
                                properties._customTime = 1;
                                if (!$util.isString(message.customTime))
                                    return "customTime: string expected";
                            }
                            if (message.customMetadata != null && message.hasOwnProperty("customMetadata")) {
                                if (!$util.isObject(message.customMetadata))
                                    return "customMetadata: object expected";
                                var key = Object.keys(message.customMetadata);
                                for (var i = 0; i < key.length; ++i)
                                    if (!$util.isString(message.customMetadata[key[i]]))
                                        return "customMetadata: string{k:string} expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates a PutMetadata message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.PutMetadata} PutMetadata
                         */
                        PutMetadata.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.PutMetadata)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.PutMetadata();
                            if (object.contentDisposition != null)
                                message.contentDisposition = String(object.contentDisposition);
                            if (object.contentEncoding != null)
                                message.contentEncoding = String(object.contentEncoding);
                            if (object.contentLanguage != null)
                                message.contentLanguage = String(object.contentLanguage);
                            if (object.contentType != null)
                                message.contentType = String(object.contentType);
                            if (object.cacheControl != null)
                                message.cacheControl = String(object.cacheControl);
                            if (object.customTime != null)
                                message.customTime = String(object.customTime);
                            if (object.customMetadata) {
                                if (typeof object.customMetadata !== "object")
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.PutMetadata.customMetadata: object expected");
                                message.customMetadata = {};
                                for (var keys = Object.keys(object.customMetadata), i = 0; i < keys.length; ++i)
                                    message.customMetadata[keys[i]] = String(object.customMetadata[keys[i]]);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a PutMetadata message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.PutMetadata} message PutMetadata
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        PutMetadata.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.objects || options.defaults)
                                object.customMetadata = {};
                            if (message.contentDisposition != null && message.hasOwnProperty("contentDisposition")) {
                                object.contentDisposition = message.contentDisposition;
                                if (options.oneofs)
                                    object._contentDisposition = "contentDisposition";
                            }
                            if (message.contentEncoding != null && message.hasOwnProperty("contentEncoding")) {
                                object.contentEncoding = message.contentEncoding;
                                if (options.oneofs)
                                    object._contentEncoding = "contentEncoding";
                            }
                            if (message.contentLanguage != null && message.hasOwnProperty("contentLanguage")) {
                                object.contentLanguage = message.contentLanguage;
                                if (options.oneofs)
                                    object._contentLanguage = "contentLanguage";
                            }
                            if (message.contentType != null && message.hasOwnProperty("contentType")) {
                                object.contentType = message.contentType;
                                if (options.oneofs)
                                    object._contentType = "contentType";
                            }
                            if (message.cacheControl != null && message.hasOwnProperty("cacheControl")) {
                                object.cacheControl = message.cacheControl;
                                if (options.oneofs)
                                    object._cacheControl = "cacheControl";
                            }
                            if (message.customTime != null && message.hasOwnProperty("customTime")) {
                                object.customTime = message.customTime;
                                if (options.oneofs)
                                    object._customTime = "customTime";
                            }
                            var keys2;
                            if (message.customMetadata && (keys2 = Object.keys(message.customMetadata)).length) {
                                object.customMetadata = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.customMetadata[keys2[j]] = message.customMetadata[keys2[j]];
                            }
                            return object;
                        };
    
                        /**
                         * Converts this PutMetadata to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        PutMetadata.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for PutMetadata
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.PutMetadata
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        PutMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.PutMetadata";
                        };
    
                        return PutMetadata;
                    })();
    
                    v1.ErrorSummary = (function() {
    
                        /**
                         * Properties of an ErrorSummary.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IErrorSummary
                         * @property {google.rpc.Code|null} [errorCode] ErrorSummary errorCode
                         * @property {number|Long|null} [errorCount] ErrorSummary errorCount
                         * @property {Array.<google.cloud.storagebatchoperations.v1.IErrorLogEntry>|null} [errorLogEntries] ErrorSummary errorLogEntries
                         */
    
                        /**
                         * Constructs a new ErrorSummary.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents an ErrorSummary.
                         * @implements IErrorSummary
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IErrorSummary=} [properties] Properties to set
                         */
                        function ErrorSummary(properties) {
                            this.errorLogEntries = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ErrorSummary errorCode.
                         * @member {google.rpc.Code} errorCode
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorSummary
                         * @instance
                         */
                        ErrorSummary.prototype.errorCode = 0;
    
                        /**
                         * ErrorSummary errorCount.
                         * @member {number|Long} errorCount
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorSummary
                         * @instance
                         */
                        ErrorSummary.prototype.errorCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                        /**
                         * ErrorSummary errorLogEntries.
                         * @member {Array.<google.cloud.storagebatchoperations.v1.IErrorLogEntry>} errorLogEntries
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorSummary
                         * @instance
                         */
                        ErrorSummary.prototype.errorLogEntries = $util.emptyArray;
    
                        /**
                         * Creates a new ErrorSummary instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorSummary
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IErrorSummary=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.ErrorSummary} ErrorSummary instance
                         */
                        ErrorSummary.create = function create(properties) {
                            return new ErrorSummary(properties);
                        };
    
                        /**
                         * Encodes the specified ErrorSummary message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.ErrorSummary.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorSummary
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IErrorSummary} message ErrorSummary message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ErrorSummary.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
                            if (message.errorCount != null && Object.hasOwnProperty.call(message, "errorCount"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.errorCount);
                            if (message.errorLogEntries != null && message.errorLogEntries.length)
                                for (var i = 0; i < message.errorLogEntries.length; ++i)
                                    $root.google.cloud.storagebatchoperations.v1.ErrorLogEntry.encode(message.errorLogEntries[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ErrorSummary message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.ErrorSummary.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorSummary
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IErrorSummary} message ErrorSummary message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ErrorSummary.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an ErrorSummary message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorSummary
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.ErrorSummary} ErrorSummary
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ErrorSummary.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.ErrorSummary();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.errorCode = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.errorCount = reader.int64();
                                        break;
                                    }
                                case 3: {
                                        if (!(message.errorLogEntries && message.errorLogEntries.length))
                                            message.errorLogEntries = [];
                                        message.errorLogEntries.push($root.google.cloud.storagebatchoperations.v1.ErrorLogEntry.decode(reader, reader.uint32()));
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
                         * Decodes an ErrorSummary message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorSummary
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.ErrorSummary} ErrorSummary
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ErrorSummary.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an ErrorSummary message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorSummary
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ErrorSummary.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                                switch (message.errorCode) {
                                default:
                                    return "errorCode: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 16:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                case 12:
                                case 13:
                                case 14:
                                case 15:
                                    break;
                                }
                            if (message.errorCount != null && message.hasOwnProperty("errorCount"))
                                if (!$util.isInteger(message.errorCount) && !(message.errorCount && $util.isInteger(message.errorCount.low) && $util.isInteger(message.errorCount.high)))
                                    return "errorCount: integer|Long expected";
                            if (message.errorLogEntries != null && message.hasOwnProperty("errorLogEntries")) {
                                if (!Array.isArray(message.errorLogEntries))
                                    return "errorLogEntries: array expected";
                                for (var i = 0; i < message.errorLogEntries.length; ++i) {
                                    var error = $root.google.cloud.storagebatchoperations.v1.ErrorLogEntry.verify(message.errorLogEntries[i]);
                                    if (error)
                                        return "errorLogEntries." + error;
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates an ErrorSummary message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorSummary
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.ErrorSummary} ErrorSummary
                         */
                        ErrorSummary.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.ErrorSummary)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.ErrorSummary();
                            switch (object.errorCode) {
                            default:
                                if (typeof object.errorCode === "number") {
                                    message.errorCode = object.errorCode;
                                    break;
                                }
                                break;
                            case "OK":
                            case 0:
                                message.errorCode = 0;
                                break;
                            case "CANCELLED":
                            case 1:
                                message.errorCode = 1;
                                break;
                            case "UNKNOWN":
                            case 2:
                                message.errorCode = 2;
                                break;
                            case "INVALID_ARGUMENT":
                            case 3:
                                message.errorCode = 3;
                                break;
                            case "DEADLINE_EXCEEDED":
                            case 4:
                                message.errorCode = 4;
                                break;
                            case "NOT_FOUND":
                            case 5:
                                message.errorCode = 5;
                                break;
                            case "ALREADY_EXISTS":
                            case 6:
                                message.errorCode = 6;
                                break;
                            case "PERMISSION_DENIED":
                            case 7:
                                message.errorCode = 7;
                                break;
                            case "UNAUTHENTICATED":
                            case 16:
                                message.errorCode = 16;
                                break;
                            case "RESOURCE_EXHAUSTED":
                            case 8:
                                message.errorCode = 8;
                                break;
                            case "FAILED_PRECONDITION":
                            case 9:
                                message.errorCode = 9;
                                break;
                            case "ABORTED":
                            case 10:
                                message.errorCode = 10;
                                break;
                            case "OUT_OF_RANGE":
                            case 11:
                                message.errorCode = 11;
                                break;
                            case "UNIMPLEMENTED":
                            case 12:
                                message.errorCode = 12;
                                break;
                            case "INTERNAL":
                            case 13:
                                message.errorCode = 13;
                                break;
                            case "UNAVAILABLE":
                            case 14:
                                message.errorCode = 14;
                                break;
                            case "DATA_LOSS":
                            case 15:
                                message.errorCode = 15;
                                break;
                            }
                            if (object.errorCount != null)
                                if ($util.Long)
                                    (message.errorCount = $util.Long.fromValue(object.errorCount)).unsigned = false;
                                else if (typeof object.errorCount === "string")
                                    message.errorCount = parseInt(object.errorCount, 10);
                                else if (typeof object.errorCount === "number")
                                    message.errorCount = object.errorCount;
                                else if (typeof object.errorCount === "object")
                                    message.errorCount = new $util.LongBits(object.errorCount.low >>> 0, object.errorCount.high >>> 0).toNumber();
                            if (object.errorLogEntries) {
                                if (!Array.isArray(object.errorLogEntries))
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.ErrorSummary.errorLogEntries: array expected");
                                message.errorLogEntries = [];
                                for (var i = 0; i < object.errorLogEntries.length; ++i) {
                                    if (typeof object.errorLogEntries[i] !== "object")
                                        throw TypeError(".google.cloud.storagebatchoperations.v1.ErrorSummary.errorLogEntries: object expected");
                                    message.errorLogEntries[i] = $root.google.cloud.storagebatchoperations.v1.ErrorLogEntry.fromObject(object.errorLogEntries[i]);
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an ErrorSummary message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorSummary
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ErrorSummary} message ErrorSummary
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ErrorSummary.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.errorLogEntries = [];
                            if (options.defaults) {
                                object.errorCode = options.enums === String ? "OK" : 0;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.errorCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.errorCount = options.longs === String ? "0" : 0;
                            }
                            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                                object.errorCode = options.enums === String ? $root.google.rpc.Code[message.errorCode] === undefined ? message.errorCode : $root.google.rpc.Code[message.errorCode] : message.errorCode;
                            if (message.errorCount != null && message.hasOwnProperty("errorCount"))
                                if (typeof message.errorCount === "number")
                                    object.errorCount = options.longs === String ? String(message.errorCount) : message.errorCount;
                                else
                                    object.errorCount = options.longs === String ? $util.Long.prototype.toString.call(message.errorCount) : options.longs === Number ? new $util.LongBits(message.errorCount.low >>> 0, message.errorCount.high >>> 0).toNumber() : message.errorCount;
                            if (message.errorLogEntries && message.errorLogEntries.length) {
                                object.errorLogEntries = [];
                                for (var j = 0; j < message.errorLogEntries.length; ++j)
                                    object.errorLogEntries[j] = $root.google.cloud.storagebatchoperations.v1.ErrorLogEntry.toObject(message.errorLogEntries[j], options);
                            }
                            return object;
                        };
    
                        /**
                         * Converts this ErrorSummary to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorSummary
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ErrorSummary.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ErrorSummary
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorSummary
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ErrorSummary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.ErrorSummary";
                        };
    
                        return ErrorSummary;
                    })();
    
                    v1.ErrorLogEntry = (function() {
    
                        /**
                         * Properties of an ErrorLogEntry.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface IErrorLogEntry
                         * @property {string|null} [objectUri] ErrorLogEntry objectUri
                         * @property {Array.<string>|null} [errorDetails] ErrorLogEntry errorDetails
                         */
    
                        /**
                         * Constructs a new ErrorLogEntry.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents an ErrorLogEntry.
                         * @implements IErrorLogEntry
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.IErrorLogEntry=} [properties] Properties to set
                         */
                        function ErrorLogEntry(properties) {
                            this.errorDetails = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ErrorLogEntry objectUri.
                         * @member {string} objectUri
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorLogEntry
                         * @instance
                         */
                        ErrorLogEntry.prototype.objectUri = "";
    
                        /**
                         * ErrorLogEntry errorDetails.
                         * @member {Array.<string>} errorDetails
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorLogEntry
                         * @instance
                         */
                        ErrorLogEntry.prototype.errorDetails = $util.emptyArray;
    
                        /**
                         * Creates a new ErrorLogEntry instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorLogEntry
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IErrorLogEntry=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.ErrorLogEntry} ErrorLogEntry instance
                         */
                        ErrorLogEntry.create = function create(properties) {
                            return new ErrorLogEntry(properties);
                        };
    
                        /**
                         * Encodes the specified ErrorLogEntry message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.ErrorLogEntry.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorLogEntry
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IErrorLogEntry} message ErrorLogEntry message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ErrorLogEntry.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.objectUri != null && Object.hasOwnProperty.call(message, "objectUri"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.objectUri);
                            if (message.errorDetails != null && message.errorDetails.length)
                                for (var i = 0; i < message.errorDetails.length; ++i)
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.errorDetails[i]);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ErrorLogEntry message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.ErrorLogEntry.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorLogEntry
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.IErrorLogEntry} message ErrorLogEntry message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ErrorLogEntry.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an ErrorLogEntry message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorLogEntry
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.ErrorLogEntry} ErrorLogEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ErrorLogEntry.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.ErrorLogEntry();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.objectUri = reader.string();
                                        break;
                                    }
                                case 3: {
                                        if (!(message.errorDetails && message.errorDetails.length))
                                            message.errorDetails = [];
                                        message.errorDetails.push(reader.string());
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
                         * Decodes an ErrorLogEntry message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorLogEntry
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.ErrorLogEntry} ErrorLogEntry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ErrorLogEntry.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an ErrorLogEntry message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorLogEntry
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ErrorLogEntry.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.objectUri != null && message.hasOwnProperty("objectUri"))
                                if (!$util.isString(message.objectUri))
                                    return "objectUri: string expected";
                            if (message.errorDetails != null && message.hasOwnProperty("errorDetails")) {
                                if (!Array.isArray(message.errorDetails))
                                    return "errorDetails: array expected";
                                for (var i = 0; i < message.errorDetails.length; ++i)
                                    if (!$util.isString(message.errorDetails[i]))
                                        return "errorDetails: string[] expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates an ErrorLogEntry message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorLogEntry
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.ErrorLogEntry} ErrorLogEntry
                         */
                        ErrorLogEntry.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.ErrorLogEntry)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.ErrorLogEntry();
                            if (object.objectUri != null)
                                message.objectUri = String(object.objectUri);
                            if (object.errorDetails) {
                                if (!Array.isArray(object.errorDetails))
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.ErrorLogEntry.errorDetails: array expected");
                                message.errorDetails = [];
                                for (var i = 0; i < object.errorDetails.length; ++i)
                                    message.errorDetails[i] = String(object.errorDetails[i]);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an ErrorLogEntry message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorLogEntry
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ErrorLogEntry} message ErrorLogEntry
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ErrorLogEntry.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.errorDetails = [];
                            if (options.defaults)
                                object.objectUri = "";
                            if (message.objectUri != null && message.hasOwnProperty("objectUri"))
                                object.objectUri = message.objectUri;
                            if (message.errorDetails && message.errorDetails.length) {
                                object.errorDetails = [];
                                for (var j = 0; j < message.errorDetails.length; ++j)
                                    object.errorDetails[j] = message.errorDetails[j];
                            }
                            return object;
                        };
    
                        /**
                         * Converts this ErrorLogEntry to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorLogEntry
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ErrorLogEntry.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ErrorLogEntry
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.ErrorLogEntry
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ErrorLogEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.ErrorLogEntry";
                        };
    
                        return ErrorLogEntry;
                    })();
    
                    v1.Counters = (function() {
    
                        /**
                         * Properties of a Counters.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface ICounters
                         * @property {number|Long|null} [totalObjectCount] Counters totalObjectCount
                         * @property {number|Long|null} [succeededObjectCount] Counters succeededObjectCount
                         * @property {number|Long|null} [failedObjectCount] Counters failedObjectCount
                         */
    
                        /**
                         * Constructs a new Counters.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a Counters.
                         * @implements ICounters
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.ICounters=} [properties] Properties to set
                         */
                        function Counters(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Counters totalObjectCount.
                         * @member {number|Long} totalObjectCount
                         * @memberof google.cloud.storagebatchoperations.v1.Counters
                         * @instance
                         */
                        Counters.prototype.totalObjectCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                        /**
                         * Counters succeededObjectCount.
                         * @member {number|Long} succeededObjectCount
                         * @memberof google.cloud.storagebatchoperations.v1.Counters
                         * @instance
                         */
                        Counters.prototype.succeededObjectCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                        /**
                         * Counters failedObjectCount.
                         * @member {number|Long} failedObjectCount
                         * @memberof google.cloud.storagebatchoperations.v1.Counters
                         * @instance
                         */
                        Counters.prototype.failedObjectCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                        /**
                         * Creates a new Counters instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.Counters
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ICounters=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.Counters} Counters instance
                         */
                        Counters.create = function create(properties) {
                            return new Counters(properties);
                        };
    
                        /**
                         * Encodes the specified Counters message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.Counters.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.Counters
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ICounters} message Counters message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Counters.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.totalObjectCount != null && Object.hasOwnProperty.call(message, "totalObjectCount"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.totalObjectCount);
                            if (message.succeededObjectCount != null && Object.hasOwnProperty.call(message, "succeededObjectCount"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.succeededObjectCount);
                            if (message.failedObjectCount != null && Object.hasOwnProperty.call(message, "failedObjectCount"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.failedObjectCount);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Counters message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.Counters.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.Counters
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ICounters} message Counters message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Counters.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a Counters message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.Counters
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.Counters} Counters
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Counters.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.Counters();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.totalObjectCount = reader.int64();
                                        break;
                                    }
                                case 2: {
                                        message.succeededObjectCount = reader.int64();
                                        break;
                                    }
                                case 3: {
                                        message.failedObjectCount = reader.int64();
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
                         * Decodes a Counters message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.Counters
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.Counters} Counters
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Counters.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a Counters message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.Counters
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Counters.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.totalObjectCount != null && message.hasOwnProperty("totalObjectCount"))
                                if (!$util.isInteger(message.totalObjectCount) && !(message.totalObjectCount && $util.isInteger(message.totalObjectCount.low) && $util.isInteger(message.totalObjectCount.high)))
                                    return "totalObjectCount: integer|Long expected";
                            if (message.succeededObjectCount != null && message.hasOwnProperty("succeededObjectCount"))
                                if (!$util.isInteger(message.succeededObjectCount) && !(message.succeededObjectCount && $util.isInteger(message.succeededObjectCount.low) && $util.isInteger(message.succeededObjectCount.high)))
                                    return "succeededObjectCount: integer|Long expected";
                            if (message.failedObjectCount != null && message.hasOwnProperty("failedObjectCount"))
                                if (!$util.isInteger(message.failedObjectCount) && !(message.failedObjectCount && $util.isInteger(message.failedObjectCount.low) && $util.isInteger(message.failedObjectCount.high)))
                                    return "failedObjectCount: integer|Long expected";
                            return null;
                        };
    
                        /**
                         * Creates a Counters message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.Counters
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.Counters} Counters
                         */
                        Counters.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.Counters)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.Counters();
                            if (object.totalObjectCount != null)
                                if ($util.Long)
                                    (message.totalObjectCount = $util.Long.fromValue(object.totalObjectCount)).unsigned = false;
                                else if (typeof object.totalObjectCount === "string")
                                    message.totalObjectCount = parseInt(object.totalObjectCount, 10);
                                else if (typeof object.totalObjectCount === "number")
                                    message.totalObjectCount = object.totalObjectCount;
                                else if (typeof object.totalObjectCount === "object")
                                    message.totalObjectCount = new $util.LongBits(object.totalObjectCount.low >>> 0, object.totalObjectCount.high >>> 0).toNumber();
                            if (object.succeededObjectCount != null)
                                if ($util.Long)
                                    (message.succeededObjectCount = $util.Long.fromValue(object.succeededObjectCount)).unsigned = false;
                                else if (typeof object.succeededObjectCount === "string")
                                    message.succeededObjectCount = parseInt(object.succeededObjectCount, 10);
                                else if (typeof object.succeededObjectCount === "number")
                                    message.succeededObjectCount = object.succeededObjectCount;
                                else if (typeof object.succeededObjectCount === "object")
                                    message.succeededObjectCount = new $util.LongBits(object.succeededObjectCount.low >>> 0, object.succeededObjectCount.high >>> 0).toNumber();
                            if (object.failedObjectCount != null)
                                if ($util.Long)
                                    (message.failedObjectCount = $util.Long.fromValue(object.failedObjectCount)).unsigned = false;
                                else if (typeof object.failedObjectCount === "string")
                                    message.failedObjectCount = parseInt(object.failedObjectCount, 10);
                                else if (typeof object.failedObjectCount === "number")
                                    message.failedObjectCount = object.failedObjectCount;
                                else if (typeof object.failedObjectCount === "object")
                                    message.failedObjectCount = new $util.LongBits(object.failedObjectCount.low >>> 0, object.failedObjectCount.high >>> 0).toNumber();
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a Counters message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.Counters
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.Counters} message Counters
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Counters.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.totalObjectCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.totalObjectCount = options.longs === String ? "0" : 0;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.succeededObjectCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.succeededObjectCount = options.longs === String ? "0" : 0;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.failedObjectCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.failedObjectCount = options.longs === String ? "0" : 0;
                            }
                            if (message.totalObjectCount != null && message.hasOwnProperty("totalObjectCount"))
                                if (typeof message.totalObjectCount === "number")
                                    object.totalObjectCount = options.longs === String ? String(message.totalObjectCount) : message.totalObjectCount;
                                else
                                    object.totalObjectCount = options.longs === String ? $util.Long.prototype.toString.call(message.totalObjectCount) : options.longs === Number ? new $util.LongBits(message.totalObjectCount.low >>> 0, message.totalObjectCount.high >>> 0).toNumber() : message.totalObjectCount;
                            if (message.succeededObjectCount != null && message.hasOwnProperty("succeededObjectCount"))
                                if (typeof message.succeededObjectCount === "number")
                                    object.succeededObjectCount = options.longs === String ? String(message.succeededObjectCount) : message.succeededObjectCount;
                                else
                                    object.succeededObjectCount = options.longs === String ? $util.Long.prototype.toString.call(message.succeededObjectCount) : options.longs === Number ? new $util.LongBits(message.succeededObjectCount.low >>> 0, message.succeededObjectCount.high >>> 0).toNumber() : message.succeededObjectCount;
                            if (message.failedObjectCount != null && message.hasOwnProperty("failedObjectCount"))
                                if (typeof message.failedObjectCount === "number")
                                    object.failedObjectCount = options.longs === String ? String(message.failedObjectCount) : message.failedObjectCount;
                                else
                                    object.failedObjectCount = options.longs === String ? $util.Long.prototype.toString.call(message.failedObjectCount) : options.longs === Number ? new $util.LongBits(message.failedObjectCount.low >>> 0, message.failedObjectCount.high >>> 0).toNumber() : message.failedObjectCount;
                            return object;
                        };
    
                        /**
                         * Converts this Counters to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.Counters
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Counters.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for Counters
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.Counters
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Counters.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.Counters";
                        };
    
                        return Counters;
                    })();
    
                    v1.LoggingConfig = (function() {
    
                        /**
                         * Properties of a LoggingConfig.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @interface ILoggingConfig
                         * @property {Array.<google.cloud.storagebatchoperations.v1.LoggingConfig.LoggableAction>|null} [logActions] LoggingConfig logActions
                         * @property {Array.<google.cloud.storagebatchoperations.v1.LoggingConfig.LoggableActionState>|null} [logActionStates] LoggingConfig logActionStates
                         */
    
                        /**
                         * Constructs a new LoggingConfig.
                         * @memberof google.cloud.storagebatchoperations.v1
                         * @classdesc Represents a LoggingConfig.
                         * @implements ILoggingConfig
                         * @constructor
                         * @param {google.cloud.storagebatchoperations.v1.ILoggingConfig=} [properties] Properties to set
                         */
                        function LoggingConfig(properties) {
                            this.logActions = [];
                            this.logActionStates = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * LoggingConfig logActions.
                         * @member {Array.<google.cloud.storagebatchoperations.v1.LoggingConfig.LoggableAction>} logActions
                         * @memberof google.cloud.storagebatchoperations.v1.LoggingConfig
                         * @instance
                         */
                        LoggingConfig.prototype.logActions = $util.emptyArray;
    
                        /**
                         * LoggingConfig logActionStates.
                         * @member {Array.<google.cloud.storagebatchoperations.v1.LoggingConfig.LoggableActionState>} logActionStates
                         * @memberof google.cloud.storagebatchoperations.v1.LoggingConfig
                         * @instance
                         */
                        LoggingConfig.prototype.logActionStates = $util.emptyArray;
    
                        /**
                         * Creates a new LoggingConfig instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.storagebatchoperations.v1.LoggingConfig
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ILoggingConfig=} [properties] Properties to set
                         * @returns {google.cloud.storagebatchoperations.v1.LoggingConfig} LoggingConfig instance
                         */
                        LoggingConfig.create = function create(properties) {
                            return new LoggingConfig(properties);
                        };
    
                        /**
                         * Encodes the specified LoggingConfig message. Does not implicitly {@link google.cloud.storagebatchoperations.v1.LoggingConfig.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.storagebatchoperations.v1.LoggingConfig
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ILoggingConfig} message LoggingConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        LoggingConfig.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.logActions != null && message.logActions.length) {
                                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                                for (var i = 0; i < message.logActions.length; ++i)
                                    writer.int32(message.logActions[i]);
                                writer.ldelim();
                            }
                            if (message.logActionStates != null && message.logActionStates.length) {
                                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                                for (var i = 0; i < message.logActionStates.length; ++i)
                                    writer.int32(message.logActionStates[i]);
                                writer.ldelim();
                            }
                            return writer;
                        };
    
                        /**
                         * Encodes the specified LoggingConfig message, length delimited. Does not implicitly {@link google.cloud.storagebatchoperations.v1.LoggingConfig.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.LoggingConfig
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.ILoggingConfig} message LoggingConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        LoggingConfig.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a LoggingConfig message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.storagebatchoperations.v1.LoggingConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.storagebatchoperations.v1.LoggingConfig} LoggingConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        LoggingConfig.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.storagebatchoperations.v1.LoggingConfig();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.logActions && message.logActions.length))
                                            message.logActions = [];
                                        if ((tag & 7) === 2) {
                                            var end2 = reader.uint32() + reader.pos;
                                            while (reader.pos < end2)
                                                message.logActions.push(reader.int32());
                                        } else
                                            message.logActions.push(reader.int32());
                                        break;
                                    }
                                case 2: {
                                        if (!(message.logActionStates && message.logActionStates.length))
                                            message.logActionStates = [];
                                        if ((tag & 7) === 2) {
                                            var end2 = reader.uint32() + reader.pos;
                                            while (reader.pos < end2)
                                                message.logActionStates.push(reader.int32());
                                        } else
                                            message.logActionStates.push(reader.int32());
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
                         * Decodes a LoggingConfig message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.storagebatchoperations.v1.LoggingConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.storagebatchoperations.v1.LoggingConfig} LoggingConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        LoggingConfig.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a LoggingConfig message.
                         * @function verify
                         * @memberof google.cloud.storagebatchoperations.v1.LoggingConfig
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        LoggingConfig.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.logActions != null && message.hasOwnProperty("logActions")) {
                                if (!Array.isArray(message.logActions))
                                    return "logActions: array expected";
                                for (var i = 0; i < message.logActions.length; ++i)
                                    switch (message.logActions[i]) {
                                    default:
                                        return "logActions: enum value[] expected";
                                    case 0:
                                    case 6:
                                        break;
                                    }
                            }
                            if (message.logActionStates != null && message.hasOwnProperty("logActionStates")) {
                                if (!Array.isArray(message.logActionStates))
                                    return "logActionStates: array expected";
                                for (var i = 0; i < message.logActionStates.length; ++i)
                                    switch (message.logActionStates[i]) {
                                    default:
                                        return "logActionStates: enum value[] expected";
                                    case 0:
                                    case 1:
                                    case 2:
                                        break;
                                    }
                            }
                            return null;
                        };
    
                        /**
                         * Creates a LoggingConfig message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.storagebatchoperations.v1.LoggingConfig
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.storagebatchoperations.v1.LoggingConfig} LoggingConfig
                         */
                        LoggingConfig.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.storagebatchoperations.v1.LoggingConfig)
                                return object;
                            var message = new $root.google.cloud.storagebatchoperations.v1.LoggingConfig();
                            if (object.logActions) {
                                if (!Array.isArray(object.logActions))
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.LoggingConfig.logActions: array expected");
                                message.logActions = [];
                                for (var i = 0; i < object.logActions.length; ++i)
                                    switch (object.logActions[i]) {
                                    default:
                                        if (typeof object.logActions[i] === "number") {
                                            message.logActions[i] = object.logActions[i];
                                            break;
                                        }
                                    case "LOGGABLE_ACTION_UNSPECIFIED":
                                    case 0:
                                        message.logActions[i] = 0;
                                        break;
                                    case "TRANSFORM":
                                    case 6:
                                        message.logActions[i] = 6;
                                        break;
                                    }
                            }
                            if (object.logActionStates) {
                                if (!Array.isArray(object.logActionStates))
                                    throw TypeError(".google.cloud.storagebatchoperations.v1.LoggingConfig.logActionStates: array expected");
                                message.logActionStates = [];
                                for (var i = 0; i < object.logActionStates.length; ++i)
                                    switch (object.logActionStates[i]) {
                                    default:
                                        if (typeof object.logActionStates[i] === "number") {
                                            message.logActionStates[i] = object.logActionStates[i];
                                            break;
                                        }
                                    case "LOGGABLE_ACTION_STATE_UNSPECIFIED":
                                    case 0:
                                        message.logActionStates[i] = 0;
                                        break;
                                    case "SUCCEEDED":
                                    case 1:
                                        message.logActionStates[i] = 1;
                                        break;
                                    case "FAILED":
                                    case 2:
                                        message.logActionStates[i] = 2;
                                        break;
                                    }
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a LoggingConfig message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.storagebatchoperations.v1.LoggingConfig
                         * @static
                         * @param {google.cloud.storagebatchoperations.v1.LoggingConfig} message LoggingConfig
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        LoggingConfig.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.logActions = [];
                                object.logActionStates = [];
                            }
                            if (message.logActions && message.logActions.length) {
                                object.logActions = [];
                                for (var j = 0; j < message.logActions.length; ++j)
                                    object.logActions[j] = options.enums === String ? $root.google.cloud.storagebatchoperations.v1.LoggingConfig.LoggableAction[message.logActions[j]] === undefined ? message.logActions[j] : $root.google.cloud.storagebatchoperations.v1.LoggingConfig.LoggableAction[message.logActions[j]] : message.logActions[j];
                            }
                            if (message.logActionStates && message.logActionStates.length) {
                                object.logActionStates = [];
                                for (var j = 0; j < message.logActionStates.length; ++j)
                                    object.logActionStates[j] = options.enums === String ? $root.google.cloud.storagebatchoperations.v1.LoggingConfig.LoggableActionState[message.logActionStates[j]] === undefined ? message.logActionStates[j] : $root.google.cloud.storagebatchoperations.v1.LoggingConfig.LoggableActionState[message.logActionStates[j]] : message.logActionStates[j];
                            }
                            return object;
                        };
    
                        /**
                         * Converts this LoggingConfig to JSON.
                         * @function toJSON
                         * @memberof google.cloud.storagebatchoperations.v1.LoggingConfig
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        LoggingConfig.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for LoggingConfig
                         * @function getTypeUrl
                         * @memberof google.cloud.storagebatchoperations.v1.LoggingConfig
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        LoggingConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.storagebatchoperations.v1.LoggingConfig";
                        };
    
                        /**
                         * LoggableAction enum.
                         * @name google.cloud.storagebatchoperations.v1.LoggingConfig.LoggableAction
                         * @enum {number}
                         * @property {number} LOGGABLE_ACTION_UNSPECIFIED=0 LOGGABLE_ACTION_UNSPECIFIED value
                         * @property {number} TRANSFORM=6 TRANSFORM value
                         */
                        LoggingConfig.LoggableAction = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "LOGGABLE_ACTION_UNSPECIFIED"] = 0;
                            values[valuesById[6] = "TRANSFORM"] = 6;
                            return values;
                        })();
    
                        /**
                         * LoggableActionState enum.
                         * @name google.cloud.storagebatchoperations.v1.LoggingConfig.LoggableActionState
                         * @enum {number}
                         * @property {number} LOGGABLE_ACTION_STATE_UNSPECIFIED=0 LOGGABLE_ACTION_STATE_UNSPECIFIED value
                         * @property {number} SUCCEEDED=1 SUCCEEDED value
                         * @property {number} FAILED=2 FAILED value
                         */
                        LoggingConfig.LoggableActionState = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "LOGGABLE_ACTION_STATE_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "SUCCEEDED"] = 1;
                            values[valuesById[2] = "FAILED"] = 2;
                            return values;
                        })();
    
                        return LoggingConfig;
                    })();
    
                    return v1;
                })();
    
                return storagebatchoperations;
            })();
    
            return cloud;
        })();
    
        google.api = (function() {
    
            /**
             * Namespace api.
             * @memberof google
             * @namespace
             */
            var api = {};
    
            api.Http = (function() {
    
                /**
                 * Properties of a Http.
                 * @memberof google.api
                 * @interface IHttp
                 * @property {Array.<google.api.IHttpRule>|null} [rules] Http rules
                 * @property {boolean|null} [fullyDecodeReservedExpansion] Http fullyDecodeReservedExpansion
                 */
    
                /**
                 * Constructs a new Http.
                 * @memberof google.api
                 * @classdesc Represents a Http.
                 * @implements IHttp
                 * @constructor
                 * @param {google.api.IHttp=} [properties] Properties to set
                 */
                function Http(properties) {
                    this.rules = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Http rules.
                 * @member {Array.<google.api.IHttpRule>} rules
                 * @memberof google.api.Http
                 * @instance
                 */
                Http.prototype.rules = $util.emptyArray;
    
                /**
                 * Http fullyDecodeReservedExpansion.
                 * @member {boolean} fullyDecodeReservedExpansion
                 * @memberof google.api.Http
                 * @instance
                 */
                Http.prototype.fullyDecodeReservedExpansion = false;
    
                /**
                 * Creates a new Http instance using the specified properties.
                 * @function create
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp=} [properties] Properties to set
                 * @returns {google.api.Http} Http instance
                 */
                Http.create = function create(properties) {
                    return new Http(properties);
                };
    
                /**
                 * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp} message Http message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Http.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.rules != null && message.rules.length)
                        for (var i = 0; i < message.rules.length; ++i)
                            $root.google.api.HttpRule.encode(message.rules[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.fullyDecodeReservedExpansion != null && Object.hasOwnProperty.call(message, "fullyDecodeReservedExpansion"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.fullyDecodeReservedExpansion);
                    return writer;
                };
    
                /**
                 * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp} message Http message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Http.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Http message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.Http
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.Http} Http
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Http.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.Http();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.rules && message.rules.length))
                                    message.rules = [];
                                message.rules.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                                break;
                            }
                        case 2: {
                                message.fullyDecodeReservedExpansion = reader.bool();
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
                 * Decodes a Http message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.Http
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.Http} Http
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Http.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Http message.
                 * @function verify
                 * @memberof google.api.Http
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Http.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.rules != null && message.hasOwnProperty("rules")) {
                        if (!Array.isArray(message.rules))
                            return "rules: array expected";
                        for (var i = 0; i < message.rules.length; ++i) {
                            var error = $root.google.api.HttpRule.verify(message.rules[i]);
                            if (error)
                                return "rules." + error;
                        }
                    }
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
                        if (typeof message.fullyDecodeReservedExpansion !== "boolean")
                            return "fullyDecodeReservedExpansion: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a Http message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.Http
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.Http} Http
                 */
                Http.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.Http)
                        return object;
                    var message = new $root.google.api.Http();
                    if (object.rules) {
                        if (!Array.isArray(object.rules))
                            throw TypeError(".google.api.Http.rules: array expected");
                        message.rules = [];
                        for (var i = 0; i < object.rules.length; ++i) {
                            if (typeof object.rules[i] !== "object")
                                throw TypeError(".google.api.Http.rules: object expected");
                            message.rules[i] = $root.google.api.HttpRule.fromObject(object.rules[i]);
                        }
                    }
                    if (object.fullyDecodeReservedExpansion != null)
                        message.fullyDecodeReservedExpansion = Boolean(object.fullyDecodeReservedExpansion);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Http message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.Http} message Http
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Http.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.rules = [];
                    if (options.defaults)
                        object.fullyDecodeReservedExpansion = false;
                    if (message.rules && message.rules.length) {
                        object.rules = [];
                        for (var j = 0; j < message.rules.length; ++j)
                            object.rules[j] = $root.google.api.HttpRule.toObject(message.rules[j], options);
                    }
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
                        object.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion;
                    return object;
                };
    
                /**
                 * Converts this Http to JSON.
                 * @function toJSON
                 * @memberof google.api.Http
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Http.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Http
                 * @function getTypeUrl
                 * @memberof google.api.Http
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Http.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.Http";
                };
    
                return Http;
            })();
    
            api.HttpRule = (function() {
    
                /**
                 * Properties of a HttpRule.
                 * @memberof google.api
                 * @interface IHttpRule
                 * @property {string|null} [selector] HttpRule selector
                 * @property {string|null} [get] HttpRule get
                 * @property {string|null} [put] HttpRule put
                 * @property {string|null} [post] HttpRule post
                 * @property {string|null} ["delete"] HttpRule delete
                 * @property {string|null} [patch] HttpRule patch
                 * @property {google.api.ICustomHttpPattern|null} [custom] HttpRule custom
                 * @property {string|null} [body] HttpRule body
                 * @property {string|null} [responseBody] HttpRule responseBody
                 * @property {Array.<google.api.IHttpRule>|null} [additionalBindings] HttpRule additionalBindings
                 */
    
                /**
                 * Constructs a new HttpRule.
                 * @memberof google.api
                 * @classdesc Represents a HttpRule.
                 * @implements IHttpRule
                 * @constructor
                 * @param {google.api.IHttpRule=} [properties] Properties to set
                 */
                function HttpRule(properties) {
                    this.additionalBindings = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * HttpRule selector.
                 * @member {string} selector
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.selector = "";
    
                /**
                 * HttpRule get.
                 * @member {string|null|undefined} get
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.get = null;
    
                /**
                 * HttpRule put.
                 * @member {string|null|undefined} put
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.put = null;
    
                /**
                 * HttpRule post.
                 * @member {string|null|undefined} post
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.post = null;
    
                /**
                 * HttpRule delete.
                 * @member {string|null|undefined} delete
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype["delete"] = null;
    
                /**
                 * HttpRule patch.
                 * @member {string|null|undefined} patch
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.patch = null;
    
                /**
                 * HttpRule custom.
                 * @member {google.api.ICustomHttpPattern|null|undefined} custom
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.custom = null;
    
                /**
                 * HttpRule body.
                 * @member {string} body
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.body = "";
    
                /**
                 * HttpRule responseBody.
                 * @member {string} responseBody
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.responseBody = "";
    
                /**
                 * HttpRule additionalBindings.
                 * @member {Array.<google.api.IHttpRule>} additionalBindings
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.additionalBindings = $util.emptyArray;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * HttpRule pattern.
                 * @member {"get"|"put"|"post"|"delete"|"patch"|"custom"|undefined} pattern
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                Object.defineProperty(HttpRule.prototype, "pattern", {
                    get: $util.oneOfGetter($oneOfFields = ["get", "put", "post", "delete", "patch", "custom"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new HttpRule instance using the specified properties.
                 * @function create
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule=} [properties] Properties to set
                 * @returns {google.api.HttpRule} HttpRule instance
                 */
                HttpRule.create = function create(properties) {
                    return new HttpRule(properties);
                };
    
                /**
                 * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HttpRule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.selector != null && Object.hasOwnProperty.call(message, "selector"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.selector);
                    if (message.get != null && Object.hasOwnProperty.call(message, "get"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.get);
                    if (message.put != null && Object.hasOwnProperty.call(message, "put"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.put);
                    if (message.post != null && Object.hasOwnProperty.call(message, "post"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.post);
                    if (message["delete"] != null && Object.hasOwnProperty.call(message, "delete"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message["delete"]);
                    if (message.patch != null && Object.hasOwnProperty.call(message, "patch"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.patch);
                    if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.body);
                    if (message.custom != null && Object.hasOwnProperty.call(message, "custom"))
                        $root.google.api.CustomHttpPattern.encode(message.custom, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.additionalBindings != null && message.additionalBindings.length)
                        for (var i = 0; i < message.additionalBindings.length; ++i)
                            $root.google.api.HttpRule.encode(message.additionalBindings[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                    if (message.responseBody != null && Object.hasOwnProperty.call(message, "responseBody"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.responseBody);
                    return writer;
                };
    
                /**
                 * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HttpRule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a HttpRule message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.HttpRule} HttpRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HttpRule.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.HttpRule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.selector = reader.string();
                                break;
                            }
                        case 2: {
                                message.get = reader.string();
                                break;
                            }
                        case 3: {
                                message.put = reader.string();
                                break;
                            }
                        case 4: {
                                message.post = reader.string();
                                break;
                            }
                        case 5: {
                                message["delete"] = reader.string();
                                break;
                            }
                        case 6: {
                                message.patch = reader.string();
                                break;
                            }
                        case 8: {
                                message.custom = $root.google.api.CustomHttpPattern.decode(reader, reader.uint32());
                                break;
                            }
                        case 7: {
                                message.body = reader.string();
                                break;
                            }
                        case 12: {
                                message.responseBody = reader.string();
                                break;
                            }
                        case 11: {
                                if (!(message.additionalBindings && message.additionalBindings.length))
                                    message.additionalBindings = [];
                                message.additionalBindings.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
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
                 * Decodes a HttpRule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.HttpRule} HttpRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HttpRule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a HttpRule message.
                 * @function verify
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HttpRule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        if (!$util.isString(message.selector))
                            return "selector: string expected";
                    if (message.get != null && message.hasOwnProperty("get")) {
                        properties.pattern = 1;
                        if (!$util.isString(message.get))
                            return "get: string expected";
                    }
                    if (message.put != null && message.hasOwnProperty("put")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.put))
                            return "put: string expected";
                    }
                    if (message.post != null && message.hasOwnProperty("post")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.post))
                            return "post: string expected";
                    }
                    if (message["delete"] != null && message.hasOwnProperty("delete")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message["delete"]))
                            return "delete: string expected";
                    }
                    if (message.patch != null && message.hasOwnProperty("patch")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.patch))
                            return "patch: string expected";
                    }
                    if (message.custom != null && message.hasOwnProperty("custom")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        {
                            var error = $root.google.api.CustomHttpPattern.verify(message.custom);
                            if (error)
                                return "custom." + error;
                        }
                    }
                    if (message.body != null && message.hasOwnProperty("body"))
                        if (!$util.isString(message.body))
                            return "body: string expected";
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                        if (!$util.isString(message.responseBody))
                            return "responseBody: string expected";
                    if (message.additionalBindings != null && message.hasOwnProperty("additionalBindings")) {
                        if (!Array.isArray(message.additionalBindings))
                            return "additionalBindings: array expected";
                        for (var i = 0; i < message.additionalBindings.length; ++i) {
                            var error = $root.google.api.HttpRule.verify(message.additionalBindings[i]);
                            if (error)
                                return "additionalBindings." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.HttpRule} HttpRule
                 */
                HttpRule.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.HttpRule)
                        return object;
                    var message = new $root.google.api.HttpRule();
                    if (object.selector != null)
                        message.selector = String(object.selector);
                    if (object.get != null)
                        message.get = String(object.get);
                    if (object.put != null)
                        message.put = String(object.put);
                    if (object.post != null)
                        message.post = String(object.post);
                    if (object["delete"] != null)
                        message["delete"] = String(object["delete"]);
                    if (object.patch != null)
                        message.patch = String(object.patch);
                    if (object.custom != null) {
                        if (typeof object.custom !== "object")
                            throw TypeError(".google.api.HttpRule.custom: object expected");
                        message.custom = $root.google.api.CustomHttpPattern.fromObject(object.custom);
                    }
                    if (object.body != null)
                        message.body = String(object.body);
                    if (object.responseBody != null)
                        message.responseBody = String(object.responseBody);
                    if (object.additionalBindings) {
                        if (!Array.isArray(object.additionalBindings))
                            throw TypeError(".google.api.HttpRule.additionalBindings: array expected");
                        message.additionalBindings = [];
                        for (var i = 0; i < object.additionalBindings.length; ++i) {
                            if (typeof object.additionalBindings[i] !== "object")
                                throw TypeError(".google.api.HttpRule.additionalBindings: object expected");
                            message.additionalBindings[i] = $root.google.api.HttpRule.fromObject(object.additionalBindings[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.HttpRule} message HttpRule
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HttpRule.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.additionalBindings = [];
                    if (options.defaults) {
                        object.selector = "";
                        object.body = "";
                        object.responseBody = "";
                    }
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        object.selector = message.selector;
                    if (message.get != null && message.hasOwnProperty("get")) {
                        object.get = message.get;
                        if (options.oneofs)
                            object.pattern = "get";
                    }
                    if (message.put != null && message.hasOwnProperty("put")) {
                        object.put = message.put;
                        if (options.oneofs)
                            object.pattern = "put";
                    }
                    if (message.post != null && message.hasOwnProperty("post")) {
                        object.post = message.post;
                        if (options.oneofs)
                            object.pattern = "post";
                    }
                    if (message["delete"] != null && message.hasOwnProperty("delete")) {
                        object["delete"] = message["delete"];
                        if (options.oneofs)
                            object.pattern = "delete";
                    }
                    if (message.patch != null && message.hasOwnProperty("patch")) {
                        object.patch = message.patch;
                        if (options.oneofs)
                            object.pattern = "patch";
                    }
                    if (message.body != null && message.hasOwnProperty("body"))
                        object.body = message.body;
                    if (message.custom != null && message.hasOwnProperty("custom")) {
                        object.custom = $root.google.api.CustomHttpPattern.toObject(message.custom, options);
                        if (options.oneofs)
                            object.pattern = "custom";
                    }
                    if (message.additionalBindings && message.additionalBindings.length) {
                        object.additionalBindings = [];
                        for (var j = 0; j < message.additionalBindings.length; ++j)
                            object.additionalBindings[j] = $root.google.api.HttpRule.toObject(message.additionalBindings[j], options);
                    }
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                        object.responseBody = message.responseBody;
                    return object;
                };
    
                /**
                 * Converts this HttpRule to JSON.
                 * @function toJSON
                 * @memberof google.api.HttpRule
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HttpRule.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for HttpRule
                 * @function getTypeUrl
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                HttpRule.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.HttpRule";
                };
    
                return HttpRule;
            })();
    
            api.CustomHttpPattern = (function() {
    
                /**
                 * Properties of a CustomHttpPattern.
                 * @memberof google.api
                 * @interface ICustomHttpPattern
                 * @property {string|null} [kind] CustomHttpPattern kind
                 * @property {string|null} [path] CustomHttpPattern path
                 */
    
                /**
                 * Constructs a new CustomHttpPattern.
                 * @memberof google.api
                 * @classdesc Represents a CustomHttpPattern.
                 * @implements ICustomHttpPattern
                 * @constructor
                 * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
                 */
                function CustomHttpPattern(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CustomHttpPattern kind.
                 * @member {string} kind
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 */
                CustomHttpPattern.prototype.kind = "";
    
                /**
                 * CustomHttpPattern path.
                 * @member {string} path
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 */
                CustomHttpPattern.prototype.path = "";
    
                /**
                 * Creates a new CustomHttpPattern instance using the specified properties.
                 * @function create
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern instance
                 */
                CustomHttpPattern.create = function create(properties) {
                    return new CustomHttpPattern(properties);
                };
    
                /**
                 * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CustomHttpPattern.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.kind);
                    if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
                    return writer;
                };
    
                /**
                 * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CustomHttpPattern.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CustomHttpPattern message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CustomHttpPattern.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CustomHttpPattern();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.kind = reader.string();
                                break;
                            }
                        case 2: {
                                message.path = reader.string();
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
                 * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CustomHttpPattern.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CustomHttpPattern message.
                 * @function verify
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CustomHttpPattern.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        if (!$util.isString(message.kind))
                            return "kind: string expected";
                    if (message.path != null && message.hasOwnProperty("path"))
                        if (!$util.isString(message.path))
                            return "path: string expected";
                    return null;
                };
    
                /**
                 * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 */
                CustomHttpPattern.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.CustomHttpPattern)
                        return object;
                    var message = new $root.google.api.CustomHttpPattern();
                    if (object.kind != null)
                        message.kind = String(object.kind);
                    if (object.path != null)
                        message.path = String(object.path);
                    return message;
                };
    
                /**
                 * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.CustomHttpPattern} message CustomHttpPattern
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CustomHttpPattern.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.kind = "";
                        object.path = "";
                    }
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        object.kind = message.kind;
                    if (message.path != null && message.hasOwnProperty("path"))
                        object.path = message.path;
                    return object;
                };
    
                /**
                 * Converts this CustomHttpPattern to JSON.
                 * @function toJSON
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CustomHttpPattern.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for CustomHttpPattern
                 * @function getTypeUrl
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CustomHttpPattern.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.CustomHttpPattern";
                };
    
                return CustomHttpPattern;
            })();
    
            api.CommonLanguageSettings = (function() {
    
                /**
                 * Properties of a CommonLanguageSettings.
                 * @memberof google.api
                 * @interface ICommonLanguageSettings
                 * @property {string|null} [referenceDocsUri] CommonLanguageSettings referenceDocsUri
                 * @property {Array.<google.api.ClientLibraryDestination>|null} [destinations] CommonLanguageSettings destinations
                 */
    
                /**
                 * Constructs a new CommonLanguageSettings.
                 * @memberof google.api
                 * @classdesc Represents a CommonLanguageSettings.
                 * @implements ICommonLanguageSettings
                 * @constructor
                 * @param {google.api.ICommonLanguageSettings=} [properties] Properties to set
                 */
                function CommonLanguageSettings(properties) {
                    this.destinations = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CommonLanguageSettings referenceDocsUri.
                 * @member {string} referenceDocsUri
                 * @memberof google.api.CommonLanguageSettings
                 * @instance
                 */
                CommonLanguageSettings.prototype.referenceDocsUri = "";
    
                /**
                 * CommonLanguageSettings destinations.
                 * @member {Array.<google.api.ClientLibraryDestination>} destinations
                 * @memberof google.api.CommonLanguageSettings
                 * @instance
                 */
                CommonLanguageSettings.prototype.destinations = $util.emptyArray;
    
                /**
                 * Creates a new CommonLanguageSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {google.api.ICommonLanguageSettings=} [properties] Properties to set
                 * @returns {google.api.CommonLanguageSettings} CommonLanguageSettings instance
                 */
                CommonLanguageSettings.create = function create(properties) {
                    return new CommonLanguageSettings(properties);
                };
    
                /**
                 * Encodes the specified CommonLanguageSettings message. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {google.api.ICommonLanguageSettings} message CommonLanguageSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CommonLanguageSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.referenceDocsUri != null && Object.hasOwnProperty.call(message, "referenceDocsUri"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.referenceDocsUri);
                    if (message.destinations != null && message.destinations.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.destinations.length; ++i)
                            writer.int32(message.destinations[i]);
                        writer.ldelim();
                    }
                    return writer;
                };
    
                /**
                 * Encodes the specified CommonLanguageSettings message, length delimited. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {google.api.ICommonLanguageSettings} message CommonLanguageSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CommonLanguageSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CommonLanguageSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.CommonLanguageSettings} CommonLanguageSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CommonLanguageSettings.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CommonLanguageSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.referenceDocsUri = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.destinations && message.destinations.length))
                                    message.destinations = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.destinations.push(reader.int32());
                                } else
                                    message.destinations.push(reader.int32());
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
                 * Decodes a CommonLanguageSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.CommonLanguageSettings} CommonLanguageSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CommonLanguageSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CommonLanguageSettings message.
                 * @function verify
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CommonLanguageSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.referenceDocsUri != null && message.hasOwnProperty("referenceDocsUri"))
                        if (!$util.isString(message.referenceDocsUri))
                            return "referenceDocsUri: string expected";
                    if (message.destinations != null && message.hasOwnProperty("destinations")) {
                        if (!Array.isArray(message.destinations))
                            return "destinations: array expected";
                        for (var i = 0; i < message.destinations.length; ++i)
                            switch (message.destinations[i]) {
                            default:
                                return "destinations: enum value[] expected";
                            case 0:
                            case 10:
                            case 20:
                                break;
                            }
                    }
                    return null;
                };
    
                /**
                 * Creates a CommonLanguageSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.CommonLanguageSettings} CommonLanguageSettings
                 */
                CommonLanguageSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.CommonLanguageSettings)
                        return object;
                    var message = new $root.google.api.CommonLanguageSettings();
                    if (object.referenceDocsUri != null)
                        message.referenceDocsUri = String(object.referenceDocsUri);
                    if (object.destinations) {
                        if (!Array.isArray(object.destinations))
                            throw TypeError(".google.api.CommonLanguageSettings.destinations: array expected");
                        message.destinations = [];
                        for (var i = 0; i < object.destinations.length; ++i)
                            switch (object.destinations[i]) {
                            default:
                                if (typeof object.destinations[i] === "number") {
                                    message.destinations[i] = object.destinations[i];
                                    break;
                                }
                            case "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED":
                            case 0:
                                message.destinations[i] = 0;
                                break;
                            case "GITHUB":
                            case 10:
                                message.destinations[i] = 10;
                                break;
                            case "PACKAGE_MANAGER":
                            case 20:
                                message.destinations[i] = 20;
                                break;
                            }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a CommonLanguageSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {google.api.CommonLanguageSettings} message CommonLanguageSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CommonLanguageSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.destinations = [];
                    if (options.defaults)
                        object.referenceDocsUri = "";
                    if (message.referenceDocsUri != null && message.hasOwnProperty("referenceDocsUri"))
                        object.referenceDocsUri = message.referenceDocsUri;
                    if (message.destinations && message.destinations.length) {
                        object.destinations = [];
                        for (var j = 0; j < message.destinations.length; ++j)
                            object.destinations[j] = options.enums === String ? $root.google.api.ClientLibraryDestination[message.destinations[j]] === undefined ? message.destinations[j] : $root.google.api.ClientLibraryDestination[message.destinations[j]] : message.destinations[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this CommonLanguageSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.CommonLanguageSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CommonLanguageSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for CommonLanguageSettings
                 * @function getTypeUrl
                 * @memberof google.api.CommonLanguageSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CommonLanguageSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.CommonLanguageSettings";
                };
    
                return CommonLanguageSettings;
            })();
    
            api.ClientLibrarySettings = (function() {
    
                /**
                 * Properties of a ClientLibrarySettings.
                 * @memberof google.api
                 * @interface IClientLibrarySettings
                 * @property {string|null} [version] ClientLibrarySettings version
                 * @property {google.api.LaunchStage|null} [launchStage] ClientLibrarySettings launchStage
                 * @property {boolean|null} [restNumericEnums] ClientLibrarySettings restNumericEnums
                 * @property {google.api.IJavaSettings|null} [javaSettings] ClientLibrarySettings javaSettings
                 * @property {google.api.ICppSettings|null} [cppSettings] ClientLibrarySettings cppSettings
                 * @property {google.api.IPhpSettings|null} [phpSettings] ClientLibrarySettings phpSettings
                 * @property {google.api.IPythonSettings|null} [pythonSettings] ClientLibrarySettings pythonSettings
                 * @property {google.api.INodeSettings|null} [nodeSettings] ClientLibrarySettings nodeSettings
                 * @property {google.api.IDotnetSettings|null} [dotnetSettings] ClientLibrarySettings dotnetSettings
                 * @property {google.api.IRubySettings|null} [rubySettings] ClientLibrarySettings rubySettings
                 * @property {google.api.IGoSettings|null} [goSettings] ClientLibrarySettings goSettings
                 */
    
                /**
                 * Constructs a new ClientLibrarySettings.
                 * @memberof google.api
                 * @classdesc Represents a ClientLibrarySettings.
                 * @implements IClientLibrarySettings
                 * @constructor
                 * @param {google.api.IClientLibrarySettings=} [properties] Properties to set
                 */
                function ClientLibrarySettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ClientLibrarySettings version.
                 * @member {string} version
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.version = "";
    
                /**
                 * ClientLibrarySettings launchStage.
                 * @member {google.api.LaunchStage} launchStage
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.launchStage = 0;
    
                /**
                 * ClientLibrarySettings restNumericEnums.
                 * @member {boolean} restNumericEnums
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.restNumericEnums = false;
    
                /**
                 * ClientLibrarySettings javaSettings.
                 * @member {google.api.IJavaSettings|null|undefined} javaSettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.javaSettings = null;
    
                /**
                 * ClientLibrarySettings cppSettings.
                 * @member {google.api.ICppSettings|null|undefined} cppSettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.cppSettings = null;
    
                /**
                 * ClientLibrarySettings phpSettings.
                 * @member {google.api.IPhpSettings|null|undefined} phpSettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.phpSettings = null;
    
                /**
                 * ClientLibrarySettings pythonSettings.
                 * @member {google.api.IPythonSettings|null|undefined} pythonSettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.pythonSettings = null;
    
                /**
                 * ClientLibrarySettings nodeSettings.
                 * @member {google.api.INodeSettings|null|undefined} nodeSettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.nodeSettings = null;
    
                /**
                 * ClientLibrarySettings dotnetSettings.
                 * @member {google.api.IDotnetSettings|null|undefined} dotnetSettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.dotnetSettings = null;
    
                /**
                 * ClientLibrarySettings rubySettings.
                 * @member {google.api.IRubySettings|null|undefined} rubySettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.rubySettings = null;
    
                /**
                 * ClientLibrarySettings goSettings.
                 * @member {google.api.IGoSettings|null|undefined} goSettings
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 */
                ClientLibrarySettings.prototype.goSettings = null;
    
                /**
                 * Creates a new ClientLibrarySettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {google.api.IClientLibrarySettings=} [properties] Properties to set
                 * @returns {google.api.ClientLibrarySettings} ClientLibrarySettings instance
                 */
                ClientLibrarySettings.create = function create(properties) {
                    return new ClientLibrarySettings(properties);
                };
    
                /**
                 * Encodes the specified ClientLibrarySettings message. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {google.api.IClientLibrarySettings} message ClientLibrarySettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientLibrarySettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
                    if (message.launchStage != null && Object.hasOwnProperty.call(message, "launchStage"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.launchStage);
                    if (message.restNumericEnums != null && Object.hasOwnProperty.call(message, "restNumericEnums"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.restNumericEnums);
                    if (message.javaSettings != null && Object.hasOwnProperty.call(message, "javaSettings"))
                        $root.google.api.JavaSettings.encode(message.javaSettings, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
                    if (message.cppSettings != null && Object.hasOwnProperty.call(message, "cppSettings"))
                        $root.google.api.CppSettings.encode(message.cppSettings, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
                    if (message.phpSettings != null && Object.hasOwnProperty.call(message, "phpSettings"))
                        $root.google.api.PhpSettings.encode(message.phpSettings, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
                    if (message.pythonSettings != null && Object.hasOwnProperty.call(message, "pythonSettings"))
                        $root.google.api.PythonSettings.encode(message.pythonSettings, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
                    if (message.nodeSettings != null && Object.hasOwnProperty.call(message, "nodeSettings"))
                        $root.google.api.NodeSettings.encode(message.nodeSettings, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
                    if (message.dotnetSettings != null && Object.hasOwnProperty.call(message, "dotnetSettings"))
                        $root.google.api.DotnetSettings.encode(message.dotnetSettings, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
                    if (message.rubySettings != null && Object.hasOwnProperty.call(message, "rubySettings"))
                        $root.google.api.RubySettings.encode(message.rubySettings, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
                    if (message.goSettings != null && Object.hasOwnProperty.call(message, "goSettings"))
                        $root.google.api.GoSettings.encode(message.goSettings, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ClientLibrarySettings message, length delimited. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {google.api.IClientLibrarySettings} message ClientLibrarySettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientLibrarySettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ClientLibrarySettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.ClientLibrarySettings} ClientLibrarySettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientLibrarySettings.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.ClientLibrarySettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.version = reader.string();
                                break;
                            }
                        case 2: {
                                message.launchStage = reader.int32();
                                break;
                            }
                        case 3: {
                                message.restNumericEnums = reader.bool();
                                break;
                            }
                        case 21: {
                                message.javaSettings = $root.google.api.JavaSettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 22: {
                                message.cppSettings = $root.google.api.CppSettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 23: {
                                message.phpSettings = $root.google.api.PhpSettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 24: {
                                message.pythonSettings = $root.google.api.PythonSettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 25: {
                                message.nodeSettings = $root.google.api.NodeSettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 26: {
                                message.dotnetSettings = $root.google.api.DotnetSettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 27: {
                                message.rubySettings = $root.google.api.RubySettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 28: {
                                message.goSettings = $root.google.api.GoSettings.decode(reader, reader.uint32());
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
                 * Decodes a ClientLibrarySettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.ClientLibrarySettings} ClientLibrarySettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientLibrarySettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ClientLibrarySettings message.
                 * @function verify
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ClientLibrarySettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.version != null && message.hasOwnProperty("version"))
                        if (!$util.isString(message.version))
                            return "version: string expected";
                    if (message.launchStage != null && message.hasOwnProperty("launchStage"))
                        switch (message.launchStage) {
                        default:
                            return "launchStage: enum value expected";
                        case 0:
                        case 6:
                        case 7:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                    if (message.restNumericEnums != null && message.hasOwnProperty("restNumericEnums"))
                        if (typeof message.restNumericEnums !== "boolean")
                            return "restNumericEnums: boolean expected";
                    if (message.javaSettings != null && message.hasOwnProperty("javaSettings")) {
                        var error = $root.google.api.JavaSettings.verify(message.javaSettings);
                        if (error)
                            return "javaSettings." + error;
                    }
                    if (message.cppSettings != null && message.hasOwnProperty("cppSettings")) {
                        var error = $root.google.api.CppSettings.verify(message.cppSettings);
                        if (error)
                            return "cppSettings." + error;
                    }
                    if (message.phpSettings != null && message.hasOwnProperty("phpSettings")) {
                        var error = $root.google.api.PhpSettings.verify(message.phpSettings);
                        if (error)
                            return "phpSettings." + error;
                    }
                    if (message.pythonSettings != null && message.hasOwnProperty("pythonSettings")) {
                        var error = $root.google.api.PythonSettings.verify(message.pythonSettings);
                        if (error)
                            return "pythonSettings." + error;
                    }
                    if (message.nodeSettings != null && message.hasOwnProperty("nodeSettings")) {
                        var error = $root.google.api.NodeSettings.verify(message.nodeSettings);
                        if (error)
                            return "nodeSettings." + error;
                    }
                    if (message.dotnetSettings != null && message.hasOwnProperty("dotnetSettings")) {
                        var error = $root.google.api.DotnetSettings.verify(message.dotnetSettings);
                        if (error)
                            return "dotnetSettings." + error;
                    }
                    if (message.rubySettings != null && message.hasOwnProperty("rubySettings")) {
                        var error = $root.google.api.RubySettings.verify(message.rubySettings);
                        if (error)
                            return "rubySettings." + error;
                    }
                    if (message.goSettings != null && message.hasOwnProperty("goSettings")) {
                        var error = $root.google.api.GoSettings.verify(message.goSettings);
                        if (error)
                            return "goSettings." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ClientLibrarySettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.ClientLibrarySettings} ClientLibrarySettings
                 */
                ClientLibrarySettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.ClientLibrarySettings)
                        return object;
                    var message = new $root.google.api.ClientLibrarySettings();
                    if (object.version != null)
                        message.version = String(object.version);
                    switch (object.launchStage) {
                    default:
                        if (typeof object.launchStage === "number") {
                            message.launchStage = object.launchStage;
                            break;
                        }
                        break;
                    case "LAUNCH_STAGE_UNSPECIFIED":
                    case 0:
                        message.launchStage = 0;
                        break;
                    case "UNIMPLEMENTED":
                    case 6:
                        message.launchStage = 6;
                        break;
                    case "PRELAUNCH":
                    case 7:
                        message.launchStage = 7;
                        break;
                    case "EARLY_ACCESS":
                    case 1:
                        message.launchStage = 1;
                        break;
                    case "ALPHA":
                    case 2:
                        message.launchStage = 2;
                        break;
                    case "BETA":
                    case 3:
                        message.launchStage = 3;
                        break;
                    case "GA":
                    case 4:
                        message.launchStage = 4;
                        break;
                    case "DEPRECATED":
                    case 5:
                        message.launchStage = 5;
                        break;
                    }
                    if (object.restNumericEnums != null)
                        message.restNumericEnums = Boolean(object.restNumericEnums);
                    if (object.javaSettings != null) {
                        if (typeof object.javaSettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.javaSettings: object expected");
                        message.javaSettings = $root.google.api.JavaSettings.fromObject(object.javaSettings);
                    }
                    if (object.cppSettings != null) {
                        if (typeof object.cppSettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.cppSettings: object expected");
                        message.cppSettings = $root.google.api.CppSettings.fromObject(object.cppSettings);
                    }
                    if (object.phpSettings != null) {
                        if (typeof object.phpSettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.phpSettings: object expected");
                        message.phpSettings = $root.google.api.PhpSettings.fromObject(object.phpSettings);
                    }
                    if (object.pythonSettings != null) {
                        if (typeof object.pythonSettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.pythonSettings: object expected");
                        message.pythonSettings = $root.google.api.PythonSettings.fromObject(object.pythonSettings);
                    }
                    if (object.nodeSettings != null) {
                        if (typeof object.nodeSettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.nodeSettings: object expected");
                        message.nodeSettings = $root.google.api.NodeSettings.fromObject(object.nodeSettings);
                    }
                    if (object.dotnetSettings != null) {
                        if (typeof object.dotnetSettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.dotnetSettings: object expected");
                        message.dotnetSettings = $root.google.api.DotnetSettings.fromObject(object.dotnetSettings);
                    }
                    if (object.rubySettings != null) {
                        if (typeof object.rubySettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.rubySettings: object expected");
                        message.rubySettings = $root.google.api.RubySettings.fromObject(object.rubySettings);
                    }
                    if (object.goSettings != null) {
                        if (typeof object.goSettings !== "object")
                            throw TypeError(".google.api.ClientLibrarySettings.goSettings: object expected");
                        message.goSettings = $root.google.api.GoSettings.fromObject(object.goSettings);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ClientLibrarySettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {google.api.ClientLibrarySettings} message ClientLibrarySettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ClientLibrarySettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.version = "";
                        object.launchStage = options.enums === String ? "LAUNCH_STAGE_UNSPECIFIED" : 0;
                        object.restNumericEnums = false;
                        object.javaSettings = null;
                        object.cppSettings = null;
                        object.phpSettings = null;
                        object.pythonSettings = null;
                        object.nodeSettings = null;
                        object.dotnetSettings = null;
                        object.rubySettings = null;
                        object.goSettings = null;
                    }
                    if (message.version != null && message.hasOwnProperty("version"))
                        object.version = message.version;
                    if (message.launchStage != null && message.hasOwnProperty("launchStage"))
                        object.launchStage = options.enums === String ? $root.google.api.LaunchStage[message.launchStage] === undefined ? message.launchStage : $root.google.api.LaunchStage[message.launchStage] : message.launchStage;
                    if (message.restNumericEnums != null && message.hasOwnProperty("restNumericEnums"))
                        object.restNumericEnums = message.restNumericEnums;
                    if (message.javaSettings != null && message.hasOwnProperty("javaSettings"))
                        object.javaSettings = $root.google.api.JavaSettings.toObject(message.javaSettings, options);
                    if (message.cppSettings != null && message.hasOwnProperty("cppSettings"))
                        object.cppSettings = $root.google.api.CppSettings.toObject(message.cppSettings, options);
                    if (message.phpSettings != null && message.hasOwnProperty("phpSettings"))
                        object.phpSettings = $root.google.api.PhpSettings.toObject(message.phpSettings, options);
                    if (message.pythonSettings != null && message.hasOwnProperty("pythonSettings"))
                        object.pythonSettings = $root.google.api.PythonSettings.toObject(message.pythonSettings, options);
                    if (message.nodeSettings != null && message.hasOwnProperty("nodeSettings"))
                        object.nodeSettings = $root.google.api.NodeSettings.toObject(message.nodeSettings, options);
                    if (message.dotnetSettings != null && message.hasOwnProperty("dotnetSettings"))
                        object.dotnetSettings = $root.google.api.DotnetSettings.toObject(message.dotnetSettings, options);
                    if (message.rubySettings != null && message.hasOwnProperty("rubySettings"))
                        object.rubySettings = $root.google.api.RubySettings.toObject(message.rubySettings, options);
                    if (message.goSettings != null && message.hasOwnProperty("goSettings"))
                        object.goSettings = $root.google.api.GoSettings.toObject(message.goSettings, options);
                    return object;
                };
    
                /**
                 * Converts this ClientLibrarySettings to JSON.
                 * @function toJSON
                 * @memberof google.api.ClientLibrarySettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ClientLibrarySettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ClientLibrarySettings
                 * @function getTypeUrl
                 * @memberof google.api.ClientLibrarySettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ClientLibrarySettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.ClientLibrarySettings";
                };
    
                return ClientLibrarySettings;
            })();
    
            api.Publishing = (function() {
    
                /**
                 * Properties of a Publishing.
                 * @memberof google.api
                 * @interface IPublishing
                 * @property {Array.<google.api.IMethodSettings>|null} [methodSettings] Publishing methodSettings
                 * @property {string|null} [newIssueUri] Publishing newIssueUri
                 * @property {string|null} [documentationUri] Publishing documentationUri
                 * @property {string|null} [apiShortName] Publishing apiShortName
                 * @property {string|null} [githubLabel] Publishing githubLabel
                 * @property {Array.<string>|null} [codeownerGithubTeams] Publishing codeownerGithubTeams
                 * @property {string|null} [docTagPrefix] Publishing docTagPrefix
                 * @property {google.api.ClientLibraryOrganization|null} [organization] Publishing organization
                 * @property {Array.<google.api.IClientLibrarySettings>|null} [librarySettings] Publishing librarySettings
                 * @property {string|null} [protoReferenceDocumentationUri] Publishing protoReferenceDocumentationUri
                 * @property {string|null} [restReferenceDocumentationUri] Publishing restReferenceDocumentationUri
                 */
    
                /**
                 * Constructs a new Publishing.
                 * @memberof google.api
                 * @classdesc Represents a Publishing.
                 * @implements IPublishing
                 * @constructor
                 * @param {google.api.IPublishing=} [properties] Properties to set
                 */
                function Publishing(properties) {
                    this.methodSettings = [];
                    this.codeownerGithubTeams = [];
                    this.librarySettings = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Publishing methodSettings.
                 * @member {Array.<google.api.IMethodSettings>} methodSettings
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.methodSettings = $util.emptyArray;
    
                /**
                 * Publishing newIssueUri.
                 * @member {string} newIssueUri
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.newIssueUri = "";
    
                /**
                 * Publishing documentationUri.
                 * @member {string} documentationUri
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.documentationUri = "";
    
                /**
                 * Publishing apiShortName.
                 * @member {string} apiShortName
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.apiShortName = "";
    
                /**
                 * Publishing githubLabel.
                 * @member {string} githubLabel
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.githubLabel = "";
    
                /**
                 * Publishing codeownerGithubTeams.
                 * @member {Array.<string>} codeownerGithubTeams
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.codeownerGithubTeams = $util.emptyArray;
    
                /**
                 * Publishing docTagPrefix.
                 * @member {string} docTagPrefix
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.docTagPrefix = "";
    
                /**
                 * Publishing organization.
                 * @member {google.api.ClientLibraryOrganization} organization
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.organization = 0;
    
                /**
                 * Publishing librarySettings.
                 * @member {Array.<google.api.IClientLibrarySettings>} librarySettings
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.librarySettings = $util.emptyArray;
    
                /**
                 * Publishing protoReferenceDocumentationUri.
                 * @member {string} protoReferenceDocumentationUri
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.protoReferenceDocumentationUri = "";
    
                /**
                 * Publishing restReferenceDocumentationUri.
                 * @member {string} restReferenceDocumentationUri
                 * @memberof google.api.Publishing
                 * @instance
                 */
                Publishing.prototype.restReferenceDocumentationUri = "";
    
                /**
                 * Creates a new Publishing instance using the specified properties.
                 * @function create
                 * @memberof google.api.Publishing
                 * @static
                 * @param {google.api.IPublishing=} [properties] Properties to set
                 * @returns {google.api.Publishing} Publishing instance
                 */
                Publishing.create = function create(properties) {
                    return new Publishing(properties);
                };
    
                /**
                 * Encodes the specified Publishing message. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.Publishing
                 * @static
                 * @param {google.api.IPublishing} message Publishing message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Publishing.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.methodSettings != null && message.methodSettings.length)
                        for (var i = 0; i < message.methodSettings.length; ++i)
                            $root.google.api.MethodSettings.encode(message.methodSettings[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.newIssueUri != null && Object.hasOwnProperty.call(message, "newIssueUri"))
                        writer.uint32(/* id 101, wireType 2 =*/810).string(message.newIssueUri);
                    if (message.documentationUri != null && Object.hasOwnProperty.call(message, "documentationUri"))
                        writer.uint32(/* id 102, wireType 2 =*/818).string(message.documentationUri);
                    if (message.apiShortName != null && Object.hasOwnProperty.call(message, "apiShortName"))
                        writer.uint32(/* id 103, wireType 2 =*/826).string(message.apiShortName);
                    if (message.githubLabel != null && Object.hasOwnProperty.call(message, "githubLabel"))
                        writer.uint32(/* id 104, wireType 2 =*/834).string(message.githubLabel);
                    if (message.codeownerGithubTeams != null && message.codeownerGithubTeams.length)
                        for (var i = 0; i < message.codeownerGithubTeams.length; ++i)
                            writer.uint32(/* id 105, wireType 2 =*/842).string(message.codeownerGithubTeams[i]);
                    if (message.docTagPrefix != null && Object.hasOwnProperty.call(message, "docTagPrefix"))
                        writer.uint32(/* id 106, wireType 2 =*/850).string(message.docTagPrefix);
                    if (message.organization != null && Object.hasOwnProperty.call(message, "organization"))
                        writer.uint32(/* id 107, wireType 0 =*/856).int32(message.organization);
                    if (message.librarySettings != null && message.librarySettings.length)
                        for (var i = 0; i < message.librarySettings.length; ++i)
                            $root.google.api.ClientLibrarySettings.encode(message.librarySettings[i], writer.uint32(/* id 109, wireType 2 =*/874).fork()).ldelim();
                    if (message.protoReferenceDocumentationUri != null && Object.hasOwnProperty.call(message, "protoReferenceDocumentationUri"))
                        writer.uint32(/* id 110, wireType 2 =*/882).string(message.protoReferenceDocumentationUri);
                    if (message.restReferenceDocumentationUri != null && Object.hasOwnProperty.call(message, "restReferenceDocumentationUri"))
                        writer.uint32(/* id 111, wireType 2 =*/890).string(message.restReferenceDocumentationUri);
                    return writer;
                };
    
                /**
                 * Encodes the specified Publishing message, length delimited. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.Publishing
                 * @static
                 * @param {google.api.IPublishing} message Publishing message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Publishing.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Publishing message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.Publishing
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.Publishing} Publishing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Publishing.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.Publishing();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 2: {
                                if (!(message.methodSettings && message.methodSettings.length))
                                    message.methodSettings = [];
                                message.methodSettings.push($root.google.api.MethodSettings.decode(reader, reader.uint32()));
                                break;
                            }
                        case 101: {
                                message.newIssueUri = reader.string();
                                break;
                            }
                        case 102: {
                                message.documentationUri = reader.string();
                                break;
                            }
                        case 103: {
                                message.apiShortName = reader.string();
                                break;
                            }
                        case 104: {
                                message.githubLabel = reader.string();
                                break;
                            }
                        case 105: {
                                if (!(message.codeownerGithubTeams && message.codeownerGithubTeams.length))
                                    message.codeownerGithubTeams = [];
                                message.codeownerGithubTeams.push(reader.string());
                                break;
                            }
                        case 106: {
                                message.docTagPrefix = reader.string();
                                break;
                            }
                        case 107: {
                                message.organization = reader.int32();
                                break;
                            }
                        case 109: {
                                if (!(message.librarySettings && message.librarySettings.length))
                                    message.librarySettings = [];
                                message.librarySettings.push($root.google.api.ClientLibrarySettings.decode(reader, reader.uint32()));
                                break;
                            }
                        case 110: {
                                message.protoReferenceDocumentationUri = reader.string();
                                break;
                            }
                        case 111: {
                                message.restReferenceDocumentationUri = reader.string();
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
                 * Decodes a Publishing message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.Publishing
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.Publishing} Publishing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Publishing.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Publishing message.
                 * @function verify
                 * @memberof google.api.Publishing
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Publishing.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.methodSettings != null && message.hasOwnProperty("methodSettings")) {
                        if (!Array.isArray(message.methodSettings))
                            return "methodSettings: array expected";
                        for (var i = 0; i < message.methodSettings.length; ++i) {
                            var error = $root.google.api.MethodSettings.verify(message.methodSettings[i]);
                            if (error)
                                return "methodSettings." + error;
                        }
                    }
                    if (message.newIssueUri != null && message.hasOwnProperty("newIssueUri"))
                        if (!$util.isString(message.newIssueUri))
                            return "newIssueUri: string expected";
                    if (message.documentationUri != null && message.hasOwnProperty("documentationUri"))
                        if (!$util.isString(message.documentationUri))
                            return "documentationUri: string expected";
                    if (message.apiShortName != null && message.hasOwnProperty("apiShortName"))
                        if (!$util.isString(message.apiShortName))
                            return "apiShortName: string expected";
                    if (message.githubLabel != null && message.hasOwnProperty("githubLabel"))
                        if (!$util.isString(message.githubLabel))
                            return "githubLabel: string expected";
                    if (message.codeownerGithubTeams != null && message.hasOwnProperty("codeownerGithubTeams")) {
                        if (!Array.isArray(message.codeownerGithubTeams))
                            return "codeownerGithubTeams: array expected";
                        for (var i = 0; i < message.codeownerGithubTeams.length; ++i)
                            if (!$util.isString(message.codeownerGithubTeams[i]))
                                return "codeownerGithubTeams: string[] expected";
                    }
                    if (message.docTagPrefix != null && message.hasOwnProperty("docTagPrefix"))
                        if (!$util.isString(message.docTagPrefix))
                            return "docTagPrefix: string expected";
                    if (message.organization != null && message.hasOwnProperty("organization"))
                        switch (message.organization) {
                        default:
                            return "organization: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            break;
                        }
                    if (message.librarySettings != null && message.hasOwnProperty("librarySettings")) {
                        if (!Array.isArray(message.librarySettings))
                            return "librarySettings: array expected";
                        for (var i = 0; i < message.librarySettings.length; ++i) {
                            var error = $root.google.api.ClientLibrarySettings.verify(message.librarySettings[i]);
                            if (error)
                                return "librarySettings." + error;
                        }
                    }
                    if (message.protoReferenceDocumentationUri != null && message.hasOwnProperty("protoReferenceDocumentationUri"))
                        if (!$util.isString(message.protoReferenceDocumentationUri))
                            return "protoReferenceDocumentationUri: string expected";
                    if (message.restReferenceDocumentationUri != null && message.hasOwnProperty("restReferenceDocumentationUri"))
                        if (!$util.isString(message.restReferenceDocumentationUri))
                            return "restReferenceDocumentationUri: string expected";
                    return null;
                };
    
                /**
                 * Creates a Publishing message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.Publishing
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.Publishing} Publishing
                 */
                Publishing.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.Publishing)
                        return object;
                    var message = new $root.google.api.Publishing();
                    if (object.methodSettings) {
                        if (!Array.isArray(object.methodSettings))
                            throw TypeError(".google.api.Publishing.methodSettings: array expected");
                        message.methodSettings = [];
                        for (var i = 0; i < object.methodSettings.length; ++i) {
                            if (typeof object.methodSettings[i] !== "object")
                                throw TypeError(".google.api.Publishing.methodSettings: object expected");
                            message.methodSettings[i] = $root.google.api.MethodSettings.fromObject(object.methodSettings[i]);
                        }
                    }
                    if (object.newIssueUri != null)
                        message.newIssueUri = String(object.newIssueUri);
                    if (object.documentationUri != null)
                        message.documentationUri = String(object.documentationUri);
                    if (object.apiShortName != null)
                        message.apiShortName = String(object.apiShortName);
                    if (object.githubLabel != null)
                        message.githubLabel = String(object.githubLabel);
                    if (object.codeownerGithubTeams) {
                        if (!Array.isArray(object.codeownerGithubTeams))
                            throw TypeError(".google.api.Publishing.codeownerGithubTeams: array expected");
                        message.codeownerGithubTeams = [];
                        for (var i = 0; i < object.codeownerGithubTeams.length; ++i)
                            message.codeownerGithubTeams[i] = String(object.codeownerGithubTeams[i]);
                    }
                    if (object.docTagPrefix != null)
                        message.docTagPrefix = String(object.docTagPrefix);
                    switch (object.organization) {
                    default:
                        if (typeof object.organization === "number") {
                            message.organization = object.organization;
                            break;
                        }
                        break;
                    case "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED":
                    case 0:
                        message.organization = 0;
                        break;
                    case "CLOUD":
                    case 1:
                        message.organization = 1;
                        break;
                    case "ADS":
                    case 2:
                        message.organization = 2;
                        break;
                    case "PHOTOS":
                    case 3:
                        message.organization = 3;
                        break;
                    case "STREET_VIEW":
                    case 4:
                        message.organization = 4;
                        break;
                    case "SHOPPING":
                    case 5:
                        message.organization = 5;
                        break;
                    case "GEO":
                    case 6:
                        message.organization = 6;
                        break;
                    case "GENERATIVE_AI":
                    case 7:
                        message.organization = 7;
                        break;
                    }
                    if (object.librarySettings) {
                        if (!Array.isArray(object.librarySettings))
                            throw TypeError(".google.api.Publishing.librarySettings: array expected");
                        message.librarySettings = [];
                        for (var i = 0; i < object.librarySettings.length; ++i) {
                            if (typeof object.librarySettings[i] !== "object")
                                throw TypeError(".google.api.Publishing.librarySettings: object expected");
                            message.librarySettings[i] = $root.google.api.ClientLibrarySettings.fromObject(object.librarySettings[i]);
                        }
                    }
                    if (object.protoReferenceDocumentationUri != null)
                        message.protoReferenceDocumentationUri = String(object.protoReferenceDocumentationUri);
                    if (object.restReferenceDocumentationUri != null)
                        message.restReferenceDocumentationUri = String(object.restReferenceDocumentationUri);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Publishing message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.Publishing
                 * @static
                 * @param {google.api.Publishing} message Publishing
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Publishing.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.methodSettings = [];
                        object.codeownerGithubTeams = [];
                        object.librarySettings = [];
                    }
                    if (options.defaults) {
                        object.newIssueUri = "";
                        object.documentationUri = "";
                        object.apiShortName = "";
                        object.githubLabel = "";
                        object.docTagPrefix = "";
                        object.organization = options.enums === String ? "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED" : 0;
                        object.protoReferenceDocumentationUri = "";
                        object.restReferenceDocumentationUri = "";
                    }
                    if (message.methodSettings && message.methodSettings.length) {
                        object.methodSettings = [];
                        for (var j = 0; j < message.methodSettings.length; ++j)
                            object.methodSettings[j] = $root.google.api.MethodSettings.toObject(message.methodSettings[j], options);
                    }
                    if (message.newIssueUri != null && message.hasOwnProperty("newIssueUri"))
                        object.newIssueUri = message.newIssueUri;
                    if (message.documentationUri != null && message.hasOwnProperty("documentationUri"))
                        object.documentationUri = message.documentationUri;
                    if (message.apiShortName != null && message.hasOwnProperty("apiShortName"))
                        object.apiShortName = message.apiShortName;
                    if (message.githubLabel != null && message.hasOwnProperty("githubLabel"))
                        object.githubLabel = message.githubLabel;
                    if (message.codeownerGithubTeams && message.codeownerGithubTeams.length) {
                        object.codeownerGithubTeams = [];
                        for (var j = 0; j < message.codeownerGithubTeams.length; ++j)
                            object.codeownerGithubTeams[j] = message.codeownerGithubTeams[j];
                    }
                    if (message.docTagPrefix != null && message.hasOwnProperty("docTagPrefix"))
                        object.docTagPrefix = message.docTagPrefix;
                    if (message.organization != null && message.hasOwnProperty("organization"))
                        object.organization = options.enums === String ? $root.google.api.ClientLibraryOrganization[message.organization] === undefined ? message.organization : $root.google.api.ClientLibraryOrganization[message.organization] : message.organization;
                    if (message.librarySettings && message.librarySettings.length) {
                        object.librarySettings = [];
                        for (var j = 0; j < message.librarySettings.length; ++j)
                            object.librarySettings[j] = $root.google.api.ClientLibrarySettings.toObject(message.librarySettings[j], options);
                    }
                    if (message.protoReferenceDocumentationUri != null && message.hasOwnProperty("protoReferenceDocumentationUri"))
                        object.protoReferenceDocumentationUri = message.protoReferenceDocumentationUri;
                    if (message.restReferenceDocumentationUri != null && message.hasOwnProperty("restReferenceDocumentationUri"))
                        object.restReferenceDocumentationUri = message.restReferenceDocumentationUri;
                    return object;
                };
    
                /**
                 * Converts this Publishing to JSON.
                 * @function toJSON
                 * @memberof google.api.Publishing
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Publishing.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for Publishing
                 * @function getTypeUrl
                 * @memberof google.api.Publishing
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Publishing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.Publishing";
                };
    
                return Publishing;
            })();
    
            api.JavaSettings = (function() {
    
                /**
                 * Properties of a JavaSettings.
                 * @memberof google.api
                 * @interface IJavaSettings
                 * @property {string|null} [libraryPackage] JavaSettings libraryPackage
                 * @property {Object.<string,string>|null} [serviceClassNames] JavaSettings serviceClassNames
                 * @property {google.api.ICommonLanguageSettings|null} [common] JavaSettings common
                 */
    
                /**
                 * Constructs a new JavaSettings.
                 * @memberof google.api
                 * @classdesc Represents a JavaSettings.
                 * @implements IJavaSettings
                 * @constructor
                 * @param {google.api.IJavaSettings=} [properties] Properties to set
                 */
                function JavaSettings(properties) {
                    this.serviceClassNames = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * JavaSettings libraryPackage.
                 * @member {string} libraryPackage
                 * @memberof google.api.JavaSettings
                 * @instance
                 */
                JavaSettings.prototype.libraryPackage = "";
    
                /**
                 * JavaSettings serviceClassNames.
                 * @member {Object.<string,string>} serviceClassNames
                 * @memberof google.api.JavaSettings
                 * @instance
                 */
                JavaSettings.prototype.serviceClassNames = $util.emptyObject;
    
                /**
                 * JavaSettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.JavaSettings
                 * @instance
                 */
                JavaSettings.prototype.common = null;
    
                /**
                 * Creates a new JavaSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {google.api.IJavaSettings=} [properties] Properties to set
                 * @returns {google.api.JavaSettings} JavaSettings instance
                 */
                JavaSettings.create = function create(properties) {
                    return new JavaSettings(properties);
                };
    
                /**
                 * Encodes the specified JavaSettings message. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {google.api.IJavaSettings} message JavaSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                JavaSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.libraryPackage != null && Object.hasOwnProperty.call(message, "libraryPackage"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.libraryPackage);
                    if (message.serviceClassNames != null && Object.hasOwnProperty.call(message, "serviceClassNames"))
                        for (var keys = Object.keys(message.serviceClassNames), i = 0; i < keys.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.serviceClassNames[keys[i]]).ldelim();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified JavaSettings message, length delimited. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {google.api.IJavaSettings} message JavaSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                JavaSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a JavaSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.JavaSettings} JavaSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                JavaSettings.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
            