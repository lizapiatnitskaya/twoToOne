function longest(s1, s2) {

    const str1 = new Set();
    let s3=(s1+s2).split('').sort().join('');
 
        for (let i=0; i< s3.length; i++) {
         str1.add(s3[i]);
        }
    //let  arr1=Array.from(str1);
    let arr1 =[...str1];
    return  arr1.join("");
   
    }
    console.log(longest("aretheyhere", "yestheyarehere"));



