## Part 1: Show Structure (15s)

- apps/
- libs/

"Two apps and shared libraries - all in one workspace"

# Part 2: Dependency Graph (25s)

`npx nx graph`

### (Graph opens in browser - point to connections)

"Nx automatically understands dependencies"

"This graph updates as we add code"

## Part 3: Run Multiple Projects (25s)

### Time the first build

`time npx nx run-many -t build --all`

"One command builds everything"

"Nx runs them in parallel using all CPU cores"

## Part 4: Caching Demo (25s)

### Run again - should be instant

`time npx nx run-many -t build --all`

"Instant! Everything cached"

"In CI/CD, this means 10x faster builds"

Point out: [existing outputs match the cache, left as is]

## Show task dependencies

`npx nx show project shop --web`

## Test

`npx nx run-many -t lint test build --all --dry-run`

# Main Points

- "One workspace, multiple apps"
- "Nx understands your code structure"
- "Parallel execution for speed"
- "Smart caching - never rebuild unnecessarily"
- "Same benefits on developer machines and CI/CD"
