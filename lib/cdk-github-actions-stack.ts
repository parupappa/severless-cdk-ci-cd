import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';
export class CdkGithubActionsStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    
    // Create a Lambda function with code from the "src/lambda" directory
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset('src/'),
      handler: 'hello.handler',
    });

    // defines an API Gateway REST API resource backed by our "hello" function.
    new apigateway.LambdaRestApi(this, 'GithubActionsEndpoint', {
      handler: hello,
      endpointTypes: [ apigateway.EndpointType.REGIONAL ],
    });
  }
}
