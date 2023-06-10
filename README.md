
## Week 1 Assignment: Flixster

Submitted by: **Kennedy Parks**

Estimated time spent: **20** hours spent in total

**Live Website** https://kennedyparks.github.io/site-week1-project1-flixster-starter/

### Application Features

#### Core Features

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### Stretch Features

- [x] Deploy website using GitHub Pages.
- [ ] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [x] Implement anything else that you can get done to improve the app functionality!
  - [x] I added a Back To Top button at the bottom of the page
  - [x] I added a sticky search bar so users can search from any point in the page
  - [x] I added color coding for the votes depending on ratings: 8 > green, < 8 yellow, < 5 red

### Walkthrough Video

![Kapture 2023-06-09 at 20 32 33](https://github.com/KennedyParks/site-week1-project1-flixster-starter/assets/112662157/17e95c88-9956-4131-b940-5f6d7dbb8f66)

https://imgur.com/a/OaBxwvY

### Reflection

- Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The topics in the labs absolutely helped me with project 1. Lab 2 helped me get a better understanding of JavaScript functions and I was able to use that in the project. Also, learning how to dynamically change HTML using JavaScript was new for me and I was able to use that in project 1 as well.

- If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would have loved to create a hover popup on every movie card displaying the movie overviews and embedding the trailers.
I would have also liked to add a widget that uses geolocation to populate the movie card popups with local theater showtimes for the specific movie.

- Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?
Using the flixter API went well for me. I was able to connect it and get the data I needed very quickly which gave me more time to focus on other things. Adding the CSS also went well for me. Something that didn't go as planned was running into an issue in my JavaScript. It took me a while to figure out how to append new movies at the bottom of the page instead of reloading the page. Essentially, I was able to do it by making a new function. Something one of my peers did was add hover effects to make the movie posters highlight when hovered. That was a nice feature.

### Open-source libraries used

### Shout out

I would like to give a shoutout to Alejandro for helping me with lab 2 and Devarsh for helping me with my JavaScript callback functions in the project!! Thank you!! ❤️
