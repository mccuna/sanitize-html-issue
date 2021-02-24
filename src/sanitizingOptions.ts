import { IOptions } from "sanitize-html";

const tenantId = "f7676c-f455-423c-82f6-dc2d99791af7";

export const sanitizingOptions: IOptions = {
  allowedTags: [
    "b",
    "i",
    "u",
    "ul",
    "ol",
    "li",
    "table",
    "th",
    "tr",
    "td",
    "div",
    "span",
    "a",
    "p"
  ],
  allowedStyles: {
    "*": {
      // Match HEX and RGB
      color: [
        /^#(0x)?[0-9a-f]+$/i,
        /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/
      ],
      "text-align": [/^left$/, /^right$/, /^center$/],
      // Match any number with px, em, or %
      "font-size": [/^\d+(?:px|em|%)$/]
    }
  },
  allowedAttributes: {
    "*": ["style"],
    a: [
      {
        name: "href",
        values: [
          `https://sap.sharepoint.com*tenantId=${tenantId}`,
          `https://teams.microsoft.com*tenantId=${tenantId}`,
          "*.corp.sap",
          "*.sap.corp",
          "*.office.com",
          "*.microsoft.com"
        ]
      }
    ]
  },
  allowedSchemes: ["https"]
};
