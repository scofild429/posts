---
title: Master Theorem and examples
---

```{=org}
#+SETUPFILE: /home/silin/.emacs.d/org-html-themes/org/theme-readtheorg.setup
```
```{=org}
#+STARTUP: content
```
# Master Theorem

In a Recursive process, we can form this,
$$ T_n = a \cdot T(\frac{n}{b}) + f(n) $$, for $a \geq 1$, $b \geq 1$. T
代表递归符号, a: 每次递归后重复的次数, n/b: 递归后每个部分的问题规模,
f(n): 递归后将所有部分融合的步骤, 作如 下变换：

$$ n^d = f(n) = O(n^{\log_b^a-\epsilon}) $$
$$ n^d = f(n)  \ge n^{\log_b^a-\epsilon} $$
$$ d \ge \log_b^a - \epsilon $$ $$ d \ge \log_b^a $$ 如果$\log_b^a$
在减去一个存在的 $\epsilon$ 后仍然大于d, 则
：$T_n = \Theta (n^{\log_b^a})$. 直接$\log_b^{a}$

$$  n^d = f(n) = \Theta (n^{\log_b^a})  $$
$$  n^d = f(n)  = n^{\log_b^a} $$ $$   d = \log_b^a $$ 如果$\log_b^a$
恒等于 d, 则： $T_n = \Theta (n^{\log_b^a} \cdot \lg^n)$
直接\$log ~b~^a^\$乘以$log^{n}$,注意： 此处是
$f(n) = \Theta (n^{\log_b^a} log^{k}_{n})$ 中k=0的特列

$$   n^d = f(n) = \Omega(n^{\log_b^a+\epsilon}) $$
$$   n^d = f(n)  \le n^{\log_b^a+\epsilon} $$
$$   d \le \log_b^a +\epsilon $$ $$   d \le \log_b^a $$ 如果$\log_b^b$
在加上一个存在的 ϵ 后仍然小于d, 则 ：$T_n = \Theta (f(n))$. 直接f(n)
这种情况要检测正则性： if \$ ∃ c \< 1\$ so that, $af(n/b)  \le cf(n)$.
if not, Master Theorem can\'t be used in this case

# 1 $T(n) = 3T(n/2) + n^{2}$

a = 3,

b = 2,

$log_{b}^{a} = log_2^{3}$

$\exists \varepsilon$ so that, $f(n) = \Omega(n^{log_b^a+\varepsilon})$

Regularity condition: $af(n/b) = 3(n/2)^2 = 3n^{2}/4$

$\exists c > 1$ , so $3n^{2}/4 \le c \cdot n^{2}$, for example c = 4/5

so $T(n)  = \Omega(f(n)) = \Omega(n^{2})$

# 2 $T(n) = 4T(n/2) + n^{2}$

a = 4

b = 2

$n^{\log_{b}^{a}} = n^{2} = \Theta(f(n))$

$T(n) = \Theta(f(n)logn) = \Theta(n^{2}\log n)$

# 3 $T(n) = T(n/2) + 2^{n}$

a = 1, b = 2

$n^{\log_{b}^{a}} = \Omega(f(n)) = \Omega(2^{n})$

Regularity condition: $af(n/b) = 2^{n/2}$, $f(n) = 2^{n}$
$\exists c < 1$, such $af(n/b) < cf(n)$

$T(n) = \Theta(2^{n})$

# 4 $T(n) = 2^{n}T(n/2) + n^{n}$

$a = 2^{n}$, b = 2,

$n^{\log_{b}^{a}} = n^{n} = \Theta(f(n))$

$T(n) = \Theta(f(n)logn) = \Theta(n^{n}logn)$

# 5 $T(n) = 16T(n/4) + n$

a = 16, b = 4;

$n^{\log_{b}^{a}} =n^{2} = O(f(n))$

$T(n) = \Theta(n^{2})$

# 6 $T(n) = 2T(n/2) + nlogn$

a = 2, b = 2 $n^{\log_{b}^{a}} =n$

$\nexists  \epsilon$ so that, $n^{\log_{b}^{a}-\varepsilon}$ is
polynomial bigger than $O(f(n))$, or $n^{\log_{b}^{a}+\varepsilon}$ is
polynomial smaller than O(f(n)),

But in the extend of second case: $n^{\log_{b}^{a}} logn = \Theta(f(n))$
so $T(n) = \Theta(f(n)log^{2}n) = \Theta(n\log^{2}n)$

# 7 $2T(n) = 2T(n/2) + n/logn$

a = 2, b = 2, $n^{\log_{b}^{a}} =n$

$\nexists  \epsilon$ so that, $n^{\log_{b}^{a}-\varepsilon}$ is
polynomial bigger than $O(f(n))$, or $n^{\log_{b}^{a}+\varepsilon}$ is
polynomial smaller than O(f(n)),

But in the extend of second case for k = -1:
$T(n) = \Theta(f(n)loglog^n) = \Theta(n\log\log n)$

