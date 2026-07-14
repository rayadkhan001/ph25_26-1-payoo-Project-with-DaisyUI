// LAST I WAS EDITING: 

// VALIDATE PIN - Gets the correct PIN (either from stored user or hardcoded)
function getValidPin() {
  const storedData = localStorage.getItem('userData');
  if (storedData) {
    const userData = JSON.parse(storedData);
    return parseInt(userData.pin);
  }
  return 1234; // Default hardcoded PIN
}

// TRANSACTIONS-DATA:
const transactionsData = [];

// REUSABLE FUNCTIONS WITH CONVERTING THE VALUE TO NUMBER
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}

// REUSABLE FUNCTIONS WITHOUT CONVERTING THE VALUE TO NUMBER
function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  
  return inputFieldValue;
}

// REUSABLE FUNCTION TO ACCESS THE INNER-TEXT (AVAILABLE BALANCE)
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue.replace(/,/g, ''));

  return elementValueNumber;
}

// REUSABLE FUNCTION TO SET INNER-TEXT (AVAILABLE BALANCE)
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value.toLocaleString();
}

// REUSABLE FUNCTION (TOGGLING FEATURE)
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  
  document.getElementById(id).style.display = "block";
}

// REUSABLE FUNCTION (TOGGLING BUTTONS)
function handleToggleButton(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874F2]", "bg-[#0874F20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");
  document.getElementById(id).classList.add("border-[#0874F2]", "bg-[#0874F20d]");
}


// CARD #1 ADD-MONEY FEATURE --------------------------------------------------------------------------------------------------
document.getElementById("add-money-btn").addEventListener("click", function (e) {
  e.preventDefault();

  // Get the values from the form inputs
  const bank = getInputValue("bank");
  const accountNumber = getInputValue("account-number");
  const amount = getInputValueNumber("add-amount");

  // THIRD: VALIDATE AMOUNT
  if(amount <= 0){
    alert("Invalid Amount");
    return;
  }
  
  const pin = getInputValueNumber("add-pin");

  // FIRST: Validate the account number
  if (accountNumber.length !== 11) {
    alert("Please enter a valid 11-digit account number.");
    return;
  }

  // SECOND: Validate the PIN
  if (pin !== getValidPin()) {
    alert("Invalid PIN. Please enter the correct 4 digit PIN.");
    return;
  }

  // Log the values to the console
  const availableBalance = getInnerText("available-balance");

  // Calculate the new available balance
  const totalNewAvailableBalance = amount + availableBalance;
  console.log(totalNewAvailableBalance);

  // Update the available balance in the DOM
  setInnerText(totalNewAvailableBalance);

  // Create a new transactions entry with the current time and add it to the list
  const data = {
    name: "Add Money",
    date: new Date().toLocaleTimeString(),
  };
  transactionsData.push(data);
  console.log(transactionsData);
});

// CARD #2: CASH-OUT FEATURE ---------------------------------------------------------------------------------------------------
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  // Validate the amount to withdraw
  const agentNumber = getInputValue("agent-number");
  const pin = getInputValueNumber("withdraw-pin");
  const amount = getInputValueNumber("withdraw-amount");
  const availableBalance = getInnerText("available-balance");

  // Check if the amount to withdraw is greater than the available-balance
  if (amount <= 0 || amount > availableBalance) {
    alert("Insufficient balance. Please enter a valid amount.");
    return;
  }

  // FIRST: Validate the account number
  if (agentNumber.length !== 11) {
    alert("Please enter a valid 11-digit account number.");
    return;
  }

  // SECOND: Validate the PIN
  if (pin !== getValidPin()) {
    alert("Invalid PIN. Please enter the correct 4 digit PIN.");
    return;
  }

  // Calculate the new available balance
  const totalNewAvailableBalance = availableBalance - amount;
  console.log(totalNewAvailableBalance);

  // Update the available-balance in the DOM
  setInnerText(totalNewAvailableBalance);

  // Create a new transactions entry with the current time and add it to the list
  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionsData.push(data);
  console.log(transactionsData);
});

