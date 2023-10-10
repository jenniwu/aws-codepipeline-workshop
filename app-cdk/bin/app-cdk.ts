#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EcrCdkStack } from '../lib/ecr-cdk-stack';
import { AppCdkStack } from '../lib/app-cdk-stack';
import { PipelineCdkStack } from '../lib/pipeline-cdk-stack';

const app = new cdk.App();

const ecrCdkStack = new EcrCdkStack(app, 'ecr-stack', {});

const testAppCdkStack = new AppCdkStack(app, 'test', { ecrRepository: ecrCdkStack.repository});
const prodAppCdkStack = new AppCdkStack(app, 'prod', { ecrRepository: ecrCdkStack.repository});

const pipelineCdkStack = new PipelineCdkStack(app, 'pipeline-stack', { 
    ecrRepository: ecrCdkStack.repository,
    testAppFargateService: testAppCdkStack.fargateService,
    prodAppFargateService: prodAppCdkStack.fargateService
  });
  