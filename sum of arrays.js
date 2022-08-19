var array = [1,2,-3,1,-2,-3]
for(var i=0;i<array.length;i++){
    for(var j=i+1;j<array.length-1;j++){
        for(var k=i+2;k<array.length;k++){
            if(array[i]+array[j]+array[k] == 0){
                console.log(array[i]+" "+array[j]+" "+array[k])
            }
        }
    }
}