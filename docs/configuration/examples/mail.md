# Email configuration

Here are the necessary environment variables to configure your mail sending with your `.env`.
After a restart of the container, these new settings will be activated.

```bash
SEAHUB__EMAIL_USE_TLS='False'
SEAHUB__EMAIL_HOST='smtp.example.com'
SEAHUB__EMAIL_HOST_USER='username@example.com'
SEAHUB__EMAIL_HOST_PASSWORD='topsecret'
SEAHUB__EMAIL_PORT='5'
SEAHUB__DEFAULT_FROM_EMAIL='noreply@example.com'
SEAHUB__SERVER_EMAIL='noreply@example.com'
```
