---
author:
- Silin Zhao
startup: overview
title: OpenIdProject
---

Project Description
===================

OpenID Project is an open-source decentralized identity management
system leveraging blockchain technology and zero-knowledge proofs. The
platform enables users to:

-   Maintain sovereign control over personal digital identity
-   Create verifiable credentials with cryptographically signed
    attestations
-   Establish trust relationships through decentralized identifiers
    (DIDs)
-   Securely store sensitive information using homomorphic encryption
-   Track information provenance through immutable audit trails

Key Technical Components:

1.  ****Identity Blockchain****: Permissioned blockchain using Practical
    Byzantine Fault Tolerance (PBFT) consensus
2.  ****ZK-SNARKs Protocol****: For privacy-preserving credential
    verification
3.  ****IPFS Integration****: Distributed storage for credential
    documents and attachments
4.  ****Cross-Chain Bridges****: Interoperability with Ethereum,
    Hyperledger, and Polkadot
5.  ****Quantum-Resistant Cryptography****: NIST-approved post-quantum
    algorithms

Project Timeline:

-   2018: Initial concept and cryptographic research
-   2020: Core blockchain prototype development
-   2022: Mainnet launch (August 3) with basic identity features
-   2023 Q2: Planned integration with EU eIDAS standards
-   2024: Target for enterprise-ready version 2.0 release

What will be noted
==================

Was is valuable for us
----------------------

Information is the only valuable matter, according to my personal
opinion. irony, it\'s invisible. From deep aspect, information is just
one porperties of visible matter, one of permutations of atoms. so if
people change the permutation, the corresponding information is lost.

According to the desige of the project, all information, which has been
recorded with this application should be able to be proofed with aspect
to its exisence.

With the development of our social state, information access is getting
more faster, but its purity and ownership is not get guaranteed. But for
a referencing, the purity and ownership of information should be so
important as information itself. Those are valuable for us.

Here I list some information which can be as a example for our project.

### Personal Information

In our society each of us should already has a identification, it can
even be referenced to personal DNA serial. But now, our personal
information is separated in different parts, health records, educational
background, work experience... In the near further, I believe we should
easily be able to get known such information.

### original work of copy right

creative ideas, digital artistic product, literary and artistic
creative... any of such things, should be labeled from its creator. All
such records will be embeded into personal block chain with timestamp
and ownership detail information. Copy right problem for digital product
can be solved with this project.

### Smartcontract

basically, all smartcontract involved can be referenced also here,
seeing later update

### Records into block chain

Each records has unified hashtag. Even only one letter has been changed,
its unified hashtag will be changed totally. This hashtag can only proof
that, the original records has occured at its timestamp. Important, the
recorded itself will NOT be embeded into block chain, only its hashtag.
so if someone what to proof the exisence of one record, this person has
to have the record.

### sensitive information

from my understand, We don\'t need to hidden something. Our thinking,
emotional feeling, thoughts, amount of properties in bank... each of
those should be unified labeled, and ownership protected in its owner
personal chain.

### ......

Open philosophy
---------------

The best way to protect something is to let everyone knowning what it
is. Open, Open, Open is the core idea of this project, I don\'t need to
hidden, of course, if I decide that I don\'t put something into the
chain, and willing to take the risk for lossing it. It\'s totally my
personal decision, but I courage myself to put all stuff into my chain.

Building a personal identification oriented Databank
----------------------------------------------------

Why and How to Avoid Information Loss
-------------------------------------

Critical strategies for data preservation:

1.  [IPFS](https://ipfs.io/) Content-Addressed Storage:
    -   Cryptographic hashing of all content
    -   Distributed storage across network nodes
    -   Automatic content replication based on usage patterns
2.  Erasure Coding Redundancy:
    -   32/48 erasure coding scheme for shard recovery
    -   Geographic distribution of data shards
    -   Quarterly integrity checks with automatic repair
3.  Decentralized Backup Incentives:
    -   Storage miners earn tokens for maintaining copies
    -   Proof-of-Retrievability protocol
    -   Slashing conditions for failed availability
4.  Cryptographic Proof of Existence:
    -   Weekly Merkle root commits to Ethereum
    -   Zero-knowledge proofs for state validity
    -   Blockchain timestamping of audit trails
5.  Versioned Migration Protocol:
    -   Automated format migration every 5 years
    -   Cross-version compatibility layers
    -   Graceful deprecation of legacy formats

How records will be holded
==========================

Decentralized Storage Architecture
----------------------------------

-   Records stored across distributed nodes using blockchain sharding
-   Each node maintains encrypted fragments of records
-   Full record reconstruction requires multi-party consensus

Identity-Based Encryption
-------------------------

-   Records encrypted using owner\'s public key
-   Decryption requires corresponding private key
-   Automatic key rotation every 6 months
