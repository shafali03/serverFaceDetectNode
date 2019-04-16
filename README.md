# serverFaceDetectNode

React App using Node.js and Postgres SQL

https://smart-face-detects.herokuapp.com/  

The app will ask you to sign up or register, once you have registered will take you to the main page. You will need to copy a URL with one person face. Here an example of a URL  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVm0NNQSRO-fw8LaAIZ4FAXLOvJFf4zoBiGY9b1rdmPAR1URou. Copy the URL add it to the search box and press detect. The app will identify the image and add a blue box around the face. It will also increase the number of time the face been detected. 

The tool and skills I used to build this app React for the front end, Node for the back end and PostgreSQL for storing sensitive information when registering or signing your login details. Also used a bcrypt library on NPM makes it easy to hash and compare passwords in Node.  Finally, used a Clarifai API to detect a face image and returns bounding coordinate box of any human faces. 
