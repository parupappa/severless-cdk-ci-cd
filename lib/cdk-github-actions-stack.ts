import { Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export class CdkGithubActionsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
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
