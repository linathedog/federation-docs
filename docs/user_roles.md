---
id: user_roles
title: Users And Roles
sidebar_label: Users And Roles
slug: /users
---


In the Federation registry user roles are assigned to users based on entitlements granted by the EGI-checkin authentication proxy. Roles are designed to be flexible meaning there can be any number of roles with different access to the various actions in the registry. These actions include creating petitions, viewing services, reviewing petitions and many others.

The Federation registry supports the following roles

- ### End Users (can take actions only on services owned by them)
  - Viewing services and petitions
  - Create registration petition requests
  - Create reconfiguration or deregistration petition requests
  - Editing pending petition requests
  - Viewing history of the service
  - Cancel pending petition request
  - View the owners group of a service


- ### Site-ops Managers (can take actions only on services owned by them)
  - All the actions of the End Users
  - Approve petition requests
  - Reject petition requests
  - Request Changes on petition requests


- ### Administrators
  - All the above
  - View services and petitions owned by other users
  - Review petitions owned by other users
  - View Error and act upon errors that occur in the deployment process
