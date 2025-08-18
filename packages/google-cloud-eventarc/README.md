[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Eventarc: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-eventarc)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/eventarc.svg)](https://www.npmjs.org/package/@google-cloud/eventarc)




eventarc client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-eventarc/CHANGELOG.md).

* [Eventarc Node.js Client API Reference][client-docs]
* [Eventarc Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-eventarc](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-eventarc)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Eventarc API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/eventarc
```


### Using the client library

```javascript
// Imports the Google Cloud client library

// remove this line after package is released
const {EventarcClient} = require('@google-cloud/eventarc');

// TODO: replace with your prefered project ID.
// const projectId = 'my-project'

// Creates a client
const client = new EventarcClient();

async function doSomething() {
  for await (const trigger of await client.listTriggersAsync({
    parent: client.locationPath(projectId, 'us-central1'),
  })) {
    console.info(trigger.name);
  }
}
doSomething();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-eventarc/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Eventarc.create_channel | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_channel.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_channel.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.create_channel_connection | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_channel_connection.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-eventarc/samples/generated/v1/eventarc.create_channel_connection.js,packages/google-cloud-eventarc/samples/README.md) |
| Eventarc.create_enrollment | [source code](https://github.co