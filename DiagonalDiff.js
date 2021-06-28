function diagonalDifference(matrix) {
  

   let firstDiagonal = 0, secondDiagonal = 0;
 
   
   for(let i = 0; i < matrix.length; i++){
     
       firstDiagonal += matrix[i][i]
     
       secondDiagonal += matrix[matrix.length-1-i][i]
   }

   return Math.abs(firstDiagonal - secondDiagonal)

}
