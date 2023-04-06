import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkGithubActionsStack } from '../lib/cdk-github-actions-stack';

test('SnapshotTest', () => {
  const app = new App();
  const stack = new CdkGithubActionsStack(app, 'CdkGithubActionsStack', {});
  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});