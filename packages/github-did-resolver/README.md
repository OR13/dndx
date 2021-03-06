# 🦕 deno-module-starter

![CI](https://github.com/OR13/dndx/workflows/CI/badge.svg)

[Deno](https://deno.land) yet another... module starter repository.

Clone repo, find replace `OR13/dndx`... `github-user/repo-name`...

```bash
./scripts/shove
```

## Usage

```typescript
import { getHelloWorld } from "https://raw.githubusercontent.com/OR13/dndx/master/mod.ts";
const helloWorld = getHelloWorld();
console.log(helloWorld); // Prints "Hello World" in bold
```

## Test

```bash
deno test
```

## Format

```bash
deno fmt **/*.ts
```

## Resources

- [Deno Website](https://deno.land)
- [Deno Style Guide](https://deno.land/std/style_guide.md)
- [Deno Gitter](https://gitter.im/denolife/Lobby)
- [Deno Lib Starter (outdated)](https://dev.to/brunnerlivio/create-your-first-module-with-deno-575k)
