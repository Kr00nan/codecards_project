d1 = Deck.create(title: "HTML", public: true,)
  d1.cards.create( 
    question: "",
    answer: "",
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
