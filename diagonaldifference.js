function diagonalDifference(arr) {
    let n = arr[0].length;
    let rightSum = 0;
    let leftSum = 0;
    let difference = 0;

    for (let i = 0, j = (n-1); i < n, j > -1; i++, j--) {
        rightSum += arr[i][i];
        leftSum += arr[i][j];
         }

         difference = leftSum - rightSum;

         return Math.abs(difference);
}