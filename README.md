# Netflix Clone
[Live Demo](http://netflix.fishermediasolutions.com)

I followed a 10 hour tutorial for this project which can be found here: https://www.youtube.com/watch?v=x_EEwGe-a9o

This application (a Netflix clone) was built using React (Custom Hooks, Context), Firebase & Styled Components. I have built the following pages within this application: sign in, sign up, browse & lastly the homepage. There are four different pages, some using protected routes with auth listeners. Firebase firestore handles all the data and that data is retrieved using a custom hook; authentication is used on all pages, which is handled by Firebase as well.

I used compound components (just a design pattern) to build my components, and there's over 10 examples as to how these are used. The styling is all handled via styled components. Using compound components made my actual dumb components really easy to test.

![Preview](https://github.com/smithms91/Netflix-Clone/blob/main/netflix-preview.png)
