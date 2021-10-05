const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
   
   const loginArea = document.getElementById("submit-area")
   loginArea.style.display = "none"

   const transactionArea = document.getElementById("transaction-area")
   transactionArea.style.display = "block"
})

const depositBtn = document.getElementById("deposit-btn")
depositBtn.addEventListener("click",function(){
    const depositInput = document.getElementById("deposit-input").value
    const depositAmount = parseFloat(depositInput)

    const currentDeposit = document.getElementById("currentDeposit").innerText
    const currentDepositAmount = parseFloat(currentDeposit);
    

    const totalDeposit = depositAmount + currentDepositAmount ;
    document.getElementById("currentDeposit").innerText = totalDeposit
    document.getElementById("deposit-input").value =" "

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + depositAmount ;
    document.getElementById("currentBalance").innerText = totalBalance


    
})

const withdrawBtn = document.getElementById("withdraw-btn")
withdrawBtn.addEventListener("click",function(){
    const withdrawInput = document.getElementById("withdraw-input").value
   const withdrawAmount = parseFloat(withdrawInput)
   
   const currentWithdraw = document.getElementById("currentWithdraw").innerText
    const currentWithdrawAmount = parseFloat(currentWithdraw);
    
    const totalWithdraw = withdrawAmount + currentWithdrawAmount
    document.getElementById("currentWithdraw").innerText = totalWithdraw
    document.getElementById("withdraw-input").value =" "

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber - withdrawAmount ;
    document.getElementById("currentBalance").innerText = totalBalance


})