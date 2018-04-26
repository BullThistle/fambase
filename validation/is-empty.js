const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'Object' && Object.keys(value).length === 0) ||
  (typeof value === 'String' && value.trim().length === 0);

module.export = isEmpty;
