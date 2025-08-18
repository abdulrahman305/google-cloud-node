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
    var $root = $protobuf.roots._google_cloud_batch_protos || ($protobuf.roots._google_cloud_batch_protos = {});
    
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
    
            cloud.batch = (function() {
    
                /**
                 * Namespace batch.
                 * @memberof google.cloud
                 * @namespace
                 */
                var batch = {};
    
                batch.v1 = (function() {
    
                    /**
                     * Namespace v1.
                     * @memberof google.cloud.batch
                     * @namespace
                     */
                    var v1 = {};
    
                    v1.BatchService = (function() {
    
                        /**
                         * Constructs a new BatchService service.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents a BatchService
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function BatchService(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }
    
                        (BatchService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = BatchService;
    
                        /**
                         * Creates new BatchService service using the specified rpc implementation.
                         * @function create
                         * @memberof google.cloud.batch.v1.BatchService
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {BatchService} RPC service. Useful where requests and/or responses are streamed.
                         */
                        BatchService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };
    
                        /**
                         * Callback as used by {@link google.cloud.batch.v1.BatchService|createJob}.
                         * @memberof google.cloud.batch.v1.BatchService
                         * @typedef CreateJobCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.batch.v1.Job} [response] Job
                         */
    
                        /**
                         * Calls CreateJob.
                         * @function createJob
                         * @memberof google.cloud.batch.v1.BatchService
                         * @instance
                         * @param {google.cloud.batch.v1.ICreateJobRequest} request CreateJobRequest message or plain object
                         * @param {google.cloud.batch.v1.BatchService.CreateJobCallback} callback Node-style callback called with the error, if any, and Job
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(BatchService.prototype.createJob = function createJob(request, callback) {
                            return this.rpcCall(createJob, $root.google.cloud.batch.v1.CreateJobRequest, $root.google.cloud.batch.v1.Job, request, callback);
                        }, "name", { value: "CreateJob" });
    
                        /**
                         * Calls CreateJob.
                         * @function createJob
                         * @memberof google.cloud.batch.v1.BatchService
                         * @instance
                         * @param {google.cloud.batch.v1.ICreateJobRequest} request CreateJobRequest message or plain object
                         * @returns {Promise<google.cloud.batch.v1.Job>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.batch.v1.BatchService|getJob}.
                         * @memberof google.cloud.batch.v1.BatchService
                         * @typedef GetJobCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.batch.v1.Job} [response] Job
                         */
    
                        /**
                         * Calls GetJob.
                         * @function getJob
                         * @memberof google.cloud.batch.v1.BatchService
                         * @instance
                         * @param {google.cloud.batch.v1.IGetJobRequest} request GetJobRequest message or plain object
                         * @param {google.cloud.batch.v1.BatchService.GetJobCallback} callback Node-style callback called with the error, if any, and Job
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(BatchService.prototype.getJob = function getJob(request, callback) {
                            return this.rpcCall(getJob, $root.google.cloud.batch.v1.GetJobRequest, $root.google.cloud.batch.v1.Job, request, callback);
                        }, "name", { value: "GetJob" });
    
                        /**
                         * Calls GetJob.
                         * @function getJob
                         * @memberof google.cloud.batch.v1.BatchService
                         * @instance
                         * @param {google.cloud.batch.v1.IGetJobRequest} request GetJobRequest message or plain object
                         * @returns {Promise<google.cloud.batch.v1.Job>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.batch.v1.BatchService|deleteJob}.
                         * @memberof google.cloud.batch.v1.BatchService
                         * @typedef DeleteJobCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls DeleteJob.
                         * @function deleteJob
                         * @memberof google.cloud.batch.v1.BatchService
                         * @instance
                         * @param {google.cloud.batch.v1.IDeleteJobRequest} request DeleteJobRequest message or plain object
                         * @param {google.cloud.batch.v1.BatchService.DeleteJobCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(BatchService.prototype.deleteJob = function deleteJob(request, callback) {
                            return this.rpcCall(deleteJob, $root.google.cloud.batch.v1.DeleteJobRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "DeleteJob" });
    
                        /**
                         * Calls DeleteJob.
                         * @function deleteJob
                         * @memberof google.cloud.batch.v1.BatchService
                         * @instance
                         * @param {google.cloud.batch.v1.IDeleteJobRequest} request DeleteJobRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.batch.v1.BatchService|listJobs}.
                         * @memberof google.cloud.batch.v1.BatchService
                         * @typedef ListJobsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.batch.v1.ListJobsResponse} [response] ListJobsResponse
                         */
    
                        /**
                         * Calls ListJobs.
                         * @function listJobs
                         * @memberof google.cloud.batch.v1.BatchService
                         * @instance
                         * @param {google.cloud.batch.v1.IListJobsRequest} request ListJobsRequest message or plain object
                         * @param {google.cloud.batch.v1.BatchService.ListJobsCallback} callback Node-style callback called with the error, if any, and ListJobsResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(BatchService.prototype.listJobs = function listJobs(request, callback) {
                            return this.rpcCall(listJobs, $root.google.cloud.batch.v1.ListJobsRequest, $root.google.cloud.batch.v1.ListJobsResponse, request, callback);
                        }, "name", { value: "ListJobs" });
    
                        /**
                         * Calls ListJobs.
                         * @function listJobs
                         * @memberof google.cloud.batch.v1.BatchService
                         * @instance
                         * @param {google.cloud.batch.v1.IListJobsRequest} request ListJobsRequest message or plain object
                         * @returns {Promise<google.cloud.batch.v1.ListJobsResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.batch.v1.BatchService|getTask}.
                         * @memberof google.cloud.batch.v1.BatchService
                         * @typedef GetTaskCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.batch.v1.Task} [response] Task
                         */
    
                        /**
                         * Calls GetTask.
                         * @function getTask
                         * @memberof google.cloud.batch.v1.BatchService
                         * @instance
                         * @param {google.cloud.batch.v1.IGetTaskRequest} request GetTaskRequest message or plain object
                         * @param {google.cloud.batch.v1.BatchService.GetTaskCallback} callback Node-style callback called with the error, if any, and Task
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(BatchService.prototype.getTask = function getTask(request, callback) {
                            return this.rpcCall(getTask, $root.google.cloud.batch.v1.GetTaskRequest, $root.google.cloud.batch.v1.Task, request, callback);
                        }, "name", { value: "GetTask" });
    
                        /**
                         * Calls GetTask.
                         * @function getTask
                         * @memberof google.cloud.batch.v1.BatchService
                         * @instance
                         * @param {google.cloud.batch.v1.IGetTaskRequest} request GetTaskRequest message or plain object
                         * @returns {Promise<google.cloud.batch.v1.Task>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.cloud.batch.v1.BatchService|listTasks}.
                         * @memberof google.cloud.batch.v1.BatchService
                         * @typedef ListTasksCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.cloud.batch.v1.ListTasksResponse} [response] ListTasksResponse
                         */
    
                        /**
                         * Calls ListTasks.
                         * @function listTasks
                         * @memberof google.cloud.batch.v1.BatchService
                         * @instance
                         * @param {google.cloud.batch.v1.IListTasksRequest} request ListTasksRequest message or plain object
                         * @param {google.cloud.batch.v1.BatchService.ListTasksCallback} callback Node-style callback called with the error, if any, and ListTasksResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(BatchService.prototype.listTasks = function listTasks(request, callback) {
                            return this.rpcCall(listTasks, $root.google.cloud.batch.v1.ListTasksRequest, $root.google.cloud.batch.v1.ListTasksResponse, request, callback);
                        }, "name", { value: "ListTasks" });
    
                        /**
                         * Calls ListTasks.
                         * @function listTasks
                         * @memberof google.cloud.batch.v1.BatchService
                         * @instance
                         * @param {google.cloud.batch.v1.IListTasksRequest} request ListTasksRequest message or plain object
                         * @returns {Promise<google.cloud.batch.v1.ListTasksResponse>} Promise
                         * @variation 2
                         */
    
                        return BatchService;
                    })();
    
                    v1.CreateJobRequest = (function() {
    
                        /**
                         * Properties of a CreateJobRequest.
                         * @memberof google.cloud.batch.v1
                         * @interface ICreateJobRequest
                         * @property {string|null} [parent] CreateJobRequest parent
                         * @property {string|null} [jobId] CreateJobRequest jobId
                         * @property {google.cloud.batch.v1.IJob|null} [job] CreateJobRequest job
                         * @property {string|null} [requestId] CreateJobRequest requestId
                         */
    
                        /**
                         * Constructs a new CreateJobRequest.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents a CreateJobRequest.
                         * @implements ICreateJobRequest
                         * @constructor
                         * @param {google.cloud.batch.v1.ICreateJobRequest=} [properties] Properties to set
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
                         * @memberof google.cloud.batch.v1.CreateJobRequest
                         * @instance
                         */
                        CreateJobRequest.prototype.parent = "";
    
                        /**
                         * CreateJobRequest jobId.
                         * @member {string} jobId
                         * @memberof google.cloud.batch.v1.CreateJobRequest
                         * @instance
                         */
                        CreateJobRequest.prototype.jobId = "";
    
                        /**
                         * CreateJobRequest job.
                         * @member {google.cloud.batch.v1.IJob|null|undefined} job
                         * @memberof google.cloud.batch.v1.CreateJobRequest
                         * @instance
                         */
                        CreateJobRequest.prototype.job = null;
    
                        /**
                         * CreateJobRequest requestId.
                         * @member {string} requestId
                         * @memberof google.cloud.batch.v1.CreateJobRequest
                         * @instance
                         */
                        CreateJobRequest.prototype.requestId = "";
    
                        /**
                         * Creates a new CreateJobRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.batch.v1.CreateJobRequest
                         * @static
                         * @param {google.cloud.batch.v1.ICreateJobRequest=} [properties] Properties to set
                         * @returns {google.cloud.batch.v1.CreateJobRequest} CreateJobRequest instance
                         */
                        CreateJobRequest.create = function create(properties) {
                            return new CreateJobRequest(properties);
                        };
    
                        /**
                         * Encodes the specified CreateJobRequest message. Does not implicitly {@link google.cloud.batch.v1.CreateJobRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.batch.v1.CreateJobRequest
                         * @static
                         * @param {google.cloud.batch.v1.ICreateJobRequest} message CreateJobRequest message or plain object to encode
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
                                $root.google.cloud.batch.v1.Job.encode(message.job, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.requestId);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified CreateJobRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.CreateJobRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.batch.v1.CreateJobRequest
                         * @static
                         * @param {google.cloud.batch.v1.ICreateJobRequest} message CreateJobRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CreateJobRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a CreateJobRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.batch.v1.CreateJobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.batch.v1.CreateJobRequest} CreateJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CreateJobRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.CreateJobRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
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
                                        message.job = $root.google.cloud.batch.v1.Job.decode(reader, reader.uint32());
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
                         * @memberof google.cloud.batch.v1.CreateJobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.batch.v1.CreateJobRequest} CreateJobRequest
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
                         * @memberof google.cloud.batch.v1.CreateJobRequest
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
                                var error = $root.google.cloud.batch.v1.Job.verify(message.job);
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
                         * @memberof google.cloud.batch.v1.CreateJobRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.batch.v1.CreateJobRequest} CreateJobRequest
                         */
                        CreateJobRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.batch.v1.CreateJobRequest)
                                return object;
                            var message = new $root.google.cloud.batch.v1.CreateJobRequest();
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            if (object.jobId != null)
                                message.jobId = String(object.jobId);
                            if (object.job != null) {
                                if (typeof object.job !== "object")
                                    throw TypeError(".google.cloud.batch.v1.CreateJobRequest.job: object expected");
                                message.job = $root.google.cloud.batch.v1.Job.fromObject(object.job);
                            }
                            if (object.requestId != null)
                                message.requestId = String(object.requestId);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a CreateJobRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.batch.v1.CreateJobRequest
                         * @static
                         * @param {google.cloud.batch.v1.CreateJobRequest} message CreateJobRequest
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
                                object.job = $root.google.cloud.batch.v1.Job.toObject(message.job, options);
                            if (message.requestId != null && message.hasOwnProperty("requestId"))
                                object.requestId = message.requestId;
                            return object;
                        };
    
                        /**
                         * Converts this CreateJobRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.batch.v1.CreateJobRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        CreateJobRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for CreateJobRequest
                         * @function getTypeUrl
                         * @memberof google.cloud.batch.v1.CreateJobRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        CreateJobRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.batch.v1.CreateJobRequest";
                        };
    
                        return CreateJobRequest;
                    })();
    
                    v1.GetJobRequest = (function() {
    
                        /**
                         * Properties of a GetJobRequest.
                         * @memberof google.cloud.batch.v1
                         * @interface IGetJobRequest
                         * @property {string|null} [name] GetJobRequest name
                         */
    
                        /**
                         * Constructs a new GetJobRequest.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents a GetJobRequest.
                         * @implements IGetJobRequest
                         * @constructor
                         * @param {google.cloud.batch.v1.IGetJobRequest=} [properties] Properties to set
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
                         * @memberof google.cloud.batch.v1.GetJobRequest
                         * @instance
                         */
                        GetJobRequest.prototype.name = "";
    
                        /**
                         * Creates a new GetJobRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.batch.v1.GetJobRequest
                         * @static
                         * @param {google.cloud.batch.v1.IGetJobRequest=} [properties] Properties to set
                         * @returns {google.cloud.batch.v1.GetJobRequest} GetJobRequest instance
                         */
                        GetJobRequest.create = function create(properties) {
                            return new GetJobRequest(properties);
                        };
    
                        /**
                         * Encodes the specified GetJobRequest message. Does not implicitly {@link google.cloud.batch.v1.GetJobRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.batch.v1.GetJobRequest
                         * @static
                         * @param {google.cloud.batch.v1.IGetJobRequest} message GetJobRequest message or plain object to encode
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
                         * Encodes the specified GetJobRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.GetJobRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.batch.v1.GetJobRequest
                         * @static
                         * @param {google.cloud.batch.v1.IGetJobRequest} message GetJobRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetJobRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a GetJobRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.batch.v1.GetJobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.batch.v1.GetJobRequest} GetJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetJobRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.GetJobRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
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
                         * @memberof google.cloud.batch.v1.GetJobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.batch.v1.GetJobRequest} GetJobRequest
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
                         * @memberof google.cloud.batch.v1.GetJobRequest
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
                         * @memberof google.cloud.batch.v1.GetJobRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.batch.v1.GetJobRequest} GetJobRequest
                         */
                        GetJobRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.batch.v1.GetJobRequest)
                                return object;
                            var message = new $root.google.cloud.batch.v1.GetJobRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a GetJobRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.batch.v1.GetJobRequest
                         * @static
                         * @param {google.cloud.batch.v1.GetJobRequest} message GetJobRequest
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
                         * @memberof google.cloud.batch.v1.GetJobRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GetJobRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for GetJobRequest
                         * @function getTypeUrl
                         * @memberof google.cloud.batch.v1.GetJobRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        GetJobRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.batch.v1.GetJobRequest";
                        };
    
                        return GetJobRequest;
                    })();
    
                    v1.DeleteJobRequest = (function() {
    
                        /**
                         * Properties of a DeleteJobRequest.
                         * @memberof google.cloud.batch.v1
                         * @interface IDeleteJobRequest
                         * @property {string|null} [name] DeleteJobRequest name
                         * @property {string|null} [reason] DeleteJobRequest reason
                         * @property {string|null} [requestId] DeleteJobRequest requestId
                         */
    
                        /**
                         * Constructs a new DeleteJobRequest.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents a DeleteJobRequest.
                         * @implements IDeleteJobRequest
                         * @constructor
                         * @param {google.cloud.batch.v1.IDeleteJobRequest=} [properties] Properties to set
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
                         * @memberof google.cloud.batch.v1.DeleteJobRequest
                         * @instance
                         */
                        DeleteJobRequest.prototype.name = "";
    
                        /**
                         * DeleteJobRequest reason.
                         * @member {string} reason
                         * @memberof google.cloud.batch.v1.DeleteJobRequest
                         * @instance
                         */
                        DeleteJobRequest.prototype.reason = "";
    
                        /**
                         * DeleteJobRequest requestId.
                         * @member {string} requestId
                         * @memberof google.cloud.batch.v1.DeleteJobRequest
                         * @instance
                         */
                        DeleteJobRequest.prototype.requestId = "";
    
                        /**
                         * Creates a new DeleteJobRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.batch.v1.DeleteJobRequest
                         * @static
                         * @param {google.cloud.batch.v1.IDeleteJobRequest=} [properties] Properties to set
                         * @returns {google.cloud.batch.v1.DeleteJobRequest} DeleteJobRequest instance
                         */
                        DeleteJobRequest.create = function create(properties) {
                            return new DeleteJobRequest(properties);
                        };
    
                        /**
                         * Encodes the specified DeleteJobRequest message. Does not implicitly {@link google.cloud.batch.v1.DeleteJobRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.batch.v1.DeleteJobRequest
                         * @static
                         * @param {google.cloud.batch.v1.IDeleteJobRequest} message DeleteJobRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeleteJobRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
                            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.requestId);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified DeleteJobRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.DeleteJobRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.batch.v1.DeleteJobRequest
                         * @static
                         * @param {google.cloud.batch.v1.IDeleteJobRequest} message DeleteJobRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        DeleteJobRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a DeleteJobRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.batch.v1.DeleteJobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.batch.v1.DeleteJobRequest} DeleteJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        DeleteJobRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.DeleteJobRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.name = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.reason = reader.string();
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
                         * Decodes a DeleteJobRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.batch.v1.DeleteJobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.batch.v1.DeleteJobRequest} DeleteJobRequest
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
                         * @memberof google.cloud.batch.v1.DeleteJobRequest
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
                            if (message.reason != null && message.hasOwnProperty("reason"))
                                if (!$util.isString(message.reason))
                                    return "reason: string expected";
                            if (message.requestId != null && message.hasOwnProperty("requestId"))
                                if (!$util.isString(message.requestId))
                                    return "requestId: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a DeleteJobRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.batch.v1.DeleteJobRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.batch.v1.DeleteJobRequest} DeleteJobRequest
                         */
                        DeleteJobRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.batch.v1.DeleteJobRequest)
                                return object;
                            var message = new $root.google.cloud.batch.v1.DeleteJobRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.reason != null)
                                message.reason = String(object.reason);
                            if (object.requestId != null)
                                message.requestId = String(object.requestId);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a DeleteJobRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.batch.v1.DeleteJobRequest
                         * @static
                         * @param {google.cloud.batch.v1.DeleteJobRequest} message DeleteJobRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        DeleteJobRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.name = "";
                                object.reason = "";
                                object.requestId = "";
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.reason != null && message.hasOwnProperty("reason"))
                                object.reason = message.reason;
                            if (message.requestId != null && message.hasOwnProperty("requestId"))
                                object.requestId = message.requestId;
                            return object;
                        };
    
                        /**
                         * Converts this DeleteJobRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.batch.v1.DeleteJobRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        DeleteJobRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for DeleteJobRequest
                         * @function getTypeUrl
                         * @memberof google.cloud.batch.v1.DeleteJobRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        DeleteJobRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.batch.v1.DeleteJobRequest";
                        };
    
                        return DeleteJobRequest;
                    })();
    
                    v1.ListJobsRequest = (function() {
    
                        /**
                         * Properties of a ListJobsRequest.
                         * @memberof google.cloud.batch.v1
                         * @interface IListJobsRequest
                         * @property {string|null} [parent] ListJobsRequest parent
                         * @property {string|null} [filter] ListJobsRequest filter
                         * @property {string|null} [orderBy] ListJobsRequest orderBy
                         * @property {number|null} [pageSize] ListJobsRequest pageSize
                         * @property {string|null} [pageToken] ListJobsRequest pageToken
                         */
    
                        /**
                         * Constructs a new ListJobsRequest.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents a ListJobsRequest.
                         * @implements IListJobsRequest
                         * @constructor
                         * @param {google.cloud.batch.v1.IListJobsRequest=} [properties] Properties to set
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
                         * @memberof google.cloud.batch.v1.ListJobsRequest
                         * @instance
                         */
                        ListJobsRequest.prototype.parent = "";
    
                        /**
                         * ListJobsRequest filter.
                         * @member {string} filter
                         * @memberof google.cloud.batch.v1.ListJobsRequest
                         * @instance
                         */
                        ListJobsRequest.prototype.filter = "";
    
                        /**
                         * ListJobsRequest orderBy.
                         * @member {string} orderBy
                         * @memberof google.cloud.batch.v1.ListJobsRequest
                         * @instance
                         */
                        ListJobsRequest.prototype.orderBy = "";
    
                        /**
                         * ListJobsRequest pageSize.
                         * @member {number} pageSize
                         * @memberof google.cloud.batch.v1.ListJobsRequest
                         * @instance
                         */
                        ListJobsRequest.prototype.pageSize = 0;
    
                        /**
                         * ListJobsRequest pageToken.
                         * @member {string} pageToken
                         * @memberof google.cloud.batch.v1.ListJobsRequest
                         * @instance
                         */
                        ListJobsRequest.prototype.pageToken = "";
    
                        /**
                         * Creates a new ListJobsRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.batch.v1.ListJobsRequest
                         * @static
                         * @param {google.cloud.batch.v1.IListJobsRequest=} [properties] Properties to set
                         * @returns {google.cloud.batch.v1.ListJobsRequest} ListJobsRequest instance
                         */
                        ListJobsRequest.create = function create(properties) {
                            return new ListJobsRequest(properties);
                        };
    
                        /**
                         * Encodes the specified ListJobsRequest message. Does not implicitly {@link google.cloud.batch.v1.ListJobsRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.batch.v1.ListJobsRequest
                         * @static
                         * @param {google.cloud.batch.v1.IListJobsRequest} message ListJobsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListJobsRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
                            if (message.pageToken != null && Object.hasOwnProperty.call(message, "pageToken"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.pageToken);
                            if (message.filter != null && Object.hasOwnProperty.call(message, "filter"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.filter);
                            if (message.orderBy != null && Object.hasOwnProperty.call(message, "orderBy"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.orderBy);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListJobsRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.ListJobsRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.batch.v1.ListJobsRequest
                         * @static
                         * @param {google.cloud.batch.v1.IListJobsRequest} message ListJobsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListJobsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListJobsRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.batch.v1.ListJobsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.batch.v1.ListJobsRequest} ListJobsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListJobsRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.ListJobsRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.parent = reader.string();
                                        break;
                                    }
                                case 4: {
                                        message.filter = reader.string();
                                        break;
                                    }
                                case 5: {
                                        message.orderBy = reader.string();
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
                         * Decodes a ListJobsRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.batch.v1.ListJobsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.batch.v1.ListJobsRequest} ListJobsRequest
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
                         * @memberof google.cloud.batch.v1.ListJobsRequest
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
                            if (message.orderBy != null && message.hasOwnProperty("orderBy"))
                                if (!$util.isString(message.orderBy))
                                    return "orderBy: string expected";
                            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                                if (!$util.isInteger(message.pageSize))
                                    return "pageSize: integer expected";
                            if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                                if (!$util.isString(message.pageToken))
                                    return "pageToken: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a ListJobsRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.batch.v1.ListJobsRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.batch.v1.ListJobsRequest} ListJobsRequest
                         */
                        ListJobsRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.batch.v1.ListJobsRequest)
                                return object;
                            var message = new $root.google.cloud.batch.v1.ListJobsRequest();
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            if (object.filter != null)
                                message.filter = String(object.filter);
                            if (object.orderBy != null)
                                message.orderBy = String(object.orderBy);
                            if (object.pageSize != null)
                                message.pageSize = object.pageSize | 0;
                            if (object.pageToken != null)
                                message.pageToken = String(object.pageToken);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ListJobsRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.batch.v1.ListJobsRequest
                         * @static
                         * @param {google.cloud.batch.v1.ListJobsRequest} message ListJobsRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ListJobsRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.parent = "";
                                object.pageSize = 0;
                                object.pageToken = "";
                                object.filter = "";
                                object.orderBy = "";
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                object.parent = message.parent;
                            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                                object.pageSize = message.pageSize;
                            if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                                object.pageToken = message.pageToken;
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                object.filter = message.filter;
                            if (message.orderBy != null && message.hasOwnProperty("orderBy"))
                                object.orderBy = message.orderBy;
                            return object;
                        };
    
                        /**
                         * Converts this ListJobsRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.batch.v1.ListJobsRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ListJobsRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ListJobsRequest
                         * @function getTypeUrl
                         * @memberof google.cloud.batch.v1.ListJobsRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ListJobsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.batch.v1.ListJobsRequest";
                        };
    
                        return ListJobsRequest;
                    })();
    
                    v1.ListJobsResponse = (function() {
    
                        /**
                         * Properties of a ListJobsResponse.
                         * @memberof google.cloud.batch.v1
                         * @interface IListJobsResponse
                         * @property {Array.<google.cloud.batch.v1.IJob>|null} [jobs] ListJobsResponse jobs
                         * @property {string|null} [nextPageToken] ListJobsResponse nextPageToken
                         * @property {Array.<string>|null} [unreachable] ListJobsResponse unreachable
                         */
    
                        /**
                         * Constructs a new ListJobsResponse.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents a ListJobsResponse.
                         * @implements IListJobsResponse
                         * @constructor
                         * @param {google.cloud.batch.v1.IListJobsResponse=} [properties] Properties to set
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
                         * @member {Array.<google.cloud.batch.v1.IJob>} jobs
                         * @memberof google.cloud.batch.v1.ListJobsResponse
                         * @instance
                         */
                        ListJobsResponse.prototype.jobs = $util.emptyArray;
    
                        /**
                         * ListJobsResponse nextPageToken.
                         * @member {string} nextPageToken
                         * @memberof google.cloud.batch.v1.ListJobsResponse
                         * @instance
                         */
                        ListJobsResponse.prototype.nextPageToken = "";
    
                        /**
                         * ListJobsResponse unreachable.
                         * @member {Array.<string>} unreachable
                         * @memberof google.cloud.batch.v1.ListJobsResponse
                         * @instance
                         */
                        ListJobsResponse.prototype.unreachable = $util.emptyArray;
    
                        /**
                         * Creates a new ListJobsResponse instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.batch.v1.ListJobsResponse
                         * @static
                         * @param {google.cloud.batch.v1.IListJobsResponse=} [properties] Properties to set
                         * @returns {google.cloud.batch.v1.ListJobsResponse} ListJobsResponse instance
                         */
                        ListJobsResponse.create = function create(properties) {
                            return new ListJobsResponse(properties);
                        };
    
                        /**
                         * Encodes the specified ListJobsResponse message. Does not implicitly {@link google.cloud.batch.v1.ListJobsResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.batch.v1.ListJobsResponse
                         * @static
                         * @param {google.cloud.batch.v1.IListJobsResponse} message ListJobsResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListJobsResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.jobs != null && message.jobs.length)
                                for (var i = 0; i < message.jobs.length; ++i)
                                    $root.google.cloud.batch.v1.Job.encode(message.jobs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextPageToken);
                            if (message.unreachable != null && message.unreachable.length)
                                for (var i = 0; i < message.unreachable.length; ++i)
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.unreachable[i]);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListJobsResponse message, length delimited. Does not implicitly {@link google.cloud.batch.v1.ListJobsResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.batch.v1.ListJobsResponse
                         * @static
                         * @param {google.cloud.batch.v1.IListJobsResponse} message ListJobsResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListJobsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListJobsResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.batch.v1.ListJobsResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.batch.v1.ListJobsResponse} ListJobsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListJobsResponse.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.ListJobsResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.jobs && message.jobs.length))
                                            message.jobs = [];
                                        message.jobs.push($root.google.cloud.batch.v1.Job.decode(reader, reader.uint32()));
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
                         * @memberof google.cloud.batch.v1.ListJobsResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.batch.v1.ListJobsResponse} ListJobsResponse
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
                         * @memberof google.cloud.batch.v1.ListJobsResponse
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
                                    var error = $root.google.cloud.batch.v1.Job.verify(message.jobs[i]);
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
                         * @memberof google.cloud.batch.v1.ListJobsResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.batch.v1.ListJobsResponse} ListJobsResponse
                         */
                        ListJobsResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.batch.v1.ListJobsResponse)
                                return object;
                            var message = new $root.google.cloud.batch.v1.ListJobsResponse();
                            if (object.jobs) {
                                if (!Array.isArray(object.jobs))
                                    throw TypeError(".google.cloud.batch.v1.ListJobsResponse.jobs: array expected");
                                message.jobs = [];
                                for (var i = 0; i < object.jobs.length; ++i) {
                                    if (typeof object.jobs[i] !== "object")
                                        throw TypeError(".google.cloud.batch.v1.ListJobsResponse.jobs: object expected");
                                    message.jobs[i] = $root.google.cloud.batch.v1.Job.fromObject(object.jobs[i]);
                                }
                            }
                            if (object.nextPageToken != null)
                                message.nextPageToken = String(object.nextPageToken);
                            if (object.unreachable) {
                                if (!Array.isArray(object.unreachable))
                                    throw TypeError(".google.cloud.batch.v1.ListJobsResponse.unreachable: array expected");
                                message.unreachable = [];
                                for (var i = 0; i < object.unreachable.length; ++i)
                                    message.unreachable[i] = String(object.unreachable[i]);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ListJobsResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.batch.v1.ListJobsResponse
                         * @static
                         * @param {google.cloud.batch.v1.ListJobsResponse} message ListJobsResponse
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
                                    object.jobs[j] = $root.google.cloud.batch.v1.Job.toObject(message.jobs[j], options);
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
                         * @memberof google.cloud.batch.v1.ListJobsResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ListJobsResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ListJobsResponse
                         * @function getTypeUrl
                         * @memberof google.cloud.batch.v1.ListJobsResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ListJobsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.batch.v1.ListJobsResponse";
                        };
    
                        return ListJobsResponse;
                    })();
    
                    v1.ListTasksRequest = (function() {
    
                        /**
                         * Properties of a ListTasksRequest.
                         * @memberof google.cloud.batch.v1
                         * @interface IListTasksRequest
                         * @property {string|null} [parent] ListTasksRequest parent
                         * @property {string|null} [filter] ListTasksRequest filter
                         * @property {number|null} [pageSize] ListTasksRequest pageSize
                         * @property {string|null} [pageToken] ListTasksRequest pageToken
                         */
    
                        /**
                         * Constructs a new ListTasksRequest.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents a ListTasksRequest.
                         * @implements IListTasksRequest
                         * @constructor
                         * @param {google.cloud.batch.v1.IListTasksRequest=} [properties] Properties to set
                         */
                        function ListTasksRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ListTasksRequest parent.
                         * @member {string} parent
                         * @memberof google.cloud.batch.v1.ListTasksRequest
                         * @instance
                         */
                        ListTasksRequest.prototype.parent = "";
    
                        /**
                         * ListTasksRequest filter.
                         * @member {string} filter
                         * @memberof google.cloud.batch.v1.ListTasksRequest
                         * @instance
                         */
                        ListTasksRequest.prototype.filter = "";
    
                        /**
                         * ListTasksRequest pageSize.
                         * @member {number} pageSize
                         * @memberof google.cloud.batch.v1.ListTasksRequest
                         * @instance
                         */
                        ListTasksRequest.prototype.pageSize = 0;
    
                        /**
                         * ListTasksRequest pageToken.
                         * @member {string} pageToken
                         * @memberof google.cloud.batch.v1.ListTasksRequest
                         * @instance
                         */
                        ListTasksRequest.prototype.pageToken = "";
    
                        /**
                         * Creates a new ListTasksRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.batch.v1.ListTasksRequest
                         * @static
                         * @param {google.cloud.batch.v1.IListTasksRequest=} [properties] Properties to set
                         * @returns {google.cloud.batch.v1.ListTasksRequest} ListTasksRequest instance
                         */
                        ListTasksRequest.create = function create(properties) {
                            return new ListTasksRequest(properties);
                        };
    
                        /**
                         * Encodes the specified ListTasksRequest message. Does not implicitly {@link google.cloud.batch.v1.ListTasksRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.batch.v1.ListTasksRequest
                         * @static
                         * @param {google.cloud.batch.v1.IListTasksRequest} message ListTasksRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListTasksRequest.encode = function encode(message, writer) {
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
                         * Encodes the specified ListTasksRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.ListTasksRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.batch.v1.ListTasksRequest
                         * @static
                         * @param {google.cloud.batch.v1.IListTasksRequest} message ListTasksRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListTasksRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListTasksRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.batch.v1.ListTasksRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.batch.v1.ListTasksRequest} ListTasksRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListTasksRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.ListTasksRequest();
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
                         * Decodes a ListTasksRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.batch.v1.ListTasksRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.batch.v1.ListTasksRequest} ListTasksRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListTasksRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ListTasksRequest message.
                         * @function verify
                         * @memberof google.cloud.batch.v1.ListTasksRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ListTasksRequest.verify = function verify(message) {
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
    
                        /**
                         * Creates a ListTasksRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.batch.v1.ListTasksRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.batch.v1.ListTasksRequest} ListTasksRequest
                         */
                        ListTasksRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.batch.v1.ListTasksRequest)
                                return object;
                            var message = new $root.google.cloud.batch.v1.ListTasksRequest();
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            if (object.filter != null)
                                message.filter = String(object.filter);
                            if (object.pageSize != null)
                                message.pageSize = object.pageSize | 0;
                            if (object.pageToken != null)
                                message.pageToken = String(object.pageToken);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ListTasksRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.batch.v1.ListTasksRequest
                         * @static
                         * @param {google.cloud.batch.v1.ListTasksRequest} message ListTasksRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ListTasksRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.parent = "";
                                object.filter = "";
                                object.pageSize = 0;
                                object.pageToken = "";
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                object.parent = message.parent;
                            if (message.filter != null && message.hasOwnProperty("filter"))
                                object.filter = message.filter;
                            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                                object.pageSize = message.pageSize;
                            if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                                object.pageToken = message.pageToken;
                            return object;
                        };
    
                        /**
                         * Converts this ListTasksRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.batch.v1.ListTasksRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ListTasksRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ListTasksRequest
                         * @function getTypeUrl
                         * @memberof google.cloud.batch.v1.ListTasksRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ListTasksRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.batch.v1.ListTasksRequest";
                        };
    
                        return ListTasksRequest;
                    })();
    
                    v1.ListTasksResponse = (function() {
    
                        /**
                         * Properties of a ListTasksResponse.
                         * @memberof google.cloud.batch.v1
                         * @interface IListTasksResponse
                         * @property {Array.<google.cloud.batch.v1.ITask>|null} [tasks] ListTasksResponse tasks
                         * @property {string|null} [nextPageToken] ListTasksResponse nextPageToken
                         * @property {Array.<string>|null} [unreachable] ListTasksResponse unreachable
                         */
    
                        /**
                         * Constructs a new ListTasksResponse.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents a ListTasksResponse.
                         * @implements IListTasksResponse
                         * @constructor
                         * @param {google.cloud.batch.v1.IListTasksResponse=} [properties] Properties to set
                         */
                        function ListTasksResponse(properties) {
                            this.tasks = [];
                            this.unreachable = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ListTasksResponse tasks.
                         * @member {Array.<google.cloud.batch.v1.ITask>} tasks
                         * @memberof google.cloud.batch.v1.ListTasksResponse
                         * @instance
                         */
                        ListTasksResponse.prototype.tasks = $util.emptyArray;
    
                        /**
                         * ListTasksResponse nextPageToken.
                         * @member {string} nextPageToken
                         * @memberof google.cloud.batch.v1.ListTasksResponse
                         * @instance
                         */
                        ListTasksResponse.prototype.nextPageToken = "";
    
                        /**
                         * ListTasksResponse unreachable.
                         * @member {Array.<string>} unreachable
                         * @memberof google.cloud.batch.v1.ListTasksResponse
                         * @instance
                         */
                        ListTasksResponse.prototype.unreachable = $util.emptyArray;
    
                        /**
                         * Creates a new ListTasksResponse instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.batch.v1.ListTasksResponse
                         * @static
                         * @param {google.cloud.batch.v1.IListTasksResponse=} [properties] Properties to set
                         * @returns {google.cloud.batch.v1.ListTasksResponse} ListTasksResponse instance
                         */
                        ListTasksResponse.create = function create(properties) {
                            return new ListTasksResponse(properties);
                        };
    
                        /**
                         * Encodes the specified ListTasksResponse message. Does not implicitly {@link google.cloud.batch.v1.ListTasksResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.batch.v1.ListTasksResponse
                         * @static
                         * @param {google.cloud.batch.v1.IListTasksResponse} message ListTasksResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListTasksResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.tasks != null && message.tasks.length)
                                for (var i = 0; i < message.tasks.length; ++i)
                                    $root.google.cloud.batch.v1.Task.encode(message.tasks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.nextPageToken != null && Object.hasOwnProperty.call(message, "nextPageToken"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextPageToken);
                            if (message.unreachable != null && message.unreachable.length)
                                for (var i = 0; i < message.unreachable.length; ++i)
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.unreachable[i]);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListTasksResponse message, length delimited. Does not implicitly {@link google.cloud.batch.v1.ListTasksResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.batch.v1.ListTasksResponse
                         * @static
                         * @param {google.cloud.batch.v1.IListTasksResponse} message ListTasksResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListTasksResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListTasksResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.batch.v1.ListTasksResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.batch.v1.ListTasksResponse} ListTasksResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListTasksResponse.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.ListTasksResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        if (!(message.tasks && message.tasks.length))
                                            message.tasks = [];
                                        message.tasks.push($root.google.cloud.batch.v1.Task.decode(reader, reader.uint32()));
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
                         * Decodes a ListTasksResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.batch.v1.ListTasksResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.batch.v1.ListTasksResponse} ListTasksResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListTasksResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ListTasksResponse message.
                         * @function verify
                         * @memberof google.cloud.batch.v1.ListTasksResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ListTasksResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.tasks != null && message.hasOwnProperty("tasks")) {
                                if (!Array.isArray(message.tasks))
                                    return "tasks: array expected";
                                for (var i = 0; i < message.tasks.length; ++i) {
                                    var error = $root.google.cloud.batch.v1.Task.verify(message.tasks[i]);
                                    if (error)
                                        return "tasks." + error;
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
                         * Creates a ListTasksResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.batch.v1.ListTasksResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.batch.v1.ListTasksResponse} ListTasksResponse
                         */
                        ListTasksResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.batch.v1.ListTasksResponse)
                                return object;
                            var message = new $root.google.cloud.batch.v1.ListTasksResponse();
                            if (object.tasks) {
                                if (!Array.isArray(object.tasks))
                                    throw TypeError(".google.cloud.batch.v1.ListTasksResponse.tasks: array expected");
                                message.tasks = [];
                                for (var i = 0; i < object.tasks.length; ++i) {
                                    if (typeof object.tasks[i] !== "object")
                                        throw TypeError(".google.cloud.batch.v1.ListTasksResponse.tasks: object expected");
                                    message.tasks[i] = $root.google.cloud.batch.v1.Task.fromObject(object.tasks[i]);
                                }
                            }
                            if (object.nextPageToken != null)
                                message.nextPageToken = String(object.nextPageToken);
                            if (object.unreachable) {
                                if (!Array.isArray(object.unreachable))
                                    throw TypeError(".google.cloud.batch.v1.ListTasksResponse.unreachable: array expected");
                                message.unreachable = [];
                                for (var i = 0; i < object.unreachable.length; ++i)
                                    message.unreachable[i] = String(object.unreachable[i]);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ListTasksResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.batch.v1.ListTasksResponse
                         * @static
                         * @param {google.cloud.batch.v1.ListTasksResponse} message ListTasksResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ListTasksResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.tasks = [];
                                object.unreachable = [];
                            }
                            if (options.defaults)
                                object.nextPageToken = "";
                            if (message.tasks && message.tasks.length) {
                                object.tasks = [];
                                for (var j = 0; j < message.tasks.length; ++j)
                                    object.tasks[j] = $root.google.cloud.batch.v1.Task.toObject(message.tasks[j], options);
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
                         * Converts this ListTasksResponse to JSON.
                         * @function toJSON
                         * @memberof google.cloud.batch.v1.ListTasksResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ListTasksResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for ListTasksResponse
                         * @function getTypeUrl
                         * @memberof google.cloud.batch.v1.ListTasksResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        ListTasksResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.batch.v1.ListTasksResponse";
                        };
    
                        return ListTasksResponse;
                    })();
    
                    v1.GetTaskRequest = (function() {
    
                        /**
                         * Properties of a GetTaskRequest.
                         * @memberof google.cloud.batch.v1
                         * @interface IGetTaskRequest
                         * @property {string|null} [name] GetTaskRequest name
                         */
    
                        /**
                         * Constructs a new GetTaskRequest.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents a GetTaskRequest.
                         * @implements IGetTaskRequest
                         * @constructor
                         * @param {google.cloud.batch.v1.IGetTaskRequest=} [properties] Properties to set
                         */
                        function GetTaskRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * GetTaskRequest name.
                         * @member {string} name
                         * @memberof google.cloud.batch.v1.GetTaskRequest
                         * @instance
                         */
                        GetTaskRequest.prototype.name = "";
    
                        /**
                         * Creates a new GetTaskRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.batch.v1.GetTaskRequest
                         * @static
                         * @param {google.cloud.batch.v1.IGetTaskRequest=} [properties] Properties to set
                         * @returns {google.cloud.batch.v1.GetTaskRequest} GetTaskRequest instance
                         */
                        GetTaskRequest.create = function create(properties) {
                            return new GetTaskRequest(properties);
                        };
    
                        /**
                         * Encodes the specified GetTaskRequest message. Does not implicitly {@link google.cloud.batch.v1.GetTaskRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.batch.v1.GetTaskRequest
                         * @static
                         * @param {google.cloud.batch.v1.IGetTaskRequest} message GetTaskRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetTaskRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified GetTaskRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.GetTaskRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.batch.v1.GetTaskRequest
                         * @static
                         * @param {google.cloud.batch.v1.IGetTaskRequest} message GetTaskRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GetTaskRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a GetTaskRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.batch.v1.GetTaskRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.batch.v1.GetTaskRequest} GetTaskRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetTaskRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.GetTaskRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
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
                         * Decodes a GetTaskRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.batch.v1.GetTaskRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.batch.v1.GetTaskRequest} GetTaskRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GetTaskRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a GetTaskRequest message.
                         * @function verify
                         * @memberof google.cloud.batch.v1.GetTaskRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GetTaskRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a GetTaskRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.batch.v1.GetTaskRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.batch.v1.GetTaskRequest} GetTaskRequest
                         */
                        GetTaskRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.batch.v1.GetTaskRequest)
                                return object;
                            var message = new $root.google.cloud.batch.v1.GetTaskRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a GetTaskRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.batch.v1.GetTaskRequest
                         * @static
                         * @param {google.cloud.batch.v1.GetTaskRequest} message GetTaskRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GetTaskRequest.toObject = function toObject(message, options) {
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
                         * Converts this GetTaskRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.batch.v1.GetTaskRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GetTaskRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for GetTaskRequest
                         * @function getTypeUrl
                         * @memberof google.cloud.batch.v1.GetTaskRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        GetTaskRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.batch.v1.GetTaskRequest";
                        };
    
                        return GetTaskRequest;
                    })();
    
                    v1.OperationMetadata = (function() {
    
                        /**
                         * Properties of an OperationMetadata.
                         * @memberof google.cloud.batch.v1
                         * @interface IOperationMetadata
                         * @property {google.protobuf.ITimestamp|null} [createTime] OperationMetadata createTime
                         * @property {google.protobuf.ITimestamp|null} [endTime] OperationMetadata endTime
                         * @property {string|null} [target] OperationMetadata target
                         * @property {string|null} [verb] OperationMetadata verb
                         * @property {string|null} [statusMessage] OperationMetadata statusMessage
                         * @property {boolean|null} [requestedCancellation] OperationMetadata requestedCancellation
                         * @property {string|null} [apiVersion] OperationMetadata apiVersion
                         */
    
                        /**
                         * Constructs a new OperationMetadata.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents an OperationMetadata.
                         * @implements IOperationMetadata
                         * @constructor
                         * @param {google.cloud.batch.v1.IOperationMetadata=} [properties] Properties to set
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
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.createTime = null;
    
                        /**
                         * OperationMetadata endTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} endTime
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.endTime = null;
    
                        /**
                         * OperationMetadata target.
                         * @member {string} target
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.target = "";
    
                        /**
                         * OperationMetadata verb.
                         * @member {string} verb
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.verb = "";
    
                        /**
                         * OperationMetadata statusMessage.
                         * @member {string} statusMessage
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.statusMessage = "";
    
                        /**
                         * OperationMetadata requestedCancellation.
                         * @member {boolean} requestedCancellation
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.requestedCancellation = false;
    
                        /**
                         * OperationMetadata apiVersion.
                         * @member {string} apiVersion
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.apiVersion = "";
    
                        /**
                         * Creates a new OperationMetadata instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @static
                         * @param {google.cloud.batch.v1.IOperationMetadata=} [properties] Properties to set
                         * @returns {google.cloud.batch.v1.OperationMetadata} OperationMetadata instance
                         */
                        OperationMetadata.create = function create(properties) {
                            return new OperationMetadata(properties);
                        };
    
                        /**
                         * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.batch.v1.OperationMetadata.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @static
                         * @param {google.cloud.batch.v1.IOperationMetadata} message OperationMetadata message or plain object to encode
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
                            if (message.statusMessage != null && Object.hasOwnProperty.call(message, "statusMessage"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.statusMessage);
                            if (message.requestedCancellation != null && Object.hasOwnProperty.call(message, "requestedCancellation"))
                                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.requestedCancellation);
                            if (message.apiVersion != null && Object.hasOwnProperty.call(message, "apiVersion"))
                                writer.uint32(/* id 7, wireType 2 =*/58).string(message.apiVersion);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.batch.v1.OperationMetadata.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @static
                         * @param {google.cloud.batch.v1.IOperationMetadata} message OperationMetadata message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        OperationMetadata.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an OperationMetadata message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.batch.v1.OperationMetadata} OperationMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        OperationMetadata.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.OperationMetadata();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
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
                                        message.statusMessage = reader.string();
                                        break;
                                    }
                                case 6: {
                                        message.requestedCancellation = reader.bool();
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
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.batch.v1.OperationMetadata} OperationMetadata
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
                         * @memberof google.cloud.batch.v1.OperationMetadata
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
                            if (message.statusMessage != null && message.hasOwnProperty("statusMessage"))
                                if (!$util.isString(message.statusMessage))
                                    return "statusMessage: string expected";
                            if (message.requestedCancellation != null && message.hasOwnProperty("requestedCancellation"))
                                if (typeof message.requestedCancellation !== "boolean")
                                    return "requestedCancellation: boolean expected";
                            if (message.apiVersion != null && message.hasOwnProperty("apiVersion"))
                                if (!$util.isString(message.apiVersion))
                                    return "apiVersion: string expected";
                            return null;
                        };
    
                        /**
                         * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.batch.v1.OperationMetadata} OperationMetadata
                         */
                        OperationMetadata.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.batch.v1.OperationMetadata)
                                return object;
                            var message = new $root.google.cloud.batch.v1.OperationMetadata();
                            if (object.createTime != null) {
                                if (typeof object.createTime !== "object")
                                    throw TypeError(".google.cloud.batch.v1.OperationMetadata.createTime: object expected");
                                message.createTime = $root.google.protobuf.Timestamp.fromObject(object.createTime);
                            }
                            if (object.endTime != null) {
                                if (typeof object.endTime !== "object")
                                    throw TypeError(".google.cloud.batch.v1.OperationMetadata.endTime: object expected");
                                message.endTime = $root.google.protobuf.Timestamp.fromObject(object.endTime);
                            }
                            if (object.target != null)
                                message.target = String(object.target);
                            if (object.verb != null)
                                message.verb = String(object.verb);
                            if (object.statusMessage != null)
                                message.statusMessage = String(object.statusMessage);
                            if (object.requestedCancellation != null)
                                message.requestedCancellation = Boolean(object.requestedCancellation);
                            if (object.apiVersion != null)
                                message.apiVersion = String(object.apiVersion);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @static
                         * @param {google.cloud.batch.v1.OperationMetadata} message OperationMetadata
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
                                object.statusMessage = "";
                                object.requestedCancellation = false;
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
                            if (message.statusMessage != null && message.hasOwnProperty("statusMessage"))
                                object.statusMessage = message.statusMessage;
                            if (message.requestedCancellation != null && message.hasOwnProperty("requestedCancellation"))
                                object.requestedCancellation = message.requestedCancellation;
                            if (message.apiVersion != null && message.hasOwnProperty("apiVersion"))
                                object.apiVersion = message.apiVersion;
                            return object;
                        };
    
                        /**
                         * Converts this OperationMetadata to JSON.
                         * @function toJSON
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        OperationMetadata.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for OperationMetadata
                         * @function getTypeUrl
                         * @memberof google.cloud.batch.v1.OperationMetadata
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        OperationMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.batch.v1.OperationMetadata";
                        };
    
                        return OperationMetadata;
                    })();
    
                    v1.Job = (function() {
    
                        /**
                         * Properties of a Job.
                         * @memberof google.cloud.batch.v1
                         * @interface IJob
                         * @property {string|null} [name] Job name
                         * @property {string|null} [uid] Job uid
                         * @property {number|Long|null} [priority] Job priority
                         * @property {Array.<google.cloud.batch.v1.ITaskGroup>|null} [taskGroups] Job taskGroups
                         * @property {google.cloud.batch.v1.IAllocationPolicy|null} [allocationPolicy] Job allocationPolicy
                         * @property {Object.<string,string>|null} [labels] Job labels
                         * @property {google.cloud.batch.v1.IJobStatus|null} [status] Job status
                         * @property {google.protobuf.ITimestamp|null} [createTime] Job createTime
                         * @property {google.protobuf.ITimestamp|null} [updateTime] Job updateTime
                         * @property {google.cloud.batch.v1.ILogsPolicy|null} [logsPolicy] Job logsPolicy
                         * @property {Array.<google.cloud.batch.v1.IJobNotification>|null} [notifications] Job notifications
                         */
    
                        /**
                         * Constructs a new Job.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents a Job.
                         * @implements IJob
                         * @constructor
                         * @param {google.cloud.batch.v1.IJob=} [properties] Properties to set
                         */
                        function Job(properties) {
                            this.taskGroups = [];
                            this.labels = {};
                            this.notifications = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Job name.
                         * @member {string} name
                         * @memberof google.cloud.batch.v1.Job
                         * @instance
                         */
                        Job.prototype.name = "";
    
                        /**
                         * Job uid.
                         * @member {string} uid
                         * @memberof google.cloud.batch.v1.Job
                         * @instance
                         */
                        Job.prototype.uid = "";
    
                        /**
                         * Job priority.
                         * @member {number|Long} priority
                         * @memberof google.cloud.batch.v1.Job
                         * @instance
                         */
                        Job.prototype.priority = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                        /**
                         * Job taskGroups.
                         * @member {Array.<google.cloud.batch.v1.ITaskGroup>} taskGroups
                         * @memberof google.cloud.batch.v1.Job
                         * @instance
                         */
                        Job.prototype.taskGroups = $util.emptyArray;
    
                        /**
                         * Job allocationPolicy.
                         * @member {google.cloud.batch.v1.IAllocationPolicy|null|undefined} allocationPolicy
                         * @memberof google.cloud.batch.v1.Job
                         * @instance
                         */
                        Job.prototype.allocationPolicy = null;
    
                        /**
                         * Job labels.
                         * @member {Object.<string,string>} labels
                         * @memberof google.cloud.batch.v1.Job
                         * @instance
                         */
                        Job.prototype.labels = $util.emptyObject;
    
                        /**
                         * Job status.
                         * @member {google.cloud.batch.v1.IJobStatus|null|undefined} status
                         * @memberof google.cloud.batch.v1.Job
                         * @instance
                         */
                        Job.prototype.status = null;
    
                        /**
                         * Job createTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} createTime
                         * @memberof google.cloud.batch.v1.Job
                         * @instance
                         */
                        Job.prototype.createTime = null;
    
                        /**
                         * Job updateTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} updateTime
                         * @memberof google.cloud.batch.v1.Job
                         * @instance
                         */
                        Job.prototype.updateTime = null;
    
                        /**
                         * Job logsPolicy.
                         * @member {google.cloud.batch.v1.ILogsPolicy|null|undefined} logsPolicy
                         * @memberof google.cloud.batch.v1.Job
                         * @instance
                         */
                        Job.prototype.logsPolicy = null;
    
                        /**
                         * Job notifications.
                         * @member {Array.<google.cloud.batch.v1.IJobNotification>} notifications
                         * @memberof google.cloud.batch.v1.Job
                         * @instance
                         */
                        Job.prototype.notifications = $util.emptyArray;
    
                        /**
                         * Creates a new Job instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.batch.v1.Job
                         * @static
                         * @param {google.cloud.batch.v1.IJob=} [properties] Properties to set
                         * @returns {google.cloud.batch.v1.Job} Job instance
                         */
                        Job.create = function create(properties) {
                            return new Job(properties);
                        };
    
                        /**
                         * Encodes the specified Job message. Does not implicitly {@link google.cloud.batch.v1.Job.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.batch.v1.Job
                         * @static
                         * @param {google.cloud.batch.v1.IJob} message Job message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Job.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uid);
                            if (message.priority != null && Object.hasOwnProperty.call(message, "priority"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.priority);
                            if (message.taskGroups != null && message.taskGroups.length)
                                for (var i = 0; i < message.taskGroups.length; ++i)
                                    $root.google.cloud.batch.v1.TaskGroup.encode(message.taskGroups[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.allocationPolicy != null && Object.hasOwnProperty.call(message, "allocationPolicy"))
                                $root.google.cloud.batch.v1.AllocationPolicy.encode(message.allocationPolicy, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                            if (message.labels != null && Object.hasOwnProperty.call(message, "labels"))
                                for (var keys = Object.keys(message.labels), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.labels[keys[i]]).ldelim();
                            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                                $root.google.cloud.batch.v1.JobStatus.encode(message.status, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                                $root.google.protobuf.Timestamp.encode(message.createTime, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                            if (message.updateTime != null && Object.hasOwnProperty.call(message, "updateTime"))
                                $root.google.protobuf.Timestamp.encode(message.updateTime, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                            if (message.logsPolicy != null && Object.hasOwnProperty.call(message, "logsPolicy"))
                                $root.google.cloud.batch.v1.LogsPolicy.encode(message.logsPolicy, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                            if (message.notifications != null && message.notifications.length)
                                for (var i = 0; i < message.notifications.length; ++i)
                                    $root.google.cloud.batch.v1.JobNotification.encode(message.notifications[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Job message, length delimited. Does not implicitly {@link google.cloud.batch.v1.Job.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.batch.v1.Job
                         * @static
                         * @param {google.cloud.batch.v1.IJob} message Job message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Job.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a Job message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.batch.v1.Job
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.batch.v1.Job} Job
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Job.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.Job(), key, value;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.name = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.uid = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.priority = reader.int64();
                                        break;
                                    }
                                case 4: {
                                        if (!(message.taskGroups && message.taskGroups.length))
                                            message.taskGroups = [];
                                        message.taskGroups.push($root.google.cloud.batch.v1.TaskGroup.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 7: {
                                        message.allocationPolicy = $root.google.cloud.batch.v1.AllocationPolicy.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 8: {
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
                                case 9: {
                                        message.status = $root.google.cloud.batch.v1.JobStatus.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 11: {
                                        message.createTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 12: {
                                        message.updateTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 13: {
                                        message.logsPolicy = $root.google.cloud.batch.v1.LogsPolicy.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 14: {
                                        if (!(message.notifications && message.notifications.length))
                                            message.notifications = [];
                                        message.notifications.push($root.google.cloud.batch.v1.JobNotification.decode(reader, reader.uint32()));
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
                         * @memberof google.cloud.batch.v1.Job
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.batch.v1.Job} Job
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
                         * @memberof google.cloud.batch.v1.Job
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Job.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.uid != null && message.hasOwnProperty("uid"))
                                if (!$util.isString(message.uid))
                                    return "uid: string expected";
                            if (message.priority != null && message.hasOwnProperty("priority"))
                                if (!$util.isInteger(message.priority) && !(message.priority && $util.isInteger(message.priority.low) && $util.isInteger(message.priority.high)))
                                    return "priority: integer|Long expected";
                            if (message.taskGroups != null && message.hasOwnProperty("taskGroups")) {
                                if (!Array.isArray(message.taskGroups))
                                    return "taskGroups: array expected";
                                for (var i = 0; i < message.taskGroups.length; ++i) {
                                    var error = $root.google.cloud.batch.v1.TaskGroup.verify(message.taskGroups[i]);
                                    if (error)
                                        return "taskGroups." + error;
                                }
                            }
                            if (message.allocationPolicy != null && message.hasOwnProperty("allocationPolicy")) {
                                var error = $root.google.cloud.batch.v1.AllocationPolicy.verify(message.allocationPolicy);
                                if (error)
                                    return "allocationPolicy." + error;
                            }
                            if (message.labels != null && message.hasOwnProperty("labels")) {
                                if (!$util.isObject(message.labels))
                                    return "labels: object expected";
                                var key = Object.keys(message.labels);
                                for (var i = 0; i < key.length; ++i)
                                    if (!$util.isString(message.labels[key[i]]))
                                        return "labels: string{k:string} expected";
                            }
                            if (message.status != null && message.hasOwnProperty("status")) {
                                var error = $root.google.cloud.batch.v1.JobStatus.verify(message.status);
                                if (error)
                                    return "status." + error;
                            }
                            if (message.createTime != null && message.hasOwnProperty("createTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.createTime);
                                if (error)
                                    return "createTime." + error;
                            }
                            if (message.updateTime != null && message.hasOwnProperty("updateTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.updateTime);
                                if (error)
                                    return "updateTime." + error;
                            }
                            if (message.logsPolicy != null && message.hasOwnProperty("logsPolicy")) {
                                var error = $root.google.cloud.batch.v1.LogsPolicy.verify(message.logsPolicy);
                                if (error)
                                    return "logsPolicy." + error;
                            }
                            if (message.notifications != null && message.hasOwnProperty("notifications")) {
                                if (!Array.isArray(message.notifications))
                                    return "notifications: array expected";
                                for (var i = 0; i < message.notifications.length; ++i) {
                                    var error = $root.google.cloud.batch.v1.JobNotification.verify(message.notifications[i]);
                                    if (error)
                                        return "notifications." + error;
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates a Job message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.batch.v1.Job
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.batch.v1.Job} Job
                         */
                        Job.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.batch.v1.Job)
                                return object;
                            var message = new $root.google.cloud.batch.v1.Job();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.uid != null)
                                message.uid = String(object.uid);
                            if (object.priority != null)
                                if ($util.Long)
                                    (message.priority = $util.Long.fromValue(object.priority)).unsigned = false;
                                else if (typeof object.priority === "string")
                                    message.priority = parseInt(object.priority, 10);
                                else if (typeof object.priority === "number")
                                    message.priority = object.priority;
                                else if (typeof object.priority === "object")
                                    message.priority = new $util.LongBits(object.priority.low >>> 0, object.priority.high >>> 0).toNumber();
                            if (object.taskGroups) {
                                if (!Array.isArray(object.taskGroups))
                                    throw TypeError(".google.cloud.batch.v1.Job.taskGroups: array expected");
                                message.taskGroups = [];
                                for (var i = 0; i < object.taskGroups.length; ++i) {
                                    if (typeof object.taskGroups[i] !== "object")
                                        throw TypeError(".google.cloud.batch.v1.Job.taskGroups: object expected");
                                    message.taskGroups[i] = $root.google.cloud.batch.v1.TaskGroup.fromObject(object.taskGroups[i]);
                                }
                            }
                            if (object.allocationPolicy != null) {
                                if (typeof object.allocationPolicy !== "object")
                                    throw TypeError(".google.cloud.batch.v1.Job.allocationPolicy: object expected");
                                message.allocationPolicy = $root.google.cloud.batch.v1.AllocationPolicy.fromObject(object.allocationPolicy);
                            }
                            if (object.labels) {
                                if (typeof object.labels !== "object")
                                    throw TypeError(".google.cloud.batch.v1.Job.labels: object expected");
                                message.labels = {};
                                for (var keys = Object.keys(object.labels), i = 0; i < keys.length; ++i)
                                    message.labels[keys[i]] = String(object.labels[keys[i]]);
                            }
                            if (object.status != null) {
                                if (typeof object.status !== "object")
                                    throw TypeError(".google.cloud.batch.v1.Job.status: object expected");
                                message.status = $root.google.cloud.batch.v1.JobStatus.fromObject(object.status);
                            }
                            if (object.createTime != null) {
                                if (typeof object.createTime !== "object")
                                    throw TypeError(".google.cloud.batch.v1.Job.createTime: object expected");
                                message.createTime = $root.google.protobuf.Timestamp.fromObject(object.createTime);
                            }
                            if (object.updateTime != null) {
                                if (typeof object.updateTime !== "object")
                                    throw TypeError(".google.cloud.batch.v1.Job.updateTime: object expected");
                                message.updateTime = $root.google.protobuf.Timestamp.fromObject(object.updateTime);
                            }
                            if (object.logsPolicy != null) {
                                if (typeof object.logsPolicy !== "object")
                                    throw TypeError(".google.cloud.batch.v1.Job.logsPolicy: object expected");
                                message.logsPolicy = $root.google.cloud.batch.v1.LogsPolicy.fromObject(object.logsPolicy);
                            }
                            if (object.notifications) {
                                if (!Array.isArray(object.notifications))
                                    throw TypeError(".google.cloud.batch.v1.Job.notifications: array expected");
                                message.notifications = [];
                                for (var i = 0; i < object.notifications.length; ++i) {
                                    if (typeof object.notifications[i] !== "object")
                                        throw TypeError(".google.cloud.batch.v1.Job.notifications: object expected");
                                    message.notifications[i] = $root.google.cloud.batch.v1.JobNotification.fromObject(object.notifications[i]);
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a Job message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.batch.v1.Job
                         * @static
                         * @param {google.cloud.batch.v1.Job} message Job
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Job.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.taskGroups = [];
                                object.notifications = [];
                            }
                            if (options.objects || options.defaults)
                                object.labels = {};
                            if (options.defaults) {
                                object.name = "";
                                object.uid = "";
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.priority = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.priority = options.longs === String ? "0" : 0;
                                object.allocationPolicy = null;
                                object.status = null;
                                object.createTime = null;
                                object.updateTime = null;
                                object.logsPolicy = null;
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.uid != null && message.hasOwnProperty("uid"))
                                object.uid = message.uid;
                            if (message.priority != null && message.hasOwnProperty("priority"))
                                if (typeof message.priority === "number")
                                    object.priority = options.longs === String ? String(message.priority) : message.priority;
                                else
                                    object.priority = options.longs === String ? $util.Long.prototype.toString.call(message.priority) : options.longs === Number ? new $util.LongBits(message.priority.low >>> 0, message.priority.high >>> 0).toNumber() : message.priority;
                            if (message.taskGroups && message.taskGroups.length) {
                                object.taskGroups = [];
                                for (var j = 0; j < message.taskGroups.length; ++j)
                                    object.taskGroups[j] = $root.google.cloud.batch.v1.TaskGroup.toObject(message.taskGroups[j], options);
                            }
                            if (message.allocationPolicy != null && message.hasOwnProperty("allocationPolicy"))
                                object.allocationPolicy = $root.google.cloud.batch.v1.AllocationPolicy.toObject(message.allocationPolicy, options);
                            var keys2;
                            if (message.labels && (keys2 = Object.keys(message.labels)).length) {
                                object.labels = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.labels[keys2[j]] = message.labels[keys2[j]];
                            }
                            if (message.status != null && message.hasOwnProperty("status"))
                                object.status = $root.google.cloud.batch.v1.JobStatus.toObject(message.status, options);
                            if (message.createTime != null && message.hasOwnProperty("createTime"))
                                object.createTime = $root.google.protobuf.Timestamp.toObject(message.createTime, options);
                            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                                object.updateTime = $root.google.protobuf.Timestamp.toObject(message.updateTime, options);
                            if (message.logsPolicy != null && message.hasOwnProperty("logsPolicy"))
                                object.logsPolicy = $root.google.cloud.batch.v1.LogsPolicy.toObject(message.logsPolicy, options);
                            if (message.notifications && message.notifications.length) {
                                object.notifications = [];
                                for (var j = 0; j < message.notifications.length; ++j)
                                    object.notifications[j] = $root.google.cloud.batch.v1.JobNotification.toObject(message.notifications[j], options);
                            }
                            return object;
                        };
    
                        /**
                         * Converts this Job to JSON.
                         * @function toJSON
                         * @memberof google.cloud.batch.v1.Job
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Job.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for Job
                         * @function getTypeUrl
                         * @memberof google.cloud.batch.v1.Job
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        Job.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.batch.v1.Job";
                        };
    
                        return Job;
                    })();
    
                    v1.LogsPolicy = (function() {
    
                        /**
                         * Properties of a LogsPolicy.
                         * @memberof google.cloud.batch.v1
                         * @interface ILogsPolicy
                         * @property {google.cloud.batch.v1.LogsPolicy.Destination|null} [destination] LogsPolicy destination
                         * @property {string|null} [logsPath] LogsPolicy logsPath
                         * @property {google.cloud.batch.v1.LogsPolicy.ICloudLoggingOption|null} [cloudLoggingOption] LogsPolicy cloudLoggingOption
                         */
    
                        /**
                         * Constructs a new LogsPolicy.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents a LogsPolicy.
                         * @implements ILogsPolicy
                         * @constructor
                         * @param {google.cloud.batch.v1.ILogsPolicy=} [properties] Properties to set
                         */
                        function LogsPolicy(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * LogsPolicy destination.
                         * @member {google.cloud.batch.v1.LogsPolicy.Destination} destination
                         * @memberof google.cloud.batch.v1.LogsPolicy
                         * @instance
                         */
                        LogsPolicy.prototype.destination = 0;
    
                        /**
                         * LogsPolicy logsPath.
                         * @member {string} logsPath
                         * @memberof google.cloud.batch.v1.LogsPolicy
                         * @instance
                         */
                        LogsPolicy.prototype.logsPath = "";
    
                        /**
                         * LogsPolicy cloudLoggingOption.
                         * @member {google.cloud.batch.v1.LogsPolicy.ICloudLoggingOption|null|undefined} cloudLoggingOption
                         * @memberof google.cloud.batch.v1.LogsPolicy
                         * @instance
                         */
                        LogsPolicy.prototype.cloudLoggingOption = null;
    
                        /**
                         * Creates a new LogsPolicy instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.batch.v1.LogsPolicy
                         * @static
                         * @param {google.cloud.batch.v1.ILogsPolicy=} [properties] Properties to set
                         * @returns {google.cloud.batch.v1.LogsPolicy} LogsPolicy instance
                         */
                        LogsPolicy.create = function create(properties) {
                            return new LogsPolicy(properties);
                        };
    
                        /**
                         * Encodes the specified LogsPolicy message. Does not implicitly {@link google.cloud.batch.v1.LogsPolicy.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.batch.v1.LogsPolicy
                         * @static
                         * @param {google.cloud.batch.v1.ILogsPolicy} message LogsPolicy message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        LogsPolicy.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.destination != null && Object.hasOwnProperty.call(message, "destination"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.destination);
                            if (message.logsPath != null && Object.hasOwnProperty.call(message, "logsPath"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.logsPath);
                            if (message.cloudLoggingOption != null && Object.hasOwnProperty.call(message, "cloudLoggingOption"))
                                $root.google.cloud.batch.v1.LogsPolicy.CloudLoggingOption.encode(message.cloudLoggingOption, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified LogsPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.LogsPolicy.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.batch.v1.LogsPolicy
                         * @static
                         * @param {google.cloud.batch.v1.ILogsPolicy} message LogsPolicy message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        LogsPolicy.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a LogsPolicy message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.batch.v1.LogsPolicy
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.batch.v1.LogsPolicy} LogsPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        LogsPolicy.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.LogsPolicy();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.destination = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        message.logsPath = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.cloudLoggingOption = $root.google.cloud.batch.v1.LogsPolicy.CloudLoggingOption.decode(reader, reader.uint32());
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
                         * Decodes a LogsPolicy message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.batch.v1.LogsPolicy
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.batch.v1.LogsPolicy} LogsPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        LogsPolicy.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a LogsPolicy message.
                         * @function verify
                         * @memberof google.cloud.batch.v1.LogsPolicy
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        LogsPolicy.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.destination != null && message.hasOwnProperty("destination"))
                                switch (message.destination) {
                                default:
                                    return "destination: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            if (message.logsPath != null && message.hasOwnProperty("logsPath"))
                                if (!$util.isString(message.logsPath))
                                    return "logsPath: string expected";
                            if (message.cloudLoggingOption != null && message.hasOwnProperty("cloudLoggingOption")) {
                                var error = $root.google.cloud.batch.v1.LogsPolicy.CloudLoggingOption.verify(message.cloudLoggingOption);
                                if (error)
                                    return "cloudLoggingOption." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a LogsPolicy message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.batch.v1.LogsPolicy
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.batch.v1.LogsPolicy} LogsPolicy
                         */
                        LogsPolicy.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.batch.v1.LogsPolicy)
                                return object;
                            var message = new $root.google.cloud.batch.v1.LogsPolicy();
                            switch (object.destination) {
                            default:
                                if (typeof object.destination === "number") {
                                    message.destination = object.destination;
                                    break;
                                }
                                break;
                            case "DESTINATION_UNSPECIFIED":
                            case 0:
                                message.destination = 0;
                                break;
                            case "CLOUD_LOGGING":
                            case 1:
                                message.destination = 1;
                                break;
                            case "PATH":
                            case 2:
                                message.destination = 2;
                                break;
                            }
                            if (object.logsPath != null)
                                message.logsPath = String(object.logsPath);
                            if (object.cloudLoggingOption != null) {
                                if (typeof object.cloudLoggingOption !== "object")
                                    throw TypeError(".google.cloud.batch.v1.LogsPolicy.cloudLoggingOption: object expected");
                                message.cloudLoggingOption = $root.google.cloud.batch.v1.LogsPolicy.CloudLoggingOption.fromObject(object.cloudLoggingOption);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a LogsPolicy message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.batch.v1.LogsPolicy
                         * @static
                         * @param {google.cloud.batch.v1.LogsPolicy} message LogsPolicy
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        LogsPolicy.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.destination = options.enums === String ? "DESTINATION_UNSPECIFIED" : 0;
                                object.logsPath = "";
                                object.cloudLoggingOption = null;
                            }
                            if (message.destination != null && message.hasOwnProperty("destination"))
                                object.destination = options.enums === String ? $root.google.cloud.batch.v1.LogsPolicy.Destination[message.destination] === undefined ? message.destination : $root.google.cloud.batch.v1.LogsPolicy.Destination[message.destination] : message.destination;
                            if (message.logsPath != null && message.hasOwnProperty("logsPath"))
                                object.logsPath = message.logsPath;
                            if (message.cloudLoggingOption != null && message.hasOwnProperty("cloudLoggingOption"))
                                object.cloudLoggingOption = $root.google.cloud.batch.v1.LogsPolicy.CloudLoggingOption.toObject(message.cloudLoggingOption, options);
                            return object;
                        };
    
                        /**
                         * Converts this LogsPolicy to JSON.
                         * @function toJSON
                         * @memberof google.cloud.batch.v1.LogsPolicy
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        LogsPolicy.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for LogsPolicy
                         * @function getTypeUrl
                         * @memberof google.cloud.batch.v1.LogsPolicy
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        LogsPolicy.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.batch.v1.LogsPolicy";
                        };
    
                        LogsPolicy.CloudLoggingOption = (function() {
    
                            /**
                             * Properties of a CloudLoggingOption.
                             * @memberof google.cloud.batch.v1.LogsPolicy
                             * @interface ICloudLoggingOption
                             * @property {boolean|null} [useGenericTaskMonitoredResource] CloudLoggingOption useGenericTaskMonitoredResource
                             */
    
                            /**
                             * Constructs a new CloudLoggingOption.
                             * @memberof google.cloud.batch.v1.LogsPolicy
                             * @classdesc Represents a CloudLoggingOption.
                             * @implements ICloudLoggingOption
                             * @constructor
                             * @param {google.cloud.batch.v1.LogsPolicy.ICloudLoggingOption=} [properties] Properties to set
                             */
                            function CloudLoggingOption(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * CloudLoggingOption useGenericTaskMonitoredResource.
                             * @member {boolean} useGenericTaskMonitoredResource
                             * @memberof google.cloud.batch.v1.LogsPolicy.CloudLoggingOption
                             * @instance
                             */
                            CloudLoggingOption.prototype.useGenericTaskMonitoredResource = false;
    
                            /**
                             * Creates a new CloudLoggingOption instance using the specified properties.
                             * @function create
                             * @memberof google.cloud.batch.v1.LogsPolicy.CloudLoggingOption
                             * @static
                             * @param {google.cloud.batch.v1.LogsPolicy.ICloudLoggingOption=} [properties] Properties to set
                             * @returns {google.cloud.batch.v1.LogsPolicy.CloudLoggingOption} CloudLoggingOption instance
                             */
                            CloudLoggingOption.create = function create(properties) {
                                return new CloudLoggingOption(properties);
                            };
    
                            /**
                             * Encodes the specified CloudLoggingOption message. Does not implicitly {@link google.cloud.batch.v1.LogsPolicy.CloudLoggingOption.verify|verify} messages.
                             * @function encode
                             * @memberof google.cloud.batch.v1.LogsPolicy.CloudLoggingOption
                             * @static
                             * @param {google.cloud.batch.v1.LogsPolicy.ICloudLoggingOption} message CloudLoggingOption message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            CloudLoggingOption.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.useGenericTaskMonitoredResource != null && Object.hasOwnProperty.call(message, "useGenericTaskMonitoredResource"))
                                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.useGenericTaskMonitoredResource);
                                return writer;
                            };
    
                            /**
                             * Encodes the specified CloudLoggingOption message, length delimited. Does not implicitly {@link google.cloud.batch.v1.LogsPolicy.CloudLoggingOption.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.cloud.batch.v1.LogsPolicy.CloudLoggingOption
                             * @static
                             * @param {google.cloud.batch.v1.LogsPolicy.ICloudLoggingOption} message CloudLoggingOption message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            CloudLoggingOption.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a CloudLoggingOption message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.cloud.batch.v1.LogsPolicy.CloudLoggingOption
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.cloud.batch.v1.LogsPolicy.CloudLoggingOption} CloudLoggingOption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            CloudLoggingOption.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.LogsPolicy.CloudLoggingOption();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.useGenericTaskMonitoredResource = reader.bool();
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
                             * Decodes a CloudLoggingOption message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.cloud.batch.v1.LogsPolicy.CloudLoggingOption
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.cloud.batch.v1.LogsPolicy.CloudLoggingOption} CloudLoggingOption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            CloudLoggingOption.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a CloudLoggingOption message.
                             * @function verify
                             * @memberof google.cloud.batch.v1.LogsPolicy.CloudLoggingOption
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            CloudLoggingOption.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.useGenericTaskMonitoredResource != null && message.hasOwnProperty("useGenericTaskMonitoredResource"))
                                    if (typeof message.useGenericTaskMonitoredResource !== "boolean")
                                        return "useGenericTaskMonitoredResource: boolean expected";
                                return null;
                            };
    
                            /**
                             * Creates a CloudLoggingOption message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.cloud.batch.v1.LogsPolicy.CloudLoggingOption
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.cloud.batch.v1.LogsPolicy.CloudLoggingOption} CloudLoggingOption
                             */
                            CloudLoggingOption.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.cloud.batch.v1.LogsPolicy.CloudLoggingOption)
                                    return object;
                                var message = new $root.google.cloud.batch.v1.LogsPolicy.CloudLoggingOption();
                                if (object.useGenericTaskMonitoredResource != null)
                                    message.useGenericTaskMonitoredResource = Boolean(object.useGenericTaskMonitoredResource);
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a CloudLoggingOption message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.cloud.batch.v1.LogsPolicy.CloudLoggingOption
                             * @static
                             * @param {google.cloud.batch.v1.LogsPolicy.CloudLoggingOption} message CloudLoggingOption
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            CloudLoggingOption.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults)
                                    object.useGenericTaskMonitoredResource = false;
                                if (message.useGenericTaskMonitoredResource != null && message.hasOwnProperty("useGenericTaskMonitoredResource"))
                                    object.useGenericTaskMonitoredResource = message.useGenericTaskMonitoredResource;
                                return object;
                            };
    
                            /**
                             * Converts this CloudLoggingOption to JSON.
                             * @function toJSON
                             * @memberof google.cloud.batch.v1.LogsPolicy.CloudLoggingOption
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            CloudLoggingOption.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            /**
                             * Gets the default type url for CloudLoggingOption
                             * @function getTypeUrl
                             * @memberof google.cloud.batch.v1.LogsPolicy.CloudLoggingOption
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            CloudLoggingOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/google.cloud.batch.v1.LogsPolicy.CloudLoggingOption";
                            };
    
                            return CloudLoggingOption;
                        })();
    
                        /**
                         * Destination enum.
                         * @name google.cloud.batch.v1.LogsPolicy.Destination
                         * @enum {number}
                         * @property {number} DESTINATION_UNSPECIFIED=0 DESTINATION_UNSPECIFIED value
                         * @property {number} CLOUD_LOGGING=1 CLOUD_LOGGING value
                         * @property {number} PATH=2 PATH value
                         */
                        LogsPolicy.Destination = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "DESTINATION_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "CLOUD_LOGGING"] = 1;
                            values[valuesById[2] = "PATH"] = 2;
                            return values;
                        })();
    
                        return LogsPolicy;
                    })();
    
                    v1.JobStatus = (function() {
    
                        /**
                         * Properties of a JobStatus.
                         * @memberof google.cloud.batch.v1
                         * @interface IJobStatus
                         * @property {google.cloud.batch.v1.JobStatus.State|null} [state] JobStatus state
                         * @property {Array.<google.cloud.batch.v1.IStatusEvent>|null} [statusEvents] JobStatus statusEvents
                         * @property {Object.<string,google.cloud.batch.v1.JobStatus.ITaskGroupStatus>|null} [taskGroups] JobStatus taskGroups
                         * @property {google.protobuf.IDuration|null} [runDuration] JobStatus runDuration
                         */
    
                        /**
                         * Constructs a new JobStatus.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents a JobStatus.
                         * @implements IJobStatus
                         * @constructor
                         * @param {google.cloud.batch.v1.IJobStatus=} [properties] Properties to set
                         */
                        function JobStatus(properties) {
                            this.statusEvents = [];
                            this.taskGroups = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * JobStatus state.
                         * @member {google.cloud.batch.v1.JobStatus.State} state
                         * @memberof google.cloud.batch.v1.JobStatus
                         * @instance
                         */
                        JobStatus.prototype.state = 0;
    
                        /**
                         * JobStatus statusEvents.
                         * @member {Array.<google.cloud.batch.v1.IStatusEvent>} statusEvents
                         * @memberof google.cloud.batch.v1.JobStatus
                         * @instance
                         */
                        JobStatus.prototype.statusEvents = $util.emptyArray;
    
                        /**
                         * JobStatus taskGroups.
                         * @member {Object.<string,google.cloud.batch.v1.JobStatus.ITaskGroupStatus>} taskGroups
                         * @memberof google.cloud.batch.v1.JobStatus
                         * @instance
                         */
                        JobStatus.prototype.taskGroups = $util.emptyObject;
    
                        /**
                         * JobStatus runDuration.
                         * @member {google.protobuf.IDuration|null|undefined} runDuration
                         * @memberof google.cloud.batch.v1.JobStatus
                         * @instance
                         */
                        JobStatus.prototype.runDuration = null;
    
                        /**
                         * Creates a new JobStatus instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.batch.v1.JobStatus
                         * @static
                         * @param {google.cloud.batch.v1.IJobStatus=} [properties] Properties to set
                         * @returns {google.cloud.batch.v1.JobStatus} JobStatus instance
                         */
                        JobStatus.create = function create(properties) {
                            return new JobStatus(properties);
                        };
    
                        /**
                         * Encodes the specified JobStatus message. Does not implicitly {@link google.cloud.batch.v1.JobStatus.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.batch.v1.JobStatus
                         * @static
                         * @param {google.cloud.batch.v1.IJobStatus} message JobStatus message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        JobStatus.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
                            if (message.statusEvents != null && message.statusEvents.length)
                                for (var i = 0; i < message.statusEvents.length; ++i)
                                    $root.google.cloud.batch.v1.StatusEvent.encode(message.statusEvents[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.taskGroups != null && Object.hasOwnProperty.call(message, "taskGroups"))
                                for (var keys = Object.keys(message.taskGroups), i = 0; i < keys.length; ++i) {
                                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                    $root.google.cloud.batch.v1.JobStatus.TaskGroupStatus.encode(message.taskGroups[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                                }
                            if (message.runDuration != null && Object.hasOwnProperty.call(message, "runDuration"))
                                $root.google.protobuf.Duration.encode(message.runDuration, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified JobStatus message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobStatus.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.batch.v1.JobStatus
                         * @static
                         * @param {google.cloud.batch.v1.IJobStatus} message JobStatus message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        JobStatus.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a JobStatus message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.batch.v1.JobStatus
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.batch.v1.JobStatus} JobStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        JobStatus.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.JobStatus(), key, value;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.state = reader.int32();
                                        break;
                                    }
                                case 2: {
                                        if (!(message.statusEvents && message.statusEvents.length))
                                            message.statusEvents = [];
                                        message.statusEvents.push($root.google.cloud.batch.v1.StatusEvent.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 4: {
                                        if (message.taskGroups === $util.emptyObject)
                                            message.taskGroups = {};
                                        var end2 = reader.uint32() + reader.pos;
                                        key = "";
                                        value = null;
                                        while (reader.pos < end2) {
                                            var tag2 = reader.uint32();
                                            switch (tag2 >>> 3) {
                                            case 1:
                                                key = reader.string();
                                                break;
                                            case 2:
                                                value = $root.google.cloud.batch.v1.JobStatus.TaskGroupStatus.decode(reader, reader.uint32());
                                                break;
                                            default:
                                                reader.skipType(tag2 & 7);
                                                break;
                                            }
                                        }
                                        message.taskGroups[key] = value;
                                        break;
                                    }
                                case 5: {
                                        message.runDuration = $root.google.protobuf.Duration.decode(reader, reader.uint32());
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
                         * Decodes a JobStatus message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.batch.v1.JobStatus
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.batch.v1.JobStatus} JobStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        JobStatus.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a JobStatus message.
                         * @function verify
                         * @memberof google.cloud.batch.v1.JobStatus
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        JobStatus.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.state != null && message.hasOwnProperty("state"))
                                switch (message.state) {
                                default:
                                    return "state: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                    break;
                                }
                            if (message.statusEvents != null && message.hasOwnProperty("statusEvents")) {
                                if (!Array.isArray(message.statusEvents))
                                    return "statusEvents: array expected";
                                for (var i = 0; i < message.statusEvents.length; ++i) {
                                    var error = $root.google.cloud.batch.v1.StatusEvent.verify(message.statusEvents[i]);
                                    if (error)
                                        return "statusEvents." + error;
                                }
                            }
                            if (message.taskGroups != null && message.hasOwnProperty("taskGroups")) {
                                if (!$util.isObject(message.taskGroups))
                                    return "taskGroups: object expected";
                                var key = Object.keys(message.taskGroups);
                                for (var i = 0; i < key.length; ++i) {
                                    var error = $root.google.cloud.batch.v1.JobStatus.TaskGroupStatus.verify(message.taskGroups[key[i]]);
                                    if (error)
                                        return "taskGroups." + error;
                                }
                            }
                            if (message.runDuration != null && message.hasOwnProperty("runDuration")) {
                                var error = $root.google.protobuf.Duration.verify(message.runDuration);
                                if (error)
                                    return "runDuration." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a JobStatus message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.batch.v1.JobStatus
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.batch.v1.JobStatus} JobStatus
                         */
                        JobStatus.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.batch.v1.JobStatus)
                                return object;
                            var message = new $root.google.cloud.batch.v1.JobStatus();
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
                            case "QUEUED":
                            case 1:
                                message.state = 1;
                                break;
                            case "SCHEDULED":
                            case 2:
                                message.state = 2;
                                break;
                            case "RUNNING":
                            case 3:
                                message.state = 3;
                                break;
                            case "SUCCEEDED":
                            case 4:
                                message.state = 4;
                                break;
                            case "FAILED":
                            case 5:
                                message.state = 5;
                                break;
                            case "DELETION_IN_PROGRESS":
                            case 6:
                                message.state = 6;
                                break;
                            }
                            if (object.statusEvents) {
                                if (!Array.isArray(object.statusEvents))
                                    throw TypeError(".google.cloud.batch.v1.JobStatus.statusEvents: array expected");
                                message.statusEvents = [];
                                for (var i = 0; i < object.statusEvents.length; ++i) {
                                    if (typeof object.statusEvents[i] !== "object")
                                        throw TypeError(".google.cloud.batch.v1.JobStatus.statusEvents: object expected");
                                    message.statusEvents[i] = $root.google.cloud.batch.v1.StatusEvent.fromObject(object.statusEvents[i]);
                                }
                            }
                            if (object.taskGroups) {
                                if (typeof object.taskGroups !== "object")
                                    throw TypeError(".google.cloud.batch.v1.JobStatus.taskGroups: object expected");
                                message.taskGroups = {};
                                for (var keys = Object.keys(object.taskGroups), i = 0; i < keys.length; ++i) {
                                    if (typeof object.taskGroups[keys[i]] !== "object")
                                        throw TypeError(".google.cloud.batch.v1.JobStatus.taskGroups: object expected");
                                    message.taskGroups[keys[i]] = $root.google.cloud.batch.v1.JobStatus.TaskGroupStatus.fromObject(object.taskGroups[keys[i]]);
                                }
                            }
                            if (object.runDuration != null) {
                                if (typeof object.runDuration !== "object")
                                    throw TypeError(".google.cloud.batch.v1.JobStatus.runDuration: object expected");
                                message.runDuration = $root.google.protobuf.Duration.fromObject(object.runDuration);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a JobStatus message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.batch.v1.JobStatus
                         * @static
                         * @param {google.cloud.batch.v1.JobStatus} message JobStatus
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        JobStatus.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.statusEvents = [];
                            if (options.objects || options.defaults)
                                object.taskGroups = {};
                            if (options.defaults) {
                                object.state = options.enums === String ? "STATE_UNSPECIFIED" : 0;
                                object.runDuration = null;
                            }
                            if (message.state != null && message.hasOwnProperty("state"))
                                object.state = options.enums === String ? $root.google.cloud.batch.v1.JobStatus.State[message.state] === undefined ? message.state : $root.google.cloud.batch.v1.JobStatus.State[message.state] : message.state;
                            if (message.statusEvents && message.statusEvents.length) {
                                object.statusEvents = [];
                                for (var j = 0; j < message.statusEvents.length; ++j)
                                    object.statusEvents[j] = $root.google.cloud.batch.v1.StatusEvent.toObject(message.statusEvents[j], options);
                            }
                            var keys2;
                            if (message.taskGroups && (keys2 = Object.keys(message.taskGroups)).length) {
                                object.taskGroups = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.taskGroups[keys2[j]] = $root.google.cloud.batch.v1.JobStatus.TaskGroupStatus.toObject(message.taskGroups[keys2[j]], options);
                            }
                            if (message.runDuration != null && message.hasOwnProperty("runDuration"))
                                object.runDuration = $root.google.protobuf.Duration.toObject(message.runDuration, options);
                            return object;
                        };
    
                        /**
                         * Converts this JobStatus to JSON.
                         * @function toJSON
                         * @memberof google.cloud.batch.v1.JobStatus
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        JobStatus.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for JobStatus
                         * @function getTypeUrl
                         * @memberof google.cloud.batch.v1.JobStatus
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        JobStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.batch.v1.JobStatus";
                        };
    
                        JobStatus.InstanceStatus = (function() {
    
                            /**
                             * Properties of an InstanceStatus.
                             * @memberof google.cloud.batch.v1.JobStatus
                             * @interface IInstanceStatus
                             * @property {string|null} [machineType] InstanceStatus machineType
                             * @property {google.cloud.batch.v1.AllocationPolicy.ProvisioningModel|null} [provisioningModel] InstanceStatus provisioningModel
                             * @property {number|Long|null} [taskPack] InstanceStatus taskPack
                             * @property {google.cloud.batch.v1.AllocationPolicy.IDisk|null} [bootDisk] InstanceStatus bootDisk
                             */
    
                            /**
                             * Constructs a new InstanceStatus.
                             * @memberof google.cloud.batch.v1.JobStatus
                             * @classdesc Represents an InstanceStatus.
                             * @implements IInstanceStatus
                             * @constructor
                             * @param {google.cloud.batch.v1.JobStatus.IInstanceStatus=} [properties] Properties to set
                             */
                            function InstanceStatus(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * InstanceStatus machineType.
                             * @member {string} machineType
                             * @memberof google.cloud.batch.v1.JobStatus.InstanceStatus
                             * @instance
                             */
                            InstanceStatus.prototype.machineType = "";
    
                            /**
                             * InstanceStatus provisioningModel.
                             * @member {google.cloud.batch.v1.AllocationPolicy.ProvisioningModel} provisioningModel
                             * @memberof google.cloud.batch.v1.JobStatus.InstanceStatus
                             * @instance
                             */
                            InstanceStatus.prototype.provisioningModel = 0;
    
                            /**
                             * InstanceStatus taskPack.
                             * @member {number|Long} taskPack
                             * @memberof google.cloud.batch.v1.JobStatus.InstanceStatus
                             * @instance
                             */
                            InstanceStatus.prototype.taskPack = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                            /**
                             * InstanceStatus bootDisk.
                             * @member {google.cloud.batch.v1.AllocationPolicy.IDisk|null|undefined} bootDisk
                             * @memberof google.cloud.batch.v1.JobStatus.InstanceStatus
                             * @instance
                             */
                            InstanceStatus.prototype.bootDisk = null;
    
                            /**
                             * Creates a new InstanceStatus instance using the specified properties.
                             * @function create
                             * @memberof google.cloud.batch.v1.JobStatus.InstanceStatus
                             * @static
                             * @param {google.cloud.batch.v1.JobStatus.IInstanceStatus=} [properties] Properties to set
                             * @returns {google.cloud.batch.v1.JobStatus.InstanceStatus} InstanceStatus instance
                             */
                            InstanceStatus.create = function create(properties) {
                                return new InstanceStatus(properties);
                            };
    
                            /**
                             * Encodes the specified InstanceStatus message. Does not implicitly {@link google.cloud.batch.v1.JobStatus.InstanceStatus.verify|verify} messages.
                             * @function encode
                             * @memberof google.cloud.batch.v1.JobStatus.InstanceStatus
                             * @static
                             * @param {google.cloud.batch.v1.JobStatus.IInstanceStatus} message InstanceStatus message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            InstanceStatus.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.machineType != null && Object.hasOwnProperty.call(message, "machineType"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.machineType);
                                if (message.provisioningModel != null && Object.hasOwnProperty.call(message, "provisioningModel"))
                                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.provisioningModel);
                                if (message.taskPack != null && Object.hasOwnProperty.call(message, "taskPack"))
                                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.taskPack);
                                if (message.bootDisk != null && Object.hasOwnProperty.call(message, "bootDisk"))
                                    $root.google.cloud.batch.v1.AllocationPolicy.Disk.encode(message.bootDisk, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified InstanceStatus message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobStatus.InstanceStatus.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.cloud.batch.v1.JobStatus.InstanceStatus
                             * @static
                             * @param {google.cloud.batch.v1.JobStatus.IInstanceStatus} message InstanceStatus message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            InstanceStatus.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes an InstanceStatus message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.cloud.batch.v1.JobStatus.InstanceStatus
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.cloud.batch.v1.JobStatus.InstanceStatus} InstanceStatus
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            InstanceStatus.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.JobStatus.InstanceStatus();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.machineType = reader.string();
                                            break;
                                        }
                                    case 2: {
                                            message.provisioningModel = reader.int32();
                                            break;
                                        }
                                    case 3: {
                                            message.taskPack = reader.int64();
                                            break;
                                        }
                                    case 4: {
                                            message.bootDisk = $root.google.cloud.batch.v1.AllocationPolicy.Disk.decode(reader, reader.uint32());
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
                             * Decodes an InstanceStatus message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.cloud.batch.v1.JobStatus.InstanceStatus
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.cloud.batch.v1.JobStatus.InstanceStatus} InstanceStatus
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            InstanceStatus.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies an InstanceStatus message.
                             * @function verify
                             * @memberof google.cloud.batch.v1.JobStatus.InstanceStatus
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            InstanceStatus.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.machineType != null && message.hasOwnProperty("machineType"))
                                    if (!$util.isString(message.machineType))
                                        return "machineType: string expected";
                                if (message.provisioningModel != null && message.hasOwnProperty("provisioningModel"))
                                    switch (message.provisioningModel) {
                                    default:
                                        return "provisioningModel: enum value expected";
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                        break;
                                    }
                                if (message.taskPack != null && message.hasOwnProperty("taskPack"))
                                    if (!$util.isInteger(message.taskPack) && !(message.taskPack && $util.isInteger(message.taskPack.low) && $util.isInteger(message.taskPack.high)))
                                        return "taskPack: integer|Long expected";
                                if (message.bootDisk != null && message.hasOwnProperty("bootDisk")) {
                                    var error = $root.google.cloud.batch.v1.AllocationPolicy.Disk.verify(message.bootDisk);
                                    if (error)
                                        return "bootDisk." + error;
                                }
                                return null;
                            };
    
                            /**
                             * Creates an InstanceStatus message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.cloud.batch.v1.JobStatus.InstanceStatus
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.cloud.batch.v1.JobStatus.InstanceStatus} InstanceStatus
                             */
                            InstanceStatus.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.cloud.batch.v1.JobStatus.InstanceStatus)
                                    return object;
                                var message = new $root.google.cloud.batch.v1.JobStatus.InstanceStatus();
                                if (object.machineType != null)
                                    message.machineType = String(object.machineType);
                                switch (object.provisioningModel) {
                                default:
                                    if (typeof object.provisioningModel === "number") {
                                        message.provisioningModel = object.provisioningModel;
                                        break;
                                    }
                                    break;
                                case "PROVISIONING_MODEL_UNSPECIFIED":
                                case 0:
                                    message.provisioningModel = 0;
                                    break;
                                case "STANDARD":
                                case 1:
                                    message.provisioningModel = 1;
                                    break;
                                case "SPOT":
                                case 2:
                                    message.provisioningModel = 2;
                                    break;
                                case "PREEMPTIBLE":
                                case 3:
                                    message.provisioningModel = 3;
                                    break;
                                }
                                if (object.taskPack != null)
                                    if ($util.Long)
                                        (message.taskPack = $util.Long.fromValue(object.taskPack)).unsigned = false;
                                    else if (typeof object.taskPack === "string")
                                        message.taskPack = parseInt(object.taskPack, 10);
                                    else if (typeof object.taskPack === "number")
                                        message.taskPack = object.taskPack;
                                    else if (typeof object.taskPack === "object")
                                        message.taskPack = new $util.LongBits(object.taskPack.low >>> 0, object.taskPack.high >>> 0).toNumber();
                                if (object.bootDisk != null) {
                                    if (typeof object.bootDisk !== "object")
                                        throw TypeError(".google.cloud.batch.v1.JobStatus.InstanceStatus.bootDisk: object expected");
                                    message.bootDisk = $root.google.cloud.batch.v1.AllocationPolicy.Disk.fromObject(object.bootDisk);
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from an InstanceStatus message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.cloud.batch.v1.JobStatus.InstanceStatus
                             * @static
                             * @param {google.cloud.batch.v1.JobStatus.InstanceStatus} message InstanceStatus
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            InstanceStatus.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.machineType = "";
                                    object.provisioningModel = options.enums === String ? "PROVISIONING_MODEL_UNSPECIFIED" : 0;
                                    if ($util.Long) {
                                        var long = new $util.Long(0, 0, false);
                                        object.taskPack = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                    } else
                                        object.taskPack = options.longs === String ? "0" : 0;
                                    object.bootDisk = null;
                                }
                                if (message.machineType != null && message.hasOwnProperty("machineType"))
                                    object.machineType = message.machineType;
                                if (message.provisioningModel != null && message.hasOwnProperty("provisioningModel"))
                                    object.provisioningModel = options.enums === String ? $root.google.cloud.batch.v1.AllocationPolicy.ProvisioningModel[message.provisioningModel] === undefined ? message.provisioningModel : $root.google.cloud.batch.v1.AllocationPolicy.ProvisioningModel[message.provisioningModel] : message.provisioningModel;
                                if (message.taskPack != null && message.hasOwnProperty("taskPack"))
                                    if (typeof message.taskPack === "number")
                                        object.taskPack = options.longs === String ? String(message.taskPack) : message.taskPack;
                                    else
                                        object.taskPack = options.longs === String ? $util.Long.prototype.toString.call(message.taskPack) : options.longs === Number ? new $util.LongBits(message.taskPack.low >>> 0, message.taskPack.high >>> 0).toNumber() : message.taskPack;
                                if (message.bootDisk != null && message.hasOwnProperty("bootDisk"))
                                    object.bootDisk = $root.google.cloud.batch.v1.AllocationPolicy.Disk.toObject(message.bootDisk, options);
                                return object;
                            };
    
                            /**
                             * Converts this InstanceStatus to JSON.
                             * @function toJSON
                             * @memberof google.cloud.batch.v1.JobStatus.InstanceStatus
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            InstanceStatus.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            /**
                             * Gets the default type url for InstanceStatus
                             * @function getTypeUrl
                             * @memberof google.cloud.batch.v1.JobStatus.InstanceStatus
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            InstanceStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/google.cloud.batch.v1.JobStatus.InstanceStatus";
                            };
    
                            return InstanceStatus;
                        })();
    
                        JobStatus.TaskGroupStatus = (function() {
    
                            /**
                             * Properties of a TaskGroupStatus.
                             * @memberof google.cloud.batch.v1.JobStatus
                             * @interface ITaskGroupStatus
                             * @property {Object.<string,number|Long>|null} [counts] TaskGroupStatus counts
                             * @property {Array.<google.cloud.batch.v1.JobStatus.IInstanceStatus>|null} [instances] TaskGroupStatus instances
                             */
    
                            /**
                             * Constructs a new TaskGroupStatus.
                             * @memberof google.cloud.batch.v1.JobStatus
                             * @classdesc Represents a TaskGroupStatus.
                             * @implements ITaskGroupStatus
                             * @constructor
                             * @param {google.cloud.batch.v1.JobStatus.ITaskGroupStatus=} [properties] Properties to set
                             */
                            function TaskGroupStatus(properties) {
                                this.counts = {};
                                this.instances = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * TaskGroupStatus counts.
                             * @member {Object.<string,number|Long>} counts
                             * @memberof google.cloud.batch.v1.JobStatus.TaskGroupStatus
                             * @instance
                             */
                            TaskGroupStatus.prototype.counts = $util.emptyObject;
    
                            /**
                             * TaskGroupStatus instances.
                             * @member {Array.<google.cloud.batch.v1.JobStatus.IInstanceStatus>} instances
                             * @memberof google.cloud.batch.v1.JobStatus.TaskGroupStatus
                             * @instance
                             */
                            TaskGroupStatus.prototype.instances = $util.emptyArray;
    
                            /**
                             * Creates a new TaskGroupStatus instance using the specified properties.
                             * @function create
                             * @memberof google.cloud.batch.v1.JobStatus.TaskGroupStatus
                             * @static
                             * @param {google.cloud.batch.v1.JobStatus.ITaskGroupStatus=} [properties] Properties to set
                             * @returns {google.cloud.batch.v1.JobStatus.TaskGroupStatus} TaskGroupStatus instance
                             */
                            TaskGroupStatus.create = function create(properties) {
                                return new TaskGroupStatus(properties);
                            };
    
                            /**
                             * Encodes the specified TaskGroupStatus message. Does not implicitly {@link google.cloud.batch.v1.JobStatus.TaskGroupStatus.verify|verify} messages.
                             * @function encode
                             * @memberof google.cloud.batch.v1.JobStatus.TaskGroupStatus
                             * @static
                             * @param {google.cloud.batch.v1.JobStatus.ITaskGroupStatus} message TaskGroupStatus message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            TaskGroupStatus.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.counts != null && Object.hasOwnProperty.call(message, "counts"))
                                    for (var keys = Object.keys(message.counts), i = 0; i < keys.length; ++i)
                                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.counts[keys[i]]).ldelim();
                                if (message.instances != null && message.instances.length)
                                    for (var i = 0; i < message.instances.length; ++i)
                                        $root.google.cloud.batch.v1.JobStatus.InstanceStatus.encode(message.instances[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified TaskGroupStatus message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobStatus.TaskGroupStatus.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.cloud.batch.v1.JobStatus.TaskGroupStatus
                             * @static
                             * @param {google.cloud.batch.v1.JobStatus.ITaskGroupStatus} message TaskGroupStatus message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            TaskGroupStatus.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a TaskGroupStatus message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.cloud.batch.v1.JobStatus.TaskGroupStatus
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.cloud.batch.v1.JobStatus.TaskGroupStatus} TaskGroupStatus
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            TaskGroupStatus.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.JobStatus.TaskGroupStatus(), key, value;
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1: {
                                            if (message.counts === $util.emptyObject)
                                                message.counts = {};
                                            var end2 = reader.uint32() + reader.pos;
                                            key = "";
                                            value = 0;
                                            while (reader.pos < end2) {
                                                var tag2 = reader.uint32();
                                                switch (tag2 >>> 3) {
                                                case 1:
                                                    key = reader.string();
                                                    break;
                                                case 2:
                                                    value = reader.int64();
                                                    break;
                                                default:
                                                    reader.skipType(tag2 & 7);
                                                    break;
                                                }
                                            }
                                            message.counts[key] = value;
                                            break;
                                        }
                                    case 2: {
                                            if (!(message.instances && message.instances.length))
                                                message.instances = [];
                                            message.instances.push($root.google.cloud.batch.v1.JobStatus.InstanceStatus.decode(reader, reader.uint32()));
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
                             * Decodes a TaskGroupStatus message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.cloud.batch.v1.JobStatus.TaskGroupStatus
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.cloud.batch.v1.JobStatus.TaskGroupStatus} TaskGroupStatus
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            TaskGroupStatus.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a TaskGroupStatus message.
                             * @function verify
                             * @memberof google.cloud.batch.v1.JobStatus.TaskGroupStatus
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            TaskGroupStatus.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.counts != null && message.hasOwnProperty("counts")) {
                                    if (!$util.isObject(message.counts))
                                        return "counts: object expected";
                                    var key = Object.keys(message.counts);
                                    for (var i = 0; i < key.length; ++i)
                                        if (!$util.isInteger(message.counts[key[i]]) && !(message.counts[key[i]] && $util.isInteger(message.counts[key[i]].low) && $util.isInteger(message.counts[key[i]].high)))
                                            return "counts: integer|Long{k:string} expected";
                                }
                                if (message.instances != null && message.hasOwnProperty("instances")) {
                                    if (!Array.isArray(message.instances))
                                        return "instances: array expected";
                                    for (var i = 0; i < message.instances.length; ++i) {
                                        var error = $root.google.cloud.batch.v1.JobStatus.InstanceStatus.verify(message.instances[i]);
                                        if (error)
                                            return "instances." + error;
                                    }
                                }
                                return null;
                            };
    
                            /**
                             * Creates a TaskGroupStatus message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.cloud.batch.v1.JobStatus.TaskGroupStatus
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.cloud.batch.v1.JobStatus.TaskGroupStatus} TaskGroupStatus
                             */
                            TaskGroupStatus.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.cloud.batch.v1.JobStatus.TaskGroupStatus)
                                    return object;
                                var message = new $root.google.cloud.batch.v1.JobStatus.TaskGroupStatus();
                                if (object.counts) {
                                    if (typeof object.counts !== "object")
                                        throw TypeError(".google.cloud.batch.v1.JobStatus.TaskGroupStatus.counts: object expected");
                                    message.counts = {};
                                    for (var keys = Object.keys(object.counts), i = 0; i < keys.length; ++i)
                                        if ($util.Long)
                                            (message.counts[keys[i]] = $util.Long.fromValue(object.counts[keys[i]])).unsigned = false;
                                        else if (typeof object.counts[keys[i]] === "string")
                                            message.counts[keys[i]] = parseInt(object.counts[keys[i]], 10);
                                        else if (typeof object.counts[keys[i]] === "number")
                                            message.counts[keys[i]] = object.counts[keys[i]];
                                        else if (typeof object.counts[keys[i]] === "object")
                                            message.counts[keys[i]] = new $util.LongBits(object.counts[keys[i]].low >>> 0, object.counts[keys[i]].high >>> 0).toNumber();
                                }
                                if (object.instances) {
                                    if (!Array.isArray(object.instances))
                                        throw TypeError(".google.cloud.batch.v1.JobStatus.TaskGroupStatus.instances: array expected");
                                    message.instances = [];
                                    for (var i = 0; i < object.instances.length; ++i) {
                                        if (typeof object.instances[i] !== "object")
                                            throw TypeError(".google.cloud.batch.v1.JobStatus.TaskGroupStatus.instances: object expected");
                                        message.instances[i] = $root.google.cloud.batch.v1.JobStatus.InstanceStatus.fromObject(object.instances[i]);
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a TaskGroupStatus message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.cloud.batch.v1.JobStatus.TaskGroupStatus
                             * @static
                             * @param {google.cloud.batch.v1.JobStatus.TaskGroupStatus} message TaskGroupStatus
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            TaskGroupStatus.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.arrays || options.defaults)
                                    object.instances = [];
                                if (options.objects || options.defaults)
                                    object.counts = {};
                                var keys2;
                                if (message.counts && (keys2 = Object.keys(message.counts)).length) {
                                    object.counts = {};
                                    for (var j = 0; j < keys2.length; ++j)
                                        if (typeof message.counts[keys2[j]] === "number")
                                            object.counts[keys2[j]] = options.longs === String ? String(message.counts[keys2[j]]) : message.counts[keys2[j]];
                                        else
                                            object.counts[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.counts[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.counts[keys2[j]].low >>> 0, message.counts[keys2[j]].high >>> 0).toNumber() : message.counts[keys2[j]];
                                }
                                if (message.instances && message.instances.length) {
                                    object.instances = [];
                                    for (var j = 0; j < message.instances.length; ++j)
                                        object.instances[j] = $root.google.cloud.batch.v1.JobStatus.InstanceStatus.toObject(message.instances[j], options);
                                }
                                return object;
                            };
    
                            /**
                             * Converts this TaskGroupStatus to JSON.
                             * @function toJSON
                             * @memberof google.cloud.batch.v1.JobStatus.TaskGroupStatus
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            TaskGroupStatus.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            /**
                             * Gets the default type url for TaskGroupStatus
                             * @function getTypeUrl
                             * @memberof google.cloud.batch.v1.JobStatus.TaskGroupStatus
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            TaskGroupStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/google.cloud.batch.v1.JobStatus.TaskGroupStatus";
                            };
    
                            return TaskGroupStatus;
                        })();
    
                        /**
                         * State enum.
                         * @name google.cloud.batch.v1.JobStatus.State
                         * @enum {number}
                         * @property {number} STATE_UNSPECIFIED=0 STATE_UNSPECIFIED value
                         * @property {number} QUEUED=1 QUEUED value
                         * @property {number} SCHEDULED=2 SCHEDULED value
                         * @property {number} RUNNING=3 RUNNING value
                         * @property {number} SUCCEEDED=4 SUCCEEDED value
                         * @property {number} FAILED=5 FAILED value
                         * @property {number} DELETION_IN_PROGRESS=6 DELETION_IN_PROGRESS value
                         */
                        JobStatus.State = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "STATE_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "QUEUED"] = 1;
                            values[valuesById[2] = "SCHEDULED"] = 2;
                            values[valuesById[3] = "RUNNING"] = 3;
                            values[valuesById[4] = "SUCCEEDED"] = 4;
                            values[valuesById[5] = "FAILED"] = 5;
                            values[valuesById[6] = "DELETION_IN_PROGRESS"] = 6;
                            return values;
                        })();
    
                        return JobStatus;
                    })();
    
                    v1.JobNotification = (function() {
    
                        /**
                         * Properties of a JobNotification.
                         * @memberof google.cloud.batch.v1
                         * @interface IJobNotification
                         * @property {string|null} [pubsubTopic] JobNotification pubsubTopic
                         * @property {google.cloud.batch.v1.JobNotification.IMessage|null} [message] JobNotification message
                         */
    
                        /**
                         * Constructs a new JobNotification.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents a JobNotification.
                         * @implements IJobNotification
                         * @constructor
                         * @param {google.cloud.batch.v1.IJobNotification=} [properties] Properties to set
                         */
                        function JobNotification(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * JobNotification pubsubTopic.
                         * @member {string} pubsubTopic
                         * @memberof google.cloud.batch.v1.JobNotification
                         * @instance
                         */
                        JobNotification.prototype.pubsubTopic = "";
    
                        /**
                         * JobNotification message.
                         * @member {google.cloud.batch.v1.JobNotification.IMessage|null|undefined} message
                         * @memberof google.cloud.batch.v1.JobNotification
                         * @instance
                         */
                        JobNotification.prototype.message = null;
    
                        /**
                         * Creates a new JobNotification instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.batch.v1.JobNotification
                         * @static
                         * @param {google.cloud.batch.v1.IJobNotification=} [properties] Properties to set
                         * @returns {google.cloud.batch.v1.JobNotification} JobNotification instance
                         */
                        JobNotification.create = function create(properties) {
                            return new JobNotification(properties);
                        };
    
                        /**
                         * Encodes the specified JobNotification message. Does not implicitly {@link google.cloud.batch.v1.JobNotification.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.batch.v1.JobNotification
                         * @static
                         * @param {google.cloud.batch.v1.IJobNotification} message JobNotification message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        JobNotification.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.pubsubTopic != null && Object.hasOwnProperty.call(message, "pubsubTopic"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.pubsubTopic);
                            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                                $root.google.cloud.batch.v1.JobNotification.Message.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified JobNotification message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobNotification.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.batch.v1.JobNotification
                         * @static
                         * @param {google.cloud.batch.v1.IJobNotification} message JobNotification message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        JobNotification.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a JobNotification message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.batch.v1.JobNotification
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.batch.v1.JobNotification} JobNotification
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        JobNotification.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.JobNotification();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.pubsubTopic = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.message = $root.google.cloud.batch.v1.JobNotification.Message.decode(reader, reader.uint32());
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
                         * Decodes a JobNotification message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.batch.v1.JobNotification
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.batch.v1.JobNotification} JobNotification
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        JobNotification.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a JobNotification message.
                         * @function verify
                         * @memberof google.cloud.batch.v1.JobNotification
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        JobNotification.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.pubsubTopic != null && message.hasOwnProperty("pubsubTopic"))
                                if (!$util.isString(message.pubsubTopic))
                                    return "pubsubTopic: string expected";
                            if (message.message != null && message.hasOwnProperty("message")) {
                                var error = $root.google.cloud.batch.v1.JobNotification.Message.verify(message.message);
                                if (error)
                                    return "message." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a JobNotification message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.batch.v1.JobNotification
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.batch.v1.JobNotification} JobNotification
                         */
                        JobNotification.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.batch.v1.JobNotification)
                                return object;
                            var message = new $root.google.cloud.batch.v1.JobNotification();
                            if (object.pubsubTopic != null)
                                message.pubsubTopic = String(object.pubsubTopic);
                            if (object.message != null) {
                                if (typeof object.message !== "object")
                                    throw TypeError(".google.cloud.batch.v1.JobNotification.message: object expected");
                                message.message = $root.google.cloud.batch.v1.JobNotification.Message.fromObject(object.message);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a JobNotification message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.batch.v1.JobNotification
                         * @static
                         * @param {google.cloud.batch.v1.JobNotification} message JobNotification
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        JobNotification.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.pubsubTopic = "";
                                object.message = null;
                            }
                            if (message.pubsubTopic != null && message.hasOwnProperty("pubsubTopic"))
                                object.pubsubTopic = message.pubsubTopic;
                            if (message.message != null && message.hasOwnProperty("message"))
                                object.message = $root.google.cloud.batch.v1.JobNotification.Message.toObject(message.message, options);
                            return object;
                        };
    
                        /**
                         * Converts this JobNotification to JSON.
                         * @function toJSON
                         * @memberof google.cloud.batch.v1.JobNotification
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        JobNotification.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for JobNotification
                         * @function getTypeUrl
                         * @memberof google.cloud.batch.v1.JobNotification
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        JobNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.cloud.batch.v1.JobNotification";
                        };
    
                        JobNotification.Message = (function() {
    
                            /**
                             * Properties of a Message.
                             * @memberof google.cloud.batch.v1.JobNotification
                             * @interface IMessage
                             * @property {google.cloud.batch.v1.JobNotification.Type|null} [type] Message type
                             * @property {google.cloud.batch.v1.JobStatus.State|null} [newJobState] Message newJobState
                             * @property {google.cloud.batch.v1.TaskStatus.State|null} [newTaskState] Message newTaskState
                             */
    
                            /**
                             * Constructs a new Message.
                             * @memberof google.cloud.batch.v1.JobNotification
                             * @classdesc Represents a Message.
                             * @implements IMessage
                             * @constructor
                             * @param {google.cloud.batch.v1.JobNotification.IMessage=} [properties] Properties to set
                             */
                            function Message(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * Message type.
                             * @member {google.cloud.batch.v1.JobNotification.Type} type
                             * @memberof google.cloud.batch.v1.JobNotification.Message
                             * @instance
                             */
                            Message.prototype.type = 0;
    
                            /**
                             * Message newJobState.
                             * @member {google.cloud.batch.v1.JobStatus.State} newJobState
                             * @memberof google.cloud.batch.v1.JobNotification.Message
                             * @instance
                             */
                            Message.prototype.newJobState = 0;
    
                            /**
                             * Message newTaskState.
                             * @member {google.cloud.batch.v1.TaskStatus.State} newTaskState
                             * @memberof google.cloud.batch.v1.JobNotification.Message
                             * @instance
                             */
                            Message.prototype.newTaskState = 0;
    
                            /**
                             * Creates a new Message instance using the specified properties.
                             * @function create
                             * @memberof google.cloud.batch.v1.JobNotification.Message
                             * @static
                             * @param {google.cloud.batch.v1.JobNotification.IMessage=} [properties] Properties to set
                             * @returns {google.cloud.batch.v1.JobNotification.Message} Message instance
                             */
                            Message.create = function create(properties) {
                                return new Message(properties);
                            };
    
                            /**
                             * Encodes the specified Message message. Does not implicitly {@link google.cloud.batch.v1.JobNotification.Message.verify|verify} messages.
                             * @function encode
                             * @memberof google.cloud.batch.v1.JobNotification.Message
                             * @static
                             * @param {google.cloud.batch.v1.JobNotification.IMessage} message Message message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Message.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                                if (message.newJobState != null && Object.hasOwnProperty.call(message, "newJobState"))
                                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.newJobState);
                                if (message.newTaskState != null && Object.hasOwnProperty.call(message, "newTaskState"))
                                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.newTaskState);
                                return writer;
                            };
    
                            /**
                             * Encodes the specified Message message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobNotification.Message.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.cloud.batch.v1.JobNotification.Message
                             * @static
                             * @param {google.cloud.batch.v1.JobNotification.IMessage} message Message message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Message.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a Message message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.cloud.batch.v1.JobNotification.Message
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.cloud.batch.v1.JobNotification.Message} Message
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Message.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.JobNotification.Message();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1: {
                                            message.type = reader.int32();
                                            break;
                                        }
                                    case 2: {
                                            message.newJobState = reader.int32();
                                            break;
                                        }
                                    case 3: {
                                            message.newTaskState = reader.int32();
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
                             * Decodes a Message message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.cloud.batch.v1.JobNotification.Message
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.cloud.batch.v1.JobNotification.Message} Message
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Message.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a Message message.
                             * @function verify
                             * @memberof google.cloud.batch.v1.JobNotification.Message
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            Message.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.type != null && message.hasOwnProperty("type"))
                                    switch (message.type) {
                                    default:
                                        return "type: enum value expected";
                                    case 0:
                                    case 1:
                                    case 2:
                                        break;
                                    }
                                if (message.newJobState != null && message.hasOwnProperty("newJobState"))
                                    switch (message.newJobState) {
                                    default:
                                        return "newJobState: enum value expected";
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                    case 4:
                                    case 5:
                                    case 6:
                                        break;
                                    }
                                if (message.newTaskState != null && message.hasOwnProperty("newTaskState"))
                                    switch (message.newTaskState) {
                                    default:
                                        return "newTaskState: enum value expected";
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                    case 4:
                                    case 5:
                                    case 6:
                                        break;
                                    }
                                return null;
                            };
    
                            /**
                             * Creates a Message message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.cloud.batch.v1.JobNotification.Message
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.cloud.batch.v1.JobNotification.Message} Message
                             */
                            Message.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.cloud.batch.v1.JobNotification.Message)
                                    return object;
                                var message = new $root.google.cloud.batch.v1.JobNotification.Message();
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
                                case "JOB_STATE_CHANGED":
                                case 1:
                                    message.type = 1;
                                    break;
                                case "TASK_STATE_CHANGED":
                                case 2:
                                    message.type = 2;
                                    break;
                                }
                                switch (object.newJobState) {
                                default:
                                    if (typeof object.newJobState === "number") {
                                        message.newJobState = object.newJobState;
                                        break;
                                    }
                                    break;
                                case "STATE_UNSPECIFIED":
                                case 0:
                                    message.newJobState = 0;
                                    break;
                                case "QUEUED":
                                case 1:
                                    message.newJobState = 1;
                                    break;
                                case "SCHEDULED":
                                case 2:
                                    message.newJobState = 2;
                                    break;
                                case "RUNNING":
                                case 3:
                                    message.newJobState = 3;
                                    break;
                                case "SUCCEEDED":
                                case 4:
                                    message.newJobState = 4;
                                    break;
                                case "FAILED":
                                case 5:
                                    message.newJobState = 5;
                                    break;
                                case "DELETION_IN_PROGRESS":
                                case 6:
                                    message.newJobState = 6;
                                    break;
                                }
                                switch (object.newTaskState) {
                                default:
                                    if (typeof object.newTaskState === "number") {
                                        message.newTaskState = object.newTaskState;
                                        break;
                                    }
                                    break;
                                case "STATE_UNSPECIFIED":
                                case 0:
                                    message.newTaskState = 0;
                                    break;
                                case "PENDING":
                                case 1:
                                    message.newTaskState = 1;
                                    break;
                                case "ASSIGNED":
                                case 2:
                                    message.newTaskState = 2;
                                    break;
                                case "RUNNING":
                                case 3:
                                    message.newTaskState = 3;
                                    break;
                                case "FAILED":
                                case 4:
                                    message.newTaskState = 4;
                                    break;
                                case "SUCCEEDED":
                                case 5:
                                    message.newTaskState = 5;
                                    break;
                                case "UNEXECUTED":
                                case 6:
                                    message.newTaskState = 6;
                                    break;
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a Message message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.cloud.batch.v1.JobNotification.Message
                             * @static
                             * @param {google.cloud.batch.v1.JobNotification.Message} message Message
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Message.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.type = options.enums === String ? "TYPE_UNSPECIFIED" : 0;
                                    object.newJobState = options.enums === String ? "STATE_UNSPECIFIED" : 0;
                                    object.newTaskState = options.enums === String ? "STATE_UNSPECIFIED" : 0;
                                }
                                if (message.type != null && message.hasOwnProperty("type"))
                                    object.type = options.enums === String ? $root.google.cloud.batch.v1.JobNotification.Type[message.type] === undefined ? message.type : $root.google.cloud.batch.v1.JobNotification.Type[message.type] : message.type;
                                if (message.newJobState != null && message.hasOwnProperty("newJobState"))
                                    object.newJobState = options.enums === String ? $root.google.cloud.batch.v1.JobStatus.State[message.newJobState] === undefined ? message.newJobState : $root.google.cloud.batch.v1.JobStatus.State[message.newJobState] : message.newJobState;
                                if (message.newTaskState != null && message.hasOwnProperty("newTaskState"))
                                    object.newTaskState = options.enums === String ? $root.google.cloud.batch.v1.TaskStatus.State[message.newTaskState] === undefined ? message.newTaskState : $root.google.cloud.batch.v1.TaskStatus.State[message.newTaskState] : message.newTaskState;
                                return object;
                            };
    
                            /**
                             * Converts this Message to JSON.
                             * @function toJSON
                             * @memberof google.cloud.batch.v1.JobNotification.Message
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            Message.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            /**
                             * Gets the default type url for Message
                             * @function getTypeUrl
                             * @memberof google.cloud.batch.v1.JobNotification.Message
                             * @static
                             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns {string} The default type url
                             */
                            Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                                if (typeUrlPrefix === undefined) {
                                    typeUrlPrefix = "type.googleapis.com";
                                }
                                return typeUrlPrefix + "/google.cloud.batch.v1.JobNotification.Message";
                            };
    
                            return Message;
                        })();
    
                        /**
                         * Type enum.
                         * @name google.cloud.batch.v1.JobNotification.Type
                         * @enum {number}
                         * @property {number} TYPE_UNSPECIFIED=0 TYPE_UNSPECIFIED value
                         * @property {number} JOB_STATE_CHANGED=1 JOB_STATE_CHANGED value
                         * @property {number} TASK_STATE_CHANGED=2 TASK_STATE_CHANGED value
                         */
                        JobNotification.Type = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "TYPE_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "JOB_STATE_CHANGED"] = 1;
                            values[valuesById[2] = "TASK_STATE_CHANGED"] = 2;
                            return values;
                        })();
    
                        return JobNotification;
                    })();
    
                    v1.AllocationPolicy = (function() {
    
                        /**
                         * Properties of an AllocationPolicy.
                         * @memberof google.cloud.batch.v1
                         * @interface IAllocationPolicy
                         * @property {google.cloud.batch.v1.AllocationPolicy.ILocationPolicy|null} [location] AllocationPolicy location
                         * @property {Array.<google.cloud.batch.v1.AllocationPolicy.IInstancePolicyOrTemplate>|null} [instances] AllocationPolicy instances
                         * @property {google.cloud.batch.v1.IServiceAccount|null} [serviceAccount] AllocationPolicy serviceAccount
                         * @property {Object.<string,string>|null} [labels] AllocationPolicy labels
                         * @property {google.cloud.batch.v1.AllocationPolicy.INetworkPolicy|null} [network] AllocationPolicy network
                         * @property {google.cloud.batch.v1.AllocationPolicy.IPlacementPolicy|null} [placement] AllocationPolicy placement
                         * @property {Array.<string>|null} [tags] AllocationPolicy tags
                         */
    
                        /**
                         * Constructs a new AllocationPolicy.
                         * @memberof google.cloud.batch.v1
                         * @classdesc Represents an AllocationPolicy.
                         * @implements IAllocationPolicy
                         * @constructor
                         * @param {google.cloud.batch.v1.IAllocationPolicy=} [properties] Properties to set
                         */
                        function AllocationPolicy(properties) {
                            this.instances = [];
                            this.labels = {};
                            this.tags = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * AllocationPolicy location.
                         * @member {google.cloud.batch.v1.AllocationPolicy.ILocationPolicy|null|undefined} location
                         * @memberof google.cloud.batch.v1.AllocationPolicy
                         * @instance
                         */
                        AllocationPolicy.prototype.location = null;
    
                        /**
                         * AllocationPolicy instances.
                         * @member {Array.<google.cloud.batch.v1.AllocationPolicy.IInstancePolicyOrTemplate>} instances
                         * @memberof google.cloud.batch.v1.AllocationPolicy
                         * @instance
                         */
                        AllocationPolicy.prototype.instances = $util.emptyArray;
    
                        /**
                         * AllocationPolicy serviceAccount.
                         * @member {google.cloud.batch.v1.IServiceAccount|null|undefined} serviceAccount
                         * @memberof google.cloud.batch.v1.AllocationPolicy
                         * @instance
                         */
                        AllocationPolicy.prototype.serviceAccount = null;
    
                        /**
                         * AllocationPolicy labels.
                         * @member {Object.<string,string>} labels
                         * @memberof google.cloud.batch.v1.AllocationPolicy
                         * @instance
                         */
                        AllocationPolicy.prototype.labels = $util.emptyObject;
    
                        /**
                         * AllocationPolicy network.
                         * @member {google.cloud.batch.v1.AllocationPolicy.INetworkPolicy|null|undefined} network
                         * @memberof google.cloud.batch.v1.AllocationPolicy
                         * @instance
                         */
                        AllocationPolicy.prototype.network = null;
    
                        /**
                         * AllocationPolicy placement.
                         * @member {google.cloud.batch.v1.AllocationPolicy.IPlacementPolicy|null|undefined} placement
                         * @memberof google.cloud.batch.v1.AllocationPolicy
                         * @instance
                         */
                        AllocationPolicy.prototype.placement = null;
    
                        /**
                         * AllocationPolicy tags.
                         * @member {Array.<string>} tags
                         * @memberof google.cloud.batch.v1.AllocationPolicy
                         * @instance
                         */
                        AllocationPolicy.prototype.tags = $util.emptyArray;
    
                        /**
                         * Creates a new AllocationPolicy instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.batch.v1.AllocationPolicy
                         * @static
                         * @param {google.cloud.batch.v1.IAllocationPolicy=} [properties] Properties to set
                         * @returns {google.cloud.batch.v1.AllocationPolicy} AllocationPolicy instance
                         */
                        AllocationPolicy.create = function create(properties) {
                            return new AllocationPolicy(properties);
                        };
    
                        /**
                         * Encodes the specified AllocationPolicy message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.batch.v1.AllocationPolicy
                         * @static
                         * @param {google.cloud.batch.v1.IAllocationPolicy} message AllocationPolicy message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AllocationPolicy.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                                $root.google.cloud.batch.v1.AllocationPolicy.LocationPolicy.encode(message.location, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.labels != null && Object.hasOwnProperty.call(message, "labels"))
                                for (var keys = Object.keys(message.labels), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.labels[keys[i]]).ldelim();
                            if (message.network != null && Object.hasOwnProperty.call(message, "network"))
                                $root.google.cloud.batch.v1.AllocationPolicy.NetworkPolicy.encode(message.network, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                            if (message.instances != null && message.instances.length)
                                for (var i = 0; i < message.instances.length; ++i)
                                    $root.google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate.encode(message.instances[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                            if (message.serviceAccount != null && Object.hasOwnProperty.call(message, "serviceAccount"))
                                $root.google.cloud.batch.v1.ServiceAccount.encode(message.serviceAccount, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                            if (message.placement != null && Object.hasOwnProperty.call(message, "placement"))
                                $root.google.cloud.batch.v1.AllocationPolicy.PlacementPolicy.encode(message.placement, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                            if (message.tags != null && message.tags.length)
                                for (var i = 0; i < message.tags.length; ++i)
                                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.tags[i]);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified AllocationPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.batch.v1.AllocationPolicy
                         * @static
                         * @param {google.cloud.batch.v1.IAllocationPolicy} message AllocationPolicy message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        AllocationPolicy.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an AllocationPolicy message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.batch.v1.AllocationPolicy
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.batch.v1.AllocationPolicy} AllocationPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AllocationPolicy.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.batch.v1.AllocationPolicy(), key, value;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1: {
                                        message.location = $root.google.cloud.batch.v1.AllocationPolicy.LocationPolicy.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 8: {
                                        if (!(message.instances && message.instances.length))
                                            message.instances = [];
                                        message.instances.push($root.google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate.decode(reader, reader.uint32()));
                                        break;
                                    }
                                case 9: {
                                        message.serviceAccount = $root.google.cloud.batch.v1.ServiceAccount.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 6: {
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
                                case 7: {
                                        message.network = $root.google.cloud.batch.v1.AllocationPolicy.NetworkPolicy.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 10: {
                                        message.placement = $root.google.cloud.batch.v1.AllocationPolicy.PlacementPolicy.decode(reader, reader.uint32());
                                        break;
                                    }
                                case 11: {
                                        if (!(message.tags && message.tags.length))
                                            message.tags = [];
                                        message.tags.push(reader.string());
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
                         * Decodes an AllocationPolicy message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.batch.v1.AllocationPolicy
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.batch.v1.AllocationPolicy} AllocationPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        AllocationPolicy.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an AllocationPolicy message.
                         * @function verify
                         * @memberof google.cloud.batch.v1.AllocationPolicy
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        AllocationPolicy.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.location != null && message.hasOwnProperty("location")) {
                                var error = $root.google.cloud.batch.v1.AllocationPolicy.LocationPolicy.verify(message.location);
                                if (error)
                                    return "location." + error;
                            }
                            if (message.instances != null && message.hasOwnProperty("instances")) {
                                if (!Array.isArray(message.instances))
                                    return "instances: array expected";
                                for (var i = 0; i < message.instances.length; ++i) {
                                    var error = $root.google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate.verify(message.instances[i]);
                                    if (error)
                                        return "instances." + error;
                                }
                            }
                            if (message.serviceAccount != null && message.hasOwnProperty("serviceAccount")) {
                                var error = $root.google.cloud.batch.v1.ServiceAccount.verify(message.serviceAccount);
                                if (error)
                                    return "serviceAccount." + error;
                            }
                            if (message.labels != null && message.hasOwnProperty("labels")) {
                                if (!$util.isObject(message.labels))
                                    return "labels: object expected";
                                var key = Object.keys(message.labels);
                                for (var i = 0; i < key.length; ++i)
                                    if (!$util.isString(message.labels[key[i]]))
                                        return "labels: string{k:string} expected";
                            }
                            if (message.network != null && message.hasOwnProperty("network")) {
                                var error = $root.google.cloud.batch.v1.AllocationPolicy.NetworkPolicy.verify(message.network);
                                if (error)
                                    return "network." + error;
                            }
                            if (message.placement != null && message.hasOwnProperty("placement")) {
                                var error = $root.google.cloud.batch.v1.AllocationPolicy.PlacementPolicy.verify(message.placement);
                                if (error)
                                    return "placement." + error;
                            }
                            if (message.tags != null && message.hasOwnProperty("tags")) {
                                if (!Array.isArray(message.tags))
                                    return "tags: array expected";
                                for (var i = 0; i < message.tags.length; ++i)
                                    if (!$util.isString(message.tags[i]))
                                        return "tags: string[] expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates an AllocationPolicy message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.batch.v1.AllocationPolicy
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.batch.v1.AllocationPolicy} AllocationPolicy
                         */
                        AllocationPolicy.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.batch.v1.AllocationPolicy)
                                return object;
                            var message = new $root.google.cloud.batch.v1.AllocationPolicy();
                            if (object.location != null) {
                                if (typeof object.location !== "object")
                                    throw TypeError(".google.cloud.batch.v1.AllocationPolicy.location: object expected");
                                message.location = $root.google.cloud.batch.v1.AllocationPolicy.LocationPolicy.fromObject(object.location);
                            }
                            if (object.instances) {
                                if (!Array.isArray(object.instances))
                                    throw TypeError(".google.cloud.batch.v1.AllocationPolicy.instances: array expected");
                                message.instances = [];
                                for (var i = 0; i < object.instances.length; ++i) {
                                    if (typeof object.instances[i] !== "object")
                                        throw TypeError(".google.cloud.batch.v1.AllocationPolicy.instances: object expected");
                                    message.instances[i] = $root.google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate.fromObject(object.instances[i]);
                                }
                            }
                            if (object.serviceAccount != null) {
                                if (typeof object.serviceAccount !== "object")
                                    throw TypeError(".google.cloud.batch.v1.AllocationPolicy.serviceAccount: object expected");
                                message.serviceAccount = $root.google.cloud.batch.v1.ServiceAccount.fromObject(object.serviceAccount);
                            }
                            if (object.labels) {
                                if (typeof object.labels !== "object")
                                    throw TypeError(".google.cloud.batch.v1.AllocationPolicy.labels: object expected");
                                message.labels = {};
                                for (var keys = Object.keys(object.labels), i = 0; i < keys.length; ++i)
                                    message.labels[keys[i]] = String(object.labels[keys[i]]);
                            }
                            if (object.network != null) {
                                if (typeof object.network !== "object")
                                    throw TypeError(".google.cloud.batch.v1.AllocationPolicy.network: object expected");
                                message.network = $root.google.cloud.batch.v1.AllocationPolicy.NetworkPolicy.fromObject(object.network);
                            }
                            if (object.placement != null) {
                                if (typeof object.placement !== "object")
                                    throw TypeError(".google.cloud.batch.v1.AllocationPolicy.placement: object expected");
                                message.placement = $root.google.cloud.batch.v1.AllocationPolicy.PlacementPolicy.fromObject(object.placement);
                            }
                            if (object.tags) {
                                if (!Array.isArray(object.tags))
                                    throw TypeError(".google.cloud.batch.v1.AllocationPolicy.tags: array expected");
                                message.tags = [];
                                for (var i = 0; i < object.tags.length; ++i)
                                    message.tags[i] = String(object.tags[i]);
                            }
                            return message;
                        }