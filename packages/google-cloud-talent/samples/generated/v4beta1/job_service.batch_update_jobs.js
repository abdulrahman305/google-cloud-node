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

function main(parent, jobs) {
  // [START jobs_v4beta1_generated_JobService_BatchUpdateJobs_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the tenant under which the job is created.
   *  The format is "projects/{project_id}/tenants/{tenant_id}". For example,
   *  "projects/foo/tenant/bar". If tenant id is unspecified, a default tenant
   *  is created. For example, "projects/foo".
   */
  // const parent = 'abc123'
  /**
   *  Required. The jobs to be updated.
   */
  // const jobs = [1,2,3,4]
  /**
   *  Strongly recommended for the best service experience. Be aware that it will
   *  also increase latency when checking the status of a batch operation.
   *  If
   *  update_mask google.cloud.talent.v4beta1.BatchUpdateJobsRequest.update_mask 
   *  is provided, only the specified fields in
   *  Job google.cloud.talent.v4beta1.Job  are updated. Otherwise all the
   *  fields are updated.
   *  A field mask to restrict the fields that are updated. Only
   *  top level fields of Job google.cloud.talent.v4beta1.Job  are supported.
   *  If
   *  update_mask google.cloud.talent.v4beta1.BatchUpdateJobsRequest.update_mask 
   *  is provided, The Job google.cloud.talent.v4beta1.Job  inside
   *  JobResult google.cloud.talent.v4beta1.JobOperationResult.JobResult 
   *  will only contains fields that is updated, plus the Id of the Job.
   *  Otherwise,  Job google.cloud.talent.v4beta1.Job  will include all fields,
   *  which can yield a very large response.
   */
  // const updateMask = {}

  // Imports the Talent library
  const {JobServiceClient} = require('@google-cloud/talent').v4beta1;

  // Instantiates a client
  const talentClient = new JobServiceClient();

  async function callBatchUpdateJobs() {
    // Construct request
    const request = {
      parent,
      jobs,
    };

    // Run request
    const [operation] = await talentClient.batchUpdateJobs(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callBatchUpdateJobs();
  // [END jobs_v4beta1_generated_JobService_BatchUpdateJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
