---
id: end_users
title: Service Owner Guide
sidebar_label: Service Owner Guide
slug: /guideline/end_user
---

This guide follows the tasks a service owner performs from the first
registration through later updates and eventual deregistration. For screenshots
and field-level explanations, see
[Services and Service Requests](../service_list).

## Before you start

Sign in through the instance's authentication proxy and open
[**Manage Services**](../service_list#manage-services). The page lists the services you own, their environments, open
requests, and deployment states. Use its search box and filters when a service
is not immediately visible.

If an existing service does not appear, you may not belong to its owners group.
Ask a group manager to invite you, then accept the invitation using the same
identity with which you sign in. See
[Accept or decline an invitation](../invitations#accept-or-decline-an-invitation).

## Understand the service lifecycle

A service request proposes a change; it is not the deployed configuration.
Registration, reconfiguration, and deregistration requests follow the same
basic lifecycle:

1. A service owner creates and submits a request.
2. A reviewer approves it, requests corrections, or rejects it.
3. Some environments can require a second approval stage.
4. Final approval starts asynchronous deployment.
5. The service becomes available for another request after deployment finishes.

Review and deployment are separate. **Pending review** means a decision has not
yet been made. **Waiting deployment** means the request was approved but the
target infrastructure has not finished applying it. See
[Deployment Process](../deployment) for the post-approval flow.

## Register a new service

See the illustrated [Register a service](../service_list#register-a-service)
workflow for the corresponding screens.

### 1. Start the request

Open **Manage Services** and select **New Service**. Choose the target
integration environment carefully: available endpoints, required fields,
policies, and review stages can differ between environments.

### 2. Complete the General tab

Provide the service's identifying and descriptive information. Depending on the
instance, this can include its name, description, website, logo, and
administrative, security, support, or technical contacts. Use maintained team
addresses where possible so notifications do not depend on one person.

### 3. Configure the service in Advanced

Select a **Configuration Profile** first. This reveals the fields that apply to
the intended service:

- **Machine-to-Machine (M2M)** for a client acting on its own behalf without an
  interactive user;
- **Resource Server (API)** for an API that accepts access tokens; or
- **Advanced / Custom** when the predefined profiles do not fit and the OIDC or
  SAML options must be configured manually.

For Advanced / Custom, select the protocol and complete the revealed fields.
OIDC options can change further according to the selected grants and client
authentication capabilities. Check that redirect URIs, identifiers, metadata,
and endpoints belong to the selected environment rather than another instance
of the service.

### 4. Complete the Policy tab

Provide the policy information requested for the service. Requirements can
depend on the environment and on whether the selected protocol and grants make
the service user-facing.

### 5. Validate and submit

Check the error count on every tab and correct all highlighted fields. Review
the complete request before submitting it. Submission creates the owners group,
adds you as a group manager, and notifies the appropriate reviewers.

## Follow a submitted request

The service list indicates what is happening and which action is available:

| State | Meaning | What you should do |
| --- | --- | --- |
| Pending review | The request is waiting for a reviewer. | Wait, edit the open request if necessary, or cancel it. |
| Changes requested | A reviewer returned the request with a comment. | Open the request, make the requested corrections, and resubmit it. |
| Rejected | The request was closed without changing the approved service. | Read the review decision and create a new request only if appropriate. |
| Waiting deployment | Final approval was granted and the change is being applied. | Wait for deployment to finish; do not create a duplicate request. |
| Deployment Malfunction | The request was approved, but the remote change failed. | Inspect the displayed error if available and contact the instance's support team for support. |
| Deployed | The approved configuration has been applied successfully. | The service can now be reconfigured or deregistered. |

Email notifications complement the status shown in Federation Registry. Use
the application state as the current record if an older email and the service
list differ.

## Edit or cancel a pending request

See [Reconfigure a service or edit an open request](../service_list#reconfigure-a-service-or-edit-an-open-request)
and [Cancel a pending request](../service_list#cancel-a-pending-request).

Select **Reconfigure** on a service with an open request to reopen that request.
Update the fields and submit again to save the revised proposal.

To withdraw it, select **Cancel Request** from the service's **More options**
menu or from the request edit page. Cancellation removes only the pending
proposal. It does not deregister or alter an already approved service.

## Respond to requested changes

See the illustrated
[Respond to requested changes](../service_list#respond-to-requested-changes)
workflow.

When a reviewer requests changes:

1. Locate the service marked **Changes Requested**.
2. Select **Reconfigure** to open the returned request.
3. Read the reviewer's comment before editing.
4. Correct the identified fields and review the other tabs for related
   validation errors.
5. Resubmit the request.

Resubmission sends the request back for review. It does not approve or deploy
the service automatically.

## Reconfigure a deployed service

See [Reconfigure a service or edit an open request](../service_list#reconfigure-a-service-or-edit-an-open-request).

Locate the deployed service and select **Reconfigure**. The form is populated
with the approved configuration. Change only what is needed, but review all tabs
because instance requirements might have changed since the previous approval.

Submitting creates a reconfiguration request. The deployed configuration
continues to operate while the request is reviewed. If approved, only then is
the proposed configuration sent for deployment.

## Copy a service to another environment

See [Copy a service to another environment](../service_list#copy-a-service-to-another-environment).

Use the service's copy or move action when an existing configuration should be
used as the starting point for another integration environment. Select the
target environment and inspect every copied value before submitting.

In particular, update environment-specific redirect URIs, entity identifiers,
metadata locations, endpoints, contacts, and policies. Copying creates a new
registration request; it does not bypass validation or review.

## Deregister a service

See [Deregister a service](../service_list#deregister-a-service).

For a deployed service, open **More options** and select **Deregister Service**.
Confirm that you selected the correct service and environment, then submit the
request. The service remains deployed until the deregistration is approved and
the removal operation succeeds.

Deregistration affects access through the target federation infrastructure.
Coordinate it with the service team and its users before submitting.

## Manage service owners

See [Manage ownership of a service](../service_list#manage-ownership-of-a-service)
and [Invitations](../invitations).

Open **More options → Manage Owners** to see the owners group. All group members
can collaborate on the service according to their permissions. Group managers
can additionally:

- invite a user by email as a member or group manager;
- inspect, resend, or renew pending invitations; and
- remove members.

A member can leave the group, but the group must retain at least one member and
one manager. Keep more than one active group manager so ownership can be
maintained when somebody leaves the team.

## Review history and audit changes

See [View service history](../service_list#view-service-history).

Open **More options → View History** to inspect reviewed requests in
chronological order. Each entry is a configuration snapshot, allowing you to
see what was requested and approved over the service lifecycle. Use history
when investigating when a value changed; use **View Service** for the current
configuration.

## Update an outdated service

An **Outdated** marker means the stored configuration no longer satisfies the
current technical or policy rules for its environment. The service is not
necessarily disabled, but its owners should submit a corrective
reconfiguration.

Enable the outdated-services filter, select **Reconfigure**, and correct the
highlighted fields on every tab. See
[Update an outdated service](../outdated_services#update-an-outdated-service)
for the full procedure.

## When you need help

Before contacting support, collect the service name, integration environment,
request or deployment state, and the exact validation or deployment message.
Do not include client secrets or other credentials. For asynchronous failures,
see [Deployment failures](../deployment#deployment-failures).
