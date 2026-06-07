function electronsAroundCore() {}

electronsAroundCore.prototype.add = function electronsAroundCore(dice) {
    let sum = 0;
    for(let i = 0; i < dice.length; i++)
    {
        if(dice[i]%2 == 1)
        {
            sum = sum + dice[i] - 1;
        }
    }
    return sum;  
}


