function plus()
{
    let count=document.getElementById("value");
    let value=count.innerHTML;
    value++;
    console.log(value);
    count.innerHTML=value;
}

function minus()
{
    let count=document.getElementById("value");
    let value=count.innerHTML;
    if (value>0)
    {
        value--;
    }
    else{
        alert("The count is already zero")
    }
    console.log(value);
    count.innerHTML=value;
}

function reset()
{
    let count=document.getElementById("value");
    let value=count.innerHTML;
    value=0;
    count.innerHTML=value;
}