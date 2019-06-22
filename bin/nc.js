#!/usr/bin/env node
const program = require("commander");
const figlet = require("figlet");
const chalk = require("chalk");
const Init = require("./init");

program
  .version("0.0.1", "-v, --version")
  .option("-a, --about", "View about section of  NodeCloud CLI")
  .option("-i, --init", "Initialize provider")
  .option("-c, --config", "Configure")
  .option("-cm, --compute", "Create EC2 / Compute Engine / Virtual Machine")
  .option("-st, --storage", "Create Storage S3 / Cloud Storage / Blob")
  .option("-net, --network", "Create Balancers")
  .option(
    "-db, --database",
    "Create Databases RDS / Cloud SQL / Azure Database"
  )
  .option("-au, --auth", "Create Identity and Access Management")
  .parse(process.argv);

if (program.about) {
  figlet.text(
    "NodeCloud CLI",
    {
      font: "slant",
      horizontalLayout: "default",
      verticalLayout: "default"
    },
    function(err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(chalk.blue(data));
      console.log(chalk.blue("© Copyright 2019 Cloudlibz."));
    }
  );
}

if (program.init) {
  Init();
}