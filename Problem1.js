function findFirstUnique(arr){
    var test=false;
    for(let i=0; i<arr.length;i++){
        if(test==false){    
            for(let j=0;j<arr.length;j++){
                if(i==j){
                    continue;
                }
                if(arr[i]==arr[j]){
                    test=false;
                    break;
                }
                else{test=true;}
            }
        }
        if(test==true){
            console.log("first uniqe is = ", arr[i]);
            break;
        }
        if((test==false) && (i==arr.length-1)){
            console.log(null)
        }

    }
}
var kk=[9,2,3,2,6,6]
findFirstUnique(kk);