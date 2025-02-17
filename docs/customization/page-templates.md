# SeaTable Frontend Modification

Seafile offers a wealth of configuration options to enable or disable individual functions in the frontend or to customize the frontend to your own needs.

At the same time, you can only intervene in the design of the frontend to a limited extent with the help of the configuration files. For this, Seafile offers a sophisticated template system to selectively replace individual page areas with their own versions.

This article introduces this form of customizing.

## What can be customized?

Seafile uses predefined HTML templates for almost all web pages and emails, which can be customized. Changes to the base editor are thus not possible, but adjustments to the login page or changes to individual email texts are possible without problems.

The basic idea is simple. You take the files provided by seatable and copy them to a special place outside the container. These copied files can then be customized. If Seafile (after a restart) finds these files, they will be used instead of the original files. The duplicated and customized files are stored outside the Seafile docker container, so that the customizations survive an update of seafile.

## Customize the login page

All files below `/opt/seafile/seafile-server-latest/seahub/seahub/templates` (this is the path inside the container) can be customized. Here is an example how to customize the login page.

```
# copy the file from inside the container to the seafile-compose folder
cd /opt/seafile-compose
docker cp seafile-server:/opt/seafile/seafile-server-latest/seahub/seahub/templates/registration/login.html ./
```

Then modify login.html according to you needs and then mount it into the container.

```yml
services:
  seafile:
    # ...
    volumes:
      - - ./login.html:/shared/seafile/seahub-data/custom/templates/registration/login.html:ro
```

After a restart, the new login page will be used.
