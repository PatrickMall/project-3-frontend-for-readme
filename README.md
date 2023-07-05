# Date-abase

## About this Project

Hello I’m Patrick and I built this app with 3 fellow developers for my third project as part of General Assembly’s software engineering immersive.

This application was built over 6 days as a group project with my classmates: Louise Jones, Maxim Prestwich and Simeone Oyetunde.

The project had much more freedom it choose what we wanted to create, compared to our first two projects. With an MVP of being built using the MERN stack, having user authentication to sign up and login in, and needed to be optimised for mobile devices. We achieved all the requirements as well as making some additional stretch goals too.

## Our application

This is a project with a mission to connect nerds with their dream "programming" partners ;). Users will be able to create an account and dating profile by answering a few important questions to determine your best match. You can browse other people's profile and if you like the look of someone try matching with them and see if they reciprocate. If you end up lucky you'll be able to chat.

[Deployment Link](https://daterbase.netlify.app/)

## Getting Started/Code Installation

### Clone the back-end repository

```
git clone https://github.com/maxim-pre/Date-abase-backend.git
```

Navigate to this repository on your machine then run the following commands to install the project dependencies and start the development server.

```
npm install
nodemon server.js
```

### Clone the front-end repository

```
git clone https://github.com/maxim-pre/date-abase-frontend.git
```

Navigate into the front-end repository on your machine and run the following commands to install all the dependencies and start the app.

```
npm install
npm run start
```

## Timeline

Thursday (Afternoon, design and scoping)
Friday (All day)
Saturday (No obligation but working allowed)
Sunday (No obligation but working allowed)
Monday (No obligation but working allowed)
Tuesday (All day)
Wednesday (All day, MVP due)
Thursday (All day, refactoring)
Monday (9am check ins and final changes, 10am project presentation)
Group planning
Our Mission
Connect nerds with their dream "programming" partner ;)
Team Goals $ Values
MVP first
Agile working
Open Communication
Learning together
Team Communication Preferences
Breakout rooms in pairs
Slack messages at any time
Lunchtime synchronised pulling and merging
end of day review
Approach
Backend first, break into 2 pairs and work on different parts of the backend (use Postman to verify)
Then change the pairings and repeat for the frontend
Technologies Used
Stack
MongoDB
Express
React
Node.js
Tailwind CSS
Npm Packages
Mongoose
bcrypt
passport
react-modal
react-icons
Other technologies
cloudinary
Vscode
Git
Heroku
Netlify
Technical Requirements
Client (Front End)
Have a working, interactive React app, built using npx create-react-app client
have a minimum of 6 components
use only react for DOM manipulation
Consume data from your API , and render that data in your components.
Utilise React Router
Authentication!
Server (Back End)
Have a working generic router actions for CRUD using Express, Mongoose and MongoDB
Have at least 2 modals
Have full CRUD on at least one of your models
Authentication!
Styling
Use flexbox or CSS Grid layout
implement responsive design on 2 screen sizes (including desktop and mobile)
You can use a CSS framework if you want to.
Deployment
Deploy to MongoDB database to MongoDB Atlas
Deploy the back-end via Heroku
Deploy the front-end via netlify
Planning

View Schema diagram here:
https://excalidraw.com/#room=9c9f4fc8e1279bd72d46,vo3AP7_F2bYc7GiY1E9DCQ
View wireframes here:
https://xd.adobe.com/view/4cc19f9e-36f6-404a-8564-083fd55380cd-1992/?fullscreen&hints=off
User stories

## MVP

- As a user I want to create an account so I can create a personalised experience
- As a user I want to create a bio so I can show potential partners what I’m like
- As a user I want to edit my bio so I can keep it up to date
- As a user I want to answer survey questions so that the website can match me with people that have similar interests.
- As a user I want to specify my gender and which gender(s) I’m interested in so I only see partners who are mutually interested in each other
- As a user I want to browse other users’ profiles so I can learn more about them
- As a user I want to select my favourite users so I can express my interest in them
- As a user I would like the option to select or reject any profile I want
  Beyond MVP
- As a user I want to be notified when someone favourites me so I can see if we are interested in each other
- As a user I want to message users I have matched with so we can arrange a date
- As a user I want to be notified when I have favourited someone and they have favourited me, so I can know we are both interested in each other
- As a user I want to upload a photo of myself so other users know what I look like
- As a user I want to get some helpful chat up lines so I can break the ice with my date more easily
- As a user I want to see only the users near me so I can meet them without travelling too far

## Build/Code Process

### Backend

The first step in building the back-end was to initialise the express application, which involved the following steps:
Establish a database connected with Mongoose

