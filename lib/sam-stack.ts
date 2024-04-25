import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SamStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = new cdk.aws_lambda_nodejs.NodejsFunction(
      this,
      "SampleLambda",
      {
        runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
        entry: "lib/Lambdas/sampleFunction.ts",
        functionName: "SampleLambda",
      }
    );
  }
}
