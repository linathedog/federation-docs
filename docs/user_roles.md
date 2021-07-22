---
id: user_roles
title: Users And Roles
sidebar_label: Users And Roles
slug: /users
---


In the Federation registry user roles are assigned to users based on entitlements granted by the EGI-checkin authentication proxy. Roles are designed to be flexible meaning there can be any number of roles with different access to the various actions in the registry. These actions include creating requests, viewing services, reviewing requests and many others.

The Federation registry supports the following roles

- ### End Users (can take actions only on services owned by them)
  - Viewing services and service requests
  - Create registration requests
  - Create reconfiguration or deregistration requests
  - Editing pending requests
  - Viewing history of the service
  - Cancel pendings requests
  - View the owners group of a service


- ### Operators
  - All the above
  - View services and requests owned by other users
  - Review requests owned by other users
  - View Errors and act upon errors that occur in the deployment process

- ### Managers
  - Everything that an Operator can do
  - Approve requests that target a restricted environment 