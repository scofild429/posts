---
title: docker~gpu~
---

Install docker and nvidia docker toolkit
----------------------------------------

-   install docker
    [link](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)
-   install nvidia docker toolkit
    [link](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installing-with-apt)

``` {.bash org-language="sh"}
sudo groupadd docker  
sudo gpasswd -a $USER docker
docker pull ...
sudo systemctl restart docker
docekr run -it --gpus all dockerimages /bin/bash
```
