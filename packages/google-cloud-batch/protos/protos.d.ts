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

import type {protobuf as $protobuf} from "google-gax";
import Long = require("long");
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace batch. */
        namespace batch {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a BatchService */
                class BatchService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new BatchService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new BatchService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BatchService;

                    /**
                     * Calls CreateJob.
                     * @param request CreateJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public createJob(request: google.cloud.batch.v1.ICreateJobRequest, callback: google.cloud.batch.v1.BatchService.CreateJobCallback): void;

                    /**
                     * Calls CreateJob.
                     * @param request CreateJobRequest message or plain object
                     * @returns Promise
                     */
                    public createJob(request: google.cloud.batch.v1.ICreateJobRequest): Promise<google.cloud.batch.v1.Job>;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Job
                     */
                    public getJob(request: google.cloud.batch.v1.IGetJobRequest, callback: google.cloud.batch.v1.BatchService.GetJobCallback): void;

                    /**
                     * Calls GetJob.
                     * @param request GetJobRequest message or plain object
                     * @returns Promise
                     */
                    public getJob(request: google.cloud.batch.v1.IGetJobRequest): Promise<google.cloud.batch.v1.Job>;

                    /**
                     * Calls DeleteJob.
                     * @param request DeleteJobRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteJob(request: google.cloud.batch.v1.IDeleteJobRequest, callback: google.cloud.batch.v1.BatchService.DeleteJobCallback): void;

                    /**
                     * Calls DeleteJob.
                     * @param request DeleteJobRequest message or plain object
                     * @returns Promise
                     */
                    public deleteJob(request: google.cloud.batch.v1.IDeleteJobRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListJobsResponse
                     */
                    public listJobs(request: google.cloud.batch.v1.IListJobsRequest, callback: google.cloud.batch.v1.BatchService.ListJobsCallback): void;

                    /**
                     * Calls ListJobs.
                     * @param request ListJobsRequest message or plain object
                     * @returns Promise
                     */
                    public listJobs(request: google.cloud.batch.v1.IListJobsRequest): Promise<google.cloud.batch.v1.ListJobsResponse>;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public getTask(request: google.cloud.batch.v1.IGetTaskRequest, callback: google.cloud.batch.v1.BatchService.GetTaskCallback): void;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @returns Promise
                     */
                    public getTask(request: google.cloud.batch.v1.IGetTaskRequest): Promise<google.cloud.batch.v1.Task>;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTasksResponse
                     */
                    public listTasks(request: google.cloud.batch.v1.IListTasksRequest, callback: google.cloud.batch.v1.BatchService.ListTasksCallback): void;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @returns Promise
                     */
                    public listTasks(request: google.cloud.batch.v1.IListTasksRequest): Promise<google.cloud.batch.v1.ListTasksResponse>;
                }

                namespace BatchService {

                    /**
                     * Callback as used by {@link google.cloud.batch.v1.BatchService|createJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type CreateJobCallback = (error: (Error|null), response?: google.cloud.batch.v1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1.BatchService|getJob}.
                     * @param error Error, if any
                     * @param [response] Job
                     */
                    type GetJobCallback = (error: (Error|null), response?: google.cloud.batch.v1.Job) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1.BatchService|deleteJob}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteJobCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1.BatchService|listJobs}.
                     * @param error Error, if any
                     * @param [response] ListJobsResponse
                     */
                    type ListJobsCallback = (error: (Error|null), response?: google.cloud.batch.v1.ListJobsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1.BatchService|getTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type GetTaskCallback = (error: (Error|null), response?: google.cloud.batch.v1.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.batch.v1.BatchService|listTasks}.
                     * @param error Error, if any
                     * @param [response] ListTasksResponse
                     */
                    type ListTasksCallback = (error: (Error|null), response?: google.cloud.batch.v1.ListTasksResponse) => void;
                }

                /** Properties of a CreateJobRequest. */
                interface ICreateJobRequest {

                    /** CreateJobRequest parent */
                    parent?: (string|null);

                    /** CreateJobRequest jobId */
                    jobId?: (string|null);

                    /** CreateJobRequest job */
                    job?: (google.cloud.batch.v1.IJob|null);

                    /** CreateJobRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateJobRequest. */
                class CreateJobRequest implements ICreateJobRequest {

                    /**
                     * Constructs a new CreateJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.ICreateJobRequest);

                    /** CreateJobRequest parent. */
                    public parent: string;

                    /** CreateJobRequest jobId. */
                    public jobId: string;

                    /** CreateJobRequest job. */
                    public job?: (google.cloud.batch.v1.IJob|null);

                    /** CreateJobRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateJobRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1.ICreateJobRequest): google.cloud.batch.v1.CreateJobRequest;

                    /**
                     * Encodes the specified CreateJobRequest message. Does not implicitly {@link google.cloud.batch.v1.CreateJobRequest.verify|verify} messages.
                     * @param message CreateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateJobRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.CreateJobRequest.verify|verify} messages.
                     * @param message CreateJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.CreateJobRequest;

                    /**
                     * Decodes a CreateJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.CreateJobRequest;

                    /**
                     * Verifies a CreateJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.CreateJobRequest;

                    /**
                     * Creates a plain object from a CreateJobRequest message. Also converts values to other types if specified.
                     * @param message CreateJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.CreateJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateJobRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetJobRequest. */
                interface IGetJobRequest {

                    /** GetJobRequest name */
                    name?: (string|null);
                }

                /** Represents a GetJobRequest. */
                class GetJobRequest implements IGetJobRequest {

                    /**
                     * Constructs a new GetJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IGetJobRequest);

                    /** GetJobRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetJobRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IGetJobRequest): google.cloud.batch.v1.GetJobRequest;

                    /**
                     * Encodes the specified GetJobRequest message. Does not implicitly {@link google.cloud.batch.v1.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetJobRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.GetJobRequest.verify|verify} messages.
                     * @param message GetJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.GetJobRequest;

                    /**
                     * Decodes a GetJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.GetJobRequest;

                    /**
                     * Verifies a GetJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.GetJobRequest;

                    /**
                     * Creates a plain object from a GetJobRequest message. Also converts values to other types if specified.
                     * @param message GetJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.GetJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetJobRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteJobRequest. */
                interface IDeleteJobRequest {

                    /** DeleteJobRequest name */
                    name?: (string|null);

                    /** DeleteJobRequest reason */
                    reason?: (string|null);

                    /** DeleteJobRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteJobRequest. */
                class DeleteJobRequest implements IDeleteJobRequest {

                    /**
                     * Constructs a new DeleteJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IDeleteJobRequest);

                    /** DeleteJobRequest name. */
                    public name: string;

                    /** DeleteJobRequest reason. */
                    public reason: string;

                    /** DeleteJobRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteJobRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IDeleteJobRequest): google.cloud.batch.v1.DeleteJobRequest;

                    /**
                     * Encodes the specified DeleteJobRequest message. Does not implicitly {@link google.cloud.batch.v1.DeleteJobRequest.verify|verify} messages.
                     * @param message DeleteJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteJobRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.DeleteJobRequest.verify|verify} messages.
                     * @param message DeleteJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.DeleteJobRequest;

                    /**
                     * Decodes a DeleteJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.DeleteJobRequest;

                    /**
                     * Verifies a DeleteJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.DeleteJobRequest;

                    /**
                     * Creates a plain object from a DeleteJobRequest message. Also converts values to other types if specified.
                     * @param message DeleteJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.DeleteJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteJobRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListJobsRequest. */
                interface IListJobsRequest {

                    /** ListJobsRequest parent */
                    parent?: (string|null);

                    /** ListJobsRequest filter */
                    filter?: (string|null);

                    /** ListJobsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListJobsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListJobsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListJobsRequest. */
                class ListJobsRequest implements IListJobsRequest {

                    /**
                     * Constructs a new ListJobsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IListJobsRequest);

                    /** ListJobsRequest parent. */
                    public parent: string;

                    /** ListJobsRequest filter. */
                    public filter: string;

                    /** ListJobsRequest orderBy. */
                    public orderBy: string;

                    /** ListJobsRequest pageSize. */
                    public pageSize: number;

                    /** ListJobsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListJobsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IListJobsRequest): google.cloud.batch.v1.ListJobsRequest;

                    /**
                     * Encodes the specified ListJobsRequest message. Does not implicitly {@link google.cloud.batch.v1.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.ListJobsRequest.verify|verify} messages.
                     * @param message ListJobsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.ListJobsRequest;

                    /**
                     * Decodes a ListJobsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.ListJobsRequest;

                    /**
                     * Verifies a ListJobsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListJobsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListJobsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.ListJobsRequest;

                    /**
                     * Creates a plain object from a ListJobsRequest message. Also converts values to other types if specified.
                     * @param message ListJobsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.ListJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListJobsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListJobsResponse. */
                interface IListJobsResponse {

                    /** ListJobsResponse jobs */
                    jobs?: (google.cloud.batch.v1.IJob[]|null);

                    /** ListJobsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListJobsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListJobsResponse. */
                class ListJobsResponse implements IListJobsResponse {

                    /**
                     * Constructs a new ListJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IListJobsResponse);

                    /** ListJobsResponse jobs. */
                    public jobs: google.cloud.batch.v1.IJob[];

                    /** ListJobsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListJobsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListJobsResponse instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IListJobsResponse): google.cloud.batch.v1.ListJobsResponse;

                    /**
                     * Encodes the specified ListJobsResponse message. Does not implicitly {@link google.cloud.batch.v1.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListJobsResponse message, length delimited. Does not implicitly {@link google.cloud.batch.v1.ListJobsResponse.verify|verify} messages.
                     * @param message ListJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.ListJobsResponse;

                    /**
                     * Decodes a ListJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.ListJobsResponse;

                    /**
                     * Verifies a ListJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.ListJobsResponse;

                    /**
                     * Creates a plain object from a ListJobsResponse message. Also converts values to other types if specified.
                     * @param message ListJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.ListJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListJobsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTasksRequest. */
                interface IListTasksRequest {

                    /** ListTasksRequest parent */
                    parent?: (string|null);

                    /** ListTasksRequest filter */
                    filter?: (string|null);

                    /** ListTasksRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTasksRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListTasksRequest. */
                class ListTasksRequest implements IListTasksRequest {

                    /**
                     * Constructs a new ListTasksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IListTasksRequest);

                    /** ListTasksRequest parent. */
                    public parent: string;

                    /** ListTasksRequest filter. */
                    public filter: string;

                    /** ListTasksRequest pageSize. */
                    public pageSize: number;

                    /** ListTasksRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTasksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IListTasksRequest): google.cloud.batch.v1.ListTasksRequest;

                    /**
                     * Encodes the specified ListTasksRequest message. Does not implicitly {@link google.cloud.batch.v1.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.ListTasksRequest;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.ListTasksRequest;

                    /**
                     * Verifies a ListTasksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTasksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTasksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.ListTasksRequest;

                    /**
                     * Creates a plain object from a ListTasksRequest message. Also converts values to other types if specified.
                     * @param message ListTasksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.ListTasksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTasksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTasksRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTasksResponse. */
                interface IListTasksResponse {

                    /** ListTasksResponse tasks */
                    tasks?: (google.cloud.batch.v1.ITask[]|null);

                    /** ListTasksResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListTasksResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListTasksResponse. */
                class ListTasksResponse implements IListTasksResponse {

                    /**
                     * Constructs a new ListTasksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IListTasksResponse);

                    /** ListTasksResponse tasks. */
                    public tasks: google.cloud.batch.v1.ITask[];

                    /** ListTasksResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListTasksResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListTasksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksResponse instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IListTasksResponse): google.cloud.batch.v1.ListTasksResponse;

                    /**
                     * Encodes the specified ListTasksResponse message. Does not implicitly {@link google.cloud.batch.v1.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksResponse message, length delimited. Does not implicitly {@link google.cloud.batch.v1.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.ListTasksResponse;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.ListTasksResponse;

                    /**
                     * Verifies a ListTasksResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTasksResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTasksResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.ListTasksResponse;

                    /**
                     * Creates a plain object from a ListTasksResponse message. Also converts values to other types if specified.
                     * @param message ListTasksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.ListTasksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTasksResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListTasksResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetTaskRequest. */
                interface IGetTaskRequest {

                    /** GetTaskRequest name */
                    name?: (string|null);
                }

                /** Represents a GetTaskRequest. */
                class GetTaskRequest implements IGetTaskRequest {

                    /**
                     * Constructs a new GetTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IGetTaskRequest);

                    /** GetTaskRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTaskRequest instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IGetTaskRequest): google.cloud.batch.v1.GetTaskRequest;

                    /**
                     * Encodes the specified GetTaskRequest message. Does not implicitly {@link google.cloud.batch.v1.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTaskRequest message, length delimited. Does not implicitly {@link google.cloud.batch.v1.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.GetTaskRequest;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.GetTaskRequest;

                    /**
                     * Verifies a GetTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.GetTaskRequest;

                    /**
                     * Creates a plain object from a GetTaskRequest message. Also converts values to other types if specified.
                     * @param message GetTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.GetTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetTaskRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target */
                    target?: (string|null);

                    /** OperationMetadata verb */
                    verb?: (string|null);

                    /** OperationMetadata statusMessage */
                    statusMessage?: (string|null);

                    /** OperationMetadata requestedCancellation */
                    requestedCancellation?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusMessage. */
                    public statusMessage: string;

                    /** OperationMetadata requestedCancellation. */
                    public requestedCancellation: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IOperationMetadata): google.cloud.batch.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.batch.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.batch.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.OperationMetadata;

                    /**
                     * Verifies an OperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Job. */
                interface IJob {

                    /** Job name */
                    name?: (string|null);

                    /** Job uid */
                    uid?: (string|null);

                    /** Job priority */
                    priority?: (number|Long|string|null);

                    /** Job taskGroups */
                    taskGroups?: (google.cloud.batch.v1.ITaskGroup[]|null);

                    /** Job allocationPolicy */
                    allocationPolicy?: (google.cloud.batch.v1.IAllocationPolicy|null);

                    /** Job labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Job status */
                    status?: (google.cloud.batch.v1.IJobStatus|null);

                    /** Job createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Job updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Job logsPolicy */
                    logsPolicy?: (google.cloud.batch.v1.ILogsPolicy|null);

                    /** Job notifications */
                    notifications?: (google.cloud.batch.v1.IJobNotification[]|null);
                }

                /** Represents a Job. */
                class Job implements IJob {

                    /**
                     * Constructs a new Job.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IJob);

                    /** Job name. */
                    public name: string;

                    /** Job uid. */
                    public uid: string;

                    /** Job priority. */
                    public priority: (number|Long|string);

                    /** Job taskGroups. */
                    public taskGroups: google.cloud.batch.v1.ITaskGroup[];

                    /** Job allocationPolicy. */
                    public allocationPolicy?: (google.cloud.batch.v1.IAllocationPolicy|null);

                    /** Job labels. */
                    public labels: { [k: string]: string };

                    /** Job status. */
                    public status?: (google.cloud.batch.v1.IJobStatus|null);

                    /** Job createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Job updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Job logsPolicy. */
                    public logsPolicy?: (google.cloud.batch.v1.ILogsPolicy|null);

                    /** Job notifications. */
                    public notifications: google.cloud.batch.v1.IJobNotification[];

                    /**
                     * Creates a new Job instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Job instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IJob): google.cloud.batch.v1.Job;

                    /**
                     * Encodes the specified Job message. Does not implicitly {@link google.cloud.batch.v1.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Job message, length delimited. Does not implicitly {@link google.cloud.batch.v1.Job.verify|verify} messages.
                     * @param message Job message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Job message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.Job;

                    /**
                     * Decodes a Job message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Job
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.Job;

                    /**
                     * Verifies a Job message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Job message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Job
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.Job;

                    /**
                     * Creates a plain object from a Job message. Also converts values to other types if specified.
                     * @param message Job
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.Job, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Job to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Job
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LogsPolicy. */
                interface ILogsPolicy {

                    /** LogsPolicy destination */
                    destination?: (google.cloud.batch.v1.LogsPolicy.Destination|keyof typeof google.cloud.batch.v1.LogsPolicy.Destination|null);

                    /** LogsPolicy logsPath */
                    logsPath?: (string|null);

                    /** LogsPolicy cloudLoggingOption */
                    cloudLoggingOption?: (google.cloud.batch.v1.LogsPolicy.ICloudLoggingOption|null);
                }

                /** Represents a LogsPolicy. */
                class LogsPolicy implements ILogsPolicy {

                    /**
                     * Constructs a new LogsPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.ILogsPolicy);

                    /** LogsPolicy destination. */
                    public destination: (google.cloud.batch.v1.LogsPolicy.Destination|keyof typeof google.cloud.batch.v1.LogsPolicy.Destination);

                    /** LogsPolicy logsPath. */
                    public logsPath: string;

                    /** LogsPolicy cloudLoggingOption. */
                    public cloudLoggingOption?: (google.cloud.batch.v1.LogsPolicy.ICloudLoggingOption|null);

                    /**
                     * Creates a new LogsPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LogsPolicy instance
                     */
                    public static create(properties?: google.cloud.batch.v1.ILogsPolicy): google.cloud.batch.v1.LogsPolicy;

                    /**
                     * Encodes the specified LogsPolicy message. Does not implicitly {@link google.cloud.batch.v1.LogsPolicy.verify|verify} messages.
                     * @param message LogsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.ILogsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LogsPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.LogsPolicy.verify|verify} messages.
                     * @param message LogsPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.ILogsPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LogsPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LogsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.LogsPolicy;

                    /**
                     * Decodes a LogsPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LogsPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.LogsPolicy;

                    /**
                     * Verifies a LogsPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LogsPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LogsPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.LogsPolicy;

                    /**
                     * Creates a plain object from a LogsPolicy message. Also converts values to other types if specified.
                     * @param message LogsPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.LogsPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LogsPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LogsPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace LogsPolicy {

                    /** Properties of a CloudLoggingOption. */
                    interface ICloudLoggingOption {

                        /** CloudLoggingOption useGenericTaskMonitoredResource */
                        useGenericTaskMonitoredResource?: (boolean|null);
                    }

                    /** Represents a CloudLoggingOption. */
                    class CloudLoggingOption implements ICloudLoggingOption {

                        /**
                         * Constructs a new CloudLoggingOption.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.LogsPolicy.ICloudLoggingOption);

                        /** CloudLoggingOption useGenericTaskMonitoredResource. */
                        public useGenericTaskMonitoredResource: boolean;

                        /**
                         * Creates a new CloudLoggingOption instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CloudLoggingOption instance
                         */
                        public static create(properties?: google.cloud.batch.v1.LogsPolicy.ICloudLoggingOption): google.cloud.batch.v1.LogsPolicy.CloudLoggingOption;

                        /**
                         * Encodes the specified CloudLoggingOption message. Does not implicitly {@link google.cloud.batch.v1.LogsPolicy.CloudLoggingOption.verify|verify} messages.
                         * @param message CloudLoggingOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.LogsPolicy.ICloudLoggingOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CloudLoggingOption message, length delimited. Does not implicitly {@link google.cloud.batch.v1.LogsPolicy.CloudLoggingOption.verify|verify} messages.
                         * @param message CloudLoggingOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.LogsPolicy.ICloudLoggingOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CloudLoggingOption message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CloudLoggingOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.LogsPolicy.CloudLoggingOption;

                        /**
                         * Decodes a CloudLoggingOption message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CloudLoggingOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.LogsPolicy.CloudLoggingOption;

                        /**
                         * Verifies a CloudLoggingOption message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CloudLoggingOption message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CloudLoggingOption
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.LogsPolicy.CloudLoggingOption;

                        /**
                         * Creates a plain object from a CloudLoggingOption message. Also converts values to other types if specified.
                         * @param message CloudLoggingOption
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.LogsPolicy.CloudLoggingOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CloudLoggingOption to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CloudLoggingOption
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Destination enum. */
                    enum Destination {
                        DESTINATION_UNSPECIFIED = 0,
                        CLOUD_LOGGING = 1,
                        PATH = 2
                    }
                }

                /** Properties of a JobStatus. */
                interface IJobStatus {

                    /** JobStatus state */
                    state?: (google.cloud.batch.v1.JobStatus.State|keyof typeof google.cloud.batch.v1.JobStatus.State|null);

                    /** JobStatus statusEvents */
                    statusEvents?: (google.cloud.batch.v1.IStatusEvent[]|null);

                    /** JobStatus taskGroups */
                    taskGroups?: ({ [k: string]: google.cloud.batch.v1.JobStatus.ITaskGroupStatus }|null);

                    /** JobStatus runDuration */
                    runDuration?: (google.protobuf.IDuration|null);
                }

                /** Represents a JobStatus. */
                class JobStatus implements IJobStatus {

                    /**
                     * Constructs a new JobStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IJobStatus);

                    /** JobStatus state. */
                    public state: (google.cloud.batch.v1.JobStatus.State|keyof typeof google.cloud.batch.v1.JobStatus.State);

                    /** JobStatus statusEvents. */
                    public statusEvents: google.cloud.batch.v1.IStatusEvent[];

                    /** JobStatus taskGroups. */
                    public taskGroups: { [k: string]: google.cloud.batch.v1.JobStatus.ITaskGroupStatus };

                    /** JobStatus runDuration. */
                    public runDuration?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new JobStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobStatus instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IJobStatus): google.cloud.batch.v1.JobStatus;

                    /**
                     * Encodes the specified JobStatus message. Does not implicitly {@link google.cloud.batch.v1.JobStatus.verify|verify} messages.
                     * @param message JobStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IJobStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobStatus message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobStatus.verify|verify} messages.
                     * @param message JobStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IJobStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.JobStatus;

                    /**
                     * Decodes a JobStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.JobStatus;

                    /**
                     * Verifies a JobStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.JobStatus;

                    /**
                     * Creates a plain object from a JobStatus message. Also converts values to other types if specified.
                     * @param message JobStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.JobStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for JobStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace JobStatus {

                    /** Properties of an InstanceStatus. */
                    interface IInstanceStatus {

                        /** InstanceStatus machineType */
                        machineType?: (string|null);

                        /** InstanceStatus provisioningModel */
                        provisioningModel?: (google.cloud.batch.v1.AllocationPolicy.ProvisioningModel|keyof typeof google.cloud.batch.v1.AllocationPolicy.ProvisioningModel|null);

                        /** InstanceStatus taskPack */
                        taskPack?: (number|Long|string|null);

                        /** InstanceStatus bootDisk */
                        bootDisk?: (google.cloud.batch.v1.AllocationPolicy.IDisk|null);
                    }

                    /** Represents an InstanceStatus. */
                    class InstanceStatus implements IInstanceStatus {

                        /**
                         * Constructs a new InstanceStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.JobStatus.IInstanceStatus);

                        /** InstanceStatus machineType. */
                        public machineType: string;

                        /** InstanceStatus provisioningModel. */
                        public provisioningModel: (google.cloud.batch.v1.AllocationPolicy.ProvisioningModel|keyof typeof google.cloud.batch.v1.AllocationPolicy.ProvisioningModel);

                        /** InstanceStatus taskPack. */
                        public taskPack: (number|Long|string);

                        /** InstanceStatus bootDisk. */
                        public bootDisk?: (google.cloud.batch.v1.AllocationPolicy.IDisk|null);

                        /**
                         * Creates a new InstanceStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InstanceStatus instance
                         */
                        public static create(properties?: google.cloud.batch.v1.JobStatus.IInstanceStatus): google.cloud.batch.v1.JobStatus.InstanceStatus;

                        /**
                         * Encodes the specified InstanceStatus message. Does not implicitly {@link google.cloud.batch.v1.JobStatus.InstanceStatus.verify|verify} messages.
                         * @param message InstanceStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.JobStatus.IInstanceStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InstanceStatus message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobStatus.InstanceStatus.verify|verify} messages.
                         * @param message InstanceStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.JobStatus.IInstanceStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InstanceStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InstanceStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.JobStatus.InstanceStatus;

                        /**
                         * Decodes an InstanceStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InstanceStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.JobStatus.InstanceStatus;

                        /**
                         * Verifies an InstanceStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InstanceStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InstanceStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.JobStatus.InstanceStatus;

                        /**
                         * Creates a plain object from an InstanceStatus message. Also converts values to other types if specified.
                         * @param message InstanceStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.JobStatus.InstanceStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InstanceStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InstanceStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TaskGroupStatus. */
                    interface ITaskGroupStatus {

                        /** TaskGroupStatus counts */
                        counts?: ({ [k: string]: (number|Long|string) }|null);

                        /** TaskGroupStatus instances */
                        instances?: (google.cloud.batch.v1.JobStatus.IInstanceStatus[]|null);
                    }

                    /** Represents a TaskGroupStatus. */
                    class TaskGroupStatus implements ITaskGroupStatus {

                        /**
                         * Constructs a new TaskGroupStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.JobStatus.ITaskGroupStatus);

                        /** TaskGroupStatus counts. */
                        public counts: { [k: string]: (number|Long|string) };

                        /** TaskGroupStatus instances. */
                        public instances: google.cloud.batch.v1.JobStatus.IInstanceStatus[];

                        /**
                         * Creates a new TaskGroupStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TaskGroupStatus instance
                         */
                        public static create(properties?: google.cloud.batch.v1.JobStatus.ITaskGroupStatus): google.cloud.batch.v1.JobStatus.TaskGroupStatus;

                        /**
                         * Encodes the specified TaskGroupStatus message. Does not implicitly {@link google.cloud.batch.v1.JobStatus.TaskGroupStatus.verify|verify} messages.
                         * @param message TaskGroupStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.JobStatus.ITaskGroupStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TaskGroupStatus message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobStatus.TaskGroupStatus.verify|verify} messages.
                         * @param message TaskGroupStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.JobStatus.ITaskGroupStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TaskGroupStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TaskGroupStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.JobStatus.TaskGroupStatus;

                        /**
                         * Decodes a TaskGroupStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TaskGroupStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.JobStatus.TaskGroupStatus;

                        /**
                         * Verifies a TaskGroupStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TaskGroupStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TaskGroupStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.JobStatus.TaskGroupStatus;

                        /**
                         * Creates a plain object from a TaskGroupStatus message. Also converts values to other types if specified.
                         * @param message TaskGroupStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.JobStatus.TaskGroupStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TaskGroupStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TaskGroupStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        QUEUED = 1,
                        SCHEDULED = 2,
                        RUNNING = 3,
                        SUCCEEDED = 4,
                        FAILED = 5,
                        DELETION_IN_PROGRESS = 6
                    }
                }

                /** Properties of a JobNotification. */
                interface IJobNotification {

                    /** JobNotification pubsubTopic */
                    pubsubTopic?: (string|null);

                    /** JobNotification message */
                    message?: (google.cloud.batch.v1.JobNotification.IMessage|null);
                }

                /** Represents a JobNotification. */
                class JobNotification implements IJobNotification {

                    /**
                     * Constructs a new JobNotification.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IJobNotification);

                    /** JobNotification pubsubTopic. */
                    public pubsubTopic: string;

                    /** JobNotification message. */
                    public message?: (google.cloud.batch.v1.JobNotification.IMessage|null);

                    /**
                     * Creates a new JobNotification instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JobNotification instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IJobNotification): google.cloud.batch.v1.JobNotification;

                    /**
                     * Encodes the specified JobNotification message. Does not implicitly {@link google.cloud.batch.v1.JobNotification.verify|verify} messages.
                     * @param message JobNotification message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IJobNotification, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JobNotification message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobNotification.verify|verify} messages.
                     * @param message JobNotification message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IJobNotification, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JobNotification message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JobNotification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.JobNotification;

                    /**
                     * Decodes a JobNotification message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JobNotification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.JobNotification;

                    /**
                     * Verifies a JobNotification message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JobNotification message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JobNotification
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.JobNotification;

                    /**
                     * Creates a plain object from a JobNotification message. Also converts values to other types if specified.
                     * @param message JobNotification
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.JobNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JobNotification to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for JobNotification
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace JobNotification {

                    /** Properties of a Message. */
                    interface IMessage {

                        /** Message type */
                        type?: (google.cloud.batch.v1.JobNotification.Type|keyof typeof google.cloud.batch.v1.JobNotification.Type|null);

                        /** Message newJobState */
                        newJobState?: (google.cloud.batch.v1.JobStatus.State|keyof typeof google.cloud.batch.v1.JobStatus.State|null);

                        /** Message newTaskState */
                        newTaskState?: (google.cloud.batch.v1.TaskStatus.State|keyof typeof google.cloud.batch.v1.TaskStatus.State|null);
                    }

                    /** Represents a Message. */
                    class Message implements IMessage {

                        /**
                         * Constructs a new Message.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.JobNotification.IMessage);

                        /** Message type. */
                        public type: (google.cloud.batch.v1.JobNotification.Type|keyof typeof google.cloud.batch.v1.JobNotification.Type);

                        /** Message newJobState. */
                        public newJobState: (google.cloud.batch.v1.JobStatus.State|keyof typeof google.cloud.batch.v1.JobStatus.State);

                        /** Message newTaskState. */
                        public newTaskState: (google.cloud.batch.v1.TaskStatus.State|keyof typeof google.cloud.batch.v1.TaskStatus.State);

                        /**
                         * Creates a new Message instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Message instance
                         */
                        public static create(properties?: google.cloud.batch.v1.JobNotification.IMessage): google.cloud.batch.v1.JobNotification.Message;

                        /**
                         * Encodes the specified Message message. Does not implicitly {@link google.cloud.batch.v1.JobNotification.Message.verify|verify} messages.
                         * @param message Message message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.JobNotification.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Message message, length delimited. Does not implicitly {@link google.cloud.batch.v1.JobNotification.Message.verify|verify} messages.
                         * @param message Message message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.JobNotification.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Message message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Message
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.JobNotification.Message;

                        /**
                         * Decodes a Message message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Message
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.JobNotification.Message;

                        /**
                         * Verifies a Message message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Message message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Message
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.JobNotification.Message;

                        /**
                         * Creates a plain object from a Message message. Also converts values to other types if specified.
                         * @param message Message
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.JobNotification.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Message to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Message
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        JOB_STATE_CHANGED = 1,
                        TASK_STATE_CHANGED = 2
                    }
                }

                /** Properties of an AllocationPolicy. */
                interface IAllocationPolicy {

                    /** AllocationPolicy location */
                    location?: (google.cloud.batch.v1.AllocationPolicy.ILocationPolicy|null);

                    /** AllocationPolicy instances */
                    instances?: (google.cloud.batch.v1.AllocationPolicy.IInstancePolicyOrTemplate[]|null);

                    /** AllocationPolicy serviceAccount */
                    serviceAccount?: (google.cloud.batch.v1.IServiceAccount|null);

                    /** AllocationPolicy labels */
                    labels?: ({ [k: string]: string }|null);

                    /** AllocationPolicy network */
                    network?: (google.cloud.batch.v1.AllocationPolicy.INetworkPolicy|null);

                    /** AllocationPolicy placement */
                    placement?: (google.cloud.batch.v1.AllocationPolicy.IPlacementPolicy|null);

                    /** AllocationPolicy tags */
                    tags?: (string[]|null);
                }

                /** Represents an AllocationPolicy. */
                class AllocationPolicy implements IAllocationPolicy {

                    /**
                     * Constructs a new AllocationPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.batch.v1.IAllocationPolicy);

                    /** AllocationPolicy location. */
                    public location?: (google.cloud.batch.v1.AllocationPolicy.ILocationPolicy|null);

                    /** AllocationPolicy instances. */
                    public instances: google.cloud.batch.v1.AllocationPolicy.IInstancePolicyOrTemplate[];

                    /** AllocationPolicy serviceAccount. */
                    public serviceAccount?: (google.cloud.batch.v1.IServiceAccount|null);

                    /** AllocationPolicy labels. */
                    public labels: { [k: string]: string };

                    /** AllocationPolicy network. */
                    public network?: (google.cloud.batch.v1.AllocationPolicy.INetworkPolicy|null);

                    /** AllocationPolicy placement. */
                    public placement?: (google.cloud.batch.v1.AllocationPolicy.IPlacementPolicy|null);

                    /** AllocationPolicy tags. */
                    public tags: string[];

                    /**
                     * Creates a new AllocationPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AllocationPolicy instance
                     */
                    public static create(properties?: google.cloud.batch.v1.IAllocationPolicy): google.cloud.batch.v1.AllocationPolicy;

                    /**
                     * Encodes the specified AllocationPolicy message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.verify|verify} messages.
                     * @param message AllocationPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.batch.v1.IAllocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AllocationPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.verify|verify} messages.
                     * @param message AllocationPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.batch.v1.IAllocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AllocationPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AllocationPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy;

                    /**
                     * Decodes an AllocationPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AllocationPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy;

                    /**
                     * Verifies an AllocationPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AllocationPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AllocationPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy;

                    /**
                     * Creates a plain object from an AllocationPolicy message. Also converts values to other types if specified.
                     * @param message AllocationPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.batch.v1.AllocationPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AllocationPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AllocationPolicy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AllocationPolicy {

                    /** Properties of a LocationPolicy. */
                    interface ILocationPolicy {

                        /** LocationPolicy allowedLocations */
                        allowedLocations?: (string[]|null);
                    }

                    /** Represents a LocationPolicy. */
                    class LocationPolicy implements ILocationPolicy {

                        /**
                         * Constructs a new LocationPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.ILocationPolicy);

                        /** LocationPolicy allowedLocations. */
                        public allowedLocations: string[];

                        /**
                         * Creates a new LocationPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LocationPolicy instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.ILocationPolicy): google.cloud.batch.v1.AllocationPolicy.LocationPolicy;

                        /**
                         * Encodes the specified LocationPolicy message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.LocationPolicy.verify|verify} messages.
                         * @param message LocationPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.ILocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LocationPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.LocationPolicy.verify|verify} messages.
                         * @param message LocationPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.ILocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LocationPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LocationPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.LocationPolicy;

                        /**
                         * Decodes a LocationPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LocationPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.LocationPolicy;

                        /**
                         * Verifies a LocationPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LocationPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LocationPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.LocationPolicy;

                        /**
                         * Creates a plain object from a LocationPolicy message. Also converts values to other types if specified.
                         * @param message LocationPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.LocationPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LocationPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LocationPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Disk. */
                    interface IDisk {

                        /** Disk image */
                        image?: (string|null);

                        /** Disk snapshot */
                        snapshot?: (string|null);

                        /** Disk type */
                        type?: (string|null);

                        /** Disk sizeGb */
                        sizeGb?: (number|Long|string|null);

                        /** Disk diskInterface */
                        diskInterface?: (string|null);
                    }

                    /** Represents a Disk. */
                    class Disk implements IDisk {

                        /**
                         * Constructs a new Disk.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.IDisk);

                        /** Disk image. */
                        public image?: (string|null);

                        /** Disk snapshot. */
                        public snapshot?: (string|null);

                        /** Disk type. */
                        public type: string;

                        /** Disk sizeGb. */
                        public sizeGb: (number|Long|string);

                        /** Disk diskInterface. */
                        public diskInterface: string;

                        /** Disk dataSource. */
                        public dataSource?: ("image"|"snapshot");

                        /**
                         * Creates a new Disk instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Disk instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.IDisk): google.cloud.batch.v1.AllocationPolicy.Disk;

                        /**
                         * Encodes the specified Disk message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.Disk.verify|verify} messages.
                         * @param message Disk message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.IDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Disk message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.Disk.verify|verify} messages.
                         * @param message Disk message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.IDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Disk message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Disk
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.Disk;

                        /**
                         * Decodes a Disk message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Disk
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.Disk;

                        /**
                         * Verifies a Disk message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Disk message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Disk
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.Disk;

                        /**
                         * Creates a plain object from a Disk message. Also converts values to other types if specified.
                         * @param message Disk
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.Disk, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Disk to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Disk
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AttachedDisk. */
                    interface IAttachedDisk {

                        /** AttachedDisk newDisk */
                        newDisk?: (google.cloud.batch.v1.AllocationPolicy.IDisk|null);

                        /** AttachedDisk existingDisk */
                        existingDisk?: (string|null);

                        /** AttachedDisk deviceName */
                        deviceName?: (string|null);
                    }

                    /** Represents an AttachedDisk. */
                    class AttachedDisk implements IAttachedDisk {

                        /**
                         * Constructs a new AttachedDisk.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.IAttachedDisk);

                        /** AttachedDisk newDisk. */
                        public newDisk?: (google.cloud.batch.v1.AllocationPolicy.IDisk|null);

                        /** AttachedDisk existingDisk. */
                        public existingDisk?: (string|null);

                        /** AttachedDisk deviceName. */
                        public deviceName: string;

                        /** AttachedDisk attached. */
                        public attached?: ("newDisk"|"existingDisk");

                        /**
                         * Creates a new AttachedDisk instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AttachedDisk instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.IAttachedDisk): google.cloud.batch.v1.AllocationPolicy.AttachedDisk;

                        /**
                         * Encodes the specified AttachedDisk message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.AttachedDisk.verify|verify} messages.
                         * @param message AttachedDisk message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.IAttachedDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AttachedDisk message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.AttachedDisk.verify|verify} messages.
                         * @param message AttachedDisk message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.IAttachedDisk, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AttachedDisk message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AttachedDisk
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.AttachedDisk;

                        /**
                         * Decodes an AttachedDisk message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AttachedDisk
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.AttachedDisk;

                        /**
                         * Verifies an AttachedDisk message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AttachedDisk message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AttachedDisk
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.AttachedDisk;

                        /**
                         * Creates a plain object from an AttachedDisk message. Also converts values to other types if specified.
                         * @param message AttachedDisk
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.AttachedDisk, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AttachedDisk to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AttachedDisk
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Accelerator. */
                    interface IAccelerator {

                        /** Accelerator type */
                        type?: (string|null);

                        /** Accelerator count */
                        count?: (number|Long|string|null);

                        /** Accelerator installGpuDrivers */
                        installGpuDrivers?: (boolean|null);

                        /** Accelerator driverVersion */
                        driverVersion?: (string|null);
                    }

                    /** Represents an Accelerator. */
                    class Accelerator implements IAccelerator {

                        /**
                         * Constructs a new Accelerator.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.IAccelerator);

                        /** Accelerator type. */
                        public type: string;

                        /** Accelerator count. */
                        public count: (number|Long|string);

                        /** Accelerator installGpuDrivers. */
                        public installGpuDrivers: boolean;

                        /** Accelerator driverVersion. */
                        public driverVersion: string;

                        /**
                         * Creates a new Accelerator instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Accelerator instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.IAccelerator): google.cloud.batch.v1.AllocationPolicy.Accelerator;

                        /**
                         * Encodes the specified Accelerator message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.Accelerator.verify|verify} messages.
                         * @param message Accelerator message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.IAccelerator, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Accelerator message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.Accelerator.verify|verify} messages.
                         * @param message Accelerator message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.IAccelerator, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Accelerator message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Accelerator
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.Accelerator;

                        /**
                         * Decodes an Accelerator message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Accelerator
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.Accelerator;

                        /**
                         * Verifies an Accelerator message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Accelerator message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Accelerator
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.Accelerator;

                        /**
                         * Creates a plain object from an Accelerator message. Also converts values to other types if specified.
                         * @param message Accelerator
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.Accelerator, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Accelerator to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Accelerator
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an InstancePolicy. */
                    interface IInstancePolicy {

                        /** InstancePolicy machineType */
                        machineType?: (string|null);

                        /** InstancePolicy minCpuPlatform */
                        minCpuPlatform?: (string|null);

                        /** InstancePolicy provisioningModel */
                        provisioningModel?: (google.cloud.batch.v1.AllocationPolicy.ProvisioningModel|keyof typeof google.cloud.batch.v1.AllocationPolicy.ProvisioningModel|null);

                        /** InstancePolicy accelerators */
                        accelerators?: (google.cloud.batch.v1.AllocationPolicy.IAccelerator[]|null);

                        /** InstancePolicy bootDisk */
                        bootDisk?: (google.cloud.batch.v1.AllocationPolicy.IDisk|null);

                        /** InstancePolicy disks */
                        disks?: (google.cloud.batch.v1.AllocationPolicy.IAttachedDisk[]|null);

                        /** InstancePolicy reservation */
                        reservation?: (string|null);
                    }

                    /** Represents an InstancePolicy. */
                    class InstancePolicy implements IInstancePolicy {

                        /**
                         * Constructs a new InstancePolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.IInstancePolicy);

                        /** InstancePolicy machineType. */
                        public machineType: string;

                        /** InstancePolicy minCpuPlatform. */
                        public minCpuPlatform: string;

                        /** InstancePolicy provisioningModel. */
                        public provisioningModel: (google.cloud.batch.v1.AllocationPolicy.ProvisioningModel|keyof typeof google.cloud.batch.v1.AllocationPolicy.ProvisioningModel);

                        /** InstancePolicy accelerators. */
                        public accelerators: google.cloud.batch.v1.AllocationPolicy.IAccelerator[];

                        /** InstancePolicy bootDisk. */
                        public bootDisk?: (google.cloud.batch.v1.AllocationPolicy.IDisk|null);

                        /** InstancePolicy disks. */
                        public disks: google.cloud.batch.v1.AllocationPolicy.IAttachedDisk[];

                        /** InstancePolicy reservation. */
                        public reservation: string;

                        /**
                         * Creates a new InstancePolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InstancePolicy instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.IInstancePolicy): google.cloud.batch.v1.AllocationPolicy.InstancePolicy;

                        /**
                         * Encodes the specified InstancePolicy message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.InstancePolicy.verify|verify} messages.
                         * @param message InstancePolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.IInstancePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InstancePolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.InstancePolicy.verify|verify} messages.
                         * @param message InstancePolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.IInstancePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InstancePolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InstancePolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.InstancePolicy;

                        /**
                         * Decodes an InstancePolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InstancePolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.InstancePolicy;

                        /**
                         * Verifies an InstancePolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InstancePolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InstancePolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.InstancePolicy;

                        /**
                         * Creates a plain object from an InstancePolicy message. Also converts values to other types if specified.
                         * @param message InstancePolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.InstancePolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InstancePolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InstancePolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an InstancePolicyOrTemplate. */
                    interface IInstancePolicyOrTemplate {

                        /** InstancePolicyOrTemplate policy */
                        policy?: (google.cloud.batch.v1.AllocationPolicy.IInstancePolicy|null);

                        /** InstancePolicyOrTemplate instanceTemplate */
                        instanceTemplate?: (string|null);

                        /** InstancePolicyOrTemplate installGpuDrivers */
                        installGpuDrivers?: (boolean|null);
                    }

                    /** Represents an InstancePolicyOrTemplate. */
                    class InstancePolicyOrTemplate implements IInstancePolicyOrTemplate {

                        /**
                         * Constructs a new InstancePolicyOrTemplate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.IInstancePolicyOrTemplate);

                        /** InstancePolicyOrTemplate policy. */
                        public policy?: (google.cloud.batch.v1.AllocationPolicy.IInstancePolicy|null);

                        /** InstancePolicyOrTemplate instanceTemplate. */
                        public instanceTemplate?: (string|null);

                        /** InstancePolicyOrTemplate installGpuDrivers. */
                        public installGpuDrivers: boolean;

                        /** InstancePolicyOrTemplate policyTemplate. */
                        public policyTemplate?: ("policy"|"instanceTemplate");

                        /**
                         * Creates a new InstancePolicyOrTemplate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InstancePolicyOrTemplate instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.IInstancePolicyOrTemplate): google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate;

                        /**
                         * Encodes the specified InstancePolicyOrTemplate message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate.verify|verify} messages.
                         * @param message InstancePolicyOrTemplate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.IInstancePolicyOrTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InstancePolicyOrTemplate message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate.verify|verify} messages.
                         * @param message InstancePolicyOrTemplate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.IInstancePolicyOrTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InstancePolicyOrTemplate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InstancePolicyOrTemplate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate;

                        /**
                         * Decodes an InstancePolicyOrTemplate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InstancePolicyOrTemplate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate;

                        /**
                         * Verifies an InstancePolicyOrTemplate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InstancePolicyOrTemplate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InstancePolicyOrTemplate
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate;

                        /**
                         * Creates a plain object from an InstancePolicyOrTemplate message. Also converts values to other types if specified.
                         * @param message InstancePolicyOrTemplate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.InstancePolicyOrTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InstancePolicyOrTemplate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InstancePolicyOrTemplate
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NetworkInterface. */
                    interface INetworkInterface {

                        /** NetworkInterface network */
                        network?: (string|null);

                        /** NetworkInterface subnetwork */
                        subnetwork?: (string|null);

                        /** NetworkInterface noExternalIpAddress */
                        noExternalIpAddress?: (boolean|null);
                    }

                    /** Represents a NetworkInterface. */
                    class NetworkInterface implements INetworkInterface {

                        /**
                         * Constructs a new NetworkInterface.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.INetworkInterface);

                        /** NetworkInterface network. */
                        public network: string;

                        /** NetworkInterface subnetwork. */
                        public subnetwork: string;

                        /** NetworkInterface noExternalIpAddress. */
                        public noExternalIpAddress: boolean;

                        /**
                         * Creates a new NetworkInterface instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NetworkInterface instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.INetworkInterface): google.cloud.batch.v1.AllocationPolicy.NetworkInterface;

                        /**
                         * Encodes the specified NetworkInterface message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.NetworkInterface.verify|verify} messages.
                         * @param message NetworkInterface message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.INetworkInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NetworkInterface message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.NetworkInterface.verify|verify} messages.
                         * @param message NetworkInterface message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.INetworkInterface, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NetworkInterface message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NetworkInterface
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.NetworkInterface;

                        /**
                         * Decodes a NetworkInterface message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NetworkInterface
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.NetworkInterface;

                        /**
                         * Verifies a NetworkInterface message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NetworkInterface message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NetworkInterface
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.NetworkInterface;

                        /**
                         * Creates a plain object from a NetworkInterface message. Also converts values to other types if specified.
                         * @param message NetworkInterface
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.NetworkInterface, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NetworkInterface to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NetworkInterface
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NetworkPolicy. */
                    interface INetworkPolicy {

                        /** NetworkPolicy networkInterfaces */
                        networkInterfaces?: (google.cloud.batch.v1.AllocationPolicy.INetworkInterface[]|null);
                    }

                    /** Represents a NetworkPolicy. */
                    class NetworkPolicy implements INetworkPolicy {

                        /**
                         * Constructs a new NetworkPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.INetworkPolicy);

                        /** NetworkPolicy networkInterfaces. */
                        public networkInterfaces: google.cloud.batch.v1.AllocationPolicy.INetworkInterface[];

                        /**
                         * Creates a new NetworkPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NetworkPolicy instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.INetworkPolicy): google.cloud.batch.v1.AllocationPolicy.NetworkPolicy;

                        /**
                         * Encodes the specified NetworkPolicy message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.NetworkPolicy.verify|verify} messages.
                         * @param message NetworkPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.INetworkPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NetworkPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.NetworkPolicy.verify|verify} messages.
                         * @param message NetworkPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.INetworkPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NetworkPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NetworkPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.NetworkPolicy;

                        /**
                         * Decodes a NetworkPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NetworkPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.NetworkPolicy;

                        /**
                         * Verifies a NetworkPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NetworkPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NetworkPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.NetworkPolicy;

                        /**
                         * Creates a plain object from a NetworkPolicy message. Also converts values to other types if specified.
                         * @param message NetworkPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.NetworkPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NetworkPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NetworkPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PlacementPolicy. */
                    interface IPlacementPolicy {

                        /** PlacementPolicy collocation */
                        collocation?: (string|null);

                        /** PlacementPolicy maxDistance */
                        maxDistance?: (number|Long|string|null);
                    }

                    /** Represents a PlacementPolicy. */
                    class PlacementPolicy implements IPlacementPolicy {

                        /**
                         * Constructs a new PlacementPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.batch.v1.AllocationPolicy.IPlacementPolicy);

                        /** PlacementPolicy collocation. */
                        public collocation: string;

                        /** PlacementPolicy maxDistance. */
                        public maxDistance: (number|Long|string);

                        /**
                         * Creates a new PlacementPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlacementPolicy instance
                         */
                        public static create(properties?: google.cloud.batch.v1.AllocationPolicy.IPlacementPolicy): google.cloud.batch.v1.AllocationPolicy.PlacementPolicy;

                        /**
                         * Encodes the specified PlacementPolicy message. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.PlacementPolicy.verify|verify} messages.
                         * @param message PlacementPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.batch.v1.AllocationPolicy.IPlacementPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PlacementPolicy message, length delimited. Does not implicitly {@link google.cloud.batch.v1.AllocationPolicy.PlacementPolicy.verify|verify} messages.
                         * @param message PlacementPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.batch.v1.AllocationPolicy.IPlacementPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PlacementPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlacementPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.batch.v1.AllocationPolicy.PlacementPolicy;

                        /**
                         * Decodes a PlacementPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlacementPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.batch.v1.AllocationPolicy.PlacementPolicy;

                        /**
                         * Verifies a PlacementPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PlacementPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlacementPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.batch.v1.AllocationPolicy.PlacementPolicy;

                        /**
                         * Creates a plain object from a PlacementPolicy message. Also converts values to other types if specified.
                         * @param message PlacementPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.batch.v1.AllocationPolicy.PlacementPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PlacementPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PlacementPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** ProvisioningModel enum. */
                    enum ProvisioningModel {
                        PROVISIONING_MODEL_UNSPECIFIED = 0,
                        STANDARD = 1,
                        SPOT = 2,
                        PREEMPTIBLE = 3
                    }
                }

                /** Properties of a TaskGroup. */
                interface ITaskGroup {

                    /** TaskGroup name */
                    name?: (string|null);

                    /** TaskGroup taskSpec */
                    taskSpec?: (google.cloud.batch.v1.ITaskSpec|null);

                    /** TaskGroup taskCount */
                    taskCount?: (number|Long|string|null);

                    /** TaskGroup parallelism */
                    parallelism?: (number|Long|string|null);

                    /** TaskGroup schedulingPolicy */
                    schedulingPolicy?: (google.cloud.batch.v1.TaskGroup.SchedulingPolicy|keyof typeof g