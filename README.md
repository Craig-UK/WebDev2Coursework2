# WebDev2Coursework2
Restaurant Web Application using Nodejs, Express and Mustache (View Engine) for Web Application Development 2 Coursework 2.
## How to start the Web Application
Here's how to start the Web Application on your local machine:
###### Clone the Repository
```
git clone https://github.com/Craig-UK/WebDev2Coursework2.git
```
###### Create the .env file
```
cd WebDev2Coursework2
touch .env
```
###### Add to the .env file
```
ACCESS_TOKEN_SECRET=<secret_text>
```
###### Install the required node modules
```
npm install
```
###### After all required modules have been installed, run one of these commands to start the Web Application
```
npm run start
```
Or
```
node index.js
```
## Justification for changes from original development plans
###### Customer Login/Customer Register
In the original development plans for the Web Application, there was customer login and customer register
pages. I then realised, after feedback, that these pages were unnecessary, so they are no longer being added to the final Web Application.
###### Dish Type Headings on each of the Menus

###### Error Pages

###### Featured Dish in Data Structure

###### "Go Home" button on login page

## Deployment
###### This Web Application has been deployed using Heroku. You can check it out here:
https://webdev2coursework2.herokuapp.com/
## Todo
- [x] Staff Login function
- [x] Staff can access all pages and instead of login, the navbar shows "logout" when staff are logged in
- [x] Add the add new dish functionality
- [x] Show dishes on the correct menus (e.g. Dinners on Dinner menu and Lunches on Lunch Menu)
- [x] Show dish types under the correct headings (e.g. Starters, Main Coures, etc.)
- [x] Add single dish page with more details of the selected dish
- [x] Create the edit lunch function
- [x] Create the edit dinner function
- [x] Add delete dish function
- [x] Add error pages
- [x] Add featured dish function
- [x] Display featured dish on the home page
- [ ] Allow staff to upload images when creating a dish
- [ ] Images of the dish should appear on the menus page(dinner or lunch)
- [ ] Images of the dish should appear on the dish details page
- [ ] Improve the UI of all pages
- [x] Deploy Web Application
