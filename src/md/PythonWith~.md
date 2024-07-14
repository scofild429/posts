---
setupfile: '/home/silin/.emacs.d/org-html-themes/org/theme-bigblow.setup'
startup: content
title: Python Numpy with \~
---

Wenn we want to filter the we wanted from a np.array, we can define the
filter with boolen in a np.array,

``` {.ipython results="output" exports="both"}
import numpy as np
x = np.arange(25).reshape(5,5)
print(x)

```

``` {.example}
[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12 13 14]
 [15 16 17 18 19]
 [20 21 22 23 24]]
```

Or

``` {.ipython results="output" exports="both"}
import numpy as np
xx = np.linspace(0, 24, 25).reshape(5,5)
print(xx)

```

``` {.example}
[[ 0.  1.  2.  3.  4.]
 [ 5.  6.  7.  8.  9.]
 [10. 11. 12. 13. 14.]
 [15. 16. 17. 18. 19.]
 [20. 21. 22. 23. 24.]]
```

With np.linspace is float number, but arange is int number

``` {.ipython results="output" exports="both"}
import numpy as np
x = np.arange(25).reshape(5,5)
y = np.array([False, False, True, True, False])
print(x[y,2])

```

``` {.example}
[12 17]
```

according to y = np.array(\[False, False, True, True, False\]) to filter
the true position in the third column.

if we want the false position in the third column, with \~ on the filter
array

``` {.ipython results="output" exports="both"}
import numpy as np
x = np.arange(25).reshape(5,5)
y = np.array([False, False, True, True, False])
print(x[~y,2])

```

``` {.example}
[ 2  7 22]
```
