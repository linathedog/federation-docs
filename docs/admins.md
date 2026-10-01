---
id: admins
title: Reviewer and Operator Actions
sidebar_label: Reviewer and Operator Actions
slug: /guideline/admins
---

The actions on this page appear only when granted by the instance configuration
and can be restricted by environment or service scope.

## Review requests

Use the pending-request filter in Manage Services, open **Review**, and inspect
the complete proposal. For a reconfiguration, pay particular attention to the
highlighted differences from the approved configuration.

- **Approve** accepts the request and, after any additional approval stage,
  starts deployment.
- **Request changes** returns it to the owners. Add a clear comment describing
  the required corrections.
- **Reject** closes the request without altering the approved configuration.

See [Review a service request](../service_list#review-a-service-request) for the
full workflow.

## Investigate deployment failures

Filter or locate a service with a deployment malfunction indicator, open the
service, and inspect the error panel. Choose a recovery action only after
confirming that it matches the reported failure. Approval has already occurred
at this stage; submitting another request does not repair the failed operation.

#### Deployment error details and recovery actions

![Deployment error details and recovery actions](/img/screenshots/error_box.png)

## Manage tags

Tags provide a consistent way to categorise services and support filtering and
reporting. From the tag management page, authorised users can create, edit, or
remove the configured tags. Before removing or renaming a tag, consider its use
on existing services and in operational reports.

#### Tag management option

![Tag management option](/img/screenshots/manage_tags_option.png)

#### Tag management window

![Tag management window](/img/screenshots/manage_tags_window.png)


## Export service data

The export action produces a CSV file from the services currently selected by
the list filters. Apply the intended tenant, environment, status, ownership, or
tag filters first, check the visible results, and then export. Treat the file as
operational data and share it according to the tenant's data-handling rules.

#### Filtered service-data export

![Filtered service-data export](/img/screenshots/export.png)

## Send a broadcast notification

The **Broadcast Message** page sends an email notification to contacts of
services matching the selected criteria. The displayed **Number of Recipients**
changes with the selection and should be checked before sending.

1. Under **Contact Types**, select one or more recipient roles: Admin,
   Technical, Support, or Security. Use **All Contact Types** only when the
   message applies to every registered contact.
2. Under **Select Service Protocol**, select OIDC, SAML, or both.
3. Under **Select Service Environment**, select the relevant integration
   environments or **All Environments**.
4. Optionally add comma-separated addresses to **CC** and select **Also notify
   Federation Registry Operators and Managers** when they should receive the
   same message.
5. Enter the sender's name and email address, followed by the notification
   subject and email body. These fields are required.
6. Recheck the recipient count and all filters, then select **Send**.

Contact-type, protocol, and environment filters are combined. A broad selection
can notify contacts for many services, so confirm the scope and avoid including
credentials or service secrets in the message.

#### Broadcast notification form

![Broadcast notification form](/img/screenshots/broadcast.png)

## Notify owners of outdated services

The **Outdated Alert** page is dedicated to reminding owners whose services no
longer satisfy the current technical or policy rules. The **Outdated Services**
table shows the number of affected services for each integration environment.
Review these counts before sending a notification.

1. Select the target integration environment from the dropdown.
2. Confirm that the selected environment and its outdated-service count are the
   intended scope.
3. Select **Send** to notify the owners of outdated services in that
   environment.

Notifications are sent one environment at a time. They do not change a service
or create a request; each owner must open the flagged service, correct the
highlighted fields, and submit a reconfiguration request. See
[Update an outdated service](../outdated_services#update-an-outdated-service).

#### Outdated-service notification page

![Outdated-service notification page](/img/screenshots/outdated_notifications.png)
