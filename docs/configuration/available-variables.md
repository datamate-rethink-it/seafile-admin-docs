---
hide:
  - toc
---

# Available variables

## Seafile

the main sync-and-share component ...

| Variable                             | Description                                                                                                 | Value     |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------- | --------- |
| `SEAFILE__quota__default`            | Global default quota for all users in Gigabyte.                                                             | 2         |
| `SEAFILE__quota__library_file_limit` | Maximum number of files allowed in a library. If limit is reached, it is not possible to upload more files. | ""        |
| `CCNET__Database__ENGINE`            | ...                                                                                                         | "mysql"   |
| `CCNET__Database__HOST`              | ...                                                                                                         | "mariadb" |

## Seahub

The webinterface of seafile...

| Variable                                      | Description                                                                                                                                                                                  | Value     |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `SEAHUB__ENABLE_SIGNUP`                       | ...                                                                                                                                                                                          | "False"   |
| `SEAHUB__ACTIVATE_AFTER_REGISTRATION`         | Activate or deactivate user when registration is complete. If set to `False`, new users need to be activated by admin in the admin panel.                                                    | "False"   |
| `SEAHUB__SEND_EMAIL_ON_ADDING_SYSTEM_MEMBER`  | Whether to send an email when a system admin adds a new member.                                                                                                                              | "True"    |
| `SEAHUB__SEND_EMAIL_ON_RESETTING_USER_PASSWD` | Whether to send an email when a system admin resets a user's password.                                                                                                                       | "True"    |
| `SEAHUB__NOTIFY_ADMIN_AFTER_REGISTRATION`     | Send system admin notify email when user registration is complete.                                                                                                                           | "True"    |
| `SEAHUB__LOGIN_REMEMBER_DAYS`                 | Remember days for login.                                                                                                                                                                     | "7"       |
| `SEAHUB__LOGIN_ATTEMPT_LIMIT`                 | Attempt limit before showing a captcha when logging in.                                                                                                                                      | "3"       |
| `SEAHUB__FREEZE_USER_ON_LOGIN_FAILED`         | Deactivate user account when login attempts exceed the limit.                                                                                                                                | "False"   |
| `SEAHUB__USER_PASSWORD_MIN_LENGTH`            | Minimum length for user's password.                                                                                                                                                          | "6"       |
| `SEAHUB__USER_PASSWORD_STRENGTH_LEVEL`        | LEVEL based on four types of input: num, upper letter, lower letter, other symbols. '3' means password must have at least 3 types of the above.                                              | "3"       |
| `SEAHUB__USER_STRONG_PASSWORD_REQUIRED`       | When `True`, check password strength level; only STRONG (or above) is allowed.                                                                                                               | "False"   |
| `SEAHUB__FORCE_PASSWORD_CHANGE`               | Force user to change password when admin adds/resets a user.                                                                                                                                 | "True"    |
| `SEAHUB__SESSION_COOKIE_AGE`                  | Age of cookie, in seconds (default: 2 weeks).                                                                                                                                                | "1209600" |
| `SEAHUB__SESSION_EXPIRE_AT_BROWSER_CLOSE`     | Whether a user's session cookie expires when the Web browser is closed.                                                                                                                      | "False"   |
| `SEAHUB__SESSION_SAVE_EVERY_REQUEST`          | Whether to save the session data on every request.                                                                                                                                           | "False"   |
| `SEAHUB__ENABLE_WIKI`                         | Whether to enable the "published library" feature.                                                                                                                                           | "True"    |
| `SEAHUB__ENABLE_WEBDAV_SECRET`                | Enable the feature to allow users to specify a password for WebDAV login.                                                                                                                    | "True"    |
| `SEAHUB__WEBDAV_SECRET_MIN_LENGTH`            | Minimum length for WebDAV secret.                                                                                                                                                            | "8"       |
| `SEAHUB__WEBDAV_SECRET_STRENGTH_LEVEL`        | LEVEL for WebDAV secret, based on four types of input: num, upper letter, lower letter, other symbols. '1' means password must have at least 1 type of the above.                            | "1"       |
| `SEAHUB__ENABLE_FORCE_2FA_TO_ALL_USERS`       | Force all users to log in with two-factor authentication.                                                                                                                                    | "True"    |
| `SEAHUB__ENABLE_REPO_SNAPSHOT_LABEL`          | Turn on this option to let users add a label to a library snapshot.                                                                                                                          | "False"   |
| `SEAHUB__ENABLE_ENCRYPTED_LIBRARY`            | Enable creation of encrypted libraries.                                                                                                                                                      | "True"    |
| `SEAHUB__ENCRYPTED_LIBRARY_VERSION`           | Version for encrypted library. Should only be `2` or `4`. Version 3 is insecure (using AES128 encryption) and is not recommended anymore.                                                    | "2"       |
| `SEAHUB__REPO_PASSWORD_MIN_LENGTH`            | Minimum length for the password of an encrypted library.                                                                                                                                     | "8"       |
| `SEAHUB__SHARE_LINK_FORCE_USE_PASSWORD`       | Force use of a password when generating a share/upload link.                                                                                                                                 | "False"   |
| `SEAHUB__SHARE_LINK_PASSWORD_MIN_LENGTH`      | Minimum length for the password of a share link.                                                                                                                                             | "8"       |
| `SEAHUB__SHARE_LINK_PASSWORD_STRENGTH_LEVEL`  | Level for the password of a share/upload link, based on four types of input: num, upper letter, lower letter, other symbols. '3' means the password must have at least 3 types of the above. | "3"       |
| `SEAHUB__SHARE_LINK_EXPIRE_DAYS_DEFAULT`      | Default expiration days for a share link. Once this value is configured, the user can no longer generate a share link with no expiration time. If not set, this value will be used.          | "5"       |
| `SEAHUB__SHARE_LINK_EXPIRE_DAYS_MIN`          | Minimum expiration days for a share link.                                                                                                                                                    | "3"       |
| `SEAHUB__SHARE_LINK_EXPIRE_DAYS_MAX`          | Maximum expiration days for a share link.                                                                                                                                                    | "8"       |
| `SEAHUB__UPLOAD_LINK_EXPIRE_DAYS_DEFAULT`     | Default expiration days for an upload link. Once this value is configured, the user can no longer generate an upload link with no expiration time. If not set, this value will be used.      | "5"       |
| `SEAHUB__UPLOAD_LINK_EXPIRE_DAYS_MIN`         | Minimum expiration days for an upload link.                                                                                                                                                  | "3"       |
| `SEAHUB__UPLOAD_LINK_EXPIRE_DAYS_MAX`         | Maximum expiration days for an upload link.                                                                                                                                                  | "8"       |
| `SEAHUB__SHARE_LINK_LOGIN_REQUIRED`           | Force user login when viewing a file/folder share link.                                                                                                                                      | "True"    |
| `SEAHUB__ENABLE_WATERMARK`                    | Enable watermark when viewing (not editing) a file in a web browser.                                                                                                                         | "True"    |
| `SEAHUB__DISABLE_SYNC_WITH_ANY_FOLDER`        | Disable sync with any folder.                                                                                                                                                                | "True"    |
| `SEAHUB__ENABLE_REPO_HISTORY_SETTING`         | Enable or disable library history settings.                                                                                                                                                  | "True"    |
| `SEAHUB__ENABLE_USER_CREATE_ORG_REPO`         | Enable or disable normal users from creating organization libraries.                                                                                                                         | "True"    |
| `SEAHUB__ENABLE_SHARE_TO_ALL_GROUPS`          | Enable or disable user sharing of libraries with any group.                                                                                                                                  | "True"    |
| `SEAHUB__ENABLE_USER_CLEAN_TRASH`             | Enable or disable users to clean trash.                                                                                                                                                      | "True"    |
| `SEAHUB__ENABLE_SHARE_LINK_REPORT_ABUSE`      | Add a report abuse button on download links. Users can report abuse on the share link page.                                                                                                  | "True"    |

