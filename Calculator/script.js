function insert(num)
{
    document.myform.answer.value += num;
}

function equalto()
{
    let equal = document.myform.answer.value;
    document.myform.answer.value = eval(equal);
}

function del()
{
    document.myform.answer.value = "";
}