// CARD #3: TRANSFER-MONEY FEATURE ---------------------------------------------------------------------------------------------
document.getElementById("transfer-btn").addEventListener("click", function (e) {
  e.preventDefault();

  // VALIDATE THE AMOUNT TO TRANSFER
  const userAccountNumber = getInputValue("user-account-number");
  const pin = getInputValueNumber("transfer-pin");
  const amount = getInputValueNumber("transfer-amount");
  const availableBalance = getInnerText("available-balance");

  // FIRST: VALIDATE THE ACCOUNT NUMBER
  if (userAccountNumber.length !== 11) {
    alert("Please enter a valid 11-digit account number.");
    return;
  }

  // SECOND: VALIDATE THE PIN
  if (pin !== getValidPin()) {
    alert("Invalid PIN. Please enter the correct 4 digit PIN.");
    return;
  }

  // CHECK IF THE AMOUNT TO TRANSFER IS GREATER THAN THE AVAILABLE BALANCE
  if (amount > availableBalance) {
    alert("Insufficient balance. Please enter a valid amount.");
    return;
  }

  // CALCULATE THE NEW AVAILABLE BALANCE
  const totalNewAvailableBalance = availableBalance - amount;

  // UPDATE THE AVAILABLE-BALANCE IN THE DOM
  setInnerText(totalNewAvailableBalance);

  // Create a new transactions entry with the current time and add it to the list
  const data = {
    name: "Transfer Money",
    date: new Date().toLocaleTimeString(),
  };
  transactionsData.push(data);
  console.log(transactionsData);
});


// CARD #4.1: GET BONUS FEATURE --------------------------------------------------------------------------------------------------
document.getElementById("get-bonus-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const coupon = getInputValue("bonus-coupon");
  const availableBalance = getInnerText("available-balance");

  if (coupon === "PAYOO100") {
    const newBalance = availableBalance + 100;
    setInnerText(newBalance);

    // Create a new transactions entry with the current time and add it to the list
    const data = {
      name: "Get Bonus",
      date: new Date().toLocaleTimeString(),
    };
    transactionsData.push(data);
    console.log(transactionsData);

    alert("Congratulations! Tk100 has been added successfully.");
  } else {
    alert("Invalid Bonus Coupon.");
  }
});

// CARD #4.2: GET BONUS BUTTON ---------------------------------------------------------------------------------------------------
document.getElementById("bonus-button").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
  handleToggleButton("bonus-button");
});

// CARD #5.1: PAY BILLS BUTTON --------------------------------------------------------------------------------------------------
document.getElementById("pay-bills-button").addEventListener("click", function () {
  handleToggle("pay-bills-parent");
  handleToggleButton("pay-bills-button");
});

// CARD #5.2: PAY BILLS FEATURE -------------------------------------------------------------------------------------------------
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  e.preventDefault();

  // GET THE BILL DETAILS
  const billType = getInputValue("bill-type");
  const billerAccountNumber = getInputValue("biller-account-number");
  const amount = getInputValueNumber("bill-amount");
  const pin = getInputValueNumber("bill-pin");
  const availableBalance = getInnerText("available-balance");

  // FIRST: VALIDATE THE BILL TYPE
  if (billType === "Select Bill Type") {
    alert("Please select a bill type.");
    return;
  }

  // SECOND: VALIDATE THE ACCOUNT NUMBER
  if (billerAccountNumber.length !== 11) {
    alert("Please enter a valid 11-digit account number.");
    return;
  }

  // THIRD: VALIDATE THE PIN
  if (pin !== getValidPin()) {
    alert("Invalid PIN. Please enter the correct 4 digit PIN.");
    return;
  }

  // CHECK IF THE BILL AMOUNT IS GREATER THAN THE AVAILABLE BALANCE
  if (amount > availableBalance) {
    alert("Insufficient balance. Please enter a valid amount.");
    return;
  }

  // CALCULATE THE NEW AVAILABLE BALANCE
  const totalNewAvailableBalance = availableBalance - amount;

  // UPDATE THE AVAILABLE BALANCE IN THE DOM
  setInnerText(totalNewAvailableBalance);

  // Create a new transactions entry with the current time and add it to the list
  const data = {
    name: "Pay Bills",
    date: new Date().toLocaleTimeString(),
  };
  transactionsData.push(data);
  console.log(transactionsData);

  alert("Bill paid successfully!");
});

