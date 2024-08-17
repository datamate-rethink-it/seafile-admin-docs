# Single-Node installation of a Seafile Server

Alright, let's dive in. This article will guide you through the process of installing a Seafile server with a Caddy web server. By the end of this article, your new Seafile server will be accessible via HTTPS with your custom domain. To begin, open a root shell on your server.

!!! success "Installation made easy"

    Most commands that are required to install a Seafile Server are provided in a way, that you can just simply copy and paste the commands into your command line. Use the (:material-content-copy:) icon at the top-right of the code boxes.

## Install basic tools

The following command installs basic tools that are used in the following manual. Usually all these tools are already installed on your linux server.

```bash
apt update && \
apt -y install curl pwgen tree wget tar nano
```

## Install Docker and Docker Compose Plugin

At [get.docker.com](https://get.docker.com), you'll find a script designed for the easy and convenient installation of the Docker Engine. While the script isn't recommended for production environments, it has shown no issues in our observations. You can effortlessly install Docker using this single command:

```bash
curl -fsSL get.docker.com | bash
```

Alternatively, you can opt to follow [Docker's official installation instructions](https://docs.docker.com/engine/install/)

## Install Seafile Server

This installation assumes that all Seafile components are installed under `/opt`.
We highly recommended to keep this folder structure. All articles in the manual assume Seafile's installation in this directory.

#### 1. Create basic structure

Simply copy and paste the following command into your command line to execute. This code will download the latest yml files from repository [:simple-github: seafile-release](https://github.com/datamate-rethink-it/seafile-release).

```bash
mkdir /opt/seafile-compose && \
cd /opt/seafile-compose && \
wget -c https://github.com/datamate-rethink-it/seafile-release/releases/latest/download/seafile-compose.tar.gz \
-O - | tar -xz -C /opt/seafile-compose && \
cp -n .env-release .env
```

To get an overview of the downloaded files, use the `tree` command.

```bash
tree -a /opt/seafile-compose
```

The expected output should appear as follows.

```bash
# this should be the output of the tree command...
/opt/seafile-compose
├── caddy.yml
├── collabora.yml
├── .env
├── .env-release
├── .galera.yml
├── onlyoffice.yml
├── restic.yml
├── seafile-pe-cluster-backend.yml
├── seafile-pe-cluster-frontend.yml
├── seafile-pe.yml
├── seafile_storage_classes.json
```

!!! warning "Don't change these yml files"

    Generally, there's no need to make changes to the different .yml files in most cases. Adjustments should be made only by experienced Docker administrators and then you should create a copy and rename the file.

    ```bash
    # Example to create a custom copy:
    cp seafile-pe.yml custom-seafile-pe.yml
    ```

#### 2. Create a directory for Elasticsearch

Elastisearch does not run as root user and therefore it is necessary to create the directory for the volume mount upfront. Otherwise elasticsearch has no permission to write into this directory.

```bash
mkdir -p /opt/seafile-elasticsearch/data && \
chown -R 1000 /opt/seafile-elasticsearch
```

#### 3. Generate some secrets

Seafile is configured with the hidden `.env` file (=enviroment configuration file) that is stored in the folder `/opt/seafile-compose`.

We utilize `pwgen` to create secure passwords for your _admin account_, the _database root password_ and other stuff. The following commands will generate such passwords and include them in the `.env'` file.

```bash
sed -i "s/^SEAFILE_ADMIN_PASSWORD=.*/SEAFILE_ADMIN_PASSWORD=$(pwgen 40 1)/" .env
sed -i "s/^SEAFILE_MYSQL_ROOT_PASSWORD=.*/SEAFILE_MYSQL_ROOT_PASSWORD=$(pwgen 40 1)/" .env
sed -i "s/^SEAHUB__SECRET_KEY=.*/SEAHUB__SECRET_KEY=$(pwgen 40 1)/" .env
sed -i "s/^SEAFILE__notification__jwt_private_key=.*/SEAFILE__notification__jwt_private_key=$(pwgen 40 1)/" .env
```

Alternatively, you can manually add your own passwords.

#### 4. Complete settings in the .env file

Open the `.env` file with the editor of your choice, like `nano` or `vim`.

```bash
nano /opt/seafile-compose/.env
```

Continue setting up your Seafile server by adjusting only three more variables. These are:

- TIME_ZONE
- SEAFILE_SERVER_HOSTNAME
- SEAFILE_ADMIN_EMAIL

```python
# components to be used
COMPOSE_FILE='caddy.yml,seafile-pe.yml' # (1)!
COMPOSE_PATH_SEPARATOR=','

# system settings
TIME_ZONE='Europe/Berlin' # (2)!

# seafile server base url
SEAFILE_SERVER_HOSTNAME='seafile.example.com' # (3)!

# initial web admin
SEAFILE_ADMIN_EMAIL='me@example.com'
SEAFILE_ADMIN_PASSWORD='topsecret'

# database
SEAFILE_MYSQL_ROOT_PASSWORD=

# seahub secret key
SEAHUB__SECRET_KEY=

# jwt private key for seafile notification server
SEAFILE__notification__jwt_private_key=
```

1.  COMPOSE_FILE is a comma separated list **without spaces**. This list defines which components should run on this server. Leave `caddy.yml` and `seatable-server.yml` at the beginning. You will add more components at a later time.
2.  Get a [list of timezones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) from Wikipedia.
3.  Select your domain or subdomain that points to your Server (without https://). You have to set an A-Record or CNAME pointing to your IP.
    <br>If you don't have an URL and want to use an IP, then use the free service nip.io and add your-ip.nip.io (e.g. 5.35.28.112.nip.io).

#### 5. Get a license

!!! warning "Seafile Enterprise requires a license to start"

    Seafile use for up to three users is free. If you enjoy Seafile and are contemplating a larger license, [please get in touch with us](mailto:seafile@datamate.org).

We assume that you have a license and that you save it to `/opt/seafile-compose/seafile-license.txt`.

If you don't have a license, then comment the part in the yml file, where it mounts the license file to the server like in the following example.

```bash
services:
  seafile:
    ...
    volume:
        - /opt/seafile-server:/shared
        #- type: bind
        #  source: "./seafile-license.txt"
        #  target: "/shared/seafile/seafile-license.txt"
        #  read_only: ${SEAFILE_LICENSE_FORCE_READ_ONLY:-false}
```

#### 5. Fire up the server

Now it is time to run the following command to download and initiate the docker images for the initial setup. This process will require some time.

```bash
docker compose up -d
```

If the process completed successfully, you can now open your web browser and access Seafile using the URL you specified in your `.env` file.
Sign in using the credentials you provided in the same file.

:partying_face: **Congratulations!** You've completed the basic setup of your Seafile Server.

## Next steps

Your Seafile journey has just begun! While you can dive straight into Seafile, uploading some files, adding users, utilizing the API, and more, there's an array of possibilities to explore.
