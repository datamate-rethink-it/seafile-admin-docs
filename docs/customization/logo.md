# Custom Images

You can use the following volume mounts inside your custom `.yml` file to modify the site logo, login background image and favicon:

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
