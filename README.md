# FAU CEN 5035-001: Software Engineering
# Cloud Intro and Azure Tutorial

## Materials
* [Slides - Cloud Intro Presentation](https://docs.google.com/presentation/d/e/2PACX-1vQL9sSQ1ryhFlyImf3MPyS6j2GlB6cKY7BipBpSeY3h4rF6lQVONDx_kWr5ifzRfh0JYZEpgRkfXvDF/pub?start=false&loop=false&delayms=3000)
* YouTube Video: https://youtu.be/jOaSZqGC7Pg

[![YouTube Video](https://img.youtube.com/vi/jOaSZqGC7Pg/0.jpg)](https://www.youtube.com/watch?v=jOaSZqGC7Pg)

![Architecture Pic](/docs/architecture.drawio.png)

## Links

* https://expressjs.com/
* https://hub.docker.com/_/mongo
* https://hub.docker.com/_/node
* https://www.docker.com/products/docker-desktop
* https://www.mongodb.com/products/compass


## Services

* Azure Portal: https://azure.microsoft.com/en-us/free/students/
* Application Insights: https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview
* Azure Queue Storage: https://docs.microsoft.com/en-us/azure/storage/queues/storage-queues-introduction
* Azure Cosmos DB: https://azure.microsoft.com/en-us/services/cosmos-db/#overview
* SendGrid: https://sendgrid.com/pricing/

## Azure Services

* App Services
* Cosmos DB
* Azure Queue Storage
* Application Insights

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
