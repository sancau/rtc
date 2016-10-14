
export function getLastTestDate(obj) {
  let lastTest = obj.tests.slice(-1).pop();
  if (lastTest != null) {
    let date = new Date(lastTest.date);
    return  date.toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  return '-';
}

export function getLastTestSertificate(obj) {
  let lastTest = obj.tests.slice(-1).pop();
  if (lastTest != null) {
    return lastTest.sertificate;
  }
  return '-';
}

export function getValidBefore(obj) {
  let lastTest = obj.tests.slice(-1).pop();
  if (lastTest != null) {
    let date = new Date(lastTest.date);
    date.setYear(date.getFullYear() + obj.testPeriod);
    return  date.toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  return '-';
}

export function getTestStatusClassName(obj) {
  let lastTest = obj.tests.slice(-1).pop();
  if (lastTest != null) {
    let date = new Date(lastTest.date);
    date.setYear(date.getFullYear() + obj.testPeriod);
    let now = new Date();
    let monthDelta = new Date();
    monthDelta = monthDelta.setMonth(monthDelta.getMonth()+1);
    return date < now ? 'alert-danger' :
    (date > now && date < monthDelta) ? 'alert-warning' :
    'alert-success';
  }
  return '-';
}

export function genericSort(prop) {
  let newQuery = Object.assign(this.props.query, {});
  if (prop === newQuery.sorting.prop) {
    newQuery.sorting.order = newQuery.sorting.order === 'ascending'
      ? 'descending' : 'ascending';
  }
  else {
    newQuery.sorting.order = 'ascending';
  }
  newQuery.sorting.prop = prop;
  this.props.updateQuery(newQuery);
}
