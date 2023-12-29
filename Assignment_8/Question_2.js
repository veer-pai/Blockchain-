// a
var set1 = new Set(["sumit", "sumit", "amit", "anil", "anish"]);
console.log(set1);

var set2 = new Set("fooooooood");
console.log(set2);

var set3 = new Set([10, 20, 30, 30, 40, 40]);
console.log(set3);

// b
set3.add(60)
console.log(set3);

// c
set2.delete("o")
console.log(set2);