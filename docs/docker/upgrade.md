# Upgrade your Docker Deployment

Updating/Upgrade (we don't differenciate) a Seafile Server should take just a few seconds. Simply pull the latest Docker images, restart the containers, and let the system automatically handle necessary database updates. Within moments, all essential services of the Seafile Server will be accessible.

## How to update Seafile Server

All that is necessary is just ran this command to update Seafile and all additional components.

```bash
cd /opt/seafile-compose && \
wget -c https://github.com/datamate-rethink-it/seafile-release/releases/latest/download/seafile-compose.tar.gz \
-O - | tar -xz -C /opt/seafile-compose && \
docker compose pull
docker compose down
docker compose up -d
```

All your configurations that you have done so far in your .env will be taken to create your configuration files correctly.

!!! warning "The default yml files will be overwritten! Use custom files instead."

    This command replaces all predefined yml files in your `/opt/seafile-compose` folder. It will not touch your `.env` file and your *custom* yml files. If you made some changes to the predefined yml files, make sure to save these changes and follow the recommendations to create custom copies in the future.

After some seconds your Seafile Server should be reachable again. You can check the current version of your Seafile Server opening the URL `https://<your-seafile-domain>/api2/server-info`.
