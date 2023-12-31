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