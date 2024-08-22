# Customize your Webinterface

## Custom Images

You can use the following volume mounts inside `seafile-pe-cluster-frontend.yml` to modify the site logo, login background image and favicon:

```yml
services:
  seafile:
    # ...
    volumes:
      - ./your-custom-logo.png:/shared/seafile/seahub-data/custom/mylogo.png:ro
      - ./your-custom-favicon.ico:/shared/seafile/seahub-data/custom/favicon.ico:ro
      - ./your-custom-login-bg.jpg:/shared/seafile/seahub-data/custom/login-bg.jpg:ro
```

**Notes:**

- The container paths should not be modified since seahub is configured to access these paths
- You must configure these volume mounts **on all frontend nodes**
- Seahub needs to be restarted

## Custom Styles

To use custom styles, create a css file in your seafile-compose directory and mount it into the container. Also add these two variables.

```yml
services:
  seafile:
    # ...
    environment:
      # ...
      - SEAHUB__ENABLE_BRANDING_CSS=True
      - SEAHUB__BRANDING_CSS=custom/custom.css
    volumes:
      - ./your-custom-styles.css:/shared/seafile/seahub-data/custom/custom.css:ro
```
