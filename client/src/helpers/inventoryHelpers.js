
export function getValidBefore(obj) {
  let lastTest = obj.tests.slice(-1).pop();
  let date = new Date(lastTest.date);
  date.setYear(date.getFullYear() + obj.testPeriod);
  return  date.toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function getTestStatusClassName(obj) {
  let lastTest = obj.tests.slice(-1).pop();
  let date = new Date(lastTest.date);
  date.setYear(date.getFullYear() + obj.testPeriod);
  let now = new Date();
  let monthDelta = new Date();
  monthDelta = monthDelta.setMonth(monthDelta.getMonth()+1);
  return date < now ? 'alert-danger' :
  (date > now && date < monthDelta) ? 'alert-warning' :
  'alert-success';
}
