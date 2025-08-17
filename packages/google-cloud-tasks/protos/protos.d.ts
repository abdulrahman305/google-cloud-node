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

        /** Namespace tasks. */
        namespace tasks {

            /** Namespace v2. */
            namespace v2 {

                /** Represents a CloudTasks */
                class CloudTasks extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudTasks service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudTasks service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudTasks;

                    /**
                     * Calls ListQueues.
                     * @param request ListQueuesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListQueuesResponse
                     */
                    public listQueues(request: google.cloud.tasks.v2.IListQueuesRequest, callback: google.cloud.tasks.v2.CloudTasks.ListQueuesCallback): void;

                    /**
                     * Calls ListQueues.
                     * @param request ListQueuesRequest message or plain object
                     * @returns Promise
                     */
                    public listQueues(request: google.cloud.tasks.v2.IListQueuesRequest): Promise<google.cloud.tasks.v2.ListQueuesResponse>;

                    /**
                     * Calls GetQueue.
                     * @param request GetQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public getQueue(request: google.cloud.tasks.v2.IGetQueueRequest, callback: google.cloud.tasks.v2.CloudTasks.GetQueueCallback): void;

                    /**
                     * Calls GetQueue.
                     * @param request GetQueueRequest message or plain object
                     * @returns Promise
                     */
                    public getQueue(request: google.cloud.tasks.v2.IGetQueueRequest): Promise<google.cloud.tasks.v2.Queue>;

                    /**
                     * Calls CreateQueue.
                     * @param request CreateQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public createQueue(request: google.cloud.tasks.v2.ICreateQueueRequest, callback: google.cloud.tasks.v2.CloudTasks.CreateQueueCallback): void;

                    /**
                     * Calls CreateQueue.
                     * @param request CreateQueueRequest message or plain object
                     * @returns Promise
                     */
                    public createQueue(request: google.cloud.tasks.v2.ICreateQueueRequest): Promise<google.cloud.tasks.v2.Queue>;

                    /**
                     * Calls UpdateQueue.
                     * @param request UpdateQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public updateQueue(request: google.cloud.tasks.v2.IUpdateQueueRequest, callback: google.cloud.tasks.v2.CloudTasks.UpdateQueueCallback): void;

                    /**
                     * Calls UpdateQueue.
                     * @param request UpdateQueueRequest message or plain object
                     * @returns Promise
                     */
                    public updateQueue(request: google.cloud.tasks.v2.IUpdateQueueRequest): Promise<google.cloud.tasks.v2.Queue>;

                    /**
                     * Calls DeleteQueue.
                     * @param request DeleteQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteQueue(request: google.cloud.tasks.v2.IDeleteQueueRequest, callback: google.cloud.tasks.v2.CloudTasks.DeleteQueueCallback): void;

                    /**
                     * Calls DeleteQueue.
                     * @param request DeleteQueueRequest message or plain object
                     * @returns Promise
                     */
                    public deleteQueue(request: google.cloud.tasks.v2.IDeleteQueueRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls PurgeQueue.
                     * @param request PurgeQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public purgeQueue(request: google.cloud.tasks.v2.IPurgeQueueRequest, callback: google.cloud.tasks.v2.CloudTasks.PurgeQueueCallback): void;

                    /**
                     * Calls PurgeQueue.
                     * @param request PurgeQueueRequest message or plain object
                     * @returns Promise
                     */
                    public purgeQueue(request: google.cloud.tasks.v2.IPurgeQueueRequest): Promise<google.cloud.tasks.v2.Queue>;

                    /**
                     * Calls PauseQueue.
                     * @param request PauseQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public pauseQueue(request: google.cloud.tasks.v2.IPauseQueueRequest, callback: google.cloud.tasks.v2.CloudTasks.PauseQueueCallback): void;

                    /**
                     * Calls PauseQueue.
                     * @param request PauseQueueRequest message or plain object
                     * @returns Promise
                     */
                    public pauseQueue(request: google.cloud.tasks.v2.IPauseQueueRequest): Promise<google.cloud.tasks.v2.Queue>;

                    /**
                     * Calls ResumeQueue.
                     * @param request ResumeQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public resumeQueue(request: google.cloud.tasks.v2.IResumeQueueRequest, callback: google.cloud.tasks.v2.CloudTasks.ResumeQueueCallback): void;

                    /**
                     * Calls ResumeQueue.
                     * @param request ResumeQueueRequest message or plain object
                     * @returns Promise
                     */
                    public resumeQueue(request: google.cloud.tasks.v2.IResumeQueueRequest): Promise<google.cloud.tasks.v2.Queue>;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.cloud.tasks.v2.CloudTasks.GetIamPolicyCallback): void;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.cloud.tasks.v2.CloudTasks.SetIamPolicyCallback): void;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.cloud.tasks.v2.CloudTasks.TestIamPermissionsCallback): void;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTasksResponse
                     */
                    public listTasks(request: google.cloud.tasks.v2.IListTasksRequest, callback: google.cloud.tasks.v2.CloudTasks.ListTasksCallback): void;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @returns Promise
                     */
                    public listTasks(request: google.cloud.tasks.v2.IListTasksRequest): Promise<google.cloud.tasks.v2.ListTasksResponse>;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public getTask(request: google.cloud.tasks.v2.IGetTaskRequest, callback: google.cloud.tasks.v2.CloudTasks.GetTaskCallback): void;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @returns Promise
                     */
                    public getTask(request: google.cloud.tasks.v2.IGetTaskRequest): Promise<google.cloud.tasks.v2.Task>;

                    /**
                     * Calls CreateTask.
                     * @param request CreateTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public createTask(request: google.cloud.tasks.v2.ICreateTaskRequest, callback: google.cloud.tasks.v2.CloudTasks.CreateTaskCallback): void;

                    /**
                     * Calls CreateTask.
                     * @param request CreateTaskRequest message or plain object
                     * @returns Promise
                     */
                    public createTask(request: google.cloud.tasks.v2.ICreateTaskRequest): Promise<google.cloud.tasks.v2.Task>;

                    /**
                     * Calls DeleteTask.
                     * @param request DeleteTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTask(request: google.cloud.tasks.v2.IDeleteTaskRequest, callback: google.cloud.tasks.v2.CloudTasks.DeleteTaskCallback): void;

                    /**
                     * Calls DeleteTask.
                     * @param request DeleteTaskRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTask(request: google.cloud.tasks.v2.IDeleteTaskRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls RunTask.
                     * @param request RunTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public runTask(request: google.cloud.tasks.v2.IRunTaskRequest, callback: google.cloud.tasks.v2.CloudTasks.RunTaskCallback): void;

                    /**
                     * Calls RunTask.
                     * @param request RunTaskRequest message or plain object
                     * @returns Promise
                     */
                    public runTask(request: google.cloud.tasks.v2.IRunTaskRequest): Promise<google.cloud.tasks.v2.Task>;
                }

                namespace CloudTasks {

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|listQueues}.
                     * @param error Error, if any
                     * @param [response] ListQueuesResponse
                     */
                    type ListQueuesCallback = (error: (Error|null), response?: google.cloud.tasks.v2.ListQueuesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|getQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type GetQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|createQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type CreateQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|updateQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type UpdateQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|deleteQueue}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteQueueCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|purgeQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type PurgeQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|pauseQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type PauseQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|resumeQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type ResumeQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|getIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|setIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|testIamPermissions}.
                     * @param error Error, if any
                     * @param [response] TestIamPermissionsResponse
                     */
                    type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|listTasks}.
                     * @param error Error, if any
                     * @param [response] ListTasksResponse
                     */
                    type ListTasksCallback = (error: (Error|null), response?: google.cloud.tasks.v2.ListTasksResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|getTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type GetTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|createTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type CreateTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|deleteTask}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTaskCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2.CloudTasks|runTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type RunTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2.Task) => void;
                }

                /** Properties of a ListQueuesRequest. */
                interface IListQueuesRequest {

                    /** ListQueuesRequest parent */
                    parent?: (string|null);

                    /** ListQueuesRequest filter */
                    filter?: (string|null);

                    /** ListQueuesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListQueuesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListQueuesRequest. */
                class ListQueuesRequest implements IListQueuesRequest {

                    /**
                     * Constructs a new ListQueuesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IListQueuesRequest);

                    /** ListQueuesRequest parent. */
                    public parent: string;

                    /** ListQueuesRequest filter. */
                    public filter: string;

                    /** ListQueuesRequest pageSize. */
                    public pageSize: number;

                    /** ListQueuesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListQueuesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQueuesRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IListQueuesRequest): google.cloud.tasks.v2.ListQueuesRequest;

                    /**
                     * Encodes the specified ListQueuesRequest message. Does not implicitly {@link google.cloud.tasks.v2.ListQueuesRequest.verify|verify} messages.
                     * @param message ListQueuesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IListQueuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQueuesRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.ListQueuesRequest.verify|verify} messages.
                     * @param message ListQueuesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IListQueuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQueuesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQueuesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.ListQueuesRequest;

                    /**
                     * Decodes a ListQueuesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQueuesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.ListQueuesRequest;

                    /**
                     * Verifies a ListQueuesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQueuesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQueuesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.ListQueuesRequest;

                    /**
                     * Creates a plain object from a ListQueuesRequest message. Also converts values to other types if specified.
                     * @param message ListQueuesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.ListQueuesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQueuesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListQueuesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListQueuesResponse. */
                interface IListQueuesResponse {

                    /** ListQueuesResponse queues */
                    queues?: (google.cloud.tasks.v2.IQueue[]|null);

                    /** ListQueuesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListQueuesResponse. */
                class ListQueuesResponse implements IListQueuesResponse {

                    /**
                     * Constructs a new ListQueuesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IListQueuesResponse);

                    /** ListQueuesResponse queues. */
                    public queues: google.cloud.tasks.v2.IQueue[];

                    /** ListQueuesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListQueuesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQueuesResponse instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IListQueuesResponse): google.cloud.tasks.v2.ListQueuesResponse;

                    /**
                     * Encodes the specified ListQueuesResponse message. Does not implicitly {@link google.cloud.tasks.v2.ListQueuesResponse.verify|verify} messages.
                     * @param message ListQueuesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IListQueuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQueuesResponse message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.ListQueuesResponse.verify|verify} messages.
                     * @param message ListQueuesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IListQueuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQueuesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQueuesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.ListQueuesResponse;

                    /**
                     * Decodes a ListQueuesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQueuesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.ListQueuesResponse;

                    /**
                     * Verifies a ListQueuesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQueuesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQueuesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.ListQueuesResponse;

                    /**
                     * Creates a plain object from a ListQueuesResponse message. Also converts values to other types if specified.
                     * @param message ListQueuesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.ListQueuesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQueuesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListQueuesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetQueueRequest. */
                interface IGetQueueRequest {

                    /** GetQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a GetQueueRequest. */
                class GetQueueRequest implements IGetQueueRequest {

                    /**
                     * Constructs a new GetQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IGetQueueRequest);

                    /** GetQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IGetQueueRequest): google.cloud.tasks.v2.GetQueueRequest;

                    /**
                     * Encodes the specified GetQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2.GetQueueRequest.verify|verify} messages.
                     * @param message GetQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IGetQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.GetQueueRequest.verify|verify} messages.
                     * @param message GetQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IGetQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.GetQueueRequest;

                    /**
                     * Decodes a GetQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.GetQueueRequest;

                    /**
                     * Verifies a GetQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.GetQueueRequest;

                    /**
                     * Creates a plain object from a GetQueueRequest message. Also converts values to other types if specified.
                     * @param message GetQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.GetQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetQueueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateQueueRequest. */
                interface ICreateQueueRequest {

                    /** CreateQueueRequest parent */
                    parent?: (string|null);

                    /** CreateQueueRequest queue */
                    queue?: (google.cloud.tasks.v2.IQueue|null);
                }

                /** Represents a CreateQueueRequest. */
                class CreateQueueRequest implements ICreateQueueRequest {

                    /**
                     * Constructs a new CreateQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.ICreateQueueRequest);

                    /** CreateQueueRequest parent. */
                    public parent: string;

                    /** CreateQueueRequest queue. */
                    public queue?: (google.cloud.tasks.v2.IQueue|null);

                    /**
                     * Creates a new CreateQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.ICreateQueueRequest): google.cloud.tasks.v2.CreateQueueRequest;

                    /**
                     * Encodes the specified CreateQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2.CreateQueueRequest.verify|verify} messages.
                     * @param message CreateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.ICreateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.CreateQueueRequest.verify|verify} messages.
                     * @param message CreateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.ICreateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.CreateQueueRequest;

                    /**
                     * Decodes a CreateQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.CreateQueueRequest;

                    /**
                     * Verifies a CreateQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.CreateQueueRequest;

                    /**
                     * Creates a plain object from a CreateQueueRequest message. Also converts values to other types if specified.
                     * @param message CreateQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.CreateQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateQueueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateQueueRequest. */
                interface IUpdateQueueRequest {

                    /** UpdateQueueRequest queue */
                    queue?: (google.cloud.tasks.v2.IQueue|null);

                    /** UpdateQueueRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateQueueRequest. */
                class UpdateQueueRequest implements IUpdateQueueRequest {

                    /**
                     * Constructs a new UpdateQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IUpdateQueueRequest);

                    /** UpdateQueueRequest queue. */
                    public queue?: (google.cloud.tasks.v2.IQueue|null);

                    /** UpdateQueueRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IUpdateQueueRequest): google.cloud.tasks.v2.UpdateQueueRequest;

                    /**
                     * Encodes the specified UpdateQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2.UpdateQueueRequest.verify|verify} messages.
                     * @param message UpdateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IUpdateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.UpdateQueueRequest.verify|verify} messages.
                     * @param message UpdateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IUpdateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.UpdateQueueRequest;

                    /**
                     * Decodes an UpdateQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.UpdateQueueRequest;

                    /**
                     * Verifies an UpdateQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.UpdateQueueRequest;

                    /**
                     * Creates a plain object from an UpdateQueueRequest message. Also converts values to other types if specified.
                     * @param message UpdateQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.UpdateQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateQueueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteQueueRequest. */
                interface IDeleteQueueRequest {

                    /** DeleteQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteQueueRequest. */
                class DeleteQueueRequest implements IDeleteQueueRequest {

                    /**
                     * Constructs a new DeleteQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IDeleteQueueRequest);

                    /** DeleteQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IDeleteQueueRequest): google.cloud.tasks.v2.DeleteQueueRequest;

                    /**
                     * Encodes the specified DeleteQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2.DeleteQueueRequest.verify|verify} messages.
                     * @param message DeleteQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IDeleteQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.DeleteQueueRequest.verify|verify} messages.
                     * @param message DeleteQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IDeleteQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.DeleteQueueRequest;

                    /**
                     * Decodes a DeleteQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.DeleteQueueRequest;

                    /**
                     * Verifies a DeleteQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.DeleteQueueRequest;

                    /**
                     * Creates a plain object from a DeleteQueueRequest message. Also converts values to other types if specified.
                     * @param message DeleteQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.DeleteQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteQueueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PurgeQueueRequest. */
                interface IPurgeQueueRequest {

                    /** PurgeQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a PurgeQueueRequest. */
                class PurgeQueueRequest implements IPurgeQueueRequest {

                    /**
                     * Constructs a new PurgeQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IPurgeQueueRequest);

                    /** PurgeQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new PurgeQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PurgeQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IPurgeQueueRequest): google.cloud.tasks.v2.PurgeQueueRequest;

                    /**
                     * Encodes the specified PurgeQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2.PurgeQueueRequest.verify|verify} messages.
                     * @param message PurgeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IPurgeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PurgeQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.PurgeQueueRequest.verify|verify} messages.
                     * @param message PurgeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IPurgeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PurgeQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PurgeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.PurgeQueueRequest;

                    /**
                     * Decodes a PurgeQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PurgeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.PurgeQueueRequest;

                    /**
                     * Verifies a PurgeQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PurgeQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PurgeQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.PurgeQueueRequest;

                    /**
                     * Creates a plain object from a PurgeQueueRequest message. Also converts values to other types if specified.
                     * @param message PurgeQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.PurgeQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PurgeQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PurgeQueueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PauseQueueRequest. */
                interface IPauseQueueRequest {

                    /** PauseQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a PauseQueueRequest. */
                class PauseQueueRequest implements IPauseQueueRequest {

                    /**
                     * Constructs a new PauseQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IPauseQueueRequest);

                    /** PauseQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new PauseQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PauseQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IPauseQueueRequest): google.cloud.tasks.v2.PauseQueueRequest;

                    /**
                     * Encodes the specified PauseQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2.PauseQueueRequest.verify|verify} messages.
                     * @param message PauseQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IPauseQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PauseQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.PauseQueueRequest.verify|verify} messages.
                     * @param message PauseQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IPauseQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PauseQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PauseQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.PauseQueueRequest;

                    /**
                     * Decodes a PauseQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PauseQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.PauseQueueRequest;

                    /**
                     * Verifies a PauseQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PauseQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PauseQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.PauseQueueRequest;

                    /**
                     * Creates a plain object from a PauseQueueRequest message. Also converts values to other types if specified.
                     * @param message PauseQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.PauseQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PauseQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PauseQueueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResumeQueueRequest. */
                interface IResumeQueueRequest {

                    /** ResumeQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a ResumeQueueRequest. */
                class ResumeQueueRequest implements IResumeQueueRequest {

                    /**
                     * Constructs a new ResumeQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IResumeQueueRequest);

                    /** ResumeQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResumeQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumeQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IResumeQueueRequest): google.cloud.tasks.v2.ResumeQueueRequest;

                    /**
                     * Encodes the specified ResumeQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2.ResumeQueueRequest.verify|verify} messages.
                     * @param message ResumeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IResumeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumeQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.ResumeQueueRequest.verify|verify} messages.
                     * @param message ResumeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IResumeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumeQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.ResumeQueueRequest;

                    /**
                     * Decodes a ResumeQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.ResumeQueueRequest;

                    /**
                     * Verifies a ResumeQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumeQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumeQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.ResumeQueueRequest;

                    /**
                     * Creates a plain object from a ResumeQueueRequest message. Also converts values to other types if specified.
                     * @param message ResumeQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.ResumeQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumeQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResumeQueueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTasksRequest. */
                interface IListTasksRequest {

                    /** ListTasksRequest parent */
                    parent?: (string|null);

                    /** ListTasksRequest responseView */
                    responseView?: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View|null);

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
                    constructor(properties?: google.cloud.tasks.v2.IListTasksRequest);

                    /** ListTasksRequest parent. */
                    public parent: string;

                    /** ListTasksRequest responseView. */
                    public responseView: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View);

                    /** ListTasksRequest pageSize. */
                    public pageSize: number;

                    /** ListTasksRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTasksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IListTasksRequest): google.cloud.tasks.v2.ListTasksRequest;

                    /**
                     * Encodes the specified ListTasksRequest message. Does not implicitly {@link google.cloud.tasks.v2.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.ListTasksRequest;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.ListTasksRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.ListTasksRequest;

                    /**
                     * Creates a plain object from a ListTasksRequest message. Also converts values to other types if specified.
                     * @param message ListTasksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.ListTasksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    tasks?: (google.cloud.tasks.v2.ITask[]|null);

                    /** ListTasksResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTasksResponse. */
                class ListTasksResponse implements IListTasksResponse {

                    /**
                     * Constructs a new ListTasksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IListTasksResponse);

                    /** ListTasksResponse tasks. */
                    public tasks: google.cloud.tasks.v2.ITask[];

                    /** ListTasksResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTasksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksResponse instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IListTasksResponse): google.cloud.tasks.v2.ListTasksResponse;

                    /**
                     * Encodes the specified ListTasksResponse message. Does not implicitly {@link google.cloud.tasks.v2.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksResponse message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.ListTasksResponse;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.ListTasksResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.ListTasksResponse;

                    /**
                     * Creates a plain object from a ListTasksResponse message. Also converts values to other types if specified.
                     * @param message ListTasksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.ListTasksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** GetTaskRequest responseView */
                    responseView?: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View|null);
                }

                /** Represents a GetTaskRequest. */
                class GetTaskRequest implements IGetTaskRequest {

                    /**
                     * Constructs a new GetTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IGetTaskRequest);

                    /** GetTaskRequest name. */
                    public name: string;

                    /** GetTaskRequest responseView. */
                    public responseView: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View);

                    /**
                     * Creates a new GetTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IGetTaskRequest): google.cloud.tasks.v2.GetTaskRequest;

                    /**
                     * Encodes the specified GetTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.GetTaskRequest;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.GetTaskRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.GetTaskRequest;

                    /**
                     * Creates a plain object from a GetTaskRequest message. Also converts values to other types if specified.
                     * @param message GetTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.GetTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a CreateTaskRequest. */
                interface ICreateTaskRequest {

                    /** CreateTaskRequest parent */
                    parent?: (string|null);

                    /** CreateTaskRequest task */
                    task?: (google.cloud.tasks.v2.ITask|null);

                    /** CreateTaskRequest responseView */
                    responseView?: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View|null);
                }

                /** Represents a CreateTaskRequest. */
                class CreateTaskRequest implements ICreateTaskRequest {

                    /**
                     * Constructs a new CreateTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.ICreateTaskRequest);

                    /** CreateTaskRequest parent. */
                    public parent: string;

                    /** CreateTaskRequest task. */
                    public task?: (google.cloud.tasks.v2.ITask|null);

                    /** CreateTaskRequest responseView. */
                    public responseView: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View);

                    /**
                     * Creates a new CreateTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.ICreateTaskRequest): google.cloud.tasks.v2.CreateTaskRequest;

                    /**
                     * Encodes the specified CreateTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2.CreateTaskRequest.verify|verify} messages.
                     * @param message CreateTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.ICreateTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.CreateTaskRequest.verify|verify} messages.
                     * @param message CreateTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.ICreateTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.CreateTaskRequest;

                    /**
                     * Decodes a CreateTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.CreateTaskRequest;

                    /**
                     * Verifies a CreateTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.CreateTaskRequest;

                    /**
                     * Creates a plain object from a CreateTaskRequest message. Also converts values to other types if specified.
                     * @param message CreateTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.CreateTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateTaskRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteTaskRequest. */
                interface IDeleteTaskRequest {

                    /** DeleteTaskRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteTaskRequest. */
                class DeleteTaskRequest implements IDeleteTaskRequest {

                    /**
                     * Constructs a new DeleteTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IDeleteTaskRequest);

                    /** DeleteTaskRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IDeleteTaskRequest): google.cloud.tasks.v2.DeleteTaskRequest;

                    /**
                     * Encodes the specified DeleteTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2.DeleteTaskRequest.verify|verify} messages.
                     * @param message DeleteTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IDeleteTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.DeleteTaskRequest.verify|verify} messages.
                     * @param message DeleteTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IDeleteTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.DeleteTaskRequest;

                    /**
                     * Decodes a DeleteTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.DeleteTaskRequest;

                    /**
                     * Verifies a DeleteTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.DeleteTaskRequest;

                    /**
                     * Creates a plain object from a DeleteTaskRequest message. Also converts values to other types if specified.
                     * @param message DeleteTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.DeleteTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteTaskRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RunTaskRequest. */
                interface IRunTaskRequest {

                    /** RunTaskRequest name */
                    name?: (string|null);

                    /** RunTaskRequest responseView */
                    responseView?: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View|null);
                }

                /** Represents a RunTaskRequest. */
                class RunTaskRequest implements IRunTaskRequest {

                    /**
                     * Constructs a new RunTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IRunTaskRequest);

                    /** RunTaskRequest name. */
                    public name: string;

                    /** RunTaskRequest responseView. */
                    public responseView: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View);

                    /**
                     * Creates a new RunTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IRunTaskRequest): google.cloud.tasks.v2.RunTaskRequest;

                    /**
                     * Encodes the specified RunTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2.RunTaskRequest.verify|verify} messages.
                     * @param message RunTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IRunTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.RunTaskRequest.verify|verify} messages.
                     * @param message RunTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IRunTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.RunTaskRequest;

                    /**
                     * Decodes a RunTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.RunTaskRequest;

                    /**
                     * Verifies a RunTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.RunTaskRequest;

                    /**
                     * Creates a plain object from a RunTaskRequest message. Also converts values to other types if specified.
                     * @param message RunTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.RunTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunTaskRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RunTaskRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Queue. */
                interface IQueue {

                    /** Queue name */
                    name?: (string|null);

                    /** Queue appEngineRoutingOverride */
                    appEngineRoutingOverride?: (google.cloud.tasks.v2.IAppEngineRouting|null);

                    /** Queue rateLimits */
                    rateLimits?: (google.cloud.tasks.v2.IRateLimits|null);

                    /** Queue retryConfig */
                    retryConfig?: (google.cloud.tasks.v2.IRetryConfig|null);

                    /** Queue state */
                    state?: (google.cloud.tasks.v2.Queue.State|keyof typeof google.cloud.tasks.v2.Queue.State|null);

                    /** Queue purgeTime */
                    purgeTime?: (google.protobuf.ITimestamp|null);

                    /** Queue stackdriverLoggingConfig */
                    stackdriverLoggingConfig?: (google.cloud.tasks.v2.IStackdriverLoggingConfig|null);
                }

                /** Represents a Queue. */
                class Queue implements IQueue {

                    /**
                     * Constructs a new Queue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IQueue);

                    /** Queue name. */
                    public name: string;

                    /** Queue appEngineRoutingOverride. */
                    public appEngineRoutingOverride?: (google.cloud.tasks.v2.IAppEngineRouting|null);

                    /** Queue rateLimits. */
                    public rateLimits?: (google.cloud.tasks.v2.IRateLimits|null);

                    /** Queue retryConfig. */
                    public retryConfig?: (google.cloud.tasks.v2.IRetryConfig|null);

                    /** Queue state. */
                    public state: (google.cloud.tasks.v2.Queue.State|keyof typeof google.cloud.tasks.v2.Queue.State);

                    /** Queue purgeTime. */
                    public purgeTime?: (google.protobuf.ITimestamp|null);

                    /** Queue stackdriverLoggingConfig. */
                    public stackdriverLoggingConfig?: (google.cloud.tasks.v2.IStackdriverLoggingConfig|null);

                    /**
                     * Creates a new Queue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Queue instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IQueue): google.cloud.tasks.v2.Queue;

                    /**
                     * Encodes the specified Queue message. Does not implicitly {@link google.cloud.tasks.v2.Queue.verify|verify} messages.
                     * @param message Queue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IQueue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Queue message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.Queue.verify|verify} messages.
                     * @param message Queue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IQueue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Queue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Queue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.Queue;

                    /**
                     * Decodes a Queue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Queue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.Queue;

                    /**
                     * Verifies a Queue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Queue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Queue
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.Queue;

                    /**
                     * Creates a plain object from a Queue message. Also converts values to other types if specified.
                     * @param message Queue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.Queue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Queue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Queue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Queue {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        PAUSED = 2,
                        DISABLED = 3
                    }
                }

                /** Properties of a RateLimits. */
                interface IRateLimits {

                    /** RateLimits maxDispatchesPerSecond */
                    maxDispatchesPerSecond?: (number|null);

                    /** RateLimits maxBurstSize */
                    maxBurstSize?: (number|null);

                    /** RateLimits maxConcurrentDispatches */
                    maxConcurrentDispatches?: (number|null);
                }

                /** Represents a RateLimits. */
                class RateLimits implements IRateLimits {

                    /**
                     * Constructs a new RateLimits.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IRateLimits);

                    /** RateLimits maxDispatchesPerSecond. */
                    public maxDispatchesPerSecond: number;

                    /** RateLimits maxBurstSize. */
                    public maxBurstSize: number;

                    /** RateLimits maxConcurrentDispatches. */
                    public maxConcurrentDispatches: number;

                    /**
                     * Creates a new RateLimits instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RateLimits instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IRateLimits): google.cloud.tasks.v2.RateLimits;

                    /**
                     * Encodes the specified RateLimits message. Does not implicitly {@link google.cloud.tasks.v2.RateLimits.verify|verify} messages.
                     * @param message RateLimits message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IRateLimits, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RateLimits message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.RateLimits.verify|verify} messages.
                     * @param message RateLimits message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IRateLimits, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RateLimits message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RateLimits
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.RateLimits;

                    /**
                     * Decodes a RateLimits message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RateLimits
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.RateLimits;

                    /**
                     * Verifies a RateLimits message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RateLimits message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RateLimits
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.RateLimits;

                    /**
                     * Creates a plain object from a RateLimits message. Also converts values to other types if specified.
                     * @param message RateLimits
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.RateLimits, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RateLimits to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RateLimits
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RetryConfig. */
                interface IRetryConfig {

                    /** RetryConfig maxAttempts */
                    maxAttempts?: (number|null);

                    /** RetryConfig maxRetryDuration */
                    maxRetryDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig minBackoff */
                    minBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxBackoff */
                    maxBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxDoublings */
                    maxDoublings?: (number|null);
                }

                /** Represents a RetryConfig. */
                class RetryConfig implements IRetryConfig {

                    /**
                     * Constructs a new RetryConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IRetryConfig);

                    /** RetryConfig maxAttempts. */
                    public maxAttempts: number;

                    /** RetryConfig maxRetryDuration. */
                    public maxRetryDuration?: (google.protobuf.IDuration|null);

                    /** RetryConfig minBackoff. */
                    public minBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxBackoff. */
                    public maxBackoff?: (google.protobuf.IDuration|null);

                    /** RetryConfig maxDoublings. */
                    public maxDoublings: number;

                    /**
                     * Creates a new RetryConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RetryConfig instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IRetryConfig): google.cloud.tasks.v2.RetryConfig;

                    /**
                     * Encodes the specified RetryConfig message. Does not implicitly {@link google.cloud.tasks.v2.RetryConfig.verify|verify} messages.
                     * @param message RetryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IRetryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RetryConfig message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.RetryConfig.verify|verify} messages.
                     * @param message RetryConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IRetryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RetryConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RetryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.RetryConfig;

                    /**
                     * Decodes a RetryConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RetryConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.RetryConfig;

                    /**
                     * Verifies a RetryConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RetryConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RetryConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.RetryConfig;

                    /**
                     * Creates a plain object from a RetryConfig message. Also converts values to other types if specified.
                     * @param message RetryConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.RetryConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RetryConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RetryConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StackdriverLoggingConfig. */
                interface IStackdriverLoggingConfig {

                    /** StackdriverLoggingConfig samplingRatio */
                    samplingRatio?: (number|null);
                }

                /** Represents a StackdriverLoggingConfig. */
                class StackdriverLoggingConfig implements IStackdriverLoggingConfig {

                    /**
                     * Constructs a new StackdriverLoggingConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IStackdriverLoggingConfig);

                    /** StackdriverLoggingConfig samplingRatio. */
                    public samplingRatio: number;

                    /**
                     * Creates a new StackdriverLoggingConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StackdriverLoggingConfig instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IStackdriverLoggingConfig): google.cloud.tasks.v2.StackdriverLoggingConfig;

                    /**
                     * Encodes the specified StackdriverLoggingConfig message. Does not implicitly {@link google.cloud.tasks.v2.StackdriverLoggingConfig.verify|verify} messages.
                     * @param message StackdriverLoggingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IStackdriverLoggingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StackdriverLoggingConfig message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.StackdriverLoggingConfig.verify|verify} messages.
                     * @param message StackdriverLoggingConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IStackdriverLoggingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StackdriverLoggingConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StackdriverLoggingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.StackdriverLoggingConfig;

                    /**
                     * Decodes a StackdriverLoggingConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StackdriverLoggingConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.StackdriverLoggingConfig;

                    /**
                     * Verifies a StackdriverLoggingConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StackdriverLoggingConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StackdriverLoggingConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.StackdriverLoggingConfig;

                    /**
                     * Creates a plain object from a StackdriverLoggingConfig message. Also converts values to other types if specified.
                     * @param message StackdriverLoggingConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.StackdriverLoggingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StackdriverLoggingConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StackdriverLoggingConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a HttpRequest. */
                interface IHttpRequest {

                    /** HttpRequest url */
                    url?: (string|null);

                    /** HttpRequest httpMethod */
                    httpMethod?: (google.cloud.tasks.v2.HttpMethod|keyof typeof google.cloud.tasks.v2.HttpMethod|null);

                    /** HttpRequest headers */
                    headers?: ({ [k: string]: string }|null);

                    /** HttpRequest body */
                    body?: (Uint8Array|string|null);

                    /** HttpRequest oauthToken */
                    oauthToken?: (google.cloud.tasks.v2.IOAuthToken|null);

                    /** HttpRequest oidcToken */
                    oidcToken?: (google.cloud.tasks.v2.IOidcToken|null);
                }

                /** Represents a HttpRequest. */
                class HttpRequest implements IHttpRequest {

                    /**
                     * Constructs a new HttpRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IHttpRequest);

                    /** HttpRequest url. */
                    public url: string;

                    /** HttpRequest httpMethod. */
                    public httpMethod: (google.cloud.tasks.v2.HttpMethod|keyof typeof google.cloud.tasks.v2.HttpMethod);

                    /** HttpRequest headers. */
                    public headers: { [k: string]: string };

                    /** HttpRequest body. */
                    public body: (Uint8Array|string);

                    /** HttpRequest oauthToken. */
                    public oauthToken?: (google.cloud.tasks.v2.IOAuthToken|null);

                    /** HttpRequest oidcToken. */
                    public oidcToken?: (google.cloud.tasks.v2.IOidcToken|null);

                    /** HttpRequest authorizationHeader. */
                    public authorizationHeader?: ("oauthToken"|"oidcToken");

                    /**
                     * Creates a new HttpRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HttpRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IHttpRequest): google.cloud.tasks.v2.HttpRequest;

                    /**
                     * Encodes the specified HttpRequest message. Does not implicitly {@link google.cloud.tasks.v2.HttpRequest.verify|verify} messages.
                     * @param message HttpRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HttpRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.HttpRequest.verify|verify} messages.
                     * @param message HttpRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HttpRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HttpRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.HttpRequest;

                    /**
                     * Decodes a HttpRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HttpRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.HttpRequest;

                    /**
                     * Verifies a HttpRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HttpRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HttpRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.HttpRequest;

                    /**
                     * Creates a plain object from a HttpRequest message. Also converts values to other types if specified.
                     * @param message HttpRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.HttpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HttpRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for HttpRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AppEngineHttpRequest. */
                interface IAppEngineHttpRequest {

                    /** AppEngineHttpRequest httpMethod */
                    httpMethod?: (google.cloud.tasks.v2.HttpMethod|keyof typeof google.cloud.tasks.v2.HttpMethod|null);

                    /** AppEngineHttpRequest appEngineRouting */
                    appEngineRouting?: (google.cloud.tasks.v2.IAppEngineRouting|null);

                    /** AppEngineHttpRequest relativeUri */
                    relativeUri?: (string|null);

                    /** AppEngineHttpRequest headers */
                    headers?: ({ [k: string]: string }|null);

                    /** AppEngineHttpRequest body */
                    body?: (Uint8Array|string|null);
                }

                /** Represents an AppEngineHttpRequest. */
                class AppEngineHttpRequest implements IAppEngineHttpRequest {

                    /**
                     * Constructs a new AppEngineHttpRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IAppEngineHttpRequest);

                    /** AppEngineHttpRequest httpMethod. */
                    public httpMethod: (google.cloud.tasks.v2.HttpMethod|keyof typeof google.cloud.tasks.v2.HttpMethod);

                    /** AppEngineHttpRequest appEngineRouting. */
                    public appEngineRouting?: (google.cloud.tasks.v2.IAppEngineRouting|null);

                    /** AppEngineHttpRequest relativeUri. */
                    public relativeUri: string;

                    /** AppEngineHttpRequest headers. */
                    public headers: { [k: string]: string };

                    /** AppEngineHttpRequest body. */
                    public body: (Uint8Array|string);

                    /**
                     * Creates a new AppEngineHttpRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AppEngineHttpRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IAppEngineHttpRequest): google.cloud.tasks.v2.AppEngineHttpRequest;

                    /**
                     * Encodes the specified AppEngineHttpRequest message. Does not implicitly {@link google.cloud.tasks.v2.AppEngineHttpRequest.verify|verify} messages.
                     * @param message AppEngineHttpRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IAppEngineHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngineHttpRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.AppEngineHttpRequest.verify|verify} messages.
                     * @param message AppEngineHttpRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IAppEngineHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngineHttpRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngineHttpRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.AppEngineHttpRequest;

                    /**
                     * Decodes an AppEngineHttpRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngineHttpRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.AppEngineHttpRequest;

                    /**
                     * Verifies an AppEngineHttpRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AppEngineHttpRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AppEngineHttpRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.AppEngineHttpRequest;

                    /**
                     * Creates a plain object from an AppEngineHttpRequest message. Also converts values to other types if specified.
                     * @param message AppEngineHttpRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.AppEngineHttpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AppEngineHttpRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AppEngineHttpRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AppEngineRouting. */
                interface IAppEngineRouting {

                    /** AppEngineRouting service */
                    service?: (string|null);

                    /** AppEngineRouting version */
                    version?: (string|null);

                    /** AppEngineRouting instance */
                    instance?: (string|null);

                    /** AppEngineRouting host */
                    host?: (string|null);
                }

                /** Represents an AppEngineRouting. */
                class AppEngineRouting implements IAppEngineRouting {

                    /**
                     * Constructs a new AppEngineRouting.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IAppEngineRouting);

                    /** AppEngineRouting service. */
                    public service: string;

                    /** AppEngineRouting version. */
                    public version: string;

                    /** AppEngineRouting instance. */
                    public instance: string;

                    /** AppEngineRouting host. */
                    public host: string;

                    /**
                     * Creates a new AppEngineRouting instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AppEngineRouting instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IAppEngineRouting): google.cloud.tasks.v2.AppEngineRouting;

                    /**
                     * Encodes the specified AppEngineRouting message. Does not implicitly {@link google.cloud.tasks.v2.AppEngineRouting.verify|verify} messages.
                     * @param message AppEngineRouting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IAppEngineRouting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AppEngineRouting message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.AppEngineRouting.verify|verify} messages.
                     * @param message AppEngineRouting message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IAppEngineRouting, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AppEngineRouting message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AppEngineRouting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.AppEngineRouting;

                    /**
                     * Decodes an AppEngineRouting message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AppEngineRouting
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.AppEngineRouting;

                    /**
                     * Verifies an AppEngineRouting message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AppEngineRouting message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AppEngineRouting
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.AppEngineRouting;

                    /**
                     * Creates a plain object from an AppEngineRouting message. Also converts values to other types if specified.
                     * @param message AppEngineRouting
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.AppEngineRouting, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AppEngineRouting to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AppEngineRouting
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** HttpMethod enum. */
                enum HttpMethod {
                    HTTP_METHOD_UNSPECIFIED = 0,
                    POST = 1,
                    GET = 2,
                    HEAD = 3,
                    PUT = 4,
                    DELETE = 5,
                    PATCH = 6,
                    OPTIONS = 7
                }

                /** Properties of a OAuthToken. */
                interface IOAuthToken {

                    /** OAuthToken serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** OAuthToken scope */
                    scope?: (string|null);
                }

                /** Represents a OAuthToken. */
                class OAuthToken implements IOAuthToken {

                    /**
                     * Constructs a new OAuthToken.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IOAuthToken);

                    /** OAuthToken serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** OAuthToken scope. */
                    public scope: string;

                    /**
                     * Creates a new OAuthToken instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OAuthToken instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IOAuthToken): google.cloud.tasks.v2.OAuthToken;

                    /**
                     * Encodes the specified OAuthToken message. Does not implicitly {@link google.cloud.tasks.v2.OAuthToken.verify|verify} messages.
                     * @param message OAuthToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IOAuthToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OAuthToken message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.OAuthToken.verify|verify} messages.
                     * @param message OAuthToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IOAuthToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a OAuthToken message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OAuthToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.OAuthToken;

                    /**
                     * Decodes a OAuthToken message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OAuthToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.OAuthToken;

                    /**
                     * Verifies a OAuthToken message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a OAuthToken message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OAuthToken
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.OAuthToken;

                    /**
                     * Creates a plain object from a OAuthToken message. Also converts values to other types if specified.
                     * @param message OAuthToken
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.OAuthToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OAuthToken to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OAuthToken
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OidcToken. */
                interface IOidcToken {

                    /** OidcToken serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** OidcToken audience */
                    audience?: (string|null);
                }

                /** Represents an OidcToken. */
                class OidcToken implements IOidcToken {

                    /**
                     * Constructs a new OidcToken.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IOidcToken);

                    /** OidcToken serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** OidcToken audience. */
                    public audience: string;

                    /**
                     * Creates a new OidcToken instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OidcToken instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IOidcToken): google.cloud.tasks.v2.OidcToken;

                    /**
                     * Encodes the specified OidcToken message. Does not implicitly {@link google.cloud.tasks.v2.OidcToken.verify|verify} messages.
                     * @param message OidcToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IOidcToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OidcToken message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.OidcToken.verify|verify} messages.
                     * @param message OidcToken message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IOidcToken, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OidcToken message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OidcToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.OidcToken;

                    /**
                     * Decodes an OidcToken message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OidcToken
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.OidcToken;

                    /**
                     * Verifies an OidcToken message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OidcToken message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OidcToken
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.OidcToken;

                    /**
                     * Creates a plain object from an OidcToken message. Also converts values to other types if specified.
                     * @param message OidcToken
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.OidcToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OidcToken to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OidcToken
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Task. */
                interface ITask {

                    /** Task name */
                    name?: (string|null);

                    /** Task appEngineHttpRequest */
                    appEngineHttpRequest?: (google.cloud.tasks.v2.IAppEngineHttpRequest|null);

                    /** Task httpRequest */
                    httpRequest?: (google.cloud.tasks.v2.IHttpRequest|null);

                    /** Task scheduleTime */
                    scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Task createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Task dispatchDeadline */
                    dispatchDeadline?: (google.protobuf.IDuration|null);

                    /** Task dispatchCount */
                    dispatchCount?: (number|null);

                    /** Task responseCount */
                    responseCount?: (number|null);

                    /** Task firstAttempt */
                    firstAttempt?: (google.cloud.tasks.v2.IAttempt|null);

                    /** Task lastAttempt */
                    lastAttempt?: (google.cloud.tasks.v2.IAttempt|null);

                    /** Task view */
                    view?: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View|null);
                }

                /** Represents a Task. */
                class Task implements ITask {

                    /**
                     * Constructs a new Task.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.ITask);

                    /** Task name. */
                    public name: string;

                    /** Task appEngineHttpRequest. */
                    public appEngineHttpRequest?: (google.cloud.tasks.v2.IAppEngineHttpRequest|null);

                    /** Task httpRequest. */
                    public httpRequest?: (google.cloud.tasks.v2.IHttpRequest|null);

                    /** Task scheduleTime. */
                    public scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Task createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Task dispatchDeadline. */
                    public dispatchDeadline?: (google.protobuf.IDuration|null);

                    /** Task dispatchCount. */
                    public dispatchCount: number;

                    /** Task responseCount. */
                    public responseCount: number;

                    /** Task firstAttempt. */
                    public firstAttempt?: (google.cloud.tasks.v2.IAttempt|null);

                    /** Task lastAttempt. */
                    public lastAttempt?: (google.cloud.tasks.v2.IAttempt|null);

                    /** Task view. */
                    public view: (google.cloud.tasks.v2.Task.View|keyof typeof google.cloud.tasks.v2.Task.View);

                    /** Task messageType. */
                    public messageType?: ("appEngineHttpRequest"|"httpRequest");

                    /**
                     * Creates a new Task instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Task instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.ITask): google.cloud.tasks.v2.Task;

                    /**
                     * Encodes the specified Task message. Does not implicitly {@link google.cloud.tasks.v2.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Task message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Task message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.Task;

                    /**
                     * Decodes a Task message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.Task;

                    /**
                     * Verifies a Task message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Task message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Task
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.Task;

                    /**
                     * Creates a plain object from a Task message. Also converts values to other types if specified.
                     * @param message Task
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Task to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Task
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Task {

                    /** View enum. */
                    enum View {
                        VIEW_UNSPECIFIED = 0,
                        BASIC = 1,
                        FULL = 2
                    }
                }

                /** Properties of an Attempt. */
                interface IAttempt {

                    /** Attempt scheduleTime */
                    scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt dispatchTime */
                    dispatchTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt responseTime */
                    responseTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt responseStatus */
                    responseStatus?: (google.rpc.IStatus|null);
                }

                /** Represents an Attempt. */
                class Attempt implements IAttempt {

                    /**
                     * Constructs a new Attempt.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2.IAttempt);

                    /** Attempt scheduleTime. */
                    public scheduleTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt dispatchTime. */
                    public dispatchTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt responseTime. */
                    public responseTime?: (google.protobuf.ITimestamp|null);

                    /** Attempt responseStatus. */
                    public responseStatus?: (google.rpc.IStatus|null);

                    /**
                     * Creates a new Attempt instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Attempt instance
                     */
                    public static create(properties?: google.cloud.tasks.v2.IAttempt): google.cloud.tasks.v2.Attempt;

                    /**
                     * Encodes the specified Attempt message. Does not implicitly {@link google.cloud.tasks.v2.Attempt.verify|verify} messages.
                     * @param message Attempt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2.IAttempt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Attempt message, length delimited. Does not implicitly {@link google.cloud.tasks.v2.Attempt.verify|verify} messages.
                     * @param message Attempt message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2.IAttempt, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Attempt message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Attempt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2.Attempt;

                    /**
                     * Decodes an Attempt message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Attempt
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2.Attempt;

                    /**
                     * Verifies an Attempt message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Attempt message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Attempt
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2.Attempt;

                    /**
                     * Creates a plain object from an Attempt message. Also converts values to other types if specified.
                     * @param message Attempt
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2.Attempt, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Attempt to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Attempt
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Namespace v2beta2. */
            namespace v2beta2 {

                /** Represents a CloudTasks */
                class CloudTasks extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudTasks service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudTasks service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudTasks;

                    /**
                     * Calls ListQueues.
                     * @param request ListQueuesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListQueuesResponse
                     */
                    public listQueues(request: google.cloud.tasks.v2beta2.IListQueuesRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.ListQueuesCallback): void;

                    /**
                     * Calls ListQueues.
                     * @param request ListQueuesRequest message or plain object
                     * @returns Promise
                     */
                    public listQueues(request: google.cloud.tasks.v2beta2.IListQueuesRequest): Promise<google.cloud.tasks.v2beta2.ListQueuesResponse>;

                    /**
                     * Calls GetQueue.
                     * @param request GetQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public getQueue(request: google.cloud.tasks.v2beta2.IGetQueueRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.GetQueueCallback): void;

                    /**
                     * Calls GetQueue.
                     * @param request GetQueueRequest message or plain object
                     * @returns Promise
                     */
                    public getQueue(request: google.cloud.tasks.v2beta2.IGetQueueRequest): Promise<google.cloud.tasks.v2beta2.Queue>;

                    /**
                     * Calls CreateQueue.
                     * @param request CreateQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public createQueue(request: google.cloud.tasks.v2beta2.ICreateQueueRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.CreateQueueCallback): void;

                    /**
                     * Calls CreateQueue.
                     * @param request CreateQueueRequest message or plain object
                     * @returns Promise
                     */
                    public createQueue(request: google.cloud.tasks.v2beta2.ICreateQueueRequest): Promise<google.cloud.tasks.v2beta2.Queue>;

                    /**
                     * Calls UpdateQueue.
                     * @param request UpdateQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public updateQueue(request: google.cloud.tasks.v2beta2.IUpdateQueueRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.UpdateQueueCallback): void;

                    /**
                     * Calls UpdateQueue.
                     * @param request UpdateQueueRequest message or plain object
                     * @returns Promise
                     */
                    public updateQueue(request: google.cloud.tasks.v2beta2.IUpdateQueueRequest): Promise<google.cloud.tasks.v2beta2.Queue>;

                    /**
                     * Calls DeleteQueue.
                     * @param request DeleteQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteQueue(request: google.cloud.tasks.v2beta2.IDeleteQueueRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.DeleteQueueCallback): void;

                    /**
                     * Calls DeleteQueue.
                     * @param request DeleteQueueRequest message or plain object
                     * @returns Promise
                     */
                    public deleteQueue(request: google.cloud.tasks.v2beta2.IDeleteQueueRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls PurgeQueue.
                     * @param request PurgeQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public purgeQueue(request: google.cloud.tasks.v2beta2.IPurgeQueueRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.PurgeQueueCallback): void;

                    /**
                     * Calls PurgeQueue.
                     * @param request PurgeQueueRequest message or plain object
                     * @returns Promise
                     */
                    public purgeQueue(request: google.cloud.tasks.v2beta2.IPurgeQueueRequest): Promise<google.cloud.tasks.v2beta2.Queue>;

                    /**
                     * Calls PauseQueue.
                     * @param request PauseQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public pauseQueue(request: google.cloud.tasks.v2beta2.IPauseQueueRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.PauseQueueCallback): void;

                    /**
                     * Calls PauseQueue.
                     * @param request PauseQueueRequest message or plain object
                     * @returns Promise
                     */
                    public pauseQueue(request: google.cloud.tasks.v2beta2.IPauseQueueRequest): Promise<google.cloud.tasks.v2beta2.Queue>;

                    /**
                     * Calls ResumeQueue.
                     * @param request ResumeQueueRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Queue
                     */
                    public resumeQueue(request: google.cloud.tasks.v2beta2.IResumeQueueRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.ResumeQueueCallback): void;

                    /**
                     * Calls ResumeQueue.
                     * @param request ResumeQueueRequest message or plain object
                     * @returns Promise
                     */
                    public resumeQueue(request: google.cloud.tasks.v2beta2.IResumeQueueRequest): Promise<google.cloud.tasks.v2beta2.Queue>;

                    /**
                     * Calls UploadQueueYaml.
                     * @param request UploadQueueYamlRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public uploadQueueYaml(request: google.cloud.tasks.v2beta2.IUploadQueueYamlRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.UploadQueueYamlCallback): void;

                    /**
                     * Calls UploadQueueYaml.
                     * @param request UploadQueueYamlRequest message or plain object
                     * @returns Promise
                     */
                    public uploadQueueYaml(request: google.cloud.tasks.v2beta2.IUploadQueueYamlRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.GetIamPolicyCallback): void;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.SetIamPolicyCallback): void;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.TestIamPermissionsCallback): void;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTasksResponse
                     */
                    public listTasks(request: google.cloud.tasks.v2beta2.IListTasksRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.ListTasksCallback): void;

                    /**
                     * Calls ListTasks.
                     * @param request ListTasksRequest message or plain object
                     * @returns Promise
                     */
                    public listTasks(request: google.cloud.tasks.v2beta2.IListTasksRequest): Promise<google.cloud.tasks.v2beta2.ListTasksResponse>;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public getTask(request: google.cloud.tasks.v2beta2.IGetTaskRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.GetTaskCallback): void;

                    /**
                     * Calls GetTask.
                     * @param request GetTaskRequest message or plain object
                     * @returns Promise
                     */
                    public getTask(request: google.cloud.tasks.v2beta2.IGetTaskRequest): Promise<google.cloud.tasks.v2beta2.Task>;

                    /**
                     * Calls CreateTask.
                     * @param request CreateTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public createTask(request: google.cloud.tasks.v2beta2.ICreateTaskRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.CreateTaskCallback): void;

                    /**
                     * Calls CreateTask.
                     * @param request CreateTaskRequest message or plain object
                     * @returns Promise
                     */
                    public createTask(request: google.cloud.tasks.v2beta2.ICreateTaskRequest): Promise<google.cloud.tasks.v2beta2.Task>;

                    /**
                     * Calls DeleteTask.
                     * @param request DeleteTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTask(request: google.cloud.tasks.v2beta2.IDeleteTaskRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.DeleteTaskCallback): void;

                    /**
                     * Calls DeleteTask.
                     * @param request DeleteTaskRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTask(request: google.cloud.tasks.v2beta2.IDeleteTaskRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls LeaseTasks.
                     * @param request LeaseTasksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and LeaseTasksResponse
                     */
                    public leaseTasks(request: google.cloud.tasks.v2beta2.ILeaseTasksRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.LeaseTasksCallback): void;

                    /**
                     * Calls LeaseTasks.
                     * @param request LeaseTasksRequest message or plain object
                     * @returns Promise
                     */
                    public leaseTasks(request: google.cloud.tasks.v2beta2.ILeaseTasksRequest): Promise<google.cloud.tasks.v2beta2.LeaseTasksResponse>;

                    /**
                     * Calls AcknowledgeTask.
                     * @param request AcknowledgeTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public acknowledgeTask(request: google.cloud.tasks.v2beta2.IAcknowledgeTaskRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.AcknowledgeTaskCallback): void;

                    /**
                     * Calls AcknowledgeTask.
                     * @param request AcknowledgeTaskRequest message or plain object
                     * @returns Promise
                     */
                    public acknowledgeTask(request: google.cloud.tasks.v2beta2.IAcknowledgeTaskRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls RenewLease.
                     * @param request RenewLeaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public renewLease(request: google.cloud.tasks.v2beta2.IRenewLeaseRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.RenewLeaseCallback): void;

                    /**
                     * Calls RenewLease.
                     * @param request RenewLeaseRequest message or plain object
                     * @returns Promise
                     */
                    public renewLease(request: google.cloud.tasks.v2beta2.IRenewLeaseRequest): Promise<google.cloud.tasks.v2beta2.Task>;

                    /**
                     * Calls CancelLease.
                     * @param request CancelLeaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public cancelLease(request: google.cloud.tasks.v2beta2.ICancelLeaseRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.CancelLeaseCallback): void;

                    /**
                     * Calls CancelLease.
                     * @param request CancelLeaseRequest message or plain object
                     * @returns Promise
                     */
                    public cancelLease(request: google.cloud.tasks.v2beta2.ICancelLeaseRequest): Promise<google.cloud.tasks.v2beta2.Task>;

                    /**
                     * Calls RunTask.
                     * @param request RunTaskRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Task
                     */
                    public runTask(request: google.cloud.tasks.v2beta2.IRunTaskRequest, callback: google.cloud.tasks.v2beta2.CloudTasks.RunTaskCallback): void;

                    /**
                     * Calls RunTask.
                     * @param request RunTaskRequest message or plain object
                     * @returns Promise
                     */
                    public runTask(request: google.cloud.tasks.v2beta2.IRunTaskRequest): Promise<google.cloud.tasks.v2beta2.Task>;
                }

                namespace CloudTasks {

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|listQueues}.
                     * @param error Error, if any
                     * @param [response] ListQueuesResponse
                     */
                    type ListQueuesCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.ListQueuesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|getQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type GetQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|createQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type CreateQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|updateQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type UpdateQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|deleteQueue}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteQueueCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|purgeQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type PurgeQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|pauseQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type PauseQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|resumeQueue}.
                     * @param error Error, if any
                     * @param [response] Queue
                     */
                    type ResumeQueueCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Queue) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|uploadQueueYaml}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type UploadQueueYamlCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|getIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|setIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|testIamPermissions}.
                     * @param error Error, if any
                     * @param [response] TestIamPermissionsResponse
                     */
                    type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|listTasks}.
                     * @param error Error, if any
                     * @param [response] ListTasksResponse
                     */
                    type ListTasksCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.ListTasksResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|getTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type GetTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|createTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type CreateTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|deleteTask}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTaskCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|leaseTasks}.
                     * @param error Error, if any
                     * @param [response] LeaseTasksResponse
                     */
                    type LeaseTasksCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.LeaseTasksResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|acknowledgeTask}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type AcknowledgeTaskCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|renewLease}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type RenewLeaseCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|cancelLease}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type CancelLeaseCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Task) => void;

                    /**
                     * Callback as used by {@link google.cloud.tasks.v2beta2.CloudTasks|runTask}.
                     * @param error Error, if any
                     * @param [response] Task
                     */
                    type RunTaskCallback = (error: (Error|null), response?: google.cloud.tasks.v2beta2.Task) => void;
                }

                /** Properties of a ListQueuesRequest. */
                interface IListQueuesRequest {

                    /** ListQueuesRequest parent */
                    parent?: (string|null);

                    /** ListQueuesRequest filter */
                    filter?: (string|null);

                    /** ListQueuesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListQueuesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListQueuesRequest readMask */
                    readMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a ListQueuesRequest. */
                class ListQueuesRequest implements IListQueuesRequest {

                    /**
                     * Constructs a new ListQueuesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IListQueuesRequest);

                    /** ListQueuesRequest parent. */
                    public parent: string;

                    /** ListQueuesRequest filter. */
                    public filter: string;

                    /** ListQueuesRequest pageSize. */
                    public pageSize: number;

                    /** ListQueuesRequest pageToken. */
                    public pageToken: string;

                    /** ListQueuesRequest readMask. */
                    public readMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new ListQueuesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQueuesRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IListQueuesRequest): google.cloud.tasks.v2beta2.ListQueuesRequest;

                    /**
                     * Encodes the specified ListQueuesRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.ListQueuesRequest.verify|verify} messages.
                     * @param message ListQueuesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IListQueuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQueuesRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.ListQueuesRequest.verify|verify} messages.
                     * @param message ListQueuesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IListQueuesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQueuesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQueuesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.ListQueuesRequest;

                    /**
                     * Decodes a ListQueuesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQueuesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.ListQueuesRequest;

                    /**
                     * Verifies a ListQueuesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQueuesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQueuesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.ListQueuesRequest;

                    /**
                     * Creates a plain object from a ListQueuesRequest message. Also converts values to other types if specified.
                     * @param message ListQueuesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.ListQueuesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQueuesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListQueuesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListQueuesResponse. */
                interface IListQueuesResponse {

                    /** ListQueuesResponse queues */
                    queues?: (google.cloud.tasks.v2beta2.IQueue[]|null);

                    /** ListQueuesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListQueuesResponse. */
                class ListQueuesResponse implements IListQueuesResponse {

                    /**
                     * Constructs a new ListQueuesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IListQueuesResponse);

                    /** ListQueuesResponse queues. */
                    public queues: google.cloud.tasks.v2beta2.IQueue[];

                    /** ListQueuesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListQueuesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListQueuesResponse instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IListQueuesResponse): google.cloud.tasks.v2beta2.ListQueuesResponse;

                    /**
                     * Encodes the specified ListQueuesResponse message. Does not implicitly {@link google.cloud.tasks.v2beta2.ListQueuesResponse.verify|verify} messages.
                     * @param message ListQueuesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IListQueuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListQueuesResponse message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.ListQueuesResponse.verify|verify} messages.
                     * @param message ListQueuesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IListQueuesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListQueuesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListQueuesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.ListQueuesResponse;

                    /**
                     * Decodes a ListQueuesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListQueuesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.ListQueuesResponse;

                    /**
                     * Verifies a ListQueuesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListQueuesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListQueuesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.ListQueuesResponse;

                    /**
                     * Creates a plain object from a ListQueuesResponse message. Also converts values to other types if specified.
                     * @param message ListQueuesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.ListQueuesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListQueuesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListQueuesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetQueueRequest. */
                interface IGetQueueRequest {

                    /** GetQueueRequest name */
                    name?: (string|null);

                    /** GetQueueRequest readMask */
                    readMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents a GetQueueRequest. */
                class GetQueueRequest implements IGetQueueRequest {

                    /**
                     * Constructs a new GetQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IGetQueueRequest);

                    /** GetQueueRequest name. */
                    public name: string;

                    /** GetQueueRequest readMask. */
                    public readMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new GetQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IGetQueueRequest): google.cloud.tasks.v2beta2.GetQueueRequest;

                    /**
                     * Encodes the specified GetQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.GetQueueRequest.verify|verify} messages.
                     * @param message GetQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IGetQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.GetQueueRequest.verify|verify} messages.
                     * @param message GetQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IGetQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.GetQueueRequest;

                    /**
                     * Decodes a GetQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.GetQueueRequest;

                    /**
                     * Verifies a GetQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.GetQueueRequest;

                    /**
                     * Creates a plain object from a GetQueueRequest message. Also converts values to other types if specified.
                     * @param message GetQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.GetQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetQueueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateQueueRequest. */
                interface ICreateQueueRequest {

                    /** CreateQueueRequest parent */
                    parent?: (string|null);

                    /** CreateQueueRequest queue */
                    queue?: (google.cloud.tasks.v2beta2.IQueue|null);
                }

                /** Represents a CreateQueueRequest. */
                class CreateQueueRequest implements ICreateQueueRequest {

                    /**
                     * Constructs a new CreateQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.ICreateQueueRequest);

                    /** CreateQueueRequest parent. */
                    public parent: string;

                    /** CreateQueueRequest queue. */
                    public queue?: (google.cloud.tasks.v2beta2.IQueue|null);

                    /**
                     * Creates a new CreateQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.ICreateQueueRequest): google.cloud.tasks.v2beta2.CreateQueueRequest;

                    /**
                     * Encodes the specified CreateQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.CreateQueueRequest.verify|verify} messages.
                     * @param message CreateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.ICreateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.CreateQueueRequest.verify|verify} messages.
                     * @param message CreateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.ICreateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.CreateQueueRequest;

                    /**
                     * Decodes a CreateQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.CreateQueueRequest;

                    /**
                     * Verifies a CreateQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.CreateQueueRequest;

                    /**
                     * Creates a plain object from a CreateQueueRequest message. Also converts values to other types if specified.
                     * @param message CreateQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.CreateQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateQueueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateQueueRequest. */
                interface IUpdateQueueRequest {

                    /** UpdateQueueRequest queue */
                    queue?: (google.cloud.tasks.v2beta2.IQueue|null);

                    /** UpdateQueueRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateQueueRequest. */
                class UpdateQueueRequest implements IUpdateQueueRequest {

                    /**
                     * Constructs a new UpdateQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IUpdateQueueRequest);

                    /** UpdateQueueRequest queue. */
                    public queue?: (google.cloud.tasks.v2beta2.IQueue|null);

                    /** UpdateQueueRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IUpdateQueueRequest): google.cloud.tasks.v2beta2.UpdateQueueRequest;

                    /**
                     * Encodes the specified UpdateQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.UpdateQueueRequest.verify|verify} messages.
                     * @param message UpdateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IUpdateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.UpdateQueueRequest.verify|verify} messages.
                     * @param message UpdateQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IUpdateQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.UpdateQueueRequest;

                    /**
                     * Decodes an UpdateQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.UpdateQueueRequest;

                    /**
                     * Verifies an UpdateQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.UpdateQueueRequest;

                    /**
                     * Creates a plain object from an UpdateQueueRequest message. Also converts values to other types if specified.
                     * @param message UpdateQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.UpdateQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateQueueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteQueueRequest. */
                interface IDeleteQueueRequest {

                    /** DeleteQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteQueueRequest. */
                class DeleteQueueRequest implements IDeleteQueueRequest {

                    /**
                     * Constructs a new DeleteQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IDeleteQueueRequest);

                    /** DeleteQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IDeleteQueueRequest): google.cloud.tasks.v2beta2.DeleteQueueRequest;

                    /**
                     * Encodes the specified DeleteQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.DeleteQueueRequest.verify|verify} messages.
                     * @param message DeleteQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IDeleteQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.DeleteQueueRequest.verify|verify} messages.
                     * @param message DeleteQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IDeleteQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.DeleteQueueRequest;

                    /**
                     * Decodes a DeleteQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.DeleteQueueRequest;

                    /**
                     * Verifies a DeleteQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.DeleteQueueRequest;

                    /**
                     * Creates a plain object from a DeleteQueueRequest message. Also converts values to other types if specified.
                     * @param message DeleteQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.DeleteQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteQueueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PurgeQueueRequest. */
                interface IPurgeQueueRequest {

                    /** PurgeQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a PurgeQueueRequest. */
                class PurgeQueueRequest implements IPurgeQueueRequest {

                    /**
                     * Constructs a new PurgeQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IPurgeQueueRequest);

                    /** PurgeQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new PurgeQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PurgeQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IPurgeQueueRequest): google.cloud.tasks.v2beta2.PurgeQueueRequest;

                    /**
                     * Encodes the specified PurgeQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.PurgeQueueRequest.verify|verify} messages.
                     * @param message PurgeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IPurgeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PurgeQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.PurgeQueueRequest.verify|verify} messages.
                     * @param message PurgeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IPurgeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PurgeQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PurgeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.PurgeQueueRequest;

                    /**
                     * Decodes a PurgeQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PurgeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.PurgeQueueRequest;

                    /**
                     * Verifies a PurgeQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PurgeQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PurgeQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.PurgeQueueRequest;

                    /**
                     * Creates a plain object from a PurgeQueueRequest message. Also converts values to other types if specified.
                     * @param message PurgeQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.PurgeQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PurgeQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PurgeQueueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PauseQueueRequest. */
                interface IPauseQueueRequest {

                    /** PauseQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a PauseQueueRequest. */
                class PauseQueueRequest implements IPauseQueueRequest {

                    /**
                     * Constructs a new PauseQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IPauseQueueRequest);

                    /** PauseQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new PauseQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PauseQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IPauseQueueRequest): google.cloud.tasks.v2beta2.PauseQueueRequest;

                    /**
                     * Encodes the specified PauseQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.PauseQueueRequest.verify|verify} messages.
                     * @param message PauseQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IPauseQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PauseQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.PauseQueueRequest.verify|verify} messages.
                     * @param message PauseQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IPauseQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PauseQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PauseQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.PauseQueueRequest;

                    /**
                     * Decodes a PauseQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PauseQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.PauseQueueRequest;

                    /**
                     * Verifies a PauseQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PauseQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PauseQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.PauseQueueRequest;

                    /**
                     * Creates a plain object from a PauseQueueRequest message. Also converts values to other types if specified.
                     * @param message PauseQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.PauseQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PauseQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PauseQueueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResumeQueueRequest. */
                interface IResumeQueueRequest {

                    /** ResumeQueueRequest name */
                    name?: (string|null);
                }

                /** Represents a ResumeQueueRequest. */
                class ResumeQueueRequest implements IResumeQueueRequest {

                    /**
                     * Constructs a new ResumeQueueRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IResumeQueueRequest);

                    /** ResumeQueueRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResumeQueueRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResumeQueueRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IResumeQueueRequest): google.cloud.tasks.v2beta2.ResumeQueueRequest;

                    /**
                     * Encodes the specified ResumeQueueRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.ResumeQueueRequest.verify|verify} messages.
                     * @param message ResumeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IResumeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResumeQueueRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.ResumeQueueRequest.verify|verify} messages.
                     * @param message ResumeQueueRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IResumeQueueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResumeQueueRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResumeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.ResumeQueueRequest;

                    /**
                     * Decodes a ResumeQueueRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResumeQueueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.ResumeQueueRequest;

                    /**
                     * Verifies a ResumeQueueRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResumeQueueRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResumeQueueRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.ResumeQueueRequest;

                    /**
                     * Creates a plain object from a ResumeQueueRequest message. Also converts values to other types if specified.
                     * @param message ResumeQueueRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.ResumeQueueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResumeQueueRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResumeQueueRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UploadQueueYamlRequest. */
                interface IUploadQueueYamlRequest {

                    /** UploadQueueYamlRequest appId */
                    appId?: (string|null);

                    /** UploadQueueYamlRequest httpBody */
                    httpBody?: (google.api.IHttpBody|null);
                }

                /** Represents an UploadQueueYamlRequest. */
                class UploadQueueYamlRequest implements IUploadQueueYamlRequest {

                    /**
                     * Constructs a new UploadQueueYamlRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IUploadQueueYamlRequest);

                    /** UploadQueueYamlRequest appId. */
                    public appId: string;

                    /** UploadQueueYamlRequest httpBody. */
                    public httpBody?: (google.api.IHttpBody|null);

                    /** UploadQueueYamlRequest _httpBody. */
                    public _httpBody?: "httpBody";

                    /**
                     * Creates a new UploadQueueYamlRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UploadQueueYamlRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IUploadQueueYamlRequest): google.cloud.tasks.v2beta2.UploadQueueYamlRequest;

                    /**
                     * Encodes the specified UploadQueueYamlRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.UploadQueueYamlRequest.verify|verify} messages.
                     * @param message UploadQueueYamlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IUploadQueueYamlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UploadQueueYamlRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.UploadQueueYamlRequest.verify|verify} messages.
                     * @param message UploadQueueYamlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IUploadQueueYamlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UploadQueueYamlRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UploadQueueYamlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.UploadQueueYamlRequest;

                    /**
                     * Decodes an UploadQueueYamlRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UploadQueueYamlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.UploadQueueYamlRequest;

                    /**
                     * Verifies an UploadQueueYamlRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UploadQueueYamlRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UploadQueueYamlRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.UploadQueueYamlRequest;

                    /**
                     * Creates a plain object from an UploadQueueYamlRequest message. Also converts values to other types if specified.
                     * @param message UploadQueueYamlRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.UploadQueueYamlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UploadQueueYamlRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UploadQueueYamlRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListTasksRequest. */
                interface IListTasksRequest {

                    /** ListTasksRequest parent */
                    parent?: (string|null);

                    /** ListTasksRequest responseView */
                    responseView?: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View|null);

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
                    constructor(properties?: google.cloud.tasks.v2beta2.IListTasksRequest);

                    /** ListTasksRequest parent. */
                    public parent: string;

                    /** ListTasksRequest responseView. */
                    public responseView: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View);

                    /** ListTasksRequest pageSize. */
                    public pageSize: number;

                    /** ListTasksRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTasksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IListTasksRequest): google.cloud.tasks.v2beta2.ListTasksRequest;

                    /**
                     * Encodes the specified ListTasksRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.ListTasksRequest.verify|verify} messages.
                     * @param message ListTasksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IListTasksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.ListTasksRequest;

                    /**
                     * Decodes a ListTasksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.ListTasksRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.ListTasksRequest;

                    /**
                     * Creates a plain object from a ListTasksRequest message. Also converts values to other types if specified.
                     * @param message ListTasksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.ListTasksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    tasks?: (google.cloud.tasks.v2beta2.ITask[]|null);

                    /** ListTasksResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTasksResponse. */
                class ListTasksResponse implements IListTasksResponse {

                    /**
                     * Constructs a new ListTasksResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IListTasksResponse);

                    /** ListTasksResponse tasks. */
                    public tasks: google.cloud.tasks.v2beta2.ITask[];

                    /** ListTasksResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTasksResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTasksResponse instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IListTasksResponse): google.cloud.tasks.v2beta2.ListTasksResponse;

                    /**
                     * Encodes the specified ListTasksResponse message. Does not implicitly {@link google.cloud.tasks.v2beta2.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTasksResponse message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.ListTasksResponse.verify|verify} messages.
                     * @param message ListTasksResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IListTasksResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.ListTasksResponse;

                    /**
                     * Decodes a ListTasksResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTasksResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.ListTasksResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.ListTasksResponse;

                    /**
                     * Creates a plain object from a ListTasksResponse message. Also converts values to other types if specified.
                     * @param message ListTasksResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.ListTasksResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** GetTaskRequest responseView */
                    responseView?: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View|null);
                }

                /** Represents a GetTaskRequest. */
                class GetTaskRequest implements IGetTaskRequest {

                    /**
                     * Constructs a new GetTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.IGetTaskRequest);

                    /** GetTaskRequest name. */
                    public name: string;

                    /** GetTaskRequest responseView. */
                    public responseView: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View);

                    /**
                     * Creates a new GetTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.IGetTaskRequest): google.cloud.tasks.v2beta2.GetTaskRequest;

                    /**
                     * Encodes the specified GetTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.GetTaskRequest.verify|verify} messages.
                     * @param message GetTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.IGetTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.GetTaskRequest;

                    /**
                     * Decodes a GetTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.GetTaskRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.GetTaskRequest;

                    /**
                     * Creates a plain object from a GetTaskRequest message. Also converts values to other types if specified.
                     * @param message GetTaskRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.tasks.v2beta2.GetTaskRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a CreateTaskRequest. */
                interface ICreateTaskRequest {

                    /** CreateTaskRequest parent */
                    parent?: (string|null);

                    /** CreateTaskRequest task */
                    task?: (google.cloud.tasks.v2beta2.ITask|null);

                    /** CreateTaskRequest responseView */
                    responseView?: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View|null);
                }

                /** Represents a CreateTaskRequest. */
                class CreateTaskRequest implements ICreateTaskRequest {

                    /**
                     * Constructs a new CreateTaskRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.tasks.v2beta2.ICreateTaskRequest);

                    /** CreateTaskRequest parent. */
                    public parent: string;

                    /** CreateTaskRequest task. */
                    public task?: (google.cloud.tasks.v2beta2.ITask|null);

                    /** CreateTaskRequest responseView. */
                    public responseView: (google.cloud.tasks.v2beta2.Task.View|keyof typeof google.cloud.tasks.v2beta2.Task.View);

                    /**
                     * Creates a new CreateTaskRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTaskRequest instance
                     */
                    public static create(properties?: google.cloud.tasks.v2beta2.ICreateTaskRequest): google.cloud.tasks.v2beta2.CreateTaskRequest;

                    /**
                     * Encodes the specified CreateTaskRequest message. Does not implicitly {@link google.cloud.tasks.v2beta2.CreateTaskRequest.verify|verify} messages.
                     * @param message CreateTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.tasks.v2beta2.ICreateTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTaskRequest message, length delimited. Does not implicitly {@link google.cloud.tasks.v2beta2.CreateTaskRequest.verify|verify} messages.
                     * @param message CreateTaskRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.tasks.v2beta2.ICreateTaskRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTaskRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.tasks.v2beta2.CreateTaskRequest;

                    /**
                     * Decodes a CreateTaskRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTaskRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.tasks.v2beta2.CreateTaskRequest;

                    /**
                     * Verifies a CreateTaskRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTaskRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTaskRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.tasks.v2beta2.CreateTaskRequest;

                    /**
                     