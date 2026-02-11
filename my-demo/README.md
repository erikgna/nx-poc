# NX Monorepo Demo

This is a minimal NX monorepo setup designed for a 1-minute live demo showcasing key NX features.

## Structure

```
nx-poc-main/
├── apps/
│   ├── web-app/          # Web application
│   └── mobile-app/       # Mobile application
├── libs/
│   ├── utils/            # Shared utilities
│   └── api-client/       # API client library
└── nx.json               # NX configuration
```

## Dependency Graph

```
web-app    mobile-app
    \         /
     \       /
    api-client
        |
      utils
```

## Quick Start

```bash
npm install
```

## Key Commands

### View Project Graph
```bash
nx graph
```

### Build Projects
```bash
nx build web-app
nx build mobile-app
nx run-many --target=build --all
```

### Test Projects
```bash
nx test web-app
nx run-many --target=test --all
```

### Show Affected Projects
```bash
nx affected:graph
```

### Run Applications
```bash
nx serve web-app
nx serve mobile-app
```

## Demo Script

See `DEMO.md` for the complete 1-minute demo script.

## Features Demonstrated

1. Project Graph: Visual dependency understanding
2. Computation Caching: Build once, reuse everywhere
3. Affected Commands: Smart change detection
4. Task Pipeline: Proper build orchestration
5. Parallel Execution: Maximum efficiency
