
/**
 *
 * @param values Set of values will be purged.
 * @returns T
 */
export const excludeEmptyFormFields = <T extends Record<any, any>>(
  values: T
) => {
  Object.keys(values).forEach((key) => {
    if ([null, undefined, ""].includes(values[key]))
      delete values[key as keyof T];
  });
  return values;
};

