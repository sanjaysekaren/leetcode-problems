function canCompleteCircuit(gas: number[], cost: number[]): number {
    let arrLen = gas.length;
    let tankCapacity = 0;
    let count = 0;
    let index = 0;
    for(let i=0;i<arrLen;i++) {
        count += gas[i] - cost[i]
    }
    if(count >= 0) {
        for(let i=0;i<arrLen;i++) {
            tankCapacity += gas[i]-cost[i];
            if(tankCapacity < 0) {
                tankCapacity = 0
                index = i+1;
            }
        }
        return index;
    }
    return -1;
}