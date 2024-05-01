---
title: uwsgi deploy
---

```{=org}
#+SETUPFILE: /home/silin/.emacs.d/org-html-themes/org/theme-readtheorg.setup
```
```{=org}
#+STARTUP: overview
```
# Reference

-   [How to Set Up Django on Nginx with
    uWSGI](https://tonyteaches.tech/django-nginx-uwsgi-tutorial/)
-   [Deploying Django applications in production with uwsgi and
    nginx](https://medium.com/all-about-django/deploying-django-applications-in-production-with-uwsgi-and-nginx-78aac8c0f735)
-   [How To Secure Nginx with Let\'s Encrypt on Ubuntu
    20.04](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04)

# steps

## python manage.py runserver should work

## uwsgi

-   install not in virtual envirement

``` {.bash org-language="sh"}
sudo apt-get install python3.8-dev
sudo apt-get install python3.10-dev
sudo apt-get install gcc
sudo pip install uwsgi
```

-   test

    ``` {.bash org-language="sh"}
    uwsgi --http :8000 --module projectname.wsgi
    ```

    go to 8000 port and check, if remote use port rediect

    ``` {.bash org-language="sh"}
    ssh -L 8000:127.0.0.1:8000 username@ip
    ```

-   config: /etc/uwsgi/apps-avaiable/project.ini

    ``` text
    [uwsgi]
    uid = ubuntu
    gid = ubuntu
    # full path to Django project's root directory
    chdir            = /home/udoms/microdomains/
    # Django's wsgi file
    module           = microdomains.wsgi
    # full path to python virtual env
    home             = /home/udoms/venv
    # enable uwsgi master process
    master          = true
    # maximum number of worker processes
    processes       = 10
    # the socket (use the full path to be safe
    socket          = /home/..../project.sock
    # socket permissions
    chmod-socket    = 666
    # clear environment on exit
    vacuum          = true
    # daemonize uwsgi and write messages into given log
    logto = /var/log/uwsgi/hpcproject.log
    ```

-   set the log directory

    ``` text
    cd /var/log
    sudo mkdir -p uwsgi
    sudo chown -R ubuntu:ubuntu uwsgi/
    ```

-   test after configation

    ``` text
    cd /etc/uwsgi/apps-available/
    uwsgi --ini movies.ini              
    ```

check the log content with sudo tail -10f /var/log/uwsgi/project.log if
correct, enable it with soft link to apps-enable

## nginx

-   username

    ``` text
    # sudo vim /etc/nginx/nginx.conf
    user cloud;      # instead of www-data

    ```

-   nginx site-avaiable file

``` tex
upstream django {
    server unix:///home/..../project/project.sock;
}

  server {
      listen  80;
      server_name DomainName DNS;
      charset     utf-8;
      # max upload size
      client_max_body_size 75M;
      location /media  {
          alias /home/..../project/media;
      }
      location /static {
          alias /home/..../project/static;
      }
      # Send all non-media requests to the Django server.
      location / {
          uwsgi_pass  django;
          include     /home/..../project/uwsgi_params;
      }
    }
```

-   **be careful, the socket path should match**

-   last line uwsgi~params~ is in the project root directory

    ``` text
    uwsgi_param  QUERY_STRING       $query_string;
    uwsgi_param  REQUEST_METHOD     $request_method;
    uwsgi_param  CONTENT_TYPE       $content_type;
    uwsgi_param  CONTENT_LENGTH     $content_length;
    uwsgi_param  REQUEST_URI        $request_uri;
    uwsgi_param  PATH_INFO          $document_uri;
    uwsgi_param  DOCUMENT_ROOT      $document_root;
    uwsgi_param  SERVER_PROTOCOL    $server_protocol;
    uwsgi_param  REQUEST_SCHEME     $scheme;
    uwsgi_param  HTTPS              $https if_not_empty;
    uwsgi_param  REMOTE_ADDR        $remote_addr;
    uwsgi_param  REMOTE_PORT        $remote_port;
    uwsgi_param  SERVER_PORT        $server_port;
    uwsgi_param  SERVER_NAME        $server_name;
    ```

    sudo ln -s source des

    -   enable the nginx configation file and test a picture in media

## service

-   create service file with sudo vim /etc/systemd/system/uwsgi.service

    ``` text
    [Unit]
    Description=uWSGI Emperor service

    [Service]
    ExecStartPre=/bin/bash -c 'mkdir -p /run/uwsgi; chown ubuntu:ubuntu /run/uwsgi'
    ExecStart=/usr/local/bin/uwsgi --emperor /etc/uwsgi/apps-enabled
    Restart=always #make sure the server is running
    KillSignal=SIGQUIT
    Type=notify
    NotifyAccess=all

    [Install]
    WantedBy=multi-user.target
    ```

**be careful for the path of uwsgi**

-   start service and enable it

    ``` {.bash org-language="sh"}
    sudo systemctl start uwsgi.
    sudo systemctl restart uwsgi.
    sudo systemctl enable uwsgi.
    ```

# ssl

sudo certbot -d -d -d
