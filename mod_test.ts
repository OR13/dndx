import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { getHelloWorld } from "./mod.ts";

const { test } = Deno;

test("Hello Test", () => {
  assertEquals(getHelloWorld(), "\x1b[1mHello World\x1b[22m");
});
