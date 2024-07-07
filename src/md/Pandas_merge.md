---
title: Pandas merge & SQL join
---

```{=org}
#+SETUPFILE: /home/silin/.emacs.d/org-html-themes/org/theme-readtheorg.setup
```
```{=org}
#+STARTUP: overview
```
merge in pandas DataFrame is very similar like join in SQL.

# pandas DataFrame

``` ipython
DataFrame.merge(right,
                how='inner', 
                on=None,
                left_on=None,
                right_on=None, 
                left_index=False,
                right_index=False, 
                sort=False,
                suffixes=('_x', '_y'),
                copy=True,
                indicator=False, 
                validate=None)[source]
```

how = \'inner\', \'outer\', \'left\', \'right\' default is \'inner\'
inner: interaction set output: union set left : all left right : all
right

if right~on~, left~on~, and on is not given, the merge is on the
index(row). we use the frist column from left and right dataframe to
merge, just like the example. left: \'one\' has 0, 1 right: \'one\' has
1, 2, 3 the interaction set is only 1 all columns will be just added
together

``` {.ipython results="output" exports="both"}
import pandas as pd
dd = {'one':[0, 1 ], 'two':[0, 0], 'three':[1, 1]}
a = pd.DataFrame(data= dd)
b = pd.DataFrame({'zero':[0,0,0], 'one':[1,2,3 ], 'two':[0,0,0 ]})
print(a)
print(b)
print(a.merge(b))
```

``` example
   one  two  three
0    0    0      1
1    1    0      1
   zero  one  two
0     0    1    0
1     0    2    0
2     0    3    0
   one  two  three  zero
0    1    0      1     0
```

the can also be merge on columns, for each compare elemenet in column
with out repeated key

``` {.ipython results="output" exports="both"}
dd = {'one':[0, 1 ], 'two':[0, 0], 'three':[1, 1]}
a = pd.DataFrame(data= dd)
b = pd.DataFrame({'zero':[0,0,0], 'one':[1,2,3 ], 'two':[0,0,0 ]})
print(a)
print(b)
print(a.merge(b, on='one', how='inner'))

```

``` example
   one  two  three
0    0    0      1
1    1    0      1
   zero  one  two
0     0    1    0
1     0    2    0
2     0    3    0
   one  two_x  three  zero  two_y
0    1      0      1     0      0
```

if with repeated key, the number will be multipy by its occurrence,

``` {.ipython results="output" exports="both"}
dd = {'one':[0, 1 ], 'two':[0, 0], 'three':[1, 1]}
a = pd.DataFrame(data= dd)
b = pd.DataFrame({'zero':[0,0,0], 'one':[1,2,3 ], 'two':[0,0,0 ]})
print(a)
print(b)
print(a.merge(b, on='two', how='inner'))
```

``` example
   one  two  three
0    0    0      1
1    1    0      1
   zero  one  two
0     0    1    0
1     0    2    0
2     0    3    0
   one_x  two  three  zero  one_y
0      0    0      1     0      1
1      0    0      1     0      2
2      0    0      1     0      3
3      1    0      1     0      1
4      1    0      1     0      2
5      1    0      1     0      3
```
