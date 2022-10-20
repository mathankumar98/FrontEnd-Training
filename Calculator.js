function designate(a)//Value Buttons
{
    forms.display.value += a;
}
function del()//Delete Button
{
    var x=forms.display.value;
    forms.display.value=x.substring(0,x.length-1);//it will go delete backward single value
}
function ac()//ac Button
{
    forms.display.value="";//this empty string will delete the whole value
}
function equal()//Equal Button
{
    forms.display.value=eval(forms.display.value)//To Do the Operation Equals Add,sub All the Things
}
function sqrt()//Square Root Button
{
    var q=forms.display.value;
    var r=Math.sqrt(q);//we use Math Method to achieve The square root
    forms.display.value=r;
}
function per()//Percentage Button
{
    var percentage=forms.display.value;
    var temp=eval(percentage);
    var percentage1=temp*100 + "%";
    forms.display.value=percentage1;
}
function fact()//factorial button
{
    var n=forms.display.value;
    let answer = 1;//we give this condition to achieve the factorial
    if (n == 0 || n == 1)
    {
      answer=1;
    }else
    {
      for(var i = n; i >= 1; i--){
        answer = answer * i;
    }
  }
  forms.display.value=answer;
}
function rad()//rad button 
{
    var radian=forms.display.value;
    var radia=(radian*180)/3.14;//Method For Rad function
    forms.display.value=radia;
}
function square()//Square Button
{
    var s=forms.display.value;
    var t=Math.pow(s,2);
    forms.display.value=t;
}
function logarithm()//log button
{
    var logi=forms.display.value;
    var logi1=Math.log10(logi);
    forms.display.value=logi1
}
function lan()//Lan button
{
    var logi=forms.display.value;
    var logi1=Math.log(logi);
    forms.display.value=logi1
}
function pi()//pi button
{
    var pi1=forms.display.value;
    var pi2=pi1*3.141;
    forms.display.value=pi2;
}
function sine()//sine button
{
    var sine1=forms.display.value;
    var sine2=Math.sin(sine1);
    forms.display.value=sine2
}
function cos()//cos button
{
    var cos1=forms.display.value;
    var cos2=Math.cos(cos1);
    forms.display.value=cos2
}
function tan()//tan button
{
    var tan1=forms.display.value;
    var tan2=Math.tan(tan1);
    forms.display.value=tan2
}
