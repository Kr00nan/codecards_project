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
    question: " Which are the four different CSS combinators?",
    answer: " Descendant
    Matches all element that are descendants of a specified element. div p {
    Child
    All elements that are the immediate children of a specified element."
    extra:"",

  )
  d2.cards.create( 
    question: " What is an SVG file?",
    answer: " It’s a Scalable Vector Graphic.
    They’re used to define vector based graphics on the web, don’t lose any quality if they are zoomed or resized and are usually more lightweight than bitmap formats like JPG and PNG.
    You can treat SVG files like any other image file in CSS",
    extra: "",
   
  )d2.cards.create( 
    question: "How do you add shadows to text?",
    answer: " You can use the text-shadow property.",
    extra: " body
    {
    background-image: url('retina.svg'); background-repeat: no-repeat; background-attachment: fixed; background-position: center;
    } ",

  )d2.cards.create( 
    question: " You’d like to use a texture as background and need a small image to repeat iself over a large area. How do you do this?",
    answer: " You can use the background-repeat property.",
    extra: " body
    {
    background-image: url('paper.gif'); background-repeat: repeat;
    }
    Useful Values:
    repeat-x: The background image will be repeated only horizontally.
    repeat-y: The background image will be repeated only vertically. ",

  )d2.cards.create( 
    question: " How do you make a rounded border?",
    answer: " You can use the border-radius property.",
    extra: " div
    {
    border: 2px solid; border-radius: 25px; }
    Good to know:
    You can also specify the corners.
    border-top-left-radius: 25px; border-top-right-radius: 25px; border-bottom-right-radius: 25px; border-bottom-left-radius: 25px; ",

  )d2.cards.create( 
    question: " What does the overflow property do?",
    answer: " It specifies what happens if content overflows an element's box.",
    extra: " div
    {
    width: 150px; height: 150px; overflow: scroll; }
    Useful Values:
    visible: The overflow is not clipped. This is the default value.
    hidden: The overflow is clipped.
    scroll: The overflow is clipped, but a scroll-bar is added to see the rest. ",

  )d2.cards.create( 
    question: " What does the margin property do?",
    answer: " You can use the margin property to clear areas around an element.
    ",
    extra: " p{
      margin-top: 20px; margin-bottom: 20px; margin-right: 20px; margin-left: 20px;
      }
      /* Or margin:20px; to define all sides in a single line. The margin clears an area around an element (outside the border). It does not have a background color, and is completely transparent. */ ",
      ,

  )d2.cards.create( 
    question: " One image has a z-index of 1 and another has a z-index of 3. When they overlap, which one is on top?",
    answer: " The element with a z-index of 3.",
    extra: " #ontop {position: absolute: z-index: 3; }
      #behind { position: absolute; z-index: 1; }
      An element with greater stack order is always in front of an element with a lower stack order. Elements can also have a negative stack order. ",

  )d2.cards.create( 
    question: " What are the selectors for styling unvisited links, visited links, mouseover links and active links?",
    answer: " They are:
    a:link {
    text-decoration: none; }
    a:visited {
    text-decoration: none; }
    a:hover {
    text-decoration: underline; }
    a:active {
    text-decoration: underline; }",
    extra: " ",

  )d2.cards.create( 
    question: " What is an image sprite?",
    answer: " An image sprite is a collection of images put into a single image.
    ",
    extra: " img.first{
      width: 46px;
      height: 44px;
      background: url(mysprite.gif) 0 0;
      }
      img.second{
      width: 43px;
      height: 44px;
      background: url(mysprite.gif) -91px 0;
      }
      /* A web page with many images can take a long time to load so using sprites can help reduce the number of requests and save bandwith. */ ",

  )d2.cards.create( 
    question: " What is the difference between padding and margin?",
    answer: " Padding is the space between the content and the border (inside), whereas margin is the space outside the border.",
    extra: "  ",

  )d2.cards.create( 
    question: " You’d like to clear an area of 20px around the outside of an element, what’s the easiest way to do this?",
    answer: " You can use the margin property to clear areas around an element.",
    extra: " p{
      margin-top: 20px; margin-bottom: 20px; margin-right: 20px; margin-left: 20px;
      }
      /* Or margin:20px; to define all sides in a single line. The margin clears an area around an element (outside the border). It does not have a background color, and is completely transparent. */ ",

  )d2.cards.create( 
    question: " How can you modify the brightness, contrast and saturation of an image?",
    answer: " You can use the filter property to modify images",
    extra: " #footer {
      filter: grayscale(9); filter: sepia(0); filter: saturate(1); filter: brightness(4); filter: contrast(1); filter: blur(0px);
      /*
      You'll also need to include the vendor
      prefixes. Note filters are very new CSS properties and may not be supported by older browser versions. ",

  )d2.cards.create( 
    question: "How do you define a colour and specify its opacity in a single value?",
    answer: "You can use RGBA colour values to specify both the color and its alpha channel.",
    extra: " div
    {background-color:rgba(255,0,0,0.3);} / * red with opacity at 30% */ ",

  )d2.cards.create( 
    question: "What are the four types of positioning methods?",
    answer: " Static
    HTML elements are positioned static by default. A static positioned element is always positioned according to the normal flow of the page.
    Fixed
    Positioned relative to the browser window. It will not move even if the window is scrolled.
    Relative
    Positioned relative to its normal position.
    Absolute
    Positioned relative to the first parent element that has a position other than static.",
    extra: "  ",

  )d2.cards.create( 
    question: " How do you define an element that is resizable by the user?",
    answer: " The resize property specifies whether or not an element should be resizable by the user.",
    extra: " div {
      resize: both;
      overflow: auto; } ",

  )d2.cards.create( 
    question: " What does a CSS3 animation do?",
    answer: " It gradually change one style to another.",
    extra: " div {
      animation: myfirst 5s; }
      @keyframes myfirst { from {background: red;}
      to {background: yellow;} }
      /* This is the standard syntax, but remember to also include vendor prefixes for each browser.
      You can change as many properties you want and you can specify when the change will happen in percent, or you can use the keywords "from" and "to" (which represents 0% and 100%). */ ",

  )d2.cards.create( 
    question: " You’d like to use a gradient as the background of a div. How do you do this?",
    answer: " You can assign a linear or radial gradient value to it’s background property as such:",
    extra: " div {
      background: linear-gradient(red,
      blue); /* Starts with red at the top and ends in blue. Remember to also need to include vendor prefixes for each browser. */
      }
      Good to know:
      You can include the direction of the gradient and multiple color stops: background: linear-gradient(direction, color-stop1, color-stop2, ...); ",

  )d2.cards.create( 
    question: " How do you include comments in CSS?",
    answer: " By placing the comment inside an opening /* and closing */",
    extra: " .cd-container {
      /* this class is used to give a
      max-width to the element it is applied to, and center it horizontally when it reaches that max-width */
      width: 90%; max-width: 1170px; margin: auto;
      } ",

  )d2.cards.create( 
    question: " What does the following CSS do?
      p {font-family: Verdana, Arial, Helvetica;}",
    answer: " The CSS sets the font for the p element. If available in the browser, Verdana is used. If Verdana is not available, Arial is used. If Arial is not an option, Helvetica is utilized.",
    extra: "  ",

  )d2.cards.create( 
    question: " What is grouping?",
    answer: " When more than one selector shares the same declaration and are grouped together via a comma-separated list.",
    extra: " h1, h2, h3 {background: red;}
    /* This allows you to reduce the size of the CSS (every bit and byte is important) and sometimes make it more readable. */ ",

  )d2.cards.create( 
    question: " What is the difference between an ID selector and a CLASS?",
    answer: " An ID selector identifies and sets style to only one occurrence of an element, while a CLASS can be attached to any number of elements.",
    extra: " #id {
      color: yellow; }
      .class {
      color: blue; } ",

  )d2.cards.create( 
    question: " You can name specific and generic font families in CSS. What are the 5 generic families?",
    answer: " Sans Serif
    No small projecting features called "serifs" at the end of strokes.
    Serif
    With “serifs”.
    Fonts written in a conjoined and/or flowing manner.
    Monospace
    Letters and characters each occupy the same amount of horizontal space.
    Dynamic and different from standard fonts. Their style is often exaggerated and more typical of posters and quirky themes.",
    extra: "  ",

  )d2.cards.create( 
    question: " What are the three methods of implementing CSS?",
    answer: " Inline, Embedded, and External.
    What’s the difference?
    Inline styles are styles that are written directly inside an HTML tag of a document. Inline styles affect only the tag they are applied to.
    Embedded styles are styles that are embedded in the head of a document.
    External styles are styles that are written in a separate document and then attached to various Web documents.",
    extra: "  ",

  )d2.cards.create( 
    question: " You’d like to justify the text inside of a paragraph. How do you do this?",
    answer: " You can use the text-align property with a justify value.",
    extra: " div
    { text-align:justify; }
    Other useful values:
    left: Aligns the text to the left.
    right: Aligns the text to the right. center: Centers the text.
    inherit: Inherits this property from its parent element. ",
    extra: " div
    { text-align:justify; }
    Other useful values:
    left: Aligns the text to the left.
    right: Aligns the text to the right. center: Centers the text.
    inherit: Inherits this property from its parent element. ",

  )d2.cards.create( 
    question: "  You’d like to use a texture as background and need a small image to repeat iself over a large area. How do you do this? ",
    answer: " You can use the
    background-repeat
    property.",
    extra: " body
    {
    background-image: url('paper.gif'); background-repeat: repeat;
    }
    Useful Values:
    repeat-x: The background image will be repeated only horizontally.
    repeat-y: The background image will be repeated only vertically. ",

  )d2.cards.create( 
    question: "  You’d like to rotate a div and all of its content 9 degrees. What’s the best way to do this? ",
    answer: "  You can use the transform property to apply a 2D or 3D transformation to an element. This property allows you to rotate, scale, move and skew elements. ",
    extra: " div {
      -ms-transform: rotate(9deg); -webkit-transform: rotate(9deg); transform: rotate(9deg);
      } ",

  )d2.cards.create( 
    question: "  You don’t want any elements to float beside a paragraph. What’s the easiest way to to do this? ",
    answer: "  You can use the clear property to define which sides of an element other floating elements are not allowed on. ",
    extra: " img { float:left;
  }
  p.clear { clear:both; } ",

  )d2.cards.create( 
    question: "  How can you set a dashed border? ",
    answer: "  You can use the border property border-style with a dashed value. ",
    extra: " div
    {
    border-width:5px; border-style:dashed; border-color:#ff0000; } ",

  )d2.cards.create( 
    question: "  How do you select all visited links? ",
    answer: "  Link element followed by :visited. ",
    extra: " a:visited ",

  )d2.cards.create( 
    question: "  What does a css media query allow you to do? ",
    answer: "  They allow you to change the css depending on which device it's viewed on so that your website adapts. ",
    extra: " @media all and (max-width: 699px) { body {
      background: #ccc; }
      } ",

  )d2.cards.create( 
    question: " What does CSS stand for? ",
    answer: "  Cascading Style Sheets! ",
    extra: " Why “cascading”?
    Because the style sheet with the highest priority controls the content display. Declarations not set in the highest priority source are passed on to a source of lower priority, such as the user agent style. This process is called cascading. You can think of it as a waterfall in which the top holds the highest priority in defining everything that cascades to the bottom. ",

  )d2.cards.create( 
    question: " How can you make text italic? ",
    answer: "  You can use the font-style property to specify the font style for a text. ",
    extra: " p.normal {font-style:normal} p.italic {font-style:italic} p.oblique {font-style:oblique} ",

  )d2.cards.create( 
    question: "  How could you add styling to a link once it’s hovered? ",
    answer: "  You can use the :hover selector to select elements that will show their style when you hover over them. ",
    extra: " a:hover
    { background-color:yellow; } ",

  )d2.cards.create( 
    question: "  You’d like to apply a unique style to just one paragraph in your html. How can you do this? ",
    answer: "  Use an #id selector to style the element with the specified id in your HTML. ",
    extra: " #uniquep
    { background-color:yellow; } ",

  )d2.cards.create( 
    question: "  You’d like a div to smoothly change size when you hover over it. How do you do this? ",
    answer: "  You can use the transition property. ",
    extra: " div
    {
    width:100px;
    transition: width 2s;
    -webkit-transition: width 2s; /* Safari */ -moz-transition: width 2s; /* Firefox * / }
    div:hover {width:300px;}
    Good to know:
    You could also use a CSS animation with defined keyframes. Make sure to always include the vendor prefixes f ",

  )d2.cards.create( 
    question: "  When hovering over an image, you’d like the cursor to indicate that something is to be moved. How do you do this? ",
    answer: "  You can use the cursor property to change the cursor as it hovers over the selected element. ",
    extra: " img
    { cursor:move; }
    Useful values:
    help indicates that help is available. progress indicates that the program is busy (in progress).
    pointer turns the cursor into a pointer and indicates a link. ",

  )d2.cards.create( 
    question: " You’d like to make a text bold. How do you do this with CSS? ",
    answer: "  You can use the
    font-weight
    property to set how thick or thin characters in a text should be displayed. ",
    extra: "p.normal {font-weight:normal;} p.thick {font-weight:bold;} p.thicker {font-weight:900;}
    Values 100 to 900 defines from thin to thick characters. Value 400 is the same as normal, and 700 is the same as bold. ",

  )d2.cards.create( 
    question: " You’d like to change the font of a headline to Times New Roman. How do you do this? ",
    answer: "  You can use the font-family property to specify the font of an element. ",
    extra: " p
    {
    font-family: "Times New Roman" ,Georgia,Serif;
    }
    Good to know:
    The font-family property can hold several font names as a "fallback" system. If the browser does not support the first font, it tries the next font. ",

  )d2.cards.create( 
    question: "  You’d like to increase the distance between words. How do you do this? ",
    answer: "  You can use the
    word-spacing
    property to increase or decrease the space between words. ",
    extra: " p
    { word-spacing:30px; } ",

  )d2.cards.create( 
    question: "  You’d like to change the line height of a paragraph. How? ",
    answer: "  You can use the line-height property to specify the line height. ",
    extra: " p
    {
    line-height: 25px; } ",

  )d2.cards.create( 
    question: " You want to center align a paragraph. How do you do this? ",
    answer: "  You can use the text-align property to specify the horizontal alignment of text in an element. ",
    extra: " h1 {text-align:center} h2 {text-align:left}
    h3 {text-align:right} ",

  )d2.cards.create( 
    question: "  You’d like the characters in a headline to have more spacing. How do you do this? ",
    answer: "  By using the letter-spacing property you can increase or decrease the space between characters in a text. ",
    extra: " h1 {
      letter-spacing: 2px; }
      h2 {
      letter-spacing: -3px; } ",

  )d2.cards.create( 
    question: "  An element with width:50% becomes far too large when the browser window is resized. How do you set a maximum size? ",
    answer: "  You can use the max-width and max-height property to set the maximum size of an element. ",
    extra: " div
    {
    width: 50%; max-width: 1020px; } ",

  )d2.cards.create( 
    question: "  Your fixed nav bar is under all your other elements and can’t be seen. How do you fix this? ",
    answer: "  By changing its z-index property to a higher value. ",
    extra: " nav
    {
    position: fixed; z-index: 5;
    }
    Good to know:
    The z-index property specifies the stack order of an element.
    An element with greater stack order is always in front of an element with a lower stack order.
    z-index only works on positioned elements (position:absolute, position:relative, or position:fixed) ",

  )d2.cards.create( 
    question: "  You want to hide an element and make it invisible on your site. How do you do this? ",
    answer: "  By using the visibility property with a hidden value. ",
    extra: " h2
    {
    visibility: hidden; }
    Tip:
    Even invisible elements take up space on the page. Use the "display" property to create invisible elements that do not take up space. ",

  )d2.cards.create( 
    question: "  You don’t want an image to float next to your text. How do you fix this? ",
    answer: "  By using the clear property you can specify which side(s) of an element other floating elements are not allowed on. ",
    extra:" img
    {
    float: left;
    }
    p.clear
    {
    clear: both; } ",

  )d2.cards.create( 
    question: " How do you add a shadow to an element? ",
    answer: "  By using the box-shadow property. ",
    extra: " p
    {
    box-shadow: 10px 10px 5px #888888; }
    Useful values:
    h-shadow
    Required. The position of the horizontal shadow.
    v-shadow
    Required. The position of the vertical shadow.
    blur
    Optional. The blur distance.
    color
    The color of the shadow. ",

  )d2.cards.create( 
    question: "  How do you add a border to an element? ",
    answer: "  By using the border property. ",
    extra: " p
    {
    border: 5px solid red; } ",
  )

  )d2.cards.create( 
    question: "  How do you place an image as the background of a div with CSS? ",
    answer: "  By using the background image property. ",
    extra: "  By using the background image property. ",
  )
  
  )d2.cards.create( 
    question: " How do you make an element transparent with CSS? ",
    answer: "  Use the opacity property to describe the transparency-level ",
    extra: " div
    {
    opacity: 0.1; }
    Tip:
    The opacity property describes the transparency-level, where 1 is not transparent at all, 0.5 is 50% see-through, and 0 is completely transparent. ",
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
