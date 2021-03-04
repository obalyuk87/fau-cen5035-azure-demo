# FAU CEN 5035
# Messages REST API

## Links

* https://expressjs.com/
* https://hub.docker.com/_/mongo
* https://hub.docker.com/_/node
* https://www.docker.com/products/docker-desktop
* https://www.mongodb.com/products/compass


## Services

* Azure Portal: https://azure.microsoft.com/en-us/free/students/
* SendGrid: https://sendgrid.com/pricing/
* Application Insights: https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview


## Learning

* https://docs.microsoft.com/en-us/learn/azure/
* https://docs.docker.com/get-started/


## Helpful Scripts

```bash
docker run -d --name mongodb-messages -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
    -e MONGO_INITDB_ROOT_PASSWORD=secret \
    mongo
```
