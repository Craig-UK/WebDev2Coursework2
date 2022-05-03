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
###### Add the necessary folders
Add these sub-folders to the "public" folder within the directory:
bootstrap
css
jquery
popper
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
This change was recommended to help organise the dishes by the dish type (Starter, etc.) on each of the menu pages (Dinner or Lunch). This was a good change because this is the way that dishes are organised on most online restaurant websites. 
###### Error Pages
Custom error pages for each of the errors (400, 401, 403, 404 and 500) were implemented to ensure a better experience for the user when and if these errors occur on the web application. 
###### Featured Dish in the Data Structure
A new field within the data structure for the dishes was added called "featured". This field is a boolean value. This was implemented to make showing a featured dish on the home page of the web application easier and more user friendly. Only 1 dish will have the "featured" field set to true and this dish will show up on the homepage of the web application under the heading "Featured Dish". 
###### "Go Home" button on the login page
A "Go Home" button was implemented on the "staff login" page. This button was added incase the user accidently went to the "staff login" page and this will further improve the User Experience of the web application. This button will, as it says, take the user back to the home page of the web application. 
###### No "user icon" on the navbar when user is logged in
This feature was not implemented because when the icon was clicked it would show the "logout" button, but
implementing this meant that the navbar went further along the page and made the UI look unappealing. Also
when hovered over the "logout" button, it would show a different colour than that of the navbar and again, made the UI look unappealing.
## Images
###### Restaurant
The restaurant image was downloaded from pexels.com. 
Here is the link to the image: https://www.pexels.com/photo/alcohol-architecture-bar-beer-260922/
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
