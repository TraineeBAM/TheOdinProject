***

<h1>Full Stack JavaScript Path</h1>

***

<h2>Assignments</h2>

        Below you will find my solutions to the various assignments in TOP Full Stack JavaScript path.

| Course | Assignment's Name | Link |
| ------ | ------------ | ---- |
| example | placeholder |[text here](www.google.com)|

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








