import sanitize from "sanitize-html";

import { sanitizingOptions } from "./sanitizingOptions";

describe("sanitizingOptions should", () => {
  test("remove script tags", () => {
    const dirtyContent = `Dummy content${dangerousScript}`;
    const clearContent = "Dummy content";

    const sanitizedContent = sanitize(dirtyContent, sanitizingOptions);
    expect(sanitizedContent).toBe(clearContent);
  });

  test("keep allowed tags when removing script tags", () => {
    const dirtyContent = `<p>Dummy content${dangerousScript}</p>`;
    const clearContent = "<p>Dummy content</p>";

    const sanitizedContent = sanitize(dirtyContent, sanitizingOptions);
    expect(sanitizedContent).toBe(clearContent);
  });

  test("allowed style attributes", () => {
    const dirtyContent = '<p style="color:#ff0000">Dummy content</p>';
    const clearContent = '<p style="color:#ff0000">Dummy content</p>';

    const sanitizedContent = sanitize(dirtyContent, sanitizingOptions);
    expect(sanitizedContent).toBe(clearContent);
  });
});

const dangerousScript = '<script>alert("Dangerous script")</script>';
