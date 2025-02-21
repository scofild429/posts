---
startup: overview
title: LoawMath
---

``` {.python results="output"}
import numpy as np

X = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

U, S, Uh = np.linalg.svd(X, full_matrices=False)
print(U)
print(S)
print(Uh)
print("*********")
print(U[:, :1])
print(S[:1])
print(Uh[:1, :])
A = U[:, :1] @ np.diag(S[:1])
B = Uh[:1, :]

X_approx = A@B
print(X_approx)
```
