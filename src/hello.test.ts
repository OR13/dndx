import * as welcome from "https://or13.github.io/dndx/welcome.ts";

import {
  assertEquals,
  assertArrayContains,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("module imports", () => {
  console.log(welcome);
});

Deno.test("adding", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});
