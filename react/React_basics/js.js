// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [0,3, ...numbersTwo];

// console.log(numbersCombined)
// -----------------------------------------------
// const numbers = [1, 2, 3, 4, 5, 6];

// const [ three,...rest] = numbers;

// // console.log("<p>" + two + "</p>");
// console.log("<p>" + three + "</p>");
// console.log("<p>" + rest + "</p>");

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  
  //Check the result object in the console:
  console.log(myUpdatedVehicle);
  