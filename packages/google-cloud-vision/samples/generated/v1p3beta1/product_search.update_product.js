// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(product) {
  // [START vision_v1p3beta1_generated_ProductSearch_UpdateProduct_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Product resource which replaces the one on the server.
   *  product.name is immutable.
   */
  // const product = {}
  /**
   *  The FieldMask google.protobuf.FieldMask  that specifies which fields
   *  to update.
   *  If update_mask isn't specified, all mutable fields are to be updated.
   *  Valid mask paths include `product_labels`, `display_name`, and
   *  `description`.
   */
  // const updateMask = {}

  // Imports the Vision library
  const {ProductSearchClient} = require('@google-cloud/vision').v1p3beta1;

  // Instantiates a client
  const visionClient = new ProductSearchClient();

  async function callUpdateProduct() {
    // Construct request
    const request = {
      product,
    };

    // Run request
    const response = await visionClient.updateProduct(request);
    console.log(response);
  }

  callUpdateProduct();
  // [END vision_v1p3beta1_generated_ProductSearch_UpdateProduct_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
