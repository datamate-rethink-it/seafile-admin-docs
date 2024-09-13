# UI Customiziation in Seafile

Seafile offers numerous options for tailoring the system to your specific needs. This includes customization of colors, logos, images, emails and HTML templates. While most customization tasks can be performed via the command line interface, system administrators also have the ability to make certain changes directly through the web interface (if activated).

In general, we recommend to make all changes via environment variables, to have all configurations at one place.

<!--
Let's explore the various possibilities for UI customization

![Seafile Customization](../assets/images/seafile-customization.png)
-->

If you don't see **Settings** in the system admin area, you might need to set `SEAHUB__ENABLE_SETTINGS_VIA_WEB=true` in your `/opt/seafile-compose/.env` file.

## Every change requires a restart

Keep in mind, that every change that you do, requires a restart of the seafile/seahub service or the Seafile container.

```
cd /opt/seafile-compose
docker compose down
docker compose up -d
```
