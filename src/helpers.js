export function cssClasses(classesObject) {
  const classesArray = Object
    .entries(classesObject)
    .filter(entry => entry[1])
    .map(entry => entry[0]);

  return classesArray.length ? classesArray.join(' ') : null;
}

export function mergeClasses(defaultClasses, additionalClasses) {
  return additionalClasses ? `${defaultClasses} ${additionalClasses}` : defaultClasses;
}
