# ![alt text](logo.png) DualSun Angular Developer Hiring Test

This test is part of our hiring process for Angular developers.

Be sure to read all of the instructions carefully and follow the guidelines below. This test should take you between 3 and 5 hours depending on your experience.

## Goal

Build a small Angular app that uses the provided json-server. The application is meant to display a unique web page acting as a form to register DualSun’s installations made by third party installers.

## Context

At DualSun, we do not install our panels ourselves. Instead we match incoming customers (leads) with installers that we have screened and trained.

To be able to track the closing of these leads, we ask the installers to fill a document called a **“procès verbal de mise en service (PVMES)”** when they’re done installing a solar system that they have sold. That way, we know what product is being sold to who and we can activate the panel’s warranty.

The PVMES is currently a sheet of paper. Your goal is to take it to the web !

## Specs

The form must contain:

- **Details of the company that has sold and installed the system** : name and SIREN
- **Customer’s details** : name, email, telephone
- **Installation’s details** : address, date of installation, number of panels, type (options: “photovoltaic” or “hybrid”) and their corresponding IDs (the IDs are displayed on the panels, for the sake of the exercise consider that they are 6 digit codes)

The form must be branded :
- Insert the logo in the header (provided in this repository : logo.png)
- Add a footer containing the following information :
```
DualSun, +33 4 13 41 53 70, contact@dualsun.fr
```

The form will be filled on-site by the installer, who may not have access to a laptop and is, by far, not the most geeky person you can hope for.

The inputs gathered must be stored in a way that allows our support team to quickly filter and analyze the data since around 100 (and rising) of these forms are currently submitted a week.

## Tech requirements

A few technologies/libraries **must be used** to build the app:

**Frontend:**

- Language : Typescript
- Framework : Angular (>= v16)

## Other constraints

- Your code must be covered by tests
- Inputs must be validated somehow, implementation is left at your discretion

## What we expect

**Setting Up Your Work Environment on GitHub:**

On your GitHub account, create a new **private repository** to submit your solution to the exercise. Ensure that the repository is set to private to maintain the confidentiality of your work.

**Repository Organization:**

Within your repository, please create a branch named "**develop**". All work related to the exercise should be carried out on this branch. This method will enable us to monitor your progress and assess your proficiency with version control systems effectively.

## Sharing the Repository

Once you have completed the exercise, please share your repository with the following GitHub users: [@fab2605](https://github.com/fab2605) and [@dbrincourt](https://github.com/dbrincourt). To do this, go to the repository settings, navigate to the "**Manage access**" section, and invite these two users as collaborators.

Additionally, create a pull request with all changes related to the exercise for review 🙏

## Tips

- **Design/style of the app is not the main priority, focus on code quality and test coverage.**
- Feel free to add and use any library you want
- Got questions? Contact us! (No penalties for asking questions 😉)

---

## Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `json-server json-server/db.json --middlewares json-server/wrap-parameters.middleware.js` for a fake ruby on rails API (using [nested attributes](https://api.rubyonrails.org/classes/ActiveRecord/NestedAttributes/ClassMethods.html)).

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via testing framework of your choice.

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
