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

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DoubleValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoolValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StringValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|string|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BytesValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);

            /** FileDescriptorProto edition */
            edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /** FileDescriptorProto edition. */
            public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState);

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration fullName */
                fullName?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration fullName. */
                public fullName: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debugRedact */
            debugRedact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions editionDefaults */
            editionDefaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debugRedact. */
            public debugRedact: boolean;

            /** FieldOptions retention. */
            public retention: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention);

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions editionDefaults. */
            public editionDefaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
            }

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact */
            debugRedact?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact. */
            public debugRedact: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet fieldPresence */
            fieldPresence?: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enumType */
            enumType?: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeatedFieldEncoding */
            repeatedFieldEncoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8Validation */
            utf8Validation?: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet messageEncoding */
            messageEncoding?: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet jsonFormat */
            jsonFormat?: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet fieldPresence. */
            public fieldPresence: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence);

            /** FeatureSet enumType. */
            public enumType: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType);

            /** FeatureSet repeatedFieldEncoding. */
            public repeatedFieldEncoding: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding);

            /** FeatureSet utf8Validation. */
            public utf8Validation: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation);

            /** FeatureSet messageEncoding. */
            public messageEncoding: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding);

            /** FeatureSet jsonFormat. */
            public jsonFormat: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat);

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimumEdition */
            minimumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

            /** FeatureSetDefaults maximumEdition */
            maximumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimumEdition. */
            public minimumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /** FeatureSetDefaults maximumEdition. */
            public maximumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSetEditionDefault features */
                features?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSetEditionDefault features. */
                public features?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /** Annotation semantic. */
                public semantic: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic);

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldMask
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace apps. */
    namespace apps {

        /** Namespace card. */
        namespace card {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a Card. */
                interface ICard {

                    /** Card header */
                    header?: (google.apps.card.v1.Card.ICardHeader|null);

                    /** Card sections */
                    sections?: (google.apps.card.v1.Card.ISection[]|null);

                    /** Card sectionDividerStyle */
                    sectionDividerStyle?: (google.apps.card.v1.Card.DividerStyle|keyof typeof google.apps.card.v1.Card.DividerStyle|null);

                    /** Card cardActions */
                    cardActions?: (google.apps.card.v1.Card.ICardAction[]|null);

                    /** Card name */
                    name?: (string|null);

                    /** Card fixedFooter */
                    fixedFooter?: (google.apps.card.v1.Card.ICardFixedFooter|null);

                    /** Card displayStyle */
                    displayStyle?: (google.apps.card.v1.Card.DisplayStyle|keyof typeof google.apps.card.v1.Card.DisplayStyle|null);

                    /** Card peekCardHeader */
                    peekCardHeader?: (google.apps.card.v1.Card.ICardHeader|null);
                }

                /** Represents a Card. */
                class Card implements ICard {

                    /**
                     * Constructs a new Card.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.ICard);

                    /** Card header. */
                    public header?: (google.apps.card.v1.Card.ICardHeader|null);

                    /** Card sections. */
                    public sections: google.apps.card.v1.Card.ISection[];

                    /** Card sectionDividerStyle. */
                    public sectionDividerStyle: (google.apps.card.v1.Card.DividerStyle|keyof typeof google.apps.card.v1.Card.DividerStyle);

                    /** Card cardActions. */
                    public cardActions: google.apps.card.v1.Card.ICardAction[];

                    /** Card name. */
                    public name: string;

                    /** Card fixedFooter. */
                    public fixedFooter?: (google.apps.card.v1.Card.ICardFixedFooter|null);

                    /** Card displayStyle. */
                    public displayStyle: (google.apps.card.v1.Card.DisplayStyle|keyof typeof google.apps.card.v1.Card.DisplayStyle);

                    /** Card peekCardHeader. */
                    public peekCardHeader?: (google.apps.card.v1.Card.ICardHeader|null);

                    /**
                     * Creates a new Card instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Card instance
                     */
                    public static create(properties?: google.apps.card.v1.ICard): google.apps.card.v1.Card;

                    /**
                     * Encodes the specified Card message. Does not implicitly {@link google.apps.card.v1.Card.verify|verify} messages.
                     * @param message Card message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Card message, length delimited. Does not implicitly {@link google.apps.card.v1.Card.verify|verify} messages.
                     * @param message Card message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Card message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Card
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Card;

                    /**
                     * Decodes a Card message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Card
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Card;

                    /**
                     * Verifies a Card message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Card message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Card
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Card;

                    /**
                     * Creates a plain object from a Card message. Also converts values to other types if specified.
                     * @param message Card
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.Card, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Card to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Card
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Card {

                    /** Properties of a CardHeader. */
                    interface ICardHeader {

                        /** CardHeader title */
                        title?: (string|null);

                        /** CardHeader subtitle */
                        subtitle?: (string|null);

                        /** CardHeader imageType */
                        imageType?: (google.apps.card.v1.Widget.ImageType|keyof typeof google.apps.card.v1.Widget.ImageType|null);

                        /** CardHeader imageUrl */
                        imageUrl?: (string|null);

                        /** CardHeader imageAltText */
                        imageAltText?: (string|null);
                    }

                    /** Represents a CardHeader. */
                    class CardHeader implements ICardHeader {

                        /**
                         * Constructs a new CardHeader.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.apps.card.v1.Card.ICardHeader);

                        /** CardHeader title. */
                        public title: string;

                        /** CardHeader subtitle. */
                        public subtitle: string;

                        /** CardHeader imageType. */
                        public imageType: (google.apps.card.v1.Widget.ImageType|keyof typeof google.apps.card.v1.Widget.ImageType);

                        /** CardHeader imageUrl. */
                        public imageUrl: string;

                        /** CardHeader imageAltText. */
                        public imageAltText: string;

                        /**
                         * Creates a new CardHeader instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CardHeader instance
                         */
                        public static create(properties?: google.apps.card.v1.Card.ICardHeader): google.apps.card.v1.Card.CardHeader;

                        /**
                         * Encodes the specified CardHeader message. Does not implicitly {@link google.apps.card.v1.Card.CardHeader.verify|verify} messages.
                         * @param message CardHeader message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.apps.card.v1.Card.ICardHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CardHeader message, length delimited. Does not implicitly {@link google.apps.card.v1.Card.CardHeader.verify|verify} messages.
                         * @param message CardHeader message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.apps.card.v1.Card.ICardHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CardHeader message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CardHeader
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Card.CardHeader;

                        /**
                         * Decodes a CardHeader message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CardHeader
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Card.CardHeader;

                        /**
                         * Verifies a CardHeader message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CardHeader message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CardHeader
                         */
                        public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Card.CardHeader;

                        /**
                         * Creates a plain object from a CardHeader message. Also converts values to other types if specified.
                         * @param message CardHeader
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.apps.card.v1.Card.CardHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CardHeader to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CardHeader
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Section. */
                    interface ISection {

                        /** Section header */
                        header?: (string|null);

                        /** Section widgets */
                        widgets?: (google.apps.card.v1.IWidget[]|null);

                        /** Section collapsible */
                        collapsible?: (boolean|null);

                        /** Section uncollapsibleWidgetsCount */
                        uncollapsibleWidgetsCount?: (number|null);
                    }

                    /** Represents a Section. */
                    class Section implements ISection {

                        /**
                         * Constructs a new Section.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.apps.card.v1.Card.ISection);

                        /** Section header. */
                        public header: string;

                        /** Section widgets. */
                        public widgets: google.apps.card.v1.IWidget[];

                        /** Section collapsible. */
                        public collapsible: boolean;

                        /** Section uncollapsibleWidgetsCount. */
                        public uncollapsibleWidgetsCount: number;

                        /**
                         * Creates a new Section instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Section instance
                         */
                        public static create(properties?: google.apps.card.v1.Card.ISection): google.apps.card.v1.Card.Section;

                        /**
                         * Encodes the specified Section message. Does not implicitly {@link google.apps.card.v1.Card.Section.verify|verify} messages.
                         * @param message Section message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.apps.card.v1.Card.ISection, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Section message, length delimited. Does not implicitly {@link google.apps.card.v1.Card.Section.verify|verify} messages.
                         * @param message Section message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.apps.card.v1.Card.ISection, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Section message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Section
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Card.Section;

                        /**
                         * Decodes a Section message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Section
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Card.Section;

                        /**
                         * Verifies a Section message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Section message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Section
                         */
                        public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Card.Section;

                        /**
                         * Creates a plain object from a Section message. Also converts values to other types if specified.
                         * @param message Section
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.apps.card.v1.Card.Section, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Section to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Section
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** DividerStyle enum. */
                    enum DividerStyle {
                        DIVIDER_STYLE_UNSPECIFIED = 0,
                        SOLID_DIVIDER = 1,
                        NO_DIVIDER = 2
                    }

                    /** Properties of a CardAction. */
                    interface ICardAction {

                        /** CardAction actionLabel */
                        actionLabel?: (string|null);

                        /** CardAction onClick */
                        onClick?: (google.apps.card.v1.IOnClick|null);
                    }

                    /** Represents a CardAction. */
                    class CardAction implements ICardAction {

                        /**
                         * Constructs a new CardAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.apps.card.v1.Card.ICardAction);

                        /** CardAction actionLabel. */
                        public actionLabel: string;

                        /** CardAction onClick. */
                        public onClick?: (google.apps.card.v1.IOnClick|null);

                        /**
                         * Creates a new CardAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CardAction instance
                         */
                        public static create(properties?: google.apps.card.v1.Card.ICardAction): google.apps.card.v1.Card.CardAction;

                        /**
                         * Encodes the specified CardAction message. Does not implicitly {@link google.apps.card.v1.Card.CardAction.verify|verify} messages.
                         * @param message CardAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.apps.card.v1.Card.ICardAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CardAction message, length delimited. Does not implicitly {@link google.apps.card.v1.Card.CardAction.verify|verify} messages.
                         * @param message CardAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.apps.card.v1.Card.ICardAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CardAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CardAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Card.CardAction;

                        /**
                         * Decodes a CardAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CardAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Card.CardAction;

                        /**
                         * Verifies a CardAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CardAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CardAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Card.CardAction;

                        /**
                         * Creates a plain object from a CardAction message. Also converts values to other types if specified.
                         * @param message CardAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.apps.card.v1.Card.CardAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CardAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CardAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CardFixedFooter. */
                    interface ICardFixedFooter {

                        /** CardFixedFooter primaryButton */
                        primaryButton?: (google.apps.card.v1.IButton|null);

                        /** CardFixedFooter secondaryButton */
                        secondaryButton?: (google.apps.card.v1.IButton|null);
                    }

                    /** Represents a CardFixedFooter. */
                    class CardFixedFooter implements ICardFixedFooter {

                        /**
                         * Constructs a new CardFixedFooter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.apps.card.v1.Card.ICardFixedFooter);

                        /** CardFixedFooter primaryButton. */
                        public primaryButton?: (google.apps.card.v1.IButton|null);

                        /** CardFixedFooter secondaryButton. */
                        public secondaryButton?: (google.apps.card.v1.IButton|null);

                        /**
                         * Creates a new CardFixedFooter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CardFixedFooter instance
                         */
                        public static create(properties?: google.apps.card.v1.Card.ICardFixedFooter): google.apps.card.v1.Card.CardFixedFooter;

                        /**
                         * Encodes the specified CardFixedFooter message. Does not implicitly {@link google.apps.card.v1.Card.CardFixedFooter.verify|verify} messages.
                         * @param message CardFixedFooter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.apps.card.v1.Card.ICardFixedFooter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CardFixedFooter message, length delimited. Does not implicitly {@link google.apps.card.v1.Card.CardFixedFooter.verify|verify} messages.
                         * @param message CardFixedFooter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.apps.card.v1.Card.ICardFixedFooter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CardFixedFooter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CardFixedFooter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Card.CardFixedFooter;

                        /**
                         * Decodes a CardFixedFooter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CardFixedFooter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Card.CardFixedFooter;

                        /**
                         * Verifies a CardFixedFooter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CardFixedFooter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CardFixedFooter
                         */
                        public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Card.CardFixedFooter;

                        /**
                         * Creates a plain object from a CardFixedFooter message. Also converts values to other types if specified.
                         * @param message CardFixedFooter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.apps.card.v1.Card.CardFixedFooter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CardFixedFooter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CardFixedFooter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** DisplayStyle enum. */
                    enum DisplayStyle {
                        DISPLAY_STYLE_UNSPECIFIED = 0,
                        PEEK = 1,
                        REPLACE = 2
                    }
                }

                /** Properties of a Widget. */
                interface IWidget {

                    /** Widget textParagraph */
                    textParagraph?: (google.apps.card.v1.ITextParagraph|null);

                    /** Widget image */
                    image?: (google.apps.card.v1.IImage|null);

                    /** Widget decoratedText */
                    decoratedText?: (google.apps.card.v1.IDecoratedText|null);

                    /** Widget buttonList */
                    buttonList?: (google.apps.card.v1.IButtonList|null);

                    /** Widget textInput */
                    textInput?: (google.apps.card.v1.ITextInput|null);

                    /** Widget selectionInput */
                    selectionInput?: (google.apps.card.v1.ISelectionInput|null);

                    /** Widget dateTimePicker */
                    dateTimePicker?: (google.apps.card.v1.IDateTimePicker|null);

                    /** Widget divider */
                    divider?: (google.apps.card.v1.IDivider|null);

                    /** Widget grid */
                    grid?: (google.apps.card.v1.IGrid|null);

                    /** Widget columns */
                    columns?: (google.apps.card.v1.IColumns|null);

                    /** Widget horizontalAlignment */
                    horizontalAlignment?: (google.apps.card.v1.Widget.HorizontalAlignment|keyof typeof google.apps.card.v1.Widget.HorizontalAlignment|null);
                }

                /** Represents a Widget. */
                class Widget implements IWidget {

                    /**
                     * Constructs a new Widget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IWidget);

                    /** Widget textParagraph. */
                    public textParagraph?: (google.apps.card.v1.ITextParagraph|null);

                    /** Widget image. */
                    public image?: (google.apps.card.v1.IImage|null);

                    /** Widget decoratedText. */
                    public decoratedText?: (google.apps.card.v1.IDecoratedText|null);

                    /** Widget buttonList. */
                    public buttonList?: (google.apps.card.v1.IButtonList|null);

                    /** Widget textInput. */
                    public textInput?: (google.apps.card.v1.ITextInput|null);

                    /** Widget selectionInput. */
                    public selectionInput?: (google.apps.card.v1.ISelectionInput|null);

                    /** Widget dateTimePicker. */
                    public dateTimePicker?: (google.apps.card.v1.IDateTimePicker|null);

                    /** Widget divider. */
                    public divider?: (google.apps.card.v1.IDivider|null);

                    /** Widget grid. */
                    public grid?: (google.apps.card.v1.IGrid|null);

                    /** Widget columns. */
                    public columns?: (google.apps.card.v1.IColumns|null);

                    /** Widget horizontalAlignment. */
                    public horizontalAlignment: (google.apps.card.v1.Widget.HorizontalAlignment|keyof typeof google.apps.card.v1.Widget.HorizontalAlignment);

                    /** Widget data. */
                    public data?: ("textParagraph"|"image"|"decoratedText"|"buttonList"|"textInput"|"selectionInput"|"dateTimePicker"|"divider"|"grid"|"columns");

                    /**
                     * Creates a new Widget instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Widget instance
                     */
                    public static create(properties?: google.apps.card.v1.IWidget): google.apps.card.v1.Widget;

                    /**
                     * Encodes the specified Widget message. Does not implicitly {@link google.apps.card.v1.Widget.verify|verify} messages.
                     * @param message Widget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IWidget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Widget message, length delimited. Does not implicitly {@link google.apps.card.v1.Widget.verify|verify} messages.
                     * @param message Widget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IWidget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Widget message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Widget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Widget;

                    /**
                     * Decodes a Widget message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Widget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Widget;

                    /**
                     * Verifies a Widget message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Widget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Widget
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Widget;

                    /**
                     * Creates a plain object from a Widget message. Also converts values to other types if specified.
                     * @param message Widget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.Widget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Widget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Widget
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Widget {

                    /** ImageType enum. */
                    enum ImageType {
                        SQUARE = 0,
                        CIRCLE = 1
                    }

                    /** HorizontalAlignment enum. */
                    enum HorizontalAlignment {
                        HORIZONTAL_ALIGNMENT_UNSPECIFIED = 0,
                        START = 1,
                        CENTER = 2,
                        END = 3
                    }
                }

                /** Properties of a TextParagraph. */
                interface ITextParagraph {

                    /** TextParagraph text */
                    text?: (string|null);
                }

                /** Represents a TextParagraph. */
                class TextParagraph implements ITextParagraph {

                    /**
                     * Constructs a new TextParagraph.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.ITextParagraph);

                    /** TextParagraph text. */
                    public text: string;

                    /**
                     * Creates a new TextParagraph instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextParagraph instance
                     */
                    public static create(properties?: google.apps.card.v1.ITextParagraph): google.apps.card.v1.TextParagraph;

                    /**
                     * Encodes the specified TextParagraph message. Does not implicitly {@link google.apps.card.v1.TextParagraph.verify|verify} messages.
                     * @param message TextParagraph message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.ITextParagraph, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextParagraph message, length delimited. Does not implicitly {@link google.apps.card.v1.TextParagraph.verify|verify} messages.
                     * @param message TextParagraph message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.ITextParagraph, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextParagraph message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextParagraph
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.TextParagraph;

                    /**
                     * Decodes a TextParagraph message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextParagraph
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.TextParagraph;

                    /**
                     * Verifies a TextParagraph message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextParagraph message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextParagraph
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.TextParagraph;

                    /**
                     * Creates a plain object from a TextParagraph message. Also converts values to other types if specified.
                     * @param message TextParagraph
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.TextParagraph, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextParagraph to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextParagraph
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Image. */
                interface IImage {

                    /** Image imageUrl */
                    imageUrl?: (string|null);

                    /** Image onClick */
                    onClick?: (google.apps.card.v1.IOnClick|null);

                    /** Image altText */
                    altText?: (string|null);
                }

                /** Represents an Image. */
                class Image implements IImage {

                    /**
                     * Constructs a new Image.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IImage);

                    /** Image imageUrl. */
                    public imageUrl: string;

                    /** Image onClick. */
                    public onClick?: (google.apps.card.v1.IOnClick|null);

                    /** Image altText. */
                    public altText: string;

                    /**
                     * Creates a new Image instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Image instance
                     */
                    public static create(properties?: google.apps.card.v1.IImage): google.apps.card.v1.Image;

                    /**
                     * Encodes the specified Image message. Does not implicitly {@link google.apps.card.v1.Image.verify|verify} messages.
                     * @param message Image message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Image message, length delimited. Does not implicitly {@link google.apps.card.v1.Image.verify|verify} messages.
                     * @param message Image message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Image message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Image
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Image;

                    /**
                     * Decodes an Image message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Image
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Image;

                    /**
                     * Verifies an Image message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Image message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Image
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Image;

                    /**
                     * Creates a plain object from an Image message. Also converts values to other types if specified.
                     * @param message Image
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Image to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Image
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Divider. */
                interface IDivider {
                }

                /** Represents a Divider. */
                class Divider implements IDivider {

                    /**
                     * Constructs a new Divider.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IDivider);

                    /**
                     * Creates a new Divider instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Divider instance
                     */
                    public static create(properties?: google.apps.card.v1.IDivider): google.apps.card.v1.Divider;

                    /**
                     * Encodes the specified Divider message. Does not implicitly {@link google.apps.card.v1.Divider.verify|verify} messages.
                     * @param message Divider message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IDivider, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Divider message, length delimited. Does not implicitly {@link google.apps.card.v1.Divider.verify|verify} messages.
                     * @param message Divider message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IDivider, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Divider message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Divider
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Divider;

                    /**
                     * Decodes a Divider message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Divider
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Divider;

                    /**
                     * Verifies a Divider message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Divider message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Divider
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Divider;

                    /**
                     * Creates a plain object from a Divider message. Also converts values to other types if specified.
                     * @param message Divider
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.Divider, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Divider to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Divider
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DecoratedText. */
                interface IDecoratedText {

                    /** DecoratedText icon */
                    icon?: (google.apps.card.v1.IIcon|null);

                    /** DecoratedText startIcon */
                    startIcon?: (google.apps.card.v1.IIcon|null);

                    /** DecoratedText topLabel */
                    topLabel?: (string|null);

                    /** DecoratedText text */
                    text?: (string|null);

                    /** DecoratedText wrapText */
                    wrapText?: (boolean|null);

                    /** DecoratedText bottomLabel */
                    bottomLabel?: (string|null);

                    /** DecoratedText onClick */
                    onClick?: (google.apps.card.v1.IOnClick|null);

                    /** DecoratedText button */
                    button?: (google.apps.card.v1.IButton|null);

                    /** DecoratedText switchControl */
                    switchControl?: (google.apps.card.v1.DecoratedText.ISwitchControl|null);

                    /** DecoratedText endIcon */
                    endIcon?: (google.apps.card.v1.IIcon|null);
                }

                /** Represents a DecoratedText. */
                class DecoratedText implements IDecoratedText {

                    /**
                     * Constructs a new DecoratedText.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IDecoratedText);

                    /** DecoratedText icon. */
                    public icon?: (google.apps.card.v1.IIcon|null);

                    /** DecoratedText startIcon. */
                    public startIcon?: (google.apps.card.v1.IIcon|null);

                    /** DecoratedText topLabel. */
                    public topLabel: string;

                    /** DecoratedText text. */
                    public text: string;

                    /** DecoratedText wrapText. */
                    public wrapText: boolean;

                    /** DecoratedText bottomLabel. */
                    public bottomLabel: string;

                    /** DecoratedText onClick. */
                    public onClick?: (google.apps.card.v1.IOnClick|null);

                    /** DecoratedText button. */
                    public button?: (google.apps.card.v1.IButton|null);

                    /** DecoratedText switchControl. */
                    public switchControl?: (google.apps.card.v1.DecoratedText.ISwitchControl|null);

                    /** DecoratedText endIcon. */
                    public endIcon?: (google.apps.card.v1.IIcon|null);

                    /** DecoratedText control. */
                    public control?: ("button"|"switchControl"|"endIcon");

                    /**
                     * Creates a new DecoratedText instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DecoratedText instance
                     */
                    public static create(properties?: google.apps.card.v1.IDecoratedText): google.apps.card.v1.DecoratedText;

                    /**
                     * Encodes the specified DecoratedText message. Does not implicitly {@link google.apps.card.v1.DecoratedText.verify|verify} messages.
                     * @param message DecoratedText message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IDecoratedText, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DecoratedText message, length delimited. Does not implicitly {@link google.apps.card.v1.DecoratedText.verify|verify} messages.
                     * @param message DecoratedText message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IDecoratedText, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DecoratedText message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DecoratedText
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.DecoratedText;

                    /**
                     * Decodes a DecoratedText message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DecoratedText
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.DecoratedText;

                    /**
                     * Verifies a DecoratedText message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DecoratedText message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DecoratedText
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.DecoratedText;

                    /**
                     * Creates a plain object from a DecoratedText message. Also converts values to other types if specified.
                     * @param message DecoratedText
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.DecoratedText, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DecoratedText to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DecoratedText
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace DecoratedText {

                    /** Properties of a SwitchControl. */
                    interface ISwitchControl {

                        /** SwitchControl name */
                        name?: (string|null);

                        /** SwitchControl value */
                        value?: (string|null);

                        /** SwitchControl selected */
                        selected?: (boolean|null);

                        /** SwitchControl onChangeAction */
                        onChangeAction?: (google.apps.card.v1.IAction|null);

                        /** SwitchControl controlType */
                        controlType?: (google.apps.card.v1.DecoratedText.SwitchControl.ControlType|keyof typeof google.apps.card.v1.DecoratedText.SwitchControl.ControlType|null);
                    }

                    /** Represents a SwitchControl. */
                    class SwitchControl implements ISwitchControl {

                        /**
                         * Constructs a new SwitchControl.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.apps.card.v1.DecoratedText.ISwitchControl);

                        /** SwitchControl name. */
                        public name: string;

                        /** SwitchControl value. */
                        public value: string;

                        /** SwitchControl selected. */
                        public selected: boolean;

                        /** SwitchControl onChangeAction. */
                        public onChangeAction?: (google.apps.card.v1.IAction|null);

                        /** SwitchControl controlType. */
                        public controlType: (google.apps.card.v1.DecoratedText.SwitchControl.ControlType|keyof typeof google.apps.card.v1.DecoratedText.SwitchControl.ControlType);

                        /**
                         * Creates a new SwitchControl instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SwitchControl instance
                         */
                        public static create(properties?: google.apps.card.v1.DecoratedText.ISwitchControl): google.apps.card.v1.DecoratedText.SwitchControl;

                        /**
                         * Encodes the specified SwitchControl message. Does not implicitly {@link google.apps.card.v1.DecoratedText.SwitchControl.verify|verify} messages.
                         * @param message SwitchControl message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.apps.card.v1.DecoratedText.ISwitchControl, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SwitchControl message, length delimited. Does not implicitly {@link google.apps.card.v1.DecoratedText.SwitchControl.verify|verify} messages.
                         * @param message SwitchControl message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.apps.card.v1.DecoratedText.ISwitchControl, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SwitchControl message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SwitchControl
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.DecoratedText.SwitchControl;

                        /**
                         * Decodes a SwitchControl message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SwitchControl
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.DecoratedText.SwitchControl;

                        /**
                         * Verifies a SwitchControl message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SwitchControl message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SwitchControl
                         */
                        public static fromObject(object: { [k: string]: any }): google.apps.card.v1.DecoratedText.SwitchControl;

                        /**
                         * Creates a plain object from a SwitchControl message. Also converts values to other types if specified.
                         * @param message SwitchControl
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.apps.card.v1.DecoratedText.SwitchControl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SwitchControl to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SwitchControl
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace SwitchControl {

                        /** ControlType enum. */
                        enum ControlType {
                            SWITCH = 0,
                            CHECKBOX = 1,
                            CHECK_BOX = 2
                        }
                    }
                }

                /** Properties of a TextInput. */
                interface ITextInput {

                    /** TextInput name */
                    name?: (string|null);

                    /** TextInput label */
                    label?: (string|null);

                    /** TextInput hintText */
                    hintText?: (string|null);

                    /** TextInput value */
                    value?: (string|null);

                    /** TextInput type */
                    type?: (google.apps.card.v1.TextInput.Type|keyof typeof google.apps.card.v1.TextInput.Type|null);

                    /** TextInput onChangeAction */
                    onChangeAction?: (google.apps.card.v1.IAction|null);

                    /** TextInput initialSuggestions */
                    initialSuggestions?: (google.apps.card.v1.ISuggestions|null);

                    /** TextInput autoCompleteAction */
                    autoCompleteAction?: (google.apps.card.v1.IAction|null);

                    /** TextInput placeholderText */
                    placeholderText?: (string|null);
                }

                /** Represents a TextInput. */
                class TextInput implements ITextInput {

                    /**
                     * Constructs a new TextInput.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.ITextInput);

                    /** TextInput name. */
                    public name: string;

                    /** TextInput label. */
                    public label: string;

                    /** TextInput hintText. */
                    public hintText: string;

                    /** TextInput value. */
                    public value: string;

                    /** TextInput type. */
                    public type: (google.apps.card.v1.TextInput.Type|keyof typeof google.apps.card.v1.TextInput.Type);

                    /** TextInput onChangeAction. */
                    public onChangeAction?: (google.apps.card.v1.IAction|null);

                    /** TextInput initialSuggestions. */
                    public initialSuggestions?: (google.apps.card.v1.ISuggestions|null);

                    /** TextInput autoCompleteAction. */
                    public autoCompleteAction?: (google.apps.card.v1.IAction|null);

                    /** TextInput placeholderText. */
                    public placeholderText: string;

                    /**
                     * Creates a new TextInput instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextInput instance
                     */
                    public static create(properties?: google.apps.card.v1.ITextInput): google.apps.card.v1.TextInput;

                    /**
                     * Encodes the specified TextInput message. Does not implicitly {@link google.apps.card.v1.TextInput.verify|verify} messages.
                     * @param message TextInput message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.ITextInput, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextInput message, length delimited. Does not implicitly {@link google.apps.card.v1.TextInput.verify|verify} messages.
                     * @param message TextInput message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.ITextInput, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextInput message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextInput
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.TextInput;

                    /**
                     * Decodes a TextInput message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextInput
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.TextInput;

                    /**
                     * Verifies a TextInput message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextInput message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextInput
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.TextInput;

                    /**
                     * Creates a plain object from a TextInput message. Also converts values to other types if specified.
                     * @param message TextInput
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.TextInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextInput to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextInput
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace TextInput {

                    /** Type enum. */
                    enum Type {
                        SINGLE_LINE = 0,
                        MULTIPLE_LINE = 1
                    }
                }

                /** Properties of a Suggestions. */
                interface ISuggestions {

                    /** Suggestions items */
                    items?: (google.apps.card.v1.Suggestions.ISuggestionItem[]|null);
                }

                /** Represents a Suggestions. */
                class Suggestions implements ISuggestions {

                    /**
                     * Constructs a new Suggestions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.ISuggestions);

                    /** Suggestions items. */
                    public items: google.apps.card.v1.Suggestions.ISuggestionItem[];

                    /**
                     * Creates a new Suggestions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Suggestions instance
                     */
                    public static create(properties?: google.apps.card.v1.ISuggestions): google.apps.card.v1.Suggestions;

                    /**
                     * Encodes the specified Suggestions message. Does not implicitly {@link google.apps.card.v1.Suggestions.verify|verify} messages.
                     * @param message Suggestions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.ISuggestions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Suggestions message, length delimited. Does not implicitly {@link google.apps.card.v1.Suggestions.verify|verify} messages.
                     * @param message Suggestions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.ISuggestions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Suggestions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Suggestions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Suggestions;

                    /**
                     * Decodes a Suggestions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Suggestions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Suggestions;

                    /**
                     * Verifies a Suggestions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Suggestions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Suggestions
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Suggestions;

                    /**
                     * Creates a plain object from a Suggestions message. Also converts values to other types if specified.
                     * @param message Suggestions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.Suggestions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Suggestions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Suggestions
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Suggestions {

                    /** Properties of a SuggestionItem. */
                    interface ISuggestionItem {

                        /** SuggestionItem text */
                        text?: (string|null);
                    }

                    /** Represents a SuggestionItem. */
                    class SuggestionItem implements ISuggestionItem {

                        /**
                         * Constructs a new SuggestionItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.apps.card.v1.Suggestions.ISuggestionItem);

                        /** SuggestionItem text. */
                        public text?: (string|null);

                        /** SuggestionItem content. */
                        public content?: "text";

                        /**
                         * Creates a new SuggestionItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SuggestionItem instance
                         */
                        public static create(properties?: google.apps.card.v1.Suggestions.ISuggestionItem): google.apps.card.v1.Suggestions.SuggestionItem;

                        /**
                         * Encodes the specified SuggestionItem message. Does not implicitly {@link google.apps.card.v1.Suggestions.SuggestionItem.verify|verify} messages.
                         * @param message SuggestionItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.apps.card.v1.Suggestions.ISuggestionItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SuggestionItem message, length delimited. Does not implicitly {@link google.apps.card.v1.Suggestions.SuggestionItem.verify|verify} messages.
                         * @param message SuggestionItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.apps.card.v1.Suggestions.ISuggestionItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SuggestionItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SuggestionItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Suggestions.SuggestionItem;

                        /**
                         * Decodes a SuggestionItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SuggestionItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Suggestions.SuggestionItem;

                        /**
                         * Verifies a SuggestionItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SuggestionItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SuggestionItem
                         */
                        public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Suggestions.SuggestionItem;

                        /**
                         * Creates a plain object from a SuggestionItem message. Also converts values to other types if specified.
                         * @param message SuggestionItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.apps.card.v1.Suggestions.SuggestionItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SuggestionItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SuggestionItem
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a ButtonList. */
                interface IButtonList {

                    /** ButtonList buttons */
                    buttons?: (google.apps.card.v1.IButton[]|null);
                }

                /** Represents a ButtonList. */
                class ButtonList implements IButtonList {

                    /**
                     * Constructs a new ButtonList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IButtonList);

                    /** ButtonList buttons. */
                    public buttons: google.apps.card.v1.IButton[];

                    /**
                     * Creates a new ButtonList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ButtonList instance
                     */
                    public static create(properties?: google.apps.card.v1.IButtonList): google.apps.card.v1.ButtonList;

                    /**
                     * Encodes the specified ButtonList message. Does not implicitly {@link google.apps.card.v1.ButtonList.verify|verify} messages.
                     * @param message ButtonList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IButtonList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ButtonList message, length delimited. Does not implicitly {@link google.apps.card.v1.ButtonList.verify|verify} messages.
                     * @param message ButtonList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IButtonList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ButtonList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ButtonList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.ButtonList;

                    /**
                     * Decodes a ButtonList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ButtonList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.ButtonList;

                    /**
                     * Verifies a ButtonList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ButtonList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ButtonList
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.ButtonList;

                    /**
                     * Creates a plain object from a ButtonList message. Also converts values to other types if specified.
                     * @param message ButtonList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.ButtonList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ButtonList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ButtonList
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SelectionInput. */
                interface ISelectionInput {

                    /** SelectionInput name */
                    name?: (string|null);

                    /** SelectionInput label */
                    label?: (string|null);

                    /** SelectionInput type */
                    type?: (google.apps.card.v1.SelectionInput.SelectionType|keyof typeof google.apps.card.v1.SelectionInput.SelectionType|null);

                    /** SelectionInput items */
                    items?: (google.apps.card.v1.SelectionInput.ISelectionItem[]|null);

                    /** SelectionInput onChangeAction */
                    onChangeAction?: (google.apps.card.v1.IAction|null);

                    /** SelectionInput multiSelectMaxSelectedItems */
                    multiSelectMaxSelectedItems?: (number|null);

                    /** SelectionInput multiSelectMinQueryLength */
                    multiSelectMinQueryLength?: (number|null);

                    /** SelectionInput externalDataSource */
                    externalDataSource?: (google.apps.card.v1.IAction|null);

                    /** SelectionInput platformDataSource */
                    platformDataSource?: (google.apps.card.v1.SelectionInput.IPlatformDataSource|null);
                }

                /** Represents a SelectionInput. */
                class SelectionInput implements ISelectionInput {

                    /**
                     * Constructs a new SelectionInput.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.ISelectionInput);

                    /** SelectionInput name. */
                    public name: string;

                    /** SelectionInput label. */
                    public label: string;

                    /** SelectionInput type. */
                    public type: (google.apps.card.v1.SelectionInput.SelectionType|keyof typeof google.apps.card.v1.SelectionInput.SelectionType);

                    /** SelectionInput items. */
                    public items: google.apps.card.v1.SelectionInput.ISelectionItem[];

                    /** SelectionInput onChangeAction. */
                    public onChangeAction?: (google.apps.card.v1.IAction|null);

                    /** SelectionInput multiSelectMaxSelectedItems. */
                    public multiSelectMaxSelectedItems: number;

                    /** SelectionInput multiSelectMinQueryLength. */
                    public multiSelectMinQueryLength: number;

                    /** SelectionInput externalDataSource. */
                    public externalDataSource?: (google.apps.card.v1.IAction|null);

                    /** SelectionInput platformDataSource. */
                    public platformDataSource?: (google.apps.card.v1.SelectionInput.IPlatformDataSource|null);

                    /** SelectionInput multiSelectDataSource. */
                    public multiSelectDataSource?: ("externalDataSource"|"platformDataSource");

                    /**
                     * Creates a new SelectionInput instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SelectionInput instance
                     */
                    public static create(properties?: google.apps.card.v1.ISelectionInput): google.apps.card.v1.SelectionInput;

                    /**
                     * Encodes the specified SelectionInput message. Does not implicitly {@link google.apps.card.v1.SelectionInput.verify|verify} messages.
                     * @param message SelectionInput message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.ISelectionInput, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SelectionInput message, length delimited. Does not implicitly {@link google.apps.card.v1.SelectionInput.verify|verify} messages.
                     * @param message SelectionInput message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.ISelectionInput, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SelectionInput message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SelectionInput
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.SelectionInput;

                    /**
                     * Decodes a SelectionInput message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SelectionInput
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.SelectionInput;

                    /**
                     * Verifies a SelectionInput message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SelectionInput message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SelectionInput
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.SelectionInput;

                    /**
                     * Creates a plain object from a SelectionInput message. Also converts values to other types if specified.
                     * @param message SelectionInput
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.SelectionInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SelectionInput to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SelectionInput
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SelectionInput {

                    /** SelectionType enum. */
                    enum SelectionType {
                        CHECK_BOX = 0,
                        RADIO_BUTTON = 1,
                        SWITCH = 2,
                        DROPDOWN = 3,
                        MULTI_SELECT = 4
                    }

                    /** Properties of a SelectionItem. */
                    interface ISelectionItem {

                        /** SelectionItem text */
                        text?: (string|null);

                        /** SelectionItem value */
                        value?: (string|null);

                        /** SelectionItem selected */
                        selected?: (boolean|null);

                        /** SelectionItem startIconUri */
                        startIconUri?: (string|null);

                        /** SelectionItem bottomText */
                        bottomText?: (string|null);
                    }

                    /** Represents a SelectionItem. */
                    class SelectionItem implements ISelectionItem {

                        /**
                         * Constructs a new SelectionItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.apps.card.v1.SelectionInput.ISelectionItem);

                        /** SelectionItem text. */
                        public text: string;

                        /** SelectionItem value. */
                        public value: string;

                        /** SelectionItem selected. */
                        public selected: boolean;

                        /** SelectionItem startIconUri. */
                        public startIconUri: string;

                        /** SelectionItem bottomText. */
                        public bottomText: string;

                        /**
                         * Creates a new SelectionItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SelectionItem instance
                         */
                        public static create(properties?: google.apps.card.v1.SelectionInput.ISelectionItem): google.apps.card.v1.SelectionInput.SelectionItem;

                        /**
                         * Encodes the specified SelectionItem message. Does not implicitly {@link google.apps.card.v1.SelectionInput.SelectionItem.verify|verify} messages.
                         * @param message SelectionItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.apps.card.v1.SelectionInput.ISelectionItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SelectionItem message, length delimited. Does not implicitly {@link google.apps.card.v1.SelectionInput.SelectionItem.verify|verify} messages.
                         * @param message SelectionItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.apps.card.v1.SelectionInput.ISelectionItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SelectionItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SelectionItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.SelectionInput.SelectionItem;

                        /**
                         * Decodes a SelectionItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SelectionItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.SelectionInput.SelectionItem;

                        /**
                         * Verifies a SelectionItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SelectionItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SelectionItem
                         */
                        public static fromObject(object: { [k: string]: any }): google.apps.card.v1.SelectionInput.SelectionItem;

                        /**
                         * Creates a plain object from a SelectionItem message. Also converts values to other types if specified.
                         * @param message SelectionItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.apps.card.v1.SelectionInput.SelectionItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SelectionItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SelectionItem
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PlatformDataSource. */
                    interface IPlatformDataSource {

                        /** PlatformDataSource commonDataSource */
                        commonDataSource?: (google.apps.card.v1.SelectionInput.PlatformDataSource.CommonDataSource|keyof typeof google.apps.card.v1.SelectionInput.PlatformDataSource.CommonDataSource|null);
                    }

                    /** Represents a PlatformDataSource. */
                    class PlatformDataSource implements IPlatformDataSource {

                        /**
                         * Constructs a new PlatformDataSource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.apps.card.v1.SelectionInput.IPlatformDataSource);

                        /** PlatformDataSource commonDataSource. */
                        public commonDataSource?: (google.apps.card.v1.SelectionInput.PlatformDataSource.CommonDataSource|keyof typeof google.apps.card.v1.SelectionInput.PlatformDataSource.CommonDataSource|null);

                        /** PlatformDataSource dataSource. */
                        public dataSource?: "commonDataSource";

                        /**
                         * Creates a new PlatformDataSource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PlatformDataSource instance
                         */
                        public static create(properties?: google.apps.card.v1.SelectionInput.IPlatformDataSource): google.apps.card.v1.SelectionInput.PlatformDataSource;

                        /**
                         * Encodes the specified PlatformDataSource message. Does not implicitly {@link google.apps.card.v1.SelectionInput.PlatformDataSource.verify|verify} messages.
                         * @param message PlatformDataSource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.apps.card.v1.SelectionInput.IPlatformDataSource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PlatformDataSource message, length delimited. Does not implicitly {@link google.apps.card.v1.SelectionInput.PlatformDataSource.verify|verify} messages.
                         * @param message PlatformDataSource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.apps.card.v1.SelectionInput.IPlatformDataSource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PlatformDataSource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PlatformDataSource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.SelectionInput.PlatformDataSource;

                        /**
                         * Decodes a PlatformDataSource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PlatformDataSource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.SelectionInput.PlatformDataSource;

                        /**
                         * Verifies a PlatformDataSource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PlatformDataSource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PlatformDataSource
                         */
                        public static fromObject(object: { [k: string]: any }): google.apps.card.v1.SelectionInput.PlatformDataSource;

                        /**
                         * Creates a plain object from a PlatformDataSource message. Also converts values to other types if specified.
                         * @param message PlatformDataSource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.apps.card.v1.SelectionInput.PlatformDataSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PlatformDataSource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PlatformDataSource
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace PlatformDataSource {

                        /** CommonDataSource enum. */
                        enum CommonDataSource {
                            UNKNOWN = 0,
                            USER = 1
                        }
                    }
                }

                /** Properties of a DateTimePicker. */
                interface IDateTimePicker {

                    /** DateTimePicker name */
                    name?: (string|null);

                    /** DateTimePicker label */
                    label?: (string|null);

                    /** DateTimePicker type */
                    type?: (google.apps.card.v1.DateTimePicker.DateTimePickerType|keyof typeof google.apps.card.v1.DateTimePicker.DateTimePickerType|null);

                    /** DateTimePicker valueMsEpoch */
                    valueMsEpoch?: (number|Long|string|null);

                    /** DateTimePicker timezoneOffsetDate */
                    timezoneOffsetDate?: (number|null);

                    /** DateTimePicker onChangeAction */
                    onChangeAction?: (google.apps.card.v1.IAction|null);
                }

                /** Represents a DateTimePicker. */
                class DateTimePicker implements IDateTimePicker {

                    /**
                     * Constructs a new DateTimePicker.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IDateTimePicker);

                    /** DateTimePicker name. */
                    public name: string;

                    /** DateTimePicker label. */
                    public label: string;

                    /** DateTimePicker type. */
                    public type: (google.apps.card.v1.DateTimePicker.DateTimePickerType|keyof typeof google.apps.card.v1.DateTimePicker.DateTimePickerType);

                    /** DateTimePicker valueMsEpoch. */
                    public valueMsEpoch: (number|Long|string);

                    /** DateTimePicker timezoneOffsetDate. */
                    public timezoneOffsetDate: number;

                    /** DateTimePicker onChangeAction. */
                    public onChangeAction?: (google.apps.card.v1.IAction|null);

                    /**
                     * Creates a new DateTimePicker instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DateTimePicker instance
                     */
                    public static create(properties?: google.apps.card.v1.IDateTimePicker): google.apps.card.v1.DateTimePicker;

                    /**
                     * Encodes the specified DateTimePicker message. Does not implicitly {@link google.apps.card.v1.DateTimePicker.verify|verify} messages.
                     * @param message DateTimePicker message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IDateTimePicker, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DateTimePicker message, length delimited. Does not implicitly {@link google.apps.card.v1.DateTimePicker.verify|verify} messages.
                     * @param message DateTimePicker message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IDateTimePicker, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DateTimePicker message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DateTimePicker
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.DateTimePicker;

                    /**
                     * Decodes a DateTimePicker message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DateTimePicker
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.DateTimePicker;

                    /**
                     * Verifies a DateTimePicker message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DateTimePicker message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DateTimePicker
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.DateTimePicker;

                    /**
                     * Creates a plain object from a DateTimePicker message. Also converts values to other types if specified.
                     * @param message DateTimePicker
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.DateTimePicker, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DateTimePicker to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DateTimePicker
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace DateTimePicker {

                    /** DateTimePickerType enum. */
                    enum DateTimePickerType {
                        DATE_AND_TIME = 0,
                        DATE_ONLY = 1,
                        TIME_ONLY = 2
                    }
                }

                /** Properties of a Button. */
                interface IButton {

                    /** Button text */
                    text?: (string|null);

                    /** Button icon */
                    icon?: (google.apps.card.v1.IIcon|null);

                    /** Button color */
                    color?: (google.type.IColor|null);

                    /** Button onClick */
                    onClick?: (google.apps.card.v1.IOnClick|null);

                    /** Button disabled */
                    disabled?: (boolean|null);

                    /** Button altText */
                    altText?: (string|null);
                }

                /** Represents a Button. */
                class Button implements IButton {

                    /**
                     * Constructs a new Button.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IButton);

                    /** Button text. */
                    public text: string;

                    /** Button icon. */
                    public icon?: (google.apps.card.v1.IIcon|null);

                    /** Button color. */
                    public color?: (google.type.IColor|null);

                    /** Button onClick. */
                    public onClick?: (google.apps.card.v1.IOnClick|null);

                    /** Button disabled. */
                    public disabled: boolean;

                    /** Button altText. */
                    public altText: string;

                    /**
                     * Creates a new Button instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Button instance
                     */
                    public static create(properties?: google.apps.card.v1.IButton): google.apps.card.v1.Button;

                    /**
                     * Encodes the specified Button message. Does not implicitly {@link google.apps.card.v1.Button.verify|verify} messages.
                     * @param message Button message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IButton, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Button message, length delimited. Does not implicitly {@link google.apps.card.v1.Button.verify|verify} messages.
                     * @param message Button message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IButton, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Button message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Button
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Button;

                    /**
                     * Decodes a Button message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Button
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Button;

                    /**
                     * Verifies a Button message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Button message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Button
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Button;

                    /**
                     * Creates a plain object from a Button message. Also converts values to other types if specified.
                     * @param message Button
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.Button, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Button to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Button
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Icon. */
                interface IIcon {

                    /** Icon knownIcon */
                    knownIcon?: (string|null);

                    /** Icon iconUrl */
                    iconUrl?: (string|null);

                    /** Icon altText */
                    altText?: (string|null);

                    /** Icon imageType */
                    imageType?: (google.apps.card.v1.Widget.ImageType|keyof typeof google.apps.card.v1.Widget.ImageType|null);
                }

                /** Represents an Icon. */
                class Icon implements IIcon {

                    /**
                     * Constructs a new Icon.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IIcon);

                    /** Icon knownIcon. */
                    public knownIcon?: (string|null);

                    /** Icon iconUrl. */
                    public iconUrl?: (string|null);

                    /** Icon altText. */
                    public altText: string;

                    /** Icon imageType. */
                    public imageType: (google.apps.card.v1.Widget.ImageType|keyof typeof google.apps.card.v1.Widget.ImageType);

                    /** Icon icons. */
                    public icons?: ("knownIcon"|"iconUrl");

                    /**
                     * Creates a new Icon instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Icon instance
                     */
                    public static create(properties?: google.apps.card.v1.IIcon): google.apps.card.v1.Icon;

                    /**
                     * Encodes the specified Icon message. Does not implicitly {@link google.apps.card.v1.Icon.verify|verify} messages.
                     * @param message Icon message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IIcon, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Icon message, length delimited. Does not implicitly {@link google.apps.card.v1.Icon.verify|verify} messages.
                     * @param message Icon message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IIcon, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Icon message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Icon
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Icon;

                    /**
                     * Decodes an Icon message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Icon
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Icon;

                    /**
                     * Verifies an Icon message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Icon message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Icon
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Icon;

                    /**
                     * Creates a plain object from an Icon message. Also converts values to other types if specified.
                     * @param message Icon
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.Icon, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Icon to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Icon
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImageCropStyle. */
                interface IImageCropStyle {

                    /** ImageCropStyle type */
                    type?: (google.apps.card.v1.ImageCropStyle.ImageCropType|keyof typeof google.apps.card.v1.ImageCropStyle.ImageCropType|null);

                    /** ImageCropStyle aspectRatio */
                    aspectRatio?: (number|null);
                }

                /** Represents an ImageCropStyle. */
                class ImageCropStyle implements IImageCropStyle {

                    /**
                     * Constructs a new ImageCropStyle.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IImageCropStyle);

                    /** ImageCropStyle type. */
                    public type: (google.apps.card.v1.ImageCropStyle.ImageCropType|keyof typeof google.apps.card.v1.ImageCropStyle.ImageCropType);

                    /** ImageCropStyle aspectRatio. */
                    public aspectRatio: number;

                    /**
                     * Creates a new ImageCropStyle instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageCropStyle instance
                     */
                    public static create(properties?: google.apps.card.v1.IImageCropStyle): google.apps.card.v1.ImageCropStyle;

                    /**
                     * Encodes the specified ImageCropStyle message. Does not implicitly {@link google.apps.card.v1.ImageCropStyle.verify|verify} messages.
                     * @param message ImageCropStyle message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IImageCropStyle, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageCropStyle message, length delimited. Does not implicitly {@link google.apps.card.v1.ImageCropStyle.verify|verify} messages.
                     * @param message ImageCropStyle message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IImageCropStyle, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageCropStyle message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageCropStyle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.ImageCropStyle;

                    /**
                     * Decodes an ImageCropStyle message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageCropStyle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.ImageCropStyle;

                    /**
                     * Verifies an ImageCropStyle message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageCropStyle message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageCropStyle
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.ImageCropStyle;

                    /**
                     * Creates a plain object from an ImageCropStyle message. Also converts values to other types if specified.
                     * @param message ImageCropStyle
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.ImageCropStyle, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageCropStyle to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageCropStyle
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ImageCropStyle {

                    /** ImageCropType enum. */
                    enum ImageCropType {
                        IMAGE_CROP_TYPE_UNSPECIFIED = 0,
                        SQUARE = 1,
                        CIRCLE = 2,
                        RECTANGLE_CUSTOM = 3,
                        RECTANGLE_4_3 = 4
                    }
                }

                /** Properties of a BorderStyle. */
                interface IBorderStyle {

                    /** BorderStyle type */
                    type?: (google.apps.card.v1.BorderStyle.BorderType|keyof typeof google.apps.card.v1.BorderStyle.BorderType|null);

                    /** BorderStyle strokeColor */
                    strokeColor?: (google.type.IColor|null);

                    /** BorderStyle cornerRadius */
                    cornerRadius?: (number|null);
                }

                /** Represents a BorderStyle. */
                class BorderStyle implements IBorderStyle {

                    /**
                     * Constructs a new BorderStyle.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IBorderStyle);

                    /** BorderStyle type. */
                    public type: (google.apps.card.v1.BorderStyle.BorderType|keyof typeof google.apps.card.v1.BorderStyle.BorderType);

                    /** BorderStyle strokeColor. */
                    public strokeColor?: (google.type.IColor|null);

                    /** BorderStyle cornerRadius. */
                    public cornerRadius: number;

                    /**
                     * Creates a new BorderStyle instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BorderStyle instance
                     */
                    public static create(properties?: google.apps.card.v1.IBorderStyle): google.apps.card.v1.BorderStyle;

                    /**
                     * Encodes the specified BorderStyle message. Does not implicitly {@link google.apps.card.v1.BorderStyle.verify|verify} messages.
                     * @param message BorderStyle message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IBorderStyle, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BorderStyle message, length delimited. Does not implicitly {@link google.apps.card.v1.BorderStyle.verify|verify} messages.
                     * @param message BorderStyle message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IBorderStyle, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BorderStyle message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BorderStyle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.BorderStyle;

                    /**
                     * Decodes a BorderStyle message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BorderStyle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.BorderStyle;

                    /**
                     * Verifies a BorderStyle message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BorderStyle message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BorderStyle
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.BorderStyle;

                    /**
                     * Creates a plain object from a BorderStyle message. Also converts values to other types if specified.
                     * @param message BorderStyle
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.BorderStyle, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BorderStyle to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BorderStyle
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BorderStyle {

                    /** BorderType enum. */
                    enum BorderType {
                        BORDER_TYPE_UNSPECIFIED = 0,
                        NO_BORDER = 1,
                        STROKE = 2
                    }
                }

                /** Properties of an ImageComponent. */
                interface IImageComponent {

                    /** ImageComponent imageUri */
                    imageUri?: (string|null);

                    /** ImageComponent altText */
                    altText?: (string|null);

                    /** ImageComponent cropStyle */
                    cropStyle?: (google.apps.card.v1.IImageCropStyle|null);

                    /** ImageComponent borderStyle */
                    borderStyle?: (google.apps.card.v1.IBorderStyle|null);
                }

                /** Represents an ImageComponent. */
                class ImageComponent implements IImageComponent {

                    /**
                     * Constructs a new ImageComponent.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IImageComponent);

                    /** ImageComponent imageUri. */
                    public imageUri: string;

                    /** ImageComponent altText. */
                    public altText: string;

                    /** ImageComponent cropStyle. */
                    public cropStyle?: (google.apps.card.v1.IImageCropStyle|null);

                    /** ImageComponent borderStyle. */
                    public borderStyle?: (google.apps.card.v1.IBorderStyle|null);

                    /**
                     * Creates a new ImageComponent instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageComponent instance
                     */
                    public static create(properties?: google.apps.card.v1.IImageComponent): google.apps.card.v1.ImageComponent;

                    /**
                     * Encodes the specified ImageComponent message. Does not implicitly {@link google.apps.card.v1.ImageComponent.verify|verify} messages.
                     * @param message ImageComponent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IImageComponent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageComponent message, length delimited. Does not implicitly {@link google.apps.card.v1.ImageComponent.verify|verify} messages.
                     * @param message ImageComponent message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IImageComponent, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageComponent message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageComponent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.ImageComponent;

                    /**
                     * Decodes an ImageComponent message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageComponent
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.ImageComponent;

                    /**
                     * Verifies an ImageComponent message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageComponent message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageComponent
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.ImageComponent;

                    /**
                     * Creates a plain object from an ImageComponent message. Also converts values to other types if specified.
                     * @param message ImageComponent
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.ImageComponent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageComponent to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageComponent
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Grid. */
                interface IGrid {

                    /** Grid title */
                    title?: (string|null);

                    /** Grid items */
                    items?: (google.apps.card.v1.Grid.IGridItem[]|null);

                    /** Grid borderStyle */
                    borderStyle?: (google.apps.card.v1.IBorderStyle|null);

                    /** Grid columnCount */
                    columnCount?: (number|null);

                    /** Grid onClick */
                    onClick?: (google.apps.card.v1.IOnClick|null);
                }

                /** Represents a Grid. */
                class Grid implements IGrid {

                    /**
                     * Constructs a new Grid.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IGrid);

                    /** Grid title. */
                    public title: string;

                    /** Grid items. */
                    public items: google.apps.card.v1.Grid.IGridItem[];

                    /** Grid borderStyle. */
                    public borderStyle?: (google.apps.card.v1.IBorderStyle|null);

                    /** Grid columnCount. */
                    public columnCount: number;

                    /** Grid onClick. */
                    public onClick?: (google.apps.card.v1.IOnClick|null);

                    /**
                     * Creates a new Grid instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Grid instance
                     */
                    public static create(properties?: google.apps.card.v1.IGrid): google.apps.card.v1.Grid;

                    /**
                     * Encodes the specified Grid message. Does not implicitly {@link google.apps.card.v1.Grid.verify|verify} messages.
                     * @param message Grid message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IGrid, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Grid message, length delimited. Does not implicitly {@link google.apps.card.v1.Grid.verify|verify} messages.
                     * @param message Grid message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IGrid, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Grid message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Grid
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Grid;

                    /**
                     * Decodes a Grid message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Grid
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Grid;

                    /**
                     * Verifies a Grid message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Grid message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Grid
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Grid;

                    /**
                     * Creates a plain object from a Grid message. Also converts values to other types if specified.
                     * @param message Grid
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.Grid, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Grid to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Grid
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Grid {

                    /** Properties of a GridItem. */
                    interface IGridItem {

                        /** GridItem id */
                        id?: (string|null);

                        /** GridItem image */
                        image?: (google.apps.card.v1.IImageComponent|null);

                        /** GridItem title */
                        title?: (string|null);

                        /** GridItem subtitle */
                        subtitle?: (string|null);

                        /** GridItem layout */
                        layout?: (google.apps.card.v1.Grid.GridItem.GridItemLayout|keyof typeof google.apps.card.v1.Grid.GridItem.GridItemLayout|null);
                    }

                    /** Represents a GridItem. */
                    class GridItem implements IGridItem {

                        /**
                         * Constructs a new GridItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.apps.card.v1.Grid.IGridItem);

                        /** GridItem id. */
                        public id: string;

                        /** GridItem image. */
                        public image?: (google.apps.card.v1.IImageComponent|null);

                        /** GridItem title. */
                        public title: string;

                        /** GridItem subtitle. */
                        public subtitle: string;

                        /** GridItem layout. */
                        public layout: (google.apps.card.v1.Grid.GridItem.GridItemLayout|keyof typeof google.apps.card.v1.Grid.GridItem.GridItemLayout);

                        /**
                         * Creates a new GridItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GridItem instance
                         */
                        public static create(properties?: google.apps.card.v1.Grid.IGridItem): google.apps.card.v1.Grid.GridItem;

                        /**
                         * Encodes the specified GridItem message. Does not implicitly {@link google.apps.card.v1.Grid.GridItem.verify|verify} messages.
                         * @param message GridItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.apps.card.v1.Grid.IGridItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GridItem message, length delimited. Does not implicitly {@link google.apps.card.v1.Grid.GridItem.verify|verify} messages.
                         * @param message GridItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.apps.card.v1.Grid.IGridItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GridItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GridItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Grid.GridItem;

                        /**
                         * Decodes a GridItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GridItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Grid.GridItem;

                        /**
                         * Verifies a GridItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GridItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GridItem
                         */
                        public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Grid.GridItem;

                        /**
                         * Creates a plain object from a GridItem message. Also converts values to other types if specified.
                         * @param message GridItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.apps.card.v1.Grid.GridItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GridItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GridItem
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace GridItem {

                        /** GridItemLayout enum. */
                        enum GridItemLayout {
                            GRID_ITEM_LAYOUT_UNSPECIFIED = 0,
                            TEXT_BELOW = 1,
                            TEXT_ABOVE = 2
                        }
                    }
                }

                /** Properties of a Columns. */
                interface IColumns {

                    /** Columns columnItems */
                    columnItems?: (google.apps.card.v1.Columns.IColumn[]|null);
                }

                /** Represents a Columns. */
                class Columns implements IColumns {

                    /**
                     * Constructs a new Columns.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IColumns);

                    /** Columns columnItems. */
                    public columnItems: google.apps.card.v1.Columns.IColumn[];

                    /**
                     * Creates a new Columns instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Columns instance
                     */
                    public static create(properties?: google.apps.card.v1.IColumns): google.apps.card.v1.Columns;

                    /**
                     * Encodes the specified Columns message. Does not implicitly {@link google.apps.card.v1.Columns.verify|verify} messages.
                     * @param message Columns message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IColumns, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Columns message, length delimited. Does not implicitly {@link google.apps.card.v1.Columns.verify|verify} messages.
                     * @param message Columns message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IColumns, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Columns message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Columns
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Columns;

                    /**
                     * Decodes a Columns message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Columns
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Columns;

                    /**
                     * Verifies a Columns message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Columns message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Columns
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Columns;

                    /**
                     * Creates a plain object from a Columns message. Also converts values to other types if specified.
                     * @param message Columns
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.Columns, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Columns to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Columns
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Columns {

                    /** Properties of a Column. */
                    interface IColumn {

                        /** Column horizontalSizeStyle */
                        horizontalSizeStyle?: (google.apps.card.v1.Columns.Column.HorizontalSizeStyle|keyof typeof google.apps.card.v1.Columns.Column.HorizontalSizeStyle|null);

                        /** Column horizontalAlignment */
                        horizontalAlignment?: (google.apps.card.v1.Widget.HorizontalAlignment|keyof typeof google.apps.card.v1.Widget.HorizontalAlignment|null);

                        /** Column verticalAlignment */
                        verticalAlignment?: (google.apps.card.v1.Columns.Column.VerticalAlignment|keyof typeof google.apps.card.v1.Columns.Column.VerticalAlignment|null);

                        /** Column widgets */
                        widgets?: (google.apps.card.v1.Columns.Column.IWidgets[]|null);
                    }

                    /** Represents a Column. */
                    class Column implements IColumn {

                        /**
                         * Constructs a new Column.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.apps.card.v1.Columns.IColumn);

                        /** Column horizontalSizeStyle. */
                        public horizontalSizeStyle: (google.apps.card.v1.Columns.Column.HorizontalSizeStyle|keyof typeof google.apps.card.v1.Columns.Column.HorizontalSizeStyle);

                        /** Column horizontalAlignment. */
                        public horizontalAlignment: (google.apps.card.v1.Widget.HorizontalAlignment|keyof typeof google.apps.card.v1.Widget.HorizontalAlignment);

                        /** Column verticalAlignment. */
                        public verticalAlignment: (google.apps.card.v1.Columns.Column.VerticalAlignment|keyof typeof google.apps.card.v1.Columns.Column.VerticalAlignment);

                        /** Column widgets. */
                        public widgets: google.apps.card.v1.Columns.Column.IWidgets[];

                        /**
                         * Creates a new Column instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Column instance
                         */
                        public static create(properties?: google.apps.card.v1.Columns.IColumn): google.apps.card.v1.Columns.Column;

                        /**
                         * Encodes the specified Column message. Does not implicitly {@link google.apps.card.v1.Columns.Column.verify|verify} messages.
                         * @param message Column message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.apps.card.v1.Columns.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Column message, length delimited. Does not implicitly {@link google.apps.card.v1.Columns.Column.verify|verify} messages.
                         * @param message Column message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.apps.card.v1.Columns.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Column message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Column
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Columns.Column;

                        /**
                         * Decodes a Column message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Column
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Columns.Column;

                        /**
                         * Verifies a Column message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Column message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Column
                         */
                        public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Columns.Column;

                        /**
                         * Creates a plain object from a Column message. Also converts values to other types if specified.
                         * @param message Column
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.apps.card.v1.Columns.Column, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Column to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Column
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Column {

                        /** HorizontalSizeStyle enum. */
                        enum HorizontalSizeStyle {
                            HORIZONTAL_SIZE_STYLE_UNSPECIFIED = 0,
                            FILL_AVAILABLE_SPACE = 1,
                            FILL_MINIMUM_SPACE = 2
                        }

                        /** VerticalAlignment enum. */
                        enum VerticalAlignment {
                            VERTICAL_ALIGNMENT_UNSPECIFIED = 0,
                            CENTER = 1,
                            TOP = 2,
                            BOTTOM = 3
                        }

                        /** Properties of a Widgets. */
                        interface IWidgets {

                            /** Widgets textParagraph */
                            textParagraph?: (google.apps.card.v1.ITextParagraph|null);

                            /** Widgets image */
                            image?: (google.apps.card.v1.IImage|null);

                            /** Widgets decoratedText */
                            decoratedText?: (google.apps.card.v1.IDecoratedText|null);

                            /** Widgets buttonList */
                            buttonList?: (google.apps.card.v1.IButtonList|null);

                            /** Widgets textInput */
                            textInput?: (google.apps.card.v1.ITextInput|null);

                            /** Widgets selectionInput */
                            selectionInput?: (google.apps.card.v1.ISelectionInput|null);

                            /** Widgets dateTimePicker */
                            dateTimePicker?: (google.apps.card.v1.IDateTimePicker|null);
                        }

                        /** Represents a Widgets. */
                        class Widgets implements IWidgets {

                            /**
                             * Constructs a new Widgets.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.apps.card.v1.Columns.Column.IWidgets);

                            /** Widgets textParagraph. */
                            public textParagraph?: (google.apps.card.v1.ITextParagraph|null);

                            /** Widgets image. */
                            public image?: (google.apps.card.v1.IImage|null);

                            /** Widgets decoratedText. */
                            public decoratedText?: (google.apps.card.v1.IDecoratedText|null);

                            /** Widgets buttonList. */
                            public buttonList?: (google.apps.card.v1.IButtonList|null);

                            /** Widgets textInput. */
                            public textInput?: (google.apps.card.v1.ITextInput|null);

                            /** Widgets selectionInput. */
                            public selectionInput?: (google.apps.card.v1.ISelectionInput|null);

                            /** Widgets dateTimePicker. */
                            public dateTimePicker?: (google.apps.card.v1.IDateTimePicker|null);

                            /** Widgets data. */
                            public data?: ("textParagraph"|"image"|"decoratedText"|"buttonList"|"textInput"|"selectionInput"|"dateTimePicker");

                            /**
                             * Creates a new Widgets instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Widgets instance
                             */
                            public static create(properties?: google.apps.card.v1.Columns.Column.IWidgets): google.apps.card.v1.Columns.Column.Widgets;

                            /**
                             * Encodes the specified Widgets message. Does not implicitly {@link google.apps.card.v1.Columns.Column.Widgets.verify|verify} messages.
                             * @param message Widgets message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.apps.card.v1.Columns.Column.IWidgets, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Widgets message, length delimited. Does not implicitly {@link google.apps.card.v1.Columns.Column.Widgets.verify|verify} messages.
                             * @param message Widgets message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.apps.card.v1.Columns.Column.IWidgets, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Widgets message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Widgets
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Columns.Column.Widgets;

                            /**
                             * Decodes a Widgets message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Widgets
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Columns.Column.Widgets;

                            /**
                             * Verifies a Widgets message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Widgets message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Widgets
                             */
                            public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Columns.Column.Widgets;

                            /**
                             * Creates a plain object from a Widgets message. Also converts values to other types if specified.
                             * @param message Widgets
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.apps.card.v1.Columns.Column.Widgets, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Widgets to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Widgets
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }

                /** Properties of an OnClick. */
                interface IOnClick {

                    /** OnClick action */
                    action?: (google.apps.card.v1.IAction|null);

                    /** OnClick openLink */
                    openLink?: (google.apps.card.v1.IOpenLink|null);

                    /** OnClick openDynamicLinkAction */
                    openDynamicLinkAction?: (google.apps.card.v1.IAction|null);

                    /** OnClick card */
                    card?: (google.apps.card.v1.ICard|null);
                }

                /** Represents an OnClick. */
                class OnClick implements IOnClick {

                    /**
                     * Constructs a new OnClick.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IOnClick);

                    /** OnClick action. */
                    public action?: (google.apps.card.v1.IAction|null);

                    /** OnClick openLink. */
                    public openLink?: (google.apps.card.v1.IOpenLink|null);

                    /** OnClick openDynamicLinkAction. */
                    public openDynamicLinkAction?: (google.apps.card.v1.IAction|null);

                    /** OnClick card. */
                    public card?: (google.apps.card.v1.ICard|null);

                    /** OnClick data. */
                    public data?: ("action"|"openLink"|"openDynamicLinkAction"|"card");

                    /**
                     * Creates a new OnClick instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OnClick instance
                     */
                    public static create(properties?: google.apps.card.v1.IOnClick): google.apps.card.v1.OnClick;

                    /**
                     * Encodes the specified OnClick message. Does not implicitly {@link google.apps.card.v1.OnClick.verify|verify} messages.
                     * @param message OnClick message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IOnClick, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OnClick message, length delimited. Does not implicitly {@link google.apps.card.v1.OnClick.verify|verify} messages.
                     * @param message OnClick message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IOnClick, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OnClick message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OnClick
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.OnClick;

                    /**
                     * Decodes an OnClick message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OnClick
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.OnClick;

                    /**
                     * Verifies an OnClick message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OnClick message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OnClick
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.OnClick;

                    /**
                     * Creates a plain object from an OnClick message. Also converts values to other types if specified.
                     * @param message OnClick
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.OnClick, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OnClick to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OnClick
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OpenLink. */
                interface IOpenLink {

                    /** OpenLink url */
                    url?: (string|null);

                    /** OpenLink openAs */
                    openAs?: (google.apps.card.v1.OpenLink.OpenAs|keyof typeof google.apps.card.v1.OpenLink.OpenAs|null);

                    /** OpenLink onClose */
                    onClose?: (google.apps.card.v1.OpenLink.OnClose|keyof typeof google.apps.card.v1.OpenLink.OnClose|null);
                }

                /** Represents an OpenLink. */
                class OpenLink implements IOpenLink {

                    /**
                     * Constructs a new OpenLink.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IOpenLink);

                    /** OpenLink url. */
                    public url: string;

                    /** OpenLink openAs. */
                    public openAs: (google.apps.card.v1.OpenLink.OpenAs|keyof typeof google.apps.card.v1.OpenLink.OpenAs);

                    /** OpenLink onClose. */
                    public onClose: (google.apps.card.v1.OpenLink.OnClose|keyof typeof google.apps.card.v1.OpenLink.OnClose);

                    /**
                     * Creates a new OpenLink instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OpenLink instance
                     */
                    public static create(properties?: google.apps.card.v1.IOpenLink): google.apps.card.v1.OpenLink;

                    /**
                     * Encodes the specified OpenLink message. Does not implicitly {@link google.apps.card.v1.OpenLink.verify|verify} messages.
                     * @param message OpenLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IOpenLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OpenLink message, length delimited. Does not implicitly {@link google.apps.card.v1.OpenLink.verify|verify} messages.
                     * @param message OpenLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IOpenLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OpenLink message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OpenLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.OpenLink;

                    /**
                     * Decodes an OpenLink message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OpenLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.OpenLink;

                    /**
                     * Verifies an OpenLink message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OpenLink message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OpenLink
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.OpenLink;

                    /**
                     * Creates a plain object from an OpenLink message. Also converts values to other types if specified.
                     * @param message OpenLink
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.OpenLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OpenLink to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OpenLink
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace OpenLink {

                    /** OpenAs enum. */
                    enum OpenAs {
                        FULL_SIZE = 0,
                        OVERLAY = 1
                    }

                    /** OnClose enum. */
                    enum OnClose {
                        NOTHING = 0,
                        RELOAD = 1
                    }
                }

                /** Properties of an Action. */
                interface IAction {

                    /** Action function */
                    "function"?: (string|null);

                    /** Action parameters */
                    parameters?: (google.apps.card.v1.Action.IActionParameter[]|null);

                    /** Action loadIndicator */
                    loadIndicator?: (google.apps.card.v1.Action.LoadIndicator|keyof typeof google.apps.card.v1.Action.LoadIndicator|null);

                    /** Action persistValues */
                    persistValues?: (boolean|null);

                    /** Action interaction */
                    interaction?: (google.apps.card.v1.Action.Interaction|keyof typeof google.apps.card.v1.Action.Interaction|null);
                }

                /** Represents an Action. */
                class Action implements IAction {

                    /**
                     * Constructs a new Action.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.apps.card.v1.IAction);

                    /** Action function. */
                    public function: string;

                    /** Action parameters. */
                    public parameters: google.apps.card.v1.Action.IActionParameter[];

                    /** Action loadIndicator. */
                    public loadIndicator: (google.apps.card.v1.Action.LoadIndicator|keyof typeof google.apps.card.v1.Action.LoadIndicator);

                    /** Action persistValues. */
                    public persistValues: boolean;

                    /** Action interaction. */
                    public interaction: (google.apps.card.v1.Action.Interaction|keyof typeof google.apps.card.v1.Action.Interaction);

                    /**
                     * Creates a new Action instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Action instance
                     */
                    public static create(properties?: google.apps.card.v1.IAction): google.apps.card.v1.Action;

                    /**
                     * Encodes the specified Action message. Does not implicitly {@link google.apps.card.v1.Action.verify|verify} messages.
                     * @param message Action message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.apps.card.v1.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Action message, length delimited. Does not implicitly {@link google.apps.card.v1.Action.verify|verify} messages.
                     * @param message Action message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.apps.card.v1.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Action message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Action
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Action;

                    /**
                     * Decodes an Action message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Action
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Action;

                    /**
                     * Verifies an Action message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Action message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Action
                     */
                    public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Action;

                    /**
                     * Creates a plain object from an Action message. Also converts values to other types if specified.
                     * @param message Action
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.apps.card.v1.Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Action to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Action
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Action {

                    /** Properties of an ActionParameter. */
                    interface IActionParameter {

                        /** ActionParameter key */
                        key?: (string|null);

                        /** ActionParameter value */
                        value?: (string|null);
                    }

                    /** Represents an ActionParameter. */
                    class ActionParameter implements IActionParameter {

                        /**
                         * Constructs a new ActionParameter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.apps.card.v1.Action.IActionParameter);

                        /** ActionParameter key. */
                        public key: string;

                        /** ActionParameter value. */
                        public value: string;

                        /**
                         * Creates a new ActionParameter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ActionParameter instance
                         */
                        public static create(properties?: google.apps.card.v1.Action.IActionParameter): google.apps.card.v1.Action.ActionParameter;

                        /**
                         * Encodes the specified ActionParameter message. Does not implicitly {@link google.apps.card.v1.Action.ActionParameter.verify|verify} messages.
                         * @param message ActionParameter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.apps.card.v1.Action.IActionParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ActionParameter message, length delimited. Does not implicitly {@link google.apps.card.v1.Action.ActionParameter.verify|verify} messages.
                         * @param message ActionParameter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.apps.card.v1.Action.IActionParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ActionParameter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ActionParameter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.apps.card.v1.Action.ActionParameter;

                        /**
                         * Decodes an ActionParameter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ActionParameter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.apps.card.v1.Action.ActionParameter;

                        /**
                         * Verifies an ActionParameter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ActionParameter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ActionParameter
                         */
                        public static fromObject(object: { [k: string]: any }): google.apps.card.v1.Action.ActionParameter;

                        /**
                         * Creates a plain object from an ActionParameter message. Also converts values to other types if specified.
                         * @param message ActionParameter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.apps.card.v1.Action.ActionParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ActionParameter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ActionParameter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** LoadIndicator enum. */
                    enum LoadIndicator {
                        SPINNER = 0,
                        NONE = 1
                    }

                    /** Interaction enum. */
                    enum Interaction {
                        INTERACTION_UNSPECIFIED = 0,
                        OPEN_DIALOG = 1
                    }
                }
            }
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of a Color. */
        interface IColor {

            /** Color red */
            red?: (number|null);

            /** Color green */
            green?: (number|null);

            /** Color blue */
            blue?: (number|null);

            /** Color alpha */
            alpha?: (google.protobuf.IFloatValue|null);
        }

        /** Represents a Color. */
        class Color implements IColor {

            /**
             * Constructs a new Color.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IColor);

            /** Color red. */
            public red: number;

            /** Color green. */
            public green: number;

            /** Color blue. */
            public blue: number;

            /** Color alpha. */
            public alpha?: (google.protobuf.IFloatValue|null);

            /**
             * Creates a new Color instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Color instance
             */
            public static create(properties?: google.type.IColor): google.type.Color;

            /**
             * Encodes the specified Color message. Does not implicitly {@link google.type.Color.verify|verify} messages.
             * @param message Color message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Color message, length delimited. Does not implicitly {@link google.type.Color.verify|verify} messages.
             * @param message Color message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Color message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Color
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Color;

            /**
             * Decodes a Color message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Color
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Color;

            /**
             * Verifies a Color message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Color message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Color
             */
            public static fromObject(object: { [k: string]: any }): google.type.Color;

            /**
             * Creates a plain object from a Color message. Also converts values to other types if specified.
             * @param message Color
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Color, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Color to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Color
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace chat. */
    namespace chat {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of an ActionStatus. */
            interface IActionStatus {

                /** ActionStatus statusCode */
                statusCode?: (google.rpc.Code|keyof typeof google.rpc.Code|null);

                /** ActionStatus userFacingMessage */
                userFacingMessage?: (string|null);
            }

            /** Represents an ActionStatus. */
            class ActionStatus implements IActionStatus {

                /**
                 * Constructs a new ActionStatus.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IActionStatus);

                /** ActionStatus statusCode. */
                public statusCode: (google.rpc.Code|keyof typeof google.rpc.Code);

                /** ActionStatus userFacingMessage. */
                public userFacingMessage: string;

                /**
                 * Creates a new ActionStatus instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ActionStatus instance
                 */
                public static create(properties?: google.chat.v1.IActionStatus): google.chat.v1.ActionStatus;

                /**
                 * Encodes the specified ActionStatus message. Does not implicitly {@link google.chat.v1.ActionStatus.verify|verify} messages.
                 * @param message ActionStatus message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IActionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ActionStatus message, length delimited. Does not implicitly {@link google.chat.v1.ActionStatus.verify|verify} messages.
                 * @param message ActionStatus message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IActionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ActionStatus message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ActionStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ActionStatus;

                /**
                 * Decodes an ActionStatus message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ActionStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ActionStatus;

                /**
                 * Verifies an ActionStatus message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ActionStatus message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ActionStatus
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.ActionStatus;

                /**
                 * Creates a plain object from an ActionStatus message. Also converts values to other types if specified.
                 * @param message ActionStatus
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.ActionStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ActionStatus to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ActionStatus
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation type */
                type?: (google.chat.v1.AnnotationType|keyof typeof google.chat.v1.AnnotationType|null);

                /** Annotation startIndex */
                startIndex?: (number|null);

                /** Annotation length */
                length?: (number|null);

                /** Annotation userMention */
                userMention?: (google.chat.v1.IUserMentionMetadata|null);

                /** Annotation slashCommand */
                slashCommand?: (google.chat.v1.ISlashCommandMetadata|null);

                /** Annotation richLinkMetadata */
                richLinkMetadata?: (google.chat.v1.IRichLinkMetadata|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IAnnotation);

                /** Annotation type. */
                public type: (google.chat.v1.AnnotationType|keyof typeof google.chat.v1.AnnotationType);

                /** Annotation startIndex. */
                public startIndex?: (number|null);

                /** Annotation length. */
                public length: number;

                /** Annotation userMention. */
                public userMention?: (google.chat.v1.IUserMentionMetadata|null);

                /** Annotation slashCommand. */
                public slashCommand?: (google.chat.v1.ISlashCommandMetadata|null);

                /** Annotation richLinkMetadata. */
                public richLinkMetadata?: (google.chat.v1.IRichLinkMetadata|null);

                /** Annotation _startIndex. */
                public _startIndex?: "startIndex";

                /** Annotation metadata. */
                public metadata?: ("userMention"|"slashCommand"|"richLinkMetadata");

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.chat.v1.IAnnotation): google.chat.v1.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.chat.v1.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.chat.v1.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a UserMentionMetadata. */
            interface IUserMentionMetadata {

                /** UserMentionMetadata user */
                user?: (google.chat.v1.IUser|null);

                /** UserMentionMetadata type */
                type?: (google.chat.v1.UserMentionMetadata.Type|keyof typeof google.chat.v1.UserMentionMetadata.Type|null);
            }

            /** Represents a UserMentionMetadata. */
            class UserMentionMetadata implements IUserMentionMetadata {

                /**
                 * Constructs a new UserMentionMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IUserMentionMetadata);

                /** UserMentionMetadata user. */
                public user?: (google.chat.v1.IUser|null);

                /** UserMentionMetadata type. */
                public type: (google.chat.v1.UserMentionMetadata.Type|keyof typeof google.chat.v1.UserMentionMetadata.Type);

                /**
                 * Creates a new UserMentionMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UserMentionMetadata instance
                 */
                public static create(properties?: google.chat.v1.IUserMentionMetadata): google.chat.v1.UserMentionMetadata;

                /**
                 * Encodes the specified UserMentionMetadata message. Does not implicitly {@link google.chat.v1.UserMentionMetadata.verify|verify} messages.
                 * @param message UserMentionMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IUserMentionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UserMentionMetadata message, length delimited. Does not implicitly {@link google.chat.v1.UserMentionMetadata.verify|verify} messages.
                 * @param message UserMentionMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IUserMentionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UserMentionMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UserMentionMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.UserMentionMetadata;

                /**
                 * Decodes a UserMentionMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UserMentionMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.UserMentionMetadata;

                /**
                 * Verifies a UserMentionMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UserMentionMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UserMentionMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.UserMentionMetadata;

                /**
                 * Creates a plain object from a UserMentionMetadata message. Also converts values to other types if specified.
                 * @param message UserMentionMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.UserMentionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UserMentionMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UserMentionMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace UserMentionMetadata {

                /** Type enum. */
                enum Type {
                    TYPE_UNSPECIFIED = 0,
                    ADD = 1,
                    MENTION = 2
                }
            }

            /** Properties of a SlashCommandMetadata. */
            interface ISlashCommandMetadata {

                /** SlashCommandMetadata bot */
                bot?: (google.chat.v1.IUser|null);

                /** SlashCommandMetadata type */
                type?: (google.chat.v1.SlashCommandMetadata.Type|keyof typeof google.chat.v1.SlashCommandMetadata.Type|null);

                /** SlashCommandMetadata commandName */
                commandName?: (string|null);

                /** SlashCommandMetadata commandId */
                commandId?: (number|Long|string|null);

                /** SlashCommandMetadata triggersDialog */
                triggersDialog?: (boolean|null);
            }

            /** Represents a SlashCommandMetadata. */
            class SlashCommandMetadata implements ISlashCommandMetadata {

                /**
                 * Constructs a new SlashCommandMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.ISlashCommandMetadata);

                /** SlashCommandMetadata bot. */
                public bot?: (google.chat.v1.IUser|null);

                /** SlashCommandMetadata type. */
                public type: (google.chat.v1.SlashCommandMetadata.Type|keyof typeof google.chat.v1.SlashCommandMetadata.Type);

                /** SlashCommandMetadata commandName. */
                public commandName: string;

                /** SlashCommandMetadata commandId. */
                public commandId: (number|Long|string);

                /** SlashCommandMetadata triggersDialog. */
                public triggersDialog: boolean;

                /**
                 * Creates a new SlashCommandMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SlashCommandMetadata instance
                 */
                public static create(properties?: google.chat.v1.ISlashCommandMetadata): google.chat.v1.SlashCommandMetadata;

                /**
                 * Encodes the specified SlashCommandMetadata message. Does not implicitly {@link google.chat.v1.SlashCommandMetadata.verify|verify} messages.
                 * @param message SlashCommandMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.ISlashCommandMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SlashCommandMetadata message, length delimited. Does not implicitly {@link google.chat.v1.SlashCommandMetadata.verify|verify} messages.
                 * @param message SlashCommandMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.ISlashCommandMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SlashCommandMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SlashCommandMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.SlashCommandMetadata;

                /**
                 * Decodes a SlashCommandMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SlashCommandMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.SlashCommandMetadata;

                /**
                 * Verifies a SlashCommandMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SlashCommandMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SlashCommandMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.SlashCommandMetadata;

                /**
                 * Creates a plain object from a SlashCommandMetadata message. Also converts values to other types if specified.
                 * @param message SlashCommandMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.SlashCommandMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SlashCommandMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SlashCommandMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace SlashCommandMetadata {

                /** Type enum. */
                enum Type {
                    TYPE_UNSPECIFIED = 0,
                    ADD = 1,
                    INVOKE = 2
                }
            }

            /** Properties of a RichLinkMetadata. */
            interface IRichLinkMetadata {

                /** RichLinkMetadata uri */
                uri?: (string|null);

                /** RichLinkMetadata richLinkType */
                richLinkType?: (google.chat.v1.RichLinkMetadata.RichLinkType|keyof typeof google.chat.v1.RichLinkMetadata.RichLinkType|null);

                /** RichLinkMetadata driveLinkData */
                driveLinkData?: (google.chat.v1.IDriveLinkData|null);
            }

            /** Represents a RichLinkMetadata. */
            class RichLinkMetadata implements IRichLinkMetadata {

                /**
                 * Constructs a new RichLinkMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IRichLinkMetadata);

                /** RichLinkMetadata uri. */
                public uri: string;

                /** RichLinkMetadata richLinkType. */
                public richLinkType: (google.chat.v1.RichLinkMetadata.RichLinkType|keyof typeof google.chat.v1.RichLinkMetadata.RichLinkType);

                /** RichLinkMetadata driveLinkData. */
                public driveLinkData?: (google.chat.v1.IDriveLinkData|null);

                /** RichLinkMetadata data. */
                public data?: "driveLinkData";

                /**
                 * Creates a new RichLinkMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RichLinkMetadata instance
                 */
                public static create(properties?: google.chat.v1.IRichLinkMetadata): google.chat.v1.RichLinkMetadata;

                /**
                 * Encodes the specified RichLinkMetadata message. Does not implicitly {@link google.chat.v1.RichLinkMetadata.verify|verify} messages.
                 * @param message RichLinkMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IRichLinkMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RichLinkMetadata message, length delimited. Does not implicitly {@link google.chat.v1.RichLinkMetadata.verify|verify} messages.
                 * @param message RichLinkMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IRichLinkMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RichLinkMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RichLinkMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.RichLinkMetadata;

                /**
                 * Decodes a RichLinkMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RichLinkMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.RichLinkMetadata;

                /**
                 * Verifies a RichLinkMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RichLinkMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RichLinkMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.RichLinkMetadata;

                /**
                 * Creates a plain object from a RichLinkMetadata message. Also converts values to other types if specified.
                 * @param message RichLinkMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.RichLinkMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RichLinkMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for RichLinkMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace RichLinkMetadata {

                /** RichLinkType enum. */
                enum RichLinkType {
                    RICH_LINK_TYPE_UNSPECIFIED = 0,
                    DRIVE_FILE = 1
                }
            }

            /** Properties of a DriveLinkData. */
            interface IDriveLinkData {

                /** DriveLinkData driveDataRef */
                driveDataRef?: (google.chat.v1.IDriveDataRef|null);

                /** DriveLinkData mimeType */
                mimeType?: (string|null);
            }

            /** Represents a DriveLinkData. */
            class DriveLinkData implements IDriveLinkData {

                /**
                 * Constructs a new DriveLinkData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IDriveLinkData);

                /** DriveLinkData driveDataRef. */
                public driveDataRef?: (google.chat.v1.IDriveDataRef|null);

                /** DriveLinkData mimeType. */
                public mimeType: string;

                /**
                 * Creates a new DriveLinkData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DriveLinkData instance
                 */
                public static create(properties?: google.chat.v1.IDriveLinkData): google.chat.v1.DriveLinkData;

                /**
                 * Encodes the specified DriveLinkData message. Does not implicitly {@link google.chat.v1.DriveLinkData.verify|verify} messages.
                 * @param message DriveLinkData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IDriveLinkData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DriveLinkData message, length delimited. Does not implicitly {@link google.chat.v1.DriveLinkData.verify|verify} messages.
                 * @param message DriveLinkData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IDriveLinkData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DriveLinkData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DriveLinkData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.DriveLinkData;

                /**
                 * Decodes a DriveLinkData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DriveLinkData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.DriveLinkData;

                /**
                 * Verifies a DriveLinkData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DriveLinkData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DriveLinkData
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.DriveLinkData;

                /**
                 * Creates a plain object from a DriveLinkData message. Also converts values to other types if specified.
                 * @param message DriveLinkData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.DriveLinkData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DriveLinkData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DriveLinkData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** AnnotationType enum. */
            enum AnnotationType {
                ANNOTATION_TYPE_UNSPECIFIED = 0,
                USER_MENTION = 1,
                SLASH_COMMAND = 2,
                RICH_LINK = 3
            }

            /** Properties of an Attachment. */
            interface IAttachment {

                /** Attachment name */
                name?: (string|null);

                /** Attachment contentName */
                contentName?: (string|null);

                /** Attachment contentType */
                contentType?: (string|null);

                /** Attachment attachmentDataRef */
                attachmentDataRef?: (google.chat.v1.IAttachmentDataRef|null);

                /** Attachment driveDataRef */
                driveDataRef?: (google.chat.v1.IDriveDataRef|null);

                /** Attachment thumbnailUri */
                thumbnailUri?: (string|null);

                /** Attachment downloadUri */
                downloadUri?: (string|null);

                /** Attachment source */
                source?: (google.chat.v1.Attachment.Source|keyof typeof google.chat.v1.Attachment.Source|null);
            }

            /** Represents an Attachment. */
            class Attachment implements IAttachment {

                /**
                 * Constructs a new Attachment.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IAttachment);

                /** Attachment name. */
                public name: string;

                /** Attachment contentName. */
                public contentName: string;

                /** Attachment contentType. */
                public contentType: string;

                /** Attachment attachmentDataRef. */
                public attachmentDataRef?: (google.chat.v1.IAttachmentDataRef|null);

                /** Attachment driveDataRef. */
                public driveDataRef?: (google.chat.v1.IDriveDataRef|null);

                /** Attachment thumbnailUri. */
                public thumbnailUri: string;

                /** Attachment downloadUri. */
                public downloadUri: string;

                /** Attachment source. */
                public source: (google.chat.v1.Attachment.Source|keyof typeof google.chat.v1.Attachment.Source);

                /** Attachment dataRef. */
                public dataRef?: ("attachmentDataRef"|"driveDataRef");

                /**
                 * Creates a new Attachment instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Attachment instance
                 */
                public static create(properties?: google.chat.v1.IAttachment): google.chat.v1.Attachment;

                /**
                 * Encodes the specified Attachment message. Does not implicitly {@link google.chat.v1.Attachment.verify|verify} messages.
                 * @param message Attachment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Attachment message, length delimited. Does not implicitly {@link google.chat.v1.Attachment.verify|verify} messages.
                 * @param message Attachment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Attachment message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Attachment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.Attachment;

                /**
                 * Decodes an Attachment message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Attachment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.Attachment;

                /**
                 * Verifies an Attachment message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Attachment message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Attachment
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.Attachment;

                /**
                 * Creates a plain object from an Attachment message. Also converts values to other types if specified.
                 * @param message Attachment
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.Attachment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Attachment to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Attachment
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Attachment {

                /** Source enum. */
                enum Source {
                    SOURCE_UNSPECIFIED = 0,
                    DRIVE_FILE = 1,
                    UPLOADED_CONTENT = 2
                }
            }

            /** Properties of a DriveDataRef. */
            interface IDriveDataRef {

                /** DriveDataRef driveFileId */
                driveFileId?: (string|null);
            }

            /** Represents a DriveDataRef. */
            class DriveDataRef implements IDriveDataRef {

                /**
                 * Constructs a new DriveDataRef.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IDriveDataRef);

                /** DriveDataRef driveFileId. */
                public driveFileId: string;

                /**
                 * Creates a new DriveDataRef instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DriveDataRef instance
                 */
                public static create(properties?: google.chat.v1.IDriveDataRef): google.chat.v1.DriveDataRef;

                /**
                 * Encodes the specified DriveDataRef message. Does not implicitly {@link google.chat.v1.DriveDataRef.verify|verify} messages.
                 * @param message DriveDataRef message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IDriveDataRef, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DriveDataRef message, length delimited. Does not implicitly {@link google.chat.v1.DriveDataRef.verify|verify} messages.
                 * @param message DriveDataRef message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IDriveDataRef, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DriveDataRef message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DriveDataRef
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.DriveDataRef;

                /**
                 * Decodes a DriveDataRef message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DriveDataRef
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.DriveDataRef;

                /**
                 * Verifies a DriveDataRef message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DriveDataRef message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DriveDataRef
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.DriveDataRef;

                /**
                 * Creates a plain object from a DriveDataRef message. Also converts values to other types if specified.
                 * @param message DriveDataRef
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.DriveDataRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DriveDataRef to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DriveDataRef
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AttachmentDataRef. */
            interface IAttachmentDataRef {

                /** AttachmentDataRef resourceName */
                resourceName?: (string|null);

                /** AttachmentDataRef attachmentUploadToken */
                attachmentUploadToken?: (string|null);
            }

            /** Represents an AttachmentDataRef. */
            class AttachmentDataRef implements IAttachmentDataRef {

                /**
                 * Constructs a new AttachmentDataRef.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IAttachmentDataRef);

                /** AttachmentDataRef resourceName. */
                public resourceName: string;

                /** AttachmentDataRef attachmentUploadToken. */
                public attachmentUploadToken: string;

                /**
                 * Creates a new AttachmentDataRef instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AttachmentDataRef instance
                 */
                public static create(properties?: google.chat.v1.IAttachmentDataRef): google.chat.v1.AttachmentDataRef;

                /**
                 * Encodes the specified AttachmentDataRef message. Does not implicitly {@link google.chat.v1.AttachmentDataRef.verify|verify} messages.
                 * @param message AttachmentDataRef message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IAttachmentDataRef, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AttachmentDataRef message, length delimited. Does not implicitly {@link google.chat.v1.AttachmentDataRef.verify|verify} messages.
                 * @param message AttachmentDataRef message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IAttachmentDataRef, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AttachmentDataRef message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AttachmentDataRef
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.AttachmentDataRef;

                /**
                 * Decodes an AttachmentDataRef message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AttachmentDataRef
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.AttachmentDataRef;

                /**
                 * Verifies an AttachmentDataRef message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AttachmentDataRef message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AttachmentDataRef
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.AttachmentDataRef;

                /**
                 * Creates a plain object from an AttachmentDataRef message. Also converts values to other types if specified.
                 * @param message AttachmentDataRef
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.AttachmentDataRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AttachmentDataRef to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AttachmentDataRef
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetAttachmentRequest. */
            interface IGetAttachmentRequest {

                /** GetAttachmentRequest name */
                name?: (string|null);
            }

            /** Represents a GetAttachmentRequest. */
            class GetAttachmentRequest implements IGetAttachmentRequest {

                /**
                 * Constructs a new GetAttachmentRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IGetAttachmentRequest);

                /** GetAttachmentRequest name. */
                public name: string;

                /**
                 * Creates a new GetAttachmentRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetAttachmentRequest instance
                 */
                public static create(properties?: google.chat.v1.IGetAttachmentRequest): google.chat.v1.GetAttachmentRequest;

                /**
                 * Encodes the specified GetAttachmentRequest message. Does not implicitly {@link google.chat.v1.GetAttachmentRequest.verify|verify} messages.
                 * @param message GetAttachmentRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IGetAttachmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetAttachmentRequest message, length delimited. Does not implicitly {@link google.chat.v1.GetAttachmentRequest.verify|verify} messages.
                 * @param message GetAttachmentRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IGetAttachmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetAttachmentRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetAttachmentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.GetAttachmentRequest;

                /**
                 * Decodes a GetAttachmentRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetAttachmentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.GetAttachmentRequest;

                /**
                 * Verifies a GetAttachmentRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetAttachmentRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetAttachmentRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.GetAttachmentRequest;

                /**
                 * Creates a plain object from a GetAttachmentRequest message. Also converts values to other types if specified.
                 * @param message GetAttachmentRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.GetAttachmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetAttachmentRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetAttachmentRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UploadAttachmentRequest. */
            interface IUploadAttachmentRequest {

                /** UploadAttachmentRequest parent */
                parent?: (string|null);

                /** UploadAttachmentRequest filename */
                filename?: (string|null);
            }

            /** Represents an UploadAttachmentRequest. */
            class UploadAttachmentRequest implements IUploadAttachmentRequest {

                /**
                 * Constructs a new UploadAttachmentRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IUploadAttachmentRequest);

                /** UploadAttachmentRequest parent. */
                public parent: string;

                /** UploadAttachmentRequest filename. */
                public filename: string;

                /**
                 * Creates a new UploadAttachmentRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UploadAttachmentRequest instance
                 */
                public static create(properties?: google.chat.v1.IUploadAttachmentRequest): google.chat.v1.UploadAttachmentRequest;

                /**
                 * Encodes the specified UploadAttachmentRequest message. Does not implicitly {@link google.chat.v1.UploadAttachmentRequest.verify|verify} messages.
                 * @param message UploadAttachmentRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IUploadAttachmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UploadAttachmentRequest message, length delimited. Does not implicitly {@link google.chat.v1.UploadAttachmentRequest.verify|verify} messages.
                 * @param message UploadAttachmentRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IUploadAttachmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UploadAttachmentRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UploadAttachmentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.UploadAttachmentRequest;

                /**
                 * Decodes an UploadAttachmentRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UploadAttachmentRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.UploadAttachmentRequest;

                /**
                 * Verifies an UploadAttachmentRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UploadAttachmentRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UploadAttachmentRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.UploadAttachmentRequest;

                /**
                 * Creates a plain object from an UploadAttachmentRequest message. Also converts values to other types if specified.
                 * @param message UploadAttachmentRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.UploadAttachmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UploadAttachmentRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UploadAttachmentRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UploadAttachmentResponse. */
            interface IUploadAttachmentResponse {

                /** UploadAttachmentResponse attachmentDataRef */
                attachmentDataRef?: (google.chat.v1.IAttachmentDataRef|null);
            }

            /** Represents an UploadAttachmentResponse. */
            class UploadAttachmentResponse implements IUploadAttachmentResponse {

                /**
                 * Constructs a new UploadAttachmentResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IUploadAttachmentResponse);

                /** UploadAttachmentResponse attachmentDataRef. */
                public attachmentDataRef?: (google.chat.v1.IAttachmentDataRef|null);

                /**
                 * Creates a new UploadAttachmentResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UploadAttachmentResponse instance
                 */
                public static create(properties?: google.chat.v1.IUploadAttachmentResponse): google.chat.v1.UploadAttachmentResponse;

                /**
                 * Encodes the specified UploadAttachmentResponse message. Does not implicitly {@link google.chat.v1.UploadAttachmentResponse.verify|verify} messages.
                 * @param message UploadAttachmentResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IUploadAttachmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UploadAttachmentResponse message, length delimited. Does not implicitly {@link google.chat.v1.UploadAttachmentResponse.verify|verify} messages.
                 * @param message UploadAttachmentResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IUploadAttachmentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UploadAttachmentResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UploadAttachmentResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.UploadAttachmentResponse;

                /**
                 * Decodes an UploadAttachmentResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UploadAttachmentResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.UploadAttachmentResponse;

                /**
                 * Verifies an UploadAttachmentResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UploadAttachmentResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UploadAttachmentResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.UploadAttachmentResponse;

                /**
                 * Creates a plain object from an UploadAttachmentResponse message. Also converts values to other types if specified.
                 * @param message UploadAttachmentResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.UploadAttachmentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UploadAttachmentResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UploadAttachmentResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a User. */
            interface IUser {

                /** User name */
                name?: (string|null);

                /** User displayName */
                displayName?: (string|null);

                /** User domainId */
                domainId?: (string|null);

                /** User type */
                type?: (google.chat.v1.User.Type|keyof typeof google.chat.v1.User.Type|null);

                /** User isAnonymous */
                isAnonymous?: (boolean|null);
            }

            /** Represents a User. */
            class User implements IUser {

                /**
                 * Constructs a new User.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IUser);

                /** User name. */
                public name: string;

                /** User displayName. */
                public displayName: string;

                /** User domainId. */
                public domainId: string;

                /** User type. */
                public type: (google.chat.v1.User.Type|keyof typeof google.chat.v1.User.Type);

                /** User isAnonymous. */
                public isAnonymous: boolean;

                /**
                 * Creates a new User instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns User instance
                 */
                public static create(properties?: google.chat.v1.IUser): google.chat.v1.User;

                /**
                 * Encodes the specified User message. Does not implicitly {@link google.chat.v1.User.verify|verify} messages.
                 * @param message User message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified User message, length delimited. Does not implicitly {@link google.chat.v1.User.verify|verify} messages.
                 * @param message User message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a User message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.User;

                /**
                 * Decodes a User message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns User
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.User;

                /**
                 * Verifies a User message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a User message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns User
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.User;

                /**
                 * Creates a plain object from a User message. Also converts values to other types if specified.
                 * @param message User
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this User to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for User
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace User {

                /** Type enum. */
                enum Type {
                    TYPE_UNSPECIFIED = 0,
                    HUMAN = 1,
                    BOT = 2
                }
            }

            /** Represents a ChatService */
            class ChatService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new ChatService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new ChatService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ChatService;

                /**
                 * Calls CreateMessage.
                 * @param request CreateMessageRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Message
                 */
                public createMessage(request: google.chat.v1.ICreateMessageRequest, callback: google.chat.v1.ChatService.CreateMessageCallback): void;

                /**
                 * Calls CreateMessage.
                 * @param request CreateMessageRequest message or plain object
                 * @returns Promise
                 */
                public createMessage(request: google.chat.v1.ICreateMessageRequest): Promise<google.chat.v1.Message>;

                /**
                 * Calls ListMessages.
                 * @param request ListMessagesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListMessagesResponse
                 */
                public listMessages(request: google.chat.v1.IListMessagesRequest, callback: google.chat.v1.ChatService.ListMessagesCallback): void;

                /**
                 * Calls ListMessages.
                 * @param request ListMessagesRequest message or plain object
                 * @returns Promise
                 */
                public listMessages(request: google.chat.v1.IListMessagesRequest): Promise<google.chat.v1.ListMessagesResponse>;

                /**
                 * Calls ListMemberships.
                 * @param request ListMembershipsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListMembershipsResponse
                 */
                public listMemberships(request: google.chat.v1.IListMembershipsRequest, callback: google.chat.v1.ChatService.ListMembershipsCallback): void;

                /**
                 * Calls ListMemberships.
                 * @param request ListMembershipsRequest message or plain object
                 * @returns Promise
                 */
                public listMemberships(request: google.chat.v1.IListMembershipsRequest): Promise<google.chat.v1.ListMembershipsResponse>;

                /**
                 * Calls GetMembership.
                 * @param request GetMembershipRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Membership
                 */
                public getMembership(request: google.chat.v1.IGetMembershipRequest, callback: google.chat.v1.ChatService.GetMembershipCallback): void;

                /**
                 * Calls GetMembership.
                 * @param request GetMembershipRequest message or plain object
                 * @returns Promise
                 */
                public getMembership(request: google.chat.v1.IGetMembershipRequest): Promise<google.chat.v1.Membership>;

                /**
                 * Calls GetMessage.
                 * @param request GetMessageRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Message
                 */
                public getMessage(request: google.chat.v1.IGetMessageRequest, callback: google.chat.v1.ChatService.GetMessageCallback): void;

                /**
                 * Calls GetMessage.
                 * @param request GetMessageRequest message or plain object
                 * @returns Promise
                 */
                public getMessage(request: google.chat.v1.IGetMessageRequest): Promise<google.chat.v1.Message>;

                /**
                 * Calls UpdateMessage.
                 * @param request UpdateMessageRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Message
                 */
                public updateMessage(request: google.chat.v1.IUpdateMessageRequest, callback: google.chat.v1.ChatService.UpdateMessageCallback): void;

                /**
                 * Calls UpdateMessage.
                 * @param request UpdateMessageRequest message or plain object
                 * @returns Promise
                 */
                public updateMessage(request: google.chat.v1.IUpdateMessageRequest): Promise<google.chat.v1.Message>;

                /**
                 * Calls DeleteMessage.
                 * @param request DeleteMessageRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteMessage(request: google.chat.v1.IDeleteMessageRequest, callback: google.chat.v1.ChatService.DeleteMessageCallback): void;

                /**
                 * Calls DeleteMessage.
                 * @param request DeleteMessageRequest message or plain object
                 * @returns Promise
                 */
                public deleteMessage(request: google.chat.v1.IDeleteMessageRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls GetAttachment.
                 * @param request GetAttachmentRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Attachment
                 */
                public getAttachment(request: google.chat.v1.IGetAttachmentRequest, callback: google.chat.v1.ChatService.GetAttachmentCallback): void;

                /**
                 * Calls GetAttachment.
                 * @param request GetAttachmentRequest message or plain object
                 * @returns Promise
                 */
                public getAttachment(request: google.chat.v1.IGetAttachmentRequest): Promise<google.chat.v1.Attachment>;

                /**
                 * Calls UploadAttachment.
                 * @param request UploadAttachmentRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and UploadAttachmentResponse
                 */
                public uploadAttachment(request: google.chat.v1.IUploadAttachmentRequest, callback: google.chat.v1.ChatService.UploadAttachmentCallback): void;

                /**
                 * Calls UploadAttachment.
                 * @param request UploadAttachmentRequest message or plain object
                 * @returns Promise
                 */
                public uploadAttachment(request: google.chat.v1.IUploadAttachmentRequest): Promise<google.chat.v1.UploadAttachmentResponse>;

                /**
                 * Calls ListSpaces.
                 * @param request ListSpacesRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListSpacesResponse
                 */
                public listSpaces(request: google.chat.v1.IListSpacesRequest, callback: google.chat.v1.ChatService.ListSpacesCallback): void;

                /**
                 * Calls ListSpaces.
                 * @param request ListSpacesRequest message or plain object
                 * @returns Promise
                 */
                public listSpaces(request: google.chat.v1.IListSpacesRequest): Promise<google.chat.v1.ListSpacesResponse>;

                /**
                 * Calls GetSpace.
                 * @param request GetSpaceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Space
                 */
                public getSpace(request: google.chat.v1.IGetSpaceRequest, callback: google.chat.v1.ChatService.GetSpaceCallback): void;

                /**
                 * Calls GetSpace.
                 * @param request GetSpaceRequest message or plain object
                 * @returns Promise
                 */
                public getSpace(request: google.chat.v1.IGetSpaceRequest): Promise<google.chat.v1.Space>;

                /**
                 * Calls CreateSpace.
                 * @param request CreateSpaceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Space
                 */
                public createSpace(request: google.chat.v1.ICreateSpaceRequest, callback: google.chat.v1.ChatService.CreateSpaceCallback): void;

                /**
                 * Calls CreateSpace.
                 * @param request CreateSpaceRequest message or plain object
                 * @returns Promise
                 */
                public createSpace(request: google.chat.v1.ICreateSpaceRequest): Promise<google.chat.v1.Space>;

                /**
                 * Calls SetUpSpace.
                 * @param request SetUpSpaceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Space
                 */
                public setUpSpace(request: google.chat.v1.ISetUpSpaceRequest, callback: google.chat.v1.ChatService.SetUpSpaceCallback): void;

                /**
                 * Calls SetUpSpace.
                 * @param request SetUpSpaceRequest message or plain object
                 * @returns Promise
                 */
                public setUpSpace(request: google.chat.v1.ISetUpSpaceRequest): Promise<google.chat.v1.Space>;

                /**
                 * Calls UpdateSpace.
                 * @param request UpdateSpaceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Space
                 */
                public updateSpace(request: google.chat.v1.IUpdateSpaceRequest, callback: google.chat.v1.ChatService.UpdateSpaceCallback): void;

                /**
                 * Calls UpdateSpace.
                 * @param request UpdateSpaceRequest message or plain object
                 * @returns Promise
                 */
                public updateSpace(request: google.chat.v1.IUpdateSpaceRequest): Promise<google.chat.v1.Space>;

                /**
                 * Calls DeleteSpace.
                 * @param request DeleteSpaceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteSpace(request: google.chat.v1.IDeleteSpaceRequest, callback: google.chat.v1.ChatService.DeleteSpaceCallback): void;

                /**
                 * Calls DeleteSpace.
                 * @param request DeleteSpaceRequest message or plain object
                 * @returns Promise
                 */
                public deleteSpace(request: google.chat.v1.IDeleteSpaceRequest): Promise<google.protobuf.Empty>;

                /**
                 * Calls CompleteImportSpace.
                 * @param request CompleteImportSpaceRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and CompleteImportSpaceResponse
                 */
                public completeImportSpace(request: google.chat.v1.ICompleteImportSpaceRequest, callback: google.chat.v1.ChatService.CompleteImportSpaceCallback): void;

                /**
                 * Calls CompleteImportSpace.
                 * @param request CompleteImportSpaceRequest message or plain object
                 * @returns Promise
                 */
                public completeImportSpace(request: google.chat.v1.ICompleteImportSpaceRequest): Promise<google.chat.v1.CompleteImportSpaceResponse>;

                /**
                 * Calls FindDirectMessage.
                 * @param request FindDirectMessageRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Space
                 */
                public findDirectMessage(request: google.chat.v1.IFindDirectMessageRequest, callback: google.chat.v1.ChatService.FindDirectMessageCallback): void;

                /**
                 * Calls FindDirectMessage.
                 * @param request FindDirectMessageRequest message or plain object
                 * @returns Promise
                 */
                public findDirectMessage(request: google.chat.v1.IFindDirectMessageRequest): Promise<google.chat.v1.Space>;

                /**
                 * Calls CreateMembership.
                 * @param request CreateMembershipRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Membership
                 */
                public createMembership(request: google.chat.v1.ICreateMembershipRequest, callback: google.chat.v1.ChatService.CreateMembershipCallback): void;

                /**
                 * Calls CreateMembership.
                 * @param request CreateMembershipRequest message or plain object
                 * @returns Promise
                 */
                public createMembership(request: google.chat.v1.ICreateMembershipRequest): Promise<google.chat.v1.Membership>;

                /**
                 * Calls DeleteMembership.
                 * @param request DeleteMembershipRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Membership
                 */
                public deleteMembership(request: google.chat.v1.IDeleteMembershipRequest, callback: google.chat.v1.ChatService.DeleteMembershipCallback): void;

                /**
                 * Calls DeleteMembership.
                 * @param request DeleteMembershipRequest message or plain object
                 * @returns Promise
                 */
                public deleteMembership(request: google.chat.v1.IDeleteMembershipRequest): Promise<google.chat.v1.Membership>;

                /**
                 * Calls CreateReaction.
                 * @param request CreateReactionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Reaction
                 */
                public createReaction(request: google.chat.v1.ICreateReactionRequest, callback: google.chat.v1.ChatService.CreateReactionCallback): void;

                /**
                 * Calls CreateReaction.
                 * @param request CreateReactionRequest message or plain object
                 * @returns Promise
                 */
                public createReaction(request: google.chat.v1.ICreateReactionRequest): Promise<google.chat.v1.Reaction>;

                /**
                 * Calls ListReactions.
                 * @param request ListReactionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and ListReactionsResponse
                 */
                public listReactions(request: google.chat.v1.IListReactionsRequest, callback: google.chat.v1.ChatService.ListReactionsCallback): void;

                /**
                 * Calls ListReactions.
                 * @param request ListReactionsRequest message or plain object
                 * @returns Promise
                 */
                public listReactions(request: google.chat.v1.IListReactionsRequest): Promise<google.chat.v1.ListReactionsResponse>;

                /**
                 * Calls DeleteReaction.
                 * @param request DeleteReactionRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Empty
                 */
                public deleteReaction(request: google.chat.v1.IDeleteReactionRequest, callback: google.chat.v1.ChatService.DeleteReactionCallback): void;

                /**
                 * Calls DeleteReaction.
                 * @param request DeleteReactionRequest message or plain object
                 * @returns Promise
                 */
                public deleteReaction(request: google.chat.v1.IDeleteReactionRequest): Promise<google.protobuf.Empty>;
            }

            namespace ChatService {

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|createMessage}.
                 * @param error Error, if any
                 * @param [response] Message
                 */
                type CreateMessageCallback = (error: (Error|null), response?: google.chat.v1.Message) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|listMessages}.
                 * @param error Error, if any
                 * @param [response] ListMessagesResponse
                 */
                type ListMessagesCallback = (error: (Error|null), response?: google.chat.v1.ListMessagesResponse) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|listMemberships}.
                 * @param error Error, if any
                 * @param [response] ListMembershipsResponse
                 */
                type ListMembershipsCallback = (error: (Error|null), response?: google.chat.v1.ListMembershipsResponse) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|getMembership}.
                 * @param error Error, if any
                 * @param [response] Membership
                 */
                type GetMembershipCallback = (error: (Error|null), response?: google.chat.v1.Membership) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|getMessage}.
                 * @param error Error, if any
                 * @param [response] Message
                 */
                type GetMessageCallback = (error: (Error|null), response?: google.chat.v1.Message) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|updateMessage}.
                 * @param error Error, if any
                 * @param [response] Message
                 */
                type UpdateMessageCallback = (error: (Error|null), response?: google.chat.v1.Message) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|deleteMessage}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteMessageCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|getAttachment}.
                 * @param error Error, if any
                 * @param [response] Attachment
                 */
                type GetAttachmentCallback = (error: (Error|null), response?: google.chat.v1.Attachment) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|uploadAttachment}.
                 * @param error Error, if any
                 * @param [response] UploadAttachmentResponse
                 */
                type UploadAttachmentCallback = (error: (Error|null), response?: google.chat.v1.UploadAttachmentResponse) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|listSpaces}.
                 * @param error Error, if any
                 * @param [response] ListSpacesResponse
                 */
                type ListSpacesCallback = (error: (Error|null), response?: google.chat.v1.ListSpacesResponse) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|getSpace}.
                 * @param error Error, if any
                 * @param [response] Space
                 */
                type GetSpaceCallback = (error: (Error|null), response?: google.chat.v1.Space) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|createSpace}.
                 * @param error Error, if any
                 * @param [response] Space
                 */
                type CreateSpaceCallback = (error: (Error|null), response?: google.chat.v1.Space) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|setUpSpace}.
                 * @param error Error, if any
                 * @param [response] Space
                 */
                type SetUpSpaceCallback = (error: (Error|null), response?: google.chat.v1.Space) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|updateSpace}.
                 * @param error Error, if any
                 * @param [response] Space
                 */
                type UpdateSpaceCallback = (error: (Error|null), response?: google.chat.v1.Space) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|deleteSpace}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteSpaceCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|completeImportSpace}.
                 * @param error Error, if any
                 * @param [response] CompleteImportSpaceResponse
                 */
                type CompleteImportSpaceCallback = (error: (Error|null), response?: google.chat.v1.CompleteImportSpaceResponse) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|findDirectMessage}.
                 * @param error Error, if any
                 * @param [response] Space
                 */
                type FindDirectMessageCallback = (error: (Error|null), response?: google.chat.v1.Space) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|createMembership}.
                 * @param error Error, if any
                 * @param [response] Membership
                 */
                type CreateMembershipCallback = (error: (Error|null), response?: google.chat.v1.Membership) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|deleteMembership}.
                 * @param error Error, if any
                 * @param [response] Membership
                 */
                type DeleteMembershipCallback = (error: (Error|null), response?: google.chat.v1.Membership) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|createReaction}.
                 * @param error Error, if any
                 * @param [response] Reaction
                 */
                type CreateReactionCallback = (error: (Error|null), response?: google.chat.v1.Reaction) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|listReactions}.
                 * @param error Error, if any
                 * @param [response] ListReactionsResponse
                 */
                type ListReactionsCallback = (error: (Error|null), response?: google.chat.v1.ListReactionsResponse) => void;

                /**
                 * Callback as used by {@link google.chat.v1.ChatService|deleteReaction}.
                 * @param error Error, if any
                 * @param [response] Empty
                 */
                type DeleteReactionCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
            }

            /** Properties of a Membership. */
            interface IMembership {

                /** Membership name */
                name?: (string|null);

                /** Membership state */
                state?: (google.chat.v1.Membership.MembershipState|keyof typeof google.chat.v1.Membership.MembershipState|null);

                /** Membership role */
                role?: (google.chat.v1.Membership.MembershipRole|keyof typeof google.chat.v1.Membership.MembershipRole|null);

                /** Membership member */
                member?: (google.chat.v1.IUser|null);

                /** Membership groupMember */
                groupMember?: (google.chat.v1.IGroup|null);

                /** Membership createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Membership deleteTime */
                deleteTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Membership. */
            class Membership implements IMembership {

                /**
                 * Constructs a new Membership.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IMembership);

                /** Membership name. */
                public name: string;

                /** Membership state. */
                public state: (google.chat.v1.Membership.MembershipState|keyof typeof google.chat.v1.Membership.MembershipState);

                /** Membership role. */
                public role: (google.chat.v1.Membership.MembershipRole|keyof typeof google.chat.v1.Membership.MembershipRole);

                /** Membership member. */
                public member?: (google.chat.v1.IUser|null);

                /** Membership groupMember. */
                public groupMember?: (google.chat.v1.IGroup|null);

                /** Membership createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Membership deleteTime. */
                public deleteTime?: (google.protobuf.ITimestamp|null);

                /** Membership memberType. */
                public memberType?: ("member"|"groupMember");

                /**
                 * Creates a new Membership instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Membership instance
                 */
                public static create(properties?: google.chat.v1.IMembership): google.chat.v1.Membership;

                /**
                 * Encodes the specified Membership message. Does not implicitly {@link google.chat.v1.Membership.verify|verify} messages.
                 * @param message Membership message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IMembership, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Membership message, length delimited. Does not implicitly {@link google.chat.v1.Membership.verify|verify} messages.
                 * @param message Membership message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IMembership, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Membership message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Membership
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.Membership;

                /**
                 * Decodes a Membership message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Membership
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.Membership;

                /**
                 * Verifies a Membership message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Membership message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Membership
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.Membership;

                /**
                 * Creates a plain object from a Membership message. Also converts values to other types if specified.
                 * @param message Membership
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.Membership, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Membership to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Membership
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Membership {

                /** MembershipState enum. */
                enum MembershipState {
                    MEMBERSHIP_STATE_UNSPECIFIED = 0,
                    JOINED = 1,
                    INVITED = 2,
                    NOT_A_MEMBER = 3
                }

                /** MembershipRole enum. */
                enum MembershipRole {
                    MEMBERSHIP_ROLE_UNSPECIFIED = 0,
                    ROLE_MEMBER = 1,
                    ROLE_MANAGER = 2
                }
            }

            /** Properties of a CreateMembershipRequest. */
            interface ICreateMembershipRequest {

                /** CreateMembershipRequest parent */
                parent?: (string|null);

                /** CreateMembershipRequest membership */
                membership?: (google.chat.v1.IMembership|null);
            }

            /** Represents a CreateMembershipRequest. */
            class CreateMembershipRequest implements ICreateMembershipRequest {

                /**
                 * Constructs a new CreateMembershipRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.ICreateMembershipRequest);

                /** CreateMembershipRequest parent. */
                public parent: string;

                /** CreateMembershipRequest membership. */
                public membership?: (google.chat.v1.IMembership|null);

                /**
                 * Creates a new CreateMembershipRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateMembershipRequest instance
                 */
                public static create(properties?: google.chat.v1.ICreateMembershipRequest): google.chat.v1.CreateMembershipRequest;

                /**
                 * Encodes the specified CreateMembershipRequest message. Does not implicitly {@link google.chat.v1.CreateMembershipRequest.verify|verify} messages.
                 * @param message CreateMembershipRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.ICreateMembershipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateMembershipRequest message, length delimited. Does not implicitly {@link google.chat.v1.CreateMembershipRequest.verify|verify} messages.
                 * @param message CreateMembershipRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.ICreateMembershipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateMembershipRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateMembershipRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.CreateMembershipRequest;

                /**
                 * Decodes a CreateMembershipRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateMembershipRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.CreateMembershipRequest;

                /**
                 * Verifies a CreateMembershipRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateMembershipRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateMembershipRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.CreateMembershipRequest;

                /**
                 * Creates a plain object from a CreateMembershipRequest message. Also converts values to other types if specified.
                 * @param message CreateMembershipRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.CreateMembershipRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateMembershipRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateMembershipRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListMembershipsRequest. */
            interface IListMembershipsRequest {

                /** ListMembershipsRequest parent */
                parent?: (string|null);

                /** ListMembershipsRequest pageSize */
                pageSize?: (number|null);

                /** ListMembershipsRequest pageToken */
                pageToken?: (string|null);

                /** ListMembershipsRequest filter */
                filter?: (string|null);

                /** ListMembershipsRequest showGroups */
                showGroups?: (boolean|null);

                /** ListMembershipsRequest showInvited */
                showInvited?: (boolean|null);
            }

            /** Represents a ListMembershipsRequest. */
            class ListMembershipsRequest implements IListMembershipsRequest {

                /**
                 * Constructs a new ListMembershipsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IListMembershipsRequest);

                /** ListMembershipsRequest parent. */
                public parent: string;

                /** ListMembershipsRequest pageSize. */
                public pageSize: number;

                /** ListMembershipsRequest pageToken. */
                public pageToken: string;

                /** ListMembershipsRequest filter. */
                public filter: string;

                /** ListMembershipsRequest showGroups. */
                public showGroups: boolean;

                /** ListMembershipsRequest showInvited. */
                public showInvited: boolean;

                /**
                 * Creates a new ListMembershipsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListMembershipsRequest instance
                 */
                public static create(properties?: google.chat.v1.IListMembershipsRequest): google.chat.v1.ListMembershipsRequest;

                /**
                 * Encodes the specified ListMembershipsRequest message. Does not implicitly {@link google.chat.v1.ListMembershipsRequest.verify|verify} messages.
                 * @param message ListMembershipsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IListMembershipsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListMembershipsRequest message, length delimited. Does not implicitly {@link google.chat.v1.ListMembershipsRequest.verify|verify} messages.
                 * @param message ListMembershipsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IListMembershipsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListMembershipsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListMembershipsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ListMembershipsRequest;

                /**
                 * Decodes a ListMembershipsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListMembershipsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ListMembershipsRequest;

                /**
                 * Verifies a ListMembershipsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListMembershipsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListMembershipsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.ListMembershipsRequest;

                /**
                 * Creates a plain object from a ListMembershipsRequest message. Also converts values to other types if specified.
                 * @param message ListMembershipsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.ListMembershipsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListMembershipsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListMembershipsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListMembershipsResponse. */
            interface IListMembershipsResponse {

                /** ListMembershipsResponse memberships */
                memberships?: (google.chat.v1.IMembership[]|null);

                /** ListMembershipsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListMembershipsResponse. */
            class ListMembershipsResponse implements IListMembershipsResponse {

                /**
                 * Constructs a new ListMembershipsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IListMembershipsResponse);

                /** ListMembershipsResponse memberships. */
                public memberships: google.chat.v1.IMembership[];

                /** ListMembershipsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListMembershipsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListMembershipsResponse instance
                 */
                public static create(properties?: google.chat.v1.IListMembershipsResponse): google.chat.v1.ListMembershipsResponse;

                /**
                 * Encodes the specified ListMembershipsResponse message. Does not implicitly {@link google.chat.v1.ListMembershipsResponse.verify|verify} messages.
                 * @param message ListMembershipsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IListMembershipsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListMembershipsResponse message, length delimited. Does not implicitly {@link google.chat.v1.ListMembershipsResponse.verify|verify} messages.
                 * @param message ListMembershipsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IListMembershipsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListMembershipsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListMembershipsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ListMembershipsResponse;

                /**
                 * Decodes a ListMembershipsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListMembershipsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ListMembershipsResponse;

                /**
                 * Verifies a ListMembershipsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListMembershipsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListMembershipsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.ListMembershipsResponse;

                /**
                 * Creates a plain object from a ListMembershipsResponse message. Also converts values to other types if specified.
                 * @param message ListMembershipsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.ListMembershipsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListMembershipsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListMembershipsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetMembershipRequest. */
            interface IGetMembershipRequest {

                /** GetMembershipRequest name */
                name?: (string|null);
            }

            /** Represents a GetMembershipRequest. */
            class GetMembershipRequest implements IGetMembershipRequest {

                /**
                 * Constructs a new GetMembershipRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IGetMembershipRequest);

                /** GetMembershipRequest name. */
                public name: string;

                /**
                 * Creates a new GetMembershipRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetMembershipRequest instance
                 */
                public static create(properties?: google.chat.v1.IGetMembershipRequest): google.chat.v1.GetMembershipRequest;

                /**
                 * Encodes the specified GetMembershipRequest message. Does not implicitly {@link google.chat.v1.GetMembershipRequest.verify|verify} messages.
                 * @param message GetMembershipRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IGetMembershipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetMembershipRequest message, length delimited. Does not implicitly {@link google.chat.v1.GetMembershipRequest.verify|verify} messages.
                 * @param message GetMembershipRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IGetMembershipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetMembershipRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetMembershipRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.GetMembershipRequest;

                /**
                 * Decodes a GetMembershipRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetMembershipRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.GetMembershipRequest;

                /**
                 * Verifies a GetMembershipRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetMembershipRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetMembershipRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.GetMembershipRequest;

                /**
                 * Creates a plain object from a GetMembershipRequest message. Also converts values to other types if specified.
                 * @param message GetMembershipRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.GetMembershipRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetMembershipRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetMembershipRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteMembershipRequest. */
            interface IDeleteMembershipRequest {

                /** DeleteMembershipRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteMembershipRequest. */
            class DeleteMembershipRequest implements IDeleteMembershipRequest {

                /**
                 * Constructs a new DeleteMembershipRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IDeleteMembershipRequest);

                /** DeleteMembershipRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteMembershipRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteMembershipRequest instance
                 */
                public static create(properties?: google.chat.v1.IDeleteMembershipRequest): google.chat.v1.DeleteMembershipRequest;

                /**
                 * Encodes the specified DeleteMembershipRequest message. Does not implicitly {@link google.chat.v1.DeleteMembershipRequest.verify|verify} messages.
                 * @param message DeleteMembershipRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IDeleteMembershipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteMembershipRequest message, length delimited. Does not implicitly {@link google.chat.v1.DeleteMembershipRequest.verify|verify} messages.
                 * @param message DeleteMembershipRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IDeleteMembershipRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteMembershipRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteMembershipRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.DeleteMembershipRequest;

                /**
                 * Decodes a DeleteMembershipRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteMembershipRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.DeleteMembershipRequest;

                /**
                 * Verifies a DeleteMembershipRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteMembershipRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteMembershipRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.DeleteMembershipRequest;

                /**
                 * Creates a plain object from a DeleteMembershipRequest message. Also converts values to other types if specified.
                 * @param message DeleteMembershipRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.DeleteMembershipRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteMembershipRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteMembershipRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Group. */
            interface IGroup {

                /** Group name */
                name?: (string|null);
            }

            /** Represents a Group. */
            class Group implements IGroup {

                /**
                 * Constructs a new Group.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IGroup);

                /** Group name. */
                public name: string;

                /**
                 * Creates a new Group instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Group instance
                 */
                public static create(properties?: google.chat.v1.IGroup): google.chat.v1.Group;

                /**
                 * Encodes the specified Group message. Does not implicitly {@link google.chat.v1.Group.verify|verify} messages.
                 * @param message Group message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Group message, length delimited. Does not implicitly {@link google.chat.v1.Group.verify|verify} messages.
                 * @param message Group message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Group message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.Group;

                /**
                 * Decodes a Group message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Group
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.Group;

                /**
                 * Verifies a Group message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Group message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Group
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.Group;

                /**
                 * Creates a plain object from a Group message. Also converts values to other types if specified.
                 * @param message Group
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.Group, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Group to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Group
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Message. */
            interface IMessage {

                /** Message name */
                name?: (string|null);

                /** Message sender */
                sender?: (google.chat.v1.IUser|null);

                /** Message createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Message lastUpdateTime */
                lastUpdateTime?: (google.protobuf.ITimestamp|null);

                /** Message deleteTime */
                deleteTime?: (google.protobuf.ITimestamp|null);

                /** Message text */
                text?: (string|null);

                /** Message formattedText */
                formattedText?: (string|null);

                /** Message cards */
                cards?: (google.chat.v1.ContextualAddOnMarkup.ICard[]|null);

                /** Message cardsV2 */
                cardsV2?: (google.chat.v1.ICardWithId[]|null);

                /** Message annotations */
                annotations?: (google.chat.v1.IAnnotation[]|null);

                /** Message thread */
                thread?: (google.chat.v1.IThread|null);

                /** Message space */
                space?: (google.chat.v1.ISpace|null);

                /** Message fallbackText */
                fallbackText?: (string|null);

                /** Message actionResponse */
                actionResponse?: (google.chat.v1.IActionResponse|null);

                /** Message argumentText */
                argumentText?: (string|null);

                /** Message slashCommand */
                slashCommand?: (google.chat.v1.ISlashCommand|null);

                /** Message attachment */
                attachment?: (google.chat.v1.IAttachment[]|null);

                /** Message matchedUrl */
                matchedUrl?: (google.chat.v1.IMatchedUrl|null);

                /** Message threadReply */
                threadReply?: (boolean|null);

                /** Message clientAssignedMessageId */
                clientAssignedMessageId?: (string|null);

                /** Message emojiReactionSummaries */
                emojiReactionSummaries?: (google.chat.v1.IEmojiReactionSummary[]|null);

                /** Message privateMessageViewer */
                privateMessageViewer?: (google.chat.v1.IUser|null);

                /** Message deletionMetadata */
                deletionMetadata?: (google.chat.v1.IDeletionMetadata|null);

                /** Message quotedMessageMetadata */
                quotedMessageMetadata?: (google.chat.v1.IQuotedMessageMetadata|null);

                /** Message attachedGifs */
                attachedGifs?: (google.chat.v1.IAttachedGif[]|null);
            }

            /** Represents a Message. */
            class Message implements IMessage {

                /**
                 * Constructs a new Message.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IMessage);

                /** Message name. */
                public name: string;

                /** Message sender. */
                public sender?: (google.chat.v1.IUser|null);

                /** Message createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Message lastUpdateTime. */
                public lastUpdateTime?: (google.protobuf.ITimestamp|null);

                /** Message deleteTime. */
                public deleteTime?: (google.protobuf.ITimestamp|null);

                /** Message text. */
                public text: string;

                /** Message formattedText. */
                public formattedText: string;

                /** Message cards. */
                public cards: google.chat.v1.ContextualAddOnMarkup.ICard[];

                /** Message cardsV2. */
                public cardsV2: google.chat.v1.ICardWithId[];

                /** Message annotations. */
                public annotations: google.chat.v1.IAnnotation[];

                /** Message thread. */
                public thread?: (google.chat.v1.IThread|null);

                /** Message space. */
                public space?: (google.chat.v1.ISpace|null);

                /** Message fallbackText. */
                public fallbackText: string;

                /** Message actionResponse. */
                public actionResponse?: (google.chat.v1.IActionResponse|null);

                /** Message argumentText. */
                public argumentText: string;

                /** Message slashCommand. */
                public slashCommand?: (google.chat.v1.ISlashCommand|null);

                /** Message attachment. */
                public attachment: google.chat.v1.IAttachment[];

                /** Message matchedUrl. */
                public matchedUrl?: (google.chat.v1.IMatchedUrl|null);

                /** Message threadReply. */
                public threadReply: boolean;

                /** Message clientAssignedMessageId. */
                public clientAssignedMessageId: string;

                /** Message emojiReactionSummaries. */
                public emojiReactionSummaries: google.chat.v1.IEmojiReactionSummary[];

                /** Message privateMessageViewer. */
                public privateMessageViewer?: (google.chat.v1.IUser|null);

                /** Message deletionMetadata. */
                public deletionMetadata?: (google.chat.v1.IDeletionMetadata|null);

                /** Message quotedMessageMetadata. */
                public quotedMessageMetadata?: (google.chat.v1.IQuotedMessageMetadata|null);

                /** Message attachedGifs. */
                public attachedGifs: google.chat.v1.IAttachedGif[];

                /**
                 * Creates a new Message instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Message instance
                 */
                public static create(properties?: google.chat.v1.IMessage): google.chat.v1.Message;

                /**
                 * Encodes the specified Message message. Does not implicitly {@link google.chat.v1.Message.verify|verify} messages.
                 * @param message Message message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Message message, length delimited. Does not implicitly {@link google.chat.v1.Message.verify|verify} messages.
                 * @param message Message message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Message message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.Message;

                /**
                 * Decodes a Message message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.Message;

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
                public static fromObject(object: { [k: string]: any }): google.chat.v1.Message;

                /**
                 * Creates a plain object from a Message message. Also converts values to other types if specified.
                 * @param message Message
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** Properties of an AttachedGif. */
            interface IAttachedGif {

                /** AttachedGif uri */
                uri?: (string|null);
            }

            /** Represents an AttachedGif. */
            class AttachedGif implements IAttachedGif {

                /**
                 * Constructs a new AttachedGif.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IAttachedGif);

                /** AttachedGif uri. */
                public uri: string;

                /**
                 * Creates a new AttachedGif instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AttachedGif instance
                 */
                public static create(properties?: google.chat.v1.IAttachedGif): google.chat.v1.AttachedGif;

                /**
                 * Encodes the specified AttachedGif message. Does not implicitly {@link google.chat.v1.AttachedGif.verify|verify} messages.
                 * @param message AttachedGif message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IAttachedGif, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AttachedGif message, length delimited. Does not implicitly {@link google.chat.v1.AttachedGif.verify|verify} messages.
                 * @param message AttachedGif message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IAttachedGif, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AttachedGif message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AttachedGif
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.AttachedGif;

                /**
                 * Decodes an AttachedGif message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AttachedGif
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.AttachedGif;

                /**
                 * Verifies an AttachedGif message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AttachedGif message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AttachedGif
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.AttachedGif;

                /**
                 * Creates a plain object from an AttachedGif message. Also converts values to other types if specified.
                 * @param message AttachedGif
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.AttachedGif, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AttachedGif to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AttachedGif
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a QuotedMessageMetadata. */
            interface IQuotedMessageMetadata {

                /** QuotedMessageMetadata name */
                name?: (string|null);

                /** QuotedMessageMetadata lastUpdateTime */
                lastUpdateTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a QuotedMessageMetadata. */
            class QuotedMessageMetadata implements IQuotedMessageMetadata {

                /**
                 * Constructs a new QuotedMessageMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IQuotedMessageMetadata);

                /** QuotedMessageMetadata name. */
                public name: string;

                /** QuotedMessageMetadata lastUpdateTime. */
                public lastUpdateTime?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new QuotedMessageMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns QuotedMessageMetadata instance
                 */
                public static create(properties?: google.chat.v1.IQuotedMessageMetadata): google.chat.v1.QuotedMessageMetadata;

                /**
                 * Encodes the specified QuotedMessageMetadata message. Does not implicitly {@link google.chat.v1.QuotedMessageMetadata.verify|verify} messages.
                 * @param message QuotedMessageMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IQuotedMessageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified QuotedMessageMetadata message, length delimited. Does not implicitly {@link google.chat.v1.QuotedMessageMetadata.verify|verify} messages.
                 * @param message QuotedMessageMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IQuotedMessageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a QuotedMessageMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns QuotedMessageMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.QuotedMessageMetadata;

                /**
                 * Decodes a QuotedMessageMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns QuotedMessageMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.QuotedMessageMetadata;

                /**
                 * Verifies a QuotedMessageMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a QuotedMessageMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns QuotedMessageMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.QuotedMessageMetadata;

                /**
                 * Creates a plain object from a QuotedMessageMetadata message. Also converts values to other types if specified.
                 * @param message QuotedMessageMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.QuotedMessageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this QuotedMessageMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for QuotedMessageMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Thread. */
            interface IThread {

                /** Thread name */
                name?: (string|null);

                /** Thread threadKey */
                threadKey?: (string|null);
            }

            /** Represents a Thread. */
            class Thread implements IThread {

                /**
                 * Constructs a new Thread.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IThread);

                /** Thread name. */
                public name: string;

                /** Thread threadKey. */
                public threadKey: string;

                /**
                 * Creates a new Thread instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Thread instance
                 */
                public static create(properties?: google.chat.v1.IThread): google.chat.v1.Thread;

                /**
                 * Encodes the specified Thread message. Does not implicitly {@link google.chat.v1.Thread.verify|verify} messages.
                 * @param message Thread message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IThread, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Thread message, length delimited. Does not implicitly {@link google.chat.v1.Thread.verify|verify} messages.
                 * @param message Thread message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IThread, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Thread message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Thread
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.Thread;

                /**
                 * Decodes a Thread message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Thread
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.Thread;

                /**
                 * Verifies a Thread message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Thread message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Thread
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.Thread;

                /**
                 * Creates a plain object from a Thread message. Also converts values to other types if specified.
                 * @param message Thread
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.Thread, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Thread to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Thread
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ActionResponse. */
            interface IActionResponse {

                /** ActionResponse type */
                type?: (google.chat.v1.ActionResponse.ResponseType|keyof typeof google.chat.v1.ActionResponse.ResponseType|null);

                /** ActionResponse url */
                url?: (string|null);

                /** ActionResponse dialogAction */
                dialogAction?: (google.chat.v1.IDialogAction|null);

                /** ActionResponse updatedWidget */
                updatedWidget?: (google.chat.v1.ActionResponse.IUpdatedWidget|null);
            }

            /** Represents an ActionResponse. */
            class ActionResponse implements IActionResponse {

                /**
                 * Constructs a new ActionResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IActionResponse);

                /** ActionResponse type. */
                public type: (google.chat.v1.ActionResponse.ResponseType|keyof typeof google.chat.v1.ActionResponse.ResponseType);

                /** ActionResponse url. */
                public url: string;

                /** ActionResponse dialogAction. */
                public dialogAction?: (google.chat.v1.IDialogAction|null);

                /** ActionResponse updatedWidget. */
                public updatedWidget?: (google.chat.v1.ActionResponse.IUpdatedWidget|null);

                /**
                 * Creates a new ActionResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ActionResponse instance
                 */
                public static create(properties?: google.chat.v1.IActionResponse): google.chat.v1.ActionResponse;

                /**
                 * Encodes the specified ActionResponse message. Does not implicitly {@link google.chat.v1.ActionResponse.verify|verify} messages.
                 * @param message ActionResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IActionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ActionResponse message, length delimited. Does not implicitly {@link google.chat.v1.ActionResponse.verify|verify} messages.
                 * @param message ActionResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IActionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ActionResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ActionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ActionResponse;

                /**
                 * Decodes an ActionResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ActionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ActionResponse;

                /**
                 * Verifies an ActionResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ActionResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ActionResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.ActionResponse;

                /**
                 * Creates a plain object from an ActionResponse message. Also converts values to other types if specified.
                 * @param message ActionResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.ActionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ActionResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ActionResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ActionResponse {

                /** ResponseType enum. */
                enum ResponseType {
                    TYPE_UNSPECIFIED = 0,
                    NEW_MESSAGE = 1,
                    UPDATE_MESSAGE = 2,
                    UPDATE_USER_MESSAGE_CARDS = 6,
                    REQUEST_CONFIG = 3,
                    DIALOG = 4,
                    UPDATE_WIDGET = 7
                }

                /** Properties of a SelectionItems. */
                interface ISelectionItems {

                    /** SelectionItems items */
                    items?: (google.apps.card.v1.SelectionInput.ISelectionItem[]|null);
                }

                /** Represents a SelectionItems. */
                class SelectionItems implements ISelectionItems {

                    /**
                     * Constructs a new SelectionItems.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.chat.v1.ActionResponse.ISelectionItems);

                    /** SelectionItems items. */
                    public items: google.apps.card.v1.SelectionInput.ISelectionItem[];

                    /**
                     * Creates a new SelectionItems instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SelectionItems instance
                     */
                    public static create(properties?: google.chat.v1.ActionResponse.ISelectionItems): google.chat.v1.ActionResponse.SelectionItems;

                    /**
                     * Encodes the specified SelectionItems message. Does not implicitly {@link google.chat.v1.ActionResponse.SelectionItems.verify|verify} messages.
                     * @param message SelectionItems message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.chat.v1.ActionResponse.ISelectionItems, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SelectionItems message, length delimited. Does not implicitly {@link google.chat.v1.ActionResponse.SelectionItems.verify|verify} messages.
                     * @param message SelectionItems message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.chat.v1.ActionResponse.ISelectionItems, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SelectionItems message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SelectionItems
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ActionResponse.SelectionItems;

                    /**
                     * Decodes a SelectionItems message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SelectionItems
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ActionResponse.SelectionItems;

                    /**
                     * Verifies a SelectionItems message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SelectionItems message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SelectionItems
                     */
                    public static fromObject(object: { [k: string]: any }): google.chat.v1.ActionResponse.SelectionItems;

                    /**
                     * Creates a plain object from a SelectionItems message. Also converts values to other types if specified.
                     * @param message SelectionItems
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.chat.v1.ActionResponse.SelectionItems, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SelectionItems to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SelectionItems
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatedWidget. */
                interface IUpdatedWidget {

                    /** UpdatedWidget suggestions */
                    suggestions?: (google.chat.v1.ActionResponse.ISelectionItems|null);

                    /** UpdatedWidget widget */
                    widget?: (string|null);
                }

                /** Represents an UpdatedWidget. */
                class UpdatedWidget implements IUpdatedWidget {

                    /**
                     * Constructs a new UpdatedWidget.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.chat.v1.ActionResponse.IUpdatedWidget);

                    /** UpdatedWidget suggestions. */
                    public suggestions?: (google.chat.v1.ActionResponse.ISelectionItems|null);

                    /** UpdatedWidget widget. */
                    public widget: string;

                    /** UpdatedWidget updatedWidget. */
                    public updatedWidget?: "suggestions";

                    /**
                     * Creates a new UpdatedWidget instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatedWidget instance
                     */
                    public static create(properties?: google.chat.v1.ActionResponse.IUpdatedWidget): google.chat.v1.ActionResponse.UpdatedWidget;

                    /**
                     * Encodes the specified UpdatedWidget message. Does not implicitly {@link google.chat.v1.ActionResponse.UpdatedWidget.verify|verify} messages.
                     * @param message UpdatedWidget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.chat.v1.ActionResponse.IUpdatedWidget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatedWidget message, length delimited. Does not implicitly {@link google.chat.v1.ActionResponse.UpdatedWidget.verify|verify} messages.
                     * @param message UpdatedWidget message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.chat.v1.ActionResponse.IUpdatedWidget, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatedWidget message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatedWidget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ActionResponse.UpdatedWidget;

                    /**
                     * Decodes an UpdatedWidget message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatedWidget
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ActionResponse.UpdatedWidget;

                    /**
                     * Verifies an UpdatedWidget message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatedWidget message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatedWidget
                     */
                    public static fromObject(object: { [k: string]: any }): google.chat.v1.ActionResponse.UpdatedWidget;

                    /**
                     * Creates a plain object from an UpdatedWidget message. Also converts values to other types if specified.
                     * @param message UpdatedWidget
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.chat.v1.ActionResponse.UpdatedWidget, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatedWidget to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatedWidget
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a GetMessageRequest. */
            interface IGetMessageRequest {

                /** GetMessageRequest name */
                name?: (string|null);
            }

            /** Represents a GetMessageRequest. */
            class GetMessageRequest implements IGetMessageRequest {

                /**
                 * Constructs a new GetMessageRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IGetMessageRequest);

                /** GetMessageRequest name. */
                public name: string;

                /**
                 * Creates a new GetMessageRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetMessageRequest instance
                 */
                public static create(properties?: google.chat.v1.IGetMessageRequest): google.chat.v1.GetMessageRequest;

                /**
                 * Encodes the specified GetMessageRequest message. Does not implicitly {@link google.chat.v1.GetMessageRequest.verify|verify} messages.
                 * @param message GetMessageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IGetMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetMessageRequest message, length delimited. Does not implicitly {@link google.chat.v1.GetMessageRequest.verify|verify} messages.
                 * @param message GetMessageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IGetMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetMessageRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.GetMessageRequest;

                /**
                 * Decodes a GetMessageRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.GetMessageRequest;

                /**
                 * Verifies a GetMessageRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetMessageRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetMessageRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.GetMessageRequest;

                /**
                 * Creates a plain object from a GetMessageRequest message. Also converts values to other types if specified.
                 * @param message GetMessageRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.GetMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetMessageRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetMessageRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteMessageRequest. */
            interface IDeleteMessageRequest {

                /** DeleteMessageRequest name */
                name?: (string|null);

                /** DeleteMessageRequest force */
                force?: (boolean|null);
            }

            /** Represents a DeleteMessageRequest. */
            class DeleteMessageRequest implements IDeleteMessageRequest {

                /**
                 * Constructs a new DeleteMessageRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IDeleteMessageRequest);

                /** DeleteMessageRequest name. */
                public name: string;

                /** DeleteMessageRequest force. */
                public force: boolean;

                /**
                 * Creates a new DeleteMessageRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteMessageRequest instance
                 */
                public static create(properties?: google.chat.v1.IDeleteMessageRequest): google.chat.v1.DeleteMessageRequest;

                /**
                 * Encodes the specified DeleteMessageRequest message. Does not implicitly {@link google.chat.v1.DeleteMessageRequest.verify|verify} messages.
                 * @param message DeleteMessageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IDeleteMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteMessageRequest message, length delimited. Does not implicitly {@link google.chat.v1.DeleteMessageRequest.verify|verify} messages.
                 * @param message DeleteMessageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IDeleteMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteMessageRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.DeleteMessageRequest;

                /**
                 * Decodes a DeleteMessageRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.DeleteMessageRequest;

                /**
                 * Verifies a DeleteMessageRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteMessageRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteMessageRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.DeleteMessageRequest;

                /**
                 * Creates a plain object from a DeleteMessageRequest message. Also converts values to other types if specified.
                 * @param message DeleteMessageRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.DeleteMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteMessageRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteMessageRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateMessageRequest. */
            interface IUpdateMessageRequest {

                /** UpdateMessageRequest message */
                message?: (google.chat.v1.IMessage|null);

                /** UpdateMessageRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);

                /** UpdateMessageRequest allowMissing */
                allowMissing?: (boolean|null);
            }

            /** Represents an UpdateMessageRequest. */
            class UpdateMessageRequest implements IUpdateMessageRequest {

                /**
                 * Constructs a new UpdateMessageRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IUpdateMessageRequest);

                /** UpdateMessageRequest message. */
                public message?: (google.chat.v1.IMessage|null);

                /** UpdateMessageRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /** UpdateMessageRequest allowMissing. */
                public allowMissing: boolean;

                /**
                 * Creates a new UpdateMessageRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateMessageRequest instance
                 */
                public static create(properties?: google.chat.v1.IUpdateMessageRequest): google.chat.v1.UpdateMessageRequest;

                /**
                 * Encodes the specified UpdateMessageRequest message. Does not implicitly {@link google.chat.v1.UpdateMessageRequest.verify|verify} messages.
                 * @param message UpdateMessageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IUpdateMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateMessageRequest message, length delimited. Does not implicitly {@link google.chat.v1.UpdateMessageRequest.verify|verify} messages.
                 * @param message UpdateMessageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IUpdateMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateMessageRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.UpdateMessageRequest;

                /**
                 * Decodes an UpdateMessageRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.UpdateMessageRequest;

                /**
                 * Verifies an UpdateMessageRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateMessageRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateMessageRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.UpdateMessageRequest;

                /**
                 * Creates a plain object from an UpdateMessageRequest message. Also converts values to other types if specified.
                 * @param message UpdateMessageRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.UpdateMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateMessageRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateMessageRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateMessageRequest. */
            interface ICreateMessageRequest {

                /** CreateMessageRequest parent */
                parent?: (string|null);

                /** CreateMessageRequest message */
                message?: (google.chat.v1.IMessage|null);

                /** CreateMessageRequest threadKey */
                threadKey?: (string|null);

                /** CreateMessageRequest requestId */
                requestId?: (string|null);

                /** CreateMessageRequest messageReplyOption */
                messageReplyOption?: (google.chat.v1.CreateMessageRequest.MessageReplyOption|keyof typeof google.chat.v1.CreateMessageRequest.MessageReplyOption|null);

                /** CreateMessageRequest messageId */
                messageId?: (string|null);
            }

            /** Represents a CreateMessageRequest. */
            class CreateMessageRequest implements ICreateMessageRequest {

                /**
                 * Constructs a new CreateMessageRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.ICreateMessageRequest);

                /** CreateMessageRequest parent. */
                public parent: string;

                /** CreateMessageRequest message. */
                public message?: (google.chat.v1.IMessage|null);

                /** CreateMessageRequest threadKey. */
                public threadKey: string;

                /** CreateMessageRequest requestId. */
                public requestId: string;

                /** CreateMessageRequest messageReplyOption. */
                public messageReplyOption: (google.chat.v1.CreateMessageRequest.MessageReplyOption|keyof typeof google.chat.v1.CreateMessageRequest.MessageReplyOption);

                /** CreateMessageRequest messageId. */
                public messageId: string;

                /**
                 * Creates a new CreateMessageRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateMessageRequest instance
                 */
                public static create(properties?: google.chat.v1.ICreateMessageRequest): google.chat.v1.CreateMessageRequest;

                /**
                 * Encodes the specified CreateMessageRequest message. Does not implicitly {@link google.chat.v1.CreateMessageRequest.verify|verify} messages.
                 * @param message CreateMessageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.ICreateMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateMessageRequest message, length delimited. Does not implicitly {@link google.chat.v1.CreateMessageRequest.verify|verify} messages.
                 * @param message CreateMessageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.ICreateMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateMessageRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.CreateMessageRequest;

                /**
                 * Decodes a CreateMessageRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.CreateMessageRequest;

                /**
                 * Verifies a CreateMessageRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateMessageRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateMessageRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.CreateMessageRequest;

                /**
                 * Creates a plain object from a CreateMessageRequest message. Also converts values to other types if specified.
                 * @param message CreateMessageRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.CreateMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateMessageRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateMessageRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace CreateMessageRequest {

                /** MessageReplyOption enum. */
                enum MessageReplyOption {
                    MESSAGE_REPLY_OPTION_UNSPECIFIED = 0,
                    REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD = 1,
                    REPLY_MESSAGE_OR_FAIL = 2
                }
            }

            /** Properties of a ListMessagesRequest. */
            interface IListMessagesRequest {

                /** ListMessagesRequest parent */
                parent?: (string|null);

                /** ListMessagesRequest pageSize */
                pageSize?: (number|null);

                /** ListMessagesRequest pageToken */
                pageToken?: (string|null);

                /** ListMessagesRequest filter */
                filter?: (string|null);

                /** ListMessagesRequest orderBy */
                orderBy?: (string|null);

                /** ListMessagesRequest showDeleted */
                showDeleted?: (boolean|null);
            }

            /** Represents a ListMessagesRequest. */
            class ListMessagesRequest implements IListMessagesRequest {

                /**
                 * Constructs a new ListMessagesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IListMessagesRequest);

                /** ListMessagesRequest parent. */
                public parent: string;

                /** ListMessagesRequest pageSize. */
                public pageSize: number;

                /** ListMessagesRequest pageToken. */
                public pageToken: string;

                /** ListMessagesRequest filter. */
                public filter: string;

                /** ListMessagesRequest orderBy. */
                public orderBy: string;

                /** ListMessagesRequest showDeleted. */
                public showDeleted: boolean;

                /**
                 * Creates a new ListMessagesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListMessagesRequest instance
                 */
                public static create(properties?: google.chat.v1.IListMessagesRequest): google.chat.v1.ListMessagesRequest;

                /**
                 * Encodes the specified ListMessagesRequest message. Does not implicitly {@link google.chat.v1.ListMessagesRequest.verify|verify} messages.
                 * @param message ListMessagesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IListMessagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListMessagesRequest message, length delimited. Does not implicitly {@link google.chat.v1.ListMessagesRequest.verify|verify} messages.
                 * @param message ListMessagesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IListMessagesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListMessagesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListMessagesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ListMessagesRequest;

                /**
                 * Decodes a ListMessagesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListMessagesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ListMessagesRequest;

                /**
                 * Verifies a ListMessagesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListMessagesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListMessagesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.ListMessagesRequest;

                /**
                 * Creates a plain object from a ListMessagesRequest message. Also converts values to other types if specified.
                 * @param message ListMessagesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.ListMessagesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListMessagesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListMessagesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListMessagesResponse. */
            interface IListMessagesResponse {

                /** ListMessagesResponse messages */
                messages?: (google.chat.v1.IMessage[]|null);

                /** ListMessagesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListMessagesResponse. */
            class ListMessagesResponse implements IListMessagesResponse {

                /**
                 * Constructs a new ListMessagesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IListMessagesResponse);

                /** ListMessagesResponse messages. */
                public messages: google.chat.v1.IMessage[];

                /** ListMessagesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListMessagesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListMessagesResponse instance
                 */
                public static create(properties?: google.chat.v1.IListMessagesResponse): google.chat.v1.ListMessagesResponse;

                /**
                 * Encodes the specified ListMessagesResponse message. Does not implicitly {@link google.chat.v1.ListMessagesResponse.verify|verify} messages.
                 * @param message ListMessagesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IListMessagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListMessagesResponse message, length delimited. Does not implicitly {@link google.chat.v1.ListMessagesResponse.verify|verify} messages.
                 * @param message ListMessagesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IListMessagesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListMessagesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListMessagesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ListMessagesResponse;

                /**
                 * Decodes a ListMessagesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListMessagesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ListMessagesResponse;

                /**
                 * Verifies a ListMessagesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListMessagesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListMessagesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.ListMessagesResponse;

                /**
                 * Creates a plain object from a ListMessagesResponse message. Also converts values to other types if specified.
                 * @param message ListMessagesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.ListMessagesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListMessagesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListMessagesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DialogAction. */
            interface IDialogAction {

                /** DialogAction dialog */
                dialog?: (google.chat.v1.IDialog|null);

                /** DialogAction actionStatus */
                actionStatus?: (google.chat.v1.IActionStatus|null);
            }

            /** Represents a DialogAction. */
            class DialogAction implements IDialogAction {

                /**
                 * Constructs a new DialogAction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IDialogAction);

                /** DialogAction dialog. */
                public dialog?: (google.chat.v1.IDialog|null);

                /** DialogAction actionStatus. */
                public actionStatus?: (google.chat.v1.IActionStatus|null);

                /** DialogAction action. */
                public action?: "dialog";

                /**
                 * Creates a new DialogAction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DialogAction instance
                 */
                public static create(properties?: google.chat.v1.IDialogAction): google.chat.v1.DialogAction;

                /**
                 * Encodes the specified DialogAction message. Does not implicitly {@link google.chat.v1.DialogAction.verify|verify} messages.
                 * @param message DialogAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IDialogAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DialogAction message, length delimited. Does not implicitly {@link google.chat.v1.DialogAction.verify|verify} messages.
                 * @param message DialogAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IDialogAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DialogAction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DialogAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.DialogAction;

                /**
                 * Decodes a DialogAction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DialogAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.DialogAction;

                /**
                 * Verifies a DialogAction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DialogAction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DialogAction
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.DialogAction;

                /**
                 * Creates a plain object from a DialogAction message. Also converts values to other types if specified.
                 * @param message DialogAction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.DialogAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DialogAction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DialogAction
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Dialog. */
            interface IDialog {

                /** Dialog body */
                body?: (google.apps.card.v1.ICard|null);
            }

            /** Represents a Dialog. */
            class Dialog implements IDialog {

                /**
                 * Constructs a new Dialog.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IDialog);

                /** Dialog body. */
                public body?: (google.apps.card.v1.ICard|null);

                /**
                 * Creates a new Dialog instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Dialog instance
                 */
                public static create(properties?: google.chat.v1.IDialog): google.chat.v1.Dialog;

                /**
                 * Encodes the specified Dialog message. Does not implicitly {@link google.chat.v1.Dialog.verify|verify} messages.
                 * @param message Dialog message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IDialog, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Dialog message, length delimited. Does not implicitly {@link google.chat.v1.Dialog.verify|verify} messages.
                 * @param message Dialog message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IDialog, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Dialog message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Dialog
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.Dialog;

                /**
                 * Decodes a Dialog message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Dialog
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.Dialog;

                /**
                 * Verifies a Dialog message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Dialog message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Dialog
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.Dialog;

                /**
                 * Creates a plain object from a Dialog message. Also converts values to other types if specified.
                 * @param message Dialog
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.Dialog, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Dialog to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Dialog
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CardWithId. */
            interface ICardWithId {

                /** CardWithId cardId */
                cardId?: (string|null);

                /** CardWithId card */
                card?: (google.apps.card.v1.ICard|null);
            }

            /** Represents a CardWithId. */
            class CardWithId implements ICardWithId {

                /**
                 * Constructs a new CardWithId.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.ICardWithId);

                /** CardWithId cardId. */
                public cardId: string;

                /** CardWithId card. */
                public card?: (google.apps.card.v1.ICard|null);

                /**
                 * Creates a new CardWithId instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CardWithId instance
                 */
                public static create(properties?: google.chat.v1.ICardWithId): google.chat.v1.CardWithId;

                /**
                 * Encodes the specified CardWithId message. Does not implicitly {@link google.chat.v1.CardWithId.verify|verify} messages.
                 * @param message CardWithId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.ICardWithId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CardWithId message, length delimited. Does not implicitly {@link google.chat.v1.CardWithId.verify|verify} messages.
                 * @param message CardWithId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.ICardWithId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CardWithId message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CardWithId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.CardWithId;

                /**
                 * Decodes a CardWithId message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CardWithId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.CardWithId;

                /**
                 * Verifies a CardWithId message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CardWithId message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CardWithId
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.CardWithId;

                /**
                 * Creates a plain object from a CardWithId message. Also converts values to other types if specified.
                 * @param message CardWithId
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.CardWithId, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CardWithId to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CardWithId
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ContextualAddOnMarkup. */
            interface IContextualAddOnMarkup {
            }

            /** Represents a ContextualAddOnMarkup. */
            class ContextualAddOnMarkup implements IContextualAddOnMarkup {

                /**
                 * Constructs a new ContextualAddOnMarkup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IContextualAddOnMarkup);

                /**
                 * Creates a new ContextualAddOnMarkup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContextualAddOnMarkup instance
                 */
                public static create(properties?: google.chat.v1.IContextualAddOnMarkup): google.chat.v1.ContextualAddOnMarkup;

                /**
                 * Encodes the specified ContextualAddOnMarkup message. Does not implicitly {@link google.chat.v1.ContextualAddOnMarkup.verify|verify} messages.
                 * @param message ContextualAddOnMarkup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IContextualAddOnMarkup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContextualAddOnMarkup message, length delimited. Does not implicitly {@link google.chat.v1.ContextualAddOnMarkup.verify|verify} messages.
                 * @param message ContextualAddOnMarkup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IContextualAddOnMarkup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContextualAddOnMarkup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContextualAddOnMarkup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ContextualAddOnMarkup;

                /**
                 * Decodes a ContextualAddOnMarkup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContextualAddOnMarkup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ContextualAddOnMarkup;

                /**
                 * Verifies a ContextualAddOnMarkup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContextualAddOnMarkup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContextualAddOnMarkup
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.ContextualAddOnMarkup;

                /**
                 * Creates a plain object from a ContextualAddOnMarkup message. Also converts values to other types if specified.
                 * @param message ContextualAddOnMarkup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.ContextualAddOnMarkup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContextualAddOnMarkup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ContextualAddOnMarkup
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ContextualAddOnMarkup {

                /** Properties of a Card. */
                interface ICard {

                    /** Card header */
                    header?: (google.chat.v1.ContextualAddOnMarkup.Card.ICardHeader|null);

                    /** Card sections */
                    sections?: (google.chat.v1.ContextualAddOnMarkup.Card.ISection[]|null);

                    /** Card cardActions */
                    cardActions?: (google.chat.v1.ContextualAddOnMarkup.Card.ICardAction[]|null);

                    /** Card name */
                    name?: (string|null);
                }

                /** Represents a Card. */
                class Card implements ICard {

                    /**
                     * Constructs a new Card.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.chat.v1.ContextualAddOnMarkup.ICard);

                    /** Card header. */
                    public header?: (google.chat.v1.ContextualAddOnMarkup.Card.ICardHeader|null);

                    /** Card sections. */
                    public sections: google.chat.v1.ContextualAddOnMarkup.Card.ISection[];

                    /** Card cardActions. */
                    public cardActions: google.chat.v1.ContextualAddOnMarkup.Card.ICardAction[];

                    /** Card name. */
                    public name: string;

                    /**
                     * Creates a new Card instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Card instance
                     */
                    public static create(properties?: google.chat.v1.ContextualAddOnMarkup.ICard): google.chat.v1.ContextualAddOnMarkup.Card;

                    /**
                     * Encodes the specified Card message. Does not implicitly {@link google.chat.v1.ContextualAddOnMarkup.Card.verify|verify} messages.
                     * @param message Card message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.chat.v1.ContextualAddOnMarkup.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Card message, length delimited. Does not implicitly {@link google.chat.v1.ContextualAddOnMarkup.Card.verify|verify} messages.
                     * @param message Card message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.chat.v1.ContextualAddOnMarkup.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Card message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Card
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ContextualAddOnMarkup.Card;

                    /**
                     * Decodes a Card message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Card
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ContextualAddOnMarkup.Card;

                    /**
                     * Verifies a Card message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Card message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Card
                     */
                    public static fromObject(object: { [k: string]: any }): google.chat.v1.ContextualAddOnMarkup.Card;

                    /**
                     * Creates a plain object from a Card message. Also converts values to other types if specified.
                     * @param message Card
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.chat.v1.ContextualAddOnMarkup.Card, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Card to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Card
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Card {

                    /** Properties of a CardHeader. */
                    interface ICardHeader {

                        /** CardHeader title */
                        title?: (string|null);

                        /** CardHeader subtitle */
                        subtitle?: (string|null);

                        /** CardHeader imageStyle */
                        imageStyle?: (google.chat.v1.ContextualAddOnMarkup.Card.CardHeader.ImageStyle|keyof typeof google.chat.v1.ContextualAddOnMarkup.Card.CardHeader.ImageStyle|null);

                        /** CardHeader imageUrl */
                        imageUrl?: (string|null);
                    }

                    /** Represents a CardHeader. */
                    class CardHeader implements ICardHeader {

                        /**
                         * Constructs a new CardHeader.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.chat.v1.ContextualAddOnMarkup.Card.ICardHeader);

                        /** CardHeader title. */
                        public title: string;

                        /** CardHeader subtitle. */
                        public subtitle: string;

                        /** CardHeader imageStyle. */
                        public imageStyle: (google.chat.v1.ContextualAddOnMarkup.Card.CardHeader.ImageStyle|keyof typeof google.chat.v1.ContextualAddOnMarkup.Card.CardHeader.ImageStyle);

                        /** CardHeader imageUrl. */
                        public imageUrl: string;

                        /**
                         * Creates a new CardHeader instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CardHeader instance
                         */
                        public static create(properties?: google.chat.v1.ContextualAddOnMarkup.Card.ICardHeader): google.chat.v1.ContextualAddOnMarkup.Card.CardHeader;

                        /**
                         * Encodes the specified CardHeader message. Does not implicitly {@link google.chat.v1.ContextualAddOnMarkup.Card.CardHeader.verify|verify} messages.
                         * @param message CardHeader message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.chat.v1.ContextualAddOnMarkup.Card.ICardHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CardHeader message, length delimited. Does not implicitly {@link google.chat.v1.ContextualAddOnMarkup.Card.CardHeader.verify|verify} messages.
                         * @param message CardHeader message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.chat.v1.ContextualAddOnMarkup.Card.ICardHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CardHeader message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CardHeader
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ContextualAddOnMarkup.Card.CardHeader;

                        /**
                         * Decodes a CardHeader message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CardHeader
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ContextualAddOnMarkup.Card.CardHeader;

                        /**
                         * Verifies a CardHeader message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CardHeader message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CardHeader
                         */
                        public static fromObject(object: { [k: string]: any }): google.chat.v1.ContextualAddOnMarkup.Card.CardHeader;

                        /**
                         * Creates a plain object from a CardHeader message. Also converts values to other types if specified.
                         * @param message CardHeader
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.chat.v1.ContextualAddOnMarkup.Card.CardHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CardHeader to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CardHeader
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CardHeader {

                        /** ImageStyle enum. */
                        enum ImageStyle {
                            IMAGE_STYLE_UNSPECIFIED = 0,
                            IMAGE = 1,
                            AVATAR = 2
                        }
                    }

                    /** Properties of a Section. */
                    interface ISection {

                        /** Section header */
                        header?: (string|null);

                        /** Section widgets */
                        widgets?: (google.chat.v1.IWidgetMarkup[]|null);
                    }

                    /** Represents a Section. */
                    class Section implements ISection {

                        /**
                         * Constructs a new Section.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.chat.v1.ContextualAddOnMarkup.Card.ISection);

                        /** Section header. */
                        public header: string;

                        /** Section widgets. */
                        public widgets: google.chat.v1.IWidgetMarkup[];

                        /**
                         * Creates a new Section instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Section instance
                         */
                        public static create(properties?: google.chat.v1.ContextualAddOnMarkup.Card.ISection): google.chat.v1.ContextualAddOnMarkup.Card.Section;

                        /**
                         * Encodes the specified Section message. Does not implicitly {@link google.chat.v1.ContextualAddOnMarkup.Card.Section.verify|verify} messages.
                         * @param message Section message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.chat.v1.ContextualAddOnMarkup.Card.ISection, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Section message, length delimited. Does not implicitly {@link google.chat.v1.ContextualAddOnMarkup.Card.Section.verify|verify} messages.
                         * @param message Section message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.chat.v1.ContextualAddOnMarkup.Card.ISection, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Section message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Section
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ContextualAddOnMarkup.Card.Section;

                        /**
                         * Decodes a Section message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Section
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ContextualAddOnMarkup.Card.Section;

                        /**
                         * Verifies a Section message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Section message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Section
                         */
                        public static fromObject(object: { [k: string]: any }): google.chat.v1.ContextualAddOnMarkup.Card.Section;

                        /**
                         * Creates a plain object from a Section message. Also converts values to other types if specified.
                         * @param message Section
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.chat.v1.ContextualAddOnMarkup.Card.Section, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Section to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Section
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CardAction. */
                    interface ICardAction {

                        /** CardAction actionLabel */
                        actionLabel?: (string|null);

                        /** CardAction onClick */
                        onClick?: (google.chat.v1.WidgetMarkup.IOnClick|null);
                    }

                    /** Represents a CardAction. */
                    class CardAction implements ICardAction {

                        /**
                         * Constructs a new CardAction.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.chat.v1.ContextualAddOnMarkup.Card.ICardAction);

                        /** CardAction actionLabel. */
                        public actionLabel: string;

                        /** CardAction onClick. */
                        public onClick?: (google.chat.v1.WidgetMarkup.IOnClick|null);

                        /**
                         * Creates a new CardAction instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CardAction instance
                         */
                        public static create(properties?: google.chat.v1.ContextualAddOnMarkup.Card.ICardAction): google.chat.v1.ContextualAddOnMarkup.Card.CardAction;

                        /**
                         * Encodes the specified CardAction message. Does not implicitly {@link google.chat.v1.ContextualAddOnMarkup.Card.CardAction.verify|verify} messages.
                         * @param message CardAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.chat.v1.ContextualAddOnMarkup.Card.ICardAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CardAction message, length delimited. Does not implicitly {@link google.chat.v1.ContextualAddOnMarkup.Card.CardAction.verify|verify} messages.
                         * @param message CardAction message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.chat.v1.ContextualAddOnMarkup.Card.ICardAction, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CardAction message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CardAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ContextualAddOnMarkup.Card.CardAction;

                        /**
                         * Decodes a CardAction message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CardAction
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ContextualAddOnMarkup.Card.CardAction;

                        /**
                         * Verifies a CardAction message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CardAction message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CardAction
                         */
                        public static fromObject(object: { [k: string]: any }): google.chat.v1.ContextualAddOnMarkup.Card.CardAction;

                        /**
                         * Creates a plain object from a CardAction message. Also converts values to other types if specified.
                         * @param message CardAction
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.chat.v1.ContextualAddOnMarkup.Card.CardAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CardAction to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CardAction
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Properties of a WidgetMarkup. */
            interface IWidgetMarkup {

                /** WidgetMarkup textParagraph */
                textParagraph?: (google.chat.v1.WidgetMarkup.ITextParagraph|null);

                /** WidgetMarkup image */
                image?: (google.chat.v1.WidgetMarkup.IImage|null);

                /** WidgetMarkup keyValue */
                keyValue?: (google.chat.v1.WidgetMarkup.IKeyValue|null);

                /** WidgetMarkup buttons */
                buttons?: (google.chat.v1.WidgetMarkup.IButton[]|null);
            }

            /** Represents a WidgetMarkup. */
            class WidgetMarkup implements IWidgetMarkup {

                /**
                 * Constructs a new WidgetMarkup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IWidgetMarkup);

                /** WidgetMarkup textParagraph. */
                public textParagraph?: (google.chat.v1.WidgetMarkup.ITextParagraph|null);

                /** WidgetMarkup image. */
                public image?: (google.chat.v1.WidgetMarkup.IImage|null);

                /** WidgetMarkup keyValue. */
                public keyValue?: (google.chat.v1.WidgetMarkup.IKeyValue|null);

                /** WidgetMarkup buttons. */
                public buttons: google.chat.v1.WidgetMarkup.IButton[];

                /** WidgetMarkup data. */
                public data?: ("textParagraph"|"image"|"keyValue");

                /**
                 * Creates a new WidgetMarkup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WidgetMarkup instance
                 */
                public static create(properties?: google.chat.v1.IWidgetMarkup): google.chat.v1.WidgetMarkup;

                /**
                 * Encodes the specified WidgetMarkup message. Does not implicitly {@link google.chat.v1.WidgetMarkup.verify|verify} messages.
                 * @param message WidgetMarkup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IWidgetMarkup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WidgetMarkup message, length delimited. Does not implicitly {@link google.chat.v1.WidgetMarkup.verify|verify} messages.
                 * @param message WidgetMarkup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IWidgetMarkup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WidgetMarkup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WidgetMarkup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.WidgetMarkup;

                /**
                 * Decodes a WidgetMarkup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WidgetMarkup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.WidgetMarkup;

                /**
                 * Verifies a WidgetMarkup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WidgetMarkup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WidgetMarkup
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.WidgetMarkup;

                /**
                 * Creates a plain object from a WidgetMarkup message. Also converts values to other types if specified.
                 * @param message WidgetMarkup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.WidgetMarkup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WidgetMarkup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WidgetMarkup
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace WidgetMarkup {

                /** Properties of a TextParagraph. */
                interface ITextParagraph {

                    /** TextParagraph text */
                    text?: (string|null);
                }

                /** Represents a TextParagraph. */
                class TextParagraph implements ITextParagraph {

                    /**
                     * Constructs a new TextParagraph.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.chat.v1.WidgetMarkup.ITextParagraph);

                    /** TextParagraph text. */
                    public text: string;

                    /**
                     * Creates a new TextParagraph instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextParagraph instance
                     */
                    public static create(properties?: google.chat.v1.WidgetMarkup.ITextParagraph): google.chat.v1.WidgetMarkup.TextParagraph;

                    /**
                     * Encodes the specified TextParagraph message. Does not implicitly {@link google.chat.v1.WidgetMarkup.TextParagraph.verify|verify} messages.
                     * @param message TextParagraph message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.chat.v1.WidgetMarkup.ITextParagraph, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextParagraph message, length delimited. Does not implicitly {@link google.chat.v1.WidgetMarkup.TextParagraph.verify|verify} messages.
                     * @param message TextParagraph message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.chat.v1.WidgetMarkup.ITextParagraph, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextParagraph message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextParagraph
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.WidgetMarkup.TextParagraph;

                    /**
                     * Decodes a TextParagraph message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextParagraph
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.WidgetMarkup.TextParagraph;

                    /**
                     * Verifies a TextParagraph message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextParagraph message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextParagraph
                     */
                    public static fromObject(object: { [k: string]: any }): google.chat.v1.WidgetMarkup.TextParagraph;

                    /**
                     * Creates a plain object from a TextParagraph message. Also converts values to other types if specified.
                     * @param message TextParagraph
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.chat.v1.WidgetMarkup.TextParagraph, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextParagraph to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextParagraph
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Icon enum. */
                enum Icon {
                    ICON_UNSPECIFIED = 0,
                    AIRPLANE = 1,
                    BOOKMARK = 26,
                    BUS = 25,
                    CAR = 9,
                    CLOCK = 2,
                    CONFIRMATION_NUMBER_ICON = 12,
                    DOLLAR = 14,
                    DESCRIPTION = 27,
                    EMAIL = 10,
                    EVENT_PERFORMER = 20,
                    EVENT_SEAT = 21,
                    FLIGHT_ARRIVAL = 16,
                    FLIGHT_DEPARTURE = 15,
                    HOTEL = 6,
                    HOTEL_ROOM_TYPE = 17,
                    INVITE = 19,
                    MAP_PIN = 3,
                    MEMBERSHIP = 24,
                    MULTIPLE_PEOPLE = 18,
                    OFFER = 30,
                    PERSON = 11,
                    PHONE = 13,
                    RESTAURANT_ICON = 7,
                    SHOPPING_CART = 8,
                    STAR = 5,
                    STORE = 22,
                    TICKET = 4,
                    TRAIN = 23,
                    VIDEO_CAMERA = 28,
                    VIDEO_PLAY = 29
                }

                /** Properties of a Button. */
                interface IButton {

                    /** Button textButton */
                    textButton?: (google.chat.v1.WidgetMarkup.ITextButton|null);

                    /** Button imageButton */
                    imageButton?: (google.chat.v1.WidgetMarkup.IImageButton|null);
                }

                /** Represents a Button. */
                class Button implements IButton {

                    /**
                     * Constructs a new Button.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.chat.v1.WidgetMarkup.IButton);

                    /** Button textButton. */
                    public textButton?: (google.chat.v1.WidgetMarkup.ITextButton|null);

                    /** Button imageButton. */
                    public imageButton?: (google.chat.v1.WidgetMarkup.IImageButton|null);

                    /** Button type. */
                    public type?: ("textButton"|"imageButton");

                    /**
                     * Creates a new Button instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Button instance
                     */
                    public static create(properties?: google.chat.v1.WidgetMarkup.IButton): google.chat.v1.WidgetMarkup.Button;

                    /**
                     * Encodes the specified Button message. Does not implicitly {@link google.chat.v1.WidgetMarkup.Button.verify|verify} messages.
                     * @param message Button message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.chat.v1.WidgetMarkup.IButton, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Button message, length delimited. Does not implicitly {@link google.chat.v1.WidgetMarkup.Button.verify|verify} messages.
                     * @param message Button message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.chat.v1.WidgetMarkup.IButton, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Button message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Button
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.WidgetMarkup.Button;

                    /**
                     * Decodes a Button message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Button
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.WidgetMarkup.Button;

                    /**
                     * Verifies a Button message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Button message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Button
                     */
                    public static fromObject(object: { [k: string]: any }): google.chat.v1.WidgetMarkup.Button;

                    /**
                     * Creates a plain object from a Button message. Also converts values to other types if specified.
                     * @param message Button
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.chat.v1.WidgetMarkup.Button, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Button to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Button
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TextButton. */
                interface ITextButton {

                    /** TextButton text */
                    text?: (string|null);

                    /** TextButton onClick */
                    onClick?: (google.chat.v1.WidgetMarkup.IOnClick|null);
                }

                /** Represents a TextButton. */
                class TextButton implements ITextButton {

                    /**
                     * Constructs a new TextButton.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.chat.v1.WidgetMarkup.ITextButton);

                    /** TextButton text. */
                    public text: string;

                    /** TextButton onClick. */
                    public onClick?: (google.chat.v1.WidgetMarkup.IOnClick|null);

                    /**
                     * Creates a new TextButton instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TextButton instance
                     */
                    public static create(properties?: google.chat.v1.WidgetMarkup.ITextButton): google.chat.v1.WidgetMarkup.TextButton;

                    /**
                     * Encodes the specified TextButton message. Does not implicitly {@link google.chat.v1.WidgetMarkup.TextButton.verify|verify} messages.
                     * @param message TextButton message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.chat.v1.WidgetMarkup.ITextButton, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TextButton message, length delimited. Does not implicitly {@link google.chat.v1.WidgetMarkup.TextButton.verify|verify} messages.
                     * @param message TextButton message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.chat.v1.WidgetMarkup.ITextButton, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TextButton message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TextButton
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.WidgetMarkup.TextButton;

                    /**
                     * Decodes a TextButton message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TextButton
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.WidgetMarkup.TextButton;

                    /**
                     * Verifies a TextButton message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TextButton message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TextButton
                     */
                    public static fromObject(object: { [k: string]: any }): google.chat.v1.WidgetMarkup.TextButton;

                    /**
                     * Creates a plain object from a TextButton message. Also converts values to other types if specified.
                     * @param message TextButton
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.chat.v1.WidgetMarkup.TextButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TextButton to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TextButton
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a KeyValue. */
                interface IKeyValue {

                    /** KeyValue icon */
                    icon?: (google.chat.v1.WidgetMarkup.Icon|keyof typeof google.chat.v1.WidgetMarkup.Icon|null);

                    /** KeyValue iconUrl */
                    iconUrl?: (string|null);

                    /** KeyValue topLabel */
                    topLabel?: (string|null);

                    /** KeyValue content */
                    content?: (string|null);

                    /** KeyValue contentMultiline */
                    contentMultiline?: (boolean|null);

                    /** KeyValue bottomLabel */
                    bottomLabel?: (string|null);

                    /** KeyValue onClick */
                    onClick?: (google.chat.v1.WidgetMarkup.IOnClick|null);

                    /** KeyValue button */
                    button?: (google.chat.v1.WidgetMarkup.IButton|null);
                }

                /** Represents a KeyValue. */
                class KeyValue implements IKeyValue {

                    /**
                     * Constructs a new KeyValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.chat.v1.WidgetMarkup.IKeyValue);

                    /** KeyValue icon. */
                    public icon?: (google.chat.v1.WidgetMarkup.Icon|keyof typeof google.chat.v1.WidgetMarkup.Icon|null);

                    /** KeyValue iconUrl. */
                    public iconUrl?: (string|null);

                    /** KeyValue topLabel. */
                    public topLabel: string;

                    /** KeyValue content. */
                    public content: string;

                    /** KeyValue contentMultiline. */
                    public contentMultiline: boolean;

                    /** KeyValue bottomLabel. */
                    public bottomLabel: string;

                    /** KeyValue onClick. */
                    public onClick?: (google.chat.v1.WidgetMarkup.IOnClick|null);

                    /** KeyValue button. */
                    public button?: (google.chat.v1.WidgetMarkup.IButton|null);

                    /** KeyValue icons. */
                    public icons?: ("icon"|"iconUrl");

                    /** KeyValue control. */
                    public control?: "button";

                    /**
                     * Creates a new KeyValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KeyValue instance
                     */
                    public static create(properties?: google.chat.v1.WidgetMarkup.IKeyValue): google.chat.v1.WidgetMarkup.KeyValue;

                    /**
                     * Encodes the specified KeyValue message. Does not implicitly {@link google.chat.v1.WidgetMarkup.KeyValue.verify|verify} messages.
                     * @param message KeyValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.chat.v1.WidgetMarkup.IKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KeyValue message, length delimited. Does not implicitly {@link google.chat.v1.WidgetMarkup.KeyValue.verify|verify} messages.
                     * @param message KeyValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.chat.v1.WidgetMarkup.IKeyValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KeyValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KeyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.WidgetMarkup.KeyValue;

                    /**
                     * Decodes a KeyValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KeyValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.WidgetMarkup.KeyValue;

                    /**
                     * Verifies a KeyValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KeyValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KeyValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.chat.v1.WidgetMarkup.KeyValue;

                    /**
                     * Creates a plain object from a KeyValue message. Also converts values to other types if specified.
                     * @param message KeyValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.chat.v1.WidgetMarkup.KeyValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KeyValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for KeyValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Image. */
                interface IImage {

                    /** Image imageUrl */
                    imageUrl?: (string|null);

                    /** Image onClick */
                    onClick?: (google.chat.v1.WidgetMarkup.IOnClick|null);

                    /** Image aspectRatio */
                    aspectRatio?: (number|null);
                }

                /** Represents an Image. */
                class Image implements IImage {

                    /**
                     * Constructs a new Image.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.chat.v1.WidgetMarkup.IImage);

                    /** Image imageUrl. */
                    public imageUrl: string;

                    /** Image onClick. */
                    public onClick?: (google.chat.v1.WidgetMarkup.IOnClick|null);

                    /** Image aspectRatio. */
                    public aspectRatio: number;

                    /**
                     * Creates a new Image instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Image instance
                     */
                    public static create(properties?: google.chat.v1.WidgetMarkup.IImage): google.chat.v1.WidgetMarkup.Image;

                    /**
                     * Encodes the specified Image message. Does not implicitly {@link google.chat.v1.WidgetMarkup.Image.verify|verify} messages.
                     * @param message Image message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.chat.v1.WidgetMarkup.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Image message, length delimited. Does not implicitly {@link google.chat.v1.WidgetMarkup.Image.verify|verify} messages.
                     * @param message Image message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.chat.v1.WidgetMarkup.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Image message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Image
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.WidgetMarkup.Image;

                    /**
                     * Decodes an Image message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Image
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.WidgetMarkup.Image;

                    /**
                     * Verifies an Image message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Image message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Image
                     */
                    public static fromObject(object: { [k: string]: any }): google.chat.v1.WidgetMarkup.Image;

                    /**
                     * Creates a plain object from an Image message. Also converts values to other types if specified.
                     * @param message Image
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.chat.v1.WidgetMarkup.Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Image to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Image
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImageButton. */
                interface IImageButton {

                    /** ImageButton icon */
                    icon?: (google.chat.v1.WidgetMarkup.Icon|keyof typeof google.chat.v1.WidgetMarkup.Icon|null);

                    /** ImageButton iconUrl */
                    iconUrl?: (string|null);

                    /** ImageButton onClick */
                    onClick?: (google.chat.v1.WidgetMarkup.IOnClick|null);

                    /** ImageButton name */
                    name?: (string|null);
                }

                /** Represents an ImageButton. */
                class ImageButton implements IImageButton {

                    /**
                     * Constructs a new ImageButton.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.chat.v1.WidgetMarkup.IImageButton);

                    /** ImageButton icon. */
                    public icon?: (google.chat.v1.WidgetMarkup.Icon|keyof typeof google.chat.v1.WidgetMarkup.Icon|null);

                    /** ImageButton iconUrl. */
                    public iconUrl?: (string|null);

                    /** ImageButton onClick. */
                    public onClick?: (google.chat.v1.WidgetMarkup.IOnClick|null);

                    /** ImageButton name. */
                    public name: string;

                    /** ImageButton icons. */
                    public icons?: ("icon"|"iconUrl");

                    /**
                     * Creates a new ImageButton instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImageButton instance
                     */
                    public static create(properties?: google.chat.v1.WidgetMarkup.IImageButton): google.chat.v1.WidgetMarkup.ImageButton;

                    /**
                     * Encodes the specified ImageButton message. Does not implicitly {@link google.chat.v1.WidgetMarkup.ImageButton.verify|verify} messages.
                     * @param message ImageButton message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.chat.v1.WidgetMarkup.IImageButton, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImageButton message, length delimited. Does not implicitly {@link google.chat.v1.WidgetMarkup.ImageButton.verify|verify} messages.
                     * @param message ImageButton message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.chat.v1.WidgetMarkup.IImageButton, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImageButton message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImageButton
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.WidgetMarkup.ImageButton;

                    /**
                     * Decodes an ImageButton message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImageButton
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.WidgetMarkup.ImageButton;

                    /**
                     * Verifies an ImageButton message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImageButton message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImageButton
                     */
                    public static fromObject(object: { [k: string]: any }): google.chat.v1.WidgetMarkup.ImageButton;

                    /**
                     * Creates a plain object from an ImageButton message. Also converts values to other types if specified.
                     * @param message ImageButton
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.chat.v1.WidgetMarkup.ImageButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImageButton to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImageButton
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OnClick. */
                interface IOnClick {

                    /** OnClick action */
                    action?: (google.chat.v1.WidgetMarkup.IFormAction|null);

                    /** OnClick openLink */
                    openLink?: (google.chat.v1.WidgetMarkup.IOpenLink|null);
                }

                /** Represents an OnClick. */
                class OnClick implements IOnClick {

                    /**
                     * Constructs a new OnClick.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.chat.v1.WidgetMarkup.IOnClick);

                    /** OnClick action. */
                    public action?: (google.chat.v1.WidgetMarkup.IFormAction|null);

                    /** OnClick openLink. */
                    public openLink?: (google.chat.v1.WidgetMarkup.IOpenLink|null);

                    /** OnClick data. */
                    public data?: ("action"|"openLink");

                    /**
                     * Creates a new OnClick instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OnClick instance
                     */
                    public static create(properties?: google.chat.v1.WidgetMarkup.IOnClick): google.chat.v1.WidgetMarkup.OnClick;

                    /**
                     * Encodes the specified OnClick message. Does not implicitly {@link google.chat.v1.WidgetMarkup.OnClick.verify|verify} messages.
                     * @param message OnClick message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.chat.v1.WidgetMarkup.IOnClick, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OnClick message, length delimited. Does not implicitly {@link google.chat.v1.WidgetMarkup.OnClick.verify|verify} messages.
                     * @param message OnClick message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.chat.v1.WidgetMarkup.IOnClick, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OnClick message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OnClick
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.WidgetMarkup.OnClick;

                    /**
                     * Decodes an OnClick message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OnClick
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.WidgetMarkup.OnClick;

                    /**
                     * Verifies an OnClick message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OnClick message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OnClick
                     */
                    public static fromObject(object: { [k: string]: any }): google.chat.v1.WidgetMarkup.OnClick;

                    /**
                     * Creates a plain object from an OnClick message. Also converts values to other types if specified.
                     * @param message OnClick
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.chat.v1.WidgetMarkup.OnClick, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OnClick to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OnClick
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OpenLink. */
                interface IOpenLink {

                    /** OpenLink url */
                    url?: (string|null);
                }

                /** Represents an OpenLink. */
                class OpenLink implements IOpenLink {

                    /**
                     * Constructs a new OpenLink.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.chat.v1.WidgetMarkup.IOpenLink);

                    /** OpenLink url. */
                    public url: string;

                    /**
                     * Creates a new OpenLink instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OpenLink instance
                     */
                    public static create(properties?: google.chat.v1.WidgetMarkup.IOpenLink): google.chat.v1.WidgetMarkup.OpenLink;

                    /**
                     * Encodes the specified OpenLink message. Does not implicitly {@link google.chat.v1.WidgetMarkup.OpenLink.verify|verify} messages.
                     * @param message OpenLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.chat.v1.WidgetMarkup.IOpenLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OpenLink message, length delimited. Does not implicitly {@link google.chat.v1.WidgetMarkup.OpenLink.verify|verify} messages.
                     * @param message OpenLink message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.chat.v1.WidgetMarkup.IOpenLink, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OpenLink message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OpenLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.WidgetMarkup.OpenLink;

                    /**
                     * Decodes an OpenLink message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OpenLink
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.WidgetMarkup.OpenLink;

                    /**
                     * Verifies an OpenLink message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OpenLink message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OpenLink
                     */
                    public static fromObject(object: { [k: string]: any }): google.chat.v1.WidgetMarkup.OpenLink;

                    /**
                     * Creates a plain object from an OpenLink message. Also converts values to other types if specified.
                     * @param message OpenLink
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.chat.v1.WidgetMarkup.OpenLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OpenLink to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OpenLink
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FormAction. */
                interface IFormAction {

                    /** FormAction actionMethodName */
                    actionMethodName?: (string|null);

                    /** FormAction parameters */
                    parameters?: (google.chat.v1.WidgetMarkup.FormAction.IActionParameter[]|null);
                }

                /** Represents a FormAction. */
                class FormAction implements IFormAction {

                    /**
                     * Constructs a new FormAction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.chat.v1.WidgetMarkup.IFormAction);

                    /** FormAction actionMethodName. */
                    public actionMethodName: string;

                    /** FormAction parameters. */
                    public parameters: google.chat.v1.WidgetMarkup.FormAction.IActionParameter[];

                    /**
                     * Creates a new FormAction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FormAction instance
                     */
                    public static create(properties?: google.chat.v1.WidgetMarkup.IFormAction): google.chat.v1.WidgetMarkup.FormAction;

                    /**
                     * Encodes the specified FormAction message. Does not implicitly {@link google.chat.v1.WidgetMarkup.FormAction.verify|verify} messages.
                     * @param message FormAction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.chat.v1.WidgetMarkup.IFormAction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FormAction message, length delimited. Does not implicitly {@link google.chat.v1.WidgetMarkup.FormAction.verify|verify} messages.
                     * @param message FormAction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.chat.v1.WidgetMarkup.IFormAction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FormAction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FormAction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.WidgetMarkup.FormAction;

                    /**
                     * Decodes a FormAction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FormAction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.WidgetMarkup.FormAction;

                    /**
                     * Verifies a FormAction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FormAction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FormAction
                     */
                    public static fromObject(object: { [k: string]: any }): google.chat.v1.WidgetMarkup.FormAction;

                    /**
                     * Creates a plain object from a FormAction message. Also converts values to other types if specified.
                     * @param message FormAction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.chat.v1.WidgetMarkup.FormAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FormAction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FormAction
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FormAction {

                    /** Properties of an ActionParameter. */
                    interface IActionParameter {

                        /** ActionParameter key */
                        key?: (string|null);

                        /** ActionParameter value */
                        value?: (string|null);
                    }

                    /** Represents an ActionParameter. */
                    class ActionParameter implements IActionParameter {

                        /**
                         * Constructs a new ActionParameter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.chat.v1.WidgetMarkup.FormAction.IActionParameter);

                        /** ActionParameter key. */
                        public key: string;

                        /** ActionParameter value. */
                        public value: string;

                        /**
                         * Creates a new ActionParameter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ActionParameter instance
                         */
                        public static create(properties?: google.chat.v1.WidgetMarkup.FormAction.IActionParameter): google.chat.v1.WidgetMarkup.FormAction.ActionParameter;

                        /**
                         * Encodes the specified ActionParameter message. Does not implicitly {@link google.chat.v1.WidgetMarkup.FormAction.ActionParameter.verify|verify} messages.
                         * @param message ActionParameter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.chat.v1.WidgetMarkup.FormAction.IActionParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ActionParameter message, length delimited. Does not implicitly {@link google.chat.v1.WidgetMarkup.FormAction.ActionParameter.verify|verify} messages.
                         * @param message ActionParameter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.chat.v1.WidgetMarkup.FormAction.IActionParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ActionParameter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ActionParameter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.WidgetMarkup.FormAction.ActionParameter;

                        /**
                         * Decodes an ActionParameter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ActionParameter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.WidgetMarkup.FormAction.ActionParameter;

                        /**
                         * Verifies an ActionParameter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ActionParameter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ActionParameter
                         */
                        public static fromObject(object: { [k: string]: any }): google.chat.v1.WidgetMarkup.FormAction.ActionParameter;

                        /**
                         * Creates a plain object from an ActionParameter message. Also converts values to other types if specified.
                         * @param message ActionParameter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.chat.v1.WidgetMarkup.FormAction.ActionParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ActionParameter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ActionParameter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Properties of a DeletionMetadata. */
            interface IDeletionMetadata {

                /** DeletionMetadata deletionType */
                deletionType?: (google.chat.v1.DeletionMetadata.DeletionType|keyof typeof google.chat.v1.DeletionMetadata.DeletionType|null);
            }

            /** Represents a DeletionMetadata. */
            class DeletionMetadata implements IDeletionMetadata {

                /**
                 * Constructs a new DeletionMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IDeletionMetadata);

                /** DeletionMetadata deletionType. */
                public deletionType: (google.chat.v1.DeletionMetadata.DeletionType|keyof typeof google.chat.v1.DeletionMetadata.DeletionType);

                /**
                 * Creates a new DeletionMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeletionMetadata instance
                 */
                public static create(properties?: google.chat.v1.IDeletionMetadata): google.chat.v1.DeletionMetadata;

                /**
                 * Encodes the specified DeletionMetadata message. Does not implicitly {@link google.chat.v1.DeletionMetadata.verify|verify} messages.
                 * @param message DeletionMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IDeletionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeletionMetadata message, length delimited. Does not implicitly {@link google.chat.v1.DeletionMetadata.verify|verify} messages.
                 * @param message DeletionMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IDeletionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeletionMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeletionMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.DeletionMetadata;

                /**
                 * Decodes a DeletionMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeletionMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.DeletionMetadata;

                /**
                 * Verifies a DeletionMetadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeletionMetadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeletionMetadata
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.DeletionMetadata;

                /**
                 * Creates a plain object from a DeletionMetadata message. Also converts values to other types if specified.
                 * @param message DeletionMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.DeletionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeletionMetadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeletionMetadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace DeletionMetadata {

                /** DeletionType enum. */
                enum DeletionType {
                    DELETION_TYPE_UNSPECIFIED = 0,
                    CREATOR = 1,
                    SPACE_OWNER = 2,
                    ADMIN = 3,
                    APP_MESSAGE_EXPIRY = 4,
                    CREATOR_VIA_APP = 5,
                    SPACE_OWNER_VIA_APP = 6
                }
            }

            /** Properties of a MatchedUrl. */
            interface IMatchedUrl {

                /** MatchedUrl url */
                url?: (string|null);
            }

            /** Represents a MatchedUrl. */
            class MatchedUrl implements IMatchedUrl {

                /**
                 * Constructs a new MatchedUrl.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IMatchedUrl);

                /** MatchedUrl url. */
                public url: string;

                /**
                 * Creates a new MatchedUrl instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MatchedUrl instance
                 */
                public static create(properties?: google.chat.v1.IMatchedUrl): google.chat.v1.MatchedUrl;

                /**
                 * Encodes the specified MatchedUrl message. Does not implicitly {@link google.chat.v1.MatchedUrl.verify|verify} messages.
                 * @param message MatchedUrl message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IMatchedUrl, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MatchedUrl message, length delimited. Does not implicitly {@link google.chat.v1.MatchedUrl.verify|verify} messages.
                 * @param message MatchedUrl message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IMatchedUrl, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MatchedUrl message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MatchedUrl
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.MatchedUrl;

                /**
                 * Decodes a MatchedUrl message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MatchedUrl
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.MatchedUrl;

                /**
                 * Verifies a MatchedUrl message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MatchedUrl message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MatchedUrl
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.MatchedUrl;

                /**
                 * Creates a plain object from a MatchedUrl message. Also converts values to other types if specified.
                 * @param message MatchedUrl
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.MatchedUrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MatchedUrl to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for MatchedUrl
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Reaction. */
            interface IReaction {

                /** Reaction name */
                name?: (string|null);

                /** Reaction user */
                user?: (google.chat.v1.IUser|null);

                /** Reaction emoji */
                emoji?: (google.chat.v1.IEmoji|null);
            }

            /** Represents a Reaction. */
            class Reaction implements IReaction {

                /**
                 * Constructs a new Reaction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IReaction);

                /** Reaction name. */
                public name: string;

                /** Reaction user. */
                public user?: (google.chat.v1.IUser|null);

                /** Reaction emoji. */
                public emoji?: (google.chat.v1.IEmoji|null);

                /**
                 * Creates a new Reaction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Reaction instance
                 */
                public static create(properties?: google.chat.v1.IReaction): google.chat.v1.Reaction;

                /**
                 * Encodes the specified Reaction message. Does not implicitly {@link google.chat.v1.Reaction.verify|verify} messages.
                 * @param message Reaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IReaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Reaction message, length delimited. Does not implicitly {@link google.chat.v1.Reaction.verify|verify} messages.
                 * @param message Reaction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IReaction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Reaction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Reaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.Reaction;

                /**
                 * Decodes a Reaction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Reaction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.Reaction;

                /**
                 * Verifies a Reaction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Reaction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Reaction
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.Reaction;

                /**
                 * Creates a plain object from a Reaction message. Also converts values to other types if specified.
                 * @param message Reaction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.Reaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Reaction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Reaction
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Emoji. */
            interface IEmoji {

                /** Emoji unicode */
                unicode?: (string|null);

                /** Emoji customEmoji */
                customEmoji?: (google.chat.v1.ICustomEmoji|null);
            }

            /** Represents an Emoji. */
            class Emoji implements IEmoji {

                /**
                 * Constructs a new Emoji.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IEmoji);

                /** Emoji unicode. */
                public unicode?: (string|null);

                /** Emoji customEmoji. */
                public customEmoji?: (google.chat.v1.ICustomEmoji|null);

                /** Emoji content. */
                public content?: ("unicode"|"customEmoji");

                /**
                 * Creates a new Emoji instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Emoji instance
                 */
                public static create(properties?: google.chat.v1.IEmoji): google.chat.v1.Emoji;

                /**
                 * Encodes the specified Emoji message. Does not implicitly {@link google.chat.v1.Emoji.verify|verify} messages.
                 * @param message Emoji message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IEmoji, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Emoji message, length delimited. Does not implicitly {@link google.chat.v1.Emoji.verify|verify} messages.
                 * @param message Emoji message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IEmoji, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Emoji message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Emoji
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.Emoji;

                /**
                 * Decodes an Emoji message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Emoji
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.Emoji;

                /**
                 * Verifies an Emoji message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Emoji message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Emoji
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.Emoji;

                /**
                 * Creates a plain object from an Emoji message. Also converts values to other types if specified.
                 * @param message Emoji
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.Emoji, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Emoji to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Emoji
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CustomEmoji. */
            interface ICustomEmoji {

                /** CustomEmoji uid */
                uid?: (string|null);
            }

            /** Represents a CustomEmoji. */
            class CustomEmoji implements ICustomEmoji {

                /**
                 * Constructs a new CustomEmoji.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.ICustomEmoji);

                /** CustomEmoji uid. */
                public uid: string;

                /**
                 * Creates a new CustomEmoji instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CustomEmoji instance
                 */
                public static create(properties?: google.chat.v1.ICustomEmoji): google.chat.v1.CustomEmoji;

                /**
                 * Encodes the specified CustomEmoji message. Does not implicitly {@link google.chat.v1.CustomEmoji.verify|verify} messages.
                 * @param message CustomEmoji message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.ICustomEmoji, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CustomEmoji message, length delimited. Does not implicitly {@link google.chat.v1.CustomEmoji.verify|verify} messages.
                 * @param message CustomEmoji message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.ICustomEmoji, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CustomEmoji message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CustomEmoji
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.CustomEmoji;

                /**
                 * Decodes a CustomEmoji message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CustomEmoji
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.CustomEmoji;

                /**
                 * Verifies a CustomEmoji message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CustomEmoji message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CustomEmoji
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.CustomEmoji;

                /**
                 * Creates a plain object from a CustomEmoji message. Also converts values to other types if specified.
                 * @param message CustomEmoji
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.CustomEmoji, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CustomEmoji to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CustomEmoji
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an EmojiReactionSummary. */
            interface IEmojiReactionSummary {

                /** EmojiReactionSummary emoji */
                emoji?: (google.chat.v1.IEmoji|null);

                /** EmojiReactionSummary reactionCount */
                reactionCount?: (number|null);
            }

            /** Represents an EmojiReactionSummary. */
            class EmojiReactionSummary implements IEmojiReactionSummary {

                /**
                 * Constructs a new EmojiReactionSummary.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IEmojiReactionSummary);

                /** EmojiReactionSummary emoji. */
                public emoji?: (google.chat.v1.IEmoji|null);

                /** EmojiReactionSummary reactionCount. */
                public reactionCount?: (number|null);

                /** EmojiReactionSummary _reactionCount. */
                public _reactionCount?: "reactionCount";

                /**
                 * Creates a new EmojiReactionSummary instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EmojiReactionSummary instance
                 */
                public static create(properties?: google.chat.v1.IEmojiReactionSummary): google.chat.v1.EmojiReactionSummary;

                /**
                 * Encodes the specified EmojiReactionSummary message. Does not implicitly {@link google.chat.v1.EmojiReactionSummary.verify|verify} messages.
                 * @param message EmojiReactionSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IEmojiReactionSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EmojiReactionSummary message, length delimited. Does not implicitly {@link google.chat.v1.EmojiReactionSummary.verify|verify} messages.
                 * @param message EmojiReactionSummary message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IEmojiReactionSummary, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EmojiReactionSummary message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EmojiReactionSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.EmojiReactionSummary;

                /**
                 * Decodes an EmojiReactionSummary message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EmojiReactionSummary
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.EmojiReactionSummary;

                /**
                 * Verifies an EmojiReactionSummary message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EmojiReactionSummary message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EmojiReactionSummary
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.EmojiReactionSummary;

                /**
                 * Creates a plain object from an EmojiReactionSummary message. Also converts values to other types if specified.
                 * @param message EmojiReactionSummary
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.EmojiReactionSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EmojiReactionSummary to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EmojiReactionSummary
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CreateReactionRequest. */
            interface ICreateReactionRequest {

                /** CreateReactionRequest parent */
                parent?: (string|null);

                /** CreateReactionRequest reaction */
                reaction?: (google.chat.v1.IReaction|null);
            }

            /** Represents a CreateReactionRequest. */
            class CreateReactionRequest implements ICreateReactionRequest {

                /**
                 * Constructs a new CreateReactionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.ICreateReactionRequest);

                /** CreateReactionRequest parent. */
                public parent: string;

                /** CreateReactionRequest reaction. */
                public reaction?: (google.chat.v1.IReaction|null);

                /**
                 * Creates a new CreateReactionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateReactionRequest instance
                 */
                public static create(properties?: google.chat.v1.ICreateReactionRequest): google.chat.v1.CreateReactionRequest;

                /**
                 * Encodes the specified CreateReactionRequest message. Does not implicitly {@link google.chat.v1.CreateReactionRequest.verify|verify} messages.
                 * @param message CreateReactionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.ICreateReactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateReactionRequest message, length delimited. Does not implicitly {@link google.chat.v1.CreateReactionRequest.verify|verify} messages.
                 * @param message CreateReactionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.ICreateReactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateReactionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateReactionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.CreateReactionRequest;

                /**
                 * Decodes a CreateReactionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateReactionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.CreateReactionRequest;

                /**
                 * Verifies a CreateReactionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateReactionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateReactionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.CreateReactionRequest;

                /**
                 * Creates a plain object from a CreateReactionRequest message. Also converts values to other types if specified.
                 * @param message CreateReactionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.CreateReactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateReactionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateReactionRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListReactionsRequest. */
            interface IListReactionsRequest {

                /** ListReactionsRequest parent */
                parent?: (string|null);

                /** ListReactionsRequest pageSize */
                pageSize?: (number|null);

                /** ListReactionsRequest pageToken */
                pageToken?: (string|null);

                /** ListReactionsRequest filter */
                filter?: (string|null);
            }

            /** Represents a ListReactionsRequest. */
            class ListReactionsRequest implements IListReactionsRequest {

                /**
                 * Constructs a new ListReactionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IListReactionsRequest);

                /** ListReactionsRequest parent. */
                public parent: string;

                /** ListReactionsRequest pageSize. */
                public pageSize: number;

                /** ListReactionsRequest pageToken. */
                public pageToken: string;

                /** ListReactionsRequest filter. */
                public filter: string;

                /**
                 * Creates a new ListReactionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListReactionsRequest instance
                 */
                public static create(properties?: google.chat.v1.IListReactionsRequest): google.chat.v1.ListReactionsRequest;

                /**
                 * Encodes the specified ListReactionsRequest message. Does not implicitly {@link google.chat.v1.ListReactionsRequest.verify|verify} messages.
                 * @param message ListReactionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IListReactionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListReactionsRequest message, length delimited. Does not implicitly {@link google.chat.v1.ListReactionsRequest.verify|verify} messages.
                 * @param message ListReactionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IListReactionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListReactionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListReactionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ListReactionsRequest;

                /**
                 * Decodes a ListReactionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListReactionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ListReactionsRequest;

                /**
                 * Verifies a ListReactionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListReactionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListReactionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.ListReactionsRequest;

                /**
                 * Creates a plain object from a ListReactionsRequest message. Also converts values to other types if specified.
                 * @param message ListReactionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.ListReactionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListReactionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListReactionsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListReactionsResponse. */
            interface IListReactionsResponse {

                /** ListReactionsResponse reactions */
                reactions?: (google.chat.v1.IReaction[]|null);

                /** ListReactionsResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListReactionsResponse. */
            class ListReactionsResponse implements IListReactionsResponse {

                /**
                 * Constructs a new ListReactionsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IListReactionsResponse);

                /** ListReactionsResponse reactions. */
                public reactions: google.chat.v1.IReaction[];

                /** ListReactionsResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListReactionsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListReactionsResponse instance
                 */
                public static create(properties?: google.chat.v1.IListReactionsResponse): google.chat.v1.ListReactionsResponse;

                /**
                 * Encodes the specified ListReactionsResponse message. Does not implicitly {@link google.chat.v1.ListReactionsResponse.verify|verify} messages.
                 * @param message ListReactionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IListReactionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListReactionsResponse message, length delimited. Does not implicitly {@link google.chat.v1.ListReactionsResponse.verify|verify} messages.
                 * @param message ListReactionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IListReactionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListReactionsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListReactionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ListReactionsResponse;

                /**
                 * Decodes a ListReactionsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListReactionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ListReactionsResponse;

                /**
                 * Verifies a ListReactionsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListReactionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListReactionsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.ListReactionsResponse;

                /**
                 * Creates a plain object from a ListReactionsResponse message. Also converts values to other types if specified.
                 * @param message ListReactionsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.ListReactionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListReactionsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListReactionsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteReactionRequest. */
            interface IDeleteReactionRequest {

                /** DeleteReactionRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteReactionRequest. */
            class DeleteReactionRequest implements IDeleteReactionRequest {

                /**
                 * Constructs a new DeleteReactionRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IDeleteReactionRequest);

                /** DeleteReactionRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteReactionRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteReactionRequest instance
                 */
                public static create(properties?: google.chat.v1.IDeleteReactionRequest): google.chat.v1.DeleteReactionRequest;

                /**
                 * Encodes the specified DeleteReactionRequest message. Does not implicitly {@link google.chat.v1.DeleteReactionRequest.verify|verify} messages.
                 * @param message DeleteReactionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IDeleteReactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteReactionRequest message, length delimited. Does not implicitly {@link google.chat.v1.DeleteReactionRequest.verify|verify} messages.
                 * @param message DeleteReactionRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IDeleteReactionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteReactionRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteReactionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.DeleteReactionRequest;

                /**
                 * Decodes a DeleteReactionRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteReactionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.DeleteReactionRequest;

                /**
                 * Verifies a DeleteReactionRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteReactionRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteReactionRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.DeleteReactionRequest;

                /**
                 * Creates a plain object from a DeleteReactionRequest message. Also converts values to other types if specified.
                 * @param message DeleteReactionRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.DeleteReactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteReactionRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteReactionRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SlashCommand. */
            interface ISlashCommand {

                /** SlashCommand commandId */
                commandId?: (number|Long|string|null);
            }

            /** Represents a SlashCommand. */
            class SlashCommand implements ISlashCommand {

                /**
                 * Constructs a new SlashCommand.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.ISlashCommand);

                /** SlashCommand commandId. */
                public commandId: (number|Long|string);

                /**
                 * Creates a new SlashCommand instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SlashCommand instance
                 */
                public static create(properties?: google.chat.v1.ISlashCommand): google.chat.v1.SlashCommand;

                /**
                 * Encodes the specified SlashCommand message. Does not implicitly {@link google.chat.v1.SlashCommand.verify|verify} messages.
                 * @param message SlashCommand message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.ISlashCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SlashCommand message, length delimited. Does not implicitly {@link google.chat.v1.SlashCommand.verify|verify} messages.
                 * @param message SlashCommand message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.ISlashCommand, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SlashCommand message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SlashCommand
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.SlashCommand;

                /**
                 * Decodes a SlashCommand message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SlashCommand
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.SlashCommand;

                /**
                 * Verifies a SlashCommand message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SlashCommand message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SlashCommand
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.SlashCommand;

                /**
                 * Creates a plain object from a SlashCommand message. Also converts values to other types if specified.
                 * @param message SlashCommand
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.SlashCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SlashCommand to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SlashCommand
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Space. */
            interface ISpace {

                /** Space name */
                name?: (string|null);

                /** Space type */
                type?: (google.chat.v1.Space.Type|keyof typeof google.chat.v1.Space.Type|null);

                /** Space spaceType */
                spaceType?: (google.chat.v1.Space.SpaceType|keyof typeof google.chat.v1.Space.SpaceType|null);

                /** Space singleUserBotDm */
                singleUserBotDm?: (boolean|null);

                /** Space threaded */
                threaded?: (boolean|null);

                /** Space displayName */
                displayName?: (string|null);

                /** Space externalUserAllowed */
                externalUserAllowed?: (boolean|null);

                /** Space spaceThreadingState */
                spaceThreadingState?: (google.chat.v1.Space.SpaceThreadingState|keyof typeof google.chat.v1.Space.SpaceThreadingState|null);

                /** Space spaceDetails */
                spaceDetails?: (google.chat.v1.Space.ISpaceDetails|null);

                /** Space spaceHistoryState */
                spaceHistoryState?: (google.chat.v1.HistoryState|keyof typeof google.chat.v1.HistoryState|null);

                /** Space importMode */
                importMode?: (boolean|null);

                /** Space createTime */
                createTime?: (google.protobuf.ITimestamp|null);

                /** Space adminInstalled */
                adminInstalled?: (boolean|null);
            }

            /** Represents a Space. */
            class Space implements ISpace {

                /**
                 * Constructs a new Space.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.ISpace);

                /** Space name. */
                public name: string;

                /** Space type. */
                public type: (google.chat.v1.Space.Type|keyof typeof google.chat.v1.Space.Type);

                /** Space spaceType. */
                public spaceType: (google.chat.v1.Space.SpaceType|keyof typeof google.chat.v1.Space.SpaceType);

                /** Space singleUserBotDm. */
                public singleUserBotDm: boolean;

                /** Space threaded. */
                public threaded: boolean;

                /** Space displayName. */
                public displayName: string;

                /** Space externalUserAllowed. */
                public externalUserAllowed: boolean;

                /** Space spaceThreadingState. */
                public spaceThreadingState: (google.chat.v1.Space.SpaceThreadingState|keyof typeof google.chat.v1.Space.SpaceThreadingState);

                /** Space spaceDetails. */
                public spaceDetails?: (google.chat.v1.Space.ISpaceDetails|null);

                /** Space spaceHistoryState. */
                public spaceHistoryState: (google.chat.v1.HistoryState|keyof typeof google.chat.v1.HistoryState);

                /** Space importMode. */
                public importMode: boolean;

                /** Space createTime. */
                public createTime?: (google.protobuf.ITimestamp|null);

                /** Space adminInstalled. */
                public adminInstalled: boolean;

                /**
                 * Creates a new Space instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Space instance
                 */
                public static create(properties?: google.chat.v1.ISpace): google.chat.v1.Space;

                /**
                 * Encodes the specified Space message. Does not implicitly {@link google.chat.v1.Space.verify|verify} messages.
                 * @param message Space message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.ISpace, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Space message, length delimited. Does not implicitly {@link google.chat.v1.Space.verify|verify} messages.
                 * @param message Space message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.ISpace, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Space message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Space
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.Space;

                /**
                 * Decodes a Space message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Space
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.Space;

                /**
                 * Verifies a Space message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Space message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Space
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.Space;

                /**
                 * Creates a plain object from a Space message. Also converts values to other types if specified.
                 * @param message Space
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.Space, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Space to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Space
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Space {

                /** Type enum. */
                enum Type {
                    TYPE_UNSPECIFIED = 0,
                    ROOM = 1,
                    DM = 2
                }

                /** SpaceType enum. */
                enum SpaceType {
                    SPACE_TYPE_UNSPECIFIED = 0,
                    SPACE = 1,
                    GROUP_CHAT = 2,
                    DIRECT_MESSAGE = 3
                }

                /** SpaceThreadingState enum. */
                enum SpaceThreadingState {
                    SPACE_THREADING_STATE_UNSPECIFIED = 0,
                    THREADED_MESSAGES = 2,
                    GROUPED_MESSAGES = 3,
                    UNTHREADED_MESSAGES = 4
                }

                /** Properties of a SpaceDetails. */
                interface ISpaceDetails {

                    /** SpaceDetails description */
                    description?: (string|null);

                    /** SpaceDetails guidelines */
                    guidelines?: (string|null);
                }

                /** Represents a SpaceDetails. */
                class SpaceDetails implements ISpaceDetails {

                    /**
                     * Constructs a new SpaceDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.chat.v1.Space.ISpaceDetails);

                    /** SpaceDetails description. */
                    public description: string;

                    /** SpaceDetails guidelines. */
                    public guidelines: string;

                    /**
                     * Creates a new SpaceDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SpaceDetails instance
                     */
                    public static create(properties?: google.chat.v1.Space.ISpaceDetails): google.chat.v1.Space.SpaceDetails;

                    /**
                     * Encodes the specified SpaceDetails message. Does not implicitly {@link google.chat.v1.Space.SpaceDetails.verify|verify} messages.
                     * @param message SpaceDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.chat.v1.Space.ISpaceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SpaceDetails message, length delimited. Does not implicitly {@link google.chat.v1.Space.SpaceDetails.verify|verify} messages.
                     * @param message SpaceDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.chat.v1.Space.ISpaceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SpaceDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SpaceDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.Space.SpaceDetails;

                    /**
                     * Decodes a SpaceDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SpaceDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.Space.SpaceDetails;

                    /**
                     * Verifies a SpaceDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SpaceDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SpaceDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.chat.v1.Space.SpaceDetails;

                    /**
                     * Creates a plain object from a SpaceDetails message. Also converts values to other types if specified.
                     * @param message SpaceDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.chat.v1.Space.SpaceDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SpaceDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SpaceDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Properties of a CreateSpaceRequest. */
            interface ICreateSpaceRequest {

                /** CreateSpaceRequest space */
                space?: (google.chat.v1.ISpace|null);

                /** CreateSpaceRequest requestId */
                requestId?: (string|null);
            }

            /** Represents a CreateSpaceRequest. */
            class CreateSpaceRequest implements ICreateSpaceRequest {

                /**
                 * Constructs a new CreateSpaceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.ICreateSpaceRequest);

                /** CreateSpaceRequest space. */
                public space?: (google.chat.v1.ISpace|null);

                /** CreateSpaceRequest requestId. */
                public requestId: string;

                /**
                 * Creates a new CreateSpaceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CreateSpaceRequest instance
                 */
                public static create(properties?: google.chat.v1.ICreateSpaceRequest): google.chat.v1.CreateSpaceRequest;

                /**
                 * Encodes the specified CreateSpaceRequest message. Does not implicitly {@link google.chat.v1.CreateSpaceRequest.verify|verify} messages.
                 * @param message CreateSpaceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.ICreateSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CreateSpaceRequest message, length delimited. Does not implicitly {@link google.chat.v1.CreateSpaceRequest.verify|verify} messages.
                 * @param message CreateSpaceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.ICreateSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CreateSpaceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CreateSpaceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.CreateSpaceRequest;

                /**
                 * Decodes a CreateSpaceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CreateSpaceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.CreateSpaceRequest;

                /**
                 * Verifies a CreateSpaceRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CreateSpaceRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CreateSpaceRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.CreateSpaceRequest;

                /**
                 * Creates a plain object from a CreateSpaceRequest message. Also converts values to other types if specified.
                 * @param message CreateSpaceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.CreateSpaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CreateSpaceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CreateSpaceRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListSpacesRequest. */
            interface IListSpacesRequest {

                /** ListSpacesRequest pageSize */
                pageSize?: (number|null);

                /** ListSpacesRequest pageToken */
                pageToken?: (string|null);

                /** ListSpacesRequest filter */
                filter?: (string|null);
            }

            /** Represents a ListSpacesRequest. */
            class ListSpacesRequest implements IListSpacesRequest {

                /**
                 * Constructs a new ListSpacesRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IListSpacesRequest);

                /** ListSpacesRequest pageSize. */
                public pageSize: number;

                /** ListSpacesRequest pageToken. */
                public pageToken: string;

                /** ListSpacesRequest filter. */
                public filter: string;

                /**
                 * Creates a new ListSpacesRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListSpacesRequest instance
                 */
                public static create(properties?: google.chat.v1.IListSpacesRequest): google.chat.v1.ListSpacesRequest;

                /**
                 * Encodes the specified ListSpacesRequest message. Does not implicitly {@link google.chat.v1.ListSpacesRequest.verify|verify} messages.
                 * @param message ListSpacesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IListSpacesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListSpacesRequest message, length delimited. Does not implicitly {@link google.chat.v1.ListSpacesRequest.verify|verify} messages.
                 * @param message ListSpacesRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IListSpacesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListSpacesRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListSpacesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ListSpacesRequest;

                /**
                 * Decodes a ListSpacesRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListSpacesRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ListSpacesRequest;

                /**
                 * Verifies a ListSpacesRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListSpacesRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListSpacesRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.ListSpacesRequest;

                /**
                 * Creates a plain object from a ListSpacesRequest message. Also converts values to other types if specified.
                 * @param message ListSpacesRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.ListSpacesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListSpacesRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListSpacesRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ListSpacesResponse. */
            interface IListSpacesResponse {

                /** ListSpacesResponse spaces */
                spaces?: (google.chat.v1.ISpace[]|null);

                /** ListSpacesResponse nextPageToken */
                nextPageToken?: (string|null);
            }

            /** Represents a ListSpacesResponse. */
            class ListSpacesResponse implements IListSpacesResponse {

                /**
                 * Constructs a new ListSpacesResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IListSpacesResponse);

                /** ListSpacesResponse spaces. */
                public spaces: google.chat.v1.ISpace[];

                /** ListSpacesResponse nextPageToken. */
                public nextPageToken: string;

                /**
                 * Creates a new ListSpacesResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListSpacesResponse instance
                 */
                public static create(properties?: google.chat.v1.IListSpacesResponse): google.chat.v1.ListSpacesResponse;

                /**
                 * Encodes the specified ListSpacesResponse message. Does not implicitly {@link google.chat.v1.ListSpacesResponse.verify|verify} messages.
                 * @param message ListSpacesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IListSpacesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListSpacesResponse message, length delimited. Does not implicitly {@link google.chat.v1.ListSpacesResponse.verify|verify} messages.
                 * @param message ListSpacesResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IListSpacesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListSpacesResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListSpacesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.ListSpacesResponse;

                /**
                 * Decodes a ListSpacesResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListSpacesResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.ListSpacesResponse;

                /**
                 * Verifies a ListSpacesResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListSpacesResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListSpacesResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.ListSpacesResponse;

                /**
                 * Creates a plain object from a ListSpacesResponse message. Also converts values to other types if specified.
                 * @param message ListSpacesResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.ListSpacesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListSpacesResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ListSpacesResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetSpaceRequest. */
            interface IGetSpaceRequest {

                /** GetSpaceRequest name */
                name?: (string|null);
            }

            /** Represents a GetSpaceRequest. */
            class GetSpaceRequest implements IGetSpaceRequest {

                /**
                 * Constructs a new GetSpaceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IGetSpaceRequest);

                /** GetSpaceRequest name. */
                public name: string;

                /**
                 * Creates a new GetSpaceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetSpaceRequest instance
                 */
                public static create(properties?: google.chat.v1.IGetSpaceRequest): google.chat.v1.GetSpaceRequest;

                /**
                 * Encodes the specified GetSpaceRequest message. Does not implicitly {@link google.chat.v1.GetSpaceRequest.verify|verify} messages.
                 * @param message GetSpaceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IGetSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetSpaceRequest message, length delimited. Does not implicitly {@link google.chat.v1.GetSpaceRequest.verify|verify} messages.
                 * @param message GetSpaceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IGetSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetSpaceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetSpaceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.GetSpaceRequest;

                /**
                 * Decodes a GetSpaceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetSpaceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.GetSpaceRequest;

                /**
                 * Verifies a GetSpaceRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetSpaceRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetSpaceRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.GetSpaceRequest;

                /**
                 * Creates a plain object from a GetSpaceRequest message. Also converts values to other types if specified.
                 * @param message GetSpaceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.GetSpaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetSpaceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetSpaceRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FindDirectMessageRequest. */
            interface IFindDirectMessageRequest {

                /** FindDirectMessageRequest name */
                name?: (string|null);
            }

            /** Represents a FindDirectMessageRequest. */
            class FindDirectMessageRequest implements IFindDirectMessageRequest {

                /**
                 * Constructs a new FindDirectMessageRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IFindDirectMessageRequest);

                /** FindDirectMessageRequest name. */
                public name: string;

                /**
                 * Creates a new FindDirectMessageRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FindDirectMessageRequest instance
                 */
                public static create(properties?: google.chat.v1.IFindDirectMessageRequest): google.chat.v1.FindDirectMessageRequest;

                /**
                 * Encodes the specified FindDirectMessageRequest message. Does not implicitly {@link google.chat.v1.FindDirectMessageRequest.verify|verify} messages.
                 * @param message FindDirectMessageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IFindDirectMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FindDirectMessageRequest message, length delimited. Does not implicitly {@link google.chat.v1.FindDirectMessageRequest.verify|verify} messages.
                 * @param message FindDirectMessageRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IFindDirectMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FindDirectMessageRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FindDirectMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.FindDirectMessageRequest;

                /**
                 * Decodes a FindDirectMessageRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FindDirectMessageRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.FindDirectMessageRequest;

                /**
                 * Verifies a FindDirectMessageRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FindDirectMessageRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FindDirectMessageRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.FindDirectMessageRequest;

                /**
                 * Creates a plain object from a FindDirectMessageRequest message. Also converts values to other types if specified.
                 * @param message FindDirectMessageRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.FindDirectMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FindDirectMessageRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FindDirectMessageRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an UpdateSpaceRequest. */
            interface IUpdateSpaceRequest {

                /** UpdateSpaceRequest space */
                space?: (google.chat.v1.ISpace|null);

                /** UpdateSpaceRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents an UpdateSpaceRequest. */
            class UpdateSpaceRequest implements IUpdateSpaceRequest {

                /**
                 * Constructs a new UpdateSpaceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IUpdateSpaceRequest);

                /** UpdateSpaceRequest space. */
                public space?: (google.chat.v1.ISpace|null);

                /** UpdateSpaceRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new UpdateSpaceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UpdateSpaceRequest instance
                 */
                public static create(properties?: google.chat.v1.IUpdateSpaceRequest): google.chat.v1.UpdateSpaceRequest;

                /**
                 * Encodes the specified UpdateSpaceRequest message. Does not implicitly {@link google.chat.v1.UpdateSpaceRequest.verify|verify} messages.
                 * @param message UpdateSpaceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IUpdateSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UpdateSpaceRequest message, length delimited. Does not implicitly {@link google.chat.v1.UpdateSpaceRequest.verify|verify} messages.
                 * @param message UpdateSpaceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IUpdateSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an UpdateSpaceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UpdateSpaceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.UpdateSpaceRequest;

                /**
                 * Decodes an UpdateSpaceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UpdateSpaceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.UpdateSpaceRequest;

                /**
                 * Verifies an UpdateSpaceRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an UpdateSpaceRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UpdateSpaceRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.UpdateSpaceRequest;

                /**
                 * Creates a plain object from an UpdateSpaceRequest message. Also converts values to other types if specified.
                 * @param message UpdateSpaceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.UpdateSpaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UpdateSpaceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for UpdateSpaceRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DeleteSpaceRequest. */
            interface IDeleteSpaceRequest {

                /** DeleteSpaceRequest name */
                name?: (string|null);
            }

            /** Represents a DeleteSpaceRequest. */
            class DeleteSpaceRequest implements IDeleteSpaceRequest {

                /**
                 * Constructs a new DeleteSpaceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.IDeleteSpaceRequest);

                /** DeleteSpaceRequest name. */
                public name: string;

                /**
                 * Creates a new DeleteSpaceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeleteSpaceRequest instance
                 */
                public static create(properties?: google.chat.v1.IDeleteSpaceRequest): google.chat.v1.DeleteSpaceRequest;

                /**
                 * Encodes the specified DeleteSpaceRequest message. Does not implicitly {@link google.chat.v1.DeleteSpaceRequest.verify|verify} messages.
                 * @param message DeleteSpaceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.IDeleteSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeleteSpaceRequest message, length delimited. Does not implicitly {@link google.chat.v1.DeleteSpaceRequest.verify|verify} messages.
                 * @param message DeleteSpaceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.IDeleteSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeleteSpaceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeleteSpaceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.DeleteSpaceRequest;

                /**
                 * Decodes a DeleteSpaceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeleteSpaceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.DeleteSpaceRequest;

                /**
                 * Verifies a DeleteSpaceRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeleteSpaceRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeleteSpaceRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.DeleteSpaceRequest;

                /**
                 * Creates a plain object from a DeleteSpaceRequest message. Also converts values to other types if specified.
                 * @param message DeleteSpaceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.DeleteSpaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeleteSpaceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DeleteSpaceRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CompleteImportSpaceRequest. */
            interface ICompleteImportSpaceRequest {

                /** CompleteImportSpaceRequest name */
                name?: (string|null);
            }

            /** Represents a CompleteImportSpaceRequest. */
            class CompleteImportSpaceRequest implements ICompleteImportSpaceRequest {

                /**
                 * Constructs a new CompleteImportSpaceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.ICompleteImportSpaceRequest);

                /** CompleteImportSpaceRequest name. */
                public name: string;

                /**
                 * Creates a new CompleteImportSpaceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CompleteImportSpaceRequest instance
                 */
                public static create(properties?: google.chat.v1.ICompleteImportSpaceRequest): google.chat.v1.CompleteImportSpaceRequest;

                /**
                 * Encodes the specified CompleteImportSpaceRequest message. Does not implicitly {@link google.chat.v1.CompleteImportSpaceRequest.verify|verify} messages.
                 * @param message CompleteImportSpaceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.ICompleteImportSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CompleteImportSpaceRequest message, length delimited. Does not implicitly {@link google.chat.v1.CompleteImportSpaceRequest.verify|verify} messages.
                 * @param message CompleteImportSpaceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.ICompleteImportSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CompleteImportSpaceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CompleteImportSpaceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.CompleteImportSpaceRequest;

                /**
                 * Decodes a CompleteImportSpaceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CompleteImportSpaceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.CompleteImportSpaceRequest;

                /**
                 * Verifies a CompleteImportSpaceRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CompleteImportSpaceRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CompleteImportSpaceRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.CompleteImportSpaceRequest;

                /**
                 * Creates a plain object from a CompleteImportSpaceRequest message. Also converts values to other types if specified.
                 * @param message CompleteImportSpaceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.CompleteImportSpaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CompleteImportSpaceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CompleteImportSpaceRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CompleteImportSpaceResponse. */
            interface ICompleteImportSpaceResponse {

                /** CompleteImportSpaceResponse space */
                space?: (google.chat.v1.ISpace|null);
            }

            /** Represents a CompleteImportSpaceResponse. */
            class CompleteImportSpaceResponse implements ICompleteImportSpaceResponse {

                /**
                 * Constructs a new CompleteImportSpaceResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.ICompleteImportSpaceResponse);

                /** CompleteImportSpaceResponse space. */
                public space?: (google.chat.v1.ISpace|null);

                /**
                 * Creates a new CompleteImportSpaceResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CompleteImportSpaceResponse instance
                 */
                public static create(properties?: google.chat.v1.ICompleteImportSpaceResponse): google.chat.v1.CompleteImportSpaceResponse;

                /**
                 * Encodes the specified CompleteImportSpaceResponse message. Does not implicitly {@link google.chat.v1.CompleteImportSpaceResponse.verify|verify} messages.
                 * @param message CompleteImportSpaceResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.ICompleteImportSpaceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CompleteImportSpaceResponse message, length delimited. Does not implicitly {@link google.chat.v1.CompleteImportSpaceResponse.verify|verify} messages.
                 * @param message CompleteImportSpaceResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.ICompleteImportSpaceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CompleteImportSpaceResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CompleteImportSpaceResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.CompleteImportSpaceResponse;

                /**
                 * Decodes a CompleteImportSpaceResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CompleteImportSpaceResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.CompleteImportSpaceResponse;

                /**
                 * Verifies a CompleteImportSpaceResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CompleteImportSpaceResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CompleteImportSpaceResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.CompleteImportSpaceResponse;

                /**
                 * Creates a plain object from a CompleteImportSpaceResponse message. Also converts values to other types if specified.
                 * @param message CompleteImportSpaceResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.CompleteImportSpaceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CompleteImportSpaceResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CompleteImportSpaceResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** HistoryState enum. */
            enum HistoryState {
                HISTORY_STATE_UNSPECIFIED = 0,
                HISTORY_OFF = 1,
                HISTORY_ON = 2
            }

            /** Properties of a SetUpSpaceRequest. */
            interface ISetUpSpaceRequest {

                /** SetUpSpaceRequest space */
                space?: (google.chat.v1.ISpace|null);

                /** SetUpSpaceRequest requestId */
                requestId?: (string|null);

                /** SetUpSpaceRequest memberships */
                memberships?: (google.chat.v1.IMembership[]|null);
            }

            /** Represents a SetUpSpaceRequest. */
            class SetUpSpaceRequest implements ISetUpSpaceRequest {

                /**
                 * Constructs a new SetUpSpaceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.chat.v1.ISetUpSpaceRequest);

                /** SetUpSpaceRequest space. */
                public space?: (google.chat.v1.ISpace|null);

                /** SetUpSpaceRequest requestId. */
                public requestId: string;

                /** SetUpSpaceRequest memberships. */
                public memberships: google.chat.v1.IMembership[];

                /**
                 * Creates a new SetUpSpaceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetUpSpaceRequest instance
                 */
                public static create(properties?: google.chat.v1.ISetUpSpaceRequest): google.chat.v1.SetUpSpaceRequest;

                /**
                 * Encodes the specified SetUpSpaceRequest message. Does not implicitly {@link google.chat.v1.SetUpSpaceRequest.verify|verify} messages.
                 * @param message SetUpSpaceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.chat.v1.ISetUpSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetUpSpaceRequest message, length delimited. Does not implicitly {@link google.chat.v1.SetUpSpaceRequest.verify|verify} messages.
                 * @param message SetUpSpaceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.chat.v1.ISetUpSpaceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetUpSpaceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetUpSpaceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.chat.v1.SetUpSpaceRequest;

                /**
                 * Decodes a SetUpSpaceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetUpSpaceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.chat.v1.SetUpSpaceRequest;

                /**
                 * Verifies a SetUpSpaceRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetUpSpaceRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetUpSpaceRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.chat.v1.SetUpSpaceRequest;

                /**
                 * Creates a plain object from a SetUpSpaceRequest message. Also converts values to other types if specified.
                 * @param message SetUpSpaceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.chat.v1.SetUpSpaceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetUpSpaceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SetUpSpaceRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Code enum. */
        enum Code {
            OK = 0,
            CANCELLED = 1,
            UNKNOWN = 2,
            INVALID_ARGUMENT = 3,
            DEADLINE_EXCEEDED = 4,
            NOT_FOUND = 5,
            ALREADY_EXISTS = 6,
            PERMISSION_DENIED = 7,
            UNAUTHENTICATED = 16,
            RESOURCE_EXHAUSTED = 8,
            FAILED_PRECONDITION = 9,
            ABORTED = 10,
            OUT_OF_RANGE = 11,
            UNIMPLEMENTED = 12,
            INTERNAL = 13,
            UNAVAILABLE = 14,
            DATA_LOSS = 15
        }
    }

    /** Namespace api. */
    namespace api {

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7,
            IDENTIFIER = 8
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceReference
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Http
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HttpRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CustomHttpPattern
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CommonLanguageSettings. */
        interface ICommonLanguageSettings {

            /** CommonLanguageSettings referenceDocsUri */
            referenceDocsUri?: (string|null);

            /** CommonLanguageSettings destinations */
            destinations?: (google.api.ClientLibraryDestination[]|null);
        }

        /** Represents a CommonLanguageSettings. */
        class CommonLanguageSettings implements ICommonLanguageSettings {

            /**
             * Constructs a new CommonLanguageSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICommonLanguageSettings);

            /** CommonLanguageSettings referenceDocsUri. */
            public referenceDocsUri: string;

            /** CommonLanguageSettings destinations. */
            public destinations: google.api.ClientLibraryDestination[];

            /**
             * Creates a new CommonLanguageSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommonLanguageSettings instance
             */
            public static create(properties?: google.api.ICommonLanguageSettings): google.api.CommonLanguageSettings;

            /**
             * Encodes the specified CommonLanguageSettings message. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommonLanguageSettings message, length delimited. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CommonLanguageSettings;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CommonLanguageSettings;

            /**
             * Verifies a CommonLanguageSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommonLanguageSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommonLanguageSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CommonLanguageSettings;

            /**
             * Creates a plain object from a CommonLanguageSettings message. Also converts values to other types if specified.
             * @param message CommonLanguageSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CommonLanguageSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommonLanguageSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommonLanguageSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ClientLibrarySettings. */
        interface IClientLibrarySettings {

            /** ClientLibrarySettings version */
            version?: (string|null);

            /** ClientLibrarySettings launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

            /** ClientLibrarySettings restNumericEnums */
            restNumericEnums?: (boolean|null);

            /** ClientLibrarySettings javaSettings */
            javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings */
            cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings */
            phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings */
            pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings */
            nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings */
            dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings */
            rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings */
            goSettings?: (google.api.IGoSettings|null);
        }

        /** Represents a ClientLibrarySettings. */
        class ClientLibrarySettings implements IClientLibrarySettings {

            /**
             * Constructs a new ClientLibrarySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IClientLibrarySettings);

            /** ClientLibrarySettings version. */
            public version: string;

            /** ClientLibrarySettings launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /** ClientLibrarySettings restNumericEnums. */
            public restNumericEnums: boolean;

            /** ClientLibrarySettings javaSettings. */
            public javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings. */
            public cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings. */
            public phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings. */
            public pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings. */
            public nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings. */
            public dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings. */
            public rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings. */
            public goSettings?: (google.api.IGoSettings|null);

            /**
             * Creates a new ClientLibrarySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientLibrarySettings instance
             */
            public static create(properties?: google.api.IClientLibrarySettings): google.api.ClientLibrarySettings;

            /**
             * Encodes the specified ClientLibrarySettings message. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientLibrarySettings message, length delimited. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ClientLibrarySettings;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ClientLibrarySettings;

            /**
             * Verifies a ClientLibrarySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientLibrarySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientLibrarySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.ClientLibrarySettings;

            /**
             * Creates a plain object from a ClientLibrarySettings message. Also converts values to other types if specified.
             * @param message ClientLibrarySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ClientLibrarySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientLibrarySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientLibrarySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Publishing. */
        interface IPublishing {

            /** Publishing methodSettings */
            methodSettings?: (google.api.IMethodSettings[]|null);

            /** Publishing newIssueUri */
            newIssueUri?: (string|null);

            /** Publishing documentationUri */
            documentationUri?: (string|null);

            /** Publishing apiShortName */
            apiShortName?: (string|null);

            /** Publishing githubLabel */
            githubLabel?: (string|null);

            /** Publishing codeownerGithubTeams */
            codeownerGithubTeams?: (string[]|null);

            /** Publishing docTagPrefix */
            docTagPrefix?: (string|null);

            /** Publishing organization */
            organization?: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization|null);

            /** Publishing librarySettings */
            librarySettings?: (google.api.IClientLibrarySettings[]|null);

            /** Publishing protoReferenceDocumentationUri */
            protoReferenceDocumentationUri?: (string|null);
        }

        /** Represents a Publishing. */
        class Publishing implements IPublishing {

            /**
             * Constructs a new Publishing.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPublishing);

            /** Publishing methodSettings. */
            public methodSettings: google.api.IMethodSettings[];

            /** Publishing newIssueUri. */
            public newIssueUri: string;

            /** Publishing documentationUri. */
            public documentationUri: string;

            /** Publishing apiShortName. */
            public apiShortName: string;

            /** Publishing githubLabel. */
            public githubLabel: string;

            /** Publishing codeownerGithubTeams. */
            public codeownerGithubTeams: string[];

            /** Publishing docTagPrefix. */
            public docTagPrefix: string;

            /** Publishing organization. */
            public organization: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization);

            /** Publishing librarySettings. */
            public librarySettings: google.api.IClientLibrarySettings[];

            /** Publishing protoReferenceDocumentationUri. */
            public protoReferenceDocumentationUri: string;

            /**
             * Creates a new Publishing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Publishing instance
             */
            public static create(properties?: google.api.IPublishing): google.api.Publishing;

            /**
             * Encodes the specified Publishing message. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Publishing message, length delimited. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Publishing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Publishing;

            /**
             * Decodes a Publishing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Publishing;

            /**
             * Verifies a Publishing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Publishing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Publishing
             */
            public static fromObject(object: { [k: string]: any }): google.api.Publishing;

            /**
             * Creates a plain object from a Publishing message. Also converts values to other types if specified.
             * @param message Publishing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Publishing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Publishing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Publishing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JavaSettings. */
        interface IJavaSettings {

            /** JavaSettings libraryPackage */
            libraryPackage?: (string|null);

            /** JavaSettings serviceClassNames */
            serviceClassNames?: ({ [k: string]: string }|null);

            /** JavaSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a JavaSettings. */
        class JavaSettings implements IJavaSettings {

            /**
             * Constructs a new JavaSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IJavaSettings);

            /** JavaSettings libraryPackage. */
            public libraryPackage: string;

            /** JavaSettings serviceClassNames. */
            public serviceClassNames: { [k: string]: string };

            /** JavaSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new JavaSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JavaSettings instance
             */
            public static create(properties?: google.api.IJavaSettings): google.api.JavaSettings;

            /**
             * Encodes the specified JavaSettings message. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JavaSettings message, length delimited. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.JavaSettings;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.JavaSettings;

            /**
             * Verifies a JavaSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JavaSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JavaSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.JavaSettings;

            /**
             * Creates a plain object from a JavaSettings message. Also converts values to other types if specified.
             * @param message JavaSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.JavaSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JavaSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JavaSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CppSettings. */
        interface ICppSettings {

            /** CppSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a CppSettings. */
        class CppSettings implements ICppSettings {

            /**
             * Constructs a new CppSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICppSettings);

            /** CppSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new CppSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CppSettings instance
             */
            public static create(properties?: google.api.ICppSettings): google.api.CppSettings;

            /**
             * Encodes the specified CppSettings message. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CppSettings message, length delimited. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CppSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CppSettings;

            /**
             * Decodes a CppSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CppSettings;

            /**
             * Verifies a CppSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CppSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CppSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CppSettings;

            /**
             * Creates a plain object from a CppSettings message. Also converts values to other types if specified.
             * @param message CppSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CppSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CppSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CppSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PhpSettings. */
        interface IPhpSettings {

            /** PhpSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PhpSettings. */
        class PhpSettings implements IPhpSettings {

            /**
             * Constructs a new PhpSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPhpSettings);

            /** PhpSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PhpSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhpSettings instance
             */
            public static create(properties?: google.api.IPhpSettings): google.api.PhpSettings;

            /**
             * Encodes the specified PhpSettings message. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhpSettings message, length delimited. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PhpSettings;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PhpSettings;

            /**
             * Verifies a PhpSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhpSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhpSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PhpSettings;

            /**
             * Creates a plain object from a PhpSettings message. Also converts values to other types if specified.
             * @param message PhpSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PhpSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhpSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PhpSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PythonSettings. */
        interface IPythonSettings {

            /** PythonSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PythonSettings. */
        class PythonSettings implements IPythonSettings {

            /**
             * Constructs a new PythonSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPythonSettings);

            /** PythonSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PythonSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PythonSettings instance
             */
            public static create(properties?: google.api.IPythonSettings): google.api.PythonSettings;

            /**
             * Encodes the specified PythonSettings message. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PythonSettings message, length delimited. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings;

            /**
             * Verifies a PythonSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PythonSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PythonSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PythonSettings;

            /**
             * Creates a plain object from a PythonSettings message. Also converts values to other types if specified.
             * @param message PythonSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PythonSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PythonSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PythonSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NodeSettings. */
        interface INodeSettings {

            /** NodeSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a NodeSettings. */
        class NodeSettings implements INodeSettings {

            /**
             * Constructs a new NodeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.INodeSettings);

            /** NodeSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new NodeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeSettings instance
             */
            public static create(properties?: google.api.INodeSettings): google.api.NodeSettings;

            /**
             * Encodes the specified NodeSettings message. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NodeSettings message, length delimited. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.NodeSettings;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.NodeSettings;

            /**
             * Verifies a NodeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NodeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NodeSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.NodeSettings;

            /**
             * Creates a plain object from a NodeSettings message. Also converts values to other types if specified.
             * @param message NodeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.NodeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NodeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NodeSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DotnetSettings. */
        interface IDotnetSettings {

            /** DotnetSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);

            /** DotnetSettings renamedResources */
            renamedResources?: ({ [k: string]: string }|null);

            /** DotnetSettings ignoredResources */
            ignoredResources?: (string[]|null);

            /** DotnetSettings forcedNamespaceAliases */
            forcedNamespaceAliases?: (string[]|null);

            /** DotnetSettings handwrittenSignatures */
            handwrittenSignatures?: (string[]|null);
        }

        /** Represents a DotnetSettings. */
        class DotnetSettings implements IDotnetSettings {

            /**
             * Constructs a new DotnetSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDotnetSettings);

            /** DotnetSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /** DotnetSettings renamedResources. */
            public renamedResources: { [k: string]: string };

            /** DotnetSettings ignoredResources. */
            public ignoredResources: string[];

            /** DotnetSettings forcedNamespaceAliases. */
            public forcedNamespaceAliases: string[];

            /** DotnetSettings handwrittenSignatures. */
            public handwrittenSignatures: string[];

            /**
             * Creates a new DotnetSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DotnetSettings instance
             */
            public static create(properties?: google.api.IDotnetSettings): google.api.DotnetSettings;

            /**
             * Encodes the specified DotnetSettings message. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DotnetSettings message, length delimited. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.DotnetSettings;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.DotnetSettings;

            /**
             * Verifies a DotnetSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DotnetSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DotnetSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.DotnetSettings;

            /**
             * Creates a plain object from a DotnetSettings message. Also converts values to other types if specified.
             * @param message DotnetSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.DotnetSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DotnetSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DotnetSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RubySettings. */
        interface IRubySettings {

            /** RubySettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a RubySettings. */
        class RubySettings implements IRubySettings {

            /**
             * Constructs a new RubySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRubySettings);

            /** RubySettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new RubySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RubySettings instance
             */
            public static create(properties?: google.api.IRubySettings): google.api.RubySettings;

            /**
             * Encodes the specified RubySettings message. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RubySettings message, length delimited. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RubySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RubySettings;

            /**
             * Decodes a RubySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RubySettings;

            /**
             * Verifies a RubySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RubySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RubySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.RubySettings;

            /**
             * Creates a plain object from a RubySettings message. Also converts values to other types if specified.
             * @param message RubySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RubySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RubySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RubySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GoSettings. */
        interface IGoSettings {

            /** GoSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a GoSettings. */
        class GoSettings implements IGoSettings {

            /**
             * Constructs a new GoSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IGoSettings);

            /** GoSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new GoSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GoSettings instance
             */
            public static create(properties?: google.api.IGoSettings): google.api.GoSettings;

            /**
             * Encodes the specified GoSettings message. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GoSettings message, length delimited. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GoSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.GoSettings;

            /**
             * Decodes a GoSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.GoSettings;

            /**
             * Verifies a GoSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GoSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GoSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.GoSettings;

            /**
             * Creates a plain object from a GoSettings message. Also converts values to other types if specified.
             * @param message GoSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.GoSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GoSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GoSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodSettings. */
        interface IMethodSettings {

            /** MethodSettings selector */
            selector?: (string|null);

            /** MethodSettings longRunning */
            longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields */
            autoPopulatedFields?: (string[]|null);
        }

        /** Represents a MethodSettings. */
        class MethodSettings implements IMethodSettings {

            /**
             * Constructs a new MethodSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMethodSettings);

            /** MethodSettings selector. */
            public selector: string;

            /** MethodSettings longRunning. */
            public longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields. */
            public autoPopulatedFields: string[];

            /**
             * Creates a new MethodSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodSettings instance
             */
            public static create(properties?: google.api.IMethodSettings): google.api.MethodSettings;

            /**
             * Encodes the specified MethodSettings message. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodSettings message, length delimited. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings;

            /**
             * Verifies a MethodSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.MethodSettings;

            /**
             * Creates a plain object from a MethodSettings message. Also converts values to other types if specified.
             * @param message MethodSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MethodSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodSettings {

            /** Properties of a LongRunning. */
            interface ILongRunning {

                /** LongRunning initialPollDelay */
                initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier */
                pollDelayMultiplier?: (number|null);

                /** LongRunning maxPollDelay */
                maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout */
                totalPollTimeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a LongRunning. */
            class LongRunning implements ILongRunning {

                /**
                 * Constructs a new LongRunning.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MethodSettings.ILongRunning);

                /** LongRunning initialPollDelay. */
                public initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier. */
                public pollDelayMultiplier: number;

                /** LongRunning maxPollDelay. */
                public maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout. */
                public totalPollTimeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new LongRunning instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LongRunning instance
                 */
                public static create(properties?: google.api.MethodSettings.ILongRunning): google.api.MethodSettings.LongRunning;

                /**
                 * Encodes the specified LongRunning message. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LongRunning message, length delimited. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings.LongRunning;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings.LongRunning;

                /**
                 * Verifies a LongRunning message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LongRunning message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LongRunning
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MethodSettings.LongRunning;

                /**
                 * Creates a plain object from a LongRunning message. Also converts values to other types if specified.
                 * @param message LongRunning
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MethodSettings.LongRunning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LongRunning to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LongRunning
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** ClientLibraryOrganization enum. */
        enum ClientLibraryOrganization {
            CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
            CLOUD = 1,
            ADS = 2,
            PHOTOS = 3,
            STREET_VIEW = 4,
            SHOPPING = 5,
            GEO = 6,
            GENERATIVE_AI = 7
        }

        /** ClientLibraryDestination enum. */
        enum ClientLibraryDestination {
            CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
            GITHUB = 10,
            PACKAGE_MANAGER = 20
        }

        /** LaunchStage enum. */
        enum LaunchStage {
            LAUNCH_STAGE_UNSPECIFIED = 0,
            UNIMPLEMENTED = 6,
            PRELAUNCH = 7,
            EARLY_ACCESS = 1,
            ALPHA = 2,
            BETA = 3,
            GA = 4,
            DEPRECATED = 5
        }
    }
}