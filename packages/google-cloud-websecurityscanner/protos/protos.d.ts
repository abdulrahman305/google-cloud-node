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

        /** Namespace websecurityscanner. */
        namespace websecurityscanner {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a CrawledUrl. */
                interface ICrawledUrl {

                    /** CrawledUrl httpMethod */
                    httpMethod?: (string|null);

                    /** CrawledUrl url */
                    url?: (string|null);

                    /** CrawledUrl body */
                    body?: (string|null);
                }

                /** Represents a CrawledUrl. */
                class CrawledUrl implements ICrawledUrl {

                    /**
                     * Constructs a new CrawledUrl.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.ICrawledUrl);

                    /** CrawledUrl httpMethod. */
                    public httpMethod: string;

                    /** CrawledUrl url. */
                    public url: string;

                    /** CrawledUrl body. */
                    public body: string;

                    /**
                     * Creates a new CrawledUrl instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CrawledUrl instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.ICrawledUrl): google.cloud.websecurityscanner.v1.CrawledUrl;

                    /**
                     * Encodes the specified CrawledUrl message. Does not implicitly {@link google.cloud.websecurityscanner.v1.CrawledUrl.verify|verify} messages.
                     * @param message CrawledUrl message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.ICrawledUrl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CrawledUrl message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.CrawledUrl.verify|verify} messages.
                     * @param message CrawledUrl message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.ICrawledUrl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CrawledUrl message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CrawledUrl
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.CrawledUrl;

                    /**
                     * Decodes a CrawledUrl message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CrawledUrl
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.CrawledUrl;

                    /**
                     * Verifies a CrawledUrl message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CrawledUrl message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CrawledUrl
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.CrawledUrl;

                    /**
                     * Creates a plain object from a CrawledUrl message. Also converts values to other types if specified.
                     * @param message CrawledUrl
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.CrawledUrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CrawledUrl to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CrawledUrl
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Finding. */
                interface IFinding {

                    /** Finding name */
                    name?: (string|null);

                    /** Finding findingType */
                    findingType?: (string|null);

                    /** Finding severity */
                    severity?: (google.cloud.websecurityscanner.v1.Finding.Severity|keyof typeof google.cloud.websecurityscanner.v1.Finding.Severity|null);

                    /** Finding httpMethod */
                    httpMethod?: (string|null);

                    /** Finding fuzzedUrl */
                    fuzzedUrl?: (string|null);

                    /** Finding body */
                    body?: (string|null);

                    /** Finding description */
                    description?: (string|null);

                    /** Finding reproductionUrl */
                    reproductionUrl?: (string|null);

                    /** Finding frameUrl */
                    frameUrl?: (string|null);

                    /** Finding finalUrl */
                    finalUrl?: (string|null);

                    /** Finding trackingId */
                    trackingId?: (string|null);

                    /** Finding form */
                    form?: (google.cloud.websecurityscanner.v1.IForm|null);

                    /** Finding outdatedLibrary */
                    outdatedLibrary?: (google.cloud.websecurityscanner.v1.IOutdatedLibrary|null);

                    /** Finding violatingResource */
                    violatingResource?: (google.cloud.websecurityscanner.v1.IViolatingResource|null);

                    /** Finding vulnerableHeaders */
                    vulnerableHeaders?: (google.cloud.websecurityscanner.v1.IVulnerableHeaders|null);

                    /** Finding vulnerableParameters */
                    vulnerableParameters?: (google.cloud.websecurityscanner.v1.IVulnerableParameters|null);

                    /** Finding xss */
                    xss?: (google.cloud.websecurityscanner.v1.IXss|null);

                    /** Finding xxe */
                    xxe?: (google.cloud.websecurityscanner.v1.IXxe|null);
                }

                /** Represents a Finding. */
                class Finding implements IFinding {

                    /**
                     * Constructs a new Finding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IFinding);

                    /** Finding name. */
                    public name: string;

                    /** Finding findingType. */
                    public findingType: string;

                    /** Finding severity. */
                    public severity: (google.cloud.websecurityscanner.v1.Finding.Severity|keyof typeof google.cloud.websecurityscanner.v1.Finding.Severity);

                    /** Finding httpMethod. */
                    public httpMethod: string;

                    /** Finding fuzzedUrl. */
                    public fuzzedUrl: string;

                    /** Finding body. */
                    public body: string;

                    /** Finding description. */
                    public description: string;

                    /** Finding reproductionUrl. */
                    public reproductionUrl: string;

                    /** Finding frameUrl. */
                    public frameUrl: string;

                    /** Finding finalUrl. */
                    public finalUrl: string;

                    /** Finding trackingId. */
                    public trackingId: string;

                    /** Finding form. */
                    public form?: (google.cloud.websecurityscanner.v1.IForm|null);

                    /** Finding outdatedLibrary. */
                    public outdatedLibrary?: (google.cloud.websecurityscanner.v1.IOutdatedLibrary|null);

                    /** Finding violatingResource. */
                    public violatingResource?: (google.cloud.websecurityscanner.v1.IViolatingResource|null);

                    /** Finding vulnerableHeaders. */
                    public vulnerableHeaders?: (google.cloud.websecurityscanner.v1.IVulnerableHeaders|null);

                    /** Finding vulnerableParameters. */
                    public vulnerableParameters?: (google.cloud.websecurityscanner.v1.IVulnerableParameters|null);

                    /** Finding xss. */
                    public xss?: (google.cloud.websecurityscanner.v1.IXss|null);

                    /** Finding xxe. */
                    public xxe?: (google.cloud.websecurityscanner.v1.IXxe|null);

                    /**
                     * Creates a new Finding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Finding instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IFinding): google.cloud.websecurityscanner.v1.Finding;

                    /**
                     * Encodes the specified Finding message. Does not implicitly {@link google.cloud.websecurityscanner.v1.Finding.verify|verify} messages.
                     * @param message Finding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Finding message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.Finding.verify|verify} messages.
                     * @param message Finding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Finding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Finding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.Finding;

                    /**
                     * Decodes a Finding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Finding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.Finding;

                    /**
                     * Verifies a Finding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Finding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Finding
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.Finding;

                    /**
                     * Creates a plain object from a Finding message. Also converts values to other types if specified.
                     * @param message Finding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.Finding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Finding to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Finding
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Finding {

                    /** Severity enum. */
                    enum Severity {
                        SEVERITY_UNSPECIFIED = 0,
                        CRITICAL = 1,
                        HIGH = 2,
                        MEDIUM = 3,
                        LOW = 4
                    }
                }

                /** Properties of a Form. */
                interface IForm {

                    /** Form actionUri */
                    actionUri?: (string|null);

                    /** Form fields */
                    fields?: (string[]|null);
                }

                /** Represents a Form. */
                class Form implements IForm {

                    /**
                     * Constructs a new Form.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IForm);

                    /** Form actionUri. */
                    public actionUri: string;

                    /** Form fields. */
                    public fields: string[];

                    /**
                     * Creates a new Form instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Form instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IForm): google.cloud.websecurityscanner.v1.Form;

                    /**
                     * Encodes the specified Form message. Does not implicitly {@link google.cloud.websecurityscanner.v1.Form.verify|verify} messages.
                     * @param message Form message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IForm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Form message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.Form.verify|verify} messages.
                     * @param message Form message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IForm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Form message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Form
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.Form;

                    /**
                     * Decodes a Form message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Form
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.Form;

                    /**
                     * Verifies a Form message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Form message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Form
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.Form;

                    /**
                     * Creates a plain object from a Form message. Also converts values to other types if specified.
                     * @param message Form
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.Form, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Form to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Form
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OutdatedLibrary. */
                interface IOutdatedLibrary {

                    /** OutdatedLibrary libraryName */
                    libraryName?: (string|null);

                    /** OutdatedLibrary version */
                    version?: (string|null);

                    /** OutdatedLibrary learnMoreUrls */
                    learnMoreUrls?: (string[]|null);
                }

                /** Represents an OutdatedLibrary. */
                class OutdatedLibrary implements IOutdatedLibrary {

                    /**
                     * Constructs a new OutdatedLibrary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IOutdatedLibrary);

                    /** OutdatedLibrary libraryName. */
                    public libraryName: string;

                    /** OutdatedLibrary version. */
                    public version: string;

                    /** OutdatedLibrary learnMoreUrls. */
                    public learnMoreUrls: string[];

                    /**
                     * Creates a new OutdatedLibrary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutdatedLibrary instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IOutdatedLibrary): google.cloud.websecurityscanner.v1.OutdatedLibrary;

                    /**
                     * Encodes the specified OutdatedLibrary message. Does not implicitly {@link google.cloud.websecurityscanner.v1.OutdatedLibrary.verify|verify} messages.
                     * @param message OutdatedLibrary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IOutdatedLibrary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutdatedLibrary message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.OutdatedLibrary.verify|verify} messages.
                     * @param message OutdatedLibrary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IOutdatedLibrary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutdatedLibrary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutdatedLibrary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.OutdatedLibrary;

                    /**
                     * Decodes an OutdatedLibrary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutdatedLibrary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.OutdatedLibrary;

                    /**
                     * Verifies an OutdatedLibrary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutdatedLibrary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutdatedLibrary
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.OutdatedLibrary;

                    /**
                     * Creates a plain object from an OutdatedLibrary message. Also converts values to other types if specified.
                     * @param message OutdatedLibrary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.OutdatedLibrary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutdatedLibrary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OutdatedLibrary
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ViolatingResource. */
                interface IViolatingResource {

                    /** ViolatingResource contentType */
                    contentType?: (string|null);

                    /** ViolatingResource resourceUrl */
                    resourceUrl?: (string|null);
                }

                /** Represents a ViolatingResource. */
                class ViolatingResource implements IViolatingResource {

                    /**
                     * Constructs a new ViolatingResource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IViolatingResource);

                    /** ViolatingResource contentType. */
                    public contentType: string;

                    /** ViolatingResource resourceUrl. */
                    public resourceUrl: string;

                    /**
                     * Creates a new ViolatingResource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ViolatingResource instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IViolatingResource): google.cloud.websecurityscanner.v1.ViolatingResource;

                    /**
                     * Encodes the specified ViolatingResource message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ViolatingResource.verify|verify} messages.
                     * @param message ViolatingResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IViolatingResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ViolatingResource message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ViolatingResource.verify|verify} messages.
                     * @param message ViolatingResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IViolatingResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ViolatingResource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ViolatingResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ViolatingResource;

                    /**
                     * Decodes a ViolatingResource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ViolatingResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ViolatingResource;

                    /**
                     * Verifies a ViolatingResource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ViolatingResource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ViolatingResource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ViolatingResource;

                    /**
                     * Creates a plain object from a ViolatingResource message. Also converts values to other types if specified.
                     * @param message ViolatingResource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ViolatingResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ViolatingResource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ViolatingResource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VulnerableParameters. */
                interface IVulnerableParameters {

                    /** VulnerableParameters parameterNames */
                    parameterNames?: (string[]|null);
                }

                /** Represents a VulnerableParameters. */
                class VulnerableParameters implements IVulnerableParameters {

                    /**
                     * Constructs a new VulnerableParameters.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IVulnerableParameters);

                    /** VulnerableParameters parameterNames. */
                    public parameterNames: string[];

                    /**
                     * Creates a new VulnerableParameters instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VulnerableParameters instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IVulnerableParameters): google.cloud.websecurityscanner.v1.VulnerableParameters;

                    /**
                     * Encodes the specified VulnerableParameters message. Does not implicitly {@link google.cloud.websecurityscanner.v1.VulnerableParameters.verify|verify} messages.
                     * @param message VulnerableParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IVulnerableParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VulnerableParameters message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.VulnerableParameters.verify|verify} messages.
                     * @param message VulnerableParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IVulnerableParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VulnerableParameters message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VulnerableParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.VulnerableParameters;

                    /**
                     * Decodes a VulnerableParameters message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VulnerableParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.VulnerableParameters;

                    /**
                     * Verifies a VulnerableParameters message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VulnerableParameters message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VulnerableParameters
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.VulnerableParameters;

                    /**
                     * Creates a plain object from a VulnerableParameters message. Also converts values to other types if specified.
                     * @param message VulnerableParameters
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.VulnerableParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VulnerableParameters to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VulnerableParameters
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VulnerableHeaders. */
                interface IVulnerableHeaders {

                    /** VulnerableHeaders headers */
                    headers?: (google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader[]|null);

                    /** VulnerableHeaders missingHeaders */
                    missingHeaders?: (google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader[]|null);
                }

                /** Represents a VulnerableHeaders. */
                class VulnerableHeaders implements IVulnerableHeaders {

                    /**
                     * Constructs a new VulnerableHeaders.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IVulnerableHeaders);

                    /** VulnerableHeaders headers. */
                    public headers: google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader[];

                    /** VulnerableHeaders missingHeaders. */
                    public missingHeaders: google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader[];

                    /**
                     * Creates a new VulnerableHeaders instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VulnerableHeaders instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IVulnerableHeaders): google.cloud.websecurityscanner.v1.VulnerableHeaders;

                    /**
                     * Encodes the specified VulnerableHeaders message. Does not implicitly {@link google.cloud.websecurityscanner.v1.VulnerableHeaders.verify|verify} messages.
                     * @param message VulnerableHeaders message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IVulnerableHeaders, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VulnerableHeaders message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.VulnerableHeaders.verify|verify} messages.
                     * @param message VulnerableHeaders message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IVulnerableHeaders, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VulnerableHeaders message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VulnerableHeaders
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.VulnerableHeaders;

                    /**
                     * Decodes a VulnerableHeaders message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VulnerableHeaders
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.VulnerableHeaders;

                    /**
                     * Verifies a VulnerableHeaders message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VulnerableHeaders message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VulnerableHeaders
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.VulnerableHeaders;

                    /**
                     * Creates a plain object from a VulnerableHeaders message. Also converts values to other types if specified.
                     * @param message VulnerableHeaders
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.VulnerableHeaders, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VulnerableHeaders to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VulnerableHeaders
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace VulnerableHeaders {

                    /** Properties of a Header. */
                    interface IHeader {

                        /** Header name */
                        name?: (string|null);

                        /** Header value */
                        value?: (string|null);
                    }

                    /** Represents a Header. */
                    class Header implements IHeader {

                        /**
                         * Constructs a new Header.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader);

                        /** Header name. */
                        public name: string;

                        /** Header value. */
                        public value: string;

                        /**
                         * Creates a new Header instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Header instance
                         */
                        public static create(properties?: google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader): google.cloud.websecurityscanner.v1.VulnerableHeaders.Header;

                        /**
                         * Encodes the specified Header message. Does not implicitly {@link google.cloud.websecurityscanner.v1.VulnerableHeaders.Header.verify|verify} messages.
                         * @param message Header message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Header message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.VulnerableHeaders.Header.verify|verify} messages.
                         * @param message Header message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Header message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.VulnerableHeaders.Header;

                        /**
                         * Decodes a Header message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.VulnerableHeaders.Header;

                        /**
                         * Verifies a Header message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Header message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Header
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.VulnerableHeaders.Header;

                        /**
                         * Creates a plain object from a Header message. Also converts values to other types if specified.
                         * @param message Header
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.websecurityscanner.v1.VulnerableHeaders.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Header to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Header
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a Xss. */
                interface IXss {

                    /** Xss stackTraces */
                    stackTraces?: (string[]|null);

                    /** Xss errorMessage */
                    errorMessage?: (string|null);

                    /** Xss attackVector */
                    attackVector?: (google.cloud.websecurityscanner.v1.Xss.AttackVector|keyof typeof google.cloud.websecurityscanner.v1.Xss.AttackVector|null);

                    /** Xss storedXssSeedingUrl */
                    storedXssSeedingUrl?: (string|null);
                }

                /** Represents a Xss. */
                class Xss implements IXss {

                    /**
                     * Constructs a new Xss.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IXss);

                    /** Xss stackTraces. */
                    public stackTraces: string[];

                    /** Xss errorMessage. */
                    public errorMessage: string;

                    /** Xss attackVector. */
                    public attackVector: (google.cloud.websecurityscanner.v1.Xss.AttackVector|keyof typeof google.cloud.websecurityscanner.v1.Xss.AttackVector);

                    /** Xss storedXssSeedingUrl. */
                    public storedXssSeedingUrl: string;

                    /**
                     * Creates a new Xss instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Xss instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IXss): google.cloud.websecurityscanner.v1.Xss;

                    /**
                     * Encodes the specified Xss message. Does not implicitly {@link google.cloud.websecurityscanner.v1.Xss.verify|verify} messages.
                     * @param message Xss message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IXss, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Xss message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.Xss.verify|verify} messages.
                     * @param message Xss message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IXss, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Xss message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Xss
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.Xss;

                    /**
                     * Decodes a Xss message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Xss
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.Xss;

                    /**
                     * Verifies a Xss message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Xss message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Xss
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.Xss;

                    /**
                     * Creates a plain object from a Xss message. Also converts values to other types if specified.
                     * @param message Xss
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.Xss, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Xss to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Xss
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Xss {

                    /** AttackVector enum. */
                    enum AttackVector {
                        ATTACK_VECTOR_UNSPECIFIED = 0,
                        LOCAL_STORAGE = 1,
                        SESSION_STORAGE = 2,
                        WINDOW_NAME = 3,
                        REFERRER = 4,
                        FORM_INPUT = 5,
                        COOKIE = 6,
                        POST_MESSAGE = 7,
                        GET_PARAMETERS = 8,
                        URL_FRAGMENT = 9,
                        HTML_COMMENT = 10,
                        POST_PARAMETERS = 11,
                        PROTOCOL = 12,
                        STORED_XSS = 13,
                        SAME_ORIGIN = 14,
                        USER_CONTROLLABLE_URL = 15
                    }
                }

                /** Properties of a Xxe. */
                interface IXxe {

                    /** Xxe payloadValue */
                    payloadValue?: (string|null);

                    /** Xxe payloadLocation */
                    payloadLocation?: (google.cloud.websecurityscanner.v1.Xxe.Location|keyof typeof google.cloud.websecurityscanner.v1.Xxe.Location|null);
                }

                /** Represents a Xxe. */
                class Xxe implements IXxe {

                    /**
                     * Constructs a new Xxe.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IXxe);

                    /** Xxe payloadValue. */
                    public payloadValue: string;

                    /** Xxe payloadLocation. */
                    public payloadLocation: (google.cloud.websecurityscanner.v1.Xxe.Location|keyof typeof google.cloud.websecurityscanner.v1.Xxe.Location);

                    /**
                     * Creates a new Xxe instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Xxe instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IXxe): google.cloud.websecurityscanner.v1.Xxe;

                    /**
                     * Encodes the specified Xxe message. Does not implicitly {@link google.cloud.websecurityscanner.v1.Xxe.verify|verify} messages.
                     * @param message Xxe message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IXxe, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Xxe message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.Xxe.verify|verify} messages.
                     * @param message Xxe message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IXxe, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Xxe message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Xxe
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.Xxe;

                    /**
                     * Decodes a Xxe message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Xxe
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.Xxe;

                    /**
                     * Verifies a Xxe message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Xxe message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Xxe
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.Xxe;

                    /**
                     * Creates a plain object from a Xxe message. Also converts values to other types if specified.
                     * @param message Xxe
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.Xxe, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Xxe to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Xxe
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Xxe {

                    /** Location enum. */
                    enum Location {
                        LOCATION_UNSPECIFIED = 0,
                        COMPLETE_REQUEST_BODY = 1
                    }
                }

                /** Properties of a FindingTypeStats. */
                interface IFindingTypeStats {

                    /** FindingTypeStats findingType */
                    findingType?: (string|null);

                    /** FindingTypeStats findingCount */
                    findingCount?: (number|null);
                }

                /** Represents a FindingTypeStats. */
                class FindingTypeStats implements IFindingTypeStats {

                    /**
                     * Constructs a new FindingTypeStats.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IFindingTypeStats);

                    /** FindingTypeStats findingType. */
                    public findingType: string;

                    /** FindingTypeStats findingCount. */
                    public findingCount: number;

                    /**
                     * Creates a new FindingTypeStats instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindingTypeStats instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IFindingTypeStats): google.cloud.websecurityscanner.v1.FindingTypeStats;

                    /**
                     * Encodes the specified FindingTypeStats message. Does not implicitly {@link google.cloud.websecurityscanner.v1.FindingTypeStats.verify|verify} messages.
                     * @param message FindingTypeStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IFindingTypeStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindingTypeStats message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.FindingTypeStats.verify|verify} messages.
                     * @param message FindingTypeStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IFindingTypeStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindingTypeStats message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindingTypeStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.FindingTypeStats;

                    /**
                     * Decodes a FindingTypeStats message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindingTypeStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.FindingTypeStats;

                    /**
                     * Verifies a FindingTypeStats message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FindingTypeStats message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FindingTypeStats
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.FindingTypeStats;

                    /**
                     * Creates a plain object from a FindingTypeStats message. Also converts values to other types if specified.
                     * @param message FindingTypeStats
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.FindingTypeStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FindingTypeStats to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FindingTypeStats
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ScanConfig. */
                interface IScanConfig {

                    /** ScanConfig name */
                    name?: (string|null);

                    /** ScanConfig displayName */
                    displayName?: (string|null);

                    /** ScanConfig maxQps */
                    maxQps?: (number|null);

                    /** ScanConfig startingUrls */
                    startingUrls?: (string[]|null);

                    /** ScanConfig authentication */
                    authentication?: (google.cloud.websecurityscanner.v1.ScanConfig.IAuthentication|null);

                    /** ScanConfig userAgent */
                    userAgent?: (google.cloud.websecurityscanner.v1.ScanConfig.UserAgent|keyof typeof google.cloud.websecurityscanner.v1.ScanConfig.UserAgent|null);

                    /** ScanConfig blacklistPatterns */
                    blacklistPatterns?: (string[]|null);

                    /** ScanConfig schedule */
                    schedule?: (google.cloud.websecurityscanner.v1.ScanConfig.ISchedule|null);

                    /** ScanConfig exportToSecurityCommandCenter */
                    exportToSecurityCommandCenter?: (google.cloud.websecurityscanner.v1.ScanConfig.ExportToSecurityCommandCenter|keyof typeof google.cloud.websecurityscanner.v1.ScanConfig.ExportToSecurityCommandCenter|null);

                    /** ScanConfig riskLevel */
                    riskLevel?: (google.cloud.websecurityscanner.v1.ScanConfig.RiskLevel|keyof typeof google.cloud.websecurityscanner.v1.ScanConfig.RiskLevel|null);

                    /** ScanConfig managedScan */
                    managedScan?: (boolean|null);

                    /** ScanConfig staticIpScan */
                    staticIpScan?: (boolean|null);

                    /** ScanConfig ignoreHttpStatusErrors */
                    ignoreHttpStatusErrors?: (boolean|null);
                }

                /** Represents a ScanConfig. */
                class ScanConfig implements IScanConfig {

                    /**
                     * Constructs a new ScanConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IScanConfig);

                    /** ScanConfig name. */
                    public name: string;

                    /** ScanConfig displayName. */
                    public displayName: string;

                    /** ScanConfig maxQps. */
                    public maxQps: number;

                    /** ScanConfig startingUrls. */
                    public startingUrls: string[];

                    /** ScanConfig authentication. */
                    public authentication?: (google.cloud.websecurityscanner.v1.ScanConfig.IAuthentication|null);

                    /** ScanConfig userAgent. */
                    public userAgent: (google.cloud.websecurityscanner.v1.ScanConfig.UserAgent|keyof typeof google.cloud.websecurityscanner.v1.ScanConfig.UserAgent);

                    /** ScanConfig blacklistPatterns. */
                    public blacklistPatterns: string[];

                    /** ScanConfig schedule. */
                    public schedule?: (google.cloud.websecurityscanner.v1.ScanConfig.ISchedule|null);

                    /** ScanConfig exportToSecurityCommandCenter. */
                    public exportToSecurityCommandCenter: (google.cloud.websecurityscanner.v1.ScanConfig.ExportToSecurityCommandCenter|keyof typeof google.cloud.websecurityscanner.v1.ScanConfig.ExportToSecurityCommandCenter);

                    /** ScanConfig riskLevel. */
                    public riskLevel: (google.cloud.websecurityscanner.v1.ScanConfig.RiskLevel|keyof typeof google.cloud.websecurityscanner.v1.ScanConfig.RiskLevel);

                    /** ScanConfig managedScan. */
                    public managedScan: boolean;

                    /** ScanConfig staticIpScan. */
                    public staticIpScan: boolean;

                    /** ScanConfig ignoreHttpStatusErrors. */
                    public ignoreHttpStatusErrors: boolean;

                    /**
                     * Creates a new ScanConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScanConfig instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IScanConfig): google.cloud.websecurityscanner.v1.ScanConfig;

                    /**
                     * Encodes the specified ScanConfig message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.verify|verify} messages.
                     * @param message ScanConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IScanConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScanConfig message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.verify|verify} messages.
                     * @param message ScanConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IScanConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScanConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScanConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ScanConfig;

                    /**
                     * Decodes a ScanConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScanConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ScanConfig;

                    /**
                     * Verifies a ScanConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScanConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScanConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ScanConfig;

                    /**
                     * Creates a plain object from a ScanConfig message. Also converts values to other types if specified.
                     * @param message ScanConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ScanConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScanConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ScanConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ScanConfig {

                    /** Properties of an Authentication. */
                    interface IAuthentication {

                        /** Authentication googleAccount */
                        googleAccount?: (google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IGoogleAccount|null);

                        /** Authentication customAccount */
                        customAccount?: (google.cloud.websecurityscanner.v1.ScanConfig.Authentication.ICustomAccount|null);

                        /** Authentication iapCredential */
                        iapCredential?: (google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IIapCredential|null);
                    }

                    /** Represents an Authentication. */
                    class Authentication implements IAuthentication {

                        /**
                         * Constructs a new Authentication.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.websecurityscanner.v1.ScanConfig.IAuthentication);

                        /** Authentication googleAccount. */
                        public googleAccount?: (google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IGoogleAccount|null);

                        /** Authentication customAccount. */
                        public customAccount?: (google.cloud.websecurityscanner.v1.ScanConfig.Authentication.ICustomAccount|null);

                        /** Authentication iapCredential. */
                        public iapCredential?: (google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IIapCredential|null);

                        /** Authentication authentication. */
                        public authentication?: ("googleAccount"|"customAccount"|"iapCredential");

                        /**
                         * Creates a new Authentication instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Authentication instance
                         */
                        public static create(properties?: google.cloud.websecurityscanner.v1.ScanConfig.IAuthentication): google.cloud.websecurityscanner.v1.ScanConfig.Authentication;

                        /**
                         * Encodes the specified Authentication message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.Authentication.verify|verify} messages.
                         * @param message Authentication message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.websecurityscanner.v1.ScanConfig.IAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Authentication message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.Authentication.verify|verify} messages.
                         * @param message Authentication message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.websecurityscanner.v1.ScanConfig.IAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Authentication message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Authentication
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ScanConfig.Authentication;

                        /**
                         * Decodes an Authentication message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Authentication
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ScanConfig.Authentication;

                        /**
                         * Verifies an Authentication message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Authentication message from a plain object. Also converts values to their respective internal types.
                         * @param obj