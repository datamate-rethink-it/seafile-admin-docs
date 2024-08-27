# Deploy ONLYOFFICE Documentserver

OnlyOffice offers real-time collaboration with office documents in your browser. As soon as you open a file from Seafile, OnlyOffice opens in a new browser tab and allows real time collaboration. As soon as the last user exits the document by closing his browser window, the document is saved back to the Seafile storage.

Access takes place via the public URL via HTTPS. So that OnlyOffice cannot be used by other systems, a shared secret in the form of a JWT key is used.

!!! warning "You have to decide: Collabora OR OnlyOffice"

    Collabora and OnlyOffice are both office editors. You have to decide which one you would like to use. You can not use both in parallel.

!!! note "Use a separate host, if you expect many users"

    OnlyOffice can be installed on the same host as Seafile Professional Edition. If OnlyOffice is used regularly and by many users, the host should be fitted with sufficient cores and RAM or you should move OnlyOffice to a separate host.

This article assumes that Seafile Professional Edition is installed and is running.

## Installation

#### Activate Onlyoffice

To install OnlyOffice, include `onlyoffice.yml` in the `COMPOSE_FILE` variable within your `.env` file. This instructs Docker to download the required images for OnlyOffice.

Simply copy and paste (:material-content-copy:) the following code into your command line:

```bash
sed -i "s/COMPOSE_FILE='\(.*\)'/COMPOSE_FILE='\1,onlyoffice.yml'/" /opt/seafile-compose/.env
```

#### Generate JWT-Token and set required environment variables.

Secure communication between Seafile and OnlyOffice is granted by a shared secret. The following command will generate such a shared secret and write all necessary environment variables to your `.env` file:

```bash
cd /opt/seafile-compose
source .env
echo -e "\n# OnlyOffice" >> .env
echo "ONLYOFFICE_JWT_SECRET='$(pwgen -s 40 1)'" >> .env
echo "SEAHUB__ENABLE_ONLYOFFICE=True" >> .env
echo "SEAHUB__ONLYOFFICE_APIJS_URL='https://${SEAFILE_SERVER_HOSTNAME}:6233/web-apps/apps/api/documents/api.js'" >> .env
echo "SEAHUB__ONLYOFFICE_FILE_EXTENSION='doc,docx,ppt,pptx,xls,xlsx,odt,fodt,odp,fodp,ods,fods'" >> .env
echo "SEAHUB__ONLYOFFICE_EDIT_FILE_EXTENSION='docx,pptx,xlsx'" >> .env
echo "SEAHUB__ONLYOFFICE_FORCE_SAVE=True" >> .env
echo 'SEAHUB__ONLYOFFICE_JWT_SECRET=${ONLYOFFICE_JWT_SECRET}' >> .env
```

#### Download onlyoffice and restart

One more step is necessary to download the OnlyOffice container and restart the Seafile service.

```bash
cd /opt/seafile-compose
docker compose down
docker compose up -d
```

OnlyOffice takes some some minutes for the initial start. If you get an error message when clicking an office file in Seafile, be patient and try again after one minute. Onlyoffice is ready, if a new browser window opens with your office document. Any user with access to this base can now open this document with OnlyOffice.

## Check if installation is complete

Try to open `https://<your-seafile-url>:6233/welcome`. You should see a welcome page like this.

![OnlyOffice Welcome page](https://www.linuxbabe.com/wp-content/uploads/2016/12/onlyoffice-docs-https-ubuntu.png)

If this does not happen, execute `docker compose logs onlyoffice -f` to get more details about the startup of OnlyOffice.
