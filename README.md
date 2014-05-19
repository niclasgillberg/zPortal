zPortal
=======

The web is moving forward and so should the applications that are built upon it. 
Traditional applications that are built as if they were websites filled with text should 
not be the norm and goal for new application. Instead, push the limits, step out of the
comfort zone and build an application that uses the power of the modern web technology that
are to our disposal.

**zPortal** is not by any means a real application, but a mere playground to explore new ideas.
Some of the features may be of actual use in a real world application, while others are just there
because they're cool and awesome. Hopefully it sparks one or a few ideas for you as well.

##Getting Started

There are a few steps you'll need to take after cloning the repository before you have the application running in you browser:

1. Install [NodeJS](http://www.nodejs.org)
2. Install [MongoDB](http://www.mongodb.org/)
3. Install [Bower](http://bower.io/)<br>
`npm install -g bower`
4. Install [Grunt](http://gruntjs.com/)<br>
`npm install -g grunt-cli`
5. Install project dependencies (may take some time)<br>
`npm install && bower install`
6. Start grunt<br>
`grunt`
7. Open your favorite browser (well, any browser should work, to be honest) and browse to
[localhost:8888](http://localhost:8888)

During the Grunt step (6), all development resources, such as [Jade](http://jade-lang.com/),
[CoffeeScript](http://coffeescript.org/) and [Stylus](http://learnboost.github.io/stylus/) files,
will be compiled and all tests will run automatically. 
After that it watches for changes to the source files (located in the `src` folder) and reruns the grunt tasks as needed.

##License

MIT license - [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)