let getSleepHours = day => {

  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 9;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 10;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 8;
  }  
}

let getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

console.log('This the number of hours you slept this week: ' + getActualSleepHours());

let getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
}

console.log('This is the number of hours you want to sleep in a week: ' + getIdealSleepHours(7));

let calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours(7);
  let sleepDept;

  if (actualSleepHours < idealSleepHours) {
    sleepDept = idealSleepHours - actualSleepHours;
  } else if (actualSleepHours > idealSleepHours) {
    sleepDept = actualSleepHours - idealSleepHours;
  }

  if (actualSleepHours === idealSleepHours) {
    console.log('You have got the perfect amount of sleep.')
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You have got ${sleepDept} hours more sleep than needed in a week.`)
  } else {
    console.log(`You should need ${sleepDept} hours more sleep in a week.`);
  }
}

calculateSleepDebt();



