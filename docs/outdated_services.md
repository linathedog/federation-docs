---
id: outdated_services
title: Outdated Services
sidebar_label: Outdated Services
slug: /outdated_services
---

## Why a service is marked outdated

Technical and policy requirements can change after a service is registered. A
service is marked **Outdated** when its stored configuration no longer satisfies
the current rules for its tenant and environment—for example, a newly required
field is missing or a previously accepted value is no longer valid.

#### Outdated alert

![Outdated alert](/img/screenshots/outdated_alert.png)

The marker can be introduced to improve security, interoperability, policy
compliance, or compatibility with peer federations. It does not by itself mean
that the remote service has been disabled.

## Update an outdated service

1. Open **Manage Services** and enable the outdated-services filter.
2. Locate the service marked **Outdated** and select **Reconfigure**.
3. Review every form tab. Invalid or missing values are highlighted with a
   validation message.
4. Correct the configuration and submit the reconfiguration request.
5. Follow its review and deployment states as usual.

#### Outdated filter and services

![Outdated filter and services](/img/screenshots/outdated_filter.png)

#### Outdated service and validation messages

![Outdated service and validation messages](/img/screenshots/outdated_service.png)

Owners can receive periodic notifications until a corrective request is
submitted. Requirements can differ between environments, so resolve the errors
shown for the service's actual target environment.
