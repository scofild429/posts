---
startup: overview
title: repair~grub~
---

repair grub
===========

  ------------------------- ---------------------------------------------
  ls                        
  ls (hd0,gpt3)/            gpt3 ist the / directory
  set root = (hd0,gpt3)     /boot is installed in / directory partation
  linux /boot/vmlinux       
  initrd /boot/initrd.img   
  boot                      
  sudo update-grub          
  ------------------------- ---------------------------------------------
