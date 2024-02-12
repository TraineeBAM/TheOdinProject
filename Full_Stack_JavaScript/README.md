***

<h1>Full Stack JavaScript Path</h1>

***

<h2>Assignments</h2>

        Below you will find my solutions to the various assignments in TOP Full Stack JavaScript path.

| Course | Module | Title |
| ------ | ------------ | ---- |
| Tables | Basics |[Intro](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/Tables/Tables_Basics/Intro)|
| Tables | Basics |[Animals Table](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/Tables/Tables_Basics/animal-table)|
| Tables | Basics |[Dogs Table](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/Tables/Tables_Basics/dogs-table)|
| Tables | Basics |[Timetable](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/Tables/Tables_Basics/timetable)|
| Tables | Advanced |[Captions](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/Tables/Tables_Advanced/captions)|
| Tables | Advanced |[Spending Record](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/Tables/Tables_Advanced/spending-record)|
| Tables | Assessment |[Planets](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/Tables/Tables_Assessment)|
| Forms | Basics |[Intro](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/Forms/Your_first_form)|
| Forms | Basics |[Payment Form](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/Forms/Payment_form)|
| Forms | Basics |[Speaker Submission](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/Forms/Speaker_submission)|
| Forms | Validation |[MDN Form Validation 1](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/Forms/mdn_form_validation/form_validation_1)|
| Forms | Validation |[MDN Form Validation 2](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/Forms/mdn_form_validation/form_validation_2)|
| Forms | Project |[Sign-up Form](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/projects/sign-up-form)|
| CSS Grid | Practice Exercise #1 |[Holy Grail Layout](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/CSS_Grid/01-grid-layout-1)|
| CSS Grid | Practice Exercise #2 |[Holy Grail Layout (flexible)](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/CSS_Grid/02-grid-layout-2)|
| CSS Grid | Practice Exercise #3 |[Holy Grail Mockup](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/CSS_Grid/03-grid-layout-3)|
| CSS Grid | Project |[Admin Dashboard](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/projects/admin_dashboard)|
| JavaScript | Project |[Library](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/projects/library)|
| JavaScript | Project |[Tic Tac Toe](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/projects/tic_tac_toe)|
| JavaScript | Project |[Restaurant Page](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/projects/restaurant_page/dist)|
| JavaScript | Project |[ToDo (incomplete, will return)](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/projects/todo/dist)|
| JavaScript | Project |[ToDo (Tutorial Example)](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/projects/todoV2)|
| JavaScript | Project |[Pathfinder Form Validation](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/projects/pathfinder_CSV_generator)|
| JavaScript | Tutorial |[APIs - GIF Generator](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/APIs/intro_tutorial)|
| JavaScript | Project |[Weather App](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/projects/weather_app)|
| Advanced HTML & CSS | Animation |[Button Hover](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/animation/01-button-hover)|
| Advanced HTML & CSS | Animation |[Pop Up](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/animation/02-pop-up)|
| Advanced HTML & CSS | Animation |[Dropdown Menu](https://traineebam.github.io/TheOdinProject/Full_Stack_JavaScript/animation/03-dropdown-menu)|

***

<h2>Knowledge Check</h2>

        Please see below for my answers to the various knowledge checks in TOP Full Stack JavaScript path.

***

<details>
<summary><h3>Emmet</h3></summary>

***
<h4>Why should you use Emmet?</h4>

>It helps you to write HTML and CSS more efficiently by providing access to a range of different shortcuts.

***
<h4>What are some useful Emmet abbreviations?</h4>

><ul>
><li><code>!</code> will generate a HTML boilerplate.</li>
><li>"link:css" will auto populate the css link tag in a HTML file.</li>
><li>"ul>li*x" will generate a list with x list items.</li>
><li>"bd+" in CSS will set <code>border:1px solid #000</code></li>
></ul>

***
<h4>What syntax would you use to create this element <code><\p class="text"><\/p></code>?</h4>

>You would type "p.text".

***
<h4>What syntax expands to an element with a child element inside of it? For example: <code><div><p></p></div></code></h4>

>The greater than (>) symbol.<br>
>The example above would be written "div>p".

***
<h4>What syntax would you use to create three elements that have the same class name?</h4>

>You can use the * symbol.<br>
>E.g. To create three div elements with the class name "items" you could write "div.items*3".

***

</details>

***

<details>
<summary><h3>SVG - Scalable Vector Graphics</h3></summary>

***
<h4>What is the <code>xmlns</code> attribute?</h4>

>This stands for "XML NameSpace" and specifies the dialect of XML that is being used.

***
<h4>What are some situations where you wouldn’t want to use SVG?</h4>

>SVG is very inefficient at storing complex images which means that photo-realistic or highly detailed/textured images are not good use cases for SVG. 

***
<h4>What are the benefits of “inlining” your SVGs? What are the drawbacks?</h4>

>The benefit is that the properties of the SVG will be visible to your code, allowing it to be altered dynamically by CSS or JS.<br>
>The drawback is that your code is harder to read, your page is less cacheable and if the SVG is large the rest of your HTML could take longer to load.

***

</details>

***

<details>
<summary><h3>Tables</h3></summary>

***
<h4>What is a table?</h4>

>A structured set of data made up of rows and columns.

***
<h4>Why is it a bad idea to use HTML Tables for page layout?</h4>

><ol>
><li>Reduces accessibility for visually impaired users.</li>
><li>Code is more difficult to write, maintain and debug.</li>
><li>Tables are not automatically responsive.</li>
></ol>

***
<h4>What are caption elements useful for?</h4>

>Allows users to quickly understand what type of information the table is likely to contain.<br>
>This is especially valuable for visually impaired readers who would otherwise need their screen reader to read out the contents of many cells in order to establish what the table is about.

***
<h4>What is the scope attribute?</h4>

>Used within the <code><th></code> element to tell screen readers exactly what cells the header is a header for.

***

</details>

***

<details>
<summary><h3>Default Styles</h3></summary>

***
<h4>Why would you want to use a CSS reset?</h4>

>To clear all browser default CSS styles to ensure that your webpage will be styled consistently across different browsers.

***

</details>

***

<details>
<summary><h3>CSS Units</h3></summary>

***
<h4>Why would you want to use em or rem for font-size instead of px?</h4>

>Enhances readability for users who modify their browsers base font-size.

***
<h4>What are some instances where you might want to use vh and vw?</h4>

>When designing full-height heroes or full-screen app interfaces.

***
<h4>What are some instances where you might want to use px instead of a relative unit?</h4>

>When dealing with things like margins and padding.

***

</details>

***

<details>
<summary><h3>More Text Styles</h3></summary>

***
<h4>What are the 2 ways to add fonts that are not installed on a user’s computer?</h4>

> By using either the <code>link</code> tag or an <code>@import</code> tag in your HTML to import it.

***
<h4>What is the ‘system font stack’ and why would you want to use it?</h4>

>The default system font of a particular operating system.<br>
>Using them can be beneficial to performance because the browser doesn't need to download any font files.

***
<h4>Which property would you use to increase or decrease the space between letters in a word?</h4>

>The <code>letter-spacing</code> property.

***
<h4>Which property would you use to increase or decrease the space between lines in a paragraph?</h4>

>The <code>line-height</code> property.

</details>

***

<details>
<summary><h3>More CSS Properties</h3></summary>

***
<h4>Which property would you use to make an element transparent?</h4>

>You would use the <code>opacity</code> property followed by a value between 0 (invisible) to 1 (visually solid).<br>
><code>opacity</code> is the opposite to transparency.

***
<h4>Which property would you use to make a background image tile?</h4>

>To make a background image tile you would use the <code>background-image</code> property.

***
<h4>Which property would you use to add scrollbars to an element?</h4>

>You can use the <code>overflow</code> property to add scrollbars to an element.<br>
>To add scrollbars you would use either <code>overflow: scroll;</code> or <code>overflow: auto;</code>

***
<h4>Which property would you use to add a shadow behind an element?</h4>

>The <code>box-shadow</code> can be used to add a shadow behind an element.<br>
>This property is described by X and Y offsets relative to the element, blur and spread radius and color.<br>
>e.g. <code>box-shadow: 12px 12px 2px 1px gold;</code>

***
<h4>Which property would you use to create rounded corners on an element?</h4>

>You can use the <code>border-radius</code> property to do this.<br>
>This property is described by one, two, three or four length or percentage values which are used to set a single radius for the corners.

***
<h4>How would you use border-radius to make a circular element?</h4>

>Provided your element was equal in height and width, you could simply use <code>border-radius: 50%</code> in order to create a circular element.

</details>

***

<details>
<summary><h3>Advanced Selectors</h3></summary>

***

<h4>What is the difference between the child combinator and the descendant combinator?</h4>

>The child combinator is more specific and can be used to select only direct children.<br>
>The descendant combinator will select <strong>all</strong> children and any grand-childen under them.

***

<h4>How does the syntax of pseudo-classes and pseudo-elements differ?</h4>

>pseudo-classes use ":" (e.g. <code>:first-child</code>, <code>:hover</code>, <code>:active</code>).
>pseudo-elements use "::" (e.g. <code>::marker</code>, <code>::first-letter</code>, <code>::selection</code>).

***

<h4>Do pseudo-classes exist somewhere in HTML? Do pseudo-elements?</h4>

>Pseudo-classes are used to target elements that already exist in HTML, whereas pseudo-elements <strong>don't</strong> normally exist in the markup.

***

<h4>Name two ways you could select every second child of an element, starting with the first.</h4>

><code>:nth-child(2n)</code><br>
><code>:nth-child(even)</code>

***

<h4>What is the difference between div:first-child and div:last-child? What will each select?</h4>

>first-child will select the first child of the div, whereas last-child would select the last.<br>
><strong>NOTE:</strong>If there is only one div child then both last and first child would select this child.

***

<h4>What selector would you use to style a button a user is currently hovering over? How about one that is currently being clicked on?</h4>

>For a button being hovered over you would use <code>:hover</code>.<br>
>For a button currently being clicked over you would use <code>:active</code>.

***

<h4>How could you select all input elements with a type of text?</h4>

>To achieve this you would use an Attribute selector such as <code>[attribute="value"]</code>.

***

<h4>How could you select all classes that begin with thunder?</h4>

>To select all classes beginning with "thunder" you would use <code>[class^="thunder"]</code>.

***

</details>

***

<details>
<summary><h3>Positioning</h3></summary>

***

<h4>What is the difference between static and relative positioning?</h4>

>The difference between static and relative positioning is that with <code>position: relative</code>, you can use properties such as <code>top</code>, <code>right...(etc).</code> to displace the element relative to its normal position in the flow of the document.

***

<h4>What is absolute positioning useful for?</h4>

>Absolute positioning is useful for precisely placing elements on a page.

***

<h4>What is the difference between fixed and sticky positioning?</h4>

>The difference is that <code>position: fixed</code> elements remain fixed to the viewport at all times, while <code>position: sticky</code> elements behave like normal elements until it reaches a specified scroll position.

***

</details>

***

<details>
<summary><h3>CSS Functions</h3></summary>

***

<h4>What are the four CSS math functions we covered above?</h4>

><ol>
><li><code>calc()</code>: A function that can be used to perform calculations. E.g. <code>--main: calc(100vh - calc(var(--header) + var(--footer)));</code></li>
><li><code>min()</code>: A function that sets a boundary for the maximum allowed value. E.g. <code>width: min(150px, 100%);</code></li>
><li><code>max()</code>: A function that sets a boundary for the minimum allowed value. E.g. <code>width: max(100px, 4em, 50%);</code></li>
><li><code>clamp()</code>: This function takes 3 values being the smallest value, an ideal value and the largest value. E.g. <code>font-size: clamp(320px, 80vw, 60rem);</code></li>
></ol>

***

<h4>How do we use CSS math functions in our CSS?</h4>

>You can use CSS math function with <code>calc()</code>.<br>
>Additionally, you can do math inside the parenthesis of <code>min()</code> and <code>max()</code>. E.g. <code>width: min(80ch, 100vw - 2rem);</code>.

***

<h4>How can CSS functions help make websites and applications more responsive?</h4>

>By using the <code>min()</code>,<code>max()</code> and <code>clamp()</code> functions we can ensure that our content is always presented to the viewer appropriately even if different display settings are in use.

***

</details>

***

<details>
<summary><h3>Custom Properties</h3></summary>

***

<h4>How would you declare a custom property with a name of text-color?</h4>

><code>--text-color: value;</code> is how you would declare a custom property called text-color.

***

<h4>How would you access a custom property with a name of background-color?</h4>

>You would use <code>var(--background-color);</code>

***

<h4>Where would you declare a custom property to have its scope be global and accessible by all other selectors?</h4>

>It is best practice to declare a custom property in <code>:root</code>.

***

<h4>Where would you declare a custom property so that a user’s theme setting from their OS or browser was taken into account?</h4>

>You would declare the custom property within a <code>@media (prefers-color-scheme: dark)</code> block.<br>
>It should be noted that the only two accepted theme settings are "dark" and "light".

***

</details>

***

<details>
<summary><h3>Browser Compatibility</h3></summary>

***

<h4>What is the most used browser currently?</h4>

>Currently Chrome by Google is the most popular browser.

***

<h4>What was the original name of the first web browser?</h4>

>"WorldWideWeb" browser was the original name. This was later changed to "Nexus" to avoid confusion with the World Wide Web.

***

<h4>How are mobile browsers different on Apple mobile operating systems from Android?</h4>

>On iOS and iPadOS, Safari is the only supported browser. This means that even if a user installs Chrome or Firefox, they still utilise the Safari rendering engine named "WebKit".

***

</details>

***

<details>
<summary><h3>Frameworks and Preprocessors</h3></summary>

***

<h4>What are some advantages of using a CSS framework?</h4>

><ul>
><li>Ready made documentation.</li>
><li>Easy access to support via online communities.</li>
><li>Faster project delivery.</li>
><li>Many design decisions are already made for you.</li>
><li>Assists with responsive design.</li>
></ul>

***

<h4>What are some disadvantages of using a CSS framework?</h4>

><ul>
><li>Difficulty with overriding framework code.</li>
><li>Websites can end up looking very similar to others.</li>
><li>Can cause performance issues due to unnecessary code.</li>
></ul>

***

<h4>What are some advantages of using a CSS preprocessor?</h4>

><ul>
><li>Reduces code repetition.</li>
><li>Make code easier to maintain.</li>
><li>Keeps your code more organised.</li>
></ul>

***

<h4>What are some disadvantages of using a CSS preprocessor?</h4>

><ul>
><li>Can make debugging harder.</li>
><li>Compilation slows down development.</li>
><li>Increased CSS file size.</li>
><li>Requires extra tooling</li>
><li>Much of the functionality that could be achieved with a CSS preprocessor can now be done with vanilla CSS.</li>
></ul>

***

</details>

***

<details>
<summary><h3>Form Basics</h3></summary>

***

<h4>Explain what the form element is for and what two attributes it should always include.</h4>

>The form element is to define a form and is a container element.<br>
>The two attributes a form should always include are the <code>action</code> and <code>method</code> attributes.<br>
>The <code>action</code> attribute accepts a URL and tells the form where the form data should be sent for processing.<br>
>The <code>method</code> attribute tells the browser which HTTP request method it should use to submit the form (typically GET or POST).

***

<h4>Explain what form controls are at a high level.</h4>

>All the elements that a user will interact with on the form.

***

<h4>What is the name attribute for?</h4>

>The name attribute tells the backend what each piece of data represents.<br>
>Essentially, it is a variable name for the input.

***

<h4>What are the three most common form controls you can use for allowing users to select predefined options?</h4>

><ol>
><li>Dropdown</li>
><li>Radio Buttons</li>
><li>Checkboxes</li>
></ol>

***

<h4>What are the three types of buttons in HTML?</h4>

><ol>
><li>Submit</li>
><li>Reset</li>
><li>Generic</li>
></ol>

***

<h4>What are the two most challenging aspects of styling forms?</h4>

><ol>
><li>The default browser styles.</li>
><li>Certain form controls being resistant to custom styling.</li>
></ol>

***

</details>

***

<details>
<summary><h3>Form Validation</h3></summary>

***

<h4>What does the required validation do?</h4>

>Ensures that specific fields are filled out prior to form submission.

***

<h4>What validations can you use for checking text length?</h4>

>You can use both the <code>minlength</code> and <code>maxlength</code> validations for checking text length.<br>
>E.g. <code>minlength="5" maxlength="20"</code> would set a text length requirement between 5 and 20.

***

<h4>How can you validate the minimum and maximum of numeric inputs?</h4>

>By using the <code>min</code> and <code>max</code> validation you can set limits for numerical inputs.
>E.g. <code>min="1" max="5"</code> would limit the numerical input to between 1 and 5.

***

<h4>What can you use the pattern validation for?</h4>

>Pattern validation is useful for ensuring that data matches a particular pattern so that the correct information is obtained from users.<br>

***

<h4>What pseudo CSS selectors are available for styling valid and invalid inputs?</h4>

>You could use both <code>:valid</code> and <code>:invalid</code> pseudo selectors for styling valid/invalid inputs.

***

</details>

***

<details>
<summary><h3>Introduction to Grid</h3></summary>

***

<h4>How can you use Flex to make a two-dimensional layout?</h4>

>You can use Flex to make a two-dimensional layout by combining multiple flex containers.

***

<h4>Why was CSS Grid introduced?</h4>

>It allows for easy placement of items in both one and two dimensions while maintaining the desired size.

***

<h4>Which CSS layout module would you use to easily make equal sized items in a container?</h4>

>To make equal sized items in a container you would use the CSS Grid layout.

***

</details>

***

<details>
<summary><h3>Creating a Grid</h3></summary>

***

<h4>How does an HTML element become a grid item?</h4>

>A HTML element becomes a grid item when the property of either <code>display: grid</code> or <code>display: inline-grid</code> is applied to it.

***

<h4>What is the space between lines on the grid?</h4>

>The space between lines on a grid is referred to as the "grid track".

***

<h4>How do you set gutters (also known as alleys) in the grid?</h4>

>Gutters/alleys in the grid is the gap between grid rows and columns. This gap can be adjusted with the <code>gap</code> property.<br>
>E.g. <code>gap 10px 50px</code> would set a row gap of 10px and a column gap of 50px.

***

<h4>Describe what happens when you have more content than defined tracks.</h4>

>When there is more content then there are defined tracks, the extra content is placed in an "implicit grid" automatically which follows a similar logic to the "explicit grid".

***

<h4>How could you change the size for those undefined tracks?</h4>

>You can change the size of the implicit grid (undefined tracks) by using <code>grid-auto-rows</code> and/or <code>grid-auto-columns</code>

***

</details>

***

<details>
<summary><h3>Positioning Grid Elements</h3></summary>

***

<h4>Explain the difference between a track and a line.</h4>

>The difference between a track and a line is that a track is essentially any single column or row, and the lines are what divide these tracks.<br>
>It should be noted that tracks have a start and end line, so a 1x3 grid would have horizontal lines ranging from 1 to 4.

***

<h4>What is the smallest unit on a grid?</h4>

>A "cell" is the smallest unit on a grid.

***

<h4>What kind of value do we give to the grid-column-start or grid-column-end properties?</h4>

>We give <code>grid-column-start</code> and <code>grid-column-end</code> a numerical value that defines the line to start/end on.

***

<h4>Which property can we use to combine all the start and end values for a grid item?</h4>

>You can use the <code>grid-area</code> property to combine all the start and end values for a grid item.<br>
>An example of the syntax would be <code>grid-area: 1 / 1 / 3 / 6;</code> which is equal to <code>grid-row-start</code>/ <code>grid-column-start</code>/ <code>grid-row-end</code>/ <code>grid-column-end</code>.

***

<h4>Which grid container property can map out a visual structure of grid items?</h4>

>To map out a visual structure of grid items you can use the <code>grid-template-areas</code> property in the grid container.

***

</details>

***

<details>
<summary><h3>Advanced Grid Properties</h3></summary>

***

<h4>How do you create several grid tracks of the same size without manually typing each one out?</h4>

>You can use the <code>repeat()</code> function to create several grid tracks of the same size.<br>
>An example of how to use it would be: <code>grid-template-rows: repeat(2, 150px)</code>.<br>
>In the above example, we are creating 2 rows, each with a value of 150px.

***

<h4>What is the difference between a static and dynamic size value?</h4>

>The difference between a static and dynamic size value is that static values are fixed at a defined size (e.g. 150px), whereas dynamic values are flexible/responsive sizes.<br>

***

<h4>How can you assign a grid track a flexible value that changes depending on the remaining space available in the grid?</h4>

>To assign a flexible value to a grid track you would use fraction units (<code>fr</code>).<br>
>As an example, a 10 column grid with a total size of 1000px, with each grid item given a column track size of <code>1fr</code> would mean each item is 1/10th of the total size (100px).

***

<h4>How can you assign grid tracks an uneven distribution of the remaining space in a grid?</h4>

>You can assign an uneven distribution to grid tracks by providing a value greater than <code>1fr</code>.<br>
>Using the above example, if we assign the first 2 columns a size value of <code>2fr</code> then they will always take up twice as much size as the <code>1fr</code> values.

***

<h4>Which CSS functions will return the smallest or largest value supplied to them?</h4>

>The functions that will return the smallest or largest value supplied to them are <code>min()</code> and <code>max()</code>.

***

<h4>Which CSS Grid-only function allows you to supply a minimum and maximum track size that is calculated in realtime?</h4>

>For dynamic minimum and maximum track sizes you would use the <code>minmax()</code> function.<br>
>This function is passed two arguments being the minimum size the track can be, as well as the maximum size.<br>
>E.g. <code>grid-template-columns: repeat(5, minmax(100px, 200px));</code> will ensure the column is never less than 100px, or more than 200px.

***

<h4>Which global CSS function allows you to supply a minimum, ideal, and maximum value that is calculated in realtime?</h4>

>The global equivalent of <code>minmax()</code> would be <code>clamp()</code>.<br>
>This function is passed three arguments being minimum-size, ideal-size and maximum-size. It is advisable to use a static size for the minimum and maximum size, and a dynamic value for the ideal size.<br>
>E.g. <code>width: clamp(500px, 80%, 1000px);</code> would create a width equal to 80% of the parent width, down to a minimum of 500px and up to a maximum of 1000px.

***

<h4>What attribute of repeat() can be used to fill in as many grid tracks as possible, given certain constraints?</h4>

>The attributes <code>auto-fit</code> and <code>auto-fill</code> can be used to fill as many grid tracks as possible.

***

<h4>What is the difference between auto-fit and auto-fill?</h4>

>The difference between auto-fit and auto-fill is that auto-fill will leave empty tracks, whereas auto-fit will adjust and stretch the tracks to fill available space without leaving any empty tracks.

***

</details>

***

<details>
<summary><h3>Using Flexbox and Grid</h3></summary>

***

<h4>When might you use Flexbox over Grid?</h4>

>Flexbox is preferable to Grid in Content First Design, where controlling the layout isn't the priority.

***

<h4>When might you use Grid over Flexbox?</h4>

>Grid would be used over Flexbox for Layout First Design, where there is a full understanding of what the finishing container should look like.

***

<h4>When might you use the two of these tools together?</h4>

>The ideal scenario for using both Flexbox and Grid is where you have a Grid layout for your content, but the Grid items set as Flex parents.

***

</details>

***

<details>
<summary><h3>Objects and Object Constructors</h3></summary>

***

<h4>Write an object constructor and instantiate the object.</h4>

><code>function Book(title, author, pages, read) {<br>
>this.title = title;<br>
>this.author = author;<br>
>this.pages = pages;<br>
>this.read = read;<br>
>this.info = function() {<br>
>console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`);<br>
>};<br>
>}<br>
><br>
>let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');<br>
>console.log(theHobbit.info()); //output: "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"</code>

***

<h4>Describe what a prototype is and how it can be used.</h4>

>The prototype is an object from which other objects inherit properties. This mechanism allows objects in JavaScript to share behavior and properties.<br>
>Prototype can be used to save memory by having common methods and properties shared among instances, rather than being defined separately each time.

***

<h4>Explain prototypal inheritance.</h4>

>Prototypal inheritance is where objects are able to inherit properties and methods directly from other objects.<br>
>In JavaScript, prototypal inheritance is the primary inheritance mechanism.

***

<h4>Understand the basic do’s and don’t’s of prototypal inheritance.</h4>

>Do's of Prototypal Inheritance:
><ol>
><li>Use Prototypal Inheritance for Shared Properties/Methods.</li>
><li>Modify the Prototype, Not Instances.</li>
><li>Understand the Prototype Chain.</li>
><li>Utilise Fallbacks for Missing Properties/Chains.</li>
></ol>
>
>Don'ts of Prototypal Inheritance:
><ol>
><li>Don't modify Built-in Prototypes.</li>
><li>Avoid Overwrite Prototypes Directly.</li>
><li>Avoid Circular References.</li>
><li>Avoid Modifying Prototypes in shared code.</li>
></ol>

***

<h4>Explain what Object.create does.</h4>

><code>Object.create()</code> allows you to create objects that inherit properties and methods from a specified prototype, while also giving you flexibility to add custom properties to the new object.

***

<h4>How does <code>this</code> behave in different situations?</h4>

>The behavior of <code>this</code> varies depending on the context in which it is used:
><ol>
><li>Global Context: Refers to the global object (e.g. `window` in browsers, `global` in Node.js).</li>
><li>Regular Function Calls: Refers to the global object (or `undefined` in strict mode).</li>
><li>Object Methods: Refers to the object on which the method was invoked.</li>
><li>Constructor Functions: Refers to the newly created instance.</li>
><li>Event Handlers: Refers to the element that triggered the event (in DOM events).</li>
></ol>

***

</details>

***

<details>
<summary><h3>Factory Functions and the Module Pattern</h3></summary>

***

<h4>Explain how scope works in JavaScript.</h4>

>Scope in JavaScript is about the current context of a variable.<br>
>Scopes can be either global (declared outside of any functions) or locally scoped (declared within a variable or curly braces).

***

<h4>Explain what closures are and how they help in creating private variables.</h4>

>Closures in JavaScript enable functions to access and remember the variables from their outer scope even after that scope has finished executing.<br>
>They help create private variables by encapsulating these variables within a function's scope, allowing data to be hidden and ensures that they can't be directly accessed or modified from outside the function.

***

<h4>Describe the common issues that you can face when working with constructors.</h4>

>Some common issues include:
><ul>
><li>Difficulty in Testing and Mocking: Caused if code relies to heavily on constructors (especially those with complex dependencies or side effects).</li>
><li>Multiple Inheritance: Attempting to mimic this can lead to complex prototype chains or prototype pollution.</li>
><li>Issues with the 'this' Context: Incorrect binding of 'this'.</li>
><li>Absence of Proper Encapsulation: All properties and methods are accessible from outside the object.</li>
></ul>

***

<h4>Describe private variables in factory functions and how they can be useful.</h4>

>Private variables in factory functions are variables that are only accessible from within the scope of the factory function and not from outside.<br>
>This helps in creating more modular and maintainable code while facilitating greater code security.

***

<h4>Describe how we can implement prototypal inheritance with factory functions.</h4>

>Prototypal inheritance can be achieved with factory functions by utilising the <code>object.create()</code> method.

***

<h4>Explain how the module pattern works.</h4>

>The module pattern involves using closures and immediate function invocation.<br>
>This creates a self-contained module with private members (variables and functions) and a public interface.

***

<h4>Describe IIFEs and what they stand for.</h4>

>IIFE = Immediately Invoked Function Expression.<br>
>This is where you wrap your factory function in parentheses and immediately invoke it.

***

<h4>Explain the concept of namespacing and how factory functions help with encapsulation.</h4>

>Namespacing is the concept of organising code by encapsulating it within a specific namespace or container to avoid naming conflicts.<br>
>Factory functions enable this encapsulation by allowing the creation of objects with private variables and methods.

***

</details>

***

<details>
<summary><h3>Classes</h3></summary>

***

<h4>Describe the pros and cons of using classes in JavaScript.</h4>

>The pros of using classes in JavaScript are:
><ol>
><li>Can improve the syntax via encapsulation.</li>
><li>Facilitates inheritance which promotes code reuse.</li>
><li>Provides a constructor function that is called automatically upon object instantiation.</li>
></ol>
>The cons of using classes in JavaScript are:
><ol>
><li>"Classes" don't technically exist in JavaScript and are syntactic sugar over the existing prototype system which can lead to confusion.</li>
><li>Can become very verbose resulting in greater code complexity or additional libraries.</li>
><li>Implicit binding of <code>this</code> which can lead to issues when methods are passed as callbacks or used in different contexts.</li>
></ol>


***

<h4>How does JavaScript’s object creation differ from a language like Java or Ruby?</h4>

><ul>
><li>JavaScript uses prototypal inheritance whereas most other languages use class-based inheritance.</li>
><li>Objects in JavaScript are highly dynamic.</li>
><li>JavaScript uses a dynamic form of typing called "duck typing" where the focus is on the properties and methods an object has rather than its explicit type.</li>
></ul>

***

<h4>Explain the differences between object constructors and classes.</h4>

>Some of the key differences between object constructors and classes are:
><ul>
><li>Classes provide a more concise syntax.</li>
><li>Classes use the <code>extends</code> keyword for inheritance whereas object constructors are prototype based.</li>
><li>Function declarations are hoisted whereas class declarations are not (you need to declare the class before using it).</li>
><li>Methods in classes are defined without the need for the <code>function</code> keyword.</li>
></ul>

***

<h4>What are “getters” & “setters”?</h4>

>A "getter" method is used to retrieve the value of a property and is defined using the <code>get</code> keyword followed by the property name.
>A "setter" method is used to modify the value of a property and is defined using the <code>set</code> keyword followed by the property name.

***

<h4>Describe computed names and class fields.</h4>

>Computed property names allow you to use an expression as the property name when defining an object.
>Class fields allow you to declare properties directly within a class without the need for a constructor.

***

<h4>Describe function binding.</h4>

>Function binding refers to the process of associating a function with a particular object.

***

<h4>Describe static properties.</h4>

>Static properties are defined using the <code>static</code> keyword and are properties that belong to a class rather than the instance of the class.

***

<h4>Describe private class features.</h4>

>Private properties are created with the <code>#</code> prefix and <strong>CANNOT</strong> be legally referenced outside of the class.<br>
>The privacy encapsulation of these class properties is enforced by JavaScript itself.

***

<h4>How is inheritance used with classes?</h4>

>Inheritance is used with classes with the <code>extend</code> keyword.<br>
>It is a way to create a relationship between classes where a subclass inherits properties and methods from a parent class.

***

<h4>Why is favoring Composition over Inheritance suggested?</h4>

><ul>
><li>Flexibility and Extensibility.</li>
><li>Avoidance of the fragile base class problem.</li>
><li>Encapsulation.</li>
><li>Code reusability.</li>
><li>Reduced coupling.</li>
><li>Dynamic behavior.</li>
><li>Easier testing.</li>
><li>Promotion of code aggregation.</li>
></ul>

***

</details>

***

<details>
<summary><h3>ES6 Modules</h3></summary>

***

<h4>Explain what npm is and where it was commonly used before being adopted on the frontend.</h4>

>NPM stand for "Node Package Manager".<br>
>These are used to help automate the process of downloading and upgrading libraries from a central repository.<br>
>Before being used on the front-end, NPM were originally used for node.js, a JavaScript runtime designed to run on the server.

***

<h4>Describe what npm init does and what package.json is.</h4>

>Running the <code>npm-init</code> command in your project directory will prompt you with a series of questions about your project (name, version, description, etc).<br>
>Once these questions are answered (defaults are usually fine), npm generates a 'package.json' file that contains information about the project including dependencies, scripts, config details and other metadata.

***

<h4>Know how to install packages using npm.</h4>

>To install packages using npm you use <code>npm install 'app name' --save</code>.

***

<h4>Describe what a JavaScript module bundler like webpack is.</h4>

>A JavaScript module bundler is a tool that simplifies the management and organisation or JavaScript code in large, complex web applications.<br>
>It addresses the challenges of working with numerous files and dependencies by bundling them into a more manageable and optimised format.

***

<h4>Explain what the concepts “entry” and “output” mean in relation to webpack.</h4>

>In relation to webpack, the concepts "entry" and "output" are key configuration options that define how the bundling process should start and where the bundled files should be generated.

***

<h4>Briefly explain what a development dependency is.</h4>

>A development dependency is a component/library that is necessary for the development, testing or building of a project but is not required for the runtime operation of the final project.

***

<h4>Explain what “transpiling code” means and how it relates to frontend development.</h4>

>Transpiling code means taking code written in one language and converting it to equivalent code in another language (usually at a higher abstraction level).<br>
>In frontend development, this typically involves converting code into a lower-level/more widely supported version to ensure compatibility with older browsers.

***

<h4>Briefly describe what a task runner is and how it’s used in frontend development.</h4>

>A task runner is a tool used to automate repetitive tasks and streamline the build process of a web application.<br>
>These tasks can include code compilation, file minification, image optimization and other preprocessing tasks.

***

<h4>Describe how to write an npm automation script.</h4>

>To write an NPM automation script, you define custom scripts in the "scripts" section of the projects "package.json" file.<br>
>Once defined, these scrips can be run using the <code>npm run 'script name'</code>.

***

<h4>Explain one of the main benefits of writing code in modules.</h4>

>The main benefit of writing code in modules is the enhancement of code organisation and maintainability.<br>
>Enhanced organisation enables better navigation and understanding of the codebase.<br>
>Enhanced maintainability facilitates easier updates, bug fixes and new features without disrupting the entire codebase.

***

<h4>Explain “named exports” and “default exports”.</h4>

>"Named exports" allow you to export multiple entities from a module with specific names.<br>
>"Default exports enable you to export a single, primary entity as the default export.<br>
>These can be used individually or combined depending on application requirements.

***

</details>

***

<details>
<summary><h3>Webpack</h3></summary>

***

<h4>How do you load CSS using webpack?</h4>

><ol>
><li>Install Required Packages: <code>npm install --save-dev style-loader css-loader</code></li>
><li>Configure Webpack by adding a module rule for handling CSS files: <code>test:/\.css$/,<br>
use:['style-loader', 'css-loader'],</code></li>
><li>Import CSS inside JavaScript file: <code>import './styles.css</code></li>
><li>Run Webpack: <code>npx webpack</code></li>
><li>Ensure Output is included in HTML: <code>script src="dist/main.js">/script</code></li>
></ol>

***

<h4>How do you load images using webpack?</h4>

><ol>
><li>Install Required Packages: <code>npm install --save-dev file-loader</code></li>
><li>Configure Webpack by adding a module rule for handling image files: <code>test: /\.(png|jpg|gif|svg)$/,<br>
use: [loader: 'file-loader'],</code></li>
><li>Import image inside JavaScript file: <code>import myImage from './images/my-image.png';</code></li>
><li>Use image in HTML/CSS</li>
><li>Run Webpack: <code>npx webpack</code></li>
></ol>

***

<h4>How do you load fonts using webpack?</h4>

>This process is mostly identical to loading images except for the following:<br>
>Step 2 webpack test becomes <code>test: /\.(woff|woff2|eot|ttf|otf)$/,</code><br>
>Fonts are imported in CSS using :<code>@font-face {font name and src + other properties}</code> or in JS using <code>import 'font URL'</code>.

***

<h4>How do you automatically build HTML files in dist using webpack?</h4>

><ol>
><li>Install 'html-webpack-plugin' with <code>npm install --save-dev html-webpack-plugin</code></li>
><li>Update webpack config file to use the 'HtmlWebpackPlugin'</li>
><li>Create an HTML Template</li>
><li>Run Webpack with <code>npx webpack</code></li>
></ol>

***

<h4>How do you automatically build an HTML file in dist using a custom template in src?</h4>

>See above example.

***

<h4>How would you track errors in bundled source code?</h4>

>To accomplish this you would set up source maps which provide a mapping between the original source code and the code running in the browser.<br>
>When an error occurs, the browser is able to point to the exact location of where the error originated in the source code.<br>
>The main steps steps to set this up are:<br>
><ol>
><li>Install source-map devtool with <code>npm install --save-dev source-map</code></li>
><li>Configure webpack inside 'webpack.config.js' by adding <code>devtool:'sorce-map'</code> inside 'module.exports'</li>
><li>Run Webpack with <code>npx webpack</code>.
></ol>

***

</details>

***

<details>
<summary><h3>Object Oriented Programming</h3></summary>

***

<h4>Explain the “Single Responsibility Principle”.</h4>

>The Single Responsibility Principle states that classes/objects/modules should only have one responsibility.<br>
>This doesn't mean that multiple things cannot be performed, but these various things should all facilitate the one responsibility.

***

<h4>Briefly explain the additional SOLID principles.</h4>

>S : Single Responsibility Principle (software entities only have one responsibility)<br>
>O : Open/Closed Principal (software entities are closed for changes but open for extendability)<br>
>L : Liskov Substitution Principal (if A is a subtype of B, then objects of type B may be replaced with objects of type A)<br>
>I : Interface Segregation Principal (no client should be forced to depend on interfaces they don't use)<br>
>D : Dependency Inversion Principal (high-level modules should depend on abstractions rather than concrete implementations)<br>

***

<h4>Explain what “tightly coupled” objects are and why we want to avoid them.</h4>

>Tightly coupled objects are objects that rely so heavily on each other that altering one will mean that you have to completely change another one.<br>
>This should be avoided as it can decrease the maintainability of your code while also making it harder to update..

***

</details>

***

<details>
<summary><h3>Linting</h3></summary>

***

<h4>What is linting?</h4>

>Linting is the utilisation of a basic code quality tool which will tell you where and how to clean it up.

***

<h4>Which problems can linting prevent?</h4>

><ul>
><li>Prevent scope conflicts</li>
><li>Prevent XSS security holes</li>
><li>Prevent issues with readability</li>
></ul>

***

<h4>Why should you use Prettier?</h4>

><ul>
><li>Makes coding faster and easier</li>
><li>Takes care of things like indentation and semi-colons</li>
><li>Automatically formats your code according to predefined rules</li>
></ul>

***

<h4>What is a template repository?</h4>

>A template repository allows you to copy the setup code of a project and apply it to new ones. This results in faster set-up time and code-base uniformity.

***

</details>

***

<details>
<summary><h3>Dynamic User Interface Interactions</h3></summary>

***

<h4>What are some different types of navigation menus?</h4>

><ul>
><li>Rectangular Grid Navigation</li>
><li>Rudder Navigation</li>
><li>Drawer Navigation</li>
><li>Tabber - Classic navigation menu</li>
></ul>

***

<h4>What are the alternatives to hamburger menus?</h4>

><ul>
><li>Tabs</li>
><li>Progressively collapsing menu</li>
><li>Scrollable navigation</li>
><li>Dropdown menus</li>
></ul>

***

<h4>What are the downsides of hamburger menus?</h4>

>The main downsides of hamburger menu designs are low discoverability and efficiency.

***

</details>

***

<details>
<summary><h3>Form Validation with JavaScript</h3></summary>

***

<h4>Explain the importance of validating HTML forms before submitting them to a server.</h4>

>Validating forms prior to submission is important because it ensures a good user experience by alerting them right away if data is not formatted correctly/is missing.

***

<h4>Describe the two types of client-side form validation.</h4>

><ul>
><li>Built-in form validation: This uses HTML form validation features and has better performance than JavaScript validation, but is not as customisable.</li>
><li>JavaScript: This is completely customisable but needs to be manually created.</li>
></ul>

***

<h4>Explain how JavaScript Constraint Validation API provides more control and customization of form validation.</h4>

><ul>
><li>Allows access to validation properties (e.g. 'validity', 'validationMessage' and 'willValidate').</li>
><li>Allows you to customise error messages for each validation constraint (using 'setCustomValidity').</li>
><li>Allows you to add event listeners related to validation events like 'invalid and 'input' enabling custom behaviors or UI updates.</li>
></ul>

***

<h4>Could forms also be validated without using Constraint Validation API?</h4>

>You can validate forms without using the Constraint Validation API, however you will need to write your own JavaScript to accomplish this.

***

</details>

***

<details>
<summary><h3>Asynchronous Code</h3></summary>

***

<h4>What is a callback?</h4>

>A callback function is a function passed as an argument to another function, which is then executed or called back at a later point in the program's execution, often to handle asynchronous operations or respond to events.

***

<h4>What is a promise?</h4>

> A promise is an object that might produce a value at some point in the future.

***

<h4>When should you use promises over callbacks?</h4>

>Promises are preferable over callbacks in situations where you need to handle asynchronous operations with better readability, error handling, and for avoiding nested callbacks.

***

<h4>What does the .then() function do?</h4>

>The <code>.then()</code> function is used to attach callbacks that will be executed when a Promise if resolved with a value.<br>
>The basic syntax is: <code>somePromise.then(onFulfilled, onRejected);</code>

***

</details>

***

<details>
<summary><h3>Working with APIs</h3></summary>

***

<h4>What is an API?</h4>

>API refers to 'Application Programming Interfaces' and are servers that are created for serving data for use in websites or apps.

***

<h4>How is access to an API restricted?</h4>

>API access is restricted via the use of API keys which usually need to be included with every data request.

***

<h4>How do you fetch and extract data from an API?</h4>

>You utilise <code>fetch('API_URL_HERE')</code> to retrieve data from an API.<br>
>This should return an object and so to extract our data we need to look through the objects layers to find what is required.

***

<h4>Why might your API request be blocked by the browser, and how might you fix this?</h4>

>Your API request could be blocked by the browser as a security precaution.<br>
>To fix this, you can add <code>mode:'cors'</code> inside your <code>fetch('URL_GOES_HERE')</code> (cors=Cross Origin Resource Sharing).

***

</details>

***

<details>
<summary><h3>Async and Await</h3></summary>

***

<h4>How do you declare an async function?</h4>

>You declare an async function by using <code>async</code> before the function.

***

<h4>What does the async keyword do?</h4>

>The <code>async</code> keyword is what lets the JavaScript engine know that an asynchronous function is being declared.

***

<h4>What does the await keyword do?</h4>

>The <code>await</code> keyword tells JavaScript to wait for an asynchronous action to finish before continuing the function.

***

<h4>What is returned from an async function?</h4>

>When a function is declared with <code>async</code> a promise is automatically returned.

***

<h4>What happens when an error is thrown inside an async function?</h4>

>When an error is thrown inside an async function then the promise is rejected.

***

<h4>How can you handle errors inside an async function?</h4>

>To handle errors inside an async function you can call the function and append a <code>.catch()</code> method to the end.<br>
>Alternatively you can utilise the <code>try/catch</code> block inside your async function.

***

</details>

***

<details>
<summary><h3>A Very Brief Intro to CS</h3></summary>

***

<h4>What is an Algorithm?</h4>

>An algorithm is a set of instructions that are used to solve a problem.

***

<h4>What is the importance of algorithms in web development?</h4>

>Algorithms play a crucial role in web development, particularly when dealing with large datasets or complex transformations.<br>
>They serve as step-by-step procedures that enable efficient data processing, ensuring that web applications can handle and manipulate information effectively.<br>
>Algorithms are essential for tasks such as sorting, searching, and filtering data, contributing to improved performance and user experience.<br>
>Additionally, they help optimize various processes, ensuring that web developers can create responsive and scalable applications to meet the demands of modern web environments.

***

<h4>What is pseudocode?</h4>

>Pseudocode is an english-like way to state an algorithm.

***

</details>

***

<details>
<summary><h3>Recursive Methods</h3></summary>

***

<h4>How would you briefly define a recursive function?</h4>

>A recursive function is a function that calls itself.

***

<h4>What is the point of recursion? Is it more efficient than using a plain loop?</h4>

>The point of recursion is to enhance conciseness and ease of understanding with certain types of problems.<br>
>They are not always more efficient than using a plain loop and this is dictated by the nature of the problem being solved.

***

<h4>What are the 2 essential parts in a recursive function?</h4>

><ol>
><li>The base case: When triggered this will terminate the recursive process.</li>
><li>The recursive case: When triggered this will facilitate recursion.</li>
></ol>

***

<h4>Why is “stack overflow” relevant to a recursive problem?</h4>

>"Stack overflow" is relevant to a recursive problem because by their nature, they involve repeated function calls, and if not managed properly will consume all available memory used for function call management (stack overflow).

***

</details>

***

<details>
<summary><h3>Time Complexity</h3></summary>

***

<h4>What is Big O?</h4>

>Big O provides a consistent measurement for the efficiency of an algorithm relative to the size of the input.

***

<h4>What are the Big O Notations?</h4>

><ul>
><li>O(1) - Constant Complexity</li>
><li>O(log N) - Logarithmic Complexity</li>
><li>O(N) - Linear Complexity</li>
><li>O(N log N) - N x log N Complexity</li>
><li>O(n²) - Quadratic Complexity</li>
><li>O(n³) - Cubic Complexity</li>
><li>O(2ⁿ) - Exponential Complexity</li>
><li>O(N!) - Factorial Complexity</li>
></ul>

***

<h4>Why use Big O?</h4>

>We should use Big O to ensure that our algorithm will scale in all outcomes and perform as required.

***

<h4>What is Big Omega and why isn’t it as useful?</h4>

>Big Omega measures the best case scenario for an algorithms efficiency and isn't as useful because it does not tell us how the algorithm will scale.

***

</details>

***

<details>
<summary><h3>Space Complexity</h3></summary>

***

<h4>What is space complexity?</h4>

>Space complexity is the total space used by an algorithm relative to the size of the input.

***

<h4>How do we measure space complexity?</h4>

>Space complexity is measured in the same way as Time complexity (by considering all steps that need to be taken during the algorithms execution).

***

<h4>What are the main considerations we should take into account when optimising code?</h4>

>When optimising code, the main considerations should be readability followed by efficiency (but only if there is a clear impact on performance).

***

</details>

***

<details>
<summary><h3>Space Complexity</h3></summary>

***

<h4>What is the difference between a stack and a queue?</h4>

>The difference between a stack and a que is that elements in a stack are added to the top and also removed from the top (like a stack of books), whereas elements in a que are added to the top and removed from the bottom (like people in a queue waiting to be served).

***

<h4>What are the enqueue and dequeue properties?</h4>

>Enqueue is when you "start waiting".
>Dequeue is when its your turn to be served.

***

<h4>What is a linked list? What is a node?</h4>

>A linked list is a linear collection of data elements of any type. These data elements are what are referred to as 'nodes'.<br>
>Each node has a value and points to the next node in the linked list.

***

<h4>Which recursive problem-solving method/algorithm design principle does binary search implement?</h4>

>Binary search implements the "divide and conquer" design principle where the array is divided into two halves repeatedly until the target element is found of the search space is exhausted.

***

<h4>What abstract data type would you use to defer/store nodes in a breadth-first tree traversal?</h4>

>To store nodes in a breadth-first tree transversal you would use a data structure known as a "queue" which follows the FIFO (First In First Out) principle.

***

<h4>What abstract data type would you use to defer/store nodes in a depth-first tree traversal?</h4>

>For a depth-first tree transversal you would use a data structure known as "stack" which follows the LIFO (Last In First Out) principle.

***

</details>

***

<details>
<summary><h3>A Deeper Look at Git</h3></summary>

***

<h4>Explain what it means for branches to be pointers.</h4>

>For branches to be pointers means that the connections between nodes in a tree structure are implemented using pointers, which are references or links indicating how the nodes are related to each other.

***

<h4>How can you amend your last commit?</h4>

>To amend your last commit you would use <code>$ git commit --amend</code>.

***

<h4>What are some different ways to rewrite history?</h4>

><ol>
><li>Changing the last commit: </code>$ git commit -amend</code></li>
><li>Changing multiple commit messages: <code>$git rebase -i root</code></li>
><li>Reordering commits</li>
><li>Squashing commits</li>
><li>Splitting commits</li>
><li>Deleting commits</li>
></ol>

***

</details>

***

<details>
<summary><h3>Working with Remotes</h3></summary>

***

<h4>What is a safe way to push history changes to a remote repository?</h4>

>A safe way to push history changes to a remote repository is <code>git push --force-with-lease</code>.<br>
>This is because if the branch you're attempting to push to has been updated you will receive an error to notify you.

***

<h4>What are the dangers of history-changing operations?</h4>

>The dangers of history-changing operations mainly occur when collaborating with others. This is because the work of others can be irreversibly destroyed.

***

<h4>What are best practices of history-changing operations?</h4>

><ul>
><li>Ensure if working on a team project that rewriting history is safe and others are aware of your intent.</li>
><li>Ideally only use these commands on branches you are working on by yourself.</li>
><li>Don't push after every single commit, changing published history should be avoided where possible.</li>
></ul>

***

</details>

***

<details>
<summary><h3>Using Git in the Real World</h3></summary>

***

<h4>What name is typically given for a Git remote that points to a repo that’s been forked?</h4>

>The name typically given for a Git remote that points to a repo that's been forked is "upstream".

***

<h4>Can you directly send your changes to a repository that you don’t own/have write access to?</h4>

>You cannot directly send your changes to a repo that you don't own or have write access to. You would be required to make a "pull request".

***

<h4>What should you do immediately before merging your feature branch into main?</h4>

>Immediately before merging your feature branch into main, you should fetch the most updated copy of the main branch by using <code>git fetch upstream</code>.

***

</details>

***

<details>
<summary><h3>Testing Basics</h3></summary>

***

<h4>What are the benefits of TDD</h4>

>Some of the benefits of TDD include less bugs, higher quality software, lower cost, less waste and improved productivity.

***

<h4>What are some common jest matchers?</h4>

>Some common jest matchers include truthiness, numbers, strings, arrays/iterables and exceptions.

***

</details>

***

<details>
<summary><h3>More Testing</h3></summary>

***

<h4>What is tightly coupled code?</h4>

>Tightly coupled code refers to functions that heavily reference external functions or variables.

***

<h4>What are the two requirements for a function to be pure?</h4>

><ol>
><li>If the same arguments are passed in, the same result is always returned. It must only depend on its input arguments.</li>
><li>The function does not produce any observable side effects such as network requests, input and output devices, or data mutation.</li>
></ol>

***

<h4>What are side effects and why is it important to identify them when testing a function?</h4>

>An observable side effect is any interaction with the outside world from within a function. For a function to remain pure, they must not contain any side effects.

***

<h4>What are two solutions to the tightly coupled code problem?</h4>

><ol>
><li>Remove dependencies from the code.</li>
><li>Mocking</li>
></ol>

***

<h4>What is mocking?</h4>

>Mocking is writing 'fake' versions of a function that always behave exactly how you want.

***

<h4>When would you use a mock function?</h4>

>You would use a mock function whenever you have an input-grabbing function.

***

<h4>How should you test incoming query messages?</h4>

>You should test incoming query messages by testing the expected behavior and outcomes based on the incoming query messages.

***

<h4>Why should you not test implementation?</h4>

>You should test the interface instead of the implementation because if you can test only the interface it means you can change the implementation without breaking the test.

***

<h4>Should you test private methods?</h4>

>You should not test private methods. Do not make assertions about their result and do not expect to send them.

***

<h4>Why should you not test outgoing messages with no side effects?</h4>

>You should not test outgoing messages with no side effects because if the message has no side effects then it is invisible to your app and will add no proof.

***

</details>

***

<details>
<summary><h3>Transform</h3></summary>

***

<h4>What are the four main functions of the transform property?</h4>

>The four main functions of the transform property are <code>rotate</code>, <code>scale</code>, <code>skew</code> and <code>translate</code>.

***

<h4>Which function can be used to move an object through space on the X, Y, or Z axis?</h4>

>You can use the <code>translate</code> function to move an object through space on the X, Y, or Z axis.

***

<h4>Which function can be used to make an object larger or smaller on the X, Y, or Z axis?</h4>

>To make an object larger or smaller on the X, Y or Z axis you can use the <code>scale</code> function.

***

<h4>What additional function is required for 3D transforms?</h4>

>For 3D transforms you also need to include <code>perspective</code>. This sets the distances from the user to the z = 0 plane and must be declared first.

***

</details>

***

<details>
<summary><h3>Transitions</h3></summary>

***

<h4>Are all CSS properties animatable?</h4>

>All CSS properties are animatable unless otherwise specified (as it wouldn't make sense to animate them).

***

<h4>What are the long and short-hand notations for transitions?</h4>

>The long hand notation for transitions is: <code>transition-property: ; transition-duration: ; transition-timing-function: ; transition-delay: ;</code>.<br>
>The short hand notation for transitions is: <code>transition: ;</code>.

***

<h4>What is the stacking context?</h4>

>The stacking context refers to the stacking order of elements on a web page. A stacking context is formed in the following situations:<br>
><ul>
><li>Root Stacking Context: The root element of the document forms the initial stacking context.</li>
><li>Elements with a Z-Index other than 'auto' and 'position' other than 'static'.</li>
><li>CSS 'transform', 'filter', 'clip-path', or 'opacity' Property.</li>
><ul>

***

<h4>Why do you need to keep an eye on repaints?</h4>

>Keeping an eye on repaints is important in web development because repaints can impact the performance and user experience of a website.<br>
>Repainting refers to the process of updating the pixels on the screen when changes occur, such as updates to the DOM or style changes.

***

</details>

***

<details>
<summary><h3>Keyframes</h3></summary>

***

<h4>What are the long and short-hand notations for CSS animations?</h4>

>The long-hand notation for CSS animations is: <code>animation-duration: ; animation-name: ; animation-iteration-count: ; animation-direction: ;</code>.<br>
>The short-hand notation for CSS animations is: <code>animation: ;</code>.

***

<h4>How do you add keyframes to an animation?</h4>

>You add keyframes to an animation by declaring <code>@keyframes</code> followed by the animation name.

***

<h4>When would you use an animation over a transition (and vice versa)?</h4>

>You would use an animation over a transition when you need more flexibility and complexity than transition is able to offer.<br>
>You would use transition when dealing with fairly simple changes.

***

</details>

***

<details>
<summary><h3>Introduction to web accessibility</h3></summary>

***

<h4>What is web accessibility?</h4>

>Web accessibility means that websites, tools and technologies are designed and developed so that people with disabilities and other circumstantial limitations can use them with as few barriers as possible.

***

<h4>Who truly benefits from accessibility features?</h4>

>All users benefit from accessibility features, these users encompass people with disabilities, older people with changing abilities, people who aren't as tech savvy and people with situational limitations.

***

</details>

***

<details>
<summary><h3>The Web Content Accessibility Guidelines (WCAG)</h3></summary>

***

<h4>What is the purpose of the Web Content Accessibility Guidelines?</h4>

>The purpose of WCAG is to create a shared standard when it comes to web accessibility.

***

<h4>What are the 4 principles of the WCAG?</h4>

><ol>
><li>Perceivable: Users must be able to perceive the information or user interfaces being presented.</li>
><li>Operable: Users must be able to operate any user interfaces or navigation and interfaces cannot require an interaction which the user cannot perform.</li>
><li>Understandable: Users must be able to understand any information or users interface that is presented to them.</li>
><li>Robust: Content must be accessible by current assistive technologies and other user agents, and must remain accessible as those technologies advance.</li>
></ol>

***

</details>

***

<details>
<summary><h3>Semantic HTML</h3></summary>

***

<h4>Why is semantic HTML important for accessibility?</h4>

>Semantic HTML is important for accessibility because it provides context for the content that it contains.

***

<h4>What are the seven HTML elements that define landmarks on a page?</h4>

><ol>
><li><code>aside</code></li>
><li><code>footer</code></li>
><li><code>form</code></li>
><li><code>header</code></li>
><li><code>main</code></li>
><li><code>nav</code></li>
><li><code>section</code></li>
></ol>

***

</details>

***

<details>
<summary><h3>Accessible Colors</h3></summary>

***

<h4>What is a contrast ratio?</h4>

>Contrast ratio is the difference in brightness between two colors expressed as a ratio.

***

<h4>What are two ways you can check a contrast ratio using your dev tools?</h4>

><ol>
><li>Select the "element picker" tool in the elements tab and hover over an element.</li>
><li>If you select an element with text in the elements tab you can click on the color picker tool for "color" property under styles.</li>
></ol>

***

<h4>What should you avoid when conveying information to users?</h4>

>When conveying information to users you should avoid relying only on color.

***
