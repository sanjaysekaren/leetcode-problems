function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
    let result = 0;
    let bagCapacity = capacity.length;
    for(let i = 0; i<bagCapacity; i++) {
        capacity[i] = (capacity[i] - rocks[i])
    }
    capacity = capacity.sort((a,b) => a-b);
    for(let j=0;j<bagCapacity;j++){
        if(capacity[j] === 0)  {
            result +=1;
            continue;
        };
        if(additionalRocks >= capacity[j]) {
            additionalRocks -= capacity[j];
            result +=1;
        }
        if(additionalRocks <= 0) {
            break;
        }
    }
    return result;
};