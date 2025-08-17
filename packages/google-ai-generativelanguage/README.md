[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Generative Language API: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-ai-generativelanguage)

[![release level](https://img.shields.io/badge/release%20level-preview-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-ai/generativelanguage.svg)](https://www.npmjs.org/package/@google-ai/generativelanguage)




Generative Language API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-ai-generativelanguage/CHANGELOG.md).

* [Generative Language API Node.js Client API Reference][client-docs]
* [Generative Language API Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-ai-generativelanguage](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-ai-generativelanguage)

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
1.  [Enable the Generative Language API API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-ai/generativelanguage
```


### Using the client library

```javascript
/**
 * This snippet has been automatically generated and should be regarded as a code template only.
 * It will require modifications to work.
 * It may require correct/in-range values for request initialization.
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The model name to use with the format name=models/{model}.
 */
// const model = 'abc123'
/**
 *  Required. The free-form input text given to the model as a prompt.
 *  Given a prompt, the model will generate a TextCompletion response it
 *  predicts as the completion of the input text.
 */
// const prompt = {
//  text: 'abc123'
// }
/**
 *  Controls the randomness of the output.
 *  Note: The default value varies by model, see the `Model.temperature`
 *  attribute of the `Model` returned the `getModel` function.
 *  Values can range from 0.0,1.0,
 *  inclusive. A value closer to 1.0 will produce responses that are more
 *  varied and creative, while a value closer to 0.0 will typically result in
 *  more straightforward responses from the model.
 */
// const temperature = 1234
/**
 *  Number of generated responses to return.
 *  This value must be between 1, 8, inclusive. If unset, this will default
 *  to 1.
 */
// const candidateCount = 1234
/**
 *  The maximum number of tokens to include in a candidate.
 *  If unset, this will default to 64.
 */
// const maxOutputTokens = 1234
/**
 *  The maximum cumulative probability of tokens to consider when sampling.
 *  The model uses combined Top-k and nucleus sampling.
 *  Tokens are sorted based on their assigned probabilities so that only the
 *  most liekly tokens are considered. Top-k sampling directly limits the
 *  maximum number of tokens to consider, while Nucleus sampling limits number
 *  of tokens based on the cumulative probability.
 *  Note: The default value varies by model, see the `Model.top_p`
 *  attribute of the `Model` returned the `getModel` function.
 */
// const topP = 1234
/**
 *  The maximum number of tokens to consider when sampling.
 *  The model uses combined Top-k and nucleus sampling.
 *  Top-k sampling considers the set of `top_k` most probable tokens.
 *  Defaults to 40.
 *  Note: The default value varies by model, see the `Model.top_k`
 *  attribute of the `Model` returned the `getModel` function.
 */
// const topK = 1234
/**
 *  The set of character sequences (up to 5) that will stop output generation.
 *  If specified, the API will stop at the first appearance of a stop
 *  sequence. The stop sequence will not be included as part of the response.
 */
// const stopSequences = 'abc123'

// Imports the Generativelanguage library
const {TextServiceClient} = require('@google-ai/generativelanguage').v1beta2;

// Instantiates a client
const generativelanguageClient = new TextServiceClient();

async function callGenerateText() {
  // Construct request
  const request = {
    model,
    prompt,
  };

  // Run request
  const response = await generativelanguageClient.generateText(request);
  console.log(response);
}

callGenerateText();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-ai-generativelanguage/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Generative_service.batch_embed_contents | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.batch_embed_contents.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1/generative_service.batch_embed_contents.js,packages/google-ai-generativelanguage/samples/README.md) |
| Generative_service.count_tokens | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.count_tokens.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1/generative_service.count_tokens.js,packages/google-ai-generativelanguage/samples/README.md) |
| Generative_service.embed_content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.embed_content.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1/generative_service.embed_content.js,packages/google-ai-generativelanguage/samples/README.md) |
| Generative_service.generate_content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.generate_content.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-ai-generativelanguage/samples/generated/v1/generative_service.generate_content.js,packages/google-ai-generativelanguage/samples/README.md) |
| Generative_service.stream_generate_content | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-ai-generativelanguage/samples/generated/v1/generative_service.stream_generate_content.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=htt