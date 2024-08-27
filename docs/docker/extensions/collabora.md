# Collabora Online

Collabora Online offers real-time collaboration with office documents in your browser. As soon as you open a file from Seafile, Collabora opens in a new browser tab and allows real time collaboration. As soon as the last user exits the document by closing his browser window, the document is saved back to the Seafile storage.

This article is about the how to install the CODE version of collabora online.

!!! warning "You have to decide: Collabora OR OnlyOffice"

    Collabora and OnlyOffice are both office editors. You have to decide which one you would like to use. You can not use both in parallel.

!!! note "Use a separate host, if you expect many users"

    Collabora Online (CODE) can be installed on the same host as Seafile Professional Edition. If Collabora Online is used regularly and by many users, the host should be fitted with sufficient cores and RAM or you should install Collabora on a separate host.

This manual assumes that Seafile Professional Edition is installed and is running.

## Installation

#### Activate collabora

To install OnlyOffice, include `collabora.yml` in the `COMPOSE_FILE` variable within your `.env` file. This instructs Docker to download the required images for OnlyOffice.

Simply copy and paste (:material-content-copy:) the following code into your command line:

```bash
sed -i "s/COMPOSE_FILE='\(.*\)'/COMPOSE_FILE='\1,collabora.yml'/" /opt/seafile-compose/.env
```

#### Set required environment variables

Now execute the following command to add the required configuration to your .env file. You don't have to replace `${SEAFILE_SERVER_HOSTNAME}`. It will replaced automatically.

```bash
cd /opt/seafile-compose
source .env
echo -e "\n# collabora online" >> .env
echo "SEAHUB__OFFICE_SERVER_TYPE='CollaboraOffice'" >> .env
echo "SEAHUB__ENABLE_OFFICE_WEB_APP=True" >> .env
echo "SEAHUB__OFFICE_WEB_APP_BASE_URL='https://${SEAFILE_SERVER_HOSTNAME}:6232/hosting/discovery'" >> .env
echo "SEAHUB__OFFICE_WEB_APP_FILE_EXTENSION='odp,ods,odt,odg,xls,xlsb,xlsm,xlsx,ppsx,ppt,pptm,pptx,doc,docm,docx'" >> .env
echo "SEAHUB__ENABLE_OFFICE_WEB_APP_EDIT=true" >> .env
echo "SEAHUB__OFFICE_WEB_APP_EDIT_FILE_EXTENSION='odp,ods,odt,odg,xls,xlsb,xlsm,xlsx,ppsx,ppt,pptm,pptx,doc,docm,docx'" >> .env
```

#### Download collabora and restart

One more step is necessary to download the Collabora container and restart the Seafile container.

```bash
cd /opt/seafile-compose
docker compose down
docker compose up -d
```

## Check if installation is complete

Wait for some seconds and then open `https://<your-seafile-url>:6232` and you should see simple an **OK**. This confirms that Collabora Online is up and running. Office documents that you double click in your base should be opened with Collabora Online in a new browser tab.

## Advanced: Custom settings

### Admin interface

Collabora Online provides an admin interface, which is disabled by default.
Add the following parameters to your `.env` file to activate it and adapt it to your needs.

```bash
COLLABORA_ADMIN=username
COLLABORA_PW=password
COLLABORA_ENABLE_ADMIN_CONSOLE=true
```

After restarting the Collabora container you can access the admin interface at `https://<your-seafile-url>:6232/browser/dist/admin/admin.html`.

### Activate File Logging

To activate File logging of Collabora Online you have to add the following parameter to your `.env` file:

```bash
COLLABORA_ENABLE_FILE_LOGGING=true
```

After a restart of the container the logs are written to `/opt/cool/logs/coolwsd.log`. To access this log file at the host system you have to create a folder and change the permission to 777.

```bash
mkdir /opt/collabora
chmod 777 /opt/collabora
```

Now make a copy of the collabora.yml and uncomment the _volumes_ definition in your `custom-collabora.yml`.
