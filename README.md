# ⚡ Data Nexus - Decentralised Data Hub

## Getting Started

Clone the repository and install dependencies.

```bash
git clone https://github.com/DataMineMarket/Frontend.git
```

Update and pull the submodules for Chainlink Functions. This submodule is needed for pulling the scripts to post data on ipfs.

```bash
git submodule init
git submodule update --init --recursive
```

The `pnpm` CLI is the recommended package manager but `npm` and `yarn` should work too.

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

## FE Development

The entry point for the applicaiton is in `app/`

### Web3 Core

- [WAGMI CLI](https://wagmi.sh/cli/getting-started) - Automatic React Hook Generation
- [RainbowKit](https://www.rainbowkit.com/) - Wallet connection manager
- [Sign-In With Ethereum](https://login.xyz/) - Account authentication

### Web2 Frameworks

- [Vercel](https://vercel.com/) - App Infrastructure
- [Prisma](https://www.prisma.io/) - Database ORM

### Developer Experience

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### User Interface

- [TailwindCSS](https://tailwindcss.com) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Framer Motion](https://www.framer.com/motion/) – Motion library for React to animate components with ease
- [React Icons](https://react-icons.github.io/react-icons) – Beautifully simple, pixel-perfect icons

The [ui.shadcn.com](https://ui.shadcn.com) components are included in the `/components/shared/ui` folder.

## Dependencies - Functions

A key dependency for the [Data Nexus Contracts](https://github.com/DataMineMarket/DataNexusContracts) to post data on ipfs in a decentralised manner is [Chainlink Functions](https://docs.chain.link/chainlink-functions).

### Setup

To set up this repository to make use of functions, please follow the following steps:

# Acknowledgements

Original template was forked from https://github.com/wslyvh/nexth
