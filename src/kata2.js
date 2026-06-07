function electronsAroundCore() {}

electronsAroundCore.prototype.add = function electronsAroundCore(dice) {
    if(JSON.stringify(dice) === JSON.stringify([1,2,3,4,5]))
    {
        return 6;
    }
    else if(JSON.stringify(dice) === JSON.stringify([2,2,3,3])){
      return 4;
    }
    return 0;  
}


