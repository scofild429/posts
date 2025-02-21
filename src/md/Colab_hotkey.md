---
startup: overview
title: 'Golab Vim hotkey, Vim Heft'
---

Golab with Vim
==============

1.  Cell model

      ------------- ---------------------------------
      j/k C-n/C-p   Cell之间上下移动
      Enter         to normal model or insert model
      ------------- ---------------------------------

2.  Normal Model

      ---------- ------------------------------------
      M-n/M-p    Cell 之间上下移动
      Markdown   双击右边的视图回到Cell model
      Code       点击左边执行框内阴影回到Cell model
      i          to insert model
      ---------- ------------------------------------

3.  Insert model

      ---------------- ------------------------------------
      Up/Down          行之间上下移动
      C-Left/C-right   词语之间左右移动
      M-Up/M-Down      行的上下互换
      Markdown         双击右边的视图回到Cell model
      Code             点击左边执行框内阴影回到Cell model
      ---------------- ------------------------------------

Vim command model
=================

  ---- ---------------------
  w    next word front
  b    previous word front
  e    end of word
  i    insert front word
  I    insert front line
  a    insert end word
  A    insert end line
  o    insert line up
  O    insert line down
  u    redo
  x    delete char
  y    copy
  yy   copy line
  d    delete
  dd   delete line
  p    pasta
  gg   document begin
  G    document end
  ---- ---------------------

[Go back to index](./index.org)
===============================
