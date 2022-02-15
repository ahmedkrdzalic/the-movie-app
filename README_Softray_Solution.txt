Creator: Ahmed Krdžalić
Date: Feb 2022

ABOUT THE PROJECT:

(This is not an essay, so I will not waste too much time on my sentence form and words...)
Firstly, I have read the document that Softray Solutions sent me in email. While reading, I have inspected the links provided in the document. After I read the introduction and inspected a bit about the return JSON which those API paths provide,
I started looking if someone did something similar. i found some tutorials and got an idea of how it have to look like. I have created a react project and installed react-router-dom and axios libraries, and added bootstrap to the app. Then cleared the unnecessery data that initial project provide.
Then I made components and service folders. In service I have a index.js file that is serving as a holder of my functions that gather data from the API. Then, I made fixed first page of popular movies to load in the app, where every movie is a card for itself.
Then I started to make pagination work because I can not work on search feature without pagination. This part was challenging for me, because I had to research how pagination works on the API side and then make it display properly whenever the page changes. 
I haven't finished that fature, but it is working somehow. There is much more work to do on that feature but i gave up because it was toooo time consuming for me at that time. So I have made routing system, where we have some sort of "Menu" bar with LOGO that is getting us bach to the home, and basic two routes, "/" and "/movie/:id".
Then I made the the MovieDetails for gathering details of the specified movie and displayed it all.

If I had more time I would have added cast of the movie, video trailer and similar movies feature to the MovieDetails; made the pagination feature work better; added search feature.

I have to say, that the deadline has passed but I have done this on my own risk, becuase I have received the task without any hint that the task will be assigned on that day (to know, so I that I can not plan anything else). I had some other plans which I canceled, but still there were some other things... 
So I "extended" my deadline a bit more, and I hope that it will not be a problem with You. And that is why I am sending this assignment at this time in the morning, becuse I haven't slept tonight at all, to be able to do as much as possible. 

So, thank You Softray Solutions again for giving us this opportunity to get in Your internship program.


-------------------------------------------------------------------------------------------------

HOW TO RUN THE PROJECT:

1. It is classic REACT.js project
2. Just extract in folder named same as the name of zip file
3. Open cmd in project folder (You can navigate trough Windows Explorer and just enter cmd instead of the path at the top 
	Ex. navigate to the folder and instead of this path "C:\Users\User\Desktop\Personal project\WEB\the-movie-app" enter cmd)
4. In CMD write followng: "npm run start" (I am assuming that You already have installed NPM commands)
5. The server will start and open the app in browser automatically, if not just enter this in browser as an URL: "http://localhost:8000/"
6. You have to have internet connection.





