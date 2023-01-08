function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    if(m===0 || n===0) return 0;
    if(obstacleGrid[0][0] === 1) return 0;
    if(m===1 && n===1) return obstacleGrid[0][0] === 0 ? 1 : 0;
    if(m>2 && n>2 && obstacleGrid[1][0] === 1 && obstacleGrid[0][1] === 1) return 0;
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            obstacleGrid[i][j] = obstacleGrid[i][j] === 0 ? 1 : 0;
            if(i>0 && j===0 && obstacleGrid[i-1][j] === 0){
                obstacleGrid[i][j] = 0;
                continue;
            }
            if(j>0 && i===0 && obstacleGrid[i][j-1] === 0){
                obstacleGrid[i][j] = 0;
                continue;
            }
            if(i > 0 && j > 0) {
                obstacleGrid[i][j] = obstacleGrid[i][j]=== 0 ? 0 : obstacleGrid[i-1][j] + obstacleGrid[i][j-1]
            }
        }
    }
    return (obstacleGrid[m-1][n-1])
};