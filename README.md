# Bluero Social Site

Welcome to Bluero, a social networking website where users can connect, share, and interact with each other.

## Powered by:

- [Bluero Social Site](#bluero-social-site)
  - [Powered by:](#powered-by)
  - [Nextjs](#nextjs)
  - [ClerkJs](#clerkjs)
  - [Neon DB](#neon-db)
    - [Serverless](#serverless)
    - [Built for developer productivity](#built-for-developer-productivity)
    - [Fully managed](#fully-managed)
    - [Bottomless storage](#bottomless-storage)
    - [Open source](#open-source)
    - [Compatibility](#compatibility)
## Nextjs
Nextjs is a full stack framework. It has SSR(service side rendering), and hotreload you can visit and pratice your skills visit https://nextjs.org

## ClerkJs
- User Authentication: Secure sign-up and login functionality.
- Profile Creation: Users can create and customize their profiles.
Visit their official https://clerk.com

## Neon DB
Full back end support using postgres properties and features.
You can visit thier official website here https://console.neon.tech here
Features:
- Table Creation
- Fast Connection
Neon is a fully managed serverless Postgres with a generous free tier. Neon separates storage and compute and offers modern developer features such as serverless, branching, bottomless storage, and more. Neon is open source and written in Rust.
### Serverless
Neon automatically and transparently scales up compute on demand, in response to application workload. Neon also scales down to zero on inactivity. Since Neon is serverless, it only charges for what you use and can deliver up to a 10x reduction in cost. To learn more, see Autoscaling, and Autosuspend configuration.

### Built for developer productivity
Neon allows you to create a branch of your Postgres database. It's easy to create branches for development, test, and staging environments.

Branching is instant and has close to zero overhead, as it is implemented using the "copy-on-write" technique in Neon storage. In fact, branches are so cheap that you can create a branch for every code deployment in your CI/CD pipeline. To learn more about our branching feature, see Branching.

### Fully managed
Neon provides high availability without any administrative, maintenance, or scaling burden.

### Bottomless storage
Our engineering team has developed a purpose-built, multi-tenant storage system for the cloud. Neon storage allows virtually unlimited storage while providing high availability and durability guarantees.

Neon storage integrates storage, backups, and archiving into one system. This reduces operational headaches associated with checkpoints, data backups, and restore.

Neon storage is designed with cloud costs in mind and uses a multi-tier architecture to deliver on latency, throughput, and cost. It integrates a cloud object store, such as S3, to push cold data to the cheapest storage medium, and uses locally attached SSDs for low latency, high-performance data. Neon storage is written in Rust for maximum performance and usability.

### Open source
You can find neondatabase on GitHub. We develop in public under the Apache 2.0 license. For an overview of Neon's architecture, refer to Neon's architecture documentation.

### Compatibility
Neon compute is the latest version of Postgres. It is 100% compatible with any application that uses the official release of Postgres. Currently, we support Postgres 14, Postgres 15, and Postgres 16 (the default). For details refer to the Postgres compatibility page.