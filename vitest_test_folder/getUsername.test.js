import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getUsername } from "./getUsername";

describe("getUsername from local storage return true or false", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    localStorage.setItem("user", JSON.stringify({ name: "Tom" }));

    const userName = getUsername();

    expect(userName).toBe("Tom");
  });

  it("returns null when no user exists in storage", () => {
    const userName = getUsername();

    expect(userName).toBeNull();
  });
});
