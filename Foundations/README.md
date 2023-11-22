***

<h1>Foundations Course</h1>

***

<h2>Assignments</h2>

        Below you will find my solutions to the various assignments in TOP Foundations.

| Course | Assignment's Name | Link |
| ------ | ------------ | ---- |
| Foundations | HTML Foundations - Project: Recipes | Place link here inside () to the Recipes project.

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



























