# HungerAid

—- _Sharing surplus, feeding hope_

### Hosted on Netlify
-[live url](https://hunger-aid.netlify.app/)

### Project Problem Statement:
refer here: https://github.com/baala3/hunger-aid-frontend

###	Features List
1.	Sign up form for new user to create an account. A new user record is created in MongoDB. If an already existing user tries to sign up, he is prevented in doing the same.
2.	Login Page to allow only authorized users to login. Performs validation for username and password match. A role based login is enabled to redirect users to either Business Home Page or Charity Home Page. 
3.	Business Home Page provides a widget to upload leftover food images. It also takes in user input for amount of food cooked, food wasted. The food images are uploaded to cloudinary.
4. User can trace food location and directions from his current location.
5. User can update his own profile.
6. User can upvote if the information is helpful.
7. User can contact our team if they face any kind of issues

Tech Stack used:
1. MongoDB, (Mongoose)
2. Node.js
3. React
4. Express
5. Material-UI
6. Mapbox-gl
7. ftp-mail
8. JWT (Authentication)
9. Redux, (React-Redux)
10. React-swipeable-views
