function rightRotate(arr,n){
for(let i=n;i>0;i--){
    var k=arr.length-1;
    var temp = arr[k];
//this while loop will rotate array one time
    while(k>=0){
        arr[k]=arr[k-1];
        k--;
        if(k==1)
        {
            arr[k]=arr[k-1];
            arr[k-1]=temp;
            break;
        }
    }
    
}
console.log(arr);
}
var arr=[1,2,3,4,5,6,7,8,9,0];
rightRotate(arr,2);