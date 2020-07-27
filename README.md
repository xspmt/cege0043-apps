# cege0043-apps

## Question Setting App

A technical guide for a browser-based question setting app. This app helps the user to create a new question about a location, add possible answers and upload questions to a database on the web server. By using this app, the location of a question could be input by either clicking on a point on a Leaflet map or manually typing latitudes and longitudes. This app is also able to retrieve existed questions of certain characteristics and information of users from the database.

## Quiz App

A technical guide for a browser-based quiz app. This app enables the user to answer the questions at some specific locations based on the `Question Setting App`, and tells the users the answers are wrong or right. The app will track your location automatically and calculate the closest quiz point and show the question. This app is also able to retrieve existed questions of certain characteristics and information of users from the database.

## Table of Contents

1. [System Requirements](#System-Requirements)  
2. [Deployment](#Deployment)  
3. [Testing](#Testing)  
4. [File description](#File-description) 
5. [Code reference](#Code-reference)

### System Requirements
---
- In order to enable the full functionality of this app, a browser that supports geolocation access via http connection is required. Some browsers (such as Safari) block geolocation access via http connection. As a result, the app cannot locate and zoom into user positions if it is opened in those browsers. Therefore, it is recommended to use Chrome(Version 73.0.3683.75 or above) or Firefox(Version 65.0.2 or above) for this app.  
- This app requires to make connections to a Ubuntu Server (Virtual Machine). You could use BitVise, Pycharm (Version 2018.3.5 Professional Edition) or other SSH software to connect to the Ubuntu Server.  
- If you are going to use this app outside the UCL campus (not connected to Eduroam), make sure you are connected to UCL VPN by following the instructions at https://www.ucl.ac.uk/isd/services/get-connected/remote-working-services/ucl-virtualprivate-network-vpn.  
[back to top](#cege0043-apps)

### Deployment 
---
- Procedures to deploy this app:
1. Clone the source code of this question setting/quiz app from Github to CEGE server at `home/studentuser/code` by typing in the command line (terminal) window for Ubuntu:

`cd /home/studentuser/code git clone https://github.com/ucl-geospatial/cege0043-apps-xspmt -b master`

2. Clone the source code of the corresponding Node JS server from Github to CEGE server at `home/studentuser/code` .

`cd /home/studentuser/code git clone https://github.com/ucl-geospatial/cege0043-data-api-xspmt -b master`

3. Go to the `cege0043-data-api-xspmt` folder and start the Node JS server.

`cd /home/studentuser/code/cege0043-data-api-xspmt pm2 start dataAPI.js`

4. Make sure the Node JS server is successfully started. If any error occurs, you could enter the debug mode through the command line window by typing

`cd /home/studentuser/code/cege0043-data-api-xspmt node dataAPI.js`

[back to top](#cege0043-apps)

### Testing 
---
- Procedures to test this app:
1. Make sure your device is connected to UCL Wifi or UCL VPN.
2. Make sure the Node JS server is active. 
3. In a browser that supports geolocation access via http connection (such as Chromeor Firefox), type the following address to use the question setting/quiz app.http://developer.cege.ucl.ac.uk:31077/quizApp.html
4. While testing the functionality of this map, use of Inspect or Developer mode(press F12) of the browser to see if any error occurs or no respondings.

[back to top](#cege0043-apps) 

### File description
---
The files associated te this question setting/quiz app are located in the home directory and several subfolders.
* ~/
  * quizApp.html : The main html file of this app, through which user could use all the question setting functionality and quiz functionality. It interconnects all of the resources within the ~/ folder and makes use of them. This html contains several divs and menu buttons.
    * Div
     
    | id | description |
    | --- | --- |
    | mapid | Hold the leaflet map.  |
    | form | Set the question and answers and upload the data to the server. |
    | top5table | Show the top 5. |
    | UserPar | Show the Daily Participation Rates for all users. |
    | AllPar | Show the Daily Participation Rates for the current users only. |
    | datatable | Display 5 most difficult questions. |
    | helpPage | Load the help page. |

    * Button
    
    | id | description |
    | --- | --- |
    | startUpload | Upload the setted questions.  |
    | showQuestion | Show all existing question points. |
    | removeQuestion | Remove all the existing question points. |
    | removeLastWeekQuestion | Remove all the question points added last week. |
    | closest5 | Load 5 closest question points to user based on the current location. |
    | removeClosest5 | Remove 5 closest question points. |
    | removeLastQuestion | Remove 5 last answered questions and show them wrong or right. |

  * UserGuide.html : The help page file, which could help users how to use this app and show each fuctionality.
* ~/css : Setting up styles of quizApp.html (such as fonts and margins) and incorporating the CSS required for custom icon creation.
* ~/images : Containing images required by UserGuide.html . 
* ~/res
    * port.xml : Contains user port id data of http and https connections.
* ~/js : Containing Javascript files required by quizApp.html .         
functions in different Javascript files to enhance functionality of the app.
    * utilities.js :
        
    | function | description |
    | --- | --- |
    | getPort | Get user port numbers based on the type of connections (http or https), which are required to build database connections     for data uploading and downloading. |
    * basicMap.js: Load the basic map.
    * correctNum.js : Count the number of correctly answered questions.
    * dataUpload.js :
    
    | function | description |
    | --- | --- |
    | startDataUpload | Collecting question data input by the user. An error message will appears if the user does not fill in all the required fields. |
    | processData | Tell the server what type of data we are uploading and upload the data. |
    | dataUpload | Wait and process response from the data server and show the data uploading results on the web page. |
    | processAnswerData | Tell the server what type of answers we are uploading and upload the answers. |
    
    * get5Closest.js :
    
    | function | description |
    | --- | --- |
    | getPosition | Get the user's longitude and latitude. |
    | get5ClosestQuestions | track user's latest location and alert user. |
    | load5ClosestQ | Load the question points and add them to map. |
    | checkanswer | Check the user's answers are wrong or right. |
    | removeClosestQuestionsLayer | Remove the 5 closest points. |
    * get5difficult.js : Show the 5 difficult questions with a table.  
    * getRanking.js :
    
    | function | description |
    | --- | --- |
    | getRanking | Get the ranking data from web server. |
    | getTop5 | Get the Top 5 data from web server. |
    * Last5Question.js :
    
    | function | description |
    | --- | --- |
    | getLat5Q | Get the last 5 answered questions from web server. |
    | loadLast5Q | Load the question points to the map. |
    | removeLastAnswered | Remove the question points. |
    * leaflet.awesome-markers.js : Add colorful iconic markers for Leaflet.
    * load Question.js :
    
    | function | description |
    | --- | --- |
    | getQuestion | Get all the added questions from the web server. |
    | loadQuestion | Load the question points to the map. |
    | removeQuestion | Remove the question points. |
    |  loadQuiz | Track user's location and calculate distance and load quiz. |
    | checkAnswer | Send the answers to the server compare the answers with the right one. |
    | getLastWeek | Get all the questions added last week from the web server. |
    | checkLastWeekAnswer | Check answers. |
    | removeLastWeekLayer | Remove question points. |
    
    * menu.js : Display different divs and buttons clicking different menu.  
    * participation.js : Show the Daily Participation Rates for all users and the current user with a histogram.
    * proximityAlert.js : Calculate the minimum distance from the user to the question points.
    * trackLocation.js :
    
    | function | description |
    | --- | --- |
    | trackLocation | Track user's current location. |
    | showPostion | Display user's location on the map, including a marker and a pop up message. |
    | removeLocationLayers | Remove the past location and keep the latest location point. |

[back to top](#cege0043-apps)

### Code reference
* A large proportion of codes are adapted from the lab notes of [CEGE 0043 Web Mobile and GIS](https://github.com/ucl-geospatial/cege0043-2020-examples-app) by Calire Ellul, including
    * Basic structures of index.html and reateForm.html
    * Functions related to events detector, data downloading, data uploading, data processing, user location tracking, displaying map layers, and getting port numbers.
* The utility of changing div contents of one .html by contents of another .html provided by [W3 schools](https://www.w3schools.com/).
* The user interface of this app are based on [Material design Lite Dashboard](https://getmdl.io/templates/). 
* The histograms showing daily user participation utilise [D3 JavaScript library](https://d3js.org/). 
* The axis labels of D3 graphs are adapted from [bl.ocks.org](https://observablehq.com/@d3/lets-make-a-bar-chart), accessed 10th March 2018. 
* May layers of this app are based on [Leaflet](https://leafletjs.com/). 
* The base map data is based on [Open Street Map](https://www.openstreetmap.org/#map=5/54.910/-3.432). 


[back to top](#cege0043-apps)
