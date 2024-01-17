---
id: Active_Directory
aliases: []
tags: []
---

Basics

  - It's an identity management system.
  - It is used by the vast majority of enterprises.
  - It is a Microsoft product but does not necessarily need to be run on a Windows machine.


Physical Components

  - Domain Controller
    - Function
      - The most important component of an AD system
      - Has control/privileges over everything in the Domain
    - Features
      - Host a copy of the AD DS directory store
      - Provide authentication services
      - Replicate updates to other domain controllers in the domain and forest
      - Allow administrative access to manage user accounts and network resources
        - Can setup group policies (GPO), change user passwords, etc.
  - AD DS Data Store
    - Function
      - Store data related to users, services, and applications within AD 
    - Features
      - Contains Ntds.dit file
        - Can pull stored password hashes
      - Stored by default in the %SystemRoot%\NTDS folder on all Domain Controllers
      - Is accessible only through the Domain Controller processes and protocols
  - Read-Only Domain Controller (RODC)
  - Global Catalog Server


Logical Components

  - Schema (like a rulebook or a blueprint)
    - Function 
      - Define every type of object that can be stored in the directory
      - Enforce rules regarding object creation and configuration
    - Details
      - Object types: Class and Attribute
        - Class objects are those that can be created inside the AD system (e.g., User, Computer, Printer, Service, etc.)
        - Attribute objects are info that can be attached to objects (e.g., Display name) 
  - Domains
    - Function
      - Group and manage objects in an organization
  - Domain Trees
    - Function
      - A hierarchy of domains 
    - Features
      - All domains in a tree share the same namespace
      - Two-way transitive trust between domains within the tree
  - Forests
    - A collection of domains
    - All trees have shared common schema and configuration partition
  - Organizational Units (OU)
    - A container for objects that have shared functionality & policies
  - Trusts
    - Directional extends from Trusting domain to Trusted domain
    - Transitive extends beyond a two domain trust relationship to include all steps of trust in between
  - Partitions
  - Sites
