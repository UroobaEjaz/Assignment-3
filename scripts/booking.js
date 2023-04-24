/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// create variables
let costPerDay = 35;
let dayCounter = 0;
let selectedDays = [];

const mondayButton = document.querySelector("#monday");
const tuesdayButton = document.querySelector("#tuesday");
const wednesdayButton = document.querySelector("#wednesday");
const thursdayButton = document.querySelector("#thursday");
const fridayButton = document.querySelector("#friday");
const fullDayButton = document.querySelector("#full");
const halfDayButton = document.querySelector("#half");
const calculatedCost = document.querySelector("#calculated-cost");
const clearButton = document.querySelector("#clear-button");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.



function selectDay(dayButton) {
  if (dayButton.classList.contains("clicked")) {
    // remove selected day
    dayButton.classList.remove("clicked");
    dayCounter--;
    const index = selectedDays.indexOf(dayButton.id);
    if (index > -1) {
      selectedDays.splice(index, 1);
    }
  } else {
    // add selected day
    dayButton.classList.add("clicked");
    dayCounter++;
    selectedDays.push(dayButton.id);
  }
  updatePrice();
}

mondayButton.addEventListener("click", () => selectDay(mondayButton));
tuesdayButton.addEventListener("click", () => selectDay(tuesdayButton));
wednesdayButton.addEventListener("click", () => selectDay(wednesdayButton));
thursdayButton.addEventListener("click", () => selectDay(thursdayButton));
fridayButton.addEventListener("click", () => selectDay(fridayButton));


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


// when the full-day button is clicked, set the daily rate to $35, add the "clicked" class to the "full" element, remove it from the "half" element, and recalculate the total cost.



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

halfDayButton.addEventListener("click", () => {
  costPerDay = 20;
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");
  updatePrice();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updatePrice() {
  calculatedCost.innerHTML = dayCounter * costPerDay;
}

updatePrice();