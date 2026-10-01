---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---

Federation Registry is a web application for registering and managing OpenID
Connect (OIDC) and SAML services in a federated authentication infrastructure.
The available environments, form fields, policies, and user permissions depend
on the instance configuration.

Service owners manage a service by submitting **service requests**. A request
can register a new service, reconfigure an existing service, or deregister a
service. A request is not the deployed service configuration: it must first be
reviewed and approved. Approval starts an asynchronous deployment to the target
infrastructure, and deployment can finish or fail independently of the review.

This manual explains how to:

- Sign in and inspect your user information;
- Register, view, reconfigure, copy, and deregister services;
- Edit or cancel pending requests and respond to requested changes;
- Manage service owners and invitations;
- Review requests and follow deployment;
- Maintain outdated services; and
- Use privileged management tools when your assigned permissions allow it.

Start with [Landing Page and Login](login), then use
[Services and Service Requests](service_list) as the main workflow guide.
