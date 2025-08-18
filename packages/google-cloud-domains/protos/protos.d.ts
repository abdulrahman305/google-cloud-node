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

import type {protobuf as $protobuf} from "google-gax";
import Long = require("long");
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace domains. */
        namespace domains {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a Domains */
                class Domains extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Domains service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Domains service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Domains;

                    /**
                     * Calls SearchDomains.
                     * @param request SearchDomainsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchDomainsResponse
                     */
                    public searchDomains(request: google.cloud.domains.v1.ISearchDomainsRequest, callback: google.cloud.domains.v1.Domains.SearchDomainsCallback): void;

                    /**
                     * Calls SearchDomains.
                     * @param request SearchDomainsRequest message or plain object
                     * @returns Promise
                     */
                    public searchDomains(request: google.cloud.domains.v1.ISearchDomainsRequest): Promise<google.cloud.domains.v1.SearchDomainsResponse>;

                    /**
                     * Calls RetrieveRegisterParameters.
                     * @param request RetrieveRegisterParametersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RetrieveRegisterParametersResponse
                     */
                    public retrieveRegisterParameters(request: google.cloud.domains.v1.IRetrieveRegisterParametersRequest, callback: google.cloud.domains.v1.Domains.RetrieveRegisterParametersCallback): void;

                    /**
                     * Calls RetrieveRegisterParameters.
                     * @param request RetrieveRegisterParametersRequest message or plain object
                     * @returns Promise
                     */
                    public retrieveRegisterParameters(request: google.cloud.domains.v1.IRetrieveRegisterParametersRequest): Promise<google.cloud.domains.v1.RetrieveRegisterParametersResponse>;

                    /**
                     * Calls RegisterDomain.
                     * @param request RegisterDomainRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public registerDomain(request: google.cloud.domains.v1.IRegisterDomainRequest, callback: google.cloud.domains.v1.Domains.RegisterDomainCallback): void;

                    /**
                     * Calls RegisterDomain.
                     * @param request RegisterDomainRequest message or plain object
                     * @returns Promise
                     */
                    public registerDomain(request: google.cloud.domains.v1.IRegisterDomainRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RetrieveTransferParameters.
                     * @param request RetrieveTransferParametersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RetrieveTransferParametersResponse
                     */
                    public retrieveTransferParameters(request: google.cloud.domains.v1.IRetrieveTransferParametersRequest, callback: google.cloud.domains.v1.Domains.RetrieveTransferParametersCallback): void;

                    /**
                     * Calls RetrieveTransferParameters.
                     * @param request RetrieveTransferParametersRequest message or plain object
                     * @returns Promise
                     */
                    public retrieveTransferParameters(request: google.cloud.domains.v1.IRetrieveTransferParametersRequest): Promise<google.cloud.domains.v1.RetrieveTransferParametersResponse>;

                    /**
                     * Calls TransferDomain.
                     * @param request TransferDomainRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public transferDomain(request: google.cloud.domains.v1.ITransferDomainRequest, callback: google.cloud.domains.v1.Domains.TransferDomainCallback): void;

                    /**
                     * Calls TransferDomain.
                     * @param request TransferDomainRequest message or plain object
                     * @returns Promise
                     */
                    public transferDomain(request: google.cloud.domains.v1.ITransferDomainRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListRegistrations.
                     * @param request ListRegistrationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRegistrationsResponse
                     */
                    public listRegistrations(request: google.cloud.domains.v1.IListRegistrationsRequest, callback: google.cloud.domains.v1.Domains.ListRegistrationsCallback): void;

                    /**
                     * Calls ListRegistrations.
                     * @param request ListRegistrationsRequest message or plain object
                     * @returns Promise
                     */
                    public listRegistrations(request: google.cloud.domains.v1.IListRegistrationsRequest): Promise<google.cloud.domains.v1.ListRegistrationsResponse>;

                    /**
                     * Calls GetRegistration.
                     * @param request GetRegistrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Registration
                     */
                    public getRegistration(request: google.cloud.domains.v1.IGetRegistrationRequest, callback: google.cloud.domains.v1.Domains.GetRegistrationCallback): void;

                    /**
                     * Calls GetRegistration.
                     * @param request GetRegistrationRequest message or plain object
                     * @returns Promise
                     */
                    public getRegistration(request: google.cloud.domains.v1.IGetRegistrationRequest): Promise<google.cloud.domains.v1.Registration>;

                    /**
                     * Calls UpdateRegistration.
                     * @param request UpdateRegistrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateRegistration(request: google.cloud.domains.v1.IUpdateRegistrationRequest, callback: google.cloud.domains.v1.Domains.UpdateRegistrationCallback): void;

                    /**
                     * Calls UpdateRegistration.
                     * @param request UpdateRegistrationRequest message or plain object
                     * @returns Promise
                     */
                    public updateRegistration(request: google.cloud.domains.v1.IUpdateRegistrationRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ConfigureManagementSettings.
                     * @param request ConfigureManagementSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public configureManagementSettings(request: google.cloud.domains.v1.IConfigureManagementSettingsRequest, callback: google.cloud.domains.v1.Domains.ConfigureManagementSettingsCallback): void;

                    /**
                     * Calls ConfigureManagementSettings.
                     * @param request ConfigureManagementSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public configureManagementSettings(request: google.cloud.domains.v1.IConfigureManagementSettingsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ConfigureDnsSettings.
                     * @param request ConfigureDnsSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public configureDnsSettings(request: google.cloud.domains.v1.IConfigureDnsSettingsRequest, callback: google.cloud.domains.v1.Domains.ConfigureDnsSettingsCallback): void;

                    /**
                     * Calls ConfigureDnsSettings.
                     * @param request ConfigureDnsSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public configureDnsSettings(request: google.cloud.domains.v1.IConfigureDnsSettingsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ConfigureContactSettings.
                     * @param request ConfigureContactSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public configureContactSettings(request: google.cloud.domains.v1.IConfigureContactSettingsRequest, callback: google.cloud.domains.v1.Domains.ConfigureContactSettingsCallback): void;

                    /**
                     * Calls ConfigureContactSettings.
                     * @param request ConfigureContactSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public configureContactSettings(request: google.cloud.domains.v1.IConfigureContactSettingsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportRegistration.
                     * @param request ExportRegistrationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportRegistration(request: google.cloud.domains.v1.IExportRegistrationRequest, callback: google.cloud.domains.v1.Domains.ExportRegistrationCallback): void;

                    /**
                     * Calls ExportRegistratio