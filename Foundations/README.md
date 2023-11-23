***

<h1>Foundations Course</h1>

***

<h2>Assignments</h2>

        Below you will find my solutions to the various assignments in TOP Foundations.

| Course | Assignment's Name | Link |
| ------ | ------------ | ---- |
| HTML Foundations | Recipes | Place link here inside () to the Recipes project.

***

<h2>Knowledge Check</h2>

        Please see below for my answers to the various knowledge checks in TOP Foundations.

***

<h3>How does the Web Work?</h3>

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
***

<h3>Command Line Basics</h3>

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

***

<h3>Introduction to Git</h3>

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

***

<h3>Git Basics</h3>

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

***

<h3>Intro to HTML and CSS</h3>

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

***

<h3>HTML Boilderplate</h3>

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

***

<h3>Working with text in HTML</h3>

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

***

<h3>HTML Lists</h3>

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

***


















