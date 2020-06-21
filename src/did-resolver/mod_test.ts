import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { get_module, get_did_doc } from "./mod.ts";

const { test } = Deno;

test("use did url to load module", () => {
  const url_path = "/did:github:OR13/dndx/master/mod.ts";
  assertEquals(
    get_module(url_path),
    "https://raw.githubusercontent.com/OR13/dndx/master/mod.ts",
  );
});

test("use did url to load did document", () => {
  const url_path = "/did:github:OR13";
  assertEquals(
    get_did_doc(url_path),
    "https://raw.githubusercontent.com/OR13/ghdid/master/index.jsonld",
  );
});
