# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live Demo

View the live demo of the [Assignment](https://weekday-fe-assignment.vercel.app/)

## How to run

1. Clone the repo
2. Navigate to the project directory
3. Run `npm install`
4. Run `npm start`

## Points related to filters

Since the API does not provide sufficient information to filter the jobs out, the following filters could not be implemented:
1. Number of Employees: Because API does not provide how many employees are there in the company
2. Search Company Name: Because API does not provide the names of the company. Due to this reason, name of the company in all the jobs are hard-coded and same

## Limitations

When any filter is applied and the number of jobs are less and there is no scroll bar, new jobs are not fetched. This is can be assumed as a limitation but cannot be because if there is automatic fetching of new data then it may cause an infinite loop
