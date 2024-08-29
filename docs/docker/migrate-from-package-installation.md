# Migrate From Package Installation Deployment Approach

If you want to migrate an existing Seafile installation that was installed without Docker (using [this installation method](https://manual.seafile.com/deploy_pro/download_and_setup_seafile_professional_server/)), you should follow these steps:

### 1. Check Your Seafile Version
Make sure that you're running the latest version of Seafile.

If this is not the case, please follow the relevant [upgrade guide(s)](https://manual.seafile.com/upgrade/upgrade/) before proceeding.

### 2. Backup: Files & Database
Create a backup of your files and your database. Please refer to the [docs](https://manual.seafile.com/maintain/backup_recovery/) for instructions.

### 3. Backup: Configuration Files
Create a backup of your configuration files (`/opt/seafile/conf`).

### 4. Stop Existing Services
Stop the existing services using the following commands:
```bash
/opt/seafile/seafile-server-latest/seahub.sh stop
/opt/seafile/seafile-server-latest/seafile.sh stop
sudo systemctl stop nginx
sudo systemctl disable nginx
sudo systemctl stop memcached
sudo systemctl disable memcached
```

### 5. Deploy Seafile
Follow the [installation instructions](./single-node.md) to deploy Seafile using our new Docker-based deployment.

The two Seafile installations should not clash since our new approach uses the paths `/opt/seafile-compose` and `/opt/seafile-server` by default.

### 6. Check Connectivity
Make sure that you can reach Seahub from your browser.

All the services should be healthy. You can check this by running `docker compose ps` in `/opt/seafile-compose`.

### 7. Migrate Configuration Files
Our new deployment approach only supports configuration based on **environment variables**.
The "old" configuration files still exist, but they are essentially immutable and overwritten every time the container starts.

In order to migrate your existing configuration files, you should carefully examine the configuration files from your old installation and migrate all relevant settings to `/opt/seafile-compose/.env`.
Please refer to the [configuration docs](../configuration/concept.md) for more information on how to do this.

Do not forget to restart Seafile using `docker compose up -d` once you're done.

### 8. Restore Files
Use `cp` to copy your `storage` directory (previously at `/opt/seafile/seafile-data/storage/`) to `/opt/seafile-server/seafile/seafile-data/storage`:

```bash
cp -R /opt/seafile/seafile-data/storage /opt/seafile-server/seafile/seafile-data/
```

### 9. Restore Databases
Run the following commands to restore your databases:

```bash
cd /opt/seafile-compose
docker exec -i mariadb sh -c 'exec mariadb -uroot -p"$MYSQL_ROOT_PASSWORD" ccnet_db' < ccnet-db.sql
docker exec -i mariadb sh -c 'exec mariadb -uroot -p"$MYSQL_ROOT_PASSWORD" seafile_db' < seafile-db.sql
docker exec -i mariadb sh -c 'exec mariadb -uroot -p"$MYSQL_ROOT_PASSWORD" seahub_db' < seahub-db.sql
```

**Warning:** This will drop all existing tables in the new installation!

### 10. Restart Seafile

Run the following commands to restart Seafile:

```bash
cd /opt/seafile-compose
docker compose down
docker compose up -d
```