```javascript
mongoose.connect(currentDB, { useNewUrlParser: true });
db.once("open", () => console.log("Connected to MongoDB"));
db.on("error", (error) => console.log(`ERROR: ${error.message}`));
db.on("connected", () => console.log(`MongoDB connected at ${currentDB}`));
db.on("disconnected", () => console.log("MongoDB disconnected"));
```

instantiate the express application object

```javascript
const app = express();
apply middlewares
app.use(express.json()); #parse the request body into JSON
app.use(cors({ origin: "*" }));
tell the application which port to listen for requests
app.listen(port, () => console.log(`Date-abase is listening on port ${port}`));
```

Next we split up and started working on different components of the API. I was working with my fellow developer to create the user controller.

This was the first time I had built a project using custom built api routes and creating a hashing system to encrypt users passwords in the database.

I also decided to use the async/await method instead of the promise/catch method as I find this method easier to read and understand as I feel like it is syntactically closer to Javascript functions even if it is asynchronous.

### Front end

On the front end I worked a lot with a fellow developer to create the styling and the logic to get the data from the backend database and display it in the Browse section of the application.

Here is a snippet of code that displays the data from the database and checks to see if the user has already matched with the other users. This data is then passed to the UserCard component and displayed with the appropriate button for the match/not matched feature.

```javascript
const displayUsers = allUsers.map((otherUser) => {
  // Check if current user is in this user's matches array
  if (otherUser.matches.includes(currentUser._id)) {
    otherUser.isMatched = true;
  } else {
    otherUser.isMatched = false;
  }

  return (
    <UserCard
      currentUser={currentUser}
      otherUser={otherUser}
      key={otherUser._id}
      id={otherUser._id}
      firstName={otherUser.firstName}
      lastName={otherUser.lastName}
      bio={otherUser.bio}
      interestedInGender={otherUser.interestedInGender}
      createdAt={otherUser.createdAt}
      isMatched={otherUser.isMatched}
      fetchData={fetchData}
    />
  );
});
```

Here is the user card which I worked on with fellow developer Maxim Prestwich.

```javascript
const interestedInGenders = interestedInGender
  .map((gender) => {
    switch (gender) {
      case "M":
        return "men";
        break;
      case "F":
        return "women";
        break;
      case "O":
        return "people with other gender indentities";
        break;
    }
  })
  .join(" and ");

return (
  <div className="border w-100 mx-4 my-4 px-4 py-4 bg-[#e8e8e890]">
    <h2 className="text-3xl text-center py-4">
      {firstName} {lastName}
    </h2>
    <p className="text-center px-6">
      Hi I'm {firstName} and I'm interested in meeting {interestedInGenders}
    </p>

    <UserPhoto imageUrl={photos[0]} />
    <p className="text-center pb-8">I joined DaterBase on {joinedAt}</p>
    <div className="flex flex-col items-center">
      <div>
        {isMatched && (
          <button
            className="text-4xl bg-red-500 text-white rounded-full px-5 py-4 mr-6 focus:bg-green-500 focus:text-black hover:shadow-2xl hover:bg-yellow-400 hover:text-black"
            onClick={handleRemoveMatch}
          >
            N
          </button>
        )}
        {!isMatched && (
          <button
            className="text-4xl bg-green-500 text-white rounded-full px-6 py-4 ml-6 focus:bg-green-500 focus:text-black hover:shadow-2xl hover:bg-yellow-400 hover:text-black"
            onClick={handleAddMatch}
          >
            {" "}
            Y
          </button>
        )}
      </div>
    </div>
  </div>
);
```

## Key learnings

One of the other major things I learnt and now use regularly is tailwind CSS. I find that using this for layouts and responsive design is great and I can create great UX that is easy to style.
My use of Tailwind CSS for the layout and styling of the site can be seen through all the pages and I utilised my Photoshop skills to soften the background image contrast.
Here is an example of how I utilised Tailwind CSS in this project

```javascript
 <div className="h-screen w-full flex justify-center items-center flex-col bg-[url('../src/static/images/AdobeStock_88856691.jpeg')] bg-top bg-cover">
        <div className="w-full -mt-7">
          <h1 className="text-7xl text-white text text-center text-shadow mb-8">DaterBase</h1>
          </div>
```

## Bugs and Issues

We experienced a number of bugs and issues through this project, a major one was when we were working on the authentication section of the backend using bcrypt. For this bug we eventually managed to resolve the issue of not getting the right data from the requests on the front end.

## Wins

I think my biggest win for this project was working with Maxim to find a solution for our image upload feature. After some research we realised that we could not store the images in the database as they contained too much data to be used with an api call. Instead we had to find a cloud based solution for our image upload feature and came across Cloudinary, which we realised integrated really easily with React.js. After some tweaking and playing around with the application we were able to store the URL for the image in our database which would then load the appropriate image from the linked Cloudinary server.

## MIT License

Copyright (c) [2023] [Patrick Mallery]
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
