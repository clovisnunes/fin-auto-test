# Fin-app automation Test Plan

## Introduction
This document outlines the automation testing plan for the Fin-app, a web application for financial management.

## Objectives
The objectives of automation testing for the Fin-app are as follows:
- To ensure that the Fin-app is stable and reliable.
- To increase the speed of testing and reduce manual effort.
- To reduce the overall cost of testing.
- To ensure that all registration forms are saved correctly.

## Scope
The scope of automation testing includes:
- Functional testing of all modules.
- Regression testing of all modules.

## Automation tool
The automation tool selected for this project is Cypress version 3.6.0 with programming language javascript.

## Test environment
The test environment for automation testing is as follows:
- Operating system: Windows 10
- Browser: Google Chrome v111
- Programming language: javascript
- Integrated Development Environment: VS Code

## Test cases
The following test cases will be automated:

### Contacts
1. Register client
2. Edit client
3. Register supplier
4. Edit supplier
5. Register employee
6. Edit employee
7. Register provider
8. Edit provider
9. Register partner
10. Edit partner
11. Register company

### Financial
1. Register bills to pay
2. Register bills to receive
3. Register cost center
4. Register bills

## Test data
The following test data will be generated for automation testing:
- Usernames and passwords
- User information
  - Person type
  - Company/Person registration
  - Name
  - Address
  - Contact
  - Bank Accounts
  
### Library for generating fake data
Faker will be used for generating fake data like:
- Names: 
  - faker.name.fullName()
  - faker.company.name()
  - faker.company.companySuffix()
- Numbers:
  - faker.datatype.number()
  - faker.phone.number()
- Email: faker.internet.email()

## Test execution
The automation testing process will follow the below steps:
1. Identify the test cases to be automated.
2. Develop automation scripts for identified test cases.
3. Execute the automation scripts.
4. Analyze the test results.
5. Report and track defects, if any.

## Risks and mitigation
The following risks are identified:
- Environment: the aplication server is not available during all testers' working hours, so a local server will be created for better availability of the testers.
- User data exposing: to mitigate this risk, the user data will be faked for the testing automation.
- Changes in the web elements: this can lead to element not found errors. To mitigate this risk the web locators will be organized in a different file in a dynamic way.

## Conclusion
The automation test plan outlines the strategy for automation testing of the Fin-app
application. This plan will ensure that the application is stable and reliable. The plan will also
reduce the overall cost of testing and speed up the testing process.
