---
startup: overview
title: From binary Heap to Fibonacci Heap
---

Binary Heap
===========

Binary Heap example deviced by heap sort

``` {.typescript exports="both" results="both"}
let swap = function (left:number, right:number){
  return [right, left]
  }

let heapfly =  function(list:number[], length:number, index:number){
      var leftchild = index*2+1
      var rightchild = index*2+2
      var maxindex = index
      if (leftchild < length && list[leftchild] >list[maxindex]) {
          [leftchild, maxindex] = swap(leftchild, maxindex)
      }

    if (rightchild < length && list[rightchild]>list[maxindex]) {
        [rightchild, maxindex] = swap(rightchild, maxindex)
      }
      if (maxindex != index) {
          [list[maxindex], list[index]] = swap(list[maxindex], list[index])
          heapfly(list, length, maxindex)
      }
  }
 let build_heap = function (list:number[], lenght:number){
      var lastperent = Math.floor((length-1-1) / 2);
      for (var i = lastperent; i >= 0; i--) {
          heapfly(list, length, i);
      }
  }
  var list: number[] = [2, 1, 3, 4, 5, 3, 5, 7, 8, 45,  9, 25, 34, 23, 345, 546, 20, 23465, 90, 19];
  console.log(list)
  var length: number = list.length;
  build_heap(list, length)

  for (var i = length-1; i >= 0; i--) {
      [list[i], list[0]]= swap(list[i], list[0])
      heapfly(list, i, 0)
  }
  console.log(list)

```

``` {.example}
[
    2,  1,     3,  4,   5,
    3,  5,     7,  8,  45,
    9, 25,    34, 23, 345,
  546, 20, 23465, 90,  19
]
[
   1,  2,   3,   3,     4,
   5,  5,   7,   8,     9,
  19, 20,  23,  25,    34,
  45, 90, 345, 546, 23465
]
```

Binomial-tree
=============

Definition: if k \> 0, $B_{k} = {B_{0}, B_{1}, B_{2}....B_{k-1}}$.

``` {.dot file="./Foto/BinomialTree.jpg"}
digraph diagramm {
A0;
B0 -> B1;
C0 -> C1;
C0 -> C2;
C2 -> C3;
D0 -> D1; 
D0 -> D2;
D0 -> D3;
D2 -> D4;
D3->D5;
D3 -> D6;
D6 -> D7;

}   
```

Binomial Heap
=============

all different order Binomial Tree consist Binomial Heap

``` {.dot file="./Foto/BinomialHeap.jpg"}
digraph diagramm {
A0;
A0 -> B0;
B0 -> B1;

B0 -> C0;
C0 -> C1;
C0 -> C2;
C2 -> C3;

C0 -> D0;
D0 -> D1; 
D0 -> D2;
D0 -> D3;
D2 -> D4;
D3->D5;
D3 -> D6;
D6 -> D7;

}   
```

Each order has only one Binomial Tree, conlidataion is required at each
min-extract, merge

lazy Binomial Heap
==================

Min-extra, Merge the conlidataion will not be executed, until it\'s
needed

Fibonacci Heap
==============

key-decrease is also lazy, just cut it off, and add to rootlist
amortised operation reduce Min-extra to $O(log n)$, With Fibonacci array
. For all perents, if one child is loss, will be marked as red, if the
second also loss, the perent will be cut off, and add to rootlist.
Max-damaged-Fibonacci-Heap has Fibonacci number nodes
