# Grafana App for Utilitarian

This Grafana app is used to easily distribute helpful dashboards to Utilitarian, a 
Multi Utility Automatic Meter Reading Solution.

## Setup

### Install the app
You install the app by downloading the zipfile from Github and placing it in your Grafana 
servers plugin folder at /var/lib/grafana/plugins or data/plugins.

After restart of Grafana your should see the the app under Configurations/Plugins. Navigate to the 
app settings and enable it.

### Set up datasource

You will need to add a Postgres datasource with connections details to your Utilitarian database.

Make sure you set up a read-only user since it is possible to run all SQL-commands from Grafana.

You should name the data source so that it contains the word "utilitarian" (case insensitive), example: Utilitarian Prod, test-utilitarian.
By doing so the datasource is automatically found by the imported dashboards. 

It is possible to have several instances of Utilitarian and switch between them in the dashboards. 

It could be useful to write a provision file for the datasource as described here: https://grafana.com/docs/administration/provisioning/#datasources 

### Dependencies

This app depends on grafana-piechart-panel that you can install using the grafana cli:

`grafana-cli plugins install grafana-piechart-panel`

You need to restart the grafana server after installation. 

## Usage

The Utilitarian app will be in the main menu to the left and all predefined dashboards can be found in 
the menu.

## Contributing / Feature request / Bug report

If you have any requests of other predefined dashboards that can help you in your daily work 
please open up an issue to discuss the solution.

If you have created a useful dashboard that you would like to share you are more than welcome to open up a pull request.

If you find a problem or have questions please open an issue.

## Future work

We have now started with just providing dashboards that uses direct connection to 
the database to pull in data.

But we are planning in the long term to provide a custom data source so that it is 
possible to pull data via the the Utilitarian API. We also want to provide some custom panels
that can hold useful data.

We are also designing our new metrics solution based on Prometheus and will when ready supply 
relevant dashboards to monitor the application. 





