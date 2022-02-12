/* 
function doubleIt(num) {
  const result = number * 2;
  return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
 */
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);

  // cleat deposit input filed
  inputField.value = '';
  return amountValue;
}

function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);

  totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalText);
  return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  } else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}

// deposit
document
  .getElementById('deposit-button')
  .addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    // error handling
    if (depositAmount > 0) {
      // update deposit total
      updateTotalField('deposit-total', depositAmount);
      // update balance with deposit
      updateBalance(depositAmount, true);
    }
  });

// withdraw
document
  .getElementById('withdraw-button')
  .addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    // error handling
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
      // update withdraw total
      updateTotalField('withdraw-total', withdrawAmount);
      // update balance
      updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount < currentBalance) {
      console.log(
        'You can not withdraw more than what your currentBalance in your account'
      );
    }
  });

//
//
//
// nonfunctional program
/* 
// deposit
document
  .getElementById('deposit-button')
  .addEventListener('click', function () {
    // deposit input filed
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update balance with deposit
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    // cleat deposit input filed
  depositInput.value = '';
  });

// withdraw
document
  .getElementById('withdraw-button')
  .addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    // clear withdraw input filed
    withdrawInput.value = '';
  });
 */
