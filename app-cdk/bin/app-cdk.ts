import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AppCdkStack } from '../lib/app-cdk-stack';
import { PipelineCdkStack } from '../lib/pipeline-cdk-stack'

const app = new cdk.App();

new AppCdkStack(app, 'AppCdkStack', {});

new PipelineCdkStack(app, 'pipeline-stack', {});
