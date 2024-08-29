# Configure your Seafile Server with environment variables

We already mentioned many times, that the main purpose of this new deployment approach - either with Docker or Kubernetes is an easy configuration with environment variables. In this chapter, you will get to know everything that you need to know about how this configuration approach works.

## Configuration files are recreated on every container start

Every time the container starts, the environment variables are taken and used to recreate all configuration files that seafile requires. Because Seafile uses different types of configuration files, there is a slightly different logic how the environment variables have to be provided. In general it can be said that you have to provide it like this:

```
PREFIX__KEY=VALUE
  or
PREFIX__SECTION__KEY=VALUE
```

Let's go into the details:

=== ".conf files"

    This is for valid for `ccnet.conf`, `seafdav.conf`, `seafevents.conf`, `seafile.conf`. Any setting can be passed with environment variables by following a certain naming convention:

    `PREFIX__SECTION__KEY` (where `PREFIX` is either `CCNET`, `SEAFDAV`, `SEAFEVENTS` or `SEAFILE`)

    **Notes**

    - The names of the environment variables are case-sensitive
    - The configuration values are always strings (since the files are .ini files)
    - Spaces in section names must be encoded using `0x20` (the hex representation of a space character)

    **Example 1**

    To change the MySQL connection pool size for ccnet, just add this to your .env file:

    ```
    CCNET__Database__MAX_CONNECTIONS='200'
    ```

    This generates the following section inside `ccnet.conf`:

    ```ini
    [Database]
    MAX_CONNECTIONS = 200
    ```

    ---

    **Example 2**

    To disable the file history for seafevents, just add this to your .env file:

    ```
    SEAFEVENTS__FILE0x20HISTORY__enabled='false'
    ```

    This generates the following section inside `seafevents.conf`:

    ```ini
    [FILE HISTORY]
    enabled = false
    ```

=== "seahub_settings.py"

    You can customize the way `seahub_settings.py` is being generated by setting environment variables that start with `SEAHUB__`.

    Similar to `.conf` files, the script that generates the configuration files looks for environment variables that follow this pattern: `SEAHUB__SETTING_NAME`

    **Example 1**

    To enable registration, just add this to your .env file:

    ```
    SEAHUB__ENABLE_SIGNUP='true'
    ```

    This generates the following setting inside `seahub_settings.py`:

    ```python
    ENABLE_SIGNUP = True
    ```

    ---

    **Example 2**

    To set the minimum password length, just add this to your .env file:

    ```
    SEAHUB__USER_PASSWORD_MIN_LENGTH='16'
    ```

    This generates the following setting inside `seahub_settings.py`:

    ```python
    USER_PASSWORD_MIN_LENGTH = 16
    ```

    The python type is automatically deduced by the variable's value. There's no need to add extra quotes around values.

    ---

    **Special Cases**

    A few settings are handled separately since they do not use simple key-value pairs:

    *1. CACHE*

    You can use the following environment variables to customize the caching backend used by `seahub`:

    - `SEAHUB__CACHE_BACKEND` (`memcached` or `redis`; default is `memcached`)
    - `SEAHUB__CACHE_HOST`
    - `SEAHUB__CACHE_PORT`

    There's no necessity to modify these values if you use the provided `seafile-pe.yml` file.

    *2. DATABASE*

    You can use the following environment variables to customize the database accessed by `seahub`:

    - `DB_HOST` (default is `mariadb`)
    - `DB_ROOT_PASSWD`

    *3. SAML Attribute Mapping*

    Seafile requires you to specify the attribute mapping when using SAML.
    You can use environment variables prefixed with `SEAHUB__SAML_ATTRIBUTE_MAPPING__` in order to do this.

    Example:

    ```
    SEAHUB__SAML_ATTRIBUTE_MAPPING__name=display_name
    SEAHUB__SAML_ATTRIBUTE_MAPPING__mail=contact_email
    ```

    This would generate the following configuration block inside `seahub_settings.py`:

    ```python
    SAML_ATTRIBUTE_MAPPING = {
        'name': ('display_name', ),
        'mail': ('contact_email', ),
    }
    ```

=== "gunicorn.conf.py"

    Usually there is no need to make any changes to this file.
    Therefore it is currently not possible to customize this file. The file is overwritten on each restart.

=== "seafile.nginx.conf"

    It is currently not possible to customize this file. The file is overwritten on each restart.

    NGINX listens on port 80. There should always be a reverse proxy in front of it that also handles TLS termination (e.g. Caddy).

    Just add a key value pair to the `.env` and run `docker compose up -d`. This will restart your Seafile Server and the new value is written to the configuration files of seafile.

If you have an idea which variable you would like to define, just have a look at the complete list of all variables.