# 8 $T(n) = 2T(n/4) + n^{0.51}$

a = 2, b = 4, $n^{\log_{b}^{a}} = n^{1/2} = \Omega(n^{0.51})$

Regularity Condition: $af(n/b)= 2(n/4)^{0.51}$ $\exists c < 1$, that
a(f(n/b)) \< c f(n);

$T(n) = \Theta(n^{0.51})$

# 9 $T(n) = 0.5T(n/2) +1/n$

a = 1/2, b = 2,

$n^{\log_{b}^{a}} =n^{-1} = \Theta(f(n))$

$T(n) = \Theta(f(n)\log n) = log n/n$

# 10 $T(n) = 16T(n/4) + n!$

a = 16, b = 4, $n^{\log_{b}^{a}} = n^{2} = \Omega(f(n))$

Regularity condition: $af(n/b) = 16n!/24$, $\exists c < 1$, so that
af(n/b) \< cf(n).

$T(n) = \Theta(f(n)) = \Theta(n!)$

# 11 $T(n) = \sqrt{2} T(n/2) + logn$

$a = \sqrt{2}$, b = 2,

$n^{\log_{b}^{a}} = n^{1/2}= O(f(n))$

$T(n) = \Theta(n^{1/2})$

# 12 $T(n) = 3T(n/2) +n$

a = 3, b = 2 $n^{\log_{b}^{a}} =n^{\log_{2}^{3}} = O(f(n))$

$T(n) = \Theta(n^{\log_{2}^{3}})$

# 13 $T(n) = 3T(n/3) +\sqrt{n}$

a = 3, b = 3

$n^{\log_{b}^{a}} = n = O(f(n))$

$T(n) = \Theta(n)$

# 14 $T(n) = 4T(n/2) + cn$

a = 4, b =2,

$n^{\log_{b}^{a}} =n^{2} = O(f(n))$

$T(n) = \Theta(n^{2})$

# 15 $T(n) = 3T(n/4) + nlogn$

a = 3, b = 4,

$n^{\log_{b}^{a}} = n^{\log_{3}^{4}} =\Omega(f(n))$

Regularity condition: $af(n/b) = 3nlog(n/4)/4$ if ∃ c \< 1\$, so
that,af(n/b) \< cf(n)

$\frac{3}{4}n \log n -\frac{3}{4}n\log 4 < c \cdot n \cdot logn <1$ for
$n -> \infty$,
$\frac{3}{4}-\frac{3}{4} \cdot \frac{log 4}{logn} < c < 1$;

so, $T(n) = \Theta(n\log n)$

# 16 $T(n) = 3T(n/3) + n/2$

a = 3, b = 3,

$n^{\log_{b}^{a}} = n = \Theta(f(n))$

$T(n) = \Theta(f(n)logn) = \Theta(\frac{n}{2}log n)$

# 17 $T(n) = 6T(n/3) +n^{2}logn$

a = 6, b = 3 $n^{\log_{b}^{a}} = n^{\log_{3}^{6}} = \Omega(f(n))$

Regularity condition:
$af(n/b) = \frac{2}{3} n^2 log(n/3) < c \cdot n^2 logn$ $\exists c$ so
that, $\frac{2}{3} log(1/3) < c < 1$

$T(n) = \Theta(f(n)) = \Theta(n^{2} logn)$

# 18 $T(n) = 4T(n/2) + n/logn$

a = 4, b = 2,

$n^{\log_{b}^{a}} = n^{2} = O(f(n))$

$T(n) = \Theta(n^{2})$

# 19 $T(n) = 64T(n/8) -n^{2}logn$

a = 64, b = 8, $n^{\log_{b}^{a}} = n^{2}$

for extend second case, $n^{\log_{b}^{a}} logn = \Theta(f(n))$, for k =
1

so $T(n) = \Theta(n^{2}log^{2}n)$

# 20 $T(n) = 7T(n/3) + n^{2}$

a = 7, b = 3,

$n^{\log_{b}^{a}} = n^{\log_{3}^{7}} = \Omega(f(n))$

Regularity condition: $af(n/b) = \frac{7}{9}n^2$ $\exists c < 1$, so
that af(n/b) \< cf(n), such as c = 8/9;

$T(n) = \Theta(f(n)) = \Theta(n^2)$

# 21 $T(n) = 4T(n/2) + logn$

a = 4, b = 2,

$n^{\log_{b}^{a}} = n^2 = O(f(n))$

$T(n) = \Theta(n^{2})$

# 22 $T(n) = T(n/2) + n(2-cosn)$

a = 1, b = 2,

$n^{\log_{b}^{a}} = n^{0} = \Omega(n(2-cosn))$

Regularity condition: if $af(n/b) < c f(n)$, for c \<1. $\exists c$ so
that $\frac{1}{2} \frac{\frac{n}{2} (2-cos(n/2))}{2-cosn} < c < 1$.

$T(n) = \Theta(n(2-cosn))$
