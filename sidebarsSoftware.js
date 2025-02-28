/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

module.exports = {
  software: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
      'quickstart',
      'faq',
      ],
    },
    {
      type: 'category',
      label: 'Develop',
      items: [
      'cli-quickstart',
      'cli-podman',
      'customize-image',
      'kubepodoperator-local',
      ],
    },
    {
      type: 'category',
      label: 'Install',
      items: [
      'install-aws',
      'install-azure',
      'install-gcp',
      'install-airgapped',
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      items: [
      'manage-workspaces',
      'configure-deployment',
      'deploy-cli',
      'deploy-nfs',
      'deploy-git-sync',
      'deployment-logs',
      'environment-variables',
      'ci-cd',
      ],
    },
    {
      type: 'category',
      label: 'Customize Airflow',
      items: [
      'manage-airflow-versions',
      'access-airflow-database',
      'kubepodoperator',
      'kubernetes-executor',
      'airflow-alerts',
      'secrets-backend',
      'integrate-iam',
      'airflow-api',
      ],
    },
    {
      type: 'category',
      label: 'Manage Astronomer',
      items: [
      'integrate-auth-system',
      'import-idp-groups',
      'workspace-permissions',
      'manage-platform-users',
      'houston-api',
      'upgrade-astronomer-stable',
      'apply-platform-config',
      'registry-backend',
      'configure-platform-resources',
      'renew-tls-cert',
      'pre-create-namespaces',
      'third-party-ingress-controllers',
      ],
    },
    {
      type: 'category',
      label: 'Monitor',
      items: [
      'grafana-metrics',
      'kibana-logging',
      'platform-alerts',
      'logs-to-s3',
      ],
    },
    {
      type: 'category',
      label: 'Astronomer Certified',
      items: [
      'image-architecture',
      'single-node-install',
      'install-packages',
      'upgrade-ac',
      'ac-cve',
      'ac-support-policy',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshoot',
      items: [
      'kubectl',
      'debug-install',
      'disaster-recovery',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        {
        type: 'category',
        label: 'Release Notes',
        items: [
          'release-notes',
          'cli-release-notes',
        ],
      },
      'system-components',
      'support',
      'cli-reference',
      'version-compatibility-reference',
      'release-lifecycle-policy',
      ],
    },
  ],
};
