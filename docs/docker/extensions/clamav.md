# Antivirus Scan with ClamAV

Seafile can scan uploaded files for malicious content in the background. When configured to run periodically, the scan process scans all existing libraries on the server. In each scan, the process only scans newly uploaded/updated files since the last scan. For each file, the process executes a user-specified virus scan command to check whether the file is a virus or not. Most anti-virus programs provide command line utility for Linux. The following instructions explain the configuration with the open source antivirus software ClamAV.

In addition to the background checks, Seafile offers the possibility to deny file upload via upload link or even the webinterface if a virus is found.

## Configuration of background scans

### Change the .env file

To install the antivirus scan solution ClamAV, include `clamav.yml` in the `COMPOSE_FILE` variable within your `.env` file. This instructs Docker to download the required images.

Simply copy and paste (:material-content-copy:) the following code into your command line:

```bash
sed -i "s/COMPOSE_FILE='\(.*\)'/COMPOSE_FILE='\1,clamav.yml'/" /opt/seafile-compose/.env
```

### Set the required environment variables

To activate the scans, just add these variables to your .env file:

```bash
SEAFILE__virus_scan__scan_command='clamdscan'
SEAFILE__virus_scan__virus_mode='1'
SEAFILE__virus_scan__nonvirus_mode='0'
SEAFILE__virus_scan__scan_interval='5'
SEAFILE__virus_scan__scan_size_limit='20'
SEAFILE__virus_scan__threads='2'
```

Afterwards restart your seafile container with these commands:

```bash
cd /opt/seafile-compose && \
docker compose up -d
```

## Antivirus Scan for Upload Links

You may also configure Seafile to scan files for virus upon the files are uploaded. This only works for files uploaded via web interface or web APIs. Files uploaded with syncing or SeaDrive clients cannot be scanned on upload due to performance consideration.

```bash
SEAHUB__ENABLE_UPLOAD_LINK_VIRUS_CHECK='True'
```

## Antivirus Scan for Web Uploads

Since Pro Edition 11.0.7, you may scan all uploaded files via web APIs by adding the option to your .env file:

```bash
SEAFILE__fileserver__check_virus_on_web_upload='true'
```
