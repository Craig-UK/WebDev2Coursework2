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
- bootstrap
- css 
- jquery
- popper
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
###### Chef Specials in the Data Structure
A new field within the data structure for the dishes was added called "chefSpecials". This field is a boolean value. This was implemented to make showing Chef Specials on the home page of the web application easier and more user friendly. All dishes with the "chefSpecials" field set to true  will show up on the homepage of the web application under the heading "Chef Specials". Chef Specials replace the "featured dish" feature because Chef Specials is more relevant to a real life implementation of a restaurant website.
###### "Go Home" button on the login page
A "Go Home" button was implemented on the "staff login" page. This button was added incase the user accidently went to the "staff login" page and this will further improve the User Experience of the web application. This button will, as it says, take the user back to the home page of the web application. 
###### No "user icon" on the navbar when user is logged in
This feature was not implemented because when the icon was clicked it would show the "logout" button, but
implementing this meant that the navbar went further along the page and made the UI look unappealing. Also
when hovered over the "logout" button, it would show a different colour than that of the navbar and again, made the UI look unappealing.
###### "Unassigned Menu"
An "unassigned menu" option was added to the "menu" dropdown when editing a dish or creating a dish. Unassigned dishes can't be seen on either of the menu pages. These dishes are only available for staff members by visiting the "Unassigned Dishes" link on the navigation bar. On each of the edit menu pages "Edit Dinner Menu" or "Edit Lunch Menu", the staff member is able to move a dish by clicking the "Unassign Dish" button and this will move the dish to unassigned. This was implemented as it was required in the specification document and is a significant feature incase the restaurant want to add a dish back to one of the menus later instead of completely deleting the dish.
## Images
###### Restaurant
The restaurant image was downloaded from [pexels](pexels.com). 
Here is the link to the image: https://www.pexels.com/photo/alcohol-architecture-bar-beer-260922/
###### About Page
The restaurant image on the about page was downloaded from [pexels](pexels.com).
Here is the link to the image: https://www.pexels.com/photo/wine-glasses-on-table-tops-941861/
##### French Toast
The French Toast image was downloaded from [pexels](pexels.com).
Here is the link to the image: https://www.pexels.com/photo/a-plate-of-french-toast-4623075/
## Useful Links
###### Validation
The validation for each of the forms (add dish, edit dish and login) was acquired from bootstrap. This was used to provide a better User Experience with validation and required fields within each of the forms. [The validation page from bootstrap can be viewed here](https://getbootstrap.com/docs/5.0/forms/validation/)
###### Iterate through table on edit menu pages
A function for iterating through the table on each of the pages was used to replace the "true" or "false" value under the "Chef Special?" column on the tables with either "Currently a Chef Special" or "Not currently a Chef Special". [This function was provided by the solution - the answer with the green tick - on this stackoverflow question](https://stackoverflow.com/questions/3065342/how-do-i-iterate-through-table-rows-and-cells-in-javascript)
###### Displaying image filename and extension on the edit dish page
A function was used to be able to display the current image filename and extension within an input on the edit dish page. [This function was provided by the solution - the answer with the green tick - on this stackoverflow question](https://stackoverflow.com/questions/43708127/javascript-get-the-filename-and-extension-from-input-type-file)
## Deployment
###### This Web Application has been deployed using Heroku. You can check it out here:
https://webdev2coursework2.herokuapp.com/
## Todo (Features implemented)
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
- [x] Add Chef Specials function
- [x] Allow staff to make a dish a "Chef Specials" when creating a dish or editing a dish
- [x] Display Chef Specials on the home page
- [x] Allow staff to upload images when creating a dish
- [x] Allow staff to update the image of a dish when editing a dish (Current image should appear)
- [x] Images of the dish should appear on the menus page(dinner or lunch)
- [x] Images of the dish should appear on the dish details page
- [x] Make an 'unassigned menu' where the dishes that were 'removed' from any of the menus go, but are able to be re-added to the menus.
- [x] Improve the UI of all pages
- [x] Deploy Web Application
