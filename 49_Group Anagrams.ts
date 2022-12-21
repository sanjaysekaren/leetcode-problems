function groupAnagrams(strs: string[]) {
    return objectSolution(strs);
};

function objectSolution(strs) {
    let result = {};
    strs.forEach( str => {
        let sortedStr = str.split("").sort().join("");
        if(result[sortedStr]){
            result[sortedStr].push(str);
        } else {
            result[sortedStr] = [str];
        }
    })
    return Object.values(result);
}