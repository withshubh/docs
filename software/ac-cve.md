---
title: "Astronomer Certified Security"
sidebar_label: "CVEs"
id: ac-cve
description: "Common Vulnerabilities and Exposures identified within our Astronomer Certified images."
---

## Overview

This page is the source of truth for any Common Vulnerabilities and Exposures (CVEs) identified within any of our supported Astronomer Certified images for Apache Airflow.

Currently, all supported Astronomer Certified images are listed in two places:

- [Astronomer Downloads](https://astronomer.io/downloads)
- [Astronomer's Docker Registry (Quay.io)](https://quay.io/repository/astronomer/ap-airflow?tab=tags)

Refer to [Upgrade Apache Airflow on Astronomer](manage-airflow-versions.md) for detailed guidelines on how to upgrade between Airflow versions on your Software instance.

## Reporting Vulnerabilities and Security Concerns

Vulnerability reports for Astronomer Certified should be sent to [security@astronomer.io](mailto:security@astronomer.io). All security concerns, questions and requests should be directed here.

When we receive a request, our dedicated security team will evaluate and validate it. If we confirm a vulnerability, we’ll allocate internal resources towards identifying and publishing a resolution in an updated image. The timeline within which vulnerabilities are addressed will depend on the severity level of the vulnerability and its impact.

Once a resolution has been confirmed, we'll release it in the next major, minor, or patch Astronomer Certified image and publish details to this page in the section below.

> **Note:** All other Airflow and product support requests should be directed to [Astronomer's Support Portal](https://support.astronomer.io), where our team's Airflow Engineers are ready to help.

## Previously Announced Vulnerabilities

### Apache Airflow Core

| CVE | Date | Versions Affected | Description | Remediation |
|---|---|---|---|---|
| CVE-2021-45230 | 2022-01-19 | <ul><li>2.1.4-1 to 2.1.4-3</li><li>2.1.3-1 to 2.1.3-3</li><li>2.1.1-1 to 2.1.1-5</li><li>2.1.0-1 to 2.1.0-6</li></ul> | Creating DagRuns didn't respect Dag-level permissions in the Webserver. ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-45230)) | Use one of the following AC Versions: <ul><li>2.1.4-4</li><li>2.1.3-4</li><li>2.1.1-6</li><li>2.1.0-7</li></ul> |
| CVE-2021-38540 | 2021-09-09 | <ul><li>2.1.1-1 to 2.1.1-2</li><li>2.1.0-1 to 2.1.0-3</li><li>2.0.2-1 to 2.0.2-4</li><li>2.0.0-1 to 2.0.0-8</li></ul> | Variable Import endpoint missed authentication check. ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-38540)) | Use one of the following AC Versions: <ul><li>2.1.1-3</li><li>2.1.0-4</li><li>2.0.2-5</li><li>2.0.0-9</li></ul> |
| CVE-2021-35936 | 2021-08-13 | <ul><li>2.1.1-1</li><li>2.1.0-1 to 2.1.0-2</li><li>2.0.2-1 to 2.0.2-3</li><li>2.0.0-1 to 2.0.0-7</li><li>1.10.15-1 to 1.10.15-2</li><li>1.10.14-1 to 1.10.14-3</li><li>1.10.12-1 to 1.10.12-4</li><li>1.10.10-1 to 1.10.10-8</li><li>1.10.7-1 to 1.10.7-18</li><li>1.10.5-1 to 1.10.5-11</li></ul> | No Authentication on Logging Server. ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-35936)) | Use one of the following AC Versions: <ul><li>2.1.1-2</li><li>2.1.0-3</li><li>2.0.2-4</li><li>2.0.0-8</li><li>1.10.15-3</li><li>1.10.14-4</li><li>1.10.12-4</li><li>1.10.10-9</li><li>1.10.7-19</li></ul> |
| CVE-2021-28359 | 2021-02-17 | <ul><li>2.0.0-1 to 2.0.0-3</li><li>1.10.14-1 to 1.10.14-2</li><li>1.10.12-1 to 1.10.12-3</li><li>1.10.10-1 to 1.10.10-7</li><li>1.10.7-1 to 1.10.7-17</li><li>1.10.5-1 to 1.10.5-11</li></ul> | The "origin" parameter passed to some of the endpoints like '/trigger' was vulnerable to XSS exploit. This issue affects Apache Airflow versions <1.10.15 in 1.x series and affects 2.0.0 and 2.0.1 and 2.x series. Update to Airflow 1.10.15 or 2.0.2. This is the same as CVE-2020-13944 & CVE-2020-17515 but the implemented fix did not account for certain cases. ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-28359)) | Use one of the following AC Versions: <ul><li>2.0.0-4</li><li>1.10.14-3</li><li>1.10.12-4</li><li>1.10.10-8</li><li>1.10.7-18</li></ul> |
| CVE-2021-26697 | 2021-02-17 | <ul><li>2.0.0-1 to 2.0.0-2</li></ul> | Lineage API endpoint for Experimental API missed authentication check. ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-26697)) | Use one of the following AC Versions: <ul><li>2.0.0-3</li></ul> |
| CVE-2021-26559 | 2021-02-17 | <ul><li>2.0.0-1 to 2.0.0-2</li></ul> | Users with Viewer or User role can get Airflow Configurations using Stable API including sensitive information even when `[webserver] expose_config` is set to `False` in `airflow.cfg`. ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-26559)) | Use one of the following AC Versions: <ul><li>2.0.0-3</li></ul> |
| CVE-2020-17526 | 2020-12-21 | <ul><li>1.10.12-1</li><li>1.10.10-1 to 1.10.10-5</li><li>1.10.7-1 to 1.10.7-15</li><li>1.10.5-1 to 1.10.5-11</li></ul> | Incorrect Session Validation in Airflow Webserver with default config allows a malicious airflow user on site A where they log in normally, to access unauthorized Airflow Webserver on Site B through the session from Site A. ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-17526)) | Use one of the following AC Versions: <ul><li>1.10.14-1</li><li>1.10.12-2</li><li>1.10.10-6</li><li>1.10.7-16</li></ul> |
| CVE-2020-17513 | 2020-12-11 | <ul><li>1.10.12-1</li><li>1.10.10-1 to 1.10.10-5</li><li>1.10.7-1 to 1.10.7-15</li><li>1.10.5-1 to 1.10.5-11</li></ul> | The Charts and Query View of the old (Flask-admin based) UI were vulnerable for SSRF attack. ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-17513)) | Use one of the following AC Versions: <ul><li>1.10.14-1</li><li>1.10.12-2</li><li>1.10.10-6</li><li>1.10.7-16</li></ul> |
| CVE-2020-17511 | 2020-12-11 | <ul><li>1.10.12-1</li><li>1.10.10-1 to 1.10.10-5</li><li>1.10.7-1 to 1.10.7-15</li><li>1.10.5-1 to 1.10.5-11</li></ul> | Apache Airflow Admin password gets logged in plain text. ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-17511)) | Use one of the following AC Versions: <ul><li>1.10.14-1</li><li>1.10.12-2</li><li>1.10.10-6</li><li>1.10.7-16</li></ul> |
| CVE-2020-17515 | 2020-12-11 | <ul><li>1.10.12-1</li><li>1.10.10-1 to 1.10.10-5</li><li>1.10.7-1 to 1.10.7-15</li><li>1.10.5-1 to 1.10.5-11</li></ul> | The "origin" parameter passed to some of the endpoints like '/trigger' was vulnerable to XSS exploit. This is same as CVE-2020-13944 but the implemented fix in Airflow 1.10.13 did not fix the issue completely. ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-17515)) | Use one of the following AC Versions: <ul><li>1.10.14-1</li><li>1.10.12-2</li><li>1.10.10-6</li><li>1.10.7-16</li></ul> |
| CVE-2020-13944 | 2020-09-16 | Apache Airflow versions < 1.10.12 | In Apache Airflow < 1.10.12, the "origin" parameter passed to some of the endpoints like '/trigger' was vulnerable to XSS exploit. ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-13944)) | Use one of the following AC Versions: <ul><li>1.10.10-5</li><li>1.10.7-15</li></ul> |

