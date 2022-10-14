//repeated answers cannot accepted
function memo1()
{
    var cache={};
    return function(num)
    {
        if(num in cache)
        {
            console.log("Parameter is present in cache")
            return cache[num];
        }
        else{
            cache[num]=100+num;
            return cache[num];
        }
    }
}
var memofun=memo1();
console.log(memo1(100));
console.log(memo1(200));
console.log(memo1(300));
console.log(memo1(100));//repeated answers function cannot be accepted