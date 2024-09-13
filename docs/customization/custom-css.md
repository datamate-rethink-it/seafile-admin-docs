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