// CARD #6: TRANSACTIONS FEATURE ------------------------------------------------------------------------------------------------
let showAllTransactions = false;

document.getElementById("transactions-button").addEventListener("click", function() {
  const transactionsContainer = document.getElementById("transactions-container");
  const viewAllLink = document.getElementById("view-all-link");

  transactionsContainer.innerHTML = "";

  // Determine how many transactions to show
  const transactionsToShow = showAllTransactions ? transactionsData : transactionsData.slice(0, 4);

  for (const data of transactionsToShow) {
    const div = document.createElement("div");
    div.innerHTML = 
    `
      <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
        <!-- IMG AND TEXT -->
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-[#f4f5f7]">
            <img class="mx-auto" src="assets/img/wallet1.png" alt="Wallet">
          </div>

          <div class="ml-3">
            <h1>${data.name}</h1>
            <p>${data.date}</p>
          </div>
        </div>

        <!-- TRANSACTIONS HISTORY MENU -->
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    `;

    transactionsContainer.appendChild(div);
  }

  // Show "View All" or "View Less" link if there are more than 4 transactions
  if (transactionsData.length > 4) {
    viewAllLink.innerText = showAllTransactions ? "View Less" : "View All";
  }
});

// Handle "View All" link click
document.getElementById("view-all-link").addEventListener("click", function() {
  showAllTransactions = !showAllTransactions;
  document.getElementById("transactions-button").click();
});




// 1. TOGGLING FEATURE: (ADD-MONEY) ----------------------------------------------------------
document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");
  handleToggleButton("add-button");
});

// 2. TOGGLING FEATURE: (CASH-OUT) -------------------------------------------------------------
document.getElementById("cash-out-button").addEventListener("click", function () {
  handleToggle("cash-out-parent");
  handleToggleButton("cash-out-button");
});

// 3. TOGGLING FEATURE: (TRANSFER-MONEY) --------------------------------------------------------
document.getElementById("transfer-button").addEventListener("click", function () {
  handleToggle("transfer-money-parent");
  handleToggleButton("transfer-button");
});

// 4. TOGGLING FEATURE: (GET-BONUS) -------------------------------------------------------------
document.getElementById("bonus-button").addEventListener("click", function(){
  handleToggle("get-bonus-parent");
  handleToggleButton("bonus-button");
});

// 5. TOGGLING FEATURE: (PAY-BILLS) -------------------------------------------------------------
document.getElementById("pay-bills-button").addEventListener("click", function() {
  handleToggle("pay-bills-parent");
  handleToggleButton("pay-bills-button");
});

// 6. TOGGLING FEATURE: (TRANSACTIONS) ----------------------------------------------------------
document.getElementById("transactions-button").addEventListener("click", function() {
  handleToggle("transactions-parent");
  handleToggleButton("transactions-button");
  
  // Render transactions when clicked
  const transactionsContainer = document.getElementById("transactions-container");
  const viewAllLink = document.getElementById("view-all-link");

  transactionsContainer.innerHTML = "";

  // Determine how many transactions to show
  const transactionsToShow = showAllTransactions ? transactionsData : transactionsData.slice(0, 4);

  for (const data of transactionsToShow) {
    const div = document.createElement("div");
    div.innerHTML = 
    `
      <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
        <!-- IMG AND TEXT -->
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-[#f4f5f7]">
            <img class="mx-auto" src="assets/img/wallet1.png" alt="Wallet">
          </div>

          <div class="ml-3">
            <h1>${data.name}</h1>
            <p>${data.date}</p>
          </div>
        </div>

        <!-- TRANSACTIONS HISTORY MENU -->
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    `;

    transactionsContainer.appendChild(div);
  }

  // Show "View All" or "View Less" link if there are more than 4 transactions
  if (transactionsData.length > 4) {
    viewAllLink.innerText = showAllTransactions ? "View Less" : "View All";
  }
});