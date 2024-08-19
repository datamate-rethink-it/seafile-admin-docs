# How to configure your Seafile Server

Seafile requires multiple configuration files. In the past these configuration files were generated on your first startup and then you had to update these configuration files and restart the seafile and seahub service inside the container. This approach was uncomfortable and has completely changed. From now one you should only use enviroment variables.

## Configuration with environment variables

Using this new deployment approach, you will only configure Seafile with enviroment variables. Any settings that you would normally configure in one of the configuration files can instead be made through environment variables.

The logic slighly varies for the different configuration files and will be described in all details in the **Configuration** Chapter.

**For now it is sufficient to understand, that you only have to add configurations in your .env file. All configuration will be passed automatically to the seafile container and then translated into configuration files.**

## Change of configuration files still work?

You can still change the content of your configuration files and restart the services inside the container, but after the next restart of the container, these changes will be overwritten.

!!! warning "This is a breaking change to the past"

    If you are familiar with the configuration of a Seafile Server, you know that this is breaking change. Forget about updating your configuration files directly. On every restart of the container, the configuration files arerecreated by the the container's entrypoint script and will overwrite all your settings.

## Update the yml files

Generally, there's no need to make changes to the different yml-files in most cases. Also your yml-files will be overriden with the next update.

If you really need to make changes to your yml-files, you should create a copy and rename the file. Adjustments should be made only by experienced Docker administrators.

```bash
# Example to create a custom copy:
cp seafile-pe.yml custom-seafile-pe.yml
```

To use your custom yml-file you have to update the value `COMPOSE_FILE` in your .env

## Let's Configure your Seafile Server

Now that you know how to configure your Seafile Server, jump to the **Configuration Section** to get a list of all available enviroment variables.
