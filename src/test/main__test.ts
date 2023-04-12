import { assertEquals } from "https://deno.land/std@0.65.0/testing/asserts.ts";

Deno.test("sample test", () => {
  const x = 1 + 2;
  assertEquals(x, 3, "1 + 2 should be 3");
});
