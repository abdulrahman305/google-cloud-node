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
    var $root = $protobuf.roots._google_shopping_css_protos || ($protobuf.roots._google_shopping_css_protos = {});
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.shopping = (function() {
    
            /**
             * Namespace shopping.
             * @memberof google
             * @namespace
             */
            var shopping = {};
    
            shopping.css = (function() {
    
                /**
                 * Namespace css.
                 * @memberof google.shopping
                 * @namespace
                 */
                var css = {};
    
                css.v1 = (function() {
    
                    /**
                     * Namespace v1.
                     * @memberof google.shopping.css
                     * @namespace
                     */
                    var v1 = {};
    
                    v1.AccountsService = (function() {
    
                        /**
                         * Constructs a new AccountsService service.
                         * @memberof google.shopping.css.v1
                         * @classdesc Represents an AccountsService
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function AccountsService(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }
    
                        (AccountsService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AccountsService;
    
                        /**
                         * Creates new AccountsService service using the specified rpc implementation.
                         * @function create
                         * @memberof google.shopping.css.v1.AccountsService
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {AccountsService} RPC service. Useful where requests and/or responses are streamed.
                         */
                        AccountsService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };
    
                        /**
                         * Callback as used by {@link google.shopping.css.v1.AccountsService|listChildAccounts}.
                         * @memberof google.shopping.css.v1.AccountsService
                         * @typedef ListChildAccountsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.shopping.css.v1.ListChildAccountsResponse} [response] ListChildAccountsResponse
                         */
    
                        /**
                         * Calls ListChildAccounts.
                         * @function listChildAccounts
                         * @memberof google.shopping.css.v1.AccountsService
                         * @instance
                         * @param {google.shopping.css.v1.IListChildAccountsRequest} request ListChildAccountsRequest message or plain object
                         * @param {google.shopping.css.v1.AccountsService.ListChildAccountsCallback} callback Node-style callback called with the error, if any, and ListChildAccountsResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccountsService.prototype.listChildAccounts = function listChildAccounts(request, callback) {
                            return this.rpcCall(listChildAccounts, $root.google.shopping.css.v1.ListChildAccountsRequest, $root.google.shopping.css.v1.ListChildAccountsResponse, request, callback);
                        }, "name", { value: "ListChildAccounts" });
    
                        /**
                         * Calls ListChildAccounts.
                         * @function listChildAccounts
                         * @memberof google.shopping.css.v1.AccountsService
                         * @instance
                         * @param {google.shopping.css.v1.IListChildAccountsRequest} request ListChildAccountsRequest message or plain object
                         * @returns {Promise<google.shopping.css.v1.ListChildAccountsResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.shopping.css.v1.AccountsService|getAccount}.
                         * @memberof google.shopping.css.v1.AccountsService
                         * @typedef GetAccountCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.shopping.css.v1.Account} [response] Account
                         */
    
                        /**
                         * Calls GetAccount.
                         * @function getAccount
                         * @memberof google.shopping.css.v1.AccountsService
                         * @instance
                         * @param {google.shopping.css.v1.IGetAccountRequest} request GetAccountRequest message or plain object
                         * @param {google.shopping.css.v1.AccountsService.GetAccountCallback} callback Node-style callback called with the error, if any, and Account
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccountsService.prototype.getAccount = function getAccount(request, callback) {
                            return this.rpcCall(getAccount, $root.google.shopping.css.v1.GetAccountRequest, $root.google.shopping.css.v1.Account, request, callback);
                        }, "name", { value: "GetAccount" });
    
                        /**
                         * Calls GetAccount.
                         * @function getAccount
                         * @memberof google.shopping.css.v1.AccountsService
                         * @instance
                         * @param {google.shopping.css.v1.IGetAccountRequest} request GetAccountRequest message or plain object
                         * @returns {Promise<google.shopping.css.v1.Account>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.shopping.css.v1.AccountsService|updateLabels}.
                         * @memberof google.shopping.css.v1.AccountsService
                         * @typedef UpdateLabelsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.shopping.css.v1.Account} [response] Account
                         */
    
                        /**
                         * Calls UpdateLabels.
                         * @function updateLabels
                         * @memberof google.shopping.css.v1.AccountsService
                         * @instance
                         * @param {google.shopping.css.v1.IUpdateAccountLabelsRequest} request UpdateAccountLabelsRequest message or plain object
                         * @param {google.shopping.css.v1.AccountsService.UpdateLabelsCallback} callback Node-style callback called with the error, if any, and Account
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(AccountsService.prototype.updateLabels = function updateLabels(request, callback) {
                            return this.rpcCall(updateLabels, $root.google.shopping.css.v1.UpdateAccountLabelsRequest, $root.google.shopping.css.v1.Account, request, callback);
                        }, "name", { value: "UpdateLabels" });
    
                        /**
                         * Calls UpdateLabels.
                         * @function updateLabels
                         * @memberof google.shopping.css.v1.AccountsService
                         * @instance
                         * @param {google.shopping.css.v1.IUpdateAccountLabelsRequest} request UpdateAccountLabelsRequest message or plain object
                         * @returns {Promise<google.shopping.css.v1.Account>} Promise
                         * @variation 2
                         */
    
                        return AccountsService;
                    })();
    
                    v1.ListChildAccountsRequest = (function() {
    
                        /**
                         * Properties of a ListChildAccountsRequest.
                         * @memberof google.shopping.css.v1
                         * @interface IListChildAccountsRequest
                         * @property {string|null} [parent] ListChildAccountsRequest parent
                         * @property {number|Long|null} [labelId] ListChildAccountsRequest labelId
                         * @property {string|null} [fullName] ListChildAccountsRequest fullName
                         * @property {number|null} [pageSize] ListChildAccountsRequest pageSize
                         * @property {string|null} [pageToken] ListChildAccountsRequest pageToken
                         */
    
                        /**
                         * Constructs a new ListChildAccountsRequest.
                         * @memberof google.shopping.css.v1
                         * @classdesc Represents a ListChildAccountsRequest.
                         * @implements IListChildAccountsRequest
                         * @constructor
                         * @param {google.shopping.css.v1.IListChildAccountsRequest=} [properties] Properties to set
                         */
                        function ListChildAccountsRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ListChildAccountsRequest parent.
                         * @member {string} parent
                         * @memberof google.shopping.css.v1.ListChildAccountsRequest
                         * @instance
                         */
                        ListChildAccountsRequest.prototype.parent = "";
    
                        /**
                         * ListChildAccountsRequest labelId.
                         * @member {number|Long|null|undefined} labelId
                         * @memberof google.shopping.css.v1.ListChildAccountsRequest
                         * @instance
                         */
                        ListChildAccountsRequest.prototype.labelId = null;
    
                        /**
                         * ListChildAccountsRequest fullName.
                         * @member {string|null|undefined} fullName
                         * @memberof google.shopping.css.v1.ListChildAccountsRequest
                         * @instance
                         */
                        ListChildAccountsRequest.prototype.fullName = null;
    
                        /**
                         * ListChildAccountsRequest pageSize.
                         * @member {number} pageSize
                         * @memberof google.shopping.css.v1.ListChildAccountsRequest
                         * @instance
                         */
                        ListChildAccountsRequest.prototype.pageSize = 0;
    
                        /**
                         * ListChildAccountsRequest pageToken.
                         * @member {string} pageToken
                         * @memberof google.shopping.css.v1.ListChildAccountsRequest
                         * @instance
                         */
                        ListChildAccountsRequest.prototype.pageToken = "";
    
                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;
    
                        // Virtual OneOf for proto3 optional field
                        Object.defineProperty(ListChildAccountsRequest.prototype, "_labelId", {
                            get: $util.oneOfGetter($oneOfFields = ["labelId"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        // Virtual OneOf for proto3 optional field
                        Object.defineProperty(ListChildAccountsRequest.prototype, "_fullName", {
                            get: $util.oneOfGetter($oneOfFields = ["fullName"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * Creates a new ListChildAccountsRequest instance using the specified properties.
                         * @function create
                         * @memberof google.shopping.css.v1.ListChildAccountsRequest
                         * @static
                         * @param {google.shopping.css.v1.IListChildAccountsRequest=} [properties] Properties to set
                         * @returns {google.shopping.css.v1.ListChildAccountsRequest} ListChildAccountsRequest instance
                         */
                        ListChildAccountsRequest.create = function create(properties) {
                            return new ListChildAccountsRequest(properties);
                        };
    
                        /**
                         * Encodes the specified ListChildAccountsRequest message. Does not implicitly {@link google.shopping.css.v1.ListChildAccountsRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.shopping.css.v1.ListChildAccountsRequest
                         * @static
                         * @param {google.shopping.css.v1.IListChildAccountsRequest} message ListChildAccountsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListChildAccountsRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.parent != null && Object.hasOwnProperty.call(message, "parent"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.parent);
                            if (message.labelId != null && Object.hasOwnProperty.call(message, "labelId"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.labelId);
                            if (message.fullName != null && Object.hasOwnProperty.call(message, "fullName"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.fullName);
                            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pageSize);
                            if (message.pageToken != null && Object.hasOwnProperty.call(message, "pageToken"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.pageToken);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ListChildAccountsRequest message, length delimited. Does not implicitly {@link google.shopping.css.v1.ListChildAccountsRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.shopping.css.v1.ListChildAccountsRequest
                         * @static
                         * @param {google.shopping.css.v1.IListChildAccountsRequest} message ListChildAccountsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ListChildAccountsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ListChildAccountsRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.shopping.css.v1.ListChildAccountsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.shopping.css.v1.ListChildAccountsRequest} ListChildAccountsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ListChildAccountsRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.shopping.css.v1.ListChildAccountsRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.parent = reader.string();
                                        break;
    