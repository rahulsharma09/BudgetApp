function calBudget(){
    const bud_amount = document.getElementById('budget_amount').value;
    document.getElementById("budget_value_display").innerHTML=bud_amount;
    return bud_amount;
}
let budget_amount = parseInt(0);
let expenseAmount = parseInt(0);
let balance_amount = parseInt(0);
function addExpense(){
    budget_amount = calBudget();
    let expenseName = document.getElementById('expenseName').value;
    expenseName = "-"+expenseName;
    expenseAmt = document.getElementById('expenseAmount').value;
    expenseAmount = parseInt(expenseAmount) + parseInt(expenseAmt);
    balance_amount = budget_amount - expenseAmount;
    if(balance_amount >= 0){
        document.getElementById('expense_value_display').innerHTML = expenseAmount;
        document.getElementById('balance_value_display').innerHTML = balance_amount; 
        document.getElementById('list_title').innerHTML += expenseName.toUpperCase()+'<br/>';
        document.getElementById('list_value').innerHTML += expenseAmt+'<br/>';
    }
    else{
        document.getElementById('error').style.display="block";
        document.getElementById('error').innerHTML = "Your expenses amount have exceeded your budget!"
        setTimeout(function(){
            document.getElementById('error').style.display="none";
        }, 3000);
    }
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseName').focus();   
    return balance_amount;
}
function clearAll(){
    document.getElementById("budget_value_display").innerHTML = '';
    document.getElementById('expense_value_display').innerHTML = '';
    document.getElementById('balance_value_display').innerHTML = '';
    document.getElementById('budget_amount').value='';
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseName').value='';
    document.getElementById('list_title').innerHTML = '';
    document.getElementById('list_value').innerHTML = '';
    budget_amount = parseInt(0);
    expenseAmount = parseInt(0);
    balance_amount = parseInt(0);
}