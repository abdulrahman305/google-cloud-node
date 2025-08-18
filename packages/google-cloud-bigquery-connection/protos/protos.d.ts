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

        /** Namespace bigquery. */
        namespace bigquery {

            /** Namespace connection. */
            namespace connection {

                /** Namespace v1. */
                namespace v1 {

                    /** Represents a ConnectionService */
                    class ConnectionService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new ConnectionService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new ConnectionService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ConnectionService;

                        /**
                         * Calls CreateConnection.
                         * @param request CreateConnectionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Connection
                         */
                        public createConnection(request: google.cloud.bigquery.connection.v1.ICreateConnectionRequest, callback: google.cloud.bigquery.connection.v1.ConnectionService.CreateConnectionCallback): void;

                        /**
                         * Calls CreateConnection.
                         * @param request CreateConnectionRequest message or plain object
                         * @returns Promise
                         */
                        public createConnection(request: google.cloud.bigquery.connection.v1.ICreateConnectionRequest): Promise<google.cloud.bigquery.connection.v1.Connection>;

                        /**
                         * Calls GetConnection.
                         * @param request GetConnectionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Connection
                         */
                        public getConnection(request: google.cloud.bigquery.connection.v1.IGetConnectionRequest, callback: google.cloud.bigquery.connection.v1.ConnectionService.GetConnectionCallback): void;

                        /**
                         * Calls GetConnection.
                         * @param request GetConnectionRequest message or plain object
                         * @returns Promise
                         */
                        public getConnection(request: google.cloud.bigquery.connection.v1.IGetConnectionRequest): Promise<google.cloud.bigquery.connection.v1.Connection>;

                        /**
                         * Calls ListConnections.
                         * @param request ListConnectionsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListConnectionsResponse
                         */
                        public listConnections(request: google.cloud.bigquery.connection.v1.IListConnectionsRequest, callback: google.cloud.bigquery.connection.v1.ConnectionService.ListConnectionsCallback): void;

                        /**
                         * Calls ListConnections.
                         * @param request ListConnectionsRequest message or plain object
                         * @returns Promise
                         */
                        public listConnections(request: google.cloud.bigquery.connection.v1.IListConnectionsRequest): Promise<google.cloud.bigquery.connection.v1.ListConnectionsResponse>;

                        /**
                         * Calls UpdateConnection.
                         * @param request UpdateConnectionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Connection
                         */
                        public updateConnection(request: google.cloud.bigquery.connection.v1.IUpdateConnectionRequest, callback: google.cloud.bigquery.connection.v1.ConnectionService.UpdateConnectionCallback): void;

                        /**
                         * Calls UpdateConnection.
                         * @param request UpdateConnectionRequest message or plain object
                         * @returns Promise
                         */
                        public updateConnection(request: google.cloud.bigquery.connection.v1.IUpdateConnectionRequest): Promise<google.cloud.bigquery.connection.v1.Connection>;

                        /**
                         * Calls DeleteConnection.
                         * @param request DeleteConnectionRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteConnection(request: google.cloud.bigquery.connection.v1.IDeleteConnectionRequest, callback: google.cloud.bigquery.connection.v1.ConnectionService.DeleteConnectionCallback): void;

                        /**
                         * Calls DeleteConnection.
                         * @param request DeleteConnectionRequest message or plain object
                         * @returns Promise
                         */
                        public deleteConnection(request: google.cloud.bigquery.connection.v1.IDeleteConnectionRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls GetIamPolicy.
                         * @param request GetIamPolicyRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Policy
                         */
                        public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.cloud.bigquery.connection.v1.ConnectionService.GetIamPolicyCallback): void;

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
                        public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.cloud.bigquery.connection.v1.ConnectionService.SetIamPolicyCallback): void;

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
                        public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.cloud.bigquery.connection.v1.ConnectionService.TestIamPermissionsCallback): void;

                        /**
                         * Calls TestIamPermissions.
                         * @param request TestIamPermissionsRequest message or plain object
                         * @returns Promise
                         */
                        public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;
                    }

                    namespace ConnectionService {

                        /**
                         * Callback as used by {@link google.cloud.bigquery.connection.v1.ConnectionService|createConnection}.
                         * @param error Error, if any
                         * @param [response] Connection
                         */
                        type CreateConnectionCallback = (error: (Error|null), response?: google.cloud.bigquery.connection.v1.Connection) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.connection.v1.ConnectionService|getConnection}.
                         * @param error Error, if any
                         * @param [response] Connection
                         */
                        type GetConnectionCallback = (error: (Error|null), response?: google.cloud.bigquery.connection.v1.Connection) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.connection.v1.ConnectionService|listConnections}.
                         * @param error Error, if any
                         * @param [response] ListConnectionsResponse
                         */
                        type ListConnectionsCallback = (error: (Error|null), response?: google.cloud.bigquery.connection.v1.ListConnectionsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.connection.v1.ConnectionService|updateConnection}.
                         * @param error Error, if any
                         * @param [response] Connection
                         */
                        type UpdateConnectionCallback = (error: (Error|null), response?: google.cloud.bigquery.connection.v1.Connection) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.connection.v1.ConnectionService|deleteConnection}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteConnectionCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.connection.v1.ConnectionService|getIamPolicy}.
                         * @param error Error, if any
                         * @param [response] Policy
                         */
                        type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.connection.v1.ConnectionService|setIamPolicy}.
                         * @param error Error, if any
                         * @param [response] Policy
                         */
                        type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                        /**
                         * Callback as used by {@link google.cloud.bigquery.connection.v1.ConnectionService|testIamPermissions}.
                         * @param error Error, if any
                         * @param [response] TestIamPermissionsResponse
                         */
                        type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;
                    }

                    /** Properties of a CreateConnectionRequest. */
                    interface ICreateConnectionRequest {

                        /** CreateConnectionRequest parent */
                        parent?: (string|null);

                        /** CreateConnectionRequest connectionId */
                        connectionId?: (string|null);

                        /** CreateConnectionRequest connection */
                        connection?: (google.cloud.bigquery.connection.v1.IConnection|null);
                    }

                    /** Represents a CreateConnectionRequest. */
                    class CreateConnectionRequest implements ICreateConnectionRequest {

                        /**
                         * Constructs a new CreateConnectionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.ICreateConnectionRequest);

                        /** CreateConnectionRequest parent. */
                        public parent: string;

                        /** CreateConnectionRequest connectionId. */
                        public connectionId: string;

                        /** CreateConnectionRequest connection. */
                        public connection?: (google.cloud.bigquery.connection.v1.IConnection|null);

                        /**
                         * Creates a new CreateConnectionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateConnectionRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.ICreateConnectionRequest): google.cloud.bigquery.connection.v1.CreateConnectionRequest;

                        /**
                         * Encodes the specified CreateConnectionRequest message. Does not implicitly {@link google.cloud.bigquery.connection.v1.CreateConnectionRequest.verify|verify} messages.
                         * @param message CreateConnectionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.ICreateConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.CreateConnectionRequest.verify|verify} messages.
                         * @param message CreateConnectionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.ICreateConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateConnectionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateConnectionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.CreateConnectionRequest;

                        /**
                         * Decodes a CreateConnectionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateConnectionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.CreateConnectionRequest;

                        /**
                         * Verifies a CreateConnectionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateConnectionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateConnectionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.connection.v1.CreateConnectionRequest;

                        /**
                         * Creates a plain object from a CreateConnectionRequest message. Also converts values to other types if specified.
                         * @param message CreateConnectionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.connection.v1.CreateConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateConnectionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateConnectionRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetConnectionRequest. */
                    interface IGetConnectionRequest {

                        /** GetConnectionRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetConnectionRequest. */
                    class GetConnectionRequest implements IGetConnectionRequest {

                        /**
                         * Constructs a new GetConnectionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.IGetConnectionRequest);

                        /** GetConnectionRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetConnectionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetConnectionRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.IGetConnectionRequest): google.cloud.bigquery.connection.v1.GetConnectionRequest;

                        /**
                         * Encodes the specified GetConnectionRequest message. Does not implicitly {@link google.cloud.bigquery.connection.v1.GetConnectionRequest.verify|verify} messages.
                         * @param message GetConnectionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.IGetConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.GetConnectionRequest.verify|verify} messages.
                         * @param message GetConnectionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.IGetConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetConnectionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetConnectionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.GetConnectionRequest;

                        /**
                         * Decodes a GetConnectionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetConnectionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.GetConnectionRequest;

                        /**
                         * Verifies a GetConnectionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetConnectionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetConnectionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.connection.v1.GetConnectionRequest;

                        /**
                         * Creates a plain object from a GetConnectionRequest message. Also converts values to other types if specified.
                         * @param message GetConnectionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.connection.v1.GetConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetConnectionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetConnectionRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListConnectionsRequest. */
                    interface IListConnectionsRequest {

                        /** ListConnectionsRequest parent */
                        parent?: (string|null);

                        /** ListConnectionsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListConnectionsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListConnectionsRequest. */
                    class ListConnectionsRequest implements IListConnectionsRequest {

                        /**
                         * Constructs a new ListConnectionsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.IListConnectionsRequest);

                        /** ListConnectionsRequest parent. */
                        public parent: string;

                        /** ListConnectionsRequest pageSize. */
                        public pageSize: number;

                        /** ListConnectionsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListConnectionsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListConnectionsRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.IListConnectionsRequest): google.cloud.bigquery.connection.v1.ListConnectionsRequest;

                        /**
                         * Encodes the specified ListConnectionsRequest message. Does not implicitly {@link google.cloud.bigquery.connection.v1.ListConnectionsRequest.verify|verify} messages.
                         * @param message ListConnectionsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.IListConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListConnectionsRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.ListConnectionsRequest.verify|verify} messages.
                         * @param message ListConnectionsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.IListConnectionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListConnectionsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListConnectionsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.ListConnectionsRequest;

                        /**
                         * Decodes a ListConnectionsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListConnectionsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.ListConnectionsRequest;

                        /**
                         * Verifies a ListConnectionsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListConnectionsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListConnectionsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.connection.v1.ListConnectionsRequest;

                        /**
                         * Creates a plain object from a ListConnectionsRequest message. Also converts values to other types if specified.
                         * @param message ListConnectionsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.connection.v1.ListConnectionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListConnectionsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListConnectionsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListConnectionsResponse. */
                    interface IListConnectionsResponse {

                        /** ListConnectionsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListConnectionsResponse connections */
                        connections?: (google.cloud.bigquery.connection.v1.IConnection[]|null);
                    }

                    /** Represents a ListConnectionsResponse. */
                    class ListConnectionsResponse implements IListConnectionsResponse {

                        /**
                         * Constructs a new ListConnectionsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.IListConnectionsResponse);

                        /** ListConnectionsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListConnectionsResponse connections. */
                        public connections: google.cloud.bigquery.connection.v1.IConnection[];

                        /**
                         * Creates a new ListConnectionsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListConnectionsResponse instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.IListConnectionsResponse): google.cloud.bigquery.connection.v1.ListConnectionsResponse;

                        /**
                         * Encodes the specified ListConnectionsResponse message. Does not implicitly {@link google.cloud.bigquery.connection.v1.ListConnectionsResponse.verify|verify} messages.
                         * @param message ListConnectionsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.IListConnectionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListConnectionsResponse message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.ListConnectionsResponse.verify|verify} messages.
                         * @param message ListConnectionsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.IListConnectionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListConnectionsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListConnectionsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.ListConnectionsResponse;

                        /**
                         * Decodes a ListConnectionsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListConnectionsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.ListConnectionsResponse;

                        /**
                         * Verifies a ListConnectionsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListConnectionsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListConnectionsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.connection.v1.ListConnectionsResponse;

                        /**
                         * Creates a plain object from a ListConnectionsResponse message. Also converts values to other types if specified.
                         * @param message ListConnectionsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.connection.v1.ListConnectionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListConnectionsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListConnectionsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateConnectionRequest. */
                    interface IUpdateConnectionRequest {

                        /** UpdateConnectionRequest name */
                        name?: (string|null);

                        /** UpdateConnectionRequest connection */
                        connection?: (google.cloud.bigquery.connection.v1.IConnection|null);

                        /** UpdateConnectionRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateConnectionRequest. */
                    class UpdateConnectionRequest implements IUpdateConnectionRequest {

                        /**
                         * Constructs a new UpdateConnectionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.IUpdateConnectionRequest);

                        /** UpdateConnectionRequest name. */
                        public name: string;

                        /** UpdateConnectionRequest connection. */
                        public connection?: (google.cloud.bigquery.connection.v1.IConnection|null);

                        /** UpdateConnectionRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateConnectionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateConnectionRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.IUpdateConnectionRequest): google.cloud.bigquery.connection.v1.UpdateConnectionRequest;

                        /**
                         * Encodes the specified UpdateConnectionRequest message. Does not implicitly {@link google.cloud.bigquery.connection.v1.UpdateConnectionRequest.verify|verify} messages.
                         * @param message UpdateConnectionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.IUpdateConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.UpdateConnectionRequest.verify|verify} messages.
                         * @param message UpdateConnectionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.IUpdateConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateConnectionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateConnectionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.UpdateConnectionRequest;

                        /**
                         * Decodes an UpdateConnectionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateConnectionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.UpdateConnectionRequest;

                        /**
                         * Verifies an UpdateConnectionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateConnectionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateConnectionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.connection.v1.UpdateConnectionRequest;

                        /**
                         * Creates a plain object from an UpdateConnectionRequest message. Also converts values to other types if specified.
                         * @param message UpdateConnectionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.connection.v1.UpdateConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateConnectionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateConnectionRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteConnectionRequest. */
                    interface IDeleteConnectionRequest {

                        /** DeleteConnectionRequest name */
                        name?: (string|null);
                    }

                    /** Represents a DeleteConnectionRequest. */
                    class DeleteConnectionRequest implements IDeleteConnectionRequest {

                        /**
                         * Constructs a new DeleteConnectionRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.IDeleteConnectionRequest);

                        /** DeleteConnectionRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteConnectionRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteConnectionRequest instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.IDeleteConnectionRequest): google.cloud.bigquery.connection.v1.DeleteConnectionRequest;

                        /**
                         * Encodes the specified DeleteConnectionRequest message. Does not implicitly {@link google.cloud.bigquery.connection.v1.DeleteConnectionRequest.verify|verify} messages.
                         * @param message DeleteConnectionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.IDeleteConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteConnectionRequest message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.DeleteConnectionRequest.verify|verify} messages.
                         * @param message DeleteConnectionRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.IDeleteConnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteConnectionRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteConnectionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.DeleteConnectionRequest;

                        /**
                         * Decodes a DeleteConnectionRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteConnectionRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.DeleteConnectionRequest;

                        /**
                         * Verifies a DeleteConnectionRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteConnectionRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteConnectionRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.connection.v1.DeleteConnectionRequest;

                        /**
                         * Creates a plain object from a DeleteConnectionRequest message. Also converts values to other types if specified.
                         * @param message DeleteConnectionRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.connection.v1.DeleteConnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteConnectionRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteConnectionRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Connection. */
                    interface IConnection {

                        /** Connection name */
                        name?: (string|null);

                        /** Connection friendlyName */
                        friendlyName?: (string|null);

                        /** Connection description */
                        description?: (string|null);

                        /** Connection cloudSql */
                        cloudSql?: (google.cloud.bigquery.connection.v1.ICloudSqlProperties|null);

                        /** Connection aws */
                        aws?: (google.cloud.bigquery.connection.v1.IAwsProperties|null);

                        /** Connection azure */
                        azure?: (google.cloud.bigquery.connection.v1.IAzureProperties|null);

                        /** Connection cloudSpanner */
                        cloudSpanner?: (google.cloud.bigquery.connection.v1.ICloudSpannerProperties|null);

                        /** Connection cloudResource */
                        cloudResource?: (google.cloud.bigquery.connection.v1.ICloudResourceProperties|null);

                        /** Connection spark */
                        spark?: (google.cloud.bigquery.connection.v1.ISparkProperties|null);

                        /** Connection salesforceDataCloud */
                        salesforceDataCloud?: (google.cloud.bigquery.connection.v1.ISalesforceDataCloudProperties|null);

                        /** Connection creationTime */
                        creationTime?: (number|Long|string|null);

                        /** Connection lastModifiedTime */
                        lastModifiedTime?: (number|Long|string|null);

                        /** Connection hasCredential */
                        hasCredential?: (boolean|null);
                    }

                    /** Represents a Connection. */
                    class Connection implements IConnection {

                        /**
                         * Constructs a new Connection.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.IConnection);

                        /** Connection name. */
                        public name: string;

                        /** Connection friendlyName. */
                        public friendlyName: string;

                        /** Connection description. */
                        public description: string;

                        /** Connection cloudSql. */
                        public cloudSql?: (google.cloud.bigquery.connection.v1.ICloudSqlProperties|null);

                        /** Connection aws. */
                        public aws?: (google.cloud.bigquery.connection.v1.IAwsProperties|null);

                        /** Connection azure. */
                        public azure?: (google.cloud.bigquery.connection.v1.IAzureProperties|null);

                        /** Connection cloudSpanner. */
                        public cloudSpanner?: (google.cloud.bigquery.connection.v1.ICloudSpannerProperties|null);

                        /** Connection cloudResource. */
                        public cloudResource?: (google.cloud.bigquery.connection.v1.ICloudResourceProperties|null);

                        /** Connection spark. */
                        public spark?: (google.cloud.bigquery.connection.v1.ISparkProperties|null);

                        /** Connection salesforceDataCloud. */
                        public salesforceDataCloud?: (google.cloud.bigquery.connection.v1.ISalesforceDataCloudProperties|null);

                        /** Connection creationTime. */
                        public creationTime: (number|Long|string);

                        /** Connection lastModifiedTime. */
                        public lastModifiedTime: (number|Long|string);

                        /** Connection hasCredential. */
                        public hasCredential: boolean;

                        /** Connection properties. */
                        public properties?: ("cloudSql"|"aws"|"azure"|"cloudSpanner"|"cloudResource"|"spark"|"salesforceDataCloud");

                        /**
                         * Creates a new Connection instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Connection instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.IConnection): google.cloud.bigquery.connection.v1.Connection;

                        /**
                         * Encodes the specified Connection message. Does not implicitly {@link google.cloud.bigquery.connection.v1.Connection.verify|verify} messages.
                         * @param message Connection message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.IConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Connection message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.Connection.verify|verify} messages.
                         * @param message Connection message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.IConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Connection message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Connection
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.Connection;

                        /**
                         * Decodes a Connection message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Connection
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.Connection;

                        /**
                         * Verifies a Connection message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Connection message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Connection
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.connection.v1.Connection;

                        /**
                         * Creates a plain object from a Connection message. Also converts values to other types if specified.
                         * @param message Connection
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.connection.v1.Connection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Connection to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Connection
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CloudSqlProperties. */
                    interface ICloudSqlProperties {

                        /** CloudSqlProperties instanceId */
                        instanceId?: (string|null);

                        /** CloudSqlProperties database */
                        database?: (string|null);

                        /** CloudSqlProperties type */
                        type?: (google.cloud.bigquery.connection.v1.CloudSqlProperties.DatabaseType|keyof typeof google.cloud.bigquery.connection.v1.CloudSqlProperties.DatabaseType|null);

                        /** CloudSqlProperties credential */
                        credential?: (google.cloud.bigquery.connection.v1.ICloudSqlCredential|null);

                        /** CloudSqlProperties serviceAccountId */
                        serviceAccountId?: (string|null);
                    }

                    /** Represents a CloudSqlProperties. */
                    class CloudSqlProperties implements ICloudSqlProperties {

                        /**
                         * Constructs a new CloudSqlProperties.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.ICloudSqlProperties);

                        /** CloudSqlProperties instanceId. */
                        public instanceId: string;

                        /** CloudSqlProperties database. */
                        public database: string;

                        /** CloudSqlProperties type. */
                        public type: (google.cloud.bigquery.connection.v1.CloudSqlProperties.DatabaseType|keyof typeof google.cloud.bigquery.connection.v1.CloudSqlProperties.DatabaseType);

                        /** CloudSqlProperties credential. */
                        public credential?: (google.cloud.bigquery.connection.v1.ICloudSqlCredential|null);

                        /** CloudSqlProperties serviceAccountId. */
                        public serviceAccountId: string;

                        /**
                         * Creates a new CloudSqlProperties instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CloudSqlProperties instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.ICloudSqlProperties): google.cloud.bigquery.connection.v1.CloudSqlProperties;

                        /**
                         * Encodes the specified CloudSqlProperties message. Does not implicitly {@link google.cloud.bigquery.connection.v1.CloudSqlProperties.verify|verify} messages.
                         * @param message CloudSqlProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.ICloudSqlProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CloudSqlProperties message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.CloudSqlProperties.verify|verify} messages.
                         * @param message CloudSqlProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.ICloudSqlProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CloudSqlProperties message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CloudSqlProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.CloudSqlProperties;

                        /**
                         * Decodes a CloudSqlProperties message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CloudSqlProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.CloudSqlProperties;

                        /**
                         * Verifies a CloudSqlProperties message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CloudSqlProperties message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CloudSqlProperties
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.connection.v1.CloudSqlProperties;

                        /**
                         * Creates a plain object from a CloudSqlProperties message. Also converts values to other types if specified.
                         * @param message CloudSqlProperties
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.connection.v1.CloudSqlProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CloudSqlProperties to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CloudSqlProperties
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CloudSqlProperties {

                        /** DatabaseType enum. */
                        enum DatabaseType {
                            DATABASE_TYPE_UNSPECIFIED = 0,
                            POSTGRES = 1,
                            MYSQL = 2
                        }
                    }

                    /** Properties of a CloudSqlCredential. */
                    interface ICloudSqlCredential {

                        /** CloudSqlCredential username */
                        username?: (string|null);

                        /** CloudSqlCredential password */
                        password?: (string|null);
                    }

                    /** Represents a CloudSqlCredential. */
                    class CloudSqlCredential implements ICloudSqlCredential {

                        /**
                         * Constructs a new CloudSqlCredential.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.ICloudSqlCredential);

                        /** CloudSqlCredential username. */
                        public username: string;

                        /** CloudSqlCredential password. */
                        public password: string;

                        /**
                         * Creates a new CloudSqlCredential instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CloudSqlCredential instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.ICloudSqlCredential): google.cloud.bigquery.connection.v1.CloudSqlCredential;

                        /**
                         * Encodes the specified CloudSqlCredential message. Does not implicitly {@link google.cloud.bigquery.connection.v1.CloudSqlCredential.verify|verify} messages.
                         * @param message CloudSqlCredential message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.ICloudSqlCredential, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CloudSqlCredential message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.CloudSqlCredential.verify|verify} messages.
                         * @param message CloudSqlCredential message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.ICloudSqlCredential, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CloudSqlCredential message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CloudSqlCredential
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.CloudSqlCredential;

                        /**
                         * Decodes a CloudSqlCredential message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CloudSqlCredential
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.CloudSqlCredential;

                        /**
                         * Verifies a CloudSqlCredential message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CloudSqlCredential message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CloudSqlCredential
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.connection.v1.CloudSqlCredential;

                        /**
                         * Creates a plain object from a CloudSqlCredential message. Also converts values to other types if specified.
                         * @param message CloudSqlCredential
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.connection.v1.CloudSqlCredential, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CloudSqlCredential to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CloudSqlCredential
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CloudSpannerProperties. */
                    interface ICloudSpannerProperties {

                        /** CloudSpannerProperties database */
                        database?: (string|null);

                        /** CloudSpannerProperties useParallelism */
                        useParallelism?: (boolean|null);

                        /** CloudSpannerProperties maxParallelism */
                        maxParallelism?: (number|null);

                        /** CloudSpannerProperties useServerlessAnalytics */
                        useServerlessAnalytics?: (boolean|null);

                        /** CloudSpannerProperties useDataBoost */
                        useDataBoost?: (boolean|null);

                        /** CloudSpannerProperties databaseRole */
                        databaseRole?: (string|null);
                    }

                    /** Represents a CloudSpannerProperties. */
                    class CloudSpannerProperties implements ICloudSpannerProperties {

                        /**
                         * Constructs a new CloudSpannerProperties.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.ICloudSpannerProperties);

                        /** CloudSpannerProperties database. */
                        public database: string;

                        /** CloudSpannerProperties useParallelism. */
                        public useParallelism: boolean;

                        /** CloudSpannerProperties maxParallelism. */
                        public maxParallelism: number;

                        /** CloudSpannerProperties useServerlessAnalytics. */
                        public useServerlessAnalytics: boolean;

                        /** CloudSpannerProperties useDataBoost. */
                        public useDataBoost: boolean;

                        /** CloudSpannerProperties databaseRole. */
                        public databaseRole: string;

                        /**
                         * Creates a new CloudSpannerProperties instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CloudSpannerProperties instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.ICloudSpannerProperties): google.cloud.bigquery.connection.v1.CloudSpannerProperties;

                        /**
                         * Encodes the specified CloudSpannerProperties message. Does not implicitly {@link google.cloud.bigquery.connection.v1.CloudSpannerProperties.verify|verify} messages.
                         * @param message CloudSpannerProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.ICloudSpannerProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CloudSpannerProperties message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.CloudSpannerProperties.verify|verify} messages.
                         * @param message CloudSpannerProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.ICloudSpannerProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CloudSpannerProperties message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CloudSpannerProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.CloudSpannerProperties;

                        /**
                         * Decodes a CloudSpannerProperties message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CloudSpannerProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.CloudSpannerProperties;

                        /**
                         * Verifies a CloudSpannerProperties message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CloudSpannerProperties message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CloudSpannerProperties
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.connection.v1.CloudSpannerProperties;

                        /**
                         * Creates a plain object from a CloudSpannerProperties message. Also converts values to other types if specified.
                         * @param message CloudSpannerProperties
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.connection.v1.CloudSpannerProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CloudSpannerProperties to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CloudSpannerProperties
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AwsProperties. */
                    interface IAwsProperties {

                        /** AwsProperties crossAccountRole */
                        crossAccountRole?: (google.cloud.bigquery.connection.v1.IAwsCrossAccountRole|null);

                        /** AwsProperties accessRole */
                        accessRole?: (google.cloud.bigquery.connection.v1.IAwsAccessRole|null);
                    }

                    /** Represents an AwsProperties. */
                    class AwsProperties implements IAwsProperties {

                        /**
                         * Constructs a new AwsProperties.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.IAwsProperties);

                        /** AwsProperties crossAccountRole. */
                        public crossAccountRole?: (google.cloud.bigquery.connection.v1.IAwsCrossAccountRole|null);

                        /** AwsProperties accessRole. */
                        public accessRole?: (google.cloud.bigquery.connection.v1.IAwsAccessRole|null);

                        /** AwsProperties authenticationMethod. */
                        public authenticationMethod?: ("crossAccountRole"|"accessRole");

                        /**
                         * Creates a new AwsProperties instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AwsProperties instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.IAwsProperties): google.cloud.bigquery.connection.v1.AwsProperties;

                        /**
                         * Encodes the specified AwsProperties message. Does not implicitly {@link google.cloud.bigquery.connection.v1.AwsProperties.verify|verify} messages.
                         * @param message AwsProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.IAwsProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AwsProperties message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.AwsProperties.verify|verify} messages.
                         * @param message AwsProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.IAwsProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AwsProperties message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AwsProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.AwsProperties;

                        /**
                         * Decodes an AwsProperties message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AwsProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.AwsProperties;

                        /**
                         * Verifies an AwsProperties message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AwsProperties message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AwsProperties
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.connection.v1.AwsProperties;

                        /**
                         * Creates a plain object from an AwsProperties message. Also converts values to other types if specified.
                         * @param message AwsProperties
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.connection.v1.AwsProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AwsProperties to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AwsProperties
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AwsCrossAccountRole. */
                    interface IAwsCrossAccountRole {

                        /** AwsCrossAccountRole iamRoleId */
                        iamRoleId?: (string|null);

                        /** AwsCrossAccountRole iamUserId */
                        iamUserId?: (string|null);

                        /** AwsCrossAccountRole externalId */
                        externalId?: (string|null);
                    }

                    /** Represents an AwsCrossAccountRole. */
                    class AwsCrossAccountRole implements IAwsCrossAccountRole {

                        /**
                         * Constructs a new AwsCrossAccountRole.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.IAwsCrossAccountRole);

                        /** AwsCrossAccountRole iamRoleId. */
                        public iamRoleId: string;

                        /** AwsCrossAccountRole iamUserId. */
                        public iamUserId: string;

                        /** AwsCrossAccountRole externalId. */
                        public externalId: string;

                        /**
                         * Creates a new AwsCrossAccountRole instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AwsCrossAccountRole instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.IAwsCrossAccountRole): google.cloud.bigquery.connection.v1.AwsCrossAccountRole;

                        /**
                         * Encodes the specified AwsCrossAccountRole message. Does not implicitly {@link google.cloud.bigquery.connection.v1.AwsCrossAccountRole.verify|verify} messages.
                         * @param message AwsCrossAccountRole message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.IAwsCrossAccountRole, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AwsCrossAccountRole message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.AwsCrossAccountRole.verify|verify} messages.
                         * @param message AwsCrossAccountRole message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.IAwsCrossAccountRole, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AwsCrossAccountRole message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AwsCrossAccountRole
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.AwsCrossAccountRole;

                        /**
                         * Decodes an AwsCrossAccountRole message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AwsCrossAccountRole
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.AwsCrossAccountRole;

                        /**
                         * Verifies an AwsCrossAccountRole message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AwsCrossAccountRole message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AwsCrossAccountRole
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.connection.v1.AwsCrossAccountRole;

                        /**
                         * Creates a plain object from an AwsCrossAccountRole message. Also converts values to other types if specified.
                         * @param message AwsCrossAccountRole
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.connection.v1.AwsCrossAccountRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AwsCrossAccountRole to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AwsCrossAccountRole
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AwsAccessRole. */
                    interface IAwsAccessRole {

                        /** AwsAccessRole iamRoleId */
                        iamRoleId?: (string|null);

                        /** AwsAccessRole identity */
                        identity?: (string|null);
                    }

                    /** Represents an AwsAccessRole. */
                    class AwsAccessRole implements IAwsAccessRole {

                        /**
                         * Constructs a new AwsAccessRole.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.IAwsAccessRole);

                        /** AwsAccessRole iamRoleId. */
                        public iamRoleId: string;

                        /** AwsAccessRole identity. */
                        public identity: string;

                        /**
                         * Creates a new AwsAccessRole instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AwsAccessRole instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.IAwsAccessRole): google.cloud.bigquery.connection.v1.AwsAccessRole;

                        /**
                         * Encodes the specified AwsAccessRole message. Does not implicitly {@link google.cloud.bigquery.connection.v1.AwsAccessRole.verify|verify} messages.
                         * @param message AwsAccessRole message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.IAwsAccessRole, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AwsAccessRole message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.AwsAccessRole.verify|verify} messages.
                         * @param message AwsAccessRole message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.IAwsAccessRole, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AwsAccessRole message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AwsAccessRole
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.AwsAccessRole;

                        /**
                         * Decodes an AwsAccessRole message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AwsAccessRole
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.AwsAccessRole;

                        /**
                         * Verifies an AwsAccessRole message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AwsAccessRole message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AwsAccessRole
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.connection.v1.AwsAccessRole;

                        /**
                         * Creates a plain object from an AwsAccessRole message. Also converts values to other types if specified.
                         * @param message AwsAccessRole
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.connection.v1.AwsAccessRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AwsAccessRole to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AwsAccessRole
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AzureProperties. */
                    interface IAzureProperties {

                        /** AzureProperties application */
                        application?: (string|null);

                        /** AzureProperties clientId */
                        clientId?: (string|null);

                        /** AzureProperties objectId */
                        objectId?: (string|null);

                        /** AzureProperties customerTenantId */
                        customerTenantId?: (string|null);

                        /** AzureProperties redirectUri */
                        redirectUri?: (string|null);

                        /** AzureProperties federatedApplicationClientId */
                        federatedApplicationClientId?: (string|null);

                        /** AzureProperties identity */
                        identity?: (string|null);
                    }

                    /** Represents an AzureProperties. */
                    class AzureProperties implements IAzureProperties {

                        /**
                         * Constructs a new AzureProperties.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.IAzureProperties);

                        /** AzureProperties application. */
                        public application: string;

                        /** AzureProperties clientId. */
                        public clientId: string;

                        /** AzureProperties objectId. */
                        public objectId: string;

                        /** AzureProperties customerTenantId. */
                        public customerTenantId: string;

                        /** AzureProperties redirectUri. */
                        public redirectUri: string;

                        /** AzureProperties federatedApplicationClientId. */
                        public federatedApplicationClientId: string;

                        /** AzureProperties identity. */
                        public identity: string;

                        /**
                         * Creates a new AzureProperties instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AzureProperties instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.IAzureProperties): google.cloud.bigquery.connection.v1.AzureProperties;

                        /**
                         * Encodes the specified AzureProperties message. Does not implicitly {@link google.cloud.bigquery.connection.v1.AzureProperties.verify|verify} messages.
                         * @param message AzureProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.IAzureProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AzureProperties message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.AzureProperties.verify|verify} messages.
                         * @param message AzureProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.IAzureProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AzureProperties message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AzureProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.AzureProperties;

                        /**
                         * Decodes an AzureProperties message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AzureProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.AzureProperties;

                        /**
                         * Verifies an AzureProperties message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AzureProperties message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AzureProperties
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.bigquery.connection.v1.AzureProperties;

                        /**
                         * Creates a plain object from an AzureProperties message. Also converts values to other types if specified.
                         * @param message AzureProperties
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.bigquery.connection.v1.AzureProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AzureProperties to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AzureProperties
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CloudResourceProperties. */
                    interface ICloudResourceProperties {

                        /** CloudResourceProperties serviceAccountId */
                        serviceAccountId?: (string|null);
                    }

                    /** Represents a CloudResourceProperties. */
                    class CloudResourceProperties implements ICloudResourceProperties {

                        /**
                         * Constructs a new CloudResourceProperties.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.bigquery.connection.v1.ICloudResourceProperties);

                        /** CloudResourceProperties serviceAccountId. */
                        public serviceAccountId: string;

                        /**
                         * Creates a new CloudResourceProperties instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CloudResourceProperties instance
                         */
                        public static create(properties?: google.cloud.bigquery.connection.v1.ICloudResourceProperties): google.cloud.bigquery.connection.v1.CloudResourceProperties;

                        /**
                         * Encodes the specified CloudResourceProperties message. Does not implicitly {@link google.cloud.bigquery.connection.v1.CloudResourceProperties.verify|verify} messages.
                         * @param message CloudResourceProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.bigquery.connection.v1.ICloudResourceProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CloudResourceProperties message, length delimited. Does not implicitly {@link google.cloud.bigquery.connection.v1.CloudResourceProperties.verify|verify} messages.
                         * @param message CloudResourceProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.bigquery.connection.v1.ICloudResourceProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CloudResourceProperties message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CloudResourceProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.bigquery.connection.v1.CloudResourceProperties;

                        /**
                         * Decodes a CloudResourceProperties message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CloudResourceProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.bigquery.connection.v1.CloudResourceProperties;

                        /**
                         * Verifies a CloudResourceProperties message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|