### Astronomer Certified Docker Images

This section lists security related updates/mitigations in the Astronomer Certified docker images.

| CVE | Date | Component | Versions Affected | Description| Remediation |
|---|---|---|---|---|---|
| CVE-2021-41265 | 2022-01-19 | Flask-AppBuilder | <ul><li>2.2.1-1 to 2.2.1-2</li><li>2.2.0-1 to 2.2.0-4</li><li>2.1.4-1 to 2.1.4-3</li><li>2.1.3-1 to 2.1.3-3</li><li>2.1.1-1 to 2.1.1-5</li><li>2.1.0-1 to 2.1.0-6</li></ul> | Improper Authentication in Flask-AppBuilder. ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-41265)) | Use one of the following AC Versions: <ul><li>2.2.1-3</li><li>2.2.0-5</li><li>2.1.4-4</li><li>2.1.3-4</li><li>2.1.1-6</li><li>2.1.0-7</li></ul> |
| CVE-2021-23727 | 2022-01-19 | Celery | <ul><li>2.2.3-1</li><li>2.2.2-1</li><li>2.2.1-1 to 2.2.1-2</li><li>2.2.0-1 to 2.2.0-4</li></ul> | This affects the package celery before 5.2.2. It by default trusts the messages and metadata stored in backends (result stores). When reading task metadata from the backend, the data is deserialized. Given that an attacker can gain access to, or somehow manipulate the metadata within a celery backend, they could trigger a stored command injection vulnerability and potentially gain further access to the system. ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=2021-23727)) | Use Docker image with one of the following AC Versions: <ul><li>2.2.3-2</li><li>2.2.2-2</li><li>2.2.1-3</li><li>2.2.0-5</li></ul> |
| CVE-2021-33430 | 2022-01-19 | NumPy | <ul><li>2.2.3-1</li><li>2.2.2-1</li><li>2.2.1-1 to 2.2.1-2</li><li>2.2.0-1 to 2.2.0-4</li><li>2.1.4-1 to 2.1.4-3</li><li>2.1.3-1 to 2.1.3-3</li><li>2.1.1-1 to 2.1.1-5</li><li>2.1.0-1 to 2.1.0-6</li></ul> | A Buffer Overflow vulnerability exists in NumPy 1.9.x in the PyArray_NewFromDescr_int function of ctors.c when specifying arrays of large dimensions (over 32) from Python code, which could let a malicious user cause a Denial of Service. ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=2021-33430)) | Use Docker image with one of the following AC Versions: <ul><li>2.2.3-2</li><li>2.2.2-2</li><li>2.2.1-3</li><li>2.2.0-5</li><li>2.1.4-4</li><li>2.1.3-4</li><li>2.1.1-6</li><li>2.1.0-7</li></ul> |
| CVE-2020-1967 | 2019-12-03 | OpenSSL | <ul><li>1.10.7-1 to 1.10.7-8</li><li>1.10.5-1 to 1.10.5-6</li></ul> | Server or client applications that call the SSL_check_chain() function during or after a TLS 1.3 handshake may crash due to a NULL pointer dereference as a result of incorrect handling of the "signature_algorithms_cert" TLS extension. <br></br>The crash occurs if an invalid or unrecognized signature algorithm is received from the peer. This could be exploited by a malicious peer in a Denial of Service attack. OpenSSL version 1.1.1d, 1.1.1e, and 1.1.1f are affected by this issue. This issue did not affect OpenSSL versions prior to 1.1.1d. Fixed in OpenSSL 1.1.1g (Affected 1.1.1d-1.1.1f). ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=2020-1967)) | Use Docker image with one of the following AC Versions: <ul><li>1.10.7-10</li><li>1.10.5-7</li></ul> |
| CVE-2019-16168 | 2019-09-09 | SQLite | Alpine Images with following AC Versions: <ul><li>1.10.7-1 to 1.10.7-8</li><li>1.10.5-1 to 1.10.5-6</li></ul> | In SQLite through 3.29.0, whereLoopAddBtreeIndex in sqlite3.c can crash a browser or other application because of missing validation of a sqlite_stat1 sz field, aka a "severe division by zero in the query planner." ([Details](https://cve.mitre.org/cgi-bin/cvename.cgi?name=2019-16168))| Use Docker image with one of the following AC Versions: <ul><li>1.10.7-10</li><li>1.10.5-7</li></ul> |
