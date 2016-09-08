export function isObject(item) {
  return (item && typeof item === 'object' &&
    !Array.isArray(item) && item !== null);
}

export function mergeDeep(target, source) {
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return target;
}

// converts dd-mm-yyyy string to date object
export function strToDate(dateStr) {
  let parts = dateStr.split('-');
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

// converts date object to dd-mm-yyyy string
export function dateToStr(date) {
  let dd = date.getDate();
  dd = dd < 10 ? '0' + dd : dd;
  let mm = date.getMonth() + 1;
  mm = mm < 10 ? '0' + mm : mm;
  return dd + '-' + mm + '-' + date.getFullYear();
}
