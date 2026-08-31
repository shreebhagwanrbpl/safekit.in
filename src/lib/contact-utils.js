/**
 * Helpers for reading the Safekit contact document without relying on
 * hardcoded contact values. Supports the labels used by the admin panel
 * as well as legacy labels already present in the site.
 */

const normalizeLabel = (value = "") =>
  String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const aliases = {
  phone: [
    "phone",
    "mobile",
    "mobile contact",
    "phone number",
    "phone numbers",
    "mobile number",
    "mobile numbers",
    "contact number",
    "contact numbers",
  ],
  email: [
    "email",
    "email address",
    "work email",
    "work email address",
    "email id",
    "mail",
  ],
  address: [
    "address",
    "office address",
    "office location",
    "location",
    "contact address",
  ],
  hours: [
    "working hours",
    "work hours",
    "business hours",
    "office hours",
    "hours",
  ],
};

const getField = (contactInfo, type) => {
  if (!contactInfo) return "";

  // Supports an array such as [{ label: "Phone", value: "..." }]
  if (Array.isArray(contactInfo)) {
    const allowed = new Set(aliases[type].map(normalizeLabel));
    const item = contactInfo.find((entry) => {
      if (!entry || typeof entry !== "object") return false;
      return allowed.has(normalizeLabel(entry.label));
    });
    return item?.value ?? "";
  }

  // Also supports an object such as { phone: "...", email: "..." }.
  if (typeof contactInfo === "object") {
    for (const key of aliases[type]) {
      if (Object.prototype.hasOwnProperty.call(contactInfo, key)) {
        return contactInfo[key] ?? "";
      }
    }

    const normalizedKeys = Object.keys(contactInfo).reduce((map, key) => {
      map[normalizeLabel(key)] = key;
      return map;
    }, {});

    for (const key of aliases[type]) {
      const actualKey = normalizedKeys[normalizeLabel(key)];
      if (actualKey) return contactInfo[actualKey] ?? "";
    }
  }

  return "";
};

export const getContactValue = (contactInfo, type) => {
  const value = getField(contactInfo, type);
  if (Array.isArray(value)) return value.filter(Boolean).join("\n");
  return String(value ?? "").trim();
};

export const getPhoneNumbers = (contactInfo) => {
  const value = getField(contactInfo, "phone");

  const values = Array.isArray(value)
    ? value
    : String(value ?? "").split(/[\n,;|]+/);

  return values
    .flatMap((item) => String(item ?? "").split(/[\n,;|]+/))
    .map((item) => item.trim())
    .filter(Boolean);
};
