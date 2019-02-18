/* Bubble sort use to sort the string*/
function sorting(arr){
    var temp;
    for(var j=0;j< arr.length;j++) {
        for(var k =j+1;k< arr.length;k++)
        {
        if(arr[j]> arr[k])
        {
        temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
        }  
}
}
return arr;
}

function check_anagram(str1,str2)
{
    var flag =0;
    /* check the length of string*/

    if(str1.length!==str2.length)
    {
        flag = 0;
    }
    /* convert uppercase to lowercase*/

    var string1 = str1.toLowerCase();
    var string2 = str2.toLowerCase();

  /* Initialize two empty array*/

    var arr1 = [];
    var arr2 = [];
  for(var i=0;i<string1.length;i++)
  {
       arr1[i] = string1.charAt(i);
       arr2[i] = string2.charAt(i);
  }
 var s1 = sorting(arr1);
 var s2 = sorting(arr2);

 /* Compare two string to check anagram*/

 for(var a =0;a<s1.length;a++ )
 {
     if(s1[a]!==s2[a])
     {
      flag =0;
     }
     else
     {
     flag = 1;
     }
 }
 if(flag == 1)
 {
    console.log("Two strings are anagram");
 }
 else
 {
    console.log("Two strings are not anagram"); 
 }
}
check_anagram('recall','cellar');
check_anagram('arm','elbow');