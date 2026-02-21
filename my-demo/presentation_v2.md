## Slide 1 — The Monorepo Tax

We adopt monorepos for simplicity.

Shared code, single repository, easier collaboration.

But as the system grows, something happens.

CI becomes the bottleneck.

You change one small file in a shared librar and suddenly five applications rebuild.

You wait 15 or 20 minutes for a tiny change.

Developers start living in dependency anxiety, not fully sure what impacts what.

At that point, the problem isn’t structure anymore.

We don’t just need folders.

We need a system that understands our codebase.

## Slide 2 — What is NX

That system is Nx.

NX is a build system designed specifically for large monorepos.

It was originally created by engineers at Google, while working on large Angular applications.

But today it supports React, Node, Java, Maven, Gradle, and other ecosystems.

The key idea is simple:

NX doesn’t just run scripts.

It analyzes your entire workspace.

It builds an understanding of your projects and their relationships before executing anything.

It’s not automation.

It’s orchestration.

## Slide 3 — The Project Graph

At the core of NX is something called the Project Graph.

NX scans your repository and maps every dependency into a directed graph.

Who imports who.
Who depends on what.
What breaks if something changes.

Because NX understands the relationships, it can act with precision.

If you change one library, it rebuilds only what’s affected.

Nothing more.

Nothing less.

## Slide 4 — Orchestration & Caching

And now it gets interesting.

Every task — build, test, lint — becomes a hash.

That hash represents:

Your code

Your config

Your environment

If nothing changed, NX doesn’t rebuild.

It replays the result from cache instantly.

And with remote caching, your entire team shares that memory.

If CI already built it, your laptop doesn’t need to.

You stop rerunning work.

You stop wasting compute.

You stop paying the Monorepo Tax.

## Slide 5 — Trade-offs

And where NX fits?

If you want something lightweight and JS-only, Turborepo is a great starting point.

If you're running massive, multi-language enterprise systems, Bazel is extremely powerful — but complex.

NX sits in the middle.

It gives you scalability without Bazel-level pain.

The trade-off?

There’s a learning curve.
You have to think in terms of dependency graphs and orchestration.

But once you do, your monorepo scales without slowing you down.
