const countGoodSubstrings = function(s) {
    const arr=s.split("");
    let count=0;
    const result2=[]
    for(let i=0;i<arr.length-2;i++){
        const sub=[];
        for(let j=i;j<i+3;j++){
            sub.push(arr[j])
        }
        const result=[...new Set(sub)]
        if(result.length===3){
            result2.push(result.join(""))
        }
    }
    return result2.length
};