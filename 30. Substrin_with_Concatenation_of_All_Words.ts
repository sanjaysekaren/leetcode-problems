function findSubstring(s: string, words: string[]): number[] {
    if (s.length < words.length * words[0].length) return [];
    let singleWordLen = words[0].length;
    return (getAllSubStringsBasedOnLimit(s, singleWordLen, words.length * singleWordLen, words));
};

function splitString(str: string, n:number): string[] {
    let res = [];
    for (let i=0;i<str.length;i = i+n) {
        res.push(str.slice(i, i+n))
    }
    return res
}

function getAllSubStringsBasedOnLimit(strn:string, n:number, length:number, words:string[]): number[] {
    let res = [];
    let limit = 0;
    let strLength = length;
    const wordMap = new Map();
    
    words.forEach(word=> {
        if (!wordMap.get(word)) {
            wordMap.set(word, 0);
        }
        wordMap.set(word, wordMap.get(word) + 1);
    });
    // console.log(wordMap);
    while(strLength<=strn.length) {
        let updatedStr = strn.slice(limit,strLength);
        const newMap = new Map(wordMap);
        let flag = 1;
        let splitedString =  splitString(updatedStr,n);
        for (let i=0;i<splitedString.length;i++) {
            if(newMap.get(splitedString[i]) > 0) {
                newMap.set(splitedString[i], newMap.get(splitedString[i]) - 1);
            } else {
                flag = 0;
                break;
            }
            if(flag === 0) break;
            // console.log( updatedStr, splitedString[i])
        }
        !!flag && res.push(limit);
        limit += 1;
        strLength += 1;
    }
    return res;
}