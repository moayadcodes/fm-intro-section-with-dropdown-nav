export function mergeClasses(defaultClasses, additionalClasses) {
  if (!additionalClasses) {
    return defaultClasses;
  }

  return `${defaultClasses} ${additionalClasses}`;
}
