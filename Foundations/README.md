***

<h1>Foundations Course</h1>

***

<h2>Assignments</h2>

        Below you will find my solutions to the various assignments in TOP Foundations.

| Course | Assignment's Name | Link |
| ------ | ------------ | ---- |
| HTML Foundations | Project:Recipes |[Odin Recipes](https://traineebam.github.io/TheOdinProject/Foundations/odin-recipes)|
| CSS Foundations | Intro to CSS | [CSS Methods](https://traineebam.github.io/TheOdinProject/Foundations/CSS_Intro/01-css-methods)|
| CSS Foundations | Intro to CSS | [Class ID selectors](https://traineebam.github.io/TheOdinProject/Foundations/CSS_Intro/02-class-id-selectors)|
| CSS Foundations | Intro to CSS | [Grouping selectors](https://traineebam.github.io/TheOdinProject/Foundations/CSS_Intro/03-grouping-selectors)|
| CSS Foundations | Intro to CSS | [Chaining selectors](https://traineebam.github.io/TheOdinProject/Foundations/CSS_Intro/04-chaining-selectors)|
| CSS Foundations | Intro to CSS | [Descendant combinator](https://traineebam.github.io/TheOdinProject/Foundations/CSS_Intro/05-descendant-combinator)|
| CSS Foundations | The Cascade | [Cascade fix](https://traineebam.github.io/TheOdinProject/Foundations/CSS_Intro/06-cascade-fix)|
| CSS Foundations | Block and Inline | [Exercise 1](https://traineebam.github.io/TheOdinProject/Foundations/CSS_Intro/margins-and-padding/01-margin-and-padding-1)|
| CSS Foundations | Block and Inline | [Exercise 2](https://traineebam.github.io/TheOdinProject/Foundations/CSS_Intro/margins-and-padding/02-margin-and-padding-2)|
| External Assignment | Flexbox Tutorial | [Internetingishard](https://traineebam.github.io/TheOdinProject/External_Assignments/internetingishard/flexbox)|
| Flexbox | Alignment | [01-Flex-Center](https://traineebam.github.io/TheOdinProject/Foundations/Flexbox/01-flex-center)|
| Flexbox | Alignment | [02-Flex-Header](https://traineebam.github.io/TheOdinProject/Foundations/Flexbox/02-flex-header)|
| Flexbox | Alignment | [03-Flex-Header-2](https://traineebam.github.io/TheOdinProject/Foundations/Flexbox/03-flex-header-2)|
| Flexbox | Alignment | [04-Flex-Information](https://traineebam.github.io/TheOdinProject/Foundations/Flexbox/04-flex-information)|
| Flexbox | Alignment | [05-Flex-modal](https://traineebam.github.io/TheOdinProject/Foundations/Flexbox/05-flex-modal)|
| Flexbox | Alignment | [06-Flex-Layout](https://traineebam.github.io/TheOdinProject/Foundations/Flexbox/06-flex-layout)|
| Flexbox | Alignment | [07-Flex-Layout-2](https://traineebam.github.io/TheOdinProject/Foundations/Flexbox/07-flex-layout-2)|
| JavaScript | RPS Project | [Revisiting Rock Paper Scissors](https://traineebam.github.io/TheOdinProject/Foundations/projects/rock_paper_scissors)|

***

<h2>Knowledge Check</h2>

        Please see below for my answers to the various knowledge checks in TOP Foundations.

***
<details>
<summary><h3>How does the Web Work?</h3></summary>

***

<h4>What is a web server?</h4>

> A computer that hosts one of more websites. <br>
> In this context, "hosts" refers to the fact that all web pages and their supporting files are available on that computer.

***
<h4>What is a network?</h4>

> A set of computers that are linked in order to share resources. <br>
> This can occur either physically or wirelessly.

***
<h4>What is the internet?</h4>

> At its core, the internet is a global network of computers.

***
<h4>What is an IP address?</h4>

> IP = "Internet Protocol"<br>
> A unique address that identifies a computer.<br>
> There are two main protocols for IP addresses being IPv4 and IPv6. <br>
> IPv4 is a 32-bit numerical address (e.g. 10.0.1.5) whereas IPv6 is a 128-bit hexadecimal address (e.g. 2001:0000:130D:0000:0000:09C0:876C:130A)<br>
> The main benefit of IPv6 is that it allows for 1028 times more addresses than the 4.3 billion that IPv4 offers.<br>
> Fun Fact: To check your current IP address in the Linux terminal you can use either "hostname -I" or "ip a".

***
<h4>What is a router?</h4>

> A router is a device that connects computer networks.<br>
> It's primary function is to ensure that a message sent from a given computer arrives at the target computer.

***
<h4>What is an ISP?</h4>

> ISP = "Internet Service Provider" <br>
> An ISP provides services that enable interaction with the internet.

***
<h4>What are packets and how are they used to transfer data?</h4>

> When data is transmitted across the internet it is broken up and sent in thousands of small chunks. These small chunks are what are referred to as "packets".<br>
> The advantage of this is that if any of these packets are corrupted or dropped, it is a lot easier to replace them. <br>
> Additionally, by sending data in packets it can be sent to the client along different paths, which results in faster exchanges and improved accessibility.

***
<h4>What is a client?</h4>

> Clients are the devices and software that connect to the internet from the users side.

***
<h4>What is a server?</h4>

> A server is a computer that provides functionality for clients through the provision of things such as resources, data, services or programs.

***
<h4>What is a web page?</h4>

> A web page is a document that can be displayed by a web browser.

***
<h4>What is a web browser?</h4>

> A web browser is an application that is used to access websites (e.g. Google Chrome and Firefox).

***
<h4>What is a search engine?</h4>

> A search engine is a web service that assists with finding web pages (e.g. Google and Bing).

***
<h4>What is a DNS request?</h4>

> DNS = "Domain Name System". This is essentially an address book for websites.<br>
> A DNS request is a request for information sent from the client to the server. <br>
> Usually this request is to determine the IP address associated with a domain name.

***
<h4>What browser are you currently using?</h4>

> As is recommended by The Odin Project, I am using Google Chrome.

***
<h4>Describe the process that takes place when you look up a web address</h4>

><ol>
>       <li>The browser uses the DNS server to determine the websites server address.</li>
>       <li>A HTTP request is sent from the browser to this server requesting the website for the client.</li>
>       <li>If this request is approved then a "200 OK" message is sent to the client from the server, followed by data packets containing the websites files.</li>
>       <li>The browser assembles these data packets and displays a complete web page.</li>
></ol>
</details>

***

<details>
<summary><h3>Command Line Basics</h3></summary>

***
<h4>What is the CLI?</h4>

> CLI = "Command Line Interface"<br>
> The CLI is a text-based user interface for a computer.<br>

***
<h4>How do you open the command line on your computer?</h4>

> In my virtual machine I use "CTRL+ALT+T" to open the CLI.

***
<h4>How can you navigate to a particular directory?</h4>

> It would depend on if I knew where this directory sat on my computer.<br>
> If I knew this I would use the "cd" command followed by the directory path.<br>
> If I needed to find a directory I would use "find -name *file_name*".<br>
> Once located I could then use the "cd" command to navigate to that directory (e.g. "cd ./documents/work_project/Sprint4").

***
<h4>Where will "cd" and "cd .." navigate you to?</h4>

> "cd" would take you to your home directory.<br>
> "cd .." brings you up one directory.

***
<h4>How do you display the name of the directory you are currently in?</h4>

> You would use the "pwd" (print working directory) command.

***
<h4>How do you display the contents of the directory you are currently in?</h4>

> You would use the "ls" (short for "list") command.

***
<h4>How do you create a new directory and a new file?</h4>

> To create a new directory use the "mkdir" command followed by the directory name (e.g. "mkdir projects").<br>
> To create a new file use the "touch" command followed by the file name and extension (e.g. "touch index.html").

***
<h4>How do you destroy and rename a directory or file?</h4>

> To destroy a directory or file use the "rm -r" command followed by the directory or file name (e.g. "rm -r projects").<br>
> It should be noted that "rm -r" can delete a directory and all contents irreversibly.<br>
> <br>
> In order to rename a directory or file use the "mv" command followed by the current name and the new file (e.g. "mv old_projects new_projects").

</details>

***

<details>
<summary><h3>Introduction to Git</h3></summary>

***
<h4>What kind of program is Git?</h4>

> Git is a version control system and acts like an <b>epic</b> save button.

***
<h4>What are the differences between Git and a text editor in terms of what they save and their record keeping?</h4>

> When you save a file in a text editor you are capturing its current state in a single file.<br>
> A save in Git on the other hand will record the differences in the files and folders as well as keeping a historical record of each save.<br>

***
<h4>Does Git work at a local or remote level?</h4>

> Git works at the local level (on your device).

***
<h4>Does GitHub work at a local or remote level?</h4>

> GitHub works at the remote level and acts as a storage facility for projects.

***
<h4>Why is Git useful for developers?</h4>

> The main benefit of Git for developers is that it makes it possible to restore past iterations of files.

***
<h4>Why are Git and GitHub useful for a team of developers?</h4>

> They facilitate collaboration of software developers and allow for streamlined product/service development.

</details>

***

<details>
<summary><h3>Git Basics</h3></summary>

***

<h4>How do you create a new repository on GitHub?</h4>

> Go to your GitHub homepage and click on "create new repository".

***
<h4>How do you copy a repository onto your local machine from GitHub?</h4>

> Click on the green "<> Code" button and under the "SSH" option copy the address to your clipboard<br>
> Use the "git clone" command followed by the copied address to connect your GitHub repository with your local machine.

***
<h4>What is the default name of your remote connection?</h4>

> "origin".

***
<h4>Explain what origin is in "git push origin main".</h4>

> The name used for your remote repository.
> This command will push all branches to the main branch.

***
<h4>Explain what main is in "git push origin main".</h4>

> The name of the branch that will be pushed to.

***
<h4>Explain the two-stage system that Git uses to save files.</h4>

> Stage One: The command "git add ." (or "git add FILENAME") is used to add the edited file to a staging area.<br>
> Stage Two: The command "git commit" is used to commit these changes.

***
<h4>How do you check the status of your current repository?</h4>

> "git status".

***
<h4>How do you add files to the staging area in git?</h4>

> "git add .".

***
<h4>How do you commit the files in the staging area and add a descriptive message?</h4>

> "git commit -m "DESCRIPTIVE MESSAGE GOES HERE" ".

***
<h4>How do you push your changes to your repository on GitHub?</h4>

> "git push" or "git push origin main"

***
<h4>How do you look at the history of your previous commits?</h4>

> "git log"

</details>

***

<details>
<summary><h3>Intro to HTML and CSS</h3></summary>

***

<h4>What do HTML and CSS stand for?</h4>

> HTML = "HyperText Markup Language"<br>
> CSS  = "Cascading Style Sheets"

***
<h4>Between HTML and CSS, which would you use for putting paragraphs of text on a webpage?</h4>

> You would use HTML for this as we use HTML defines the content & layout of a webpage.

***
<h4>Between HTML and CSS, which would you use for changing the font and background color of a button?</h4>

> You would use CSS for this as CSS is responsible for styling the webpage.

***
<h4>What is the difference between HTML, CSS and JavaScript?</h4>

> HTML determines the content & layout of a webpage. <br>
> CSS determines how a HTML document is styled (colors, fonts, etc.).<br>
> JavaScript is used to enhance the interactivity of a website.<br>

***
<h4>What is a HTML tag?</h4>

> A tag is used to indicate the beginning and end of a HTML element.<br>
> e.g. When inside "<>" "p" is an opening paragraph tag and "/p" is a closing tag.

***
<h4>What are the three parts of an HTML element?</h4>

> <ol>
>       <li>An opening tag</li>
>       <li>The content</li>
>       <li>A closing tag</li>

</details>

***

<details>
<summary><h3>HTML Boilderplate</h3></summary>

***
<h4>What is the purpose of the doctype declaration?</h4>

> Tells the browser what version of HTML it needs to use to render the document.

***
<h4>What is the HTML element?</h4>

> The root element of the document. All other elements will be descendants of the HTML document.

***
<h4>What is the purpose of the head element?</h4>

> Contains important meta-information about the webpage and tells the browser how to render content properly.

***
<h4>What is the purpose of the body element?</h4>

> Gives the webpage a readable title that is displayed in the browsers tab.<br>
> This will default to the file name if not specified (e.g. index.html).

</details>

***

<details>
<summary><h3>Working with text in HTML</h3></summary>

***
<h4>How do you create a paragraph in HTML?</h4>

> You would use the "p" and "/p" tags to wrap your paragraph.

***
<h4>How do you create a heading in HTML?</h4>

> You would use the "h" and "/h" tags to wrap your heading.<br>
> After the "h" you would use numbers between 1 and 5 to signify the importance of the heading (with 1 being the most important).<br>
> E.g. "h1" Super Important Heading "/h1".

***
<h4>What element should you use to make text bold and important?</h4>

> To do this you would wrap the text in a "strong" and "/strong" tag.

***
<h4>What element should you use to make text italicized to add emphasis to it?</h4>

> You would use the "em" and "/em" tags to wrap the text you'd like italicized and emphasised.

***
<h4>What relationship does an element have with any nested elements within it?</h4>

> A parent / child relationship.

***
<h4>What relationship do two elements have if they are at the same level of nesting?</h4>

> A sibling relationship.

***
<h4>How do you create HTML comments?</h4>

> You wrap your comment in "< ! - - >" "< - - >" tags (remove spaces).

</details>

***

<details>
<summary><h3>HTML Lists</h3></summary>

***
<h4>What HTML element is used to create an unordered list?</h4>

> You would use the "< U L >" and "< / U L >" elements (without spaces).

***
<h4>What HTML element is used to create an ordered list?</h4>

> You would use the "< O L >" and "< / O L >" elements (without spaces).

***
<h4>What HTML element is used to create list items within both unordered and ordered lists?</h4>

> For both unordered and ordered lists you need to wrap each list item with the "< l i >" and "< / l i >" tags (without spaces).

***

<h4>Links and Images</h4>

***
<h4>What element is used to create a link?</h4>

> An anchor element (the "< a >" tag).

***
<h4>What is an attribute?</h4>

> An attribute gives additional information to the element and is generally made up of both a name and a value.

***
<h4>What attribute tells links where to go to?</h4>

> The "href" attribute followed by the destination.

***
<h4>What security considerations must be taken if you wish to use the target attribute to open links in a new tab/window?</h4>

> It is considered best practice to use: rel="noopener noreferrer"<br>
> This prevents the opened link from gaining access and knowing what has referred traffic to it.

***
<h4>What is the difference between an absolute and relative link?</h4>

> Absolute link: Links to pages on other websites.<br>
> Relative links: Links to pages located on our own website.

***
<h4>Which element is used to display an image?</h4>

> The < i m g > element.
> This element is self closing.

***
<h4>What two attributes do images always need to have?</h4>

> An "src" attribute which specifies the image source.<br>
> An "alt" attribute which uses text to describe an image.

***
<h4>How do you access a parent directory in a filepath?</h4>

> You would use two full-stops to go up to the parent directory.

***
<h4>What are the four main image formats that you can use for images on the web?</h4>

> JPG: Designed for handling large color pallets while maintaining a reasonable file size.<br>
> GIF: Best option for simple animations. Should not be used for photos.<br>
> PNG: Ideal for anything that isn't a photo or animated.<br>
> SVC: A vector-based graphics format meaning it can scale up or down without loss of quality. Use SVC whenever possible.

</details>

***

<details>
<summary><h3>Intro to CSS</h3></summary>

***
<h4>What is the syntax for class and ID selectors?</h4>

>Class selector is a full-stop "." followed by the value of the class attribute.<br>
>ID selector is a hash "#" followed by the value of the ID selector.

***
<h4>How would you apply a single rule to two different selectors?</h4>

>You would group the selectors together by separating them with a comma ",".

***
<h4>Given an element that has an id of title and a class of primary, how would you use both attributes for a single rule?</h4>

>You would chain them together by writing them out with no spaces between them.<br>
>E.g. ".primary#title"

***
<h4>What does the descendant combinator do?</h4>

> Allows you to target a specific element based off its parent.<br>
> This is done by writing out the parent and child element with a space in between.<br>
>E.g. ".parent .child" would target only a .child element that is a descendant of a .parent.

***
<h4>What are the names of the three ways to add CSS to HTML?</h4>

> These three ways are external, internal and inline.

***
<h4>What are the main differences between the three ways of adding CSS to HTML?</h4>

> External: This is best practice and involves creating a separate .css file that your web pages will reference.<br>
> Internal: The CSS style is defined in the header of the webpage. Can be useful for adding unique styles to a single webpage but is not usually recommended.<br>
> Inline: This adds CSS directly to an element. This is not recommended, however it will override the other two methods which can be handy.

***

<h4>Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?</h4>

> The class selector will always take priority over any number of type selectors as it is more specific.

</details>

***

<details>
<summary><h3>Inspecting HTML and CSS</h3></summary>

***

<h4>How do you select a specific element on your page with your browser’s developer tools?</h4>

> You can click on your pages elements from the developers tool pane in order to select them.

***
<h4>What does a strikethrough in a CSS declaration mean in your browser’s developer tools?</h4>

> It means that particular style is being overwritten.

***
<h4>How do you change CSS in real time on specific elements of a web page with your browser’s developer tools?</h4>

> You can use the Styles pane and click on selectors or attributes to edit them.

</details>

***

<details>
<summary><h3>The Box Model</h3></summary>

***
<h4>From inside to outside, what is the order of box-model properties?</h4>

> Margin - Border - Padding.

***
<h4>What does the box-sizing CSS property do?</h4>

> Allows you to use the alternative box model for your elements.

***
<h4>What is the difference between the standard and alternative box model?</h4>

> The standard box model will size your element by adding the margin, border and padding together.<br>
> The alternative box model will size your element based on how it is defined and will account for the margin, border and padding size.

***
<h4>Would you use margin or padding to create more space between 2 elements?</h4>

> Use the margin element for this.

***
<h4>Would you use margin or padding to create more space between the contents of an element and its border?</h4>

> Use the padding element for this.

***
<h4>Would you use margin or padding if you wanted two elements to overlap each other?</h4>

> You can set a negative margin to have elements overlap each other.

***
<h4>How do you set the alternative box model for all of your elements?</h4>

> Set the "box-sizing" property on the "html" element and set all other elements to inherit that value with "box-sizing:inherit;"

***
<h4>How do you center an element horizontally?</h4>

> You would first need to define the element width. Then you would use "margin: auto".

***
</details>

***

<details>
<summary><h3>Block and Inline</h3></summary>

***

<h4>What is the difference between a block element and an inline element?</h4>

> Block elements will stack on-top of one another whereas an inline element will appear next to other elements.

***
<h4>What is the difference between an inline element and an inline-block element?</h4>

> An "inline" element will not have its width and height respected and will overlap other lines.<br>
> An "inline-block" element will have its width, height and padding respected.

***
<h4>Is an h1 block or inline?</h4>

> "h1" is a block level element in HTML.

***
<h4>Is button block or inline?</h4>

> "button" is an inline element in HTML.

***
<h4>Is div block or inline?</h4>

> "div" is a block level element in HTML.

***
<h4>Is span block or inline?</h4>

> "span" is an inline element in HTML.

***
</details>

***

<details>
<summary><h3>Flexbox</h3></summary>

***
<h4>What’s the difference between a flex container and a flex item?</h4>

> Any element that has "display:flex" on it is a flex container.<br>
> Any element that lives inside of a flex container is a flex item.

***
<h4>How do you create a flex item?</h4>

> By placing the item inside a flex container.

***
<h4>What are the 3 values defined in the shorthand flex property (e.g. flex: 1 1 auto)?</h4>

> These values are: "flex-grow", "flex-shrink" and "flex-basis".

***
<h4>What are the 3 defined values for the flex shorthand "flex:auto"?<h4>

> 'flex:auto' is equivalent to 'flex-grow:1', 'flex-shrink:1' and 'flex-basis:auto'.

***
<h4>How do you make flex items arrange themselves vertically instead of horizontally?</h4>

> You would use "flex-direction:column;".

***
<h4>In a column flex-container, what does flex-basis refer to?</h4>

> It refers to height instead of width.

***
<h4>In a row flex-container, what does flex-basis refer to?</h4>

> It refers to width.

***
<h4>Why do the previous two questions have different answers?</h4>

> Both column and row flex-containers have different axes to one another.<br>
> Column puts the main axis vertical, whereas row puts the main axis horizontally.

***
</details>

***

<details>
<summary><h3>JavaScript Fundamentals - Part 1</h3></summary>

***
<h4>Name the three ways to declare a variable</h4>

> "var", "let" and "const".

***
<h4>Which of the three variable declarations should you avoid and why?</h4>

> "var" should generally be avoided as it is an old-style of declaring variables and can act in unexpected ways.

***
<h4>What rules should you follow when naming variables?</h4>

> The name must only contain letters, digits, or the symbols "$" and "_".<br>
> The first character must not be a digit.

***
<h4>What happens when you add numbers and strings together?</h4>

> Then the number is merged with the string.<br>
> E.g. If we said: let s = "hello" + 7 + "mother".<br>
>Then 's' would output "hello7mother".

***
<h4>How does the Modulo (%), or Remainder, operator work?</h4>

> It works by outputting the remainder of an equation.<br>
> E.g. 8 % 3 would output 2.

***
<h4>Explain the difference between == and ===.</h4>

> "==" requires two variables to have the same value to evaluate as true.<br>
> "===" requires two variables to have the same value and the same type to evaluate as true.<br>
> It is generally considered safest to use "===".

***
<h4>When would you receive a NaN result?</h4>

> NaN = "Not a Number".<br>
> If you try to do mathematical functions with a non-numeric string you will receive a NaN result.

***
<h4>How do you increment and decrement a number?</h4>

> Increment = "++" this will increase a variable by 1.<br>
> Decrement = "--" this will decrease a variable by 1.

***
<h4>Explain the difference between prefixing and postfixing increment/decrement operators.</h4>

> Prefixing increment/decrement operators will change a value and output this new result.<br>
> Postfixing increment/decrement operators will change a value but output its previous value.

***
<h4>What is operator precedence and how is it handled in JS?</h4>

> The order in which an expression is executed is defined by operator precedence.<br>
> In JavaScript operators are given a value and the higher this value the higher the operators precedence.<br>
> Higher precedence operators are executed before lower precedence ones.

***
<h4>How do you access developer tools and the console?</h4>

> You would right-click on the webpage and select "inspect"/"inspect element" to access developer tools.<br>
> Once these tools are accessed you would select the "console" tab.

***
<h4>How do you log information to the console?</h4>

> By using "console.log()".

***
<h4>What does unary plus operator do to string representations of integers? eg. +”10”</h4>

> The unary plus operator converts them to numbers.

***
</details>

***

<details>
<summary><h3>JavaScript Fundamentals - Part 2</h3></summary>

***
<h4>What are the eight data types in JavaScript?</h4>

><ol>
>       <li>number: For integer and floating point numbers. Limit is 2^53-1 or -2^53-1. </li>
>       <li>bigInt: Used for for integers of length greater than 'number' can handle. Value is created by adding an 'n' after an integer.</li>
>       <li>string: A string may have zero or more characters.</li>
>       <li>boolean: For true/false values.</li>
>       <li>null: For unknown values. A standalone type that has the single value of 'null'.</li>
>       <li>undefined: For unassigned values. A standalone type that has the single value of 'undefined'.</li>
>       <li>symbol: For unique identifiers.</li>
>       <li>object: For more complex data structures.</li>
></ol>

***
<h4>Which data type is NOT primitive?</h4>

> Object is a non-primitive data type.

***
<h4>What is the relationship between null and undefined?</h4>

> They are both stand-alone value types with only a single value of either 'null' or 'undefined'.<br>

***
<h4>What is the difference between single, double, and backtick quotes for strings?</h4>

> Single and double quotes are both "simple" quotes and they are treated in the same way by JavaScript.<br>
> Backtick quotes are "extended functionality" quotes that allow variables and expressions to be embedded into a string by wrapping them in "${..}".

***
<h4>What is the term for joining strings together?</h4>

> Concatenation.

***
<h4>Which type of quote lets you embed variables/expressions in a string?</h4>

> Backtick quotes (extended functionality quotes).

***
<h4>How do you embed variables/expressions in a string?</h4>

> Inside a template literal (the name of a string declared with backticks), you wrap JavaScript variables/expressions inside "${..}".<br>
> The result of this will be included in the string.

***
<h4>How do you use escape characters in a string?</h4>

> You use the backslash "\" just before the character.

***
<h4>What is the difference between the slice/substring/substr string methods?</h4>

><ul>
>    <li>slice(start, end). Extracts a part of a string and returns the result in a new string.</li>
>    <li>substring(start, end). Similar to above except start and end values less than 0 are treated as 0.</li>
>    <li>substr(start, length). Second parameter here specifies length of the extracted part.</li>
></ul>

***
<h4>What are the three logical operators, and what do they stand for?</h4>

><ol>
>    <li> OR = "||". Returns false if both operands are false and true otherwise.
>    <li> AND = "&&". Returns true if both operands are truthy and false otherwise.
>    <li> NOT = "!". The "!" is placed before an operand and converts it to a boolean type which is then inverted.
></ol>

***
<h4>What are the comparison operators?</h4>

><ol>
>    <li> Greater ">" and Less "<" than
>    <li> Greater than or equal to ">=" and Less than or equal to "<=".
>    <li> Equals "=="
>    <li> Not Equal "!="
></ol>

***
<h4>What are truthy and falsy values?</h4>

> Truthy values are true values and Falsy values are false values.

***
<h4>What are the falsy values in JavaScript?</h4>

> Falsy values are "0", empty strings "", null, undefined and NaN as they are all false.

***
<h4>What are conditionals?</h4>

> "if", "else" and "else if". These are used to perform different actions based on different conditions.

***
<h4>What is the syntax for an if/else conditional?</h4>

> else if

***
<h4>What is the syntax for a switch statement?</h4>

> switch(expression) {<br>
>        case x:<br>
>          // code block<br>
>          break;<br>
>        case y:<br>
>          // code block<br>
>          break;<br>
>        default:<br>
>          // code block<br>
>}<br>

***
<h4>What is the syntax for a ternary operator?</h4>

> A ternary operator tests a condition and returns one value/expression if true and another if false.<br>
> The syntax looks like: condition ? run this code : run this code instead

***
<h4>What is nesting?</h4>

> Nesting is placing an "if...else" statement inside another.

***
</details>

***

<details>
<summary><h3>JavaScript Developer Tools</h3></summary>

***
<h4>How do you open developer tools?</h4>

> The three main ways to open Chrome developer tools are:<br>
><ol>
><li>In the Chrome menu select "More Tools" then "Developer Tools".</li>
><li>Right click on a the webpage and select "Inspect".</li>
><li>Use the keyboard shortcuts being either "F12" or "CTRL + SHIFT + C".</li>
></ol>

***
<h4>How do you change screen size of a website using developer tools?</h4>

> You select the "Toggle Device Toolbar" option.<br>
> Once this is enabled you can manually change the screen size or choose from a list of pre-configured devices.

***
<h4>What is a breakpoint?</h4>

> A breakpoint lets you pause your code mid-execution and examine all current values.

***
<h4>How do you set a breakpoint?</h4>

> There are numerous breakpoint types and all are set slightly differently.<br>
> The simplest type is the "Line-of-code" breakpoint which can be set by clicking the line number from the "sources" tab in DevTools.

***
</details>

***

<details>
<summary><h3>JavaScript Fundamentals - Part 3</h3></summary>

***
<h4>What are functions useful for?</h4>

> Storing a piece of code that can be called upon later as often as required.

***
<h4>How do you invoke a function?</h4>

> By stating the name of your function followed by parenthesis in your code.

***
<h4>What are anonymous functions?</h4>

> A function that has no name. Often used when a function expects to receive another function as a parameter.

***
<h4>What is function scope?</h4>

> The scope created within a function. Essentially the variables and other things defined in a function are only available to that particular function. 

***
<h4>What are return values?</h4>

> The values that a function returns when it completes.

***
<h4>What are arrow functions?</h4>

> A method of creating functions that is more simple and concise than using function expressions.<br>
> They are called arrow functions because they are called using "=>".

***
</details>

***

<details>
<summary><h3>JavaScript - Problem Solving</h3></summary>

***
<h4>What are the three stages in the problem solving process?</h4>

><ol>
><li>Understanding the problem.</li>
><li>Plan - utilise Pseudocode.</li>
><li>Divide and conquer (implement).</li>
></ol>

***
<h4>Why is it important to clearly understand the problem first?</h4>

> If you don't clearly understand the problem, you won't know when you've solved it.

***
<h4>What can you do to help get a clearer understanding of the problem?</h4>

><ul>
><li>Write it down on paper.</li>
><li>Reword the problem in plain english.</li>
><li>Draw diagrams.</li>
><li>Explain the problem to someone else</li>
></ul>

***
<h4>What are some of the things you should do in the planning stage of the problem solving process?</h4>

><ul>
><li>Identify if the program will have a user interface; if so, what does it look like and what function will it serve?</li>
><li>What inputs are required? Will the user provide this or will it come from somewhere else?</li>
><li>What is the desired output?</li>
><li>Based on the inputs, what steps are required to achieve the desired output?</li>
></ul>

***
<h4>What is an algorithm?</h4>

> A recipe for solving a particular problem.<br>
> It defines the steps that the computer must take in order to solve the problem.

***
<h4>What is pseudocode?</h4>

> Programming logic written out in natural language inside of in code.

***
<h4>What are the advantages of breaking a problem down and solving the smaller problems?</h4>

> It results in reduced problem complexity which results in them being more approachable and easier to solve. <br>
> Over time, once all of the smaller problems have been solved, the big problem will be too.

***
</details>

***

<details>
<summary><h3>JavaScript - Understanding Errors</h3></summary>

***
<h4>What are three reasons why you may see a TypeError?</h4>

><ol>
><li>An operand or argument passed to a function is not compatible with the type expected.</li>
><li>Attempting to modify a value that can't be changed.</li>
><li>Attempting to use a value in an inappropriate way.</li>
></ol>

***
<h4>What is the key difference between an error and a warning?</h4>

>An error will stop program execution, whereas a warning will only provide some insight on a potential problem.

***
<h4>What is one method you can use to resolve an error?</h4>

> Using the Devtools debugging feature to step through the code.

***

</details>

***

<details>
<summary><h3>JavaScript - Clean Code</h3></summary>

***
<h4>Why is it important to write clean code?</h4>

>It improves the readability of your code which can help save a significant amount of time.

***
<h4>Name 5 clean code principles previously mentioned</h4>

><ol>
><li>Use correct indentation.</li>
><li>Write explanatory comments (without abusing them).</li>
><li>Avoid excessively large functions.</li>
><li>Use naming standards for functions and variables.</li>
><li>Clearly expose the page structure.</li>
></ol>

***
<h4>What is the difference between good comments and bad comments?</h4>

>A good comment will tell the <strong>why</strong>, while a bad comment will tell the how.<br>
>Good comments explain the reasons behind a piece of code.

***

</details>

***

<details>
<summary><h3>JavaScript Fundamentals - Part 4</h3></summary>

***
<h4>What is an array?</h4>

>A data structure that stores a collection of values.

***
<h4>What are arrays useful for?</h4>

>Holding many different values under a single name.

***
<h4>How do you access an array element?</h4>

>By referring to the index number of the element.<br>
>Array indexes start with 0 (second element is 1, third is 2, etc).

***
<h4>How do you change an array element?</h4>

>By calling the array and index element, followed by "=" then the new value.

***
<h4>What are some useful array properties?</h4>

> 'length', 'constructor' and 'prototype'.

***
<h4>What are some useful array methods?</h4>

> 'push', 'pop', 'splice', 'forEach', 'map', 'filter' and 'reduce'.

***
<h4>What are loops useful for?</h4>

>Executing a set of instructions repeatedly based on a condition.

***
<h4>What is the break statement?</h4>

>A statement that breaks a loop once its condition becomes true.

***
<h4>What is the continue statement?</h4>

>A statement that skips to the next iteration of the loop once its condition becomes true.

***
<h4>What is the advantage of writing automated tests?</h4>

>Systematically verifies code functionality to ensure consistent behavior by detecting errors early.

***

</details>

***

<details>
<summary><h3>DOM Manipulation and Events</h3></summary>

***
<h4>What is the DOM?</h4>

> The Document Object Model represents a HTML document as a tree of nodes and provides functions to allow the document to be manipulated.

***
<h4>How do you target the nodes you want to work with?</h4>

>Through the use of 'selectors'.

***
<h4>How do you create an element in the DOM?</h4>

><code>document.createElement(tagName, [options])</code>

***
<h4>How do you add an element to the DOM?</h4>

><code>parentNode.appendChild(childNode)</code> This will append childNode as the last child of parentNode.<br>
><code>parentNode.insertBefore(newNode, referenceNode)</code> This will insert newNode into parentNode before referenceNode.

***
<h4>How do you remove an element from the DOM?</h4>

><code>parentNode.removeChild(child)</code> This removes child from parentNode on the DOM and will return a reference to child.

***
<h4>How can you alter an element in the DOM?</h4>

>Once the element is referenced you can use that reference to alter it.

***
<h4>When adding text to a DOM element, should you use textContent or innerHTML? Why?</h4>

>You should use textContent so that a malicious individual cannot use cross site scripting to infiltrate your website.

***
<h4>Where should you include your JavaScript tag in your HTML file when working with DOM nodes?</h4>

>Either in the 'head' of your HTML file with the 'defer' keyword or at the bottom of your HTML file.

***
<h4>How do “events” and “listeners” work?</h4>

>An 'event' is an action that occurs on a webpage, such as mouse-clicks or keystrokes.<br>
>A 'listener' waits until a specified event occurs.

***
<h4>What are three ways to use events in your code?</h4>

><ol>
><li>Inline Event Handling - Assigning event handlers within HTML tags.</li>
><li>DOM Event Handling - Listeners are attached to specific elements in the DOM. </li>
><li>Event Attributes - 'addEventListener' is applied directly to an element which can handle multiple event listeners.</li>
></ol>

***
<h4>Why are event listeners the preferred way to handle events?</h4>

>They allow for multiple event handling, promote a cleaner separation of HTML structure and JS behavior, and have improved maintainability.

***
<h4>What are the benefits of using named functions in your listeners?</h4>

>Improves the readability and conciseness of your code while making it easier to reuse in multiple places.

***
<h4>How do you attach listeners to groups of nodes?</h4>

>By using the <code>querySelectorAll('selector')</code> combined with the <code>forEach</code> method to iterate through each button follow by the event listener.

***
<h4>What is the difference between the return values of querySelector and querySelectorAll?</h4>

>querySelector will return a reference to the first match of selector.<br>
>querySelectorAll will return a nodelist containing references to all the matches of the selectors.

***
<h4>What does a “nodelist” contain?</h4>

>A list of nodes that match specified criteria when a DOM query or selection method is used.<br>
>Each node represents an individual element in the document tree or a collection or nodes based on the query.

***
<h4>Explain the difference between “capture” and “bubbling”.</h4>

>Capture: Events are detected starting from the outermost ancestor down to the largest element.<br>
>Bubbling: Events are detected from the target element up through its ancestors to the outermost element.

***

</details>

***

<details>
<summary><h3>JavaScript Fundamentals - Part 5</h3></summary>

***
<h4>What is the difference between objects and arrays?</h4>

>Objects are collections of key-value pairs used to represent entities with name properties.<br>
>Arrays are ordered lists of elements accessed by numerical indices.

***
<h4>How do you access object properties?</h4>

> Either "dot notation" (eg. <code>obj.property</code>) or "square brackets notation" (eg. <code>obj["property"]</code>).

***
<h4>What is Array.prototype.map() useful for?</h4>

>Taking in an array and applying some change to it, then returning it.<br>
>Using .map always returns the same amount of items as given.

***
<h4>What is Array.prototype.reduce() useful for?</h4>

>Iteratively reducing an array to a single value through the execution of a provided function.<br>
>It allows complex aggregations or computations to be performed on array elements.

***