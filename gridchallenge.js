function gridChallenge(grid) {
    for (let i=0; i < grid.length; i++){
        grid[i] = grid[i].split('').sort().join('');
    }

    for (let i = 0; i < grid.length - 1; i++){
        for ( let j = 0; j < grid.lentgth; j++){
            if (grid[i][j] > grid [i+1][j]){
                return "NO";
            }
        }
    }
    return "YES;"
}

