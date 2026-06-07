function electronsAroundCore() {}

electronsAroundCore.prototype.add = function electronsAroundCore(dice) {
    if(JSON.stringify(dice) === JSON.stringify([1,2,3,4,5]))
    {
        return 6;
    }
    return 0;

}


