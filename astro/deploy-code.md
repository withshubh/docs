---
sidebar_label: 'Deploy Code'
title: 'Deploy Code to Astro'
id: deploy-code
description: Deploy Airflow DAGs to Astro.
---

import {siteVariables} from '@site/src/versions';

## Overview

Astro makes it easy for your team to test Airflow DAGs locally and push them to a Deployment in a Production or Development environment. The following diagram shows how your Astro project can be packaged and deployed to Astro via the Astro CLI.

:::info

The process for deploying an Astro project via CI/CD varies slightly from this diagram. For more information, refer to [CI/CD: Workflow Overview](ci-cd.md#workflow-overview).

:::

This guide explains how to deploy DAGs to a Deployment on Astro.

## Prerequisites

To deploy DAGs to Astro, you must have:

- The [Astro CLI](install-cli.md) installed in an empty directory.
- An Astro Workspace with at least one [Deployment](configure-deployment.md).
- An [Astro project](create-project.md).
- [Docker](https://www.docker.com/products/docker-desktop).

## Step 1: Authenticate to Astro

Once you've tested your DAGs locally, you're ready to push them to Astro. To start, authenticate via the Astro CLI by running:

```
astrocloud auth login
```

After running this command, you will be prompted to open your web browser and log in via the Cloud UI. Once you complete this login, you will be automatically authenticated to the CLI.

## Step 2: Push DAGs to an Astro Deployment

To deploy your DAGs, run:

```
astrocloud deploy
```

This command returns a list of Airflow Deployments available in your Workspace and prompts you to pick one. Once this command is executed, all files in your Astro project directory are built into a new Docker image and pushed to Astro.

## Step 3: Validate Your Changes

If it's your first time deploying, expect to wait a few minutes for the Docker image to build. To confirm that your deploy was successful, open your Deployment in the Cloud UI and click **Open Airflow** to access the Airflow UI.

Once you log in, you should see the DAGs you just deployed.

## What Happens During a Code Deploy

When you deploy code to Astro, your Astro project is built into a Docker image. This includes system-level dependencies, Python-level dependencies, DAGs, and your `Dockerfile`. It does not include any of the metadata associated with your local Airflow environment, including task history and Airflow Connections or Variables that were set locally. This Docker image is then pushed to all containers running the Apache Airflow application on Astro.

![Deploy Code](/img/docs/deploy-architecture.png)

With the exception of the Airflow Webserver and some Celery Workers, Kubernetes gracefully terminates all containers during this process. This forces them to restart and begin running your latest code.

If you deploy code to a Deployment that is running a previous version of your code, then the following happens:

1. Tasks that are `running` will continue to execute on existing Celery workers and will not be interrupted unless the task does not complete within 24 hours of the code deploy.
2. One or more new worker(s) will spin up alongside your existing workers and immediately start executing scheduled tasks based on your latest code.

    These new workers will execute downstream tasks of DAG runs that are in progress. For example, if you deploy to Astronomer when `Task A` of your DAG is running, `Task A` will continue to run on an old Celery worker. If `Task B` and `Task C` are downstream of `Task A`, they will both be scheduled on new Celery workers running your latest code.

    This means that DAG runs could fail due to downstream tasks running code from a different source than their upstream tasks. DAG runs that fail this way need to be fully restarted from the Airflow UI so that all tasks are executed based on the same source code.

Astronomer sets a grace period of 24 hours for all workers to allow running tasks to continue executing. This grace period is not configurable. If a task does not complete within 24 hours, its worker will be terminated. Airflow will mark the task as a [zombie](https://airflow.apache.org/docs/apache-airflow/stable/concepts/tasks.html#zombie-undead-tasks) and it will retry according to the task's retry policy. This is to ensure that our team can reliably upgrade and maintain Astro as a service.

:::tip

If you want to force long-running tasks to terminate sooner than 24 hours, specify an [`execution_timeout`](https://airflow.apache.org/docs/apache-airflow/stable/concepts/tasks.html#timeouts) in your DAG's task definition.

:::

## Next Steps

Now that you're familiar with deploying DAGs to Astro, consider reading:

- [Develop your Project](develop-project.md)
- [Set Environment Variables](environment-variables.md)

For up-to-date information about product limitations, read [Known Limitations](known-limitations.md).

If you have any questions, reach out to us. We're here to help.
