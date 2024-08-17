# Welcome to the Seafile Admin Manual

This manual serves as an **extension** to the [official Seafile Administration Manual](https://manual.seafile.com). It introduces a **new deployment approach** tailored for ease and efficiency, particularly using Docker images and environment variable-based configuration.

!!! example "New deployment method from datamate"

    Maintained by [Datamate GmbH & Co. KG](https://datamate.org), the primary support and sales partner of Seafile in Europe, this manual provides guidance on the simplified installation and configuration process that we have developed to enhance the deployment and management of Seafile.

    Only use this if you are aware of the differences regarding the official seafile deployment.

!!! warning "Currently Beta"

    This version is brand new and still a work in progress; it is not recommended for production use unless you are already familiar with Seafile.

## Why a New Deployment Approach?

This new deployment approach focuses on simplifying the installation of Seafile using Docker images and managing the entire configuration through environment variables.

The key advantages of this approach include:

- **Quick and Easy Deployment:** Deploy Seafile within minutes, reducing the time and effort traditionally required.
- **Centralized Configuration Management:** With all configurations handled in a single location, administration becomes more straightforward and less prone to error.
- **Improved Documentation:** Documenting changes is simplified, providing clear and concise records of configurations.

!!! success "We :heart: Docker and Kubernetes"

    This approach was primarily driven by the need to create a Kubernetes-compatible deployment, offering flexibility and scalability for modern cloud environments.

## Is the Seafile Version Different?

No, Seafile is still the same

It’s important to note that while this deployment utilizes custom Seafile Professional Docker images (available at [Docker Hub](https://hub.docker.com/r/datamate/seafile-professional)) but the **core Seafile software remains unchanged**. The primary modification lies in the initialization scripts, which have been adapted to allow for configuration through environment variables.

For those interested in the technical details of how these Seafile Professional images are built, check out our [Dockerfile](https://github.com/datamate-rethink-it/seafile-release/blob/main/docker/Dockerfile) we use to build our containers available at our :simple-github: Github repository [datamate-rethink-it/seafile-release](https://github.com/datamate-rethink-it/seafile-release/).

!!! warning "Currently we support only Seafile Professional"

    This new deployment supports only Seafile Professional. As a result, you will need a Seafile license, or you can use the free version, which is limited to a maximum of three users. Seafile Community might only be used for a Single Node installation via Docker. For a cluster setup you will always need a Seafile License.

    If you need a license, feel free to send us a request for a quote at **[seafile@datamate.org](mailto:seafile@datamate.org)**.

Alright, let's get started with deploying Seafile, the world’s fastest and most reliable self-hosted sync-and-share solution.
