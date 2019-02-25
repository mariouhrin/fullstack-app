# Fullstack app example

## Overview

Simple application dashboard showking customers data with additional CRUD operatoins

## Getting started

### Prerequisites

required
- Docker
- Node.js (8+)
- yarn

optional
- VSCode

### Install and run

run this commnads step by step

- `yarn` (install all dependencies)
- `yarn global add nodemon` (install nodemon globally)
- `yarn copy:env` (copy env.example to .env in yarn workspaces)
- `yarn start` (start the app)

last command will run postgresql in docker container, Hapi.js server and frontend app using webpack-dev-server

app will be running on `http://localhost:8080`, try to change the zoom if the components are bigger or smaller

## Used Tools

- **Backend**
  - Docker
  - Postgresql
  - Hapi.js (server)
  - Typescript

- **Frontend**
  - React (v16.8 with Hooks)
  - Webpack (4+)
  - Babel (7+)
  - Axios
  - Autoprefixer
  - Purecss (css framework)

## Components structure

- **First table**:
  - show all customers data
  - buttons with CRUD operations
    - create and update buttons will pop up a modal window with a form for submitting the data to the server
    - delete button will remove customer informations from the server
  - the whole component dynamically re-renders after successful CRUD operation
  - extra table features:
    - data filtering inputs
    - sorting data functionality by clicking on headers
    - pagination
    - dropdown to increase number of rows to show
    - horizontal scrolling (use touchpad or hover over bottom of last table row and it will appear)

- **Second table**:
  - show all inactive customers data
  - dynamically re-renders after successful CRUD operation
  - extra features:
    - data filtering inputs
    - sorting data by clicking on headers
    - pagination
    - dropdown to increase number of rows to show
    - horizontal scrolling (use touchpad or hover over bottom of last table row and it will appear)

## Implementation of requirements

**1. & 2. requirements**:

- Table component was chosen because it shows detailed information about customers
- Data is automatically sorted by customers negative balance which helps user to quickly call them
- Table data can be easily filtered, sorted or visually expanded using dropdown
- Moreover, table is combined with buttons which provides CRUD logic and after CRUD operations whole component always re-renders
- If user clicks on create or update button, the modal will pop up with form component inside
- The form will show only necessary informations (inputs) for the user, other fields would be generated (create) or remains the same (update)
- In summary, first table component contains quite a lot of functionality which makes life easier for the user

**3. requirement**:

- Total balance is shown in top left side of the page because global KPI needs to have good visibility
- This component always re-render after CRUD operation represented by buttons (Create Customer, update, delete)

**4. requirement**:

- Again, I chose table because it is important to show more informations (fields) for better communication
- More fields can provide better informations overview about inactive customers
- The second table has same functionality like the first table but not have buttons implementing CRUD logic
- It contains one additional field - calculated discount
- This component always re-render after CRUD operation represented by buttons (Create Customer, update, delete)

## App extension / additional functionality

- **Functional**:
  - Machine learning algorithms:
    - To create customer segments or personas for personalized newsletters (special offers, discounts etc.)
    - To find hidden patterns (important features) with most significant impact on sales
    - A/B testing or other campaigns on webpage to find what kind of behaviour drives the sales up
    - Using ML to find customer triggers for visiting the webpage

  - Emails:
    - Send automatic alert notifications for the user (Jim) if some cusotmer will have negative balance
    - For newsletter personalization as an alternative to phone calls
    - To gather some useful informations from social media and use it for creating personas or other analysis

  - Charts:
    - Add filterable line charts to show customers sales / activity over time with filters like gender, region, discrete age segments
    - It can be aggregated or shown by single user

- **Technical**:
  - Better error handling and notifications (spinners, toasters) during interaction with the webpage
  - More strict data validations on backend / frontend side
  - Export data to csv / txt functionality
