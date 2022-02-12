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

    depositInput.value = '';
  });

// withdraw
document
  .getElementById('withdraw-button')
  .addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
  });
