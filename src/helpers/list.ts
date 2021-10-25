export function objectToIdList<T>(data: {
  [key: string]: T;
}): ({ id: string } & T)[] {
  return Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  }));
}
