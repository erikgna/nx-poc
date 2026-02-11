0:00-0:20 | The Project Graph

Action: Run nx graph

Talk: "Here is the 'Brain' from Slide 3. This graph wasn't drawn by hand; NX generated it by scanning our imports. You can see our Java API and our React frontend are connected. NX knows that a change in our shared 'contracts' library affects both, but a change in the 'mobile-ui' affects only the app."

0:20-0:50 | The Pipeline & "Cold" Build

Action: Run nx build web-app --verbose

Talk: "I'll run a build now. Notice the orchestration. NX isn't just running a script; it’s calculating hashes for every project in the chain. It sees the dependencies, builds the shared libraries first, and then builds the app. This is a 'cold' run, so it's doing the actual work of compilation."

0:50-1:05 | The "Hot" Cache Hit

Action: Run nx build web-app again immediately.

Talk: "Now watch the second run. It’s finished in 15 milliseconds. Because nothing changed, the Hash matched perfectly. NX didn't compile a single line; it just pulled the previous results from the cache. This is how we eliminate redundant work across the entire team."

1:05-1:20 | The Affected Command

Action: Edit a file in a shared library, then run nx affected:build

Talk: "Finally, I've made a change to a shared library. Instead of building all 10 apps in the repo, I run affected. NX looks at the graph, identifies only the projects touched by that specific change, and ignores the rest. We just turned a 20-minute CI build into a 2-minute build."