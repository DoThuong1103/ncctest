a = [1, 3, 4, 2, 7, 9, 10, 6, 8];
b = [1, 3, 9, 11, 5, 7, 13];
c = [];
for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < b.length; j++) {
    if (a[i] == b[j]) {
      c.push(a[i]);
    }
  }
}
console.log(c);
