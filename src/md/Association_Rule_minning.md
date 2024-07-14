---
setupfile: '/home/silin/.emacs.d/org-html-themes/org/theme-readtheorg.setup'
startup: overview
title: Association Rule Minning
---

-   Transaction: T, one behavior, which accomplished a lot of
    things(items)
-   Item : I, which stands for the smallest unit, that can be done.
-   Our task is to find out, the relationship between items

**Confidence** $$C(a->b) = P(b|a) = \frac{P(ab)}{P(a)}$$

    the Probabilities  If a is done, b will also be done.

**Support** $$S(a->b)=P(a\cap b) = P(ab)$$

    a and b be done together from all Transaction, identify the special Transaction case

$$X -> Y(C=c, S=s)$$

**practicability** (Lift)
$$L(a->b)=\frac{Confidence(a->b)}{P(b)} =\frac{P(ab)}{P(a)P(b)}$$

    The impact of a on b to be done

**Aprioir** **algorithm**

1.(with support level(S) )

-   find the frequently itemset(L)
-   the subsets of frequently itemset is also frequently itemset
-   collect the total Transaction set(T), and set the the support level
-   find all $L_{1}$, which satisfied S,
-   find all $L_{2}$, which come from all 2-items combinations, which
    satisfied S
-   .....to only one left, $L_{k}$.

2.(with Confidence (C) )find all subsets of $L_{k}$, which satisfied C.

**Note** all the operations in this 2 step is done in the whole
Transaction sets
