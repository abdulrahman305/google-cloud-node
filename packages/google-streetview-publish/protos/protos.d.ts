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

    /** Namespace streetview. */
    namespace streetview {

        /** Namespace publish. */
        namespace publish {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an UploadRef. */
                interface IUploadRef {

                    /** UploadRef uploadUrl */
                    uploadUrl?: (string|null);
                }

                /** Represents an UploadRef. */
                class UploadRef implements IUploadRef {

                    /**
                     * Constructs a new UploadRef.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IUploadRef);

                    /** UploadRef uploadUrl. */
                    public uploadUrl?: (string|null);

                    /** UploadRef fileSource. */
                    public fileSource?: "uploadUrl";

                    /**
                     * Creates a new UploadRef instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UploadRef instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IUploadRef): google.streetview.publish.v1.UploadRef;

                    /**
                     * Encodes the specified UploadRef message. Does not implicitly {@link google.streetview.publish.v1.UploadRef.verify|verify} messages.
                     * @param message UploadRef message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IUploadRef, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UploadRef message, length delimited. Does not implicitly {@link google.streetview.publish.v1.UploadRef.verify|verify} messages.
                     * @param message UploadRef message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IUploadRef, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UploadRef message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UploadRef
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.UploadRef;

                    /**
                     * Decodes an UploadRef message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UploadRef
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.UploadRef;

                    /**
                     * Verifies an UploadRef message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UploadRef message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UploadRef
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.UploadRef;

                    /**
                     * Creates a plain object from an UploadRef message. Also converts values to other types if specified.
                     * @param message UploadRef
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.UploadRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UploadRef to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UploadRef
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PhotoId. */
                interface IPhotoId {

                    /** PhotoId id */
                    id?: (string|null);
                }

                /** Represents a PhotoId. */
                class PhotoId implements IPhotoId {

                    /**
                     * Constructs a new PhotoId.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IPhotoId);

                    /** PhotoId id. */
                    public id: string;

                    /**
                     * Creates a new PhotoId instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PhotoId instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IPhotoId): google.streetview.publish.v1.PhotoId;

                    /**
                     * Encodes the specified PhotoId message. Does not implicitly {@link google.streetview.publish.v1.PhotoId.verify|verify} messages.
                     * @param message PhotoId message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IPhotoId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PhotoId message, length delimited. Does not implicitly {@link google.streetview.publish.v1.PhotoId.verify|verify} messages.
                     * @param message PhotoId message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IPhotoId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PhotoId message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PhotoId
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.PhotoId;

                    /**
                     * Decodes a PhotoId message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PhotoId
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.PhotoId;

                    /**
                     * Verifies a PhotoId message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PhotoId message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PhotoId
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.PhotoId;

                    /**
                     * Creates a plain object from a PhotoId message. Also converts values to other types if specified.
                     * @param message PhotoId
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.PhotoId, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PhotoId to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PhotoId
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Level. */
                interface ILevel {

                    /** Level number */
                    number?: (number|null);

                    /** Level name */
                    name?: (string|null);
                }

                /** Represents a Level. */
                class Level implements ILevel {

                    /**
                     * Constructs a new Level.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.ILevel);

                    /** Level number. */
                    public number: number;

                    /** Level name. */
                    public name: string;

                    /**
                     * Creates a new Level instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Level instance
                     */
                    public static create(properties?: google.streetview.publish.v1.ILevel): google.streetview.publish.v1.Level;

                    /**
                     * Encodes the specified Level message. Does not implicitly {@link google.streetview.publish.v1.Level.verify|verify} messages.
                     * @param message Level message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.ILevel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Level message, length delimited. Does not implicitly {@link google.streetview.publish.v1.Level.verify|verify} messages.
                     * @param message Level message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.ILevel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Level message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Level
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.Level;

                    /**
                     * Decodes a Level message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Level
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.Level;

                    /**
                     * Verifies a Level message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Level message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Level
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.Level;

                    /**
                     * Creates a plain object from a Level message. Also converts values to other types if specified.
                     * @param message Level
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.Level, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Level to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Level
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Pose. */
                interface IPose {

                    /** Pose latLngPair */
                    latLngPair?: (google.type.ILatLng|null);

                    /** Pose altitude */
                    altitude?: (number|null);

                    /** Pose heading */
                    heading?: (number|null);

                    /** Pose pitch */
                    pitch?: (number|null);

                    /** Pose roll */
                    roll?: (number|null);

                    /** Pose gpsRecordTimestampUnixEpoch */
                    gpsRecordTimestampUnixEpoch?: (google.protobuf.ITimestamp|null);

                    /** Pose level */
                    level?: (google.streetview.publish.v1.ILevel|null);

                    /** Pose accuracyMeters */
                    accuracyMeters?: (number|null);
                }

                /** Represents a Pose. */
                class Pose implements IPose {

                    /**
                     * Constructs a new Pose.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IPose);

                    /** Pose latLngPair. */
                    public latLngPair?: (google.type.ILatLng|null);

                    /** Pose altitude. */
                    public altitude: number;

                    /** Pose heading. */
                    public heading: number;

                    /** Pose pitch. */
                    public pitch: number;

                    /** Pose roll. */
                    public roll: number;

                    /** Pose gpsRecordTimestampUnixEpoch. */
                    public gpsRecordTimestampUnixEpoch?: (google.protobuf.ITimestamp|null);

                    /** Pose level. */
                    public level?: (google.streetview.publish.v1.ILevel|null);

                    /** Pose accuracyMeters. */
                    public accuracyMeters: number;

                    /**
                     * Creates a new Pose instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Pose instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IPose): google.streetview.publish.v1.Pose;

                    /**
                     * Encodes the specified Pose message. Does not implicitly {@link google.streetview.publish.v1.Pose.verify|verify} messages.
                     * @param message Pose message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IPose, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Pose message, length delimited. Does not implicitly {@link google.streetview.publish.v1.Pose.verify|verify} messages.
                     * @param message Pose message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IPose, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Pose message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Pose
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.Pose;

                    /**
                     * Decodes a Pose message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Pose
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.Pose;

                    /**
                     * Verifies a Pose message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Pose message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Pose
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.Pose;

                    /**
                     * Creates a plain object from a Pose message. Also converts values to other types if specified.
                     * @param message Pose
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.Pose, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Pose to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Pose
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Imu. */
                interface IImu {

                    /** Imu accelMpsps */
                    accelMpsps?: (google.streetview.publish.v1.Imu.IMeasurement3d[]|null);

                    /** Imu gyroRps */
                    gyroRps?: (google.streetview.publish.v1.Imu.IMeasurement3d[]|null);

                    /** Imu magUt */
                    magUt?: (google.streetview.publish.v1.Imu.IMeasurement3d[]|null);
                }

                /** Represents an Imu. */
                class Imu implements IImu {

                    /**
                     * Constructs a new Imu.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IImu);

                    /** Imu accelMpsps. */
                    public accelMpsps: google.streetview.publish.v1.Imu.IMeasurement3d[];

                    /** Imu gyroRps. */
                    public gyroRps: google.streetview.publish.v1.Imu.IMeasurement3d[];

                    /** Imu magUt. */
                    public magUt: google.streetview.publish.v1.Imu.IMeasurement3d[];

                    /**
                     * Creates a new Imu instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Imu instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IImu): google.streetview.publish.v1.Imu;

                    /**
                     * Encodes the specified Imu message. Does not implicitly {@link google.streetview.publish.v1.Imu.verify|verify} messages.
                     * @param message Imu message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IImu, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Imu message, length delimited. Does not implicitly {@link google.streetview.publish.v1.Imu.verify|verify} messages.
                     * @param message Imu message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IImu, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Imu message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Imu
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.Imu;

                    /**
                     * Decodes an Imu message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Imu
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.Imu;

                    /**
                     * Verifies an Imu message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Imu message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Imu
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.Imu;

                    /**
                     * Creates a plain object from an Imu message. Also converts values to other types if specified.
                     * @param message Imu
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.Imu, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Imu to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Imu
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Imu {

                    /** Properties of a Measurement3d. */
                    interface IMeasurement3d {

                        /** Measurement3d captureTime */
                        captureTime?: (google.protobuf.ITimestamp|null);

                        /** Measurement3d x */
                        x?: (number|null);

                        /** Measurement3d y */
                        y?: (number|null);

                        /** Measurement3d z */
                        z?: (number|null);
                    }

                    /** Represents a Measurement3d. */
                    class Measurement3d implements IMeasurement3d {

                        /**
                         * Constructs a new Measurement3d.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.streetview.publish.v1.Imu.IMeasurement3d);

                        /** Measurement3d captureTime. */
                        public captureTime?: (google.protobuf.ITimestamp|null);

                        /** Measurement3d x. */
                        public x: number;

                        /** Measurement3d y. */
                        public y: number;

                        /** Measurement3d z. */
                        public z: number;

                        /**
                         * Creates a new Measurement3d instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Measurement3d instance
                         */
                        public static create(properties?: google.streetview.publish.v1.Imu.IMeasurement3d): google.streetview.publish.v1.Imu.Measurement3d;

                        /**
                         * Encodes the specified Measurement3d message. Does not implicitly {@link google.streetview.publish.v1.Imu.Measurement3d.verify|verify} messages.
                         * @param message Measurement3d message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.streetview.publish.v1.Imu.IMeasurement3d, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Measurement3d message, length delimited. Does not implicitly {@link google.streetview.publish.v1.Imu.Measurement3d.verify|verify} messages.
                         * @param message Measurement3d message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.streetview.publish.v1.Imu.IMeasurement3d, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Measurement3d message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Measurement3d
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.Imu.Measurement3d;

                        /**
                         * Decodes a Measurement3d message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Measurement3d
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.Imu.Measurement3d;

                        /**
                         * Verifies a Measurement3d message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Measurement3d message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Measurement3d
                         */
                        public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.Imu.Measurement3d;

                        /**
                         * Creates a plain object from a Measurement3d message. Also converts values to other types if specified.
                         * @param message Measurement3d
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.streetview.publish.v1.Imu.Measurement3d, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Measurement3d to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Measurement3d
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a Place. */
                interface IPlace {

                    /** Place placeId */
                    placeId?: (string|null);

                    /** Place name */
                    name?: (string|null);

                    /** Place languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a Place. */
                class Place implements IPlace {

                    /**
                     * Constructs a new Place.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IPlace);

                    /** Place placeId. */
                    public placeId: string;

                    /** Place name. */
                    public name: string;

                    /** Place languageCode. */
                    public languageCode: string;

                    /**
                     * Creates a new Place instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Place instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IPlace): google.streetview.publish.v1.Place;

                    /**
                     * Encodes the specified Place message. Does not implicitly {@link google.streetview.publish.v1.Place.verify|verify} messages.
                     * @param message Place message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IPlace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Place message, length delimited. Does not implicitly {@link google.streetview.publish.v1.Place.verify|verify} messages.
                     * @param message Place message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IPlace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Place message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Place
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.Place;

                    /**
                     * Decodes a Place message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Place
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.Place;

                    /**
                     * Verifies a Place message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Place message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Place
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.Place;

                    /**
                     * Creates a plain object from a Place message. Also converts values to other types if specified.
                     * @param message Place
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.Place, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Place to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Place
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Connection. */
                interface IConnection {

                    /** Connection target */
                    target?: (google.streetview.publish.v1.IPhotoId|null);
                }

                /** Represents a Connection. */
                class Connection implements IConnection {

                    /**
                     * Constructs a new Connection.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IConnection);

                    /** Connection target. */
                    public target?: (google.streetview.publish.v1.IPhotoId|null);

                    /**
                     * Creates a new Connection instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Connection instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IConnection): google.streetview.publish.v1.Connection;

                    /**
                     * Encodes the specified Connection message. Does not implicitly {@link google.streetview.publish.v1.Connection.verify|verify} messages.
                     * @param message Connection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Connection message, length delimited. Does not implicitly {@link google.streetview.publish.v1.Connection.verify|verify} messages.
                     * @param message Connection message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IConnection, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Connection message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Connection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.Connection;

                    /**
                     * Decodes a Connection message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Connection
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.Connection;

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
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.Connection;

                    /**
                     * Creates a plain object from a Connection message. Also converts values to other types if specified.
                     * @param message Connection
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.Connection, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Photo. */
                interface IPhoto {

                    /** Photo photoId */
                    photoId?: (google.streetview.publish.v1.IPhotoId|null);

                    /** Photo uploadReference */
                    uploadReference?: (google.streetview.publish.v1.IUploadRef|null);

                    /** Photo downloadUrl */
                    downloadUrl?: (string|null);

                    /** Photo thumbnailUrl */
                    thumbnailUrl?: (string|null);

                    /** Photo shareLink */
                    shareLink?: (string|null);

                    /** Photo pose */
                    pose?: (google.streetview.publish.v1.IPose|null);

                    /** Photo connections */
                    connections?: (google.streetview.publish.v1.IConnection[]|null);

                    /** Photo captureTime */
                    captureTime?: (google.protobuf.ITimestamp|null);

                    /** Photo uploadTime */
                    uploadTime?: (google.protobuf.ITimestamp|null);

                    /** Photo places */
                    places?: (google.streetview.publish.v1.IPlace[]|null);

                    /** Photo viewCount */
                    viewCount?: (number|Long|string|null);

                    /** Photo transferStatus */
                    transferStatus?: (google.streetview.publish.v1.Photo.TransferStatus|keyof typeof google.streetview.publish.v1.Photo.TransferStatus|null);

                    /** Photo mapsPublishStatus */
                    mapsPublishStatus?: (google.streetview.publish.v1.Photo.MapsPublishStatus|keyof typeof google.streetview.publish.v1.Photo.MapsPublishStatus|null);
                }

                /** Represents a Photo. */
                class Photo implements IPhoto {

                    /**
                     * Constructs a new Photo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IPhoto);

                    /** Photo photoId. */
                    public photoId?: (google.streetview.publish.v1.IPhotoId|null);

                    /** Photo uploadReference. */
                    public uploadReference?: (google.streetview.publish.v1.IUploadRef|null);

                    /** Photo downloadUrl. */
                    public downloadUrl: string;

                    /** Photo thumbnailUrl. */
                    public thumbnailUrl: string;

                    /** Photo shareLink. */
                    public shareLink: string;

                    /** Photo pose. */
                    public pose?: (google.streetview.publish.v1.IPose|null);

                    /** Photo connections. */
                    public connections: google.streetview.publish.v1.IConnection[];

                    /** Photo captureTime. */
                    public captureTime?: (google.protobuf.ITimestamp|null);

                    /** Photo uploadTime. */
                    public uploadTime?: (google.protobuf.ITimestamp|null);

                    /** Photo places. */
                    public places: google.streetview.publish.v1.IPlace[];

                    /** Photo viewCount. */
                    public viewCount: (number|Long|string);

                    /** Photo transferStatus. */
                    public transferStatus: (google.streetview.publish.v1.Photo.TransferStatus|keyof typeof google.streetview.publish.v1.Photo.TransferStatus);

                    /** Photo mapsPublishStatus. */
                    public mapsPublishStatus: (google.streetview.publish.v1.Photo.MapsPublishStatus|keyof typeof google.streetview.publish.v1.Photo.MapsPublishStatus);

                    /**
                     * Creates a new Photo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Photo instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IPhoto): google.streetview.publish.v1.Photo;

                    /**
                     * Encodes the specified Photo message. Does not implicitly {@link google.streetview.publish.v1.Photo.verify|verify} messages.
                     * @param message Photo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Photo message, length delimited. Does not implicitly {@link google.streetview.publish.v1.Photo.verify|verify} messages.
                     * @param message Photo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IPhoto, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Photo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Photo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.Photo;

                    /**
                     * Decodes a Photo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Photo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.Photo;

                    /**
                     * Verifies a Photo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Photo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Photo
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.Photo;

                    /**
                     * Creates a plain object from a Photo message. Also converts values to other types if specified.
                     * @param message Photo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.Photo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Photo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Photo
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Photo {

                    /** TransferStatus enum. */
                    enum TransferStatus {
                        TRANSFER_STATUS_UNKNOWN = 0,
                        NEVER_TRANSFERRED = 1,
                        PENDING = 2,
                        COMPLETED = 3,
                        REJECTED = 4,
                        EXPIRED = 5,
                        CANCELLED = 6,
                        RECEIVED_VIA_TRANSFER = 7
                    }

                    /** MapsPublishStatus enum. */
                    enum MapsPublishStatus {
                        UNSPECIFIED_MAPS_PUBLISH_STATUS = 0,
                        PUBLISHED = 1,
                        REJECTED_UNKNOWN = 2
                    }
                }

                /** Properties of a PhotoSequence. */
                interface IPhotoSequence {

                    /** PhotoSequence id */
                    id?: (string|null);

                    /** PhotoSequence photos */
                    photos?: (google.streetview.publish.v1.IPhoto[]|null);

                    /** PhotoSequence uploadReference */
                    uploadReference?: (google.streetview.publish.v1.IUploadRef|null);

                    /** PhotoSequence captureTimeOverride */
                    captureTimeOverride?: (google.protobuf.ITimestamp|null);

                    /** PhotoSequence uploadTime */
                    uploadTime?: (google.protobuf.ITimestamp|null);

                    /** PhotoSequence rawGpsTimeline */
                    rawGpsTimeline?: (google.streetview.publish.v1.IPose[]|null);

                    /** PhotoSequence gpsSource */
                    gpsSource?: (google.streetview.publish.v1.PhotoSequence.GpsSource|keyof typeof google.streetview.publish.v1.PhotoSequence.GpsSource|null);

                    /** PhotoSequence imu */
                    imu?: (google.streetview.publish.v1.IImu|null);

                    /** PhotoSequence processingState */
                    processingState?: (google.streetview.publish.v1.ProcessingState|keyof typeof google.streetview.publish.v1.ProcessingState|null);

                    /** PhotoSequence failureReason */
                    failureReason?: (google.streetview.publish.v1.ProcessingFailureReason|keyof typeof google.streetview.publish.v1.ProcessingFailureReason|null);

                    /** PhotoSequence failureDetails */
                    failureDetails?: (google.streetview.publish.v1.IProcessingFailureDetails|null);

                    /** PhotoSequence distanceMeters */
                    distanceMeters?: (number|null);

                    /** PhotoSequence sequenceBounds */
                    sequenceBounds?: (google.streetview.publish.v1.ILatLngBounds|null);

                    /** PhotoSequence viewCount */
                    viewCount?: (number|Long|string|null);

                    /** PhotoSequence filename */
                    filename?: (string|null);
                }

                /** Represents a PhotoSequence. */
                class PhotoSequence implements IPhotoSequence {

                    /**
                     * Constructs a new PhotoSequence.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IPhotoSequence);

                    /** PhotoSequence id. */
                    public id: string;

                    /** PhotoSequence photos. */
                    public photos: google.streetview.publish.v1.IPhoto[];

                    /** PhotoSequence uploadReference. */
                    public uploadReference?: (google.streetview.publish.v1.IUploadRef|null);

                    /** PhotoSequence captureTimeOverride. */
                    public captureTimeOverride?: (google.protobuf.ITimestamp|null);

                    /** PhotoSequence uploadTime. */
                    public uploadTime?: (google.protobuf.ITimestamp|null);

                    /** PhotoSequence rawGpsTimeline. */
                    public rawGpsTimeline: google.streetview.publish.v1.IPose[];

                    /** PhotoSequence gpsSource. */
                    public gpsSource: (google.streetview.publish.v1.PhotoSequence.GpsSource|keyof typeof google.streetview.publish.v1.PhotoSequence.GpsSource);

                    /** PhotoSequence imu. */
                    public imu?: (google.streetview.publish.v1.IImu|null);

                    /** PhotoSequence processingState. */
                    public processingState: (google.streetview.publish.v1.ProcessingState|keyof typeof google.streetview.publish.v1.ProcessingState);

                    /** PhotoSequence failureReason. */
                    public failureReason: (google.streetview.publish.v1.ProcessingFailureReason|keyof typeof google.streetview.publish.v1.ProcessingFailureReason);

                    /** PhotoSequence failureDetails. */
                    public failureDetails?: (google.streetview.publish.v1.IProcessingFailureDetails|null);

                    /** PhotoSequence distanceMeters. */
                    public distanceMeters: number;

                    /** PhotoSequence sequenceBounds. */
                    public sequenceBounds?: (google.streetview.publish.v1.ILatLngBounds|null);

                    /** PhotoSequence viewCount. */
                    public viewCount: (number|Long|string);

                    /** PhotoSequence filename. */
                    public filename: string;

                    /**
                     * Creates a new PhotoSequence instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PhotoSequence instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IPhotoSequence): google.streetview.publish.v1.PhotoSequence;

                    /**
                     * Encodes the specified PhotoSequence message. Does not implicitly {@link google.streetview.publish.v1.PhotoSequence.verify|verify} messages.
                     * @param message PhotoSequence message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IPhotoSequence, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PhotoSequence message, length delimited. Does not implicitly {@link google.streetview.publish.v1.PhotoSequence.verify|verify} messages.
                     * @param message PhotoSequence message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IPhotoSequence, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PhotoSequence message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PhotoSequence
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.PhotoSequence;

                    /**
                     * Decodes a PhotoSequence message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PhotoSequence
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.PhotoSequence;

                    /**
                     * Verifies a PhotoSequence message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PhotoSequence message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PhotoSequence
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.PhotoSequence;

                    /**
                     * Creates a plain object from a PhotoSequence message. Also converts values to other types if specified.
                     * @param message PhotoSequence
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.PhotoSequence, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PhotoSequence to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PhotoSequence
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PhotoSequence {

                    /** GpsSource enum. */
                    enum GpsSource {
                        PHOTO_SEQUENCE = 0,
                        CAMERA_MOTION_METADATA_TRACK = 1
                    }
                }

                /** Properties of a LatLngBounds. */
                interface ILatLngBounds {

                    /** LatLngBounds southwest */
                    southwest?: (google.type.ILatLng|null);

                    /** LatLngBounds northeast */
                    northeast?: (google.type.ILatLng|null);
                }

                /** Represents a LatLngBounds. */
                class LatLngBounds implements ILatLngBounds {

                    /**
                     * Constructs a new LatLngBounds.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.ILatLngBounds);

                    /** LatLngBounds southwest. */
                    public southwest?: (google.type.ILatLng|null);

                    /** LatLngBounds northeast. */
                    public northeast?: (google.type.ILatLng|null);

                    /**
                     * Creates a new LatLngBounds instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LatLngBounds instance
                     */
                    public static create(properties?: google.streetview.publish.v1.ILatLngBounds): google.streetview.publish.v1.LatLngBounds;

                    /**
                     * Encodes the specified LatLngBounds message. Does not implicitly {@link google.streetview.publish.v1.LatLngBounds.verify|verify} messages.
                     * @param message LatLngBounds message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.ILatLngBounds, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LatLngBounds message, length delimited. Does not implicitly {@link google.streetview.publish.v1.LatLngBounds.verify|verify} messages.
                     * @param message LatLngBounds message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.ILatLngBounds, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LatLngBounds message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LatLngBounds
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.LatLngBounds;

                    /**
                     * Decodes a LatLngBounds message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LatLngBounds
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.LatLngBounds;

                    /**
                     * Verifies a LatLngBounds message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LatLngBounds message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LatLngBounds
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.LatLngBounds;

                    /**
                     * Creates a plain object from a LatLngBounds message. Also converts values to other types if specified.
                     * @param message LatLngBounds
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.LatLngBounds, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LatLngBounds to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LatLngBounds
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** ProcessingState enum. */
                enum ProcessingState {
                    PROCESSING_STATE_UNSPECIFIED = 0,
                    PENDING = 1,
                    PROCESSING = 2,
                    PROCESSED = 3,
                    FAILED = 4
                }

                /** ProcessingFailureReason enum. */
                enum ProcessingFailureReason {
                    PROCESSING_FAILURE_REASON_UNSPECIFIED = 0,
                    LOW_RESOLUTION = 1,
                    DUPLICATE = 2,
                    INSUFFICIENT_GPS = 3,
                    NO_OVERLAP_GPS = 4,
                    INVALID_GPS = 5,
                    FAILED_TO_REFINE_POSITIONS = 6,
                    TAKEDOWN = 7,
                    CORRUPT_VIDEO = 8,
                    INTERNAL = 9,
                    INVALID_VIDEO_FORMAT = 10,
                    INVALID_VIDEO_DIMENSIONS = 11,
                    INVALID_CAPTURE_TIME = 12,
                    GPS_DATA_GAP = 13,
                    JUMPY_GPS = 14,
                    INVALID_IMU = 15,
                    INSUFFICIENT_IMU = 21,
                    INSUFFICIENT_OVERLAP_TIME_SERIES = 22,
                    IMU_DATA_GAP = 16,
                    UNSUPPORTED_CAMERA = 17,
                    NOT_OUTDOORS = 18,
                    INSUFFICIENT_VIDEO_FRAMES = 19,
                    INSUFFICIENT_MOVEMENT = 20,
                    MAST_DOWN = 27,
                    CAMERA_COVERED = 28
                }

                /** Properties of a ProcessingFailureDetails. */
                interface IProcessingFailureDetails {

                    /** ProcessingFailureDetails insufficientGpsDetails */
                    insufficientGpsDetails?: (google.streetview.publish.v1.IInsufficientGpsFailureDetails|null);

                    /** ProcessingFailureDetails gpsDataGapDetails */
                    gpsDataGapDetails?: (google.streetview.publish.v1.IGpsDataGapFailureDetails|null);

                    /** ProcessingFailureDetails imuDataGapDetails */
                    imuDataGapDetails?: (google.streetview.publish.v1.IImuDataGapFailureDetails|null);

                    /** ProcessingFailureDetails notOutdoorsDetails */
                    notOutdoorsDetails?: (google.streetview.publish.v1.INotOutdoorsFailureDetails|null);

                    /** ProcessingFailureDetails noOverlapGpsDetails */
                    noOverlapGpsDetails?: (google.streetview.publish.v1.INoOverlapGpsFailureDetails|null);
                }

                /** Represents a ProcessingFailureDetails. */
                class ProcessingFailureDetails implements IProcessingFailureDetails {

                    /**
                     * Constructs a new ProcessingFailureDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IProcessingFailureDetails);

                    /** ProcessingFailureDetails insufficientGpsDetails. */
                    public insufficientGpsDetails?: (google.streetview.publish.v1.IInsufficientGpsFailureDetails|null);

                    /** ProcessingFailureDetails gpsDataGapDetails. */
                    public gpsDataGapDetails?: (google.streetview.publish.v1.IGpsDataGapFailureDetails|null);

                    /** ProcessingFailureDetails imuDataGapDetails. */
                    public imuDataGapDetails?: (google.streetview.publish.v1.IImuDataGapFailureDetails|null);

                    /** ProcessingFailureDetails notOutdoorsDetails. */
                    public notOutdoorsDetails?: (google.streetview.publish.v1.INotOutdoorsFailureDetails|null);

                    /** ProcessingFailureDetails noOverlapGpsDetails. */
                    public noOverlapGpsDetails?: (google.streetview.publish.v1.INoOverlapGpsFailureDetails|null);

                    /** ProcessingFailureDetails details. */
                    public details?: ("insufficientGpsDetails"|"gpsDataGapDetails"|"imuDataGapDetails"|"notOutdoorsDetails"|"noOverlapGpsDetails");

                    /**
                     * Creates a new ProcessingFailureDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProcessingFailureDetails instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IProcessingFailureDetails): google.streetview.publish.v1.ProcessingFailureDetails;

                    /**
                     * Encodes the specified ProcessingFailureDetails message. Does not implicitly {@link google.streetview.publish.v1.ProcessingFailureDetails.verify|verify} messages.
                     * @param message ProcessingFailureDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IProcessingFailureDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProcessingFailureDetails message, length delimited. Does not implicitly {@link google.streetview.publish.v1.ProcessingFailureDetails.verify|verify} messages.
                     * @param message ProcessingFailureDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IProcessingFailureDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProcessingFailureDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProcessingFailureDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.ProcessingFailureDetails;

                    /**
                     * Decodes a ProcessingFailureDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProcessingFailureDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.ProcessingFailureDetails;

                    /**
                     * Verifies a ProcessingFailureDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProcessingFailureDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProcessingFailureDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.ProcessingFailureDetails;

                    /**
                     * Creates a plain object from a ProcessingFailureDetails message. Also converts values to other types if specified.
                     * @param message ProcessingFailureDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.ProcessingFailureDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProcessingFailureDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ProcessingFailureDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InsufficientGpsFailureDetails. */
                interface IInsufficientGpsFailureDetails {

                    /** InsufficientGpsFailureDetails gpsPointsFound */
                    gpsPointsFound?: (number|null);
                }

                /** Represents an InsufficientGpsFailureDetails. */
                class InsufficientGpsFailureDetails implements IInsufficientGpsFailureDetails {

                    /**
                     * Constructs a new InsufficientGpsFailureDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IInsufficientGpsFailureDetails);

                    /** InsufficientGpsFailureDetails gpsPointsFound. */
                    public gpsPointsFound?: (number|null);

                    /**
                     * Creates a new InsufficientGpsFailureDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InsufficientGpsFailureDetails instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IInsufficientGpsFailureDetails): google.streetview.publish.v1.InsufficientGpsFailureDetails;

                    /**
                     * Encodes the specified InsufficientGpsFailureDetails message. Does not implicitly {@link google.streetview.publish.v1.InsufficientGpsFailureDetails.verify|verify} messages.
                     * @param message InsufficientGpsFailureDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IInsufficientGpsFailureDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InsufficientGpsFailureDetails message, length delimited. Does not implicitly {@link google.streetview.publish.v1.InsufficientGpsFailureDetails.verify|verify} messages.
                     * @param message InsufficientGpsFailureDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IInsufficientGpsFailureDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InsufficientGpsFailureDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InsufficientGpsFailureDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.InsufficientGpsFailureDetails;

                    /**
                     * Decodes an InsufficientGpsFailureDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InsufficientGpsFailureDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.InsufficientGpsFailureDetails;

                    /**
                     * Verifies an InsufficientGpsFailureDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InsufficientGpsFailureDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InsufficientGpsFailureDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.InsufficientGpsFailureDetails;

                    /**
                     * Creates a plain object from an InsufficientGpsFailureDetails message. Also converts values to other types if specified.
                     * @param message InsufficientGpsFailureDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.InsufficientGpsFailureDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InsufficientGpsFailureDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InsufficientGpsFailureDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GpsDataGapFailureDetails. */
                interface IGpsDataGapFailureDetails {

                    /** GpsDataGapFailureDetails gapDuration */
                    gapDuration?: (google.protobuf.IDuration|null);

                    /** GpsDataGapFailureDetails gapStartTime */
                    gapStartTime?: (google.protobuf.IDuration|null);
                }

                /** Represents a GpsDataGapFailureDetails. */
                class GpsDataGapFailureDetails implements IGpsDataGapFailureDetails {

                    /**
                     * Constructs a new GpsDataGapFailureDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IGpsDataGapFailureDetails);

                    /** GpsDataGapFailureDetails gapDuration. */
                    public gapDuration?: (google.protobuf.IDuration|null);

                    /** GpsDataGapFailureDetails gapStartTime. */
                    public gapStartTime?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new GpsDataGapFailureDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GpsDataGapFailureDetails instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IGpsDataGapFailureDetails): google.streetview.publish.v1.GpsDataGapFailureDetails;

                    /**
                     * Encodes the specified GpsDataGapFailureDetails message. Does not implicitly {@link google.streetview.publish.v1.GpsDataGapFailureDetails.verify|verify} messages.
                     * @param message GpsDataGapFailureDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IGpsDataGapFailureDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GpsDataGapFailureDetails message, length delimited. Does not implicitly {@link google.streetview.publish.v1.GpsDataGapFailureDetails.verify|verify} messages.
                     * @param message GpsDataGapFailureDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IGpsDataGapFailureDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GpsDataGapFailureDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GpsDataGapFailureDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.GpsDataGapFailureDetails;

                    /**
                     * Decodes a GpsDataGapFailureDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GpsDataGapFailureDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.GpsDataGapFailureDetails;

                    /**
                     * Verifies a GpsDataGapFailureDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GpsDataGapFailureDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GpsDataGapFailureDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.GpsDataGapFailureDetails;

                    /**
                     * Creates a plain object from a GpsDataGapFailureDetails message. Also converts values to other types if specified.
                     * @param message GpsDataGapFailureDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.GpsDataGapFailureDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GpsDataGapFailureDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GpsDataGapFailureDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImuDataGapFailureDetails. */
                interface IImuDataGapFailureDetails {

                    /** ImuDataGapFailureDetails gapDuration */
                    gapDuration?: (google.protobuf.IDuration|null);

                    /** ImuDataGapFailureDetails gapStartTime */
                    gapStartTime?: (google.protobuf.IDuration|null);
                }

                /** Represents an ImuDataGapFailureDetails. */
                class ImuDataGapFailureDetails implements IImuDataGapFailureDetails {

                    /**
                     * Constructs a new ImuDataGapFailureDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IImuDataGapFailureDetails);

                    /** ImuDataGapFailureDetails gapDuration. */
                    public gapDuration?: (google.protobuf.IDuration|null);

                    /** ImuDataGapFailureDetails gapStartTime. */
                    public gapStartTime?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new ImuDataGapFailureDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImuDataGapFailureDetails instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IImuDataGapFailureDetails): google.streetview.publish.v1.ImuDataGapFailureDetails;

                    /**
                     * Encodes the specified ImuDataGapFailureDetails message. Does not implicitly {@link google.streetview.publish.v1.ImuDataGapFailureDetails.verify|verify} messages.
                     * @param message ImuDataGapFailureDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IImuDataGapFailureDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImuDataGapFailureDetails message, length delimited. Does not implicitly {@link google.streetview.publish.v1.ImuDataGapFailureDetails.verify|verify} messages.
                     * @param message ImuDataGapFailureDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IImuDataGapFailureDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImuDataGapFailureDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImuDataGapFailureDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.ImuDataGapFailureDetails;

                    /**
                     * Decodes an ImuDataGapFailureDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImuDataGapFailureDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.ImuDataGapFailureDetails;

                    /**
                     * Verifies an ImuDataGapFailureDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImuDataGapFailureDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImuDataGapFailureDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.ImuDataGapFailureDetails;

                    /**
                     * Creates a plain object from an ImuDataGapFailureDetails message. Also converts values to other types if specified.
                     * @param message ImuDataGapFailureDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.ImuDataGapFailureDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImuDataGapFailureDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImuDataGapFailureDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NotOutdoorsFailureDetails. */
                interface INotOutdoorsFailureDetails {

                    /** NotOutdoorsFailureDetails startTime */
                    startTime?: (google.protobuf.IDuration|null);
                }

                /** Represents a NotOutdoorsFailureDetails. */
                class NotOutdoorsFailureDetails implements INotOutdoorsFailureDetails {

                    /**
                     * Constructs a new NotOutdoorsFailureDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.INotOutdoorsFailureDetails);

                    /** NotOutdoorsFailureDetails startTime. */
                    public startTime?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new NotOutdoorsFailureDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NotOutdoorsFailureDetails instance
                     */
                    public static create(properties?: google.streetview.publish.v1.INotOutdoorsFailureDetails): google.streetview.publish.v1.NotOutdoorsFailureDetails;

                    /**
                     * Encodes the specified NotOutdoorsFailureDetails message. Does not implicitly {@link google.streetview.publish.v1.NotOutdoorsFailureDetails.verify|verify} messages.
                     * @param message NotOutdoorsFailureDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.INotOutdoorsFailureDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NotOutdoorsFailureDetails message, length delimited. Does not implicitly {@link google.streetview.publish.v1.NotOutdoorsFailureDetails.verify|verify} messages.
                     * @param message NotOutdoorsFailureDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.INotOutdoorsFailureDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NotOutdoorsFailureDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NotOutdoorsFailureDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.NotOutdoorsFailureDetails;

                    /**
                     * Decodes a NotOutdoorsFailureDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NotOutdoorsFailureDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.NotOutdoorsFailureDetails;

                    /**
                     * Verifies a NotOutdoorsFailureDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NotOutdoorsFailureDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NotOutdoorsFailureDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.NotOutdoorsFailureDetails;

                    /**
                     * Creates a plain object from a NotOutdoorsFailureDetails message. Also converts values to other types if specified.
                     * @param message NotOutdoorsFailureDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.NotOutdoorsFailureDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NotOutdoorsFailureDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NotOutdoorsFailureDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NoOverlapGpsFailureDetails. */
                interface INoOverlapGpsFailureDetails {

                    /** NoOverlapGpsFailureDetails gpsStartTime */
                    gpsStartTime?: (google.protobuf.ITimestamp|null);

                    /** NoOverlapGpsFailureDetails gpsEndTime */
                    gpsEndTime?: (google.protobuf.ITimestamp|null);

                    /** NoOverlapGpsFailureDetails videoStartTime */
                    videoStartTime?: (google.protobuf.ITimestamp|null);

                    /** NoOverlapGpsFailureDetails videoEndTime */
                    videoEndTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a NoOverlapGpsFailureDetails. */
                class NoOverlapGpsFailureDetails implements INoOverlapGpsFailureDetails {

                    /**
                     * Constructs a new NoOverlapGpsFailureDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.INoOverlapGpsFailureDetails);

                    /** NoOverlapGpsFailureDetails gpsStartTime. */
                    public gpsStartTime?: (google.protobuf.ITimestamp|null);

                    /** NoOverlapGpsFailureDetails gpsEndTime. */
                    public gpsEndTime?: (google.protobuf.ITimestamp|null);

                    /** NoOverlapGpsFailureDetails videoStartTime. */
                    public videoStartTime?: (google.protobuf.ITimestamp|null);

                    /** NoOverlapGpsFailureDetails videoEndTime. */
                    public videoEndTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new NoOverlapGpsFailureDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NoOverlapGpsFailureDetails instance
                     */
                    public static create(properties?: google.streetview.publish.v1.INoOverlapGpsFailureDetails): google.streetview.publish.v1.NoOverlapGpsFailureDetails;

                    /**
                     * Encodes the specified NoOverlapGpsFailureDetails message. Does not implicitly {@link google.streetview.publish.v1.NoOverlapGpsFailureDetails.verify|verify} messages.
                     * @param message NoOverlapGpsFailureDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.INoOverlapGpsFailureDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NoOverlapGpsFailureDetails message, length delimited. Does not implicitly {@link google.streetview.publish.v1.NoOverlapGpsFailureDetails.verify|verify} messages.
                     * @param message NoOverlapGpsFailureDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.INoOverlapGpsFailureDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NoOverlapGpsFailureDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NoOverlapGpsFailureDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.NoOverlapGpsFailureDetails;

                    /**
                     * Decodes a NoOverlapGpsFailureDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NoOverlapGpsFailureDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.NoOverlapGpsFailureDetails;

                    /**
                     * Verifies a NoOverlapGpsFailureDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NoOverlapGpsFailureDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NoOverlapGpsFailureDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.NoOverlapGpsFailureDetails;

                    /**
                     * Creates a plain object from a NoOverlapGpsFailureDetails message. Also converts values to other types if specified.
                     * @param message NoOverlapGpsFailureDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.NoOverlapGpsFailureDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NoOverlapGpsFailureDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NoOverlapGpsFailureDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePhotoRequest. */
                interface ICreatePhotoRequest {

                    /** CreatePhotoRequest photo */
                    photo?: (google.streetview.publish.v1.IPhoto|null);
                }

                /** Represents a CreatePhotoRequest. */
                class CreatePhotoRequest implements ICreatePhotoRequest {

                    /**
                     * Constructs a new CreatePhotoRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.ICreatePhotoRequest);

                    /** CreatePhotoRequest photo. */
                    public photo?: (google.streetview.publish.v1.IPhoto|null);

                    /**
                     * Creates a new CreatePhotoRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePhotoRequest instance
                     */
                    public static create(properties?: google.streetview.publish.v1.ICreatePhotoRequest): google.streetview.publish.v1.CreatePhotoRequest;

                    /**
                     * Encodes the specified CreatePhotoRequest message. Does not implicitly {@link google.streetview.publish.v1.CreatePhotoRequest.verify|verify} messages.
                     * @param message CreatePhotoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.ICreatePhotoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePhotoRequest message, length delimited. Does not implicitly {@link google.streetview.publish.v1.CreatePhotoRequest.verify|verify} messages.
                     * @param message CreatePhotoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.ICreatePhotoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePhotoRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePhotoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.CreatePhotoRequest;

                    /**
                     * Decodes a CreatePhotoRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePhotoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.CreatePhotoRequest;

                    /**
                     * Verifies a CreatePhotoRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePhotoRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePhotoRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.CreatePhotoRequest;

                    /**
                     * Creates a plain object from a CreatePhotoRequest message. Also converts values to other types if specified.
                     * @param message CreatePhotoRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.CreatePhotoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePhotoRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePhotoRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetPhotoRequest. */
                interface IGetPhotoRequest {

                    /** GetPhotoRequest photoId */
                    photoId?: (string|null);

                    /** GetPhotoRequest view */
                    view?: (google.streetview.publish.v1.PhotoView|keyof typeof google.streetview.publish.v1.PhotoView|null);

                    /** GetPhotoRequest languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a GetPhotoRequest. */
                class GetPhotoRequest implements IGetPhotoRequest {

                    /**
                     * Constructs a new GetPhotoRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IGetPhotoRequest);

                    /** GetPhotoRequest photoId. */
                    public photoId: string;

                    /** GetPhotoRequest view. */
                    public view: (google.streetview.publish.v1.PhotoView|keyof typeof google.streetview.publish.v1.PhotoView);

                    /** GetPhotoRequest languageCode. */
                    public languageCode: string;

                    /**
                     * Creates a new GetPhotoRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPhotoRequest instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IGetPhotoRequest): google.streetview.publish.v1.GetPhotoRequest;

                    /**
                     * Encodes the specified GetPhotoRequest message. Does not implicitly {@link google.streetview.publish.v1.GetPhotoRequest.verify|verify} messages.
                     * @param message GetPhotoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IGetPhotoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPhotoRequest message, length delimited. Does not implicitly {@link google.streetview.publish.v1.GetPhotoRequest.verify|verify} messages.
                     * @param message GetPhotoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IGetPhotoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPhotoRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPhotoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.GetPhotoRequest;

                    /**
                     * Decodes a GetPhotoRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPhotoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.GetPhotoRequest;

                    /**
                     * Verifies a GetPhotoRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPhotoRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPhotoRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.GetPhotoRequest;

                    /**
                     * Creates a plain object from a GetPhotoRequest message. Also converts values to other types if specified.
                     * @param message GetPhotoRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.GetPhotoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPhotoRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPhotoRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchGetPhotosRequest. */
                interface IBatchGetPhotosRequest {

                    /** BatchGetPhotosRequest photoIds */
                    photoIds?: (string[]|null);

                    /** BatchGetPhotosRequest view */
                    view?: (google.streetview.publish.v1.PhotoView|keyof typeof google.streetview.publish.v1.PhotoView|null);

                    /** BatchGetPhotosRequest languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a BatchGetPhotosRequest. */
                class BatchGetPhotosRequest implements IBatchGetPhotosRequest {

                    /**
                     * Constructs a new BatchGetPhotosRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IBatchGetPhotosRequest);

                    /** BatchGetPhotosRequest photoIds. */
                    public photoIds: string[];

                    /** BatchGetPhotosRequest view. */
                    public view: (google.streetview.publish.v1.PhotoView|keyof typeof google.streetview.publish.v1.PhotoView);

                    /** BatchGetPhotosRequest languageCode. */
                    public languageCode: string;

                    /**
                     * Creates a new BatchGetPhotosRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchGetPhotosRequest instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IBatchGetPhotosRequest): google.streetview.publish.v1.BatchGetPhotosRequest;

                    /**
                     * Encodes the specified BatchGetPhotosRequest message. Does not implicitly {@link google.streetview.publish.v1.BatchGetPhotosRequest.verify|verify} messages.
                     * @param message BatchGetPhotosRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IBatchGetPhotosRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchGetPhotosRequest message, length delimited. Does not implicitly {@link google.streetview.publish.v1.BatchGetPhotosRequest.verify|verify} messages.
                     * @param message BatchGetPhotosRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IBatchGetPhotosRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchGetPhotosRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchGetPhotosRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.BatchGetPhotosRequest;

                    /**
                     * Decodes a BatchGetPhotosRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchGetPhotosRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.BatchGetPhotosRequest;

                    /**
                     * Verifies a BatchGetPhotosRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchGetPhotosRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchGetPhotosRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.BatchGetPhotosRequest;

                    /**
                     * Creates a plain object from a BatchGetPhotosRequest message. Also converts values to other types if specified.
                     * @param message BatchGetPhotosRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.BatchGetPhotosRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchGetPhotosRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchGetPhotosRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchGetPhotosResponse. */
                interface IBatchGetPhotosResponse {

                    /** BatchGetPhotosResponse results */
                    results?: (google.streetview.publish.v1.IPhotoResponse[]|null);
                }

                /** Represents a BatchGetPhotosResponse. */
                class BatchGetPhotosResponse implements IBatchGetPhotosResponse {

                    /**
                     * Constructs a new BatchGetPhotosResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IBatchGetPhotosResponse);

                    /** BatchGetPhotosResponse results. */
                    public results: google.streetview.publish.v1.IPhotoResponse[];

                    /**
                     * Creates a new BatchGetPhotosResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchGetPhotosResponse instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IBatchGetPhotosResponse): google.streetview.publish.v1.BatchGetPhotosResponse;

                    /**
                     * Encodes the specified BatchGetPhotosResponse message. Does not implicitly {@link google.streetview.publish.v1.BatchGetPhotosResponse.verify|verify} messages.
                     * @param message BatchGetPhotosResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IBatchGetPhotosResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchGetPhotosResponse message, length delimited. Does not implicitly {@link google.streetview.publish.v1.BatchGetPhotosResponse.verify|verify} messages.
                     * @param message BatchGetPhotosResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IBatchGetPhotosResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchGetPhotosResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchGetPhotosResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.BatchGetPhotosResponse;

                    /**
                     * Decodes a BatchGetPhotosResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchGetPhotosResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.BatchGetPhotosResponse;

                    /**
                     * Verifies a BatchGetPhotosResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchGetPhotosResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchGetPhotosResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.BatchGetPhotosResponse;

                    /**
                     * Creates a plain object from a BatchGetPhotosResponse message. Also converts values to other types if specified.
                     * @param message BatchGetPhotosResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.BatchGetPhotosResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchGetPhotosResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchGetPhotosResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a PhotoResponse. */
                interface IPhotoResponse {

                    /** PhotoResponse status */
                    status?: (google.rpc.IStatus|null);

                    /** PhotoResponse photo */
                    photo?: (google.streetview.publish.v1.IPhoto|null);
                }

                /** Represents a PhotoResponse. */
                class PhotoResponse implements IPhotoResponse {

                    /**
                     * Constructs a new PhotoResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IPhotoResponse);

                    /** PhotoResponse status. */
                    public status?: (google.rpc.IStatus|null);

                    /** PhotoResponse photo. */
                    public photo?: (google.streetview.publish.v1.IPhoto|null);

                    /**
                     * Creates a new PhotoResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PhotoResponse instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IPhotoResponse): google.streetview.publish.v1.PhotoResponse;

                    /**
                     * Encodes the specified PhotoResponse message. Does not implicitly {@link google.streetview.publish.v1.PhotoResponse.verify|verify} messages.
                     * @param message PhotoResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IPhotoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PhotoResponse message, length delimited. Does not implicitly {@link google.streetview.publish.v1.PhotoResponse.verify|verify} messages.
                     * @param message PhotoResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IPhotoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PhotoResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PhotoResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.PhotoResponse;

                    /**
                     * Decodes a PhotoResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PhotoResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.PhotoResponse;

                    /**
                     * Verifies a PhotoResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PhotoResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PhotoResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.PhotoResponse;

                    /**
                     * Creates a plain object from a PhotoResponse message. Also converts values to other types if specified.
                     * @param message PhotoResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.PhotoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PhotoResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PhotoResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPhotosRequest. */
                interface IListPhotosRequest {

                    /** ListPhotosRequest view */
                    view?: (google.streetview.publish.v1.PhotoView|keyof typeof google.streetview.publish.v1.PhotoView|null);

                    /** ListPhotosRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPhotosRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPhotosRequest filter */
                    filter?: (string|null);

                    /** ListPhotosRequest languageCode */
                    languageCode?: (string|null);
                }

                /** Represents a ListPhotosRequest. */
                class ListPhotosRequest implements IListPhotosRequest {

                    /**
                     * Constructs a new ListPhotosRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IListPhotosRequest);

                    /** ListPhotosRequest view. */
                    public view: (google.streetview.publish.v1.PhotoView|keyof typeof google.streetview.publish.v1.PhotoView);

                    /** ListPhotosRequest pageSize. */
                    public pageSize: number;

                    /** ListPhotosRequest pageToken. */
                    public pageToken: string;

                    /** ListPhotosRequest filter. */
                    public filter: string;

                    /** ListPhotosRequest languageCode. */
                    public languageCode: string;

                    /**
                     * Creates a new ListPhotosRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPhotosRequest instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IListPhotosRequest): google.streetview.publish.v1.ListPhotosRequest;

                    /**
                     * Encodes the specified ListPhotosRequest message. Does not implicitly {@link google.streetview.publish.v1.ListPhotosRequest.verify|verify} messages.
                     * @param message ListPhotosRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IListPhotosRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPhotosRequest message, length delimited. Does not implicitly {@link google.streetview.publish.v1.ListPhotosRequest.verify|verify} messages.
                     * @param message ListPhotosRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IListPhotosRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPhotosRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPhotosRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.ListPhotosRequest;

                    /**
                     * Decodes a ListPhotosRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPhotosRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.ListPhotosRequest;

                    /**
                     * Verifies a ListPhotosRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPhotosRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPhotosRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.ListPhotosRequest;

                    /**
                     * Creates a plain object from a ListPhotosRequest message. Also converts values to other types if specified.
                     * @param message ListPhotosRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.ListPhotosRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPhotosRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPhotosRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPhotosResponse. */
                interface IListPhotosResponse {

                    /** ListPhotosResponse photos */
                    photos?: (google.streetview.publish.v1.IPhoto[]|null);

                    /** ListPhotosResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPhotosResponse. */
                class ListPhotosResponse implements IListPhotosResponse {

                    /**
                     * Constructs a new ListPhotosResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IListPhotosResponse);

                    /** ListPhotosResponse photos. */
                    public photos: google.streetview.publish.v1.IPhoto[];

                    /** ListPhotosResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPhotosResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPhotosResponse instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IListPhotosResponse): google.streetview.publish.v1.ListPhotosResponse;

                    /**
                     * Encodes the specified ListPhotosResponse message. Does not implicitly {@link google.streetview.publish.v1.ListPhotosResponse.verify|verify} messages.
                     * @param message ListPhotosResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IListPhotosResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPhotosResponse message, length delimited. Does not implicitly {@link google.streetview.publish.v1.ListPhotosResponse.verify|verify} messages.
                     * @param message ListPhotosResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IListPhotosResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPhotosResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPhotosResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.ListPhotosResponse;

                    /**
                     * Decodes a ListPhotosResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPhotosResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.ListPhotosResponse;

                    /**
                     * Verifies a ListPhotosResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPhotosResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPhotosResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.ListPhotosResponse;

                    /**
                     * Creates a plain object from a ListPhotosResponse message. Also converts values to other types if specified.
                     * @param message ListPhotosResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.ListPhotosResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPhotosResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPhotosResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdatePhotoRequest. */
                interface IUpdatePhotoRequest {

                    /** UpdatePhotoRequest photo */
                    photo?: (google.streetview.publish.v1.IPhoto|null);

                    /** UpdatePhotoRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdatePhotoRequest. */
                class UpdatePhotoRequest implements IUpdatePhotoRequest {

                    /**
                     * Constructs a new UpdatePhotoRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IUpdatePhotoRequest);

                    /** UpdatePhotoRequest photo. */
                    public photo?: (google.streetview.publish.v1.IPhoto|null);

                    /** UpdatePhotoRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdatePhotoRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdatePhotoRequest instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IUpdatePhotoRequest): google.streetview.publish.v1.UpdatePhotoRequest;

                    /**
                     * Encodes the specified UpdatePhotoRequest message. Does not implicitly {@link google.streetview.publish.v1.UpdatePhotoRequest.verify|verify} messages.
                     * @param message UpdatePhotoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IUpdatePhotoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdatePhotoRequest message, length delimited. Does not implicitly {@link google.streetview.publish.v1.UpdatePhotoRequest.verify|verify} messages.
                     * @param message UpdatePhotoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IUpdatePhotoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdatePhotoRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdatePhotoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.UpdatePhotoRequest;

                    /**
                     * Decodes an UpdatePhotoRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdatePhotoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.UpdatePhotoRequest;

                    /**
                     * Verifies an UpdatePhotoRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdatePhotoRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdatePhotoRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.UpdatePhotoRequest;

                    /**
                     * Creates a plain object from an UpdatePhotoRequest message. Also converts values to other types if specified.
                     * @param message UpdatePhotoRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.UpdatePhotoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdatePhotoRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdatePhotoRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchUpdatePhotosRequest. */
                interface IBatchUpdatePhotosRequest {

                    /** BatchUpdatePhotosRequest updatePhotoRequests */
                    updatePhotoRequests?: (google.streetview.publish.v1.IUpdatePhotoRequest[]|null);
                }

                /** Represents a BatchUpdatePhotosRequest. */
                class BatchUpdatePhotosRequest implements IBatchUpdatePhotosRequest {

                    /**
                     * Constructs a new BatchUpdatePhotosRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IBatchUpdatePhotosRequest);

                    /** BatchUpdatePhotosRequest updatePhotoRequests. */
                    public updatePhotoRequests: google.streetview.publish.v1.IUpdatePhotoRequest[];

                    /**
                     * Creates a new BatchUpdatePhotosRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchUpdatePhotosRequest instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IBatchUpdatePhotosRequest): google.streetview.publish.v1.BatchUpdatePhotosRequest;

                    /**
                     * Encodes the specified BatchUpdatePhotosRequest message. Does not implicitly {@link google.streetview.publish.v1.BatchUpdatePhotosRequest.verify|verify} messages.
                     * @param message BatchUpdatePhotosRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IBatchUpdatePhotosRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchUpdatePhotosRequest message, length delimited. Does not implicitly {@link google.streetview.publish.v1.BatchUpdatePhotosRequest.verify|verify} messages.
                     * @param message BatchUpdatePhotosRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IBatchUpdatePhotosRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchUpdatePhotosRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchUpdatePhotosRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.BatchUpdatePhotosRequest;

                    /**
                     * Decodes a BatchUpdatePhotosRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchUpdatePhotosRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.BatchUpdatePhotosRequest;

                    /**
                     * Verifies a BatchUpdatePhotosRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchUpdatePhotosRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchUpdatePhotosRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.BatchUpdatePhotosRequest;

                    /**
                     * Creates a plain object from a BatchUpdatePhotosRequest message. Also converts values to other types if specified.
                     * @param message BatchUpdatePhotosRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.BatchUpdatePhotosRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchUpdatePhotosRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchUpdatePhotosRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchUpdatePhotosResponse. */
                interface IBatchUpdatePhotosResponse {

                    /** BatchUpdatePhotosResponse results */
                    results?: (google.streetview.publish.v1.IPhotoResponse[]|null);
                }

                /** Represents a BatchUpdatePhotosResponse. */
                class BatchUpdatePhotosResponse implements IBatchUpdatePhotosResponse {

                    /**
                     * Constructs a new BatchUpdatePhotosResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IBatchUpdatePhotosResponse);

                    /** BatchUpdatePhotosResponse results. */
                    public results: google.streetview.publish.v1.IPhotoResponse[];

                    /**
                     * Creates a new BatchUpdatePhotosResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchUpdatePhotosResponse instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IBatchUpdatePhotosResponse): google.streetview.publish.v1.BatchUpdatePhotosResponse;

                    /**
                     * Encodes the specified BatchUpdatePhotosResponse message. Does not implicitly {@link google.streetview.publish.v1.BatchUpdatePhotosResponse.verify|verify} messages.
                     * @param message BatchUpdatePhotosResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IBatchUpdatePhotosResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchUpdatePhotosResponse message, length delimited. Does not implicitly {@link google.streetview.publish.v1.BatchUpdatePhotosResponse.verify|verify} messages.
                     * @param message BatchUpdatePhotosResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IBatchUpdatePhotosResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchUpdatePhotosResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchUpdatePhotosResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.BatchUpdatePhotosResponse;

                    /**
                     * Decodes a BatchUpdatePhotosResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchUpdatePhotosResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.BatchUpdatePhotosResponse;

                    /**
                     * Verifies a BatchUpdatePhotosResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchUpdatePhotosResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchUpdatePhotosResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.BatchUpdatePhotosResponse;

                    /**
                     * Creates a plain object from a BatchUpdatePhotosResponse message. Also converts values to other types if specified.
                     * @param message BatchUpdatePhotosResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.BatchUpdatePhotosResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchUpdatePhotosResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchUpdatePhotosResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePhotoRequest. */
                interface IDeletePhotoRequest {

                    /** DeletePhotoRequest photoId */
                    photoId?: (string|null);
                }

                /** Represents a DeletePhotoRequest. */
                class DeletePhotoRequest implements IDeletePhotoRequest {

                    /**
                     * Constructs a new DeletePhotoRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IDeletePhotoRequest);

                    /** DeletePhotoRequest photoId. */
                    public photoId: string;

                    /**
                     * Creates a new DeletePhotoRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePhotoRequest instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IDeletePhotoRequest): google.streetview.publish.v1.DeletePhotoRequest;

                    /**
                     * Encodes the specified DeletePhotoRequest message. Does not implicitly {@link google.streetview.publish.v1.DeletePhotoRequest.verify|verify} messages.
                     * @param message DeletePhotoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IDeletePhotoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePhotoRequest message, length delimited. Does not implicitly {@link google.streetview.publish.v1.DeletePhotoRequest.verify|verify} messages.
                     * @param message DeletePhotoRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IDeletePhotoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePhotoRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePhotoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.DeletePhotoRequest;

                    /**
                     * Decodes a DeletePhotoRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePhotoRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.DeletePhotoRequest;

                    /**
                     * Verifies a DeletePhotoRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePhotoRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePhotoRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.DeletePhotoRequest;

                    /**
                     * Creates a plain object from a DeletePhotoRequest message. Also converts values to other types if specified.
                     * @param message DeletePhotoRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.DeletePhotoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePhotoRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePhotoRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchDeletePhotosRequest. */
                interface IBatchDeletePhotosRequest {

                    /** BatchDeletePhotosRequest photoIds */
                    photoIds?: (string[]|null);
                }

                /** Represents a BatchDeletePhotosRequest. */
                class BatchDeletePhotosRequest implements IBatchDeletePhotosRequest {

                    /**
                     * Constructs a new BatchDeletePhotosRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IBatchDeletePhotosRequest);

                    /** BatchDeletePhotosRequest photoIds. */
                    public photoIds: string[];

                    /**
                     * Creates a new BatchDeletePhotosRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchDeletePhotosRequest instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IBatchDeletePhotosRequest): google.streetview.publish.v1.BatchDeletePhotosRequest;

                    /**
                     * Encodes the specified BatchDeletePhotosRequest message. Does not implicitly {@link google.streetview.publish.v1.BatchDeletePhotosRequest.verify|verify} messages.
                     * @param message BatchDeletePhotosRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IBatchDeletePhotosRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchDeletePhotosRequest message, length delimited. Does not implicitly {@link google.streetview.publish.v1.BatchDeletePhotosRequest.verify|verify} messages.
                     * @param message BatchDeletePhotosRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IBatchDeletePhotosRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchDeletePhotosRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchDeletePhotosRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.BatchDeletePhotosRequest;

                    /**
                     * Decodes a BatchDeletePhotosRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchDeletePhotosRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.BatchDeletePhotosRequest;

                    /**
                     * Verifies a BatchDeletePhotosRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchDeletePhotosRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchDeletePhotosRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.BatchDeletePhotosRequest;

                    /**
                     * Creates a plain object from a BatchDeletePhotosRequest message. Also converts values to other types if specified.
                     * @param message BatchDeletePhotosRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.BatchDeletePhotosRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchDeletePhotosRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchDeletePhotosRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreatePhotoSequenceRequest. */
                interface ICreatePhotoSequenceRequest {

                    /** CreatePhotoSequenceRequest photoSequence */
                    photoSequence?: (google.streetview.publish.v1.IPhotoSequence|null);

                    /** CreatePhotoSequenceRequest inputType */
                    inputType?: (google.streetview.publish.v1.CreatePhotoSequenceRequest.InputType|keyof typeof google.streetview.publish.v1.CreatePhotoSequenceRequest.InputType|null);
                }

                /** Represents a CreatePhotoSequenceRequest. */
                class CreatePhotoSequenceRequest implements ICreatePhotoSequenceRequest {

                    /**
                     * Constructs a new CreatePhotoSequenceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.ICreatePhotoSequenceRequest);

                    /** CreatePhotoSequenceRequest photoSequence. */
                    public photoSequence?: (google.streetview.publish.v1.IPhotoSequence|null);

                    /** CreatePhotoSequenceRequest inputType. */
                    public inputType: (google.streetview.publish.v1.CreatePhotoSequenceRequest.InputType|keyof typeof google.streetview.publish.v1.CreatePhotoSequenceRequest.InputType);

                    /**
                     * Creates a new CreatePhotoSequenceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreatePhotoSequenceRequest instance
                     */
                    public static create(properties?: google.streetview.publish.v1.ICreatePhotoSequenceRequest): google.streetview.publish.v1.CreatePhotoSequenceRequest;

                    /**
                     * Encodes the specified CreatePhotoSequenceRequest message. Does not implicitly {@link google.streetview.publish.v1.CreatePhotoSequenceRequest.verify|verify} messages.
                     * @param message CreatePhotoSequenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.ICreatePhotoSequenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreatePhotoSequenceRequest message, length delimited. Does not implicitly {@link google.streetview.publish.v1.CreatePhotoSequenceRequest.verify|verify} messages.
                     * @param message CreatePhotoSequenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.ICreatePhotoSequenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreatePhotoSequenceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreatePhotoSequenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.CreatePhotoSequenceRequest;

                    /**
                     * Decodes a CreatePhotoSequenceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreatePhotoSequenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.CreatePhotoSequenceRequest;

                    /**
                     * Verifies a CreatePhotoSequenceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreatePhotoSequenceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreatePhotoSequenceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.CreatePhotoSequenceRequest;

                    /**
                     * Creates a plain object from a CreatePhotoSequenceRequest message. Also converts values to other types if specified.
                     * @param message CreatePhotoSequenceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.CreatePhotoSequenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreatePhotoSequenceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreatePhotoSequenceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CreatePhotoSequenceRequest {

                    /** InputType enum. */
                    enum InputType {
                        INPUT_TYPE_UNSPECIFIED = 0,
                        VIDEO = 1,
                        XDM = 2
                    }
                }

                /** Properties of a GetPhotoSequenceRequest. */
                interface IGetPhotoSequenceRequest {

                    /** GetPhotoSequenceRequest sequenceId */
                    sequenceId?: (string|null);

                    /** GetPhotoSequenceRequest view */
                    view?: (google.streetview.publish.v1.PhotoView|keyof typeof google.streetview.publish.v1.PhotoView|null);

                    /** GetPhotoSequenceRequest filter */
                    filter?: (string|null);
                }

                /** Represents a GetPhotoSequenceRequest. */
                class GetPhotoSequenceRequest implements IGetPhotoSequenceRequest {

                    /**
                     * Constructs a new GetPhotoSequenceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IGetPhotoSequenceRequest);

                    /** GetPhotoSequenceRequest sequenceId. */
                    public sequenceId: string;

                    /** GetPhotoSequenceRequest view. */
                    public view: (google.streetview.publish.v1.PhotoView|keyof typeof google.streetview.publish.v1.PhotoView);

                    /** GetPhotoSequenceRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new GetPhotoSequenceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetPhotoSequenceRequest instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IGetPhotoSequenceRequest): google.streetview.publish.v1.GetPhotoSequenceRequest;

                    /**
                     * Encodes the specified GetPhotoSequenceRequest message. Does not implicitly {@link google.streetview.publish.v1.GetPhotoSequenceRequest.verify|verify} messages.
                     * @param message GetPhotoSequenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IGetPhotoSequenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetPhotoSequenceRequest message, length delimited. Does not implicitly {@link google.streetview.publish.v1.GetPhotoSequenceRequest.verify|verify} messages.
                     * @param message GetPhotoSequenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IGetPhotoSequenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetPhotoSequenceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetPhotoSequenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.GetPhotoSequenceRequest;

                    /**
                     * Decodes a GetPhotoSequenceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetPhotoSequenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.GetPhotoSequenceRequest;

                    /**
                     * Verifies a GetPhotoSequenceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetPhotoSequenceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetPhotoSequenceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.GetPhotoSequenceRequest;

                    /**
                     * Creates a plain object from a GetPhotoSequenceRequest message. Also converts values to other types if specified.
                     * @param message GetPhotoSequenceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.GetPhotoSequenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetPhotoSequenceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetPhotoSequenceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeletePhotoSequenceRequest. */
                interface IDeletePhotoSequenceRequest {

                    /** DeletePhotoSequenceRequest sequenceId */
                    sequenceId?: (string|null);
                }

                /** Represents a DeletePhotoSequenceRequest. */
                class DeletePhotoSequenceRequest implements IDeletePhotoSequenceRequest {

                    /**
                     * Constructs a new DeletePhotoSequenceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IDeletePhotoSequenceRequest);

                    /** DeletePhotoSequenceRequest sequenceId. */
                    public sequenceId: string;

                    /**
                     * Creates a new DeletePhotoSequenceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeletePhotoSequenceRequest instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IDeletePhotoSequenceRequest): google.streetview.publish.v1.DeletePhotoSequenceRequest;

                    /**
                     * Encodes the specified DeletePhotoSequenceRequest message. Does not implicitly {@link google.streetview.publish.v1.DeletePhotoSequenceRequest.verify|verify} messages.
                     * @param message DeletePhotoSequenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IDeletePhotoSequenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeletePhotoSequenceRequest message, length delimited. Does not implicitly {@link google.streetview.publish.v1.DeletePhotoSequenceRequest.verify|verify} messages.
                     * @param message DeletePhotoSequenceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IDeletePhotoSequenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeletePhotoSequenceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeletePhotoSequenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.DeletePhotoSequenceRequest;

                    /**
                     * Decodes a DeletePhotoSequenceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeletePhotoSequenceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.DeletePhotoSequenceRequest;

                    /**
                     * Verifies a DeletePhotoSequenceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeletePhotoSequenceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeletePhotoSequenceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.DeletePhotoSequenceRequest;

                    /**
                     * Creates a plain object from a DeletePhotoSequenceRequest message. Also converts values to other types if specified.
                     * @param message DeletePhotoSequenceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.DeletePhotoSequenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeletePhotoSequenceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeletePhotoSequenceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchDeletePhotosResponse. */
                interface IBatchDeletePhotosResponse {

                    /** BatchDeletePhotosResponse status */
                    status?: (google.rpc.IStatus[]|null);
                }

                /** Represents a BatchDeletePhotosResponse. */
                class BatchDeletePhotosResponse implements IBatchDeletePhotosResponse {

                    /**
                     * Constructs a new BatchDeletePhotosResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IBatchDeletePhotosResponse);

                    /** BatchDeletePhotosResponse status. */
                    public status: google.rpc.IStatus[];

                    /**
                     * Creates a new BatchDeletePhotosResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchDeletePhotosResponse instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IBatchDeletePhotosResponse): google.streetview.publish.v1.BatchDeletePhotosResponse;

                    /**
                     * Encodes the specified BatchDeletePhotosResponse message. Does not implicitly {@link google.streetview.publish.v1.BatchDeletePhotosResponse.verify|verify} messages.
                     * @param message BatchDeletePhotosResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IBatchDeletePhotosResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchDeletePhotosResponse message, length delimited. Does not implicitly {@link google.streetview.publish.v1.BatchDeletePhotosResponse.verify|verify} messages.
                     * @param message BatchDeletePhotosResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IBatchDeletePhotosResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchDeletePhotosResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchDeletePhotosResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.BatchDeletePhotosResponse;

                    /**
                     * Decodes a BatchDeletePhotosResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchDeletePhotosResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.BatchDeletePhotosResponse;

                    /**
                     * Verifies a BatchDeletePhotosResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchDeletePhotosResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchDeletePhotosResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.BatchDeletePhotosResponse;

                    /**
                     * Creates a plain object from a BatchDeletePhotosResponse message. Also converts values to other types if specified.
                     * @param message BatchDeletePhotosResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.BatchDeletePhotosResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchDeletePhotosResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchDeletePhotosResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPhotoSequencesRequest. */
                interface IListPhotoSequencesRequest {

                    /** ListPhotoSequencesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListPhotoSequencesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListPhotoSequencesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListPhotoSequencesRequest. */
                class ListPhotoSequencesRequest implements IListPhotoSequencesRequest {

                    /**
                     * Constructs a new ListPhotoSequencesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IListPhotoSequencesRequest);

                    /** ListPhotoSequencesRequest pageSize. */
                    public pageSize: number;

                    /** ListPhotoSequencesRequest pageToken. */
                    public pageToken: string;

                    /** ListPhotoSequencesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListPhotoSequencesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPhotoSequencesRequest instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IListPhotoSequencesRequest): google.streetview.publish.v1.ListPhotoSequencesRequest;

                    /**
                     * Encodes the specified ListPhotoSequencesRequest message. Does not implicitly {@link google.streetview.publish.v1.ListPhotoSequencesRequest.verify|verify} messages.
                     * @param message ListPhotoSequencesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IListPhotoSequencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPhotoSequencesRequest message, length delimited. Does not implicitly {@link google.streetview.publish.v1.ListPhotoSequencesRequest.verify|verify} messages.
                     * @param message ListPhotoSequencesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IListPhotoSequencesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPhotoSequencesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPhotoSequencesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.ListPhotoSequencesRequest;

                    /**
                     * Decodes a ListPhotoSequencesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPhotoSequencesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.ListPhotoSequencesRequest;

                    /**
                     * Verifies a ListPhotoSequencesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPhotoSequencesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPhotoSequencesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.ListPhotoSequencesRequest;

                    /**
                     * Creates a plain object from a ListPhotoSequencesRequest message. Also converts values to other types if specified.
                     * @param message ListPhotoSequencesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.ListPhotoSequencesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPhotoSequencesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPhotoSequencesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListPhotoSequencesResponse. */
                interface IListPhotoSequencesResponse {

                    /** ListPhotoSequencesResponse photoSequences */
                    photoSequences?: (google.longrunning.IOperation[]|null);

                    /** ListPhotoSequencesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListPhotoSequencesResponse. */
                class ListPhotoSequencesResponse implements IListPhotoSequencesResponse {

                    /**
                     * Constructs a new ListPhotoSequencesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.streetview.publish.v1.IListPhotoSequencesResponse);

                    /** ListPhotoSequencesResponse photoSequences. */
                    public photoSequences: google.longrunning.IOperation[];

                    /** ListPhotoSequencesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListPhotoSequencesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListPhotoSequencesResponse instance
                     */
                    public static create(properties?: google.streetview.publish.v1.IListPhotoSequencesResponse): google.streetview.publish.v1.ListPhotoSequencesResponse;

                    /**
                     * Encodes the specified ListPhotoSequencesResponse message. Does not implicitly {@link google.streetview.publish.v1.ListPhotoSequencesResponse.verify|verify} messages.
                     * @param message ListPhotoSequencesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.streetview.publish.v1.IListPhotoSequencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListPhotoSequencesResponse message, length delimited. Does not implicitly {@link google.streetview.publish.v1.ListPhotoSequencesResponse.verify|verify} messages.
                     * @param message ListPhotoSequencesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.streetview.publish.v1.IListPhotoSequencesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListPhotoSequencesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListPhotoSequencesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.streetview.publish.v1.ListPhotoSequencesResponse;

                    /**
                     * Decodes a ListPhotoSequencesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListPhotoSequencesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.streetview.publish.v1.ListPhotoSequencesResponse;

                    /**
                     * Verifies a ListPhotoSequencesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListPhotoSequencesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListPhotoSequencesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.streetview.publish.v1.ListPhotoSequencesResponse;

                    /**
                     * Creates a plain object from a ListPhotoSequencesResponse message. Also converts values to other types if specified.
                     * @param message ListPhotoSequencesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.streetview.publish.v1.ListPhotoSequencesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListPhotoSequencesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListPhotoSequencesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** PhotoView enum. */
                enum PhotoView {
                    BASIC = 0,
                    INCLUDE_DOWNLOAD_URL = 1
                }

                /** Represents a StreetViewPublishService */
                class StreetViewPublishService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new StreetViewPublishService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new StreetViewPublishService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): StreetViewPublishService;

                    /**
                     * Calls StartUpload.
                     * @param request Empty message or plain object
                     * @param callback Node-style callback called with the error, if any, and UploadRef
                     */
                    public startUpload(request: google.protobuf.IEmpty, callback: google.streetview.publish.v1.StreetViewPublishService.StartUploadCallback): void;

                    /**
                     * Calls StartUpload.
                     * @param request Empty message or plain object
                     * @returns Promise
                     */
                    public startUpload(request: google.protobuf.IEmpty): Promise<google.streetview.publish.v1.UploadRef>;

                    /**
                     * Calls CreatePhoto.
                     * @param request CreatePhotoRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Photo
                     */
                    public createPhoto(request: google.streetview.publish.v1.ICreatePhotoRequest, callback: google.streetview.publish.v1.StreetViewPublishService.CreatePhotoCallback): void;

                    /**
                     * Calls CreatePhoto.
                     * @param request CreatePhotoRequest message or plain object
                     * @returns Promise
                     */
                    public createPhoto(request: google.streetview.publish.v1.ICreatePhotoRequest): Promise<google.streetview.publish.v1.Photo>;

                    /**
                     * Calls GetPhoto.
                     * @param request GetPhotoRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Photo
                     */
                    public getPhoto(request: google.streetview.publish.v1.IGetPhotoRequest, callback: google.streetview.publish.v1.StreetViewPublishService.GetPhotoCallback): void;

                    /**
                     * Calls GetPhoto.
                     * @param request GetPhotoRequest message or plain object
                     * @returns Promise
                     */
                    public getPhoto(request: google.streetview.publish.v1.IGetPhotoRequest): Promise<google.streetview.publish.v1.Photo>;

                    /**
                     * Calls BatchGetPhotos.
                     * @param request BatchGetPhotosRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchGetPhotosResponse
                     */
                    public batchGetPhotos(request: google.streetview.publish.v1.IBatchGetPhotosRequest, callback: google.streetview.publish.v1.StreetViewPublishService.BatchGetPhotosCallback): void;

                    /**
                     * Calls BatchGetPhotos.
                     * @param request BatchGetPhotosRequest message or plain object
                     * @returns Promise
                     */
                    public batchGetPhotos(request: google.streetview.publish.v1.IBatchGetPhotosRequest): Promise<google.streetview.publish.v1.BatchGetPhotosResponse>;

                    /**
                     * Calls ListPhotos.
                     * @param request ListPhotosRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPhotosResponse
                     */
                    public listPhotos(request: google.streetview.publish.v1.IListPhotosRequest, callback: google.streetview.publish.v1.StreetViewPublishService.ListPhotosCallback): void;

                    /**
                     * Calls ListPhotos.
                     * @param request ListPhotosRequest message or plain object
                     * @returns Promise
                     */
                    public listPhotos(request: google.streetview.publish.v1.IListPhotosRequest): Promise<google.streetview.publish.v1.ListPhotosResponse>;

                    /**
                     * Calls UpdatePhoto.
                     * @param request UpdatePhotoRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Photo
                     */
                    public updatePhoto(request: google.streetview.publish.v1.IUpdatePhotoRequest, callback: google.streetview.publish.v1.StreetViewPublishService.UpdatePhotoCallback): void;

                    /**
                     * Calls UpdatePhoto.
                     * @param request UpdatePhotoRequest message or plain object
                     * @returns Promise
                     */
                    public updatePhoto(request: google.streetview.publish.v1.IUpdatePhotoRequest): Promise<google.streetview.publish.v1.Photo>;

                    /**
                     * Calls BatchUpdatePhotos.
                     * @param request BatchUpdatePhotosRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchUpdatePhotosResponse
                     */
                    public batchUpdatePhotos(request: google.streetview.publish.v1.IBatchUpdatePhotosRequest, callback: google.streetview.publish.v1.StreetViewPublishService.BatchUpdatePhotosCallback): void;

                    /**
                     * Calls BatchUpdatePhotos.
                     * @param request BatchUpdatePhotosRequest message or plain object
                     * @returns Promise
                     */
                    public batchUpdatePhotos(request: google.streetview.publish.v1.IBatchUpdatePhotosRequest): Promise<google.streetview.publish.v1.BatchUpdatePhotosResponse>;

                    /**
                     * Calls DeletePhoto.
                     * @param request DeletePhotoRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deletePhoto(request: google.streetview.publish.v1.IDeletePhotoRequest, callback: google.streetview.publish.v1.StreetViewPublishService.DeletePhotoCallback): void;

                    /**
                     * Calls DeletePhoto.
                     * @param request DeletePhotoRequest message or plain object
                     * @returns Promise
                     */
                    public deletePhoto(request: google.streetview.publish.v1.IDeletePhotoRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls BatchDeletePhotos.
                     * @param request BatchDeletePhotosRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchDeletePhotosResponse
                     */
                    public batchDeletePhotos(request: google.streetview.publish.v1.IBatchDeletePhotosRequest, callback: google.streetview.publish.v1.StreetViewPublishService.BatchDeletePhotosCallback): void;

                    /**
                     * Calls BatchDeletePhotos.
                     * @param request BatchDeletePhotosRequest message or plain object
                     * @returns Promise
                     */
                    public batchDeletePhotos(request: google.streetview.publish.v1.IBatchDeletePhotosRequest): Promise<google.streetview.publish.v1.BatchDeletePhotosResponse>;

                    /**
                     * Calls StartPhotoSequenceUpload.
                     * @param request Empty message or plain object
                     * @param callback Node-style callback called with the error, if any, and UploadRef
                     */
                    public startPhotoSequenceUpload(request: google.protobuf.IEmpty, callback: google.streetview.publish.v1.StreetViewPublishService.StartPhotoSequenceUploadCallback): void;

                    /**
                     * Calls StartPhotoSequenceUpload.
                     * @param request Empty message or plain object
                     * @returns Promise
                     */
                    public startPhotoSequenceUpload(request: google.protobuf.IEmpty): Promise<google.streetview.publish.v1.UploadRef>;

                    /**
                     * Calls CreatePhotoSequence.
                     * @param request CreatePhotoSequenceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createPhotoSequence(request: google.streetview.publish.v1.ICreatePhotoSequenceRequest, callback: google.streetview.publish.v1.StreetViewPublishService.CreatePhotoSequenceCallback): void;

                    /**
                     * Calls CreatePhotoSequence.
                     * @param request CreatePhotoSequenceRequest message or plain object
                     * @returns Promise
                     */
                    public createPhotoSequence(request: google.streetview.publish.v1.ICreatePhotoSequenceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetPhotoSequence.
                     * @param request GetPhotoSequenceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public getPhotoSequence(request: google.streetview.publish.v1.IGetPhotoSequenceRequest, callback: google.streetview.publish.v1.StreetViewPublishService.GetPhotoSequenceCallback): void;

                    /**
                     * Calls GetPhotoSequence.
                     * @param request GetPhotoSequenceRequest message or plain object
                     * @returns Promise
                     */
                    public getPhotoSequence(request: google.streetview.publish.v1.IGetPhotoSequenceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListPhotoSequences.
                     * @param request ListPhotoSequencesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListPhotoSequencesResponse
                     */
                    public listPhotoSequences(request: google.streetview.publish.v1.IListPhotoSequencesRequest, callback: google.streetview.publish.v1.StreetViewPublishService.ListPhotoSequencesCallback): void;

                    /**
                     * Calls ListPhotoSequences.
                     * @param request ListPhotoSequencesRequest message or plain object
                     * @returns Promise
                     */
                    public listPhotoSequences(request: google.streetview.publish.v1.IListPhotoSequencesRequest): Promise<google.streetview.publish.v1.ListPhotoSequencesResponse>;

                    /**
                     * Calls DeletePhotoSequence.
                     * @param request DeletePhotoSequenceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deletePhotoSequence(request: google.streetview.publish.v1.IDeletePhotoSequenceRequest, callback: google.streetview.publish.v1.StreetViewPublishService.DeletePhotoSequenceCallback): void;

                    /**
                     * Calls DeletePhotoSequence.
                     * @param request DeletePhotoSequenceRequest message or plain object
                     * @returns Promise
                     */
                    public deletePhotoSequence(request: google.streetview.publish.v1.IDeletePhotoSequenceRequest): Promise<google.protobuf.Empty>;
                }

                namespace StreetViewPublishService {

                    /**
                     * Callback as used by {@link google.streetview.publish.v1.StreetViewPublishService|startUpload}.
                     * @param error Error, if any
                     * @param [response] UploadRef
                     */
                    type StartUploadCallback = (error: (Error|null), response?: google.streetview.publish.v1.UploadRef) => void;

                    /**
                     * Callback as used by {@link google.streetview.publish.v1.StreetViewPublishService|createPhoto}.
                     * @param error Error, if any
                     * @param [response] Photo
                     */
                    type CreatePhotoCallback = (error: (Error|null), response?: google.streetview.publish.v1.Photo) => void;

                    /**
                     * Callback as used by {@link google.streetview.publish.v1.StreetViewPublishService|getPhoto}.
                     * @param error Error, if any
                     * @param [response] Photo
                     */
                    type GetPhotoCallback = (error: (Error|null), response?: google.streetview.publish.v1.Photo) => void;

                    /**
                     * Callback as used by {@link google.streetview.publish.v1.StreetViewPublishService|batchGetPhotos}.
                     * @param error Error, if any
                     * @param [response] BatchGetPhotosResponse
                     */
                    type BatchGetPhotosCallback = (error: (Error|null), response?: google.streetview.publish.v1.BatchGetPhotosResponse) => void;

                    /**
                     * Callback as used by {@link google.streetview.publish.v1.StreetViewPublishService|listPhotos}.
                     * @param error Error, if any
                     * @param [response] ListPhotosResponse
                     */
                    type ListPhotosCallback = (error: (Error|null), response?: google.streetview.publish.v1.ListPhotosResponse) => void;

                    /**
                     * Callback as used by {@link google.streetview.publish.v1.StreetViewPublishService|updatePhoto}.
                     * @param error Error, if any
                     * @param [response] Photo
                     */
                    type UpdatePhotoCallback = (error: (Error|null), response?: google.streetview.publish.v1.Photo) => void;

                    /**
                     * Callback as used by {@link google.streetview.publish.v1.StreetViewPublishService|batchUpdatePhotos}.
                     * @param error Error, if any
                     * @param [response] BatchUpdatePhotosResponse
                     */
                    type BatchUpdatePhotosCallback = (error: (Error|null), response?: google.streetview.publish.v1.BatchUpdatePhotosResponse) => void;

                    /**
                     * Callback as used by {@link google.streetview.publish.v1.StreetViewPublishService|deletePhoto}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeletePhotoCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.streetview.publish.v1.StreetViewPublishService|batchDeletePhotos}.
                     * @param error Error, if any
                     * @param [response] BatchDeletePhotosResponse
                     */
                    type BatchDeletePhotosCallback = (error: (Error|null), response?: google.streetview.publish.v1.BatchDeletePhotosResponse) => void;

                    /**
                     * Callback as used by {@link google.streetview.publish.v1.StreetViewPublishService|startPhotoSequenceUpload}.
                     * @param error Error, if any
                     * @param [response] UploadRef
                     */
                    type StartPhotoSequenceUploadCallback = (error: (Error|null), response?: google.streetview.publish.v1.UploadRef) => void;

                    /**
                     * Callback as used by {@link google.streetview.publish.v1.StreetViewPublishService|createPhotoSequence}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreatePhotoSequenceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.streetview.publish.v1.StreetViewPublishService|getPhotoSequence}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type GetPhotoSequenceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.streetview.publish.v1.StreetViewPublishService|listPhotoSequences}.
                     * @param error Error, if any
                     * @param [response] ListPhotoSequencesResponse
                     */
                    type ListPhotoSequencesCallback = (error: (Error|null), response?: google.streetview.publish.v1.ListPhotoSequencesResponse) => void;

                    /**
                     * Callback as used by {@link google.streetview.publish.v1.StreetViewPublishService|deletePhotoSequence}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeletePhotoSequenceCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }
            }
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
            pub