## Seafevents

Background tasks and ...

| Variable                                 | Description                                                                                                            | Value                               |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `SEAFEVENTS__DATABASE__type`             | **Deprecated**. Only `mysql` is allowed. `sqlite` is no longer supported.                                              | "mysql"                             |
| `SEAFEVENTS__DATABASE__host`             | IP or URL of the sql database.                                                                                         | "mariadb"                           |
| `SEAFEVENTS__DATABASE__port`             | Port used for the sql connection.                                                                                      | 3306                                |
| `SEAFEVENTS__DATABASE__username`         | ...                                                                                                                    | "root"                              |
| `SEAFEVENTS__DATABASE__password`         | ...                                                                                                                    | ""                                  |
| `SEAFEVENTS__DATABASE__name`             | ...                                                                                                                    | "seahub_db"                         |
| `SEAFEVENTS__STATISTICS__enabled`        | Enable statics tracking for seafile server.                                                                            | "true"                              |
| `SEAFEVENTS__SEAHUB0x20EMAIL__enabled`   | Enable email notifications when there are new or unread notifications for the user. Requires a configured SMTP_SERVER. | "true"                              |
| `SEAFEVENTS__SEAHUB0x20EMAIL__interval`  | Define the interval of sending notification emails. Can be s(seconds), m(minutes), h(hours), d(days)                   | "30m"                               |
| `SEAFEVENTS__FILE0x20HISTORY__enabled`   | Enable file history tracking in the database for some specific file types for faster access                            | "true"                              |
| `SEAFEVENTS__FILE0x20HISTORY__threshold` | Threshold time for merging historical versions in minutes.                                                             | 5                                   |
| `SEAFEVENTS__FILE0x20HISTORY__suffix`    | Define file types to enable threshold for recording history versions as comma-separated list.                          | "md,txt,ppt,pptx,doc,docx,xls,xlsx" |
