function groupThePeople(groupSizes: number[]): number[][] {
    let map = {};
    let res: any= [];
    let groupLen=groupSizes.length;
    for(let i=0; i<groupLen; i++){
        if(!map[groupSizes[i]]) {
            map[groupSizes[i]]= [i]
        } else {
            if(map[groupSizes[i]].length > (groupSizes[i]*1)-1) {
                res.push(map[groupSizes[i]]);
                map[groupSizes[i]] = [];
            }
            map[groupSizes[i]] = [...map[groupSizes[i]], i];
        }
    }
    return [...res, ...Object.values(map)];
};