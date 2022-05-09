
function alwaysHungry(arr) {
    for(var i =0; i< arr.length; i++){
        if(arr[i]== " food"){
            console.log("\"yummy\",\"yummy\"");
                }
                else
                {
                    console.log("\"Im hungry\"");
                }
            }
        }

        alwaysHungry([3.14, "food", "pie", true, "food"]);
        

function highPass(arr, cutoff) {
        var filteredArr = [];
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i]>cutoff)
            {
                filteredArr.push(arr[i]);
            }
        }
        return filteredArr;
        }
        var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
        console.log(result); 
        

        function betterThanAverage(arr) {
            var sum = 0;
            var avg=0;
            for(var i=0;i<arr.length;i++){
                sum=sum+arr[i];
            }
            avg=sum/arr.length;
            console.log(avg);
            var count = 0;

            for(var i=0;i<arr.length;i++){
            if (arr[i]>avg){
                count++;
            }
        }
            return count;
        }
        var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
        console.log(result); 
        
function reverse(arr) {
    for(var i=0;i<arr.length/2;i++)
    {
        temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
        }
        var result = reverse(["a", "b", "c", "d", "e"]);
        console.log(result); // we expect back ["e", "d", "c", "b", "a"]
        
        function fibonacciArray(n) {
            // the [0, 1] are the starting values of the array to calculate the rest from
            var fibArr = [0, 1];
            for (var i=0;i<n-2;i++)
            {
                var num;
                num=fibArr[i]+fibArr[i+1];
                fibArr.push(num);
            }
            return fibArr;
        }
           
        var result = fibonacciArray(10);
        console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
        
