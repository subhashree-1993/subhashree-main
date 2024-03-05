var num=34;
function isprime(number){
    if (number<=1){
        return false;
    }
    for(let i=2;i<number;i++){
        if(number % i === 0) {
            return true;

        }
    }
    return true;
}
if(isprime(num) && num>20) {
    console.log("got the number.");
} else if(num % 2 !==0 && num-2<10){
    console.log("got the odd.");
}else console.log(isprime(34));


