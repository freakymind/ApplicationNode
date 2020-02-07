# Introduction
This is the same application written in Typescript to overcome from the javascript drawbacks and loop holes.

The reason behind the switch to Typescript is to follow best standards for a enterprise level application.

# Project Structure

Note :- To get the proper structure please click edit button of this file.

The idea is to follow different layers of architecture for this application. Where the UI layer will be fully design and mantained by Flutter or any other Front-End framework, Bussiness logic and Database access will be mantained here.



src
  !--config
  !     !--.ts (All the config file such as DB, Response handling etc)
  !     
  !--controller
  !     !-- .ts(Controller files of the application)
  !
  !--dao
  !     !-- .ts (All the DataBase interactions)
  !
  !--log
  !     !-- .ts (logginf configuration and log output file location)
  !
  !--routes
  !     !
  !     !--API 
  !     !    !--.ts (REST API's will be declared here.)
  !     !--validation 
  !          !--.ts (All the basic Request body validation will wrutten here)
  !--servces
  !     !-- .ts (All the business logic for applications will be defined here)
  !
  !--utill
  !     !-- .ts (All the utility file will be written here)
.env (environment variable configuration file)
 app.ts (main server file. Application entry point)
.gitignore (Git ignore file)
 