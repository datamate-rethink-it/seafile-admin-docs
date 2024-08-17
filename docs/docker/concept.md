# Core Concept of the Seafile Deployment with Docker

A Seafile Server consists of multiple containers. Therefore let's talk about how you typically install such a system.

## Multi-container installations can be intricate

Usually, software relying on multiple containers involves a large and complex `docker-compose.yml` file. This complexity intensifies with optional containers, leading to bloated files or the need to manually manage additional services. This is quite a challenging task.

In addition, consistently maintaining correct indentation and syntax alignment in the YAML file demands caution. In summary, this process can be cumbersome, prone to errors, and challenging—particularly for beginners or users unfamiliar with docker-compose files.

Also Seafile requires typically that you start the docker container and then edit the configuration files after the first start. This is no longer up to date.

## We want to keep it simple ...

Instead of handling one extensive docker-compose.yml file and configure Seafile after the initial start, we present a more structured approach:

- We provide a set of individual yml files and one .env file.
- Each yml file defines commands for installing a specific component, such as the Seafile Server, web proxy (caddy), or an Office Editor.
- An accompanying .env file manages environment variables to configure your setup.
- Every configuration can be done in the .yml files.

## Layered structure

Think of the .env file as a recipe for your setup and the yml files are like ingredients.

!!! danger "Create copy for custom changes of the yml files"

    Generally, there's no need to modify the YAML files. We provide updated YAML files with each new Seafile version. However, if you wish to make alterations, create a copy and name it something like `custom-...yml`.

You can configure components in the .env file, determining which ones to install. Start with essential components like Seafile Server and Caddy web proxy.

Example in the .env file:

```bash
COMPOSE_FILE='caddy.yml,seafile-pe.yml'
```

By adding or removing yml files from this list, you control the composition during runtime, eliminating the need for a single, extensive docker-compose.yml file.

With this understanding, the subsequent installation descriptions should be straightforward to follow.

!!! success "Primarily, use copy and paste"

    Throughout the installation process, we strive to eliminate the need for manual file editing. Most commands can be executed by simply copying and pasting. Look for the copy-and-paste icon (:material-content-copy:) at the end of each code box, which conveniently copies the content to your clipboard. This helps prevent typing errors and ensures a smoother installation experience.
