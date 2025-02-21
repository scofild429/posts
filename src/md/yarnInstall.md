---
startup: overview
title: YarnInstall
---

yarn can be installed by npm, and yarn --version works, but only for old
old version

for yarn init comes the error: "00h00m00s 0/0: : ERROR: \[Errno 2\] No
such file or directory: \'init\'"

delete yarn and reinstall it

``` {.bash org-language="sh"}
sudo apt remove cmdtest
sudo apt remove yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt upgrade
```

for upgrade comes the error:

    ModuleNotFoundError: No module named 'uaclient'
    dpkg: Fehler beim Bearbeiten des Paketes ubuntu-advantage-tools (--configure):
     »installiertes ubuntu-advantage-tools-Skript des Paketes post-installation«-Unterprozess gab den Fehlerwert 1 zurück
    Fehler traten auf beim Bearbeiten von:
     ubuntu-advantage-tools
    E: Sub-process /usr/bin/dpkg returned an error code (1)

Normally in one package is not complete in dpkg or apt,

``` {.bash org-language="sh"}
sudo dpkg --configure -a
```

or

``` {.bash org-language="sh"}
sudo apt install -f
sudo apt install--fix-broken
```

works, but if not, remove it if possible so ubuntu-advantage-tools
should be removed,

``` {.bash org-language="sh"}
sudo apt-get remove ubuntu-advantage-tools
sudo mv /var/lib/dpkg/info/ubuntu-advantage-tools.* /tmp/
sudo dpkg --force-remove-reinstreq --purge ubuntu-advantage-tools
sudo dpkg --remove --force-remove-reinstreq ubuntu-advantage-tools
```

then

``` {.bash org-language="sh"}
sudo apt update
sudo apt upgrade
sudo apt install yarn
yarn --version
```

new version can be shown, and yarn init works
