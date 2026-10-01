---
id: user_roles
title: Users and Roles
sidebar_label: Users and Roles
slug: /users
---

Federation Registry permissions are configurable for each instance. Identity
attributes returned by the authentication proxy are mapped to roles, and roles
grant individual actions. Environment and service ownership can further limit
those actions. Therefore, role names are descriptive examples; the actions
visible in the application are the reliable guide for your account.

Typical permission groups include:

### Service owners

- view services they own and their request history;
- create registration requests;
- reconfigure or deregister owned services;
- edit or cancel pending requests; and
- view the owners group, with membership management available to group managers.

### Operators and reviewers

- view services within their assigned scope;
- review requests and request corrections;
- inspect deployment failures and, when authorised, trigger recovery actions;
  and
- use configured reporting or notification tools.

### Managers or policy reviewers

- perform operator actions; and
- take an additional approval step for environments or requests that require
  policy review.

Use [User Information](user-information) to inspect the identity attributes
received for your account. Contact the tenant administrator if an expected
action is unavailable.
