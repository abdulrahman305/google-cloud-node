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

function main(parent) {
  // [START cloudiot_v1_generated_DeviceManager_ListDeviceRegistries_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project and cloud region path. For example,
   *  `projects/example-project/locations/us-central1`.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of registries to return in the response. If this value
   *  is zero, the service will select a default size. A call may return fewer
   *  objects than requested. A non-empty `next_page_token` in the response
   *  indicates that more data is available.
   */
  // const pageSize = 1234
  /**
   *  The value returned by the last `ListDeviceRegistriesResponse`; indicates
   *  that this is a continuation of a prior `ListDeviceRegistries` call and
   *  the system should return the next page of data.
   */
  // const pageToken = 'abc123'

  // Imports the Iot library
  const {DeviceManagerClient} = require('@google-cloud/iot').v1;

  // Instantiates a client
  const iotClient = new DeviceManagerClient();

  async function callListDeviceRegistries() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = iotClient.listDeviceRegistriesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListDeviceRegistries();
  // [END cloudiot_v1_generated_DeviceManager_ListDeviceRegistries_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
