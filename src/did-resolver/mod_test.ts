import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { did_url_to_http_url } from "./mod.ts";

const { test } = Deno;

test("convert path to raw github user content http url", () => {
  const url_path = "/did:github:OR13/dndx/master/mod.ts";
  assertEquals(did_url_to_http_url(url_path), "");
});
