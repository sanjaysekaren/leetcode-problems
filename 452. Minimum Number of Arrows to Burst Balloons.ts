function findMinArrowShots(points: number[][]): number {
    if(points.length === 1) return 1;
    points.sort((a:any,b:any) => a[1]-b[1]);
    let pointsLen: number = points.length;
    let arrowCount = 1;
    let count = 0;
    for (let i=0; i<pointsLen-1; i++) {
        if(points[count][1] >= points[i+1][0] && points[count][1] <= points[i+1][1]) {
            continue;
        } else {
            count = i+1;
            arrowCount +=1;
        }
    }
    return arrowCount;
};