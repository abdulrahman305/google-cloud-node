// Copyright 2024 Google LLC
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

function main(dataSource, updateMask) {
  // [START merchantapi_v1beta_generated_DataSourcesService_UpdateDataSource_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The data source resource to update.
   */
  // const dataSource = {}
  /**
   *  Required. The list of data source fields to be updated.
   *  Fields specified in the update mask without a value specified in the
   *  body will be deleted from the data source.
   *  Providing special "*" value for full data source replacement is not
   *  supported.
   */
  // const updateMask = {}

  // Imports the Datasources library
  const {DataSourcesServiceClient} = require('@google-shopping/datasources').v1beta;

  // Instantiates a client
  const datasourcesClient = new DataSourcesServiceClient();

  async function callUpdateDataSource() {
    // Construct request
    const request = {
      dataSource,
      updateMask,
    };

    // Run request
    const response = await datasourcesClient.updateDataSource(request);
    console.log(response);
  }

  callUpdateDataSource();
  // [END merchantapi_v1beta_generated_DataSourcesService_UpdateDataSource_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));