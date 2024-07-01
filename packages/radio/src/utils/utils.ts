export function getUniqId() {
  return String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    "",
  );
}

export function convertToObjectArray<T>(
  value: string,
  requiredKeys: string[],
): T[] {
  if (!value) return [];
  const parsedValues = JSON.parse(value);
  if (!Array.isArray(parsedValues))
    throw new Error("Invalid options structure. Expected an array.");

  for (const key of requiredKeys) {
    if (!parsedValues.every((value: any) => key in value)) {
      throw new Error(
        `Invalid structure. Expected an array of objects with "${key}" properties.`,
      );
    }
  }
  return parsedValues;
}
