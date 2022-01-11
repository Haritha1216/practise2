let a=document.getElementById("btn");
a.addEventListener("click",function(){
     validation();
})
function validation()
{
    if(cb.checked)
    {
        alert("success");

    }
    else
    {
        alert("please fill");
    }
}