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

    /** Namespace iam. */
    namespace iam {

        /** Namespace v2. */
        namespace v2 {

            /** Properties of a DenyRule. */
            interface IDenyRule {

                /** DenyRule deniedPrincipals */
                deniedPrincipals?: (string[]|null);

                /** DenyRule exceptionPrincipals */
                exceptionPrincipals?: (string[]|null);

                /** DenyRule deniedPermissions */
                deniedPermissions?: (string[]|null);

                /** DenyRule exceptionPermissions */
                exceptionPermissions?: (string[]|null);

                /** DenyRule denialCondition */
                denialCondition?: (google.type.IExpr|null);
            }

            /** Represents a DenyRule. */
            class DenyRule implements IDenyRule {

                /**
                 * Constructs a new DenyRule.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v2.IDenyRule);

                /** DenyRule deniedPrincipals. */
                public deniedPrincipals: string[];

                /** DenyRule exceptionPrincipals. */
                public exceptionPrincipals: string[];

                /** DenyRule deniedPermissions. */
                public deniedPermissions: string[];

                /** DenyRule exceptionPermissions. */
                public exceptionPermissions: string[];

                /** DenyRule denialCondition. */
                public denialCondition?: (google.type.IExpr|null);

                /**
                 * Creates a new DenyRule instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DenyRule instance
                 */
                public static create(properties?: google.iam.v2.IDenyRule): google.iam.v2.DenyRule;

                /**
                 * Encodes the specified DenyRule message. Does not implicitly {@link google.iam.v2.DenyRule.verify|verify} messages.
                 * @param message DenyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v2.IDenyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DenyRule message, length delimited. Does not implicitly {@link google.iam.v2.DenyRule.verify|verify} messages.
                 * @param message DenyRule message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v2.IDenyRule, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DenyRule message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DenyRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Read