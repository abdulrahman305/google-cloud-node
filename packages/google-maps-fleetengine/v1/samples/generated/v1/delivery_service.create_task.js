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

function main(parent, taskId, task) {
  // [START fleetengine_v1_generated_DeliveryService_CreateTask_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Optional. The standard Delivery API request header.
   */
  // const header = {}
  /**
   *  Required. Must be in the format `providers/{provider}`. The `provider` must
   *  be the Google Cloud Project ID. For example, `sample-cloud-project`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The Task ID must be unique, but it should be not a shipment
   *  tracking ID. To store a shipment tracking ID, use the `tracking_id` field.
   *  Note that multiple tasks can have the same `tracking_id`. Task IDs are
   *  subject to the following restrictions:
   *  * Must be a valid Unicode string.
   *  * Limited to a maximum length of 64 characters.
   *  * Normalized according to Unicode Normalization Form C 
   *  (http://www.unicode.org/reports/tr15/).
   *  * May not contain any of the following ASCII characters: '/', ':', '?',
   *  ',', or '#'.
   */
  // const taskId = 'abc123'
  /**
   *  Required. The Task entity to create.
   *  When creating a Task, the following fields are required:
   *  * `type`
   *  * `state` (must be set to `OPEN`)
   *  * `tracking_id` (must not be set for `UNAVAILABLE` or `SCHEDULED_STOP`
   *  tasks, but required for all other task types)
   *  * `planned_location` (optional for `UNAVAILABLE` tasks)
   *  * `task_duration`
   *  The following fields can be optionally set:
   *  * `target_time_window`
   *  * `task_tracking_view_config`
   *  * `attributes`
   *  Note: The Task's `name` field is ignored. All other Task fields must not be
   *  set; otherwise, an error is returned.
   */
  // const task = {}

  // Imports the Delivery library
  const {DeliveryServiceClient} = require('@googlemaps/fleetengine-delivery').v1;

  // Instantiates a client
  const deliveryClient = new DeliveryServiceClient();

  async function callCreateTask() {
    // Construct request
    const request = {
      parent,
      taskId,
      task,
    };

    // Run request
    const response = await deliveryClient.createTask(request);
    console.log(response);
  }

  callCreateTask();
  // [END fleetengine_v1_generated_DeliveryService_CreateTask_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
