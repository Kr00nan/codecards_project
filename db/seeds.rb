d1 = Deck.create(title: "HTML", public: true,)
  d1.cards.create( 
    question: "How do you create a hyperlink?",
    answer: "By using the <a> tag with an href attribute.",
    extra: '<a href="http://www.codecards.io">Visit codecards!</a>
    Useful attributes:
    -href: Specifies the URL of the page the link goes to.
    -target: Specifies where to open the link (_blank value opens link in new window for example).
    -download: Specifies the target will be downloaded when the link is clicked.',
  )
  d1.cards.create( 
    question: "What is <!DOCTYPE>?",
    answer: "It’s an instruction to the web browser about what version of HTML the page is written in.",
    extra: "<!DOCTYPE html>
    <html>
    <head>
    <title>What is doctype card</title> </head>",
  )
  d1.cards.create( 
    question: "How do you define bold text?",
    answer: "By using the <b> tag",
    extra: '<p>This is normal text - <b>and this is bold text</b>.</p>
    Tips:
    -You can also use the CSS "font-weight" property to set bold text. -Don’t use the <b> tag for specifying headlines. Use tags <h1> to <h6> for that, since search-engines look for them first.',
  )
  d1.cards.create( 
    question: "How do you define a client-side script, such as Javascript in your html doc?",
    answer: "By using the <script> tag.",
    extra: '<script> document.write("Hello World!") </script>',
  )
  d1.cards.create( 
    question: "From top to bottom, what is the correct structure of an HTML document?",
    answer: "<html> tag followed by <head> followed by <body>",
    extra: '<html>
    <head>
    <title>Title of the document</title> </head>
    <body> Hello world! </body>
    </html>
    <!-- Other structural elements include <nav> , <header> , and <footer> -->',
  )
  d1.cards.create( 
    question: "What does a <div> tag do?",
    answer: "It defines a division or a section in an HTML document and is mostly used to group block elements to format with CSS.",
    extra: '<div style="color:#0000FF"> <h3>This is a heading</h3> <p>This is a paragraph.</p>
    </div>',
  )
  d1.cards.create( 
    question: "What is the <head> element for?",
    answer: "It’s a container for all the head elements like the title of the document, scripts, styles, meta information, and more.",
    extra: "<html> <head>
    <title>Playing with Angular.js</title> </head>
    <body>
    “May the force be with you” - Sudo </body>",
  )
  d1.cards.create( 
    question: "How can you add styling inside an HTML document that applies to everything inside of the doc?",
    answer: "By using the <style> tag inside of the <head> element.",
    extra: "<html> <head> <style>
    h1 {color:red;}
    p {color:blue;} </style>
    </head>",
  )
  d1.cards.create( 
    question: "What is the <iframe> tag for?",
    answer: "It specifies an inline frame used to embed another document within the current HTML document.",
    extra: '<iframe src=“http://www.codecards.io/doge"> </iframe>
    Useful attributes:
    -width: Specifies the width. -height: Specifies the height. -name: Specifies the name of the iframe.',
  )
  d1.cards.create( 
    question: "What is the <link> tag used for?",
    answer: "It defines the relationship between a document and an external resource and is mostly used to link style sheets.",
    extra: '<head>
    <link rel="stylesheet" type="text/css"
    href="theme.css"> </head>',
  )
  d1.cards.create( 
    question: "What is the <p> tag used for?",
    answer: "It’s used to define a paragraph, i.e. text.",
    extra: "<p>A junior QA is shoved into a closet, tape over their mouth...
    The sweet smell of release day.</p>",
  )
  d1.cards.create( 
    question: "How do you define an unordered list?",
    answer: "By using the <ul> tag.",
    extra: "<ul> <li>Coffee</li> <li>Tea</li> <li>Milk</li>
    </ul>",
  )
  d1.cards.create( 
    question: "How do you insert a video in an HTML doc?",
    answer: "By using the <video> tag.",
    extra: '<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    Your browser does not support the video tag.
    </video>
    Useful attributes:
    - width and height to define the size. - autoplay specifies that the video will start automatically.
    - loop makes the video repeat itself.',
  )
  d1.cards.create( 
    question: "How do you define a table?",
    answer: "By using the <table> tag.",
    extra: "<table> <tr>
    <th>Month</th>
    <th>Savings</th> </tr>
    <tr>
    <td>January</td>
    <td>$100</td> </tr>
    </table>",
  )
  d1.cards.create( 
    question: "How do you define a drop-down list?",
    answer: "By using the <select> tag.",
    extra: '<select> <option
    value="volvo">Volvo</option> <option
    value="saab">Saab</option> <option
    value="mercedes">Mercedes</option >
    <option value="audi">Audi</option> </select>',
  )
  d1.cards.create( 
    question: "What is the best way of defining navigation links inside a nav bar?",
    answer: "By defining hyper links inside of a <nav> tag.",
    extra: '<nav>
    <a href="/html/">HTML</a> <a href="/css/">CSS</a>
    <a href="/js/">JavaScript</a> <a href="/jquery/">jQuery</a>
    </nav>',
  )
  d1.cards.create( 
    question: "How do you create input fields that can be used in a form?",
    answer: "By using <input> tags inside of a <form> element.",
    extra: '<form action="demo_form.asp"> First name: <input type="text"
    name="fname"><br>
    Last name: <input type="text"
    name="lname"><br> <input type="submit"
    value="Submit"> </form>
    Tip:
    You can change the type attribute to match the type of information it’ll take: button, checkbox, date, email, password, button, etc.',
  )
  d1.cards.create( 
    question: "How do you define an image inside of your HTML?",
    answer: "By using the <img> tag.",
    extra: '<img src="bugcard.gif" alt="Smiley face" height="42" width=“42">
    Useful attributes:
    -height and width define the size of the image.
    -alt specifies an alternate text for an image.
    -src specifies the URL of an image.',
  )
  d1.cards.create( 
    question: "How do you define the most important heading followed by the least important heading?",
    answer: "By using an <h1> tag followed by an <h6> tag.",
    extra: "<h1>Physiological needs</h1> <h2>Safety</h2>
    <h3>Love and belonging</h3> <h4>Esteem</h4> <h5>Self-actualization</h5> <h6>Everything else</h6>",
  )
  d1.cards.create( 
    question: "How do you define a container for an external application or plug-in like flash?",
    answer: "By using the <embed> tag.",
    extra: '<embed src="helloworld.swf" width="200" height=“200">',
  )
  d1.cards.create( 
    question: "How do you define a clickable button?",
    answer: "By using the <button> tag or an <input> tag with the attribute type=“button”.",
    extra: '<button type="button">Click Me!</button>
    Good to know:
    Inside a <button> element you can put content like text or images. This is the difference between this element and buttons created with the <input> tag.',
  )
  d1.cards.create( 
    question: "How do you define an audio file inside your html doc?",
    answer: "By using the <audio> tag",
    extra: '<audio controls>
    <source src="horse.ogg"
    type="audio/ogg"> <source src="horse.mp3"
    type="audio/mpeg">
    Your browser does not support the
    audio tag. </audio>
    Useful attributes:
    -autoplay starts the audio file as soon as it loads
    -controls Specifies that audio controls should be displayed (play, pause, etc) -loop puts the track on repeat',
  )
  d1.cards.create( 
    question: "How do you define a comment in an HTML document?",
    answer: "By using <!-- at the beginning and --> at the end.",
    extra: "<!--This is a comment. Comments are not displayed in the browser-->
    <p>This is a paragraph.</p>",
  )
  d1.cards.create( 
    question: "How do you group related elements in a form in order to create a fieldset?",
    answer: "By using the <fieldset> tag inside your <form>",
    extra: '<form> <fieldset>
    <legend>Personalia:</legend> Name: <input type="text"><br> Email: <input type="text"><br> Date of birth: <input type="text">
    </fieldset> </form>',
  )
  d1.cards.create( 
    question: "How do you define a list item inside a list?",
    answer: "By using the <li> tag.",
    extra: "<ol> <li>Coffee</li> <li>Tea</li> <li>Milk</li>
    </ol>
    <ul> <li>Coffee</li> <li>Tea</li> <li>Milk</li>
    </ul>",
  )
  d1.cards.create( 
    question: "How do you define a date or time that can be machine readable (be added to Google calendar for example)?",
    answer: "By using the <time> tag.",
    extra: '<p>We open at <time>10:00</time> every morning.</p>
    <p>I have a date on <time datetime="2008-02-14">Valentines day</time>.</p>',
  )
  d1.cards.create( 
    question: "How do you define a table cell?",
    answer: "By using the <td> tag.",
    extra: "<table> <tr>
    <td>Cell A</td>
    <td>Cell B</td> </tr>
    </table>",
  )
  d1.cards.create( 
    question: "What is the global attribute you can use to make elements draggable?",
    answer: "You can use the draggable attribute to specify whether an element is draggable or not.",
    extra: '<p draggable="true">This is a draggable paragraph.</p>',
  )
  d1.cards.create( 
    question: "What is a 404 error?",
    answer: " It’s a client-side HTTP error that occurs when the requested page could not be found.",
  )
  d1.cards.create( 
    question: "What are errors starting in 500?",
    answer: "They’re server side HTTP errors.",
    extra: "",
  )
  d1.cards.create( 
    question: "How do you insert a line break?",
    answer: " By using the <br> tag. This is an empty tag which means that it has no end tag.",
    extra: "Some examples:
    502 Bad Gateway
    The server was acting as a gateway or proxy and received an invalid response from the upstream server
    503 Service Unavailable
    The server is currently unavailable (overloaded or down)
    504 Gateway Timeout
    The server was acting as a gateway or proxy and did not receive a timely response from the upstream server",
  )
  d1.cards.create( 
    question: "How do you add a quote to your html doc?",
    answer: " By using the <blockquote> tag to specify a section that is quoted from another source.",
    extra: "<p>This text contains<br>a line break.</p>",
  )
  d1.cards.create( 
    question: "How do you add a quote to your html doc?",
    answer: "By using the <blockquote> tag to specify a section that is quoted from another source.",
    extra: '<blockquote cite="http://www.forrest.com/who/ind ex.html">
    Life is like a box of chocolates. You never know what you’re gonna get. </blockquote>',
  )
  d1.cards.create( 
    question: "What are errors starting in 400?",
    answer: "They’re client http errors.",
    extra: "Some examples:
    400 Bad Request
    When a server is accessed it incorrectly or that the request was somehow corrupted on the way.
    401 Unauthorized
    When a visitor tries to access a restricted web page but isn’t authorized to do so, usually because of a failed login attempt.
    403 Forbidden
    The request was a valid request, but the server is refusing to respond to it. Unlike a 401 Unauthorized response, authenticating will make no difference.",
  )
  d1.cards.create( 
    question: "What does the onload event attribute do?",
    answer: "It fires a script when an object has been loaded.",
    extra: 'It’s most often used within the <body> element to execute a script once a web page has completely loaded all content
    <head> <script> function load() {
    alert("Page is loaded"); }
    </script>
    </head>
    <body onload="load()"> <h1>Hello World!</h1>',
  )
  d1.cards.create( 
    question: "What does the event attribute onchange do?",
    answer: "It fires a script when the value of the element is changed.",
    extra: '<head>
    <script>
    function checkField(val)
    {
    alert("The input value has changed. The new value is: " + val);
    }
    </script>
    </head>
    <body>
    <input type="text" name="txt" value="Hello" onchange=“checkField(this.value)">',
  )
  d1.cards.create( 
    question: "What does the onsubmit event attribute do?",
    answer: "It fires when a form is submitted.",
    extra: '<script>
    function checkForm()
    {
    alert("The form is submitted"); }
    </script>
    </head>
    <body>
    <form action="demo_form.asp" onsubmit="checkForm()">
    First name: <input type="text" name="fname"><br>
    Last name: <input type="text" name="lname"><br>
    <input type="submit" value="Submit">',
  )
  d1.cards.create( 
    question: "How do you fire a script on click with HTML?",
    answer: "You can use the onclick event attribute.",
    extra: '<button onclick="copyText()">Copy Text</button>
    Good to know:
    The HTML DOM also allows you to assign events to HTML elements using JavaScript:
    <script> document.getElementById("myBtn"). onclick=function(){copyText()}; </script>',
  )
  d1.cards.create( 
    question: "How do you create SVG files in HTML?",
    answer: "You can use the <SVG> tag to create SVG graphics directly in HTML.",
    extra: '<svg width="300" height="200"> <polygon points="100,10 40,198
    190,78 10,78 160,198"
    style=“fill:white;stroke:blue;stroke-wid th:5;fill-rule:evenodd;" />
    </svg>',
  )
  d1.cards.create( 
    question: "How do you define options in a drop down list?",
    answer: "By using <option> tags inside of the <select> tag.",
    extra: '<select> <option
    value="volvo">Volvo</option> <option
    value="saab">Saab</option> </select>',
  )
  d1.cards.create( 
    question: "Name 6 of the 17 standard HTML / CSS Color Names.",
    answer: "Any 6 of these.",
    extra: "Acqua
    Fuchsia
    Lime
    Blue
    Green
    Maroon
    Navy
    Orange
    Red
    Olive
    Purple
    Teal
    Yellow
    Silver
    Black
    White
    Gray",
  )
  d1.cards.create( 
    question: "What does the onkeypress attribute do?",
    answer: "It fires a script when the user presses a key (on the keyboard).",
    extra: '<input type="text" onkeypress="displayResult()">
    Good to know:
    onkeypress is one of three other keyboard event attributes. The others are onkeypressdown (when the user is pressing a key down) and unkeyup (when a user releases a key).',
  )
  d1.cards.create( 
    question: "What is a client?",
    answer: "It's a piece of software or hardware made available to a server. Your HTML serves as a client that interacts with a server.",
  )
  d1.cards.create( 
    question: "Does the Internet have a hall of fame?",
    answer: "Yes it does! It's an honorary lifetime achievement granted by the Internet Society, Tim Berners-Lee is actually one of the inductees.",
  )
  d1.cards.create( 
    question: "Who invented HTML?",
    answer: "Tim Berners-Lee, also known as 'TimBL', who's also the inventor of the World Wide Web.",
    extra: "He made a proposal for an information management system in March 1989, and he implemented the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet sometime around mid November of that same year.",
  )
  d1.cards.create( 
    question: "Is HTML a programming language?",
    answer: "No! HTML is a markup language, it's purpose is to annotate a document, unlike programming languages that are used to describe and execute processes.",
  )
  d1.cards.create( 
    question: "What does the <mark> tag do?",
    answer: "It defines marked /highlighted text!",
    extra: "<p>Do not forget to buy <mark>milk</mark> today.</p>",
  )
  d1.cards.create( 
    question: "What's the difference between a static and a dynamic page?",
    answer: "Static websites contained fixed information, like for example an about page. Dynamic sites change it's content based on a series of events like Twitter's homepage.",
  )
  d1.cards.create( 
    question: "What is a tag?",
    answer: "Tags are keywords surrounded by angle brackets, they're used to reference different elements across your file.",
    extra: "<html> <head> <p> <img> <div> <script>",
  )
  d1.cards.create( 
    question: "What does HTML stand for?",
    answer: "Hypertext Markup Language.",
  )
  d1.cards.create( 
    question: "Does HTML5 require CSS3?",
    answer: "No! HTML5 is just a markup language, it can get along with CSS2 as well.",
  )

d2 = Deck.create(title: "CSS", public: true,)
  d2.cards.create( 
    question: "",
    answer: "",
  )

d3 = Deck.create(title: "RUBY", public: true,)
  d3.cards.create( 
    question: "",
    answer: "",
  )

d4 = Deck.create(title: "JS", public: true,)
  d4.cards.create( 
    question: "",
    answer: "",
  )
