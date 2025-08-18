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
    var $root = $protobuf.roots._google_cloud_iam_credentials_protos || ($protobuf.roots._google_cloud_iam_credentials_protos = {});
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.iam = (function() {
    
            /**
             * Namespace iam.
             * @memberof google
             * @namespace
             */
            var iam = {};
    
            iam.credentials = (function() {
    
                /**
                 * Namespace credentials.
                 * @memberof google.iam
                 * @namespace
                 */
                var credentials = {};
    
                credentials.v1 = (function() {
    
                    /**
                     * Namespace v1.
                     * @memberof google.iam.credentials
                     * @namespace
                     */
                    var v1 = {};
    
                    v1.GenerateAccessTokenRequest = (function() {
    
                        /**
                         * Properties of a GenerateAccessTokenRequest.
                         * @memberof google.iam.credentials.v1
                         * @interface IGenerateAccessTokenRequest
                         * @property {string|null} [name] GenerateAccessTokenRequest name
                         * @property {Array.<string>|null} [delegates] GenerateAccessTokenRequest delegates
                         * @property {Array.<string>|null} [scope] GenerateAccessTokenRequest scope
                         * @property {google.protobuf.IDuration|null} [lifetime] GenerateAccessTokenRequest lifetime
                         */
    
                        /**
                         * Constructs a new GenerateAccessTokenRequest.
                         * @memberof google.iam.credentials.v1
                         * @classdesc Represents a GenerateAccessTokenRequest.
                         * @implements IGenerateAccessTokenRequest
                         * @constructor
                         * @param {google.iam.credentials.v1.IGenerateAccessTokenRequest=} [properties] Properties to set
                         */
                        function GenerateAccessTokenRequest(properties) {
                            this.delegates = [];
                            this.scope = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * GenerateAccessTokenRequest name.
                         * @member {string} name
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenRequest
                         * @instance
                         */
                        GenerateAccessTokenRequest.prototype.name = "";
    
                        /**
                         * GenerateAccessTokenRequest delegates.
                         * @member {Array.<string>} delegates
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenRequest
                         * @instance
                         */
                        GenerateAccessTokenRequest.prototype.delegates = $util.emptyArray;
    
                        /**
                         * GenerateAccessTokenRequest scope.
                         * @member {Array.<string>} scope
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenRequest
                         * @instance
                         */
                        GenerateAccessTokenRequest.prototype.scope = $util.emptyArray;
    
                        /**
                         * GenerateAccessTokenRequest lifetime.
                         * @member {google.protobuf.IDuration|null|undefined} lifetime
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenRequest
                         * @instance
                         */
                        GenerateAccessTokenRequest.prototype.lifetime = null;
    
                        /**
                         * Creates a new GenerateAccessTokenRequest instance using the specified properties.
                         * @function create
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenRequest
                         * @static
                         * @param {google.iam.credentials.v1.IGenerateAccessTokenRequest=} [properties] Properties to set
                         * @returns {google.iam.credentials.v1.GenerateAccessTokenRequest} GenerateAccessTokenRequest instance
                         */
                        GenerateAccessTokenRequest.create = function create(properties) {
                            return new GenerateAccessTokenRequest(properties);
                        };
    
                        /**
                         * Encodes the specified GenerateAccessTokenRequest message. Does not implicitly {@link google.iam.credentials.v1.GenerateAccessTokenRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenRequest
                         * @static
                         * @param {google.iam.credentials.v1.IGenerateAccessTokenRequest} message GenerateAccessTokenRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GenerateAccessTokenRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.delegates != null && message.delegates.length)
                                for (var i = 0; i < message.delegates.length; ++i)
                                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.delegates[i]);
                            if (message.scope != null && message.scope.length)
                                for (var i = 0; i < message.scope.length; ++i)
                                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.scope[i]);
                            if (message.lifetime != null && Object.hasOwnProperty.call(message, "lifetime"))
                                $root.google.protobuf.Duration.encode(message.lifetime, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified GenerateAccessTokenRequest message, length delimited. Does not implicitly {@link google.iam.credentials.v1.GenerateAccessTokenRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenRequest
                         * @static
                         * @param {google.iam.credentials.v1.IGenerateAccessTokenRequest} message GenerateAccessTokenRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GenerateAccessTokenRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a GenerateAccessTokenRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.iam.credentials.v1.GenerateAccessTokenRequest} GenerateAccessTokenRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GenerateAccessTokenRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.iam.credentials.v1.GenerateAccessTokenRequest();
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
                                        if (!(message.delegates && message.delegates.length))
                                            message.delegates = [];
                                        message.delegates.push(reader.string());
                                        break;
                                    }
                                case 4: {
                                        if (!(message.scope && message.scope.length))
                                            message.scope = [];
                                        message.scope.push(reader.string());
                                        break;
                                    }
                                case 7: {
                                        message.lifetime = $root.google.protobuf.Duration.decode(reader, reader.uint32());
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
                         * Decodes a GenerateAccessTokenRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.iam.credentials.v1.GenerateAccessTokenRequest} GenerateAccessTokenRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GenerateAccessTokenRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a GenerateAccessTokenRequest message.
                         * @function verify
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GenerateAccessTokenRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.delegates != null && message.hasOwnProperty("delegates")) {
                                if (!Array.isArray(message.delegates))
                                    return "delegates: array expected";
                                for (var i = 0; i < message.delegates.length; ++i)
                                    if (!$util.isString(message.delegates[i]))
                                        return "delegates: string[] expected";
                            }
                            if (message.scope != null && message.hasOwnProperty("scope")) {
                                if (!Array.isArray(message.scope))
                                    return "scope: array expected";
                                for (var i = 0; i < message.scope.length; ++i)
                                    if (!$util.isString(message.scope[i]))
                                        return "scope: string[] expected";
                            }
                            if (message.lifetime != null && message.hasOwnProperty("lifetime")) {
                                var error = $root.google.protobuf.Duration.verify(message.lifetime);
                                if (error)
                                    return "lifetime." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a GenerateAccessTokenRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.iam.credentials.v1.GenerateAccessTokenRequest} GenerateAccessTokenRequest
                         */
                        GenerateAccessTokenRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.iam.credentials.v1.GenerateAccessTokenRequest)
                                return object;
                            var message = new $root.google.iam.credentials.v1.GenerateAccessTokenRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.delegates) {
                                if (!Array.isArray(object.delegates))
                                    throw TypeError(".google.iam.credentials.v1.GenerateAccessTokenRequest.delegates: array expected");
                                message.delegates = [];
                                for (var i = 0; i < object.delegates.length; ++i)
                                    message.delegates[i] = String(object.delegates[i]);
                            }
                            if (object.scope) {
                                if (!Array.isArray(object.scope))
                                    throw TypeError(".google.iam.credentials.v1.GenerateAccessTokenRequest.scope: array expected");
                                message.scope = [];
                                for (var i = 0; i < object.scope.length; ++i)
                                    message.scope[i] = String(object.scope[i]);
                            }
                            if (object.lifetime != null) {
                                if (typeof object.lifetime !== "object")
                                    throw TypeError(".google.iam.credentials.v1.GenerateAccessTokenRequest.lifetime: object expected");
                                message.lifetime = $root.google.protobuf.Duration.fromObject(object.lifetime);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a GenerateAccessTokenRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenRequest
                         * @static
                         * @param {google.iam.credentials.v1.GenerateAccessTokenRequest} message GenerateAccessTokenRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GenerateAccessTokenRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.delegates = [];
                                object.scope = [];
                            }
                            if (options.defaults) {
                                object.name = "";
                                object.lifetime = null;
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.delegates && message.delegates.length) {
                                object.delegates = [];
                                for (var j = 0; j < message.delegates.length; ++j)
                                    object.delegates[j] = message.delegates[j];
                            }
                            if (message.scope && message.scope.length) {
                                object.scope = [];
                                for (var j = 0; j < message.scope.length; ++j)
                                    object.scope[j] = message.scope[j];
                            }
                            if (message.lifetime != null && message.hasOwnProperty("lifetime"))
                                object.lifetime = $root.google.protobuf.Duration.toObject(message.lifetime, options);
                            return object;
                        };
    
                        /**
                         * Converts this GenerateAccessTokenRequest to JSON.
                         * @function toJSON
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GenerateAccessTokenRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for GenerateAccessTokenRequest
                         * @function getTypeUrl
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        GenerateAccessTokenRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.iam.credentials.v1.GenerateAccessTokenRequest";
                        };
    
                        return GenerateAccessTokenRequest;
                    })();
    
                    v1.GenerateAccessTokenResponse = (function() {
    
                        /**
                         * Properties of a GenerateAccessTokenResponse.
                         * @memberof google.iam.credentials.v1
                         * @interface IGenerateAccessTokenResponse
                         * @property {string|null} [accessToken] GenerateAccessTokenResponse accessToken
                         * @property {google.protobuf.ITimestamp|null} [expireTime] GenerateAccessTokenResponse expireTime
                         */
    
                        /**
                         * Constructs a new GenerateAccessTokenResponse.
                         * @memberof google.iam.credentials.v1
                         * @classdesc Represents a GenerateAccessTokenResponse.
                         * @implements IGenerateAccessTokenResponse
                         * @constructor
                         * @param {google.iam.credentials.v1.IGenerateAccessTokenResponse=} [properties] Properties to set
                         */
                        function GenerateAccessTokenResponse(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * GenerateAccessTokenResponse accessToken.
                         * @member {string} accessToken
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenResponse
                         * @instance
                         */
                        GenerateAccessTokenResponse.prototype.accessToken = "";
    
                        /**
                         * GenerateAccessTokenResponse expireTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} expireTime
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenResponse
                         * @instance
                         */
                        GenerateAccessTokenResponse.prototype.expireTime = null;
    
                        /**
                         * Creates a new GenerateAccessTokenResponse instance using the specified properties.
                         * @function create
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenResponse
                         * @static
                         * @param {google.iam.credentials.v1.IGenerateAccessTokenResponse=} [properties] Properties to set
                         * @returns {google.iam.credentials.v1.GenerateAccessTokenResponse} GenerateAccessTokenResponse instance
                         */
                        GenerateAccessTokenResponse.create = function create(properties) {
                            return new GenerateAccessTokenResponse(properties);
                        };
    
                        /**
                         * Encodes the specified GenerateAccessTokenResponse message. Does not implicitly {@link google.iam.credentials.v1.GenerateAccessTokenResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenResponse
                         * @static
                         * @param {google.iam.credentials.v1.IGenerateAccessTokenResponse} message GenerateAccessTokenResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GenerateAccessTokenResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accessToken);
                            if (message.expireTime != null && Object.hasOwnProperty.call(message, "expireTime"))
                                $root.google.protobuf.Timestamp.encode(message.expireTime, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified GenerateAccessTokenResponse message, length delimited. Does not implicitly {@link google.iam.credentials.v1.GenerateAccessTokenResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenResponse
                         * @static
                         * @param {google.iam.credentials.v1.IGenerateAccessTokenResponse} message GenerateAccessTokenResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GenerateAccessTokenResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a GenerateAccessTokenResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.iam.credentials.v1.GenerateAccessTokenResponse} GenerateAccessTokenResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GenerateAccessTokenResponse.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.iam.credentials.v1.GenerateAccessTokenResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.accessToken = reader.string();
                                        break;
                                    }
                                case 3: {
                                        message.expireTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
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
                         * Decodes a GenerateAccessTokenResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.iam.credentials.v1.GenerateAccessTokenResponse} GenerateAccessTokenResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GenerateAccessTokenResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a GenerateAccessTokenResponse message.
                         * @function verify
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GenerateAccessTokenResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                                if (!$util.isString(message.accessToken))
                                    return "accessToken: string expected";
                            if (message.expireTime != null && message.hasOwnProperty("expireTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.expireTime);
                                if (error)
                                    return "expireTime." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a GenerateAccessTokenResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.iam.credentials.v1.GenerateAccessTokenResponse} GenerateAccessTokenResponse
                         */
                        GenerateAccessTokenResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.iam.credentials.v1.GenerateAccessTokenResponse)
                                return object;
                            var message = new $root.google.iam.credentials.v1.GenerateAccessTokenResponse();
                            if (object.accessToken != null)
                                message.accessToken = String(object.accessToken);
                            if (object.expireTime != null) {
                                if (typeof object.expireTime !== "object")
                                    throw TypeError(".google.iam.credentials.v1.GenerateAccessTokenResponse.expireTime: object expected");
                                message.expireTime = $root.google.protobuf.Timestamp.fromObject(object.expireTime);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a GenerateAccessTokenResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenResponse
                         * @static
                         * @param {google.iam.credentials.v1.GenerateAccessTokenResponse} message GenerateAccessTokenResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GenerateAccessTokenResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.accessToken = "";
                                object.expireTime = null;
                            }
                            if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                                object.accessToken = message.accessToken;
                            if (message.expireTime != null && message.hasOwnProperty("expireTime"))
                                object.expireTime = $root.google.protobuf.Timestamp.toObject(message.expireTime, options);
                            return object;
                        };
    
                        /**
                         * Converts this GenerateAccessTokenResponse to JSON.
                         * @function toJSON
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GenerateAccessTokenResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for GenerateAccessTokenResponse
                         * @function getTypeUrl
                         * @memberof google.iam.credentials.v1.GenerateAccessTokenResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        GenerateAccessTokenResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.iam.credentials.v1.GenerateAccessTokenResponse";
                        };
    
                        return GenerateAccessTokenResponse;
                    })();
    
                    v1.SignBlobRequest = (function() {
    
                        /**
                         * Properties of a SignBlobRequest.
                         * @memberof google.iam.credentials.v1
                         * @interface ISignBlobRequest
                         * @property {string|null} [name] SignBlobRequest name
                         * @property {Array.<string>|null} [delegates] SignBlobRequest delegates
                         * @property {Uint8Array|null} [payload] SignBlobRequest payload
                         */
    
                        /**
                         * Constructs a new SignBlobRequest.
                         * @memberof google.iam.credentials.v1
                         * @classdesc Represents a SignBlobRequest.
                         * @implements ISignBlobRequest
                         * @constructor
                         * @param {google.iam.credentials.v1.ISignBlobRequest=} [properties] Properties to set
                         */
                        function SignBlobRequest(properties) {
                            this.delegates = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * SignBlobRequest name.
                         * @member {string} name
                         * @memberof google.iam.credentials.v1.SignBlobRequest
                         * @instance
                         */
                        SignBlobRequest.prototype.name = "";
    
                        /**
                         * SignBlobRequest delegates.
                         * @member {Array.<string>} delegates
                         * @memberof google.iam.credentials.v1.SignBlobRequest
                         * @instance
                         */
                        SignBlobRequest.prototype.delegates = $util.emptyArray;
    
                        /**
                         * SignBlobRequest payload.
                         * @member {Uint8Array} payload
                         * @memberof google.iam.credentials.v1.SignBlobRequest
                         * @instance
                         */
                        SignBlobRequest.prototype.payload = $util.newBuffer([]);
    
                        /**
                         * Creates a new SignBlobRequest instance using the specified properties.
                         * @function create
                         * @memberof google.iam.credentials.v1.SignBlobRequest
                         * @static
                         * @param {google.iam.credentials.v1.ISignBlobRequest=} [properties] Properties to set
                         * @returns {google.iam.credentials.v1.SignBlobRequest} SignBlobRequest instance
                         */
                        SignBlobRequest.create = function create(properties) {
                            return new SignBlobRequest(properties);
                        };
    
                        /**
                         * Encodes the specified SignBlobRequest message. Does not implicitly {@link google.iam.credentials.v1.SignBlobRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.iam.credentials.v1.SignBlobRequest
                         * @static
                         * @param {google.iam.credentials.v1.ISignBlobRequest} message SignBlobRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SignBlobRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.delegates != null && message.delegates.length)
                                for (var i = 0; i < message.delegates.length; ++i)
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.delegates[i]);
                            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.payload);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified SignBlobRequest message, length delimited. Does not implicitly {@link google.iam.credentials.v1.SignBlobRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.iam.credentials.v1.SignBlobRequest
                         * @static
                         * @param {google.iam.credentials.v1.ISignBlobRequest} message SignBlobRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SignBlobRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a SignBlobRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.iam.credentials.v1.SignBlobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.iam.credentials.v1.SignBlobRequest} SignBlobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SignBlobRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.iam.credentials.v1.SignBlobRequest();
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
                                        if (!(message.delegates && message.delegates.length))
                                            message.delegates = [];
                                        message.delegates.push(reader.string());
                                        break;
                                    }
                                case 5: {
                                        message.payload = reader.bytes();
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
                         * Decodes a SignBlobRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.iam.credentials.v1.SignBlobRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.iam.credentials.v1.SignBlobRequest} SignBlobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SignBlobRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a SignBlobRequest message.
                         * @function verify
                         * @memberof google.iam.credentials.v1.SignBlobRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SignBlobRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.delegates != null && message.hasOwnProperty("delegates")) {
                                if (!Array.isArray(message.delegates))
                                    return "delegates: array expected";
                                for (var i = 0; i < message.delegates.length; ++i)
                                    if (!$util.isString(message.delegates[i]))
                                        return "delegates: string[] expected";
                            }
                            if (message.payload != null && message.hasOwnProperty("payload"))
                                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                                    return "payload: buffer expected";
                            return null;
                        };
    
                        /**
                         * Creates a SignBlobRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.iam.credentials.v1.SignBlobRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.iam.credentials.v1.SignBlobRequest} SignBlobRequest
                         */
                        SignBlobRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.iam.credentials.v1.SignBlobRequest)
                                return object;
                            var message = new $root.google.iam.credentials.v1.SignBlobRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.delegates) {
                                if (!Array.isArray(object.delegates))
                                    throw TypeError(".google.iam.credentials.v1.SignBlobRequest.delegates: array expected");
                                message.delegates = [];
                                for (var i = 0; i < object.delegates.length; ++i)
                                    message.delegates[i] = String(object.delegates[i]);
                            }
                            if (object.payload != null)
                                if (typeof object.payload === "string")
                                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                                else if (object.payload.length >= 0)
                                    message.payload = object.payload;
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a SignBlobRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.iam.credentials.v1.SignBlobRequest
                         * @static
                         * @param {google.iam.credentials.v1.SignBlobRequest} message SignBlobRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SignBlobRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.delegates = [];
                            if (options.defaults) {
                                object.name = "";
                                if (options.bytes === String)
                                    object.payload = "";
                                else {
                                    object.payload = [];
                                    if (options.bytes !== Array)
                                        object.payload = $util.newBuffer(object.payload);
                                }
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.delegates && message.delegates.length) {
                                object.delegates = [];
                                for (var j = 0; j < message.delegates.length; ++j)
                                    object.delegates[j] = message.delegates[j];
                            }
                            if (message.payload != null && message.hasOwnProperty("payload"))
                                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                            return object;
                        };
    
                        /**
                         * Converts this SignBlobRequest to JSON.
                         * @function toJSON
                         * @memberof google.iam.credentials.v1.SignBlobRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SignBlobRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for SignBlobRequest
                         * @function getTypeUrl
                         * @memberof google.iam.credentials.v1.SignBlobRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        SignBlobRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.iam.credentials.v1.SignBlobRequest";
                        };
    
                        return SignBlobRequest;
                    })();
    
                    v1.SignBlobResponse = (function() {
    
                        /**
                         * Properties of a SignBlobResponse.
                         * @memberof google.iam.credentials.v1
                         * @interface ISignBlobResponse
                         * @property {string|null} [keyId] SignBlobResponse keyId
                         * @property {Uint8Array|null} [signedBlob] SignBlobResponse signedBlob
                         */
    
                        /**
                         * Constructs a new SignBlobResponse.
                         * @memberof google.iam.credentials.v1
                         * @classdesc Represents a SignBlobResponse.
                         * @implements ISignBlobResponse
                         * @constructor
                         * @param {google.iam.credentials.v1.ISignBlobResponse=} [properties] Properties to set
                         */
                        function SignBlobResponse(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * SignBlobResponse keyId.
                         * @member {string} keyId
                         * @memberof google.iam.credentials.v1.SignBlobResponse
                         * @instance
                         */
                        SignBlobResponse.prototype.keyId = "";
    
                        /**
                         * SignBlobResponse signedBlob.
                         * @member {Uint8Array} signedBlob
                         * @memberof google.iam.credentials.v1.SignBlobResponse
                         * @instance
                         */
                        SignBlobResponse.prototype.signedBlob = $util.newBuffer([]);
    
                        /**
                         * Creates a new SignBlobResponse instance using the specified properties.
                         * @function create
                         * @memberof google.iam.credentials.v1.SignBlobResponse
                         * @static
                         * @param {google.iam.credentials.v1.ISignBlobResponse=} [properties] Properties to set
                         * @returns {google.iam.credentials.v1.SignBlobResponse} SignBlobResponse instance
                         */
                        SignBlobResponse.create = function create(properties) {
                            return new SignBlobResponse(properties);
                        };
    
                        /**
                         * Encodes the specified SignBlobResponse message. Does not implicitly {@link google.iam.credentials.v1.SignBlobResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.iam.credentials.v1.SignBlobResponse
                         * @static
                         * @param {google.iam.credentials.v1.ISignBlobResponse} message SignBlobResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SignBlobResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.keyId != null && Object.hasOwnProperty.call(message, "keyId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.keyId);
                            if (message.signedBlob != null && Object.hasOwnProperty.call(message, "signedBlob"))
                                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signedBlob);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified SignBlobResponse message, length delimited. Does not implicitly {@link google.iam.credentials.v1.SignBlobResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.iam.credentials.v1.SignBlobResponse
                         * @static
                         * @param {google.iam.credentials.v1.ISignBlobResponse} message SignBlobResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SignBlobResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a SignBlobResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.iam.credentials.v1.SignBlobResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.iam.credentials.v1.SignBlobResponse} SignBlobResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SignBlobResponse.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.iam.credentials.v1.SignBlobResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.keyId = reader.string();
                                        break;
                                    }
                                case 4: {
                                        message.signedBlob = reader.bytes();
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
                         * Decodes a SignBlobResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.iam.credentials.v1.SignBlobResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.iam.credentials.v1.SignBlobResponse} SignBlobResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SignBlobResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a SignBlobResponse message.
                         * @function verify
                         * @memberof google.iam.credentials.v1.SignBlobResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SignBlobResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.keyId != null && message.hasOwnProperty("keyId"))
                                if (!$util.isString(message.keyId))
                                    return "keyId: string expected";
                            if (message.signedBlob != null && message.hasOwnProperty("signedBlob"))
                                if (!(message.signedBlob && typeof message.signedBlob.length === "number" || $util.isString(message.signedBlob)))
                                    return "signedBlob: buffer expected";
                            return null;
                        };
    
                        /**
                         * Creates a SignBlobResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.iam.credentials.v1.SignBlobResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.iam.credentials.v1.SignBlobResponse} SignBlobResponse
                         */
                        SignBlobResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.iam.credentials.v1.SignBlobResponse)
                                return object;
                            var message = new $root.google.iam.credentials.v1.SignBlobResponse();
                            if (object.keyId != null)
                                message.keyId = String(object.keyId);
                            if (object.signedBlob != null)
                                if (typeof object.signedBlob === "string")
                                    $util.base64.decode(object.signedBlob, message.signedBlob = $util.newBuffer($util.base64.length(object.signedBlob)), 0);
                                else if (object.signedBlob.length >= 0)
                                    message.signedBlob = object.signedBlob;
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a SignBlobResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.iam.credentials.v1.SignBlobResponse
                         * @static
                         * @param {google.iam.credentials.v1.SignBlobResponse} message SignBlobResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SignBlobResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.keyId = "";
                                if (options.bytes === String)
                                    object.signedBlob = "";
                                else {
                                    object.signedBlob = [];
                                    if (options.bytes !== Array)
                                        object.signedBlob = $util.newBuffer(object.signedBlob);
                                }
                            }
                            if (message.keyId != null && message.hasOwnProperty("keyId"))
                                object.keyId = message.keyId;
                            if (message.signedBlob != null && message.hasOwnProperty("signedBlob"))
                                object.signedBlob = options.bytes === String ? $util.base64.encode(message.signedBlob, 0, message.signedBlob.length) : options.bytes === Array ? Array.prototype.slice.call(message.signedBlob) : message.signedBlob;
                            return object;
                        };
    
                        /**
                         * Converts this SignBlobResponse to JSON.
                         * @function toJSON
                         * @memberof google.iam.credentials.v1.SignBlobResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SignBlobResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for SignBlobResponse
                         * @function getTypeUrl
                         * @memberof google.iam.credentials.v1.SignBlobResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        SignBlobResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.iam.credentials.v1.SignBlobResponse";
                        };
    
                        return SignBlobResponse;
                    })();
    
                    v1.SignJwtRequest = (function() {
    
                        /**
                         * Properties of a SignJwtRequest.
                         * @memberof google.iam.credentials.v1
                         * @interface ISignJwtRequest
                         * @property {string|null} [name] SignJwtRequest name
                         * @property {Array.<string>|null} [delegates] SignJwtRequest delegates
                         * @property {string|null} [payload] SignJwtRequest payload
                         */
    
                        /**
                         * Constructs a new SignJwtRequest.
                         * @memberof google.iam.credentials.v1
                         * @classdesc Represents a SignJwtRequest.
                         * @implements ISignJwtRequest
                         * @constructor
                         * @param {google.iam.credentials.v1.ISignJwtRequest=} [properties] Properties to set
                         */
                        function SignJwtRequest(properties) {
                            this.delegates = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * SignJwtRequest name.
                         * @member {string} name
                         * @memberof google.iam.credentials.v1.SignJwtRequest
                         * @instance
                         */
                        SignJwtRequest.prototype.name = "";
    
                        /**
                         * SignJwtRequest delegates.
                         * @member {Array.<string>} delegates
                         * @memberof google.iam.credentials.v1.SignJwtRequest
                         * @instance
                         */
                        SignJwtRequest.prototype.delegates = $util.emptyArray;
    
                        /**
                         * SignJwtRequest payload.
                         * @member {string} payload
                         * @memberof google.iam.credentials.v1.SignJwtRequest
                         * @instance
                         */
                        SignJwtRequest.prototype.payload = "";
    
                        /**
                         * Creates a new SignJwtRequest instance using the specified properties.
                         * @function create
                         * @memberof google.iam.credentials.v1.SignJwtRequest
                         * @static
                         * @param {google.iam.credentials.v1.ISignJwtRequest=} [properties] Properties to set
                         * @returns {google.iam.credentials.v1.SignJwtRequest} SignJwtRequest instance
                         */
                        SignJwtRequest.create = function create(properties) {
                            return new SignJwtRequest(properties);
                        };
    
                        /**
                         * Encodes the specified SignJwtRequest message. Does not implicitly {@link google.iam.credentials.v1.SignJwtRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.iam.credentials.v1.SignJwtRequest
                         * @static
                         * @param {google.iam.credentials.v1.ISignJwtRequest} message SignJwtRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SignJwtRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.delegates != null && message.delegates.length)
                                for (var i = 0; i < message.delegates.length; ++i)
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.delegates[i]);
                            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.payload);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified SignJwtRequest message, length delimited. Does not implicitly {@link google.iam.credentials.v1.SignJwtRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.iam.credentials.v1.SignJwtRequest
                         * @static
                         * @param {google.iam.credentials.v1.ISignJwtRequest} message SignJwtRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SignJwtRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a SignJwtRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.iam.credentials.v1.SignJwtRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.iam.credentials.v1.SignJwtRequest} SignJwtRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SignJwtRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.iam.credentials.v1.SignJwtRequest();
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
                                        if (!(message.delegates && message.delegates.length))
                                            message.delegates = [];
                                        message.delegates.push(reader.string());
                                        break;
                                    }
                                case 5: {
                                        message.payload = reader.string();
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
                         * Decodes a SignJwtRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.iam.credentials.v1.SignJwtRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.iam.credentials.v1.SignJwtRequest} SignJwtRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SignJwtRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a SignJwtRequest message.
                         * @function verify
                         * @memberof google.iam.credentials.v1.SignJwtRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SignJwtRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.delegates != null && message.hasOwnProperty("delegates")) {
                                if (!Array.isArray(message.delegates))
                                    return "delegates: array expected";
                                for (var i = 0; i < message.delegates.length; ++i)
                                    if (!$util.isString(message.delegates[i]))
                                        return "delegates: string[] expected";
                            }
                            if (message.payload != null && message.hasOwnProperty("payload"))
                                if (!$util.isString(message.payload))
                                    return "payload: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a SignJwtRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.iam.credentials.v1.SignJwtRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.iam.credentials.v1.SignJwtRequest} SignJwtRequest
                         */
                        SignJwtRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.iam.credentials.v1.SignJwtRequest)
                                return object;
                            var message = new $root.google.iam.credentials.v1.SignJwtRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.delegates) {
                                if (!Array.isArray(object.delegates))
                                    throw TypeError(".google.iam.credentials.v1.SignJwtRequest.delegates: array expected");
                                message.delegates = [];
                                for (var i = 0; i < object.delegates.length; ++i)
                                    message.delegates[i] = String(object.delegates[i]);
                            }
                            if (object.payload != null)
                                message.payload = String(object.payload);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a SignJwtRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.iam.credentials.v1.SignJwtRequest
                         * @static
                         * @param {google.iam.credentials.v1.SignJwtRequest} message SignJwtRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SignJwtRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.delegates = [];
                            if (options.defaults) {
                                object.name = "";
                                object.payload = "";
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.delegates && message.delegates.length) {
                                object.delegates = [];
                                for (var j = 0; j < message.delegates.length; ++j)
                                    object.delegates[j] = message.delegates[j];
                            }
                            if (message.payload != null && message.hasOwnProperty("payload"))
                                object.payload = message.payload;
                            return object;
                        };
    
                        /**
                         * Converts this SignJwtRequest to JSON.
                         * @function toJSON
                         * @memberof google.iam.credentials.v1.SignJwtRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SignJwtRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for SignJwtRequest
                         * @function getTypeUrl
                         * @memberof google.iam.credentials.v1.SignJwtRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        SignJwtRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.iam.credentials.v1.SignJwtRequest";
                        };
    
                        return SignJwtRequest;
                    })();
    
                    v1.SignJwtResponse = (function() {
    
                        /**
                         * Properties of a SignJwtResponse.
                         * @memberof google.iam.credentials.v1
                         * @interface ISignJwtResponse
                         * @property {string|null} [keyId] SignJwtResponse keyId
                         * @property {string|null} [signedJwt] SignJwtResponse signedJwt
                         */
    
                        /**
                         * Constructs a new SignJwtResponse.
                         * @memberof google.iam.credentials.v1
                         * @classdesc Represents a SignJwtResponse.
                         * @implements ISignJwtResponse
                         * @constructor
                         * @param {google.iam.credentials.v1.ISignJwtResponse=} [properties] Properties to set
                         */
                        function SignJwtResponse(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * SignJwtResponse keyId.
                         * @member {string} keyId
                         * @memberof google.iam.credentials.v1.SignJwtResponse
                         * @instance
                         */
                        SignJwtResponse.prototype.keyId = "";
    
                        /**
                         * SignJwtResponse signedJwt.
                         * @member {string} signedJwt
                         * @memberof google.iam.credentials.v1.SignJwtResponse
                         * @instance
                         */
                        SignJwtResponse.prototype.signedJwt = "";
    
                        /**
                         * Creates a new SignJwtResponse instance using the specified properties.
                         * @function create
                         * @memberof google.iam.credentials.v1.SignJwtResponse
                         * @static
                         * @param {google.iam.credentials.v1.ISignJwtResponse=} [properties] Properties to set
                         * @returns {google.iam.credentials.v1.SignJwtResponse} SignJwtResponse instance
                         */
                        SignJwtResponse.create = function create(properties) {
                            return new SignJwtResponse(properties);
                        };
    
                        /**
                         * Encodes the specified SignJwtResponse message. Does not implicitly {@link google.iam.credentials.v1.SignJwtResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.iam.credentials.v1.SignJwtResponse
                         * @static
                         * @param {google.iam.credentials.v1.ISignJwtResponse} message SignJwtResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SignJwtResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.keyId != null && Object.hasOwnProperty.call(message, "keyId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.keyId);
                            if (message.signedJwt != null && Object.hasOwnProperty.call(message, "signedJwt"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.signedJwt);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified SignJwtResponse message, length delimited. Does not implicitly {@link google.iam.credentials.v1.SignJwtResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.iam.credentials.v1.SignJwtResponse
                         * @static
                         * @param {google.iam.credentials.v1.ISignJwtResponse} message SignJwtResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SignJwtResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a SignJwtResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.iam.credentials.v1.SignJwtResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.iam.credentials.v1.SignJwtResponse} SignJwtResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SignJwtResponse.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.iam.credentials.v1.SignJwtResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.keyId = reader.string();
                                        break;
                                    }
                                case 2: {
                                        message.signedJwt = reader.string();
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
                         * Decodes a SignJwtResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.iam.credentials.v1.SignJwtResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.iam.credentials.v1.SignJwtResponse} SignJwtResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SignJwtResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a SignJwtResponse message.
                         * @function verify
                         * @memberof google.iam.credentials.v1.SignJwtResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SignJwtResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.keyId != null && message.hasOwnProperty("keyId"))
                                if (!$util.isString(message.keyId))
                                    return "keyId: string expected";
                            if (message.signedJwt != null && message.hasOwnProperty("signedJwt"))
                                if (!$util.isString(message.signedJwt))
                                    return "signedJwt: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a SignJwtResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.iam.credentials.v1.SignJwtResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.iam.credentials.v1.SignJwtResponse} SignJwtResponse
                         */
                        SignJwtResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.iam.credentials.v1.SignJwtResponse)
                                return object;
                            var message = new $root.google.iam.credentials.v1.SignJwtResponse();
                            if (object.keyId != null)
                                message.keyId = String(object.keyId);
                            if (object.signedJwt != null)
                                message.signedJwt = String(object.signedJwt);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a SignJwtResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.iam.credentials.v1.SignJwtResponse
                         * @static
                         * @param {google.iam.credentials.v1.SignJwtResponse} message SignJwtResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SignJwtResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.keyId = "";
                                object.signedJwt = "";
                            }
                            if (message.keyId != null && message.hasOwnProperty("keyId"))
                                object.keyId = message.keyId;
                            if (message.signedJwt != null && message.hasOwnProperty("signedJwt"))
                                object.signedJwt = message.signedJwt;
                            return object;
                        };
    
                        /**
                         * Converts this SignJwtResponse to JSON.
                         * @function toJSON
                         * @memberof google.iam.credentials.v1.SignJwtResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SignJwtResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for SignJwtResponse
                         * @function getTypeUrl
                         * @memberof google.iam.credentials.v1.SignJwtResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        SignJwtResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.iam.credentials.v1.SignJwtResponse";
                        };
    
                        return SignJwtResponse;
                    })();
    
                    v1.GenerateIdTokenRequest = (function() {
    
                        /**
                         * Properties of a GenerateIdTokenRequest.
                         * @memberof google.iam.credentials.v1
                         * @interface IGenerateIdTokenRequest
                         * @property {string|null} [name] GenerateIdTokenRequest name
                         * @property {Array.<string>|null} [delegates] GenerateIdTokenRequest delegates
                         * @property {string|null} [audience] GenerateIdTokenRequest audience
                         * @property {boolean|null} [includeEmail] GenerateIdTokenRequest includeEmail
                         */
    
                        /**
                         * Constructs a new GenerateIdTokenRequest.
                         * @memberof google.iam.credentials.v1
                         * @classdesc Represents a GenerateIdTokenRequest.
                         * @implements IGenerateIdTokenRequest
                         * @constructor
                         * @param {google.iam.credentials.v1.IGenerateIdTokenRequest=} [properties] Properties to set
                         */
                        function GenerateIdTokenRequest(properties) {
                            this.delegates = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * GenerateIdTokenRequest name.
                         * @member {string} name
                         * @memberof google.iam.credentials.v1.GenerateIdTokenRequest
                         * @instance
                         */
                        GenerateIdTokenRequest.prototype.name = "";
    
                        /**
                         * GenerateIdTokenRequest delegates.
                         * @member {Array.<string>} delegates
                         * @memberof google.iam.credentials.v1.GenerateIdTokenRequest
                         * @instance
                         */
                        GenerateIdTokenRequest.prototype.delegates = $util.emptyArray;
    
                        /**
                         * GenerateIdTokenRequest audience.
                         * @member {string} audience
                         * @memberof google.iam.credentials.v1.GenerateIdTokenRequest
                         * @instance
                         */
                        GenerateIdTokenRequest.prototype.audience = "";
    
                        /**
                         * GenerateIdTokenRequest includeEmail.
                         * @member {boolean} includeEmail
                         * @memberof google.iam.credentials.v1.GenerateIdTokenRequest
                         * @instance
                         */
                        GenerateIdTokenRequest.prototype.includeEmail = false;
    
                        /**
                         * Creates a new GenerateIdTokenRequest instance using the specified properties.
                         * @function create
                         * @memberof google.iam.credentials.v1.GenerateIdTokenRequest
                         * @static
                         * @param {google.iam.credentials.v1.IGenerateIdTokenRequest=} [properties] Properties to set
                         * @returns {google.iam.credentials.v1.GenerateIdTokenRequest} GenerateIdTokenRequest instance
                         */
                        GenerateIdTokenRequest.create = function create(properties) {
                            return new GenerateIdTokenRequest(properties);
                        };
    
                        /**
                         * Encodes the specified GenerateIdTokenRequest message. Does not implicitly {@link google.iam.credentials.v1.GenerateIdTokenRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.iam.credentials.v1.GenerateIdTokenRequest
                         * @static
                         * @param {google.iam.credentials.v1.IGenerateIdTokenRequest} message GenerateIdTokenRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GenerateIdTokenRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.delegates != null && message.delegates.length)
                                for (var i = 0; i < message.delegates.length; ++i)
                                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.delegates[i]);
                            if (message.audience != null && Object.hasOwnProperty.call(message, "audience"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.audience);
                            if (message.includeEmail != null && Object.hasOwnProperty.call(message, "includeEmail"))
                                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.includeEmail);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified GenerateIdTokenRequest message, length delimited. Does not implicitly {@link google.iam.credentials.v1.GenerateIdTokenRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.iam.credentials.v1.GenerateIdTokenRequest
                         * @static
                         * @param {google.iam.credentials.v1.IGenerateIdTokenRequest} message GenerateIdTokenRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GenerateIdTokenRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a GenerateIdTokenRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.iam.credentials.v1.GenerateIdTokenRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.iam.credentials.v1.GenerateIdTokenRequest} GenerateIdTokenRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GenerateIdTokenRequest.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.iam.credentials.v1.GenerateIdTokenRequest();
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
                                        if (!(message.delegates && message.delegates.length))
                                            message.delegates = [];
                                        message.delegates.push(reader.string());
                                        break;
                                    }
                                case 3: {
                                        message.audience = reader.string();
                                        break;
                                    }
                                case 4: {
                                        message.includeEmail = reader.bool();
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
                         * Decodes a GenerateIdTokenRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.iam.credentials.v1.GenerateIdTokenRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.iam.credentials.v1.GenerateIdTokenRequest} GenerateIdTokenRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GenerateIdTokenRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a GenerateIdTokenRequest message.
                         * @function verify
                         * @memberof google.iam.credentials.v1.GenerateIdTokenRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GenerateIdTokenRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.delegates != null && message.hasOwnProperty("delegates")) {
                                if (!Array.isArray(message.delegates))
                                    return "delegates: array expected";
                                for (var i = 0; i < message.delegates.length; ++i)
                                    if (!$util.isString(message.delegates[i]))
                                        return "delegates: string[] expected";
                            }
                            if (message.audience != null && message.hasOwnProperty("audience"))
                                if (!$util.isString(message.audience))
                                    return "audience: string expected";
                            if (message.includeEmail != null && message.hasOwnProperty("includeEmail"))
                                if (typeof message.includeEmail !== "boolean")
                                    return "includeEmail: boolean expected";
                            return null;
                        };
    
                        /**
                         * Creates a GenerateIdTokenRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.iam.credentials.v1.GenerateIdTokenRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.iam.credentials.v1.GenerateIdTokenRequest} GenerateIdTokenRequest
                         */
                        GenerateIdTokenRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.iam.credentials.v1.GenerateIdTokenRequest)
                                return object;
                            var message = new $root.google.iam.credentials.v1.GenerateIdTokenRequest();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.delegates) {
                                if (!Array.isArray(object.delegates))
                                    throw TypeError(".google.iam.credentials.v1.GenerateIdTokenRequest.delegates: array expected");
                                message.delegates = [];
                                for (var i = 0; i < object.delegates.length; ++i)
                                    message.delegates[i] = String(object.delegates[i]);
                            }
                            if (object.audience != null)
                                message.audience = String(object.audience);
                            if (object.includeEmail != null)
                                message.includeEmail = Boolean(object.includeEmail);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a GenerateIdTokenRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.iam.credentials.v1.GenerateIdTokenRequest
                         * @static
                         * @param {google.iam.credentials.v1.GenerateIdTokenRequest} message GenerateIdTokenRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GenerateIdTokenRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.delegates = [];
                            if (options.defaults) {
                                object.name = "";
                                object.audience = "";
                                object.includeEmail = false;
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.delegates && message.delegates.length) {
                                object.delegates = [];
                                for (var j = 0; j < message.delegates.length; ++j)
                                    object.delegates[j] = message.delegates[j];
                            }
                            if (message.audience != null && message.hasOwnProperty("audience"))
                                object.audience = message.audience;
                            if (message.includeEmail != null && message.hasOwnProperty("includeEmail"))
                                object.includeEmail = message.includeEmail;
                            return object;
                        };
    
                        /**
                         * Converts this GenerateIdTokenRequest to JSON.
                         * @function toJSON
                         * @memberof google.iam.credentials.v1.GenerateIdTokenRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GenerateIdTokenRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for GenerateIdTokenRequest
                         * @function getTypeUrl
                         * @memberof google.iam.credentials.v1.GenerateIdTokenRequest
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        GenerateIdTokenRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.iam.credentials.v1.GenerateIdTokenRequest";
                        };
    
                        return GenerateIdTokenRequest;
                    })();
    
                    v1.GenerateIdTokenResponse = (function() {
    
                        /**
                         * Properties of a GenerateIdTokenResponse.
                         * @memberof google.iam.credentials.v1
                         * @interface IGenerateIdTokenResponse
                         * @property {string|null} [token] GenerateIdTokenResponse token
                         */
    
                        /**
                         * Constructs a new GenerateIdTokenResponse.
                         * @memberof google.iam.credentials.v1
                         * @classdesc Represents a GenerateIdTokenResponse.
                         * @implements IGenerateIdTokenResponse
                         * @constructor
                         * @param {google.iam.credentials.v1.IGenerateIdTokenResponse=} [properties] Properties to set
                         */
                        function GenerateIdTokenResponse(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * GenerateIdTokenResponse token.
                         * @member {string} token
                         * @memberof google.iam.credentials.v1.GenerateIdTokenResponse
                         * @instance
                         */
                        GenerateIdTokenResponse.prototype.token = "";
    
                        /**
                         * Creates a new GenerateIdTokenResponse instance using the specified properties.
                         * @function create
                         * @memberof google.iam.credentials.v1.GenerateIdTokenResponse
                         * @static
                         * @param {google.iam.credentials.v1.IGenerateIdTokenResponse=} [properties] Properties to set
                         * @returns {google.iam.credentials.v1.GenerateIdTokenResponse} GenerateIdTokenResponse instance
                         */
                        GenerateIdTokenResponse.create = function create(properties) {
                            return new GenerateIdTokenResponse(properties);
                        };
    
                        /**
                         * Encodes the specified GenerateIdTokenResponse message. Does not implicitly {@link google.iam.credentials.v1.GenerateIdTokenResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.iam.credentials.v1.GenerateIdTokenResponse
                         * @static
                         * @param {google.iam.credentials.v1.IGenerateIdTokenResponse} message GenerateIdTokenResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GenerateIdTokenResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified GenerateIdTokenResponse message, length delimited. Does not implicitly {@link google.iam.credentials.v1.GenerateIdTokenResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.iam.credentials.v1.GenerateIdTokenResponse
                         * @static
                         * @param {google.iam.credentials.v1.IGenerateIdTokenResponse} message GenerateIdTokenResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GenerateIdTokenResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a GenerateIdTokenResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.iam.credentials.v1.GenerateIdTokenResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.iam.credentials.v1.GenerateIdTokenResponse} GenerateIdTokenResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GenerateIdTokenResponse.decode = function decode(reader, length, error) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.iam.credentials.v1.GenerateIdTokenResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                if (tag === error)
                                    break;
                                switch (tag >>> 3) {
                                case 1: {
                                        message.token = reader.string();
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
                         * Decodes a GenerateIdTokenResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.iam.credentials.v1.GenerateIdTokenResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.iam.credentials.v1.GenerateIdTokenResponse} GenerateIdTokenResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GenerateIdTokenResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a GenerateIdTokenResponse message.
                         * @function verify
                         * @memberof google.iam.credentials.v1.GenerateIdTokenResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GenerateIdTokenResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.token != null && message.hasOwnProperty("token"))
                                if (!$util.isString(message.token))
                                    return "token: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a GenerateIdTokenResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.iam.credentials.v1.GenerateIdTokenResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.iam.credentials.v1.GenerateIdTokenResponse} GenerateIdTokenResponse
                         */
                        GenerateIdTokenResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.iam.credentials.v1.GenerateIdTokenResponse)
                                return object;
                            var message = new $root.google.iam.credentials.v1.GenerateIdTokenResponse();
                            if (object.token != null)
                                message.token = String(object.token);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a GenerateIdTokenResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.iam.credentials.v1.GenerateIdTokenResponse
                         * @static
                         * @param {google.iam.credentials.v1.GenerateIdTokenResponse} message GenerateIdTokenResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GenerateIdTokenResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.token = "";
                            if (message.token != null && message.hasOwnProperty("token"))
                                object.token = message.token;
                            return object;
                        };
    
                        /**
                         * Converts this GenerateIdTokenResponse to JSON.
                         * @function toJSON
                         * @memberof google.iam.credentials.v1.GenerateIdTokenResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GenerateIdTokenResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * Gets the default type url for GenerateIdTokenResponse
                         * @function getTypeUrl
                         * @memberof google.iam.credentials.v1.GenerateIdTokenResponse
                         * @static
                         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns {string} The default type url
                         */
                        GenerateIdTokenResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                            if (typeUrlPrefix === undefined) {
                                typeUrlPrefix = "type.googleapis.com";
                            }
                            return typeUrlPrefix + "/google.iam.credentials.v1.GenerateIdTokenResponse";
                        };
    
                        return GenerateIdTokenResponse;
                    })();
    
                    v1.IAMCredentials = (function() {
    
                        /**
                         * Constructs a new IAMCredentials service.
                         * @memberof google.iam.credentials.v1
                         * @classdesc Represents a IAMCredentials
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function IAMCredentials(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }
    
                        (IAMCredentials.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = IAMCredentials;
    
                        /**
                         * Creates new IAMCredentials service using the specified rpc implementation.
                         * @function create
                         * @memberof google.iam.credentials.v1.IAMCredentials
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {IAMCredentials} RPC service. Useful where requests and/or responses are streamed.
                         */
                        IAMCredentials.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };
    
                        /**
                         * Callback as used by {@link google.iam.credentials.v1.IAMCredentials|generateAccessToken}.
                         * @memberof google.iam.credentials.v1.IAMCredentials
                         * @typedef GenerateAccessTokenCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.iam.credentials.v1.GenerateAccessTokenResponse} [response] GenerateAccessTokenResponse
                         */
    
                        /**
                         * Calls GenerateAccessToken.
                         * @function generateAccessToken
                         * @memberof google.iam.credentials.v1.IAMCredentials
                         * @instance
                         * @param {google.iam.credentials.v1.IGenerateAccessTokenRequest} request GenerateAccessTokenRequest message or plain object
                         * @param {google.iam.credentials.v1.IAMCredentials.GenerateAccessTokenCallback} callback Node-style callback called with the error, if any, and GenerateAccessTokenResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(IAMCredentials.prototype.generateAccessToken = function generateAccessToken(request, callback) {
                            return this.rpcCall(generateAccessToken, $root.google.iam.credentials.v1.GenerateAccessTokenRequest, $root.google.iam.credentials.v1.GenerateAccessTokenResponse, request, callback);
                        }, "name", { value: "GenerateAccessToken" });
    
                        /**
                         * Calls GenerateAccessToken.
                         * @function generateAccessToken
                         * @memberof google.iam.credentials.v1.IAMCredentials
                         * @instance
                         * @param {google.iam.credentials.v1.IGenerateAccessTokenRequest} request GenerateAccessTokenRequest message or plain object
                         * @returns {Promise<google.iam.credentials.v1.GenerateAccessTokenResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.iam.credentials.v1.IAMCredentials|generateIdToken}.
                         * @memberof google.iam.credentials.v1.IAMCredentials
                         * @typedef GenerateIdTokenCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.iam.credentials.v1.GenerateIdTokenResponse} [response] GenerateIdTokenResponse
                         */
    
                        /**
                         * Calls GenerateIdToken.
                         * @function generateIdToken
                         * @memberof google.iam.credentials.v1.IAMCredentials
                         * @instance
                         * @param {google.iam.credentials.v1.IGenerateIdTokenRequest} request GenerateIdTokenRequest message or plain object
                         * @param {google.iam.credentials.v1.IAMCredentials.GenerateIdTokenCallback} callback Node-style callback called with the error, if any, and GenerateIdTokenResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(IAMCredentials.prototype.generateIdToken = function generateIdToken(request, callback) {
                            return this.rpcCall(generateIdToken, $root.google.iam.credentials.v1.GenerateIdTokenRequest, $root.google.iam.credentials.v1.GenerateIdTokenResponse, request, callback);
                        }, "name", { value: "GenerateIdToken" });
    
                        /**
                         * Calls GenerateIdToken.
                         * @function generateIdToken
                         * @memberof google.iam.credentials.v1.IAMCredentials
                         * @instance
                         * @param {google.iam.credentials.v1.IGenerateIdTokenRequest} request GenerateIdTokenRequest message or plain object
                         * @returns {Promise<google.iam.credentials.v1.GenerateIdTokenResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.iam.credentials.v1.IAMCredentials|signBlob}.
                         * @memberof google.iam.credentials.v1.IAMCredentials
                         * @typedef SignBlobCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.iam.credentials.v1.SignBlobResponse} [response] SignBlobResponse
                         */
    
                        /**
                         * Calls SignBlob.
                         * @function signBlob
                         * @memberof google.iam.credentials.v1.IAMCredentials
                         * @instance
                         * @param {google.iam.credentials.v1.ISignBlobRequest} request SignBlobRequest message or plain object
                         * @param {google.iam.credentials.v1.IAMCredentials.SignBlobCallback} callback Node-style callback called with the error, if any, and SignBlobResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(IAMCredentials.prototype.signBlob = function signBlob(request, callback) {
                            return this.rpcCall(signBlob, $root.google.iam.credentials.v1.SignBlobRequest, $root.google.iam.credentials.v1.SignBlobResponse, request, callback);
                        }, "name", { value: "SignBlob" });
    
                        /**
                         * Calls SignBlob.
                         * @function signBlob
                         * @memberof google.iam.credentials.v1.IAMCredentials
                         * @instance
                         * @param {google.iam.credentials.v1.ISignBlobRequest} request SignBlobRequest message or plain object
                         * @returns {Promise<google.iam.credentials.v1.SignBlobResponse>} Promise
                         * @variation 2
                         */
    
                        /**
                         * Callback as used by {@link google.iam.credentials.v1.IAMCredentials|signJwt}.
                         * @memberof google.iam.credentials.v1.IAMCredentials
                         * @typedef SignJwtCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.iam.credentials.v1.SignJwtResponse} [response] SignJwtResponse
                         */
    
                        /**
                         * Calls SignJwt.
                         * @function signJwt
                         * @memberof google.iam.credentials.v1.IAMCredentials
                         * @instance
                         * @param {google.iam.credentials.v1.ISignJwtRequest} request SignJwtRequest message or plain object
                         * @param {google.iam.credentials.v1.IAMCredentials.SignJwtCallback} callback Node-style callback called with the error, if any, and SignJwtResponse
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(IAMCredentials.prototype.signJwt = function signJwt(request, callback) {
                            return this.rpcCall(signJwt, $root.google.iam.credentials.v1.SignJwtRequest, $root.google.iam.credentials.v1.SignJwtResponse, request, callback);
                        }, "name", { value: "SignJwt" });
    
                        /**
                         * Calls SignJwt.
                         * @function signJwt
                         * @memberof google.iam.credentials.v1.IAMCredentials
                         * @instance
                         * @param {google.iam.credentials.v1.ISignJwtRequest} request SignJwtRequest message or plain object
                         * @returns {Promise<google.iam.credentials.v1.SignJwtResponse>} Promise
                         * @variation 2
                         */
    
                        return IAMCredentials;
                    })();
    
                    return v1;
                })();
    
                return credentials;
            })();
    
            return iam;
        })();
    
        google.api = (function() {
    
            /**
             * Namespace api.
             * @memberof google
             * @namespace
             */
            var api = {};
    
            /**
             * FieldBehavior enum.
             * @name google.api.FieldBehavior
             * @enum {number}
             * @property {number} FIELD_BEHAVIOR_UNSPECIFIED=0 FIELD_BEHAVIOR_UNSPECIFIED value
             * @property {number} OPTIONAL=1 OPTIONAL value
             * @property {number} REQUIRED=2 REQUIRED value
             * @property {number} OUTPUT_ONLY=3 OUTPUT_ONLY value
             * @property {number} INPUT_ONLY=4 INPUT_ONLY value
             * @property {number} IMMUTABLE=5 IMMUTABLE value
             * @property {number} UNORDERED_LIST=6 UNORDERED_LIST value
             * @property {number} NON_EMPTY_DEFAULT=7 NON_EMPTY_DEFAULT value
             * @property {number} IDENTIFIER=8 IDENTIFIER value
             */
            api.FieldBehavior = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "FIELD_BEHAVIOR_UNSPECIFIED"] = 0;
                values[valuesById[1] = "OPTIONAL"] = 1;
                values[valuesById[2] = "REQUIRED"] = 2;
                values[valuesById[3] = "OUTPUT_ONLY"] = 3;
                values[valuesById[4] = "INPUT_ONLY"] = 4;
                values[valuesById[5] = "IMMUTABLE"] = 5;
                values[valuesById[6] = "UNORDERED_LIST"] = 6;
                values[valuesById[7] = "NON_EMPTY_DEFAULT"] = 7;
                values[valuesById[8] = "IDENTIFIER"] = 8;
                return values;
            })();
    
            api.ResourceDescriptor = (function() {
    
                /**
                 * Properties of a ResourceDescriptor.
                 * @memberof google.api
                 * @interface IResourceDescriptor
                 * @property {string|null} [type] ResourceDescriptor type
                 * @property {Array.<string>|null} [pattern] ResourceDescriptor pattern
                 * @property {string|null} [nameField] ResourceDescriptor nameField
                 * @property {google.api.ResourceDescriptor.History|null} [history] ResourceDescriptor history
                 * @property {string|null} [plural] ResourceDescriptor plural
                 * @property {string|null} [singular] ResourceDescriptor singular
                 * @property {Array.<google.api.ResourceDescriptor.Style>|null} [style] ResourceDescriptor style
                 */
    
                /**
                 * Constructs a new ResourceDescriptor.
                 * @memberof google.api
                 * @classdesc Represents a ResourceDescriptor.
                 * @implements IResourceDescriptor
                 * @constructor
                 * @param {google.api.IResourceDescriptor=} [properties] Properties to set
                 */
                function ResourceDescriptor(properties) {
                    this.pattern = [];
                    this.style = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ResourceDescriptor type.
                 * @member {string} type
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 */
                ResourceDescriptor.prototype.type = "";
    
                /**
                 * ResourceDescriptor pattern.
                 * @member {Array.<string>} pattern
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 */
                ResourceDescriptor.prototype.pattern = $util.emptyArray;
    
                /**
                 * ResourceDescriptor nameField.
                 * @member {string} nameField
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 */
                ResourceDescriptor.prototype.nameField = "";
    
                /**
                 * ResourceDescriptor history.
                 * @member {google.api.ResourceDescriptor.History} history
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 */
                ResourceDescriptor.prototype.history = 0;
    
                /**
                 * ResourceDescriptor plural.
                 * @member {string} plural
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 */
                ResourceDescriptor.prototype.plural = "";
    
                /**
                 * ResourceDescriptor singular.
                 * @member {string} singular
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 */
                ResourceDescriptor.prototype.singular = "";
    
                /**
                 * ResourceDescriptor style.
                 * @member {Array.<google.api.ResourceDescriptor.Style>} style
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 */
                ResourceDescriptor.prototype.style = $util.emptyArray;
    
                /**
                 * Creates a new ResourceDescriptor instance using the specified properties.
                 * @function create
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {google.api.IResourceDescriptor=} [properties] Properties to set
                 * @returns {google.api.ResourceDescriptor} ResourceDescriptor instance
                 */
                ResourceDescriptor.create = function create(properties) {
                    return new ResourceDescriptor(properties);
                };
    
                /**
                 * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {google.api.IResourceDescriptor} message ResourceDescriptor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResourceDescriptor.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                    if (message.pattern != null && message.pattern.length)
                        for (var i = 0; i < message.pattern.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.pattern[i]);
                    if (message.nameField != null && Object.hasOwnProperty.call(message, "nameField"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.nameField);
                    if (message.history != null && Object.hasOwnProperty.call(message, "history"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.history);
                    if (message.plural != null && Object.hasOwnProperty.call(message, "plural"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.plural);
                    if (message.singular != null && Object.hasOwnProperty.call(message, "singular"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.singular);
                    if (message.style != null && message.style.length) {
                        writer.uint32(/* id 10, wireType 2 =*/82).fork();
                        for (var i = 0; i < message.style.length; ++i)
                            writer.int32(message.style[i]);
                        writer.ldelim();
                    }
                    return writer;
                };
    
                /**
                 * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {google.api.IResourceDescriptor} message ResourceDescriptor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResourceDescriptor.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ResourceDescriptor message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.ResourceDescriptor} ResourceDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResourceDescriptor.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.ResourceDescriptor();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.type = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.pattern && message.pattern.length))
                                    message.pattern = [];
                                message.pattern.push(reader.string());
                                break;
                            }
                        case 3: {
                                message.nameField = reader.string();
                                break;
                            }
                        case 4: {
                                message.history = reader.int32();
                                break;
                            }
                        case 5: {
                                message.plural = reader.string();
                                break;
                            }
                        case 6: {
                                message.singular = reader.string();
                                break;
                            }
                        case 10: {
                                if (!(message.style && message.style.length))
                                    message.style = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.style.push(reader.int32());
                                } else
                                    message.style.push(reader.int32());
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
                 * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.ResourceDescriptor} ResourceDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResourceDescriptor.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ResourceDescriptor message.
                 * @function verify
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResourceDescriptor.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isString(message.type))
                            return "type: string expected";
                    if (message.pattern != null && message.hasOwnProperty("pattern")) {
                        if (!Array.isArray(message.pattern))
                            return "pattern: array expected";
                        for (var i = 0; i < message.pattern.length; ++i)
                            if (!$util.isString(message.pattern[i]))
                                return "pattern: string[] expected";
                    }
                    if (message.nameField != null && message.hasOwnProperty("nameField"))
                        if (!$util.isString(message.nameField))
                            return "nameField: string expected";
                    if (message.history != null && message.hasOwnProperty("history"))
                        switch (message.history) {
                        default:
                            return "history: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.plural != null && message.hasOwnProperty("plural"))
                        if (!$util.isString(message.plural))
                            return "plural: string expected";
                    if (message.singular != null && message.hasOwnProperty("singular"))
                        if (!$util.isString(message.singular))
                            return "singular: string expected";
                    if (message.style != null && message.hasOwnProperty("style")) {
                        if (!Array.isArray(message.style))
                            return "style: array expected";
                        for (var i = 0; i < message.style.length; ++i)
                            switch (message.style[i]) {
                            default:
                                return "style: enum value[] expected";
                            case 0:
                            case 1:
                                break;
                            }
                    }
                    return null;
                };
    
                /**
                 * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.ResourceDescriptor} ResourceDescriptor
                 */
                ResourceDescriptor.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.ResourceDescriptor)
                        return object;
                    var message = new $root.google.api.ResourceDescriptor();
                    if (object.type != null)
                        message.type = String(object.type);
                    if (object.pattern) {
                        if (!Array.isArray(object.pattern))
                            throw TypeError(".google.api.ResourceDescriptor.pattern: array expected");
                        message.pattern = [];
                        for (var i = 0; i < object.pattern.length; ++i)
                            message.pattern[i] = String(object.pattern[i]);
                    }
                    if (object.nameField != null)
                        message.nameField = String(object.nameField);
                    switch (object.history) {
                    default:
                        if (typeof object.history === "number") {
                            message.history = object.history;
                            break;
                        }
                        break;
                    case "HISTORY_UNSPECIFIED":
                    case 0:
                        message.history = 0;
                        break;
                    case "ORIGINALLY_SINGLE_PATTERN":
                    case 1:
                        message.history = 1;
                        break;
                    case "FUTURE_MULTI_PATTERN":
                    case 2:
                        message.history = 2;
                        break;
                    }
                    if (object.plural != null)
                        message.plural = String(object.plural);
                    if (object.singular != null)
                        message.singular = String(object.singular);
                    if (object.style) {
                        if (!Array.isArray(object.style))
                            throw TypeError(".google.api.ResourceDescriptor.style: array expected");
                        message.style = [];
                        for (var i = 0; i < object.style.length; ++i)
                            switch (object.style[i]) {
                            default:
                                if (typeof object.style[i] === "number") {
                                    message.style[i] = object.style[i];
                                    break;
                                }
                            case "STYLE_UNSPECIFIED":
                            case 0:
                                message.style[i] = 0;
                                break;
                            case "DECLARATIVE_FRIENDLY":
                            case 1:
                                message.style[i] = 1;
                                break;
                            }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {google.api.ResourceDescriptor} message ResourceDescriptor
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResourceDescriptor.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.pattern = [];
                        object.style = [];
                    }
                    if (options.defaults) {
                        object.type = "";
                        object.nameField = "";
                        object.history = options.enums === String ? "HISTORY_UNSPECIFIED" : 0;
                        object.plural = "";
                        object.singular = "";
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = message.type;
                    if (message.pattern && message.pattern.length) {
                        object.pattern = [];
                        for (var j = 0; j < message.pattern.length; ++j)
                            object.pattern[j] = message.pattern[j];
                    }
                    if (message.nameField != null && message.hasOwnProperty("nameField"))
                        object.nameField = message.nameField;
                    if (message.history != null && message.hasOwnProperty("history"))
                        object.history = options.enums === String ? $root.google.api.ResourceDescriptor.History[message.history] === undefined ? message.history : $root.google.api.ResourceDescriptor.History[message.history] : message.history;
                    if (message.plural != null && message.hasOwnProperty("plural"))
                        object.plural = message.plural;
                    if (message.singular != null && message.hasOwnProperty("singular"))
                        object.singular = message.singular;
                    if (message.style && message.style.length) {
                        object.style = [];
                        for (var j = 0; j < message.style.length; ++j)
                            object.style[j] = options.enums === String ? $root.google.api.ResourceDescriptor.Style[message.style[j]] === undefined ? message.style[j] : $root.google.api.ResourceDescriptor.Style[message.style[j]] : message.style[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this ResourceDescriptor to JSON.
                 * @function toJSON
                 * @memberof google.api.ResourceDescriptor
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResourceDescriptor.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ResourceDescriptor
                 * @function getTypeUrl
                 * @memberof google.api.ResourceDescriptor
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ResourceDescriptor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.ResourceDescriptor";
                };
    
                /**
                 * History enum.
                 * @name google.api.ResourceDescriptor.History
                 * @enum {number}
                 * @property {number} HISTORY_UNSPECIFIED=0 HISTORY_UNSPECIFIED value
                 * @property {number} ORIGINALLY_SINGLE_PATTERN=1 ORIGINALLY_SINGLE_PATTERN value
                 * @property {number} FUTURE_MULTI_PATTERN=2 FUTURE_MULTI_PATTERN value
                 */
                ResourceDescriptor.History = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "HISTORY_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "ORIGINALLY_SINGLE_PATTERN"] = 1;
                    values[valuesById[2] = "FUTURE_MULTI_PATTERN"] = 2;
                    return values;
                })();
    
                /**
                 * Style enum.
                 * @name google.api.ResourceDescriptor.Style
                 * @enum {number}
                 * @property {number} STYLE_UNSPECIFIED=0 STYLE_UNSPECIFIED value
                 * @property {number} DECLARATIVE_FRIENDLY=1 DECLARATIVE_FRIENDLY value
                 */
                ResourceDescriptor.Style = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STYLE_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "DECLARATIVE_FRIENDLY"] = 1;
                    return values;
                })();
    
                return ResourceDescriptor;
            })();
    
            api.ResourceReference = (function() {
    
                /**
                 * Properties of a ResourceReference.
                 * @memberof google.api
                 * @interface IResourceReference
                 * @property {string|null} [type] ResourceReference type
                 * @property {string|null} [childType] ResourceReference childType
                 */
    
                /**
                 * Constructs a new ResourceReference.
                 * @memberof google.api
                 * @classdesc Represents a ResourceReference.
                 * @implements IResourceReference
                 * @constructor
                 * @param {google.api.IResourceReference=} [properties] Properties to set
                 */
                function ResourceReference(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ResourceReference type.
                 * @member {string} type
                 * @memberof google.api.ResourceReference
                 * @instance
                 */
                ResourceReference.prototype.type = "";
    
                /**
                 * ResourceReference childType.
                 * @member {string} childType
                 * @memberof google.api.ResourceReference
                 * @instance
                 */
                ResourceReference.prototype.childType = "";
    
                /**
                 * Creates a new ResourceReference instance using the specified properties.
                 * @function create
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {google.api.IResourceReference=} [properties] Properties to set
                 * @returns {google.api.ResourceReference} ResourceReference instance
                 */
                ResourceReference.create = function create(properties) {
                    return new ResourceReference(properties);
                };
    
                /**
                 * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {google.api.IResourceReference} message ResourceReference message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResourceReference.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                    if (message.childType != null && Object.hasOwnProperty.call(message, "childType"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.childType);
                    return writer;
                };
    
                /**
                 * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {google.api.IResourceReference} message ResourceReference message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ResourceReference.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ResourceReference message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.ResourceReference} ResourceReference
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResourceReference.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.ResourceReference();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.type = reader.string();
                                break;
                            }
                        case 2: {
                                message.childType = reader.string();
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
                 * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.ResourceReference} ResourceReference
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ResourceReference.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ResourceReference message.
                 * @function verify
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ResourceReference.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isString(message.type))
                            return "type: string expected";
                    if (message.childType != null && message.hasOwnProperty("childType"))
                        if (!$util.isString(message.childType))
                            return "childType: string expected";
                    return null;
                };
    
                /**
                 * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.ResourceReference} ResourceReference
                 */
                ResourceReference.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.ResourceReference)
                        return object;
                    var message = new $root.google.api.ResourceReference();
                    if (object.type != null)
                        message.type = String(object.type);
                    if (object.childType != null)
                        message.childType = String(object.childType);
                    return message;
                };
    
                /**
                 * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {google.api.ResourceReference} message ResourceReference
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ResourceReference.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type = "";
                        object.childType = "";
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = message.type;
                    if (message.childType != null && message.hasOwnProperty("childType"))
                        object.childType = message.childType;
                    return object;
                };
    
                /**
                 * Converts this ResourceReference to JSON.
                 * @function toJSON
                 * @memberof google.api.ResourceReference
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ResourceReference.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for ResourceReference
                 * @function getTypeUrl
                 * @memberof google.api.ResourceReference
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ResourceReference.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.ResourceReference";
                };
    
                return ResourceReference;
            })();
    
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
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.JavaSettings(), key, value;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.libraryPackage = reader.string();
                                break;
                            }
                        case 2: {
                                if (message.serviceClassNames === $util.emptyObject)
                                    message.serviceClassNames = {};
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
                                message.serviceClassNames[key] = value;
                                break;
                            }
                        case 3: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
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
                 * Decodes a JavaSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.JavaSettings} JavaSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                JavaSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a JavaSettings message.
                 * @function verify
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                JavaSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.libraryPackage != null && message.hasOwnProperty("libraryPackage"))
                        if (!$util.isString(message.libraryPackage))
                            return "libraryPackage: string expected";
                    if (message.serviceClassNames != null && message.hasOwnProperty("serviceClassNames")) {
                        if (!$util.isObject(message.serviceClassNames))
                            return "serviceClassNames: object expected";
                        var key = Object.keys(message.serviceClassNames);
                        for (var i = 0; i < key.length; ++i)
                            if (!$util.isString(message.serviceClassNames[key[i]]))
                                return "serviceClassNames: string{k:string} expected";
                    }
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a JavaSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.JavaSettings} JavaSettings
                 */
                JavaSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.JavaSettings)
                        return object;
                    var message = new $root.google.api.JavaSettings();
                    if (object.libraryPackage != null)
                        message.libraryPackage = String(object.libraryPackage);
                    if (object.serviceClassNames) {
                        if (typeof object.serviceClassNames !== "object")
                            throw TypeError(".google.api.JavaSettings.serviceClassNames: object expected");
                        message.serviceClassNames = {};
                        for (var keys = Object.keys(object.serviceClassNames), i = 0; i < keys.length; ++i)
                            message.serviceClassNames[keys[i]] = String(object.serviceClassNames[keys[i]]);
                    }
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.JavaSettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a JavaSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {google.api.JavaSettings} message JavaSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                JavaSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.serviceClassNames = {};
                    if (options.defaults) {
                        object.libraryPackage = "";
                        object.common = null;
                    }
                    if (message.libraryPackage != null && message.hasOwnProperty("libraryPackage"))
                        object.libraryPackage = message.libraryPackage;
                    var keys2;
                    if (message.serviceClassNames && (keys2 = Object.keys(message.serviceClassNames)).length) {
                        object.serviceClassNames = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.serviceClassNames[keys2[j]] = message.serviceClassNames[keys2[j]];
                    }
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    return object;
                };
    
                /**
                 * Converts this JavaSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.JavaSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                JavaSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for JavaSettings
                 * @function getTypeUrl
                 * @memberof google.api.JavaSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                JavaSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.JavaSettings";
                };
    
                return JavaSettings;
            })();
    
            api.CppSettings = (function() {
    
                /**
                 * Properties of a CppSettings.
                 * @memberof google.api
                 * @interface ICppSettings
                 * @property {google.api.ICommonLanguageSettings|null} [common] CppSettings common
                 */
    
                /**
                 * Constructs a new CppSettings.
                 * @memberof google.api
                 * @classdesc Represents a CppSettings.
                 * @implements ICppSettings
                 * @constructor
                 * @param {google.api.ICppSettings=} [properties] Properties to set
                 */
                function CppSettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CppSettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.CppSettings
                 * @instance
                 */
                CppSettings.prototype.common = null;
    
                /**
                 * Creates a new CppSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {google.api.ICppSettings=} [properties] Properties to set
                 * @returns {google.api.CppSettings} CppSettings instance
                 */
                CppSettings.create = function create(properties) {
                    return new CppSettings(properties);
                };
    
                /**
                 * Encodes the specified CppSettings message. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {google.api.ICppSettings} message CppSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CppSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified CppSettings message, length delimited. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {google.api.ICppSettings} message CppSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CppSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CppSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.CppSettings} CppSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CppSettings.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CppSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
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
                 * Decodes a CppSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.CppSettings} CppSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CppSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CppSettings message.
                 * @function verify
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CppSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a CppSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.CppSettings} CppSettings
                 */
                CppSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.CppSettings)
                        return object;
                    var message = new $root.google.api.CppSettings();
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.CppSettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a CppSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {google.api.CppSettings} message CppSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CppSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.common = null;
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    return object;
                };
    
                /**
                 * Converts this CppSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.CppSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CppSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for CppSettings
                 * @function getTypeUrl
                 * @memberof google.api.CppSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CppSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.CppSettings";
                };
    
                return CppSettings;
            })();
    
            api.PhpSettings = (function() {
    
                /**
                 * Properties of a PhpSettings.
                 * @memberof google.api
                 * @interface IPhpSettings
                 * @property {google.api.ICommonLanguageSettings|null} [common] PhpSettings common
                 */
    
                /**
                 * Constructs a new PhpSettings.
                 * @memberof google.api
                 * @classdesc Represents a PhpSettings.
                 * @implements IPhpSettings
                 * @constructor
                 * @param {google.api.IPhpSettings=} [properties] Properties to set
                 */
                function PhpSettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PhpSettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.PhpSettings
                 * @instance
                 */
                PhpSettings.prototype.common = null;
    
                /**
                 * Creates a new PhpSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {google.api.IPhpSettings=} [properties] Properties to set
                 * @returns {google.api.PhpSettings} PhpSettings instance
                 */
                PhpSettings.create = function create(properties) {
                    return new PhpSettings(properties);
                };
    
                /**
                 * Encodes the specified PhpSettings message. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {google.api.IPhpSettings} message PhpSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PhpSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified PhpSettings message, length delimited. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {google.api.IPhpSettings} message PhpSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PhpSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PhpSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.PhpSettings} PhpSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PhpSettings.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.PhpSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
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
                 * Decodes a PhpSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.PhpSettings} PhpSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PhpSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PhpSettings message.
                 * @function verify
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PhpSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a PhpSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.PhpSettings} PhpSettings
                 */
                PhpSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.PhpSettings)
                        return object;
                    var message = new $root.google.api.PhpSettings();
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.PhpSettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a PhpSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {google.api.PhpSettings} message PhpSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PhpSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.common = null;
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    return object;
                };
    
                /**
                 * Converts this PhpSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.PhpSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PhpSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for PhpSettings
                 * @function getTypeUrl
                 * @memberof google.api.PhpSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PhpSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.PhpSettings";
                };
    
                return PhpSettings;
            })();
    
            api.PythonSettings = (function() {
    
                /**
                 * Properties of a PythonSettings.
                 * @memberof google.api
                 * @interface IPythonSettings
                 * @property {google.api.ICommonLanguageSettings|null} [common] PythonSettings common
                 */
    
                /**
                 * Constructs a new PythonSettings.
                 * @memberof google.api
                 * @classdesc Represents a PythonSettings.
                 * @implements IPythonSettings
                 * @constructor
                 * @param {google.api.IPythonSettings=} [properties] Properties to set
                 */
                function PythonSettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PythonSettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.PythonSettings
                 * @instance
                 */
                PythonSettings.prototype.common = null;
    
                /**
                 * Creates a new PythonSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {google.api.IPythonSettings=} [properties] Properties to set
                 * @returns {google.api.PythonSettings} PythonSettings instance
                 */
                PythonSettings.create = function create(properties) {
                    return new PythonSettings(properties);
                };
    
                /**
                 * Encodes the specified PythonSettings message. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {google.api.IPythonSettings} message PythonSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PythonSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified PythonSettings message, length delimited. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {google.api.IPythonSettings} message PythonSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PythonSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PythonSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.PythonSettings} PythonSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PythonSettings.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.PythonSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
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
                 * Decodes a PythonSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.PythonSettings} PythonSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PythonSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PythonSettings message.
                 * @function verify
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PythonSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a PythonSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.PythonSettings} PythonSettings
                 */
                PythonSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.PythonSettings)
                        return object;
                    var message = new $root.google.api.PythonSettings();
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.PythonSettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a PythonSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {google.api.PythonSettings} message PythonSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PythonSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.common = null;
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    return object;
                };
    
                /**
                 * Converts this PythonSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.PythonSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PythonSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for PythonSettings
                 * @function getTypeUrl
                 * @memberof google.api.PythonSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PythonSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.PythonSettings";
                };
    
                return PythonSettings;
            })();
    
            api.NodeSettings = (function() {
    
                /**
                 * Properties of a NodeSettings.
                 * @memberof google.api
                 * @interface INodeSettings
                 * @property {google.api.ICommonLanguageSettings|null} [common] NodeSettings common
                 */
    
                /**
                 * Constructs a new NodeSettings.
                 * @memberof google.api
                 * @classdesc Represents a NodeSettings.
                 * @implements INodeSettings
                 * @constructor
                 * @param {google.api.INodeSettings=} [properties] Properties to set
                 */
                function NodeSettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * NodeSettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.NodeSettings
                 * @instance
                 */
                NodeSettings.prototype.common = null;
    
                /**
                 * Creates a new NodeSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {google.api.INodeSettings=} [properties] Properties to set
                 * @returns {google.api.NodeSettings} NodeSettings instance
                 */
                NodeSettings.create = function create(properties) {
                    return new NodeSettings(properties);
                };
    
                /**
                 * Encodes the specified NodeSettings message. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {google.api.INodeSettings} message NodeSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NodeSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified NodeSettings message, length delimited. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {google.api.INodeSettings} message NodeSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NodeSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a NodeSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.NodeSettings} NodeSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NodeSettings.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.NodeSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
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
                 * Decodes a NodeSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.NodeSettings} NodeSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NodeSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a NodeSettings message.
                 * @function verify
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NodeSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a NodeSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.NodeSettings} NodeSettings
                 */
                NodeSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.NodeSettings)
                        return object;
                    var message = new $root.google.api.NodeSettings();
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.NodeSettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a NodeSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {google.api.NodeSettings} message NodeSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NodeSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.common = null;
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    return object;
                };
    
                /**
                 * Converts this NodeSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.NodeSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NodeSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for NodeSettings
                 * @function getTypeUrl
                 * @memberof google.api.NodeSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                NodeSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.NodeSettings";
                };
    
                return NodeSettings;
            })();
    
            api.DotnetSettings = (function() {
    
                /**
                 * Properties of a DotnetSettings.
                 * @memberof google.api
                 * @interface IDotnetSettings
                 * @property {google.api.ICommonLanguageSettings|null} [common] DotnetSettings common
                 * @property {Object.<string,string>|null} [renamedServices] DotnetSettings renamedServices
                 * @property {Object.<string,string>|null} [renamedResources] DotnetSettings renamedResources
                 * @property {Array.<string>|null} [ignoredResources] DotnetSettings ignoredResources
                 * @property {Array.<string>|null} [forcedNamespaceAliases] DotnetSettings forcedNamespaceAliases
                 * @property {Array.<string>|null} [handwrittenSignatures] DotnetSettings handwrittenSignatures
                 */
    
                /**
                 * Constructs a new DotnetSettings.
                 * @memberof google.api
                 * @classdesc Represents a DotnetSettings.
                 * @implements IDotnetSettings
                 * @constructor
                 * @param {google.api.IDotnetSettings=} [properties] Properties to set
                 */
                function DotnetSettings(properties) {
                    this.renamedServices = {};
                    this.renamedResources = {};
                    this.ignoredResources = [];
                    this.forcedNamespaceAliases = [];
                    this.handwrittenSignatures = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DotnetSettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.DotnetSettings
                 * @instance
                 */
                DotnetSettings.prototype.common = null;
    
                /**
                 * DotnetSettings renamedServices.
                 * @member {Object.<string,string>} renamedServices
                 * @memberof google.api.DotnetSettings
                 * @instance
                 */
                DotnetSettings.prototype.renamedServices = $util.emptyObject;
    
                /**
                 * DotnetSettings renamedResources.
                 * @member {Object.<string,string>} renamedResources
                 * @memberof google.api.DotnetSettings
                 * @instance
                 */
                DotnetSettings.prototype.renamedResources = $util.emptyObject;
    
                /**
                 * DotnetSettings ignoredResources.
                 * @member {Array.<string>} ignoredResources
                 * @memberof google.api.DotnetSettings
                 * @instance
                 */
                DotnetSettings.prototype.ignoredResources = $util.emptyArray;
    
                /**
                 * DotnetSettings forcedNamespaceAliases.
                 * @member {Array.<string>} forcedNamespaceAliases
                 * @memberof google.api.DotnetSettings
                 * @instance
                 */
                DotnetSettings.prototype.forcedNamespaceAliases = $util.emptyArray;
    
                /**
                 * DotnetSettings handwrittenSignatures.
                 * @member {Array.<string>} handwrittenSignatures
                 * @memberof google.api.DotnetSettings
                 * @instance
                 */
                DotnetSettings.prototype.handwrittenSignatures = $util.emptyArray;
    
                /**
                 * Creates a new DotnetSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {google.api.IDotnetSettings=} [properties] Properties to set
                 * @returns {google.api.DotnetSettings} DotnetSettings instance
                 */
                DotnetSettings.create = function create(properties) {
                    return new DotnetSettings(properties);
                };
    
                /**
                 * Encodes the specified DotnetSettings message. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {google.api.IDotnetSettings} message DotnetSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DotnetSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.renamedServices != null && Object.hasOwnProperty.call(message, "renamedServices"))
                        for (var keys = Object.keys(message.renamedServices), i = 0; i < keys.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.renamedServices[keys[i]]).ldelim();
                    if (message.renamedResources != null && Object.hasOwnProperty.call(message, "renamedResources"))
                        for (var keys = Object.keys(message.renamedResources), i = 0; i < keys.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.renamedResources[keys[i]]).ldelim();
                    if (message.ignoredResources != null && message.ignoredResources.length)
                        for (var i = 0; i < message.ignoredResources.length; ++i)
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.ignoredResources[i]);
                    if (message.forcedNamespaceAliases != null && message.forcedNamespaceAliases.length)
                        for (var i = 0; i < message.forcedNamespaceAliases.length; ++i)
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.forcedNamespaceAliases[i]);
                    if (message.handwrittenSignatures != null && message.handwrittenSignatures.length)
                        for (var i = 0; i < message.handwrittenSignatures.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.handwrittenSignatures[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified DotnetSettings message, length delimited. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {google.api.IDotnetSettings} message DotnetSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DotnetSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DotnetSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.DotnetSettings} DotnetSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DotnetSettings.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.DotnetSettings(), key, value;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                if (message.renamedServices === $util.emptyObject)
                                    message.renamedServices = {};
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
                                message.renamedServices[key] = value;
                                break;
                            }
                        case 3: {
                                if (message.renamedResources === $util.emptyObject)
                                    message.renamedResources = {};
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
                                message.renamedResources[key] = value;
                                break;
                            }
                        case 4: {
                                if (!(message.ignoredResources && message.ignoredResources.length))
                                    message.ignoredResources = [];
                                message.ignoredResources.push(reader.string());
                                break;
                            }
                        case 5: {
                                if (!(message.forcedNamespaceAliases && message.forcedNamespaceAliases.length))
                                    message.forcedNamespaceAliases = [];
                                message.forcedNamespaceAliases.push(reader.string());
                                break;
                            }
                        case 6: {
                                if (!(message.handwrittenSignatures && message.handwrittenSignatures.length))
                                    message.handwrittenSignatures = [];
                                message.handwrittenSignatures.push(reader.string());
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
                 * Decodes a DotnetSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.DotnetSettings} DotnetSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DotnetSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DotnetSettings message.
                 * @function verify
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DotnetSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    if (message.renamedServices != null && message.hasOwnProperty("renamedServices")) {
                        if (!$util.isObject(message.renamedServices))
                            return "renamedServices: object expected";
                        var key = Object.keys(message.renamedServices);
                        for (var i = 0; i < key.length; ++i)
                            if (!$util.isString(message.renamedServices[key[i]]))
                                return "renamedServices: string{k:string} expected";
                    }
                    if (message.renamedResources != null && message.hasOwnProperty("renamedResources")) {
                        if (!$util.isObject(message.renamedResources))
                            return "renamedResources: object expected";
                        var key = Object.keys(message.renamedResources);
                        for (var i = 0; i < key.length; ++i)
                            if (!$util.isString(message.renamedResources[key[i]]))
                                return "renamedResources: string{k:string} expected";
                    }
                    if (message.ignoredResources != null && message.hasOwnProperty("ignoredResources")) {
                        if (!Array.isArray(message.ignoredResources))
                            return "ignoredResources: array expected";
                        for (var i = 0; i < message.ignoredResources.length; ++i)
                            if (!$util.isString(message.ignoredResources[i]))
                                return "ignoredResources: string[] expected";
                    }
                    if (message.forcedNamespaceAliases != null && message.hasOwnProperty("forcedNamespaceAliases")) {
                        if (!Array.isArray(message.forcedNamespaceAliases))
                            return "forcedNamespaceAliases: array expected";
                        for (var i = 0; i < message.forcedNamespaceAliases.length; ++i)
                            if (!$util.isString(message.forcedNamespaceAliases[i]))
                                return "forcedNamespaceAliases: string[] expected";
                    }
                    if (message.handwrittenSignatures != null && message.hasOwnProperty("handwrittenSignatures")) {
                        if (!Array.isArray(message.handwrittenSignatures))
                            return "handwrittenSignatures: array expected";
                        for (var i = 0; i < message.handwrittenSignatures.length; ++i)
                            if (!$util.isString(message.handwrittenSignatures[i]))
                                return "handwrittenSignatures: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a DotnetSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.DotnetSettings} DotnetSettings
                 */
                DotnetSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.DotnetSettings)
                        return object;
                    var message = new $root.google.api.DotnetSettings();
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.DotnetSettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    if (object.renamedServices) {
                        if (typeof object.renamedServices !== "object")
                            throw TypeError(".google.api.DotnetSettings.renamedServices: object expected");
                        message.renamedServices = {};
                        for (var keys = Object.keys(object.renamedServices), i = 0; i < keys.length; ++i)
                            message.renamedServices[keys[i]] = String(object.renamedServices[keys[i]]);
                    }
                    if (object.renamedResources) {
                        if (typeof object.renamedResources !== "object")
                            throw TypeError(".google.api.DotnetSettings.renamedResources: object expected");
                        message.renamedResources = {};
                        for (var keys = Object.keys(object.renamedResources), i = 0; i < keys.length; ++i)
                            message.renamedResources[keys[i]] = String(object.renamedResources[keys[i]]);
                    }
                    if (object.ignoredResources) {
                        if (!Array.isArray(object.ignoredResources))
                            throw TypeError(".google.api.DotnetSettings.ignoredResources: array expected");
                        message.ignoredResources = [];
                        for (var i = 0; i < object.ignoredResources.length; ++i)
                            message.ignoredResources[i] = String(object.ignoredResources[i]);
                    }
                    if (object.forcedNamespaceAliases) {
                        if (!Array.isArray(object.forcedNamespaceAliases))
                            throw TypeError(".google.api.DotnetSettings.forcedNamespaceAliases: array expected");
                        message.forcedNamespaceAliases = [];
                        for (var i = 0; i < object.forcedNamespaceAliases.length; ++i)
                            message.forcedNamespaceAliases[i] = String(object.forcedNamespaceAliases[i]);
                    }
                    if (object.handwrittenSignatures) {
                        if (!Array.isArray(object.handwrittenSignatures))
                            throw TypeError(".google.api.DotnetSettings.handwrittenSignatures: array expected");
                        message.handwrittenSignatures = [];
                        for (var i = 0; i < object.handwrittenSignatures.length; ++i)
                            message.handwrittenSignatures[i] = String(object.handwrittenSignatures[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DotnetSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {google.api.DotnetSettings} message DotnetSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DotnetSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.ignoredResources = [];
                        object.forcedNamespaceAliases = [];
                        object.handwrittenSignatures = [];
                    }
                    if (options.objects || options.defaults) {
                        object.renamedServices = {};
                        object.renamedResources = {};
                    }
                    if (options.defaults)
                        object.common = null;
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    var keys2;
                    if (message.renamedServices && (keys2 = Object.keys(message.renamedServices)).length) {
                        object.renamedServices = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.renamedServices[keys2[j]] = message.renamedServices[keys2[j]];
                    }
                    if (message.renamedResources && (keys2 = Object.keys(message.renamedResources)).length) {
                        object.renamedResources = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.renamedResources[keys2[j]] = message.renamedResources[keys2[j]];
                    }
                    if (message.ignoredResources && message.ignoredResources.length) {
                        object.ignoredResources = [];
                        for (var j = 0; j < message.ignoredResources.length; ++j)
                            object.ignoredResources[j] = message.ignoredResources[j];
                    }
                    if (message.forcedNamespaceAliases && message.forcedNamespaceAliases.length) {
                        object.forcedNamespaceAliases = [];
                        for (var j = 0; j < message.forcedNamespaceAliases.length; ++j)
                            object.forcedNamespaceAliases[j] = message.forcedNamespaceAliases[j];
                    }
                    if (message.handwrittenSignatures && message.handwrittenSignatures.length) {
                        object.handwrittenSignatures = [];
                        for (var j = 0; j < message.handwrittenSignatures.length; ++j)
                            object.handwrittenSignatures[j] = message.handwrittenSignatures[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this DotnetSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.DotnetSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DotnetSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for DotnetSettings
                 * @function getTypeUrl
                 * @memberof google.api.DotnetSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DotnetSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.DotnetSettings";
                };
    
                return DotnetSettings;
            })();
    
            api.RubySettings = (function() {
    
                /**
                 * Properties of a RubySettings.
                 * @memberof google.api
                 * @interface IRubySettings
                 * @property {google.api.ICommonLanguageSettings|null} [common] RubySettings common
                 */
    
                /**
                 * Constructs a new RubySettings.
                 * @memberof google.api
                 * @classdesc Represents a RubySettings.
                 * @implements IRubySettings
                 * @constructor
                 * @param {google.api.IRubySettings=} [properties] Properties to set
                 */
                function RubySettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * RubySettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.RubySettings
                 * @instance
                 */
                RubySettings.prototype.common = null;
    
                /**
                 * Creates a new RubySettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {google.api.IRubySettings=} [properties] Properties to set
                 * @returns {google.api.RubySettings} RubySettings instance
                 */
                RubySettings.create = function create(properties) {
                    return new RubySettings(properties);
                };
    
                /**
                 * Encodes the specified RubySettings message. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {google.api.IRubySettings} message RubySettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RubySettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified RubySettings message, length delimited. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {google.api.IRubySettings} message RubySettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RubySettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a RubySettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.RubySettings} RubySettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RubySettings.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.RubySettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
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
                 * Decodes a RubySettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.RubySettings} RubySettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RubySettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a RubySettings message.
                 * @function verify
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RubySettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a RubySettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.RubySettings} RubySettings
                 */
                RubySettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.RubySettings)
                        return object;
                    var message = new $root.google.api.RubySettings();
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.RubySettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a RubySettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {google.api.RubySettings} message RubySettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RubySettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.common = null;
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    return object;
                };
    
                /**
                 * Converts this RubySettings to JSON.
                 * @function toJSON
                 * @memberof google.api.RubySettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RubySettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for RubySettings
                 * @function getTypeUrl
                 * @memberof google.api.RubySettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                RubySettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.RubySettings";
                };
    
                return RubySettings;
            })();
    
            api.GoSettings = (function() {
    
                /**
                 * Properties of a GoSettings.
                 * @memberof google.api
                 * @interface IGoSettings
                 * @property {google.api.ICommonLanguageSettings|null} [common] GoSettings common
                 */
    
                /**
                 * Constructs a new GoSettings.
                 * @memberof google.api
                 * @classdesc Represents a GoSettings.
                 * @implements IGoSettings
                 * @constructor
                 * @param {google.api.IGoSettings=} [properties] Properties to set
                 */
                function GoSettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GoSettings common.
                 * @member {google.api.ICommonLanguageSettings|null|undefined} common
                 * @memberof google.api.GoSettings
                 * @instance
                 */
                GoSettings.prototype.common = null;
    
                /**
                 * Creates a new GoSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {google.api.IGoSettings=} [properties] Properties to set
                 * @returns {google.api.GoSettings} GoSettings instance
                 */
                GoSettings.create = function create(properties) {
                    return new GoSettings(properties);
                };
    
                /**
                 * Encodes the specified GoSettings message. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {google.api.IGoSettings} message GoSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GoSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.common != null && Object.hasOwnProperty.call(message, "common"))
                        $root.google.api.CommonLanguageSettings.encode(message.common, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified GoSettings message, length delimited. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {google.api.IGoSettings} message GoSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GoSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GoSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.GoSettings} GoSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GoSettings.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.GoSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.common = $root.google.api.CommonLanguageSettings.decode(reader, reader.uint32());
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
                 * Decodes a GoSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.GoSettings} GoSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GoSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GoSettings message.
                 * @function verify
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GoSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.common != null && message.hasOwnProperty("common")) {
                        var error = $root.google.api.CommonLanguageSettings.verify(message.common);
                        if (error)
                            return "common." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a GoSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.GoSettings} GoSettings
                 */
                GoSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.GoSettings)
                        return object;
                    var message = new $root.google.api.GoSettings();
                    if (object.common != null) {
                        if (typeof object.common !== "object")
                            throw TypeError(".google.api.GoSettings.common: object expected");
                        message.common = $root.google.api.CommonLanguageSettings.fromObject(object.common);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GoSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {google.api.GoSettings} message GoSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GoSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.common = null;
                    if (message.common != null && message.hasOwnProperty("common"))
                        object.common = $root.google.api.CommonLanguageSettings.toObject(message.common, options);
                    return object;
                };
    
                /**
                 * Converts this GoSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.GoSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GoSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for GoSettings
                 * @function getTypeUrl
                 * @memberof google.api.GoSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                GoSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.GoSettings";
                };
    
                return GoSettings;
            })();
    
            api.MethodSettings = (function() {
    
                /**
                 * Properties of a MethodSettings.
                 * @memberof google.api
                 * @interface IMethodSettings
                 * @property {string|null} [selector] MethodSettings selector
                 * @property {google.api.MethodSettings.ILongRunning|null} [longRunning] MethodSettings longRunning
                 * @property {Array.<string>|null} [autoPopulatedFields] MethodSettings autoPopulatedFields
                 */
    
                /**
                 * Constructs a new MethodSettings.
                 * @memberof google.api
                 * @classdesc Represents a MethodSettings.
                 * @implements IMethodSettings
                 * @constructor
                 * @param {google.api.IMethodSettings=} [properties] Properties to set
                 */
                function MethodSettings(properties) {
                    this.autoPopulatedFields = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodSettings selector.
                 * @member {string} selector
                 * @memberof google.api.MethodSettings
                 * @instance
                 */
                MethodSettings.prototype.selector = "";
    
                /**
                 * MethodSettings longRunning.
                 * @member {google.api.MethodSettings.ILongRunning|null|undefined} longRunning
                 * @memberof google.api.MethodSettings
                 * @instance
                 */
                MethodSettings.prototype.longRunning = null;
    
                /**
                 * MethodSettings autoPopulatedFields.
                 * @member {Array.<string>} autoPopulatedFields
                 * @memberof google.api.MethodSettings
                 * @instance
                 */
                MethodSettings.prototype.autoPopulatedFields = $util.emptyArray;
    
                /**
                 * Creates a new MethodSettings instance using the specified properties.
                 * @function create
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {google.api.IMethodSettings=} [properties] Properties to set
                 * @returns {google.api.MethodSettings} MethodSettings instance
                 */
                MethodSettings.create = function create(properties) {
                    return new MethodSettings(properties);
                };
    
                /**
                 * Encodes the specified MethodSettings message. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {google.api.IMethodSettings} message MethodSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.selector != null && Object.hasOwnProperty.call(message, "selector"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.selector);
                    if (message.longRunning != null && Object.hasOwnProperty.call(message, "longRunning"))
                        $root.google.api.MethodSettings.LongRunning.encode(message.longRunning, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.autoPopulatedFields != null && message.autoPopulatedFields.length)
                        for (var i = 0; i < message.autoPopulatedFields.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.autoPopulatedFields[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodSettings message, length delimited. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {google.api.IMethodSettings} message MethodSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.MethodSettings} MethodSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodSettings.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.MethodSettings();
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
                                message.longRunning = $root.google.api.MethodSettings.LongRunning.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                if (!(message.autoPopulatedFields && message.autoPopulatedFields.length))
                                    message.autoPopulatedFields = [];
                                message.autoPopulatedFields.push(reader.string());
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
                 * Decodes a MethodSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.MethodSettings} MethodSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodSettings message.
                 * @function verify
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        if (!$util.isString(message.selector))
                            return "selector: string expected";
                    if (message.longRunning != null && message.hasOwnProperty("longRunning")) {
                        var error = $root.google.api.MethodSettings.LongRunning.verify(message.longRunning);
                        if (error)
                            return "longRunning." + error;
                    }
                    if (message.autoPopulatedFields != null && message.hasOwnProperty("autoPopulatedFields")) {
                        if (!Array.isArray(message.autoPopulatedFields))
                            return "autoPopulatedFields: array expected";
                        for (var i = 0; i < message.autoPopulatedFields.length; ++i)
                            if (!$util.isString(message.autoPopulatedFields[i]))
                                return "autoPopulatedFields: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.MethodSettings} MethodSettings
                 */
                MethodSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.MethodSettings)
                        return object;
                    var message = new $root.google.api.MethodSettings();
                    if (object.selector != null)
                        message.selector = String(object.selector);
                    if (object.longRunning != null) {
                        if (typeof object.longRunning !== "object")
                            throw TypeError(".google.api.MethodSettings.longRunning: object expected");
                        message.longRunning = $root.google.api.MethodSettings.LongRunning.fromObject(object.longRunning);
                    }
                    if (object.autoPopulatedFields) {
                        if (!Array.isArray(object.autoPopulatedFields))
                            throw TypeError(".google.api.MethodSettings.autoPopulatedFields: array expected");
                        message.autoPopulatedFields = [];
                        for (var i = 0; i < object.autoPopulatedFields.length; ++i)
                            message.autoPopulatedFields[i] = String(object.autoPopulatedFields[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {google.api.MethodSettings} message MethodSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.autoPopulatedFields = [];
                    if (options.defaults) {
                        object.selector = "";
                        object.longRunning = null;
                    }
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        object.selector = message.selector;
                    if (message.longRunning != null && message.hasOwnProperty("longRunning"))
                        object.longRunning = $root.google.api.MethodSettings.LongRunning.toObject(message.longRunning, options);
                    if (message.autoPopulatedFields && message.autoPopulatedFields.length) {
                        object.autoPopulatedFields = [];
                        for (var j = 0; j < message.autoPopulatedFields.length; ++j)
                            object.autoPopulatedFields[j] = message.autoPopulatedFields[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this MethodSettings to JSON.
                 * @function toJSON
                 * @memberof google.api.MethodSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Gets the default type url for MethodSettings
                 * @function getTypeUrl
                 * @memberof google.api.MethodSettings
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                MethodSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.api.MethodSettings";
                };
    
                MethodSettings.LongRunning = (function() {
    
                    /**
                     * Properties of a LongRunning.
                     * @memberof google.api.MethodSettings
                     * @interface ILongRunning
                     * @property {google.protobuf.IDuration|null} [initialPollDelay] LongRunning initialPollDelay
                     * @property {number|null} [pollDelayMultiplier] LongRunning pollDelayMultiplier
                     * @property {google.protobuf.IDuration|null} [maxPollDelay] LongRunning maxPollDelay
                     * @property {google.protobuf.IDuration|null} [totalPollTimeout] LongRunning totalPollTimeout
                     */
    
                    /**
                     * Constructs a new LongRunning.
                     * @memberof google.api.MethodSettings
                     * @classdesc Represents a LongRunning.
                     * @implements ILongRunning
                     * @constructor
                     * @param {google.api.MethodSettings.ILongRunning=} [properties] Properties to set
                     */
                    function LongRunning(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * LongRunning initialPollDelay.
                     * @member {google.protobuf.IDuration|null|undefined} initialPollDelay
                     * @memberof google.api.MethodSettings.LongRunning
                     * @instance
                     */
                    LongRunning.prototype.initialPollDelay = null;
    
                    /**
                     * LongRunning pollDelayMultiplier.
                     * @member {number} pollDelayMultiplier
                     * @memberof google.api.MethodSettings.LongRunning
                     * @instance
                     */
                    LongRunning.prototype.pollDelayMultiplier = 0;
    
                    /**
                     * LongRunning maxPollDelay.
                     * @member {google.protobuf.IDuration|null|undefined} maxPollDelay
                     * @memberof google.api.MethodSettings.LongRunning
                     * @instance
                     */
                    LongRunning.prototype.maxPollDelay = null;
    
                    /**
                     * LongRunning totalPollTimeout.
                     * @member {google.protobuf.IDuration|null|undefined} totalPollTimeout
                     * @memberof google.api.MethodSettings.LongRunning
                     * @instance
                     */
                    LongRunning.prototype.totalPollTimeout = null;
    
                    /**
                     * Creates a new LongRunning instance using the specified properties.
                     * @function create
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {google.api.MethodSettings.ILongRunning=} [properties] Properties to set
                     * @returns {google.api.MethodSettings.LongRunning} LongRunning instance
                     */
                    LongRunning.create = function create(properties) {
                        return new LongRunning(properties);
                    };
    
                    /**
                     * Encodes the specified LongRunning message. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                     * @function encode
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {google.api.MethodSettings.ILongRunning} message LongRunning message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LongRunning.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.initialPollDelay != null && Object.hasOwnProperty.call(message, "initialPollDelay"))
                            $root.google.protobuf.Duration.encode(message.initialPollDelay, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.pollDelayMultiplier != null && Object.hasOwnProperty.call(message, "pollDelayMultiplier"))
                            writer.uint32(/* id 2, wireType 5 =*/21).float(message.pollDelayMultiplier);
                        if (message.maxPollDelay != null && Object.hasOwnProperty.call(message, "maxPollDelay"))
                            $root.google.protobuf.Duration.encode(message.maxPollDelay, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.totalPollTimeout != null && Object.hasOwnProperty.call(message, "totalPollTimeout"))
                            $root.google.protobuf.Duration.encode(message.totalPollTimeout, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified LongRunning message, length delimited. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {google.api.MethodSettings.ILongRunning} message LongRunning message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LongRunning.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a LongRunning message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.api.MethodSettings.LongRunning} LongRunning
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LongRunning.decode = function decode(reader, length, error) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.MethodSettings.LongRunning();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            if (tag === error)
                                break;
                            switch (tag >>> 3) {
                            case 1: {
                                    message.initialPollDelay = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                                    break;
                                }
                            case 2: {
                                    message.pollDelayMultiplier = reader.float();
                                    break;
                                }
                            case 3: {
                                    message.maxPollDelay = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                                    break;
                                }
                            case 4: {
                                    message.totalPollTimeout = $root.google.protobuf.Duration.decode(reader, reader.uint32());
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
                     * Decodes a LongRunning message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.api.MethodSettings.LongRunning} LongRunning
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LongRunning.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a LongRunning message.
                     * @function verify
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    LongRunning.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.initialPollDelay != null && message.hasOwnProperty("initialPollDelay")) {
                            var error = $root.google.protobuf.Duration.verify(message.initialPollDelay);
                            if (error)
                                return "initialPollDelay." + error;
                        }
                        if (message.pollDelayMultiplier != null && message.hasOwnProperty("pollDelayMultiplier"))
                            if (typeof message.pollDelayMultiplier !== "number")
                                return "pollDelayMultiplier: number expected";
                        if (message.maxPollDelay != null && message.hasOwnProperty("maxPollDelay")) {
                            var error = $root.google.protobuf.Duration.verify(message.maxPollDelay);
                            if (error)
                                return "maxPollDelay." + error;
                        }
                        if (message.totalPollTimeout != null && message.hasOwnProperty("totalPollTimeout")) {
                            var error = $root.google.protobuf.Duration.verify(message.totalPollTimeout);
                            if (error)
                                return "totalPollTimeout." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a LongRunning message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.api.MethodSettings.LongRunning} LongRunning
                     */
                    LongRunning.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.api.MethodSettings.LongRunning)
                            return object;
                        var message = new $root.google.api.MethodSettings.LongRunning();
                        if (object.initialPollDelay != null) {
                            if (typeof object.initialPollDelay !== "object")
                                throw TypeError(".google.api.MethodSettings.LongRunning.initialPollDelay: object expected");
                            message.initialPollDelay = $root.google.protobuf.Duration.fromObject(object.initialPollDelay);
                        }
                        if (object.pollDelayMultiplier != null)
                            message.pollDelayMultiplier = Number(object.pollDelayMultiplier);
                        if (object.maxPollDelay != null) {
                            if (typeof object.maxPollDelay !== "object")
                                throw TypeError(".google.api.MethodSettings.LongRunning.maxPollDelay: object expected");
                            message.maxPollDelay = $root.google.protobuf.Duration.fromObject(object.maxPollDelay);
                        }
                        if (object.totalPollTimeout != null) {
                            if (typeof object.totalPollTimeout !== "object")
                                throw TypeError(".google.api.MethodSettings.LongRunning.totalPollTimeout: object expected");
                            message.totalPollTimeout = $root.google.protobuf.Duration.fromObject(object.totalPollTimeout);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a LongRunning message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {google.api.MethodSettings.LongRunning} message LongRunning
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LongRunning.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.initialPollDelay = null;
                            object.pollDelayMultiplier = 0;
                            object.maxPollDelay = null;
                            object.totalPollTimeout = null;
                        }
                        if (message.initialPollDelay != null && message.hasOwnProperty("initialPollDelay"))
                            object.initialPollDelay = $root.google.protobuf.Duration.toObject(message.initialPollDelay, options);
                        if (message.pollDelayMultiplier != null && message.hasOwnProperty("pollDelayMultiplier"))
                            object.pollDelayMultiplier = options.json && !isFinite(message.pollDelayMultiplier) ? String(message.pollDelayMultiplier) : message.pollDelayMultiplier;
                        if (message.maxPollDelay != null && message.hasOwnProperty("maxPollDelay"))
                            object.maxPollDelay = $root.google.protobuf.Duration.toObject(message.maxPollDelay, options);
                        if (message.totalPollTimeout != null && message.hasOwnProperty("totalPollTimeout"))
                            object.totalPollTimeout = $root.google.protobuf.Duration.toObject(message.totalPollTimeout, options);
                        return object;
                    };
    
                    /**
                     * Converts this LongRunning to JSON.
                     * @function toJSON
                     * @memberof google.api.MethodSettings.LongRunning
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    LongRunning.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Gets the default type url for LongRunning
                     * @function getTypeUrl
                     * @memberof google.api.MethodSettings.LongRunning
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    LongRunning.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/google.api.MethodSettings.LongRunning";
                    };
    
                    return LongRunning;
                })();
    
                return MethodSettings;
            })();
    
            /**
             * ClientLibraryOrganization enum.
             * @name google.api.ClientLibraryOrganization
             * @enum {number}
             * @property {number} CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED=0 CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED value
             * @property {number} CLOUD=1 CLOUD value
             * @property {number} ADS=2 ADS value
             * @property {number} PHOTOS=3 PHOTOS value
             * @property {number} STREET_VIEW=4 STREET_VIEW value
             * @property {number} SHOPPING=5 SHOPPING value
             * @property {number} GEO=6 GEO value
             * @property {number} GENERATIVE_AI=7 GENERATIVE_AI value
             */
            api.ClientLibraryOrganization = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED"] = 0;
                values[valuesById[1] = "CLOUD"] = 1;
                values[valuesById[2] = "ADS"] = 2;
                values[valuesById[3] = "PHOTOS"] = 3;
                values[valuesById[4] = "STREET_VIEW"] = 4;
                values[valuesById[5] = "SHOPPING"] = 5;
                values[valuesById[6] = "GEO"] = 6;
                values[valuesById[7] = "GENERATIVE_AI"] = 7;
                return values;
            })();
    
            /**
             * ClientLibraryDestination enum.
             * @name google.api.ClientLibraryDestination
             * @enum {number}
             * @property {number} CLIENT_LIBRARY_DESTINATION_UNSPECIFIED=0 CLIENT_LIBRARY_DESTINATION_UNSPECIFIED value
             * @property {number} GITHUB=10 GITHUB value
             * @property {number} PACKAGE_MANAGER=20 PACKAGE_MANAGER value
             */
            api.ClientLibraryDestination = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"] = 0;
                values[valuesById[10] = "GITHUB"] = 10;
                values[valuesById[20] = "PACKAGE_MANAGER"] = 20;
                return values;
            })();
    
            /**
             * LaunchStage enum.
             * @name google.api.LaunchStage
             * @enum {number}
             * @property {number} LAUNCH_STAGE_UNSPECIFIED=0 LAUNCH_STAGE_UNSPECIFIED value
             * @property {number} UNIMPLEMENTED=6 UNIMPLEMENTED value
             * @property {number} PRELAUNCH=7 PRELAUNCH value
             * @property {number} EARLY_ACCESS=1 EARLY_ACCESS value
             * @property {number} ALPHA=2 ALPHA value
             * @property {number} BETA=3 BETA value
             * @property {number} GA=4 GA value
             * @property {number} DEPRECATED=5 DEPRECATED value
             */
            api.LaunchStage = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "LAUNCH_STAGE_UNSPECIFIED"] = 0;
                values[valuesById[6] = "UNIMPLEMENTED"] = 6;
                values[valuesById[7] = "PRELAUNCH"] = 7;
                values[valuesById[1] = "EARLY_ACCESS"] = 1;
                values[valuesById[2] = "ALPHA"] = 2;
                values[valuesById[3] = "BETA"] = 3;
                values[valuesById[4] = "GA"] = 4;
                values[valuesById[5] = "DEPRECATED"] = 5;
                return values;
            })();
    
            return api;
        })();
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @implements IFileDescriptorSet
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.IFileDescriptorProto>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDesc