const lengthOfLongestSubstring = function(s) {
  const arr=s.split("");
    let max=0
    for(let i=0;i<arr.length;i++){
        let sub=[arr[i]];
        let j=i+1;
        while(!sub.includes(arr[j]) && j<arr.length){
            sub.push(arr[j]);
            j++;
        }
        if(sub.length>max){
            max=sub.length
        }   
    }
    return max
};