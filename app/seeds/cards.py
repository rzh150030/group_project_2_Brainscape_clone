from app.models import db, Card


def seed_cards():

    SQL_easy1 = Card(
        question="MySQL supports user defined functions", answer="True", deckId=1)

    SQL_easy3 = Card(question="Is the None value treated as 0?",
                     answer="True", deckId=1)
    SQL_easy4 = Card(
        question="Which command is used to modify column names or table structure?", answer="MODIFY", deckId=1)
    SQL_easy5 = Card(
        question="The command DROP SCHEMA `STUDENTS` will delete the students database.", answer="True", deckId=1)
    SQL_easy6 = Card(
        question="MySQL workbench decreases the productivity of a MySQL developer compared to other server access tools such as phpMyAdmin?", answer="True", deckId=1)
    SQL_easy7 = Card(question="To use MySQL on your computer, you'll need",
                     answer="Perl, PHP Or Java", deckId=1)
    SQL_easy8 = Card(question="What Is a MySQL View?",
                     answer="VIEWS are virtual tables that do not store any data of their own but display data stored in other tables.", deckId=1)

    SQL_easy11 = Card(question="What will be the output of the query SELECT * FROM `members` LIMIT 1, 2",
                      answer="the query will generate an error", deckId=1)
    SQL_easy12 = Card(
        question="Once a table has been created in MySQL, its structure cannot be altered", answer="True", deckId=1)
    SQL_easy13 = Card(
        question="The ASC and DESC keywords can be used in the same statement", answer="True", deckId=1)
    SQL_easy14 = Card(
        question="MySQL supports different Character Sets, which command is used to display all of them?", answer="SHOW  ", deckId=1)
    SQL_easy15 = Card(
        question="Commands passed to the MySQL daemon are written in", answer="English", deckId=1)
    SQL_easy16 = Card(question="What is the use of SQL?",
                      answer="Storing data in database", deckId=1)
    SQL_easy17 = Card(question="How can you change table structure after it was created?",
                      answer="CHANGE TABLE", deckId=1)
    SQL_easy18 = Card(
        question="MySQL does not support auto generating numbers", answer="True", deckId=1)
    SQL_easy19 = Card(question="The command to remove rows from a table \"MOVIE\" is:",
                      answer="REMOVE FROM MOVIE", deckId=1)
    SQL_easy20 = Card(question="The maximum length of the char columns is",
                      answer="65, 535 Bytes", deckId=1)
    SQL_medium1 = Card(
        question="Which command is used to specify the number of records to return?", answer="SELECT", deckId=2)
    SQL_medium2 = Card(question="Character data can be stored as",
                       answer="Both fixed or variable length strings", deckId=2)

    SQL_medium4 = Card(question="Which query will return values containing strings \"apple\", \"banana\" or \"orange\" in the database?",
                       answer="SELECT * FROM table WHERE field REGEXP ‘apple|banana|orange’", deckId=2)
    SQL_medium5 = Card(
        question="Which \"text Type\" has the maximum number of bytes?", answer="Long Text", deckId=2)
    SQL_medium6 = Card(
        question="Which declaration doesn't use the same number of bytes and consumption of bytes depending on the input data?", answer="Varchar", deckId=2)
    SQL_medium7 = Card(question="The problem that occurs when one transaction updates a database item and then the transaction fails for some reason is ________.",
                       answer="Dirty Read Problem", deckId=2)
    SQL_medium8 = Card(question="DML is included into SQL language of:",
                       answer="managing users", deckId=2)
    SQL_medium9 = Card(
        question="The query SELECT * FROM `movies` INSERT INTO `movies_archive`  will be executed without any errors.", answer="True", deckId=2)
    SQL_medium10 = Card(
        question="Which one is the correct declaration for choosing the 'Character Set' other than default?", answer="Varchar(20)", deckId=2)
    SQL_medium11 = Card(
        question="A one to many relationship can only contain multiple entries of both primary and foreign keys.", answer="True", deckId=2)
    SQL_medium12 = Card(
        question="To use 'mysqldbcopy' which privileges are required on the source server?", answer="CREATE", deckId=2)
    SQL_medium13 = Card(
        question="Which function returns reference to Array of row values?", answer="Fetch()", deckId=2)
    SQL_medium14 = Card(
        question="The syntax for adding a new column to an existing table is ALTER TABLE `table_name` ADD COLUMN `column_name` `data_type`", answer="True", deckId=2)
    SQL_medium15 = Card(question="INSERT keyword is used for:",
                        answer="adding data", deckId=2)
    SQL_medium16 = Card(question="What improvements can be made to the query UPDATE students SET `contact number` = 0999",
                        answer="The query does not need any improvements", deckId=2)

    SQL_medium18 = Card(question="The maximum length of the varchar columns Is",
                        answer="Upto 65, 535 Bytes", deckId=2)

    SQL_hard4 = Card(question="The employees table has 20 records, what will be the output of the query SELECT gender FROM employees GROUP BY gender",
                     answer="the query will return two rows only", deckId=3)
    SQL_hard5 = Card(question="What will be the effect of the query SELECT c.*,e.* FROM clients c INNER JOIN employees e ON c.emp_no = e.emp_no",
                     answer="return all the records from the clients table and only those that match the emp_no from the employees table", deckId=3)
    SQL_hard6 = Card(question="What will happen if two tables have names 'users' and 'USERS'?",
                     answer="This is not possible because table names are case insensitive", deckId=3)

    SQL_hard9 = Card(question="What is the best advantage of InnoDB over MyISAM?",
                     answer="InnoDB is thread safe", deckId=3)
    SQL_hard10 = Card(question="_____ is process of extracting previously non known valid and actionable information from large data to make crucial business and strategic decisions.", answer="Data Management", deckId=3)
    SQL_hard11 = Card(
        question="What is the maximum size of a row in a MyISAM table?", answer="No limit", deckId=3)
    SQL_hard12 = Card(
        question="One of the early proponents of a Relational Database who laid down many of the principles we use to this day was:", answer="Xigang Koi", deckId=3)
    SQL_hard13 = Card(
        question="How many distinct, different values can you hold in an Enum field?", answer="255", deckId=3)
    SQL_hard14 = Card(
        question="A table that displays data redundancies yields ________ anomalies", answer="Insertion", deckId=3)
    SQL_hard15 = Card(question="What is the Commit command is used for?",
                      answer="To restore the old values", deckId=3)
    SQL_hard16 = Card(question="How to dump the whole MySQL database to a file?",
                      answer="mysql -e \"select * from table\" -u user -pxxxxxxx database > dumpfile.txt", deckId=3)
    SQL_hard17 = Card(
        question="The Function 'fetchrow_hashref()' returns reference to hash row values keyed by ______________", answer="Row Name", deckId=3)
    SQL_hard18 = Card(
        question="Which command is used to remove all rows from a table?", answer="Delete", deckId=3)
    SQL_hard19 = Card(question="Function which causes retrieval of any kind of data from database is considered as",
                      answer="Interface or Signature", deckId=3)
    Docker_easy1 = Card(question="Which are the default networks in Docker?",
                        answer="The default networks in Docker include bridge, host and None.", deckId=4)
    Docker_easy2 = Card(question="What is Docker Swarm mode?",
                        answer="A swarm is the name of the latest Docker release", deckId=4)
    Docker_easy3 = Card(question="How to install a docker plugin vieux\/sshfs with debug environment set to 1.",
                        answer="$ docker plugin install vieux\/sshfs DEBUG=1", deckId=4)
    Docker_easy4 = Card(
        question="You can define and run multiple Docker containers using:", answer="Docker Swarn", deckId=4)
    Docker_easy5 = Card(
        question="What is the name of the enterprise-grade cluster management solution from Docker?", answer="Docker Swarm", deckId=4)
    Docker_easy6 = Card(
        question="How to list all the docker images pulled on the system with image details such as TAG\/IMAGE ID\/SIZE etc.", answer="$ docker img", deckId=4)
    Docker_easy7 = Card(question="How can you monitor Docker in production?",
                        answer="You can use Docker tools such as Docker pin and docker file for monitoring", deckId=4)
    Docker_easy8 = Card(question="What is virtualization?",
                        answer="Virtualization is the process of creating a software-based, real version of something(compute storage, servers, application, etc.).", deckId=4)
    Docker_easy9 = Card(question="Docker containers can run on:",
                        answer="Only Linux distributions", deckId=4)
    Docker_easy10 = Card(question="What are Docker Images?",
                         answer="Docker image is the source of Docker virtualization.", deckId=4)
    Docker_easy11 = Card(question="How to remove the docker container with container id mentioned in the command.",
                         answer="$ docker rm -rf 9b6343d3b5a0", deckId=4)
    Docker_medium1 = Card(question="How to monitor Docker containers in production?",
                          answer="Docker provides functionalities like docker stats and docker events to monitor container in production.", deckId=5)
    Docker_medium2 = Card(question="If you wish to use a base image and make modifications or personalize it, how do you do that?",
                          answer="docker <image_name>", deckId=5)
    Docker_medium3 = Card(question="How to delete a stopped container?",
                          answer="$ docker ---rm <container id>", deckId=5)
    Docker_medium4 = Card(
        question="How to list all nodes in your Docker swarm?", answer="docker node get", deckId=5)
    Docker_medium5 = Card(question="How to show the logs of the docker container with contained id mentioned in the command.",
                          answer="$ docker logs 09ca6feb6efc", deckId=5)
    Docker_medium6 = Card(question="How to run the docker image mentioned in the command. Which will create a docker container in which the Apache HTTP server will run.",
                          answer="$ docker run -it -d httpd", deckId=5)
    Docker_medium7 = Card(question="Is there a hard limit for the number of containers that you can run and if there is which is number of total containers that you can run?",
                          answer="Even though there is no limit of containers that can run on Docker, hardware limitations come into the picture.", deckId=5)

    Docker_medium9 = Card(question="What are the Namespaces in Docker?",
                          answer="Namespaces in Docker are a technology for the facility of containers in Docker.", deckId=5)
    Docker_medium10 = Card(question="What is a Dockerfile?",
                           answer="Docker cannot be build images automatically by reading the instructions from a file called Dockerfile.", deckId=5)
    Docker_medium11 = Card(
        question="How to list all the docker containers running\/exited\/stopped with container details.", answer="$ docker ps -a", deckId=5)
    Docker_medium12 = Card(question="Docker image is created with a series of read-only layers and layer in docker represents instructions on the Dockerfile of the image.",
                           answer="The hypervisor needs extensive hardware for proper function while docker is implemented on an actual operating system.", deckId=5)
    Docker_medium13 = Card(question="How to retrieve the join token for worker nodes in Docker Swarm?",
                           answer="docker swarm join-token worker", deckId=5)
    Docker_hard1 = Card(question="How to initialize a docker swarm?",
                        answer="docker swarm init --advertise-addr your_server_ip_here", deckId=6)
    Docker_hard2 = Card(question="How to list all of your services in Docker swarm?",
                        answer="docker ls service", deckId=6)
    Docker_hard3 = Card(question="Applications inside the containers accept configuration parameters in the form of environment variables. These variables can tell the app to listen on a specific port but you can't use a specific password.", answer="True", deckId=6)
    Docker_hard4 = Card(question="How can you make sure your Docker containers and their data are safely backed up?",
                        answer="Backup the \/var\/lib\/docker\/ directory manually  Nothing.", deckId=6)
    HTML_easy1 = Card(
        question="Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", answer="alt", deckId=7)
    HTML_easy2 = Card(question="All elements are identified by their __________ and are marked up using either start tags and end tags or self-closing tags",
                      answer="Attribute Names", deckId=7)

    HTML_easy4 = Card(
        question="What is the correct HTML element for playing audio files?", answer="<audio>", deckId=7)
    HTML_easy5 = Card(
        question="Block elements are normally displayed without starting a new line.", answer="False", deckId=7)
    HTML_easy6 = Card(
        question="How can you make a bulleted list?", answer="<ul>", deckId=7)
    HTML_easy7 = Card(question="What does HTML stand for?",
                      answer="Hyper Text Markup Language", deckId=7)

    HTML_easy9 = Card(
        question="Which character is used to indicate an end tag?", answer="/", deckId=7)
    HTML_easy10 = Card(question="To create a blank line in your web page",
                       answer="press Enter two times", deckId=7)
    HTML_easy11 = Card(
        question="The BODY Tag is usually used after", answer="EM Tag", deckId=7)
    HTML_easy12 = Card(question="Is PHP case sensitive",
                       answer="True", deckId=7)
    HTML_easy13 = Card(question="HTML Uses",
                       answer="Fixed Tags Defined By The Language", deckId=7)
    HTML_easy14 = Card(question="A homepage is __________",
                       answer="an index of encyclopedia articles", deckId=7)
    HTML_easy15 = Card(
        question="What is the HTML Tag for the largest heading", answer="<h6>", deckId=7)
    HTML_easy16 = Card(
        question="HTML comments start with <!-- and end with -->", answer="True", deckId=7)
    HTML_easy17 = Card(
        question="Choose the correct HTML element for the largest heading:", answer="<h1>", deckId=7)
    HTML_easy18 = Card(
        question="Inline elements are normally displayed without starting a new line", answer="True", deckId=7)
    HTML_easy19 = Card(question="What is the correct HTML for creating a hyperlink?",
                       answer="<a href=\"http://www.w3schools.com\">W3Schools</a>", deckId=7)
    HTML_easy20 = Card(
        question="Choose the correct HTML tag for the smallest size heading?", answer="<heading>", deckId=7)

    HTML_medium2 = Card(question="__________ is the XML equivalent to strict HTML 4.01.",
                        answer="XHTML 1.0 Frameset", deckId=8)

    HTML_medium4 = Card(
        question="Tags and test that are not directly displayed on the page are written in _____ section.", answer="<html>", deckId=8)
    HTML_medium5 = Card(question="Who is known as the father of world wide web (WWW)?",
                        answer="Robert Cailliau", deckId=8)
    HTML_medium6 = Card(question="When would you use path along with file name of a picture in an IMG tag?",
                        answer="path is optional and not necessary", deckId=8)
    HTML_medium7 = Card(
        question="Which HTML element is used to define the description Data?", answer="<dt>", deckId=8)
    HTML_medium8 = Card(
        question="To create a combo box (drop down box) which tag will you use?", answer="<select>", deckId=8)

    HTML_medium10 = Card(
        question="HTML are web pages read and rendered by", answer="Compiler", deckId=8)

    HTML_medium13 = Card(
        question="The HTML <canvas> element is used to:", answer="draw graphics", deckId=8)
    HTML_medium14 = Card(
        question="<b> tag makes the enclosed text bold. What is other tag to make text bold?", answer="<strong>", deckId=8)
    HTML_medium15 = Card(
        question="Choose the correct HTML Tag to make a text Italic", answer="<italic>", deckId=8)
    HTML_medium16 = Card(
        question="Which attribute sets the text direction as related to lang attribute.", answer="Sub", deckId=8)
    HTML_medium17 = Card(question="In HTML, what does the <aside> element define?",
                         answer="Content aside from the page content", deckId=8)
    HTML_medium18 = Card(
        question="What tag is used to display a picture in a HTML page?", answer="Picture", deckId=8)
    HTML_medium19 = Card(
        question="Some tags enclose the text. Those tags are known as", answer="Couple tags", deckId=8)

    HTML_hard2 = Card(
        question="Which value of Socket.readyState atribute of WebSocket indicates that the connection has been closed or could not be opened?", answer="0", deckId=9)
    HTML_hard3 = Card(question="Which are the objects used for storing data on the client provided by the HTML local storage?",
                      answer="Window.localStorage", deckId=9)
    HTML_hard4 = Card(
        question="Apart from the <b> tag, what other Tag makes text bold ?", answer="<emp>", deckId=9)
    HTML_hard5 = Card(
        question="Which HTML Tag is used to define a client - side script such as the Javascript?", answer="<unscript>", deckId=9)
    HTML_hard6 = Card(question="What is the use of Scalable Vector Graphics (SVG) in HTML5?",
                      answer="Scalable Vector Graphics (SVG) is the part of the vector-based family of graphics. There are various forms of Raster-based graphics available that stores the color definition for each pixel in an array of data.", deckId=9)
    HTML_hard7 = Card(
        question="Intensity of a color can be described through", answer="Hue", deckId=9)
    HTML_hard8 = Card(question="What is the full form of HTTP?",
                      answer="Hyper text transfer package", deckId=9)
    HTML_hard9 = Card(question="What does vlink attribute mean?",
                      answer="visited link", deckId=9)
    HTML_hard10 = Card(question="Why do we need HTML5 Server-Sent Events?",
                       answer="Server-Sent Events (SSE) is a recent HTML5 specification in combination with the EventSource API designed for streaming updates.", deckId=9)

    Javascript_easy1 = Card(
        question="Inside which HTML element do we put the JavaScript?", answer="<javascript>", deckId=10)

    Javascript_easy3 = Card(question="What is the correct JavaScript syntax to change the content of the HTML element below?",
                            answer="#demo.innerHTML = \"Hello World!\"", deckId=10)
    Javascript_easy4 = Card(
        question="Where is the correct place to insert a JavaScript?", answer="The <head> section", deckId=10)
    Javascript_easy5 = Card(
        question="How do you call a function named \"myFunction\"?", answer="myFunction()", deckId=10)
    Javascript_easy6 = Card(
        question="The external JavaScript file must contain the <script> tag.", answer="True", deckId=10)
    Javascript_easy7 = Card(
        question="Is JavaScript case-sensitive?", answer="True", deckId=10)
    Javascript_easy8 = Card(question="How to insert a comment that has more than one line?",
                            answer="/*This comment has more than one line*/", deckId=10)
    Javascript_easy9 = Card(
        question="How can you add a comment in a JavaScript?", answer="//This is a comment", deckId=10)
    Javascript_easy10 = Card(
        question="JavaScript is the same as Java.", answer="False", deckId=10)
    Javascript_easy11 = Card(question="What is the correct JavaScript syntax for opening a new window called \"w2\" ?",
                             answer="w2 = window.new(\"http://www.w3schools.com\")", deckId=10)
    Javascript_easy12 = Card(
        question="How do you declare a JavaScript variable?", answer="v carName", deckId=10)
    Javascript_easy13 = Card(
        question="How to write an IF statement for executing some code if \"i\" is NOT equal to 5?", answer="if (i != 5)", deckId=10)
    Javascript_easy14 = Card(
        question="Which event occurs when the user clicks on an HTML element?", answer="onchange", deckId=10)
    Javascript_easy15 = Card(
        question="How do you round the number 7.25, to the nearest integer?", answer="Math.round(7.25)", deckId=10)
    Javascript_easy16 = Card(
        question="How does a FOR loop start?", answer="for i = 1 to 5", deckId=10)
    Javascript_easy17 = Card(
        question="How to write an IF statement in JavaScript?", answer="if i = 5 then", deckId=10)
    Javascript_easy18 = Card(
        question="How do you find the number with the highest value of x and y?", answer="ceil(x, y)", deckId=10)
    Javascript_easy19 = Card(question="What is the correct syntax for referring to an external script called \"xxx.js\"?",
                             answer="<script name=\"xxx.js\">", deckId=10)
    Javascript_easy20 = Card(question="What is the correct way to write a JavaScript array?",
                             answer="var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")", deckId=10)

    Linux_easy1 = Card(
        question="Which command can be used to determine file type by its content?", answer="file", deckId=11)
    Linux_easy2 = Card(
        question="Which command is used to create new directory?", answer="mkdir", deckId=11)
    Linux_easy3 = Card(
        question="How can we find the process name from its process id? Assume the Proccess ID is 1", answer="ps –p 1", deckId=11)
    Linux_easy4 = Card(
        question="Which command can be used to find a word from a text file?", answer="cut", deckId=11)
    Linux_easy5 = Card(
        question="Which of the answers listed below refers to a command used for invoking a text editor in Unix-like operating systems?", answer="vi", deckId=11)
    Linux_easy6 = Card(
        question="Which command is used to create a deployment in Kubernetes?", answer="kubectl run", deckId=11)
    Linux_easy7 = Card(
        question="Which command to use for complete details of a command on the shell?", answer="man", deckId=11)
    Linux_easy8 = Card(question="What does the command top show",
                       answer="The current processes alongside information about them", deckId=11)
    Linux_easy9 = Card(
        question="How to delete a directory in Linux?", answer="rmdir", deckId=11)
    Linux_easy10 = Card(
        question="What command is used to clear up the command prompt window?", answer="clear", deckId=11)

    Linux_easy12 = Card(question="HTML supports",
                        answer="ordered lists", deckId=11)
    Linux_easy13 = Card(
        question="What is the name of a Linux utility used for managing software packages on Red Hat and Red Hat-based Linux distributions?", answer="yum", deckId=11)
    Linux_easy14 = Card(question="What does GNU stands for?",
                        answer="Gnu’s not Unix", deckId=11)

    Linux_medium1 = Card(
        question="Which command can be used to determine file type by its content?", answer="file", deckId=12)
    Linux_medium2 = Card(
        question="Which command is used to create new directory?", answer="mkdir", deckId=12)
    Linux_medium3 = Card(
        question="How can we find the process name from its process id? Assume the Proccess ID is 1", answer="ps –p 1", deckId=12)
    Linux_medium4 = Card(
        question="Which command can be used to find a word from a text file?", answer="cut", deckId=12)
    Linux_medium5 = Card(
        question="Which of the answers listed below refers to a command used for invoking a text editor in Unix-like operating systems?", answer="vi", deckId=12)
    Linux_medium6 = Card(
        question="Which command is used to create a deployment in Kubernetes?", answer="kubectl run", deckId=12)
    Linux_medium7 = Card(
        question="Which command to use for complete details of a command on the shell?", answer="man", deckId=12)
    Linux_medium8 = Card(question="What does the command top show",
                         answer="The current processes alongside information about them", deckId=12)
    Linux_medium9 = Card(
        question="How to delete a directory in Linux?", answer="rmdir", deckId=12)
    Linux_medium10 = Card(
        question="What command is used to clear up the command prompt window?", answer="clear", deckId=12)

    Linux_medium12 = Card(question="HTML supports",
                          answer="ordered lists", deckId=12)
    Linux_medium13 = Card(
        question="What is the name of a Linux utility used for managing software packages on Red Hat and Red Hat-based Linux distributions?", answer="yum", deckId=12)
    Linux_medium14 = Card(question="What does GNU stands for?",
                          answer="Gnu’s not Unix", deckId=12)

    Linux_hard1 = Card(
        question="Choose the example for block special file", answer="DVD-ROM", deckId=13)
    Linux_hard2 = Card(question="Which command will duplicate each line in a file?",
                       answer="sed 'p' < filename", deckId=13)
    Linux_hard3 = Card(
        question="How do we access the value of 'd' later? $a = array(     'a',     3 => 'b',     1 => 'c',     'd' )", answer="$a[0]", deckId=13)
    Linux_hard4 = Card(question="In Kubernetes how to create a service for a replicated Nginx, which serves on port 80 and connects to the containers on port 8000?",
                       answer="kubectl expose rc nginx --port=8080 --target-port=80", deckId=13)
    Linux_hard5 = Card(question="How to scale a replicaset named 'foo' to 3?",
                       answer="kubectl scale --replicas=3 rs\/foo", deckId=13)
    Linux_hard6 = Card(
        question="A virtual filesystem created dynamically by Linux that contains information about system resources is:", answer="\/proc", deckId=13)
    Linux_hard7 = Card(
        question="What are the most common Linux boot managers?", answer="LILO\/GRUB", deckId=13)
    Linux_hard8 = Card(question="tcpdump is a packet-sniffing Linux command that offers administrators the ability to monitor what?",
                       answer="Network traffic and activity", deckId=13)
    Linux_hard9 = Card(
        question="A low-level utility that can be used for creating\/restoring filesystem backup copies in Linux is called:", answer="dd", deckId=13)

    Linux_hard11 = Card(
        question="What Linux command is the modern replacement for Telnet, and allows admins to connect to a specific network port?", answer="ncat", deckId=13)
    Linux_hard12 = Card(question="How to delete all pods in Kubernetes matching the awk pattern1 or pattern2?",
                        answer="kubectl get nodes -n myns --no-headers=true | awk '\/pattern1|pattern2\/{print $1}' | xargs  kubectl delete -n myns pod", deckId=13)
    Linux_hard13 = Card(question="When patching resources in Kubernetes, how to partially update a node?",
                        answer="kubectl patch node k8s-node-1 -p '{\"spec\":{\"unschedulable\":false}}'", deckId=13)

    PHP_easy1 = Card(question="How are objects in PHP passed by?",
                     answer="Objects are passed by value.", deckId=14)
    PHP_easy2 = Card(
        question="Can we export data into an Excel file?", answer="True", deckId=14)
    PHP_easy3 = Card(question="What does the unlink() function do?",
                     answer="The unlink() function is dedicated for file system handling. It simply deletes the file given as entry.", deckId=14)
    PHP_easy4 = Card(
        question="Will a comparison of an integer 12 and a string \"13\" work in PHP?", answer="True", deckId=14)
    PHP_easy5 = Card(
        question="Which programming language does PHP resemble?", answer="C", deckId=14)
    PHP_easy6 = Card(
        question="Which command opens the interactive PHP shell from the command line interface?", answer="php -a", deckId=14)
    PHP_easy7 = Card(
        question="What number is the first key of a PHP’s numerical array?", answer="-1", deckId=14)
    PHP_easy8 = Card(question="How can we determine the number of rows returned in the result set of a MySQL query?",
                     answer="The function mysqli_get_rows() returns the number of rows in a result set.", deckId=14)
    PHP_easy9 = Card(
        question="Multiple inheritance is supported in PHP.", answer="True", deckId=14)
    PHP_easy10 = Card(question="How do we check if a given variable is empty?",
                      answer="With the None() function.", deckId=14)
    PHP_easy11 = Card(question="How is a constant defined in a PHP script?",
                      answer="define (\"ACONSTANT\" 123)", deckId=14)
    PHP_easy12 = Card(question="What does the unset() function do?",
                      answer="The unset() function is dedicated for variable management. It will make a variable undefined.", deckId=14)
    PHP_medium1 = Card(question="If we want to return a value from a function we called, how can we do that?",
                       answer="We need to use 'return $value'", deckId=15)
    PHP_medium2 = Card(question="Which functions can be used to get the image's properties (size, width, and height)?",
                       answer="The functions are  getimagesize() for size, imagesx() for width and imagesy() for height.", deckId=15)
    PHP_medium3 = Card(
        question="How many error levels are available in PHP ?", answer="20", deckId=15)
    PHP_medium4 = Card(question="What do the initials of PHP stand for?",
                       answer="Hypertext Parser.", deckId=15)
    PHP_medium5 = Card(
        question="Which of the functions is used to sort an array in descending order?", answer="asort()", deckId=15)
    PHP_medium6 = Card(question="How can PHP and Javascript interact?",
                       answer="PHP and Javascript cannot directly interact since PHP is a server side language and Javascript is a client-side language.", deckId=15)

    PHP_medium8 = Card(question="How is the comparison of objects done in PHP?",
                       answer="We use the operator '===' to test two objects are instanced from the same class and have same attributes and equal values.", deckId=15)

    PHP_medium10 = Card(
        question="Can I run several versions of PHP at the same time?", answer="True", deckId=15)
    PHP_medium11 = Card(question="Who is known as the father of PHP?",
                        answer="Rasmus Lerdorf", deckId=15)
    PHP_medium12 = Card(question="What is the purpose of $_SESSION[]?",
                        answer="Used to register a global variable", deckId=15)

    PHP_medium14 = Card(
        question="Which sign is used to access a variable of  a variable in PHP?", answer="$$", deckId=15)
    PHP_hard1 = Card(question="How to protect special characters in a query string?",
                     answer="urlencode()", deckId=16)
    PHP_hard2 = Card(question="How can we pass the variable through the navigation between the pages?",
                     answer="using href link", deckId=16)
    PHP_hard3 = Card(question="What is the function to parse a configuration file?",
                     answer="parseini_file()", deckId=16)
    PHP_hard4 = Card(question="Which cryptographic extension provides generation and verification of digital signatures?",
                     answer="PHP-CloseSSL", deckId=16)
    PHP_hard5 = Card(question="What does PEAR stand for?",
                     answer="PHP Export and Application Repository.", deckId=16)
    PHP_hard6 = Card(question="What is the default session time in PHP?",
                     answer="The default session time in php is until the closing of the browser", deckId=16)
    Kubernetes_easy1 = Card(
        question="Cronjobs in kubernetes run in", answer="UTC only", deckId=17)
    Kubernetes_easy2 = Card(question="How to stream pod logs (stdout) in Kubernetes?",
                            answer="kubectl logs -f my-pod", deckId=17)
    Kubernetes_easy3 = Card(question="Deployment Controllers are part of",
                            answer="Master Controller Manager", deckId=17)
    Kubernetes_easy4 = Card(question="How to show the metrics for a given node in Kubernetes?",
                            answer="kubectl ps node my-node", deckId=17)
    Kubernetes_medium1 = Card(question="How to dump current cluster state to stdout in Kubernetes?",
                              answer="kubectl cluster-info show", deckId=18)
    Kubernetes_medium2 = Card(question="How to show metrics for a given pod and its containers in Kubernetes?",
                              answer="kubectl resources pod POD_NAME --containers", deckId=18)
    Kubernetes_medium3 = Card(question="How to mark a node called my-node as schedulable in Kubernetes?",
                              answer="kubectl schedulable my-node", deckId=18)
    Kubernetes_hard1 = Card(question="How to scale a replicaset named 'foo' to 3?",
                            answer="kubectl scale --replicas=3 rs/foo", deckId=19)
    Kubernetes_hard2 = Card(question="In Kubernetes how to create a service for a replicated Nginx, which serves on port 80 and connects to the containers on port 8000?",
                            answer="kubectl expose rc nginx --port=8080 --target-port=80", deckId=19)
    Kubernetes_hard3 = Card(question="When patching resources in Kubernetes, how to partially update a node?",
                            answer="kubectl patch node k8s-node-1 -p '{\"spec\":{\"unschedulable\":false}}'", deckId=19)
    Kubernetes_hard4 = Card(question="How to delete all pods in Kubernetes matching the awk pattern1 or pattern2?",
                            answer="kubectl get nodes -n myns --no-headers=true | awk '/pattern1|pattern2/{print $1}' | xargs  kubectl delete -n myns pod", deckId=19)
    DevOps_easy1 = Card(question="Which command would you use to get the hostname of a remote host with Ansible",
                        answer="ansible your_server -m setup -a field=*hostname*", deckId=20)

    DevOps_easy3 = Card(question="Which command would you use to gather facts with Ansible?",
                        answer="ansible your_server -m gather", deckId=20)
    DevOps_easy4 = Card(question="What does 'become: yes' mean in Ansible playbooks?",
                        answer="It means that the command must be retried until it succeeds", deckId=20)
    DevOps_easy5 = Card(
        question="The -b flag in an Ansible ad-hoc command indicates that the command should be executed with sudo privileges.", answer="false", deckId=20)
    DevOps_easy6 = Card(
        question="Ansible is an open-source agentless automation tool that enables you to easily configure and deploy systems.", answer="true", deckId=20)

    DevOps_easy8 = Card(question="What are Ansible ad-hoc commands?",
                        answer="Ansible ad-hoc commands are commands which helps you execute simple tasks without the need of creating playbooks", deckId=20)
    DevOps_easy9 = Card(
        question="What language is an Ansible playbooks are written in by default?", answer="YAML format", deckId=20)
    CMS_easy1 = Card(question="Where is thewp_config.php file located?",
                     answer="Inside the wp-admin folder", deckId=21)
    CMS_easy2 = Card(question="You can change your Wordpress themes using?",
                     answer="Wordpress Appearance", deckId=21)
    CMS_easy3 = Card(question="What is the difference between character 23 and x23?",
                     answer="23 specifies the octal 23 and x23 determine the hex 23.", deckId=21)

    CMS_easy5 = Card(question="Just installed plugin crashes your Wordpress site with no access to the dashboard. What do you do?",
                     answer="Rename the specific plugin folder in /wp-content/plugins", deckId=21)
    CMS_easy6 = Card(question="What is Gravatar?",
                     answer="A Plugin", deckId=21)
    CMS_easy7 = Card(question="You have lost access to your admin area and can't recover it with email. What do you do?",
                     answer="Delete your themes folder.", deckId=21)
    CMS_easy8 = Card(question="What is moderate comment in WordPress.",
                     answer="Comments by admin on a post are not published directly unless the visitors provides it. It is called moderation.", deckId=21)
    CMS_easy9 = Card(question="What are categories in WordPress.",
                     answer="Categories allow a user to divide its content into different sections.", deckId=21)
    CMS_easy10 = Card(question="What are the disadvantages of WordPress?",
                      answer="Only utilizes PHP", deckId=21)

    CMS_easy12 = Card(question="What is Wordpress?",
                      answer="WordPress is open source software you can use to create a beautiful website, blog, or app.", deckId=21)
    CMS_easy13 = Card(
        question="Which color is the official color of the Wordpress.org logo?", answer="Yellow", deckId=21)
    CMS_easy14 = Card(question="What is a Widget?",
                      answer="WordPress Widgets add content and features to your Sidebars.", deckId=21)
    CMS_easy15 = Card(question="How many Posts and Pages can you have?",
                      answer="I can have 100 posts and 100 pages", deckId=21)
    CMS_easy16 = Card(question="What is a Child Theme?",
                      answer="The child theme is an extension of the sub-child theme", deckId=21)
    CMS_easy17 = Card(
        question="What websites can you build with WordPress?", answer="Shop", deckId=21)
    CMS_easy18 = Card(
        question="What is the name of the first page you encounter after logging into your web page?", answer="Dashboard", deckId=21)
    CMS_medium1 = Card(question="Which ‘meta box’ is not hidden by default on Post and Page screens?",
                       answer="Featured Image is the meta box that is not hidden by default on Post and Page screens.", deckId=22)
    CMS_medium2 = Card(question="Which licensing authority is responsible for WordPress?",
                       answer="GPLv2 (GNU General Public License)", deckId=22)
    CMS_medium3 = Card(question="In WordPress, objects are passed by value or by reference.",
                       answer="In WordPress, all objects are passed by value.", deckId=22)
    CMS_medium4 = Card(question="What are template tags in WordPress?",
                       answer="Template tags are used within themes to retrieve content from your database.", deckId=22)
    CMS_medium5 = Card(question="Why is wordpress.com considered more secure than wordpress.org?",
                       answer="because they limit the themes and also does not allow installing plugins.", deckId=22)
    CMS_medium6 = Card(question="What is the difference between Wordpress Posts and Wordpress Pages?",
                       answer="There is absolutely no difference between Posts and Pages.", deckId=22)
    CMS_medium7 = Card(question="What is a WordPress taxonomy?",
                       answer="In WordPress, a “taxonomy” is a grouping mechanism for some posts (or links or custom post types).", deckId=22)
    CMS_medium8 = Card(question="What are meta-tags?",
                       answer="Meta-tags are keywords and description used to display website or page information.", deckId=22)
    CMS_medium9 = Card(question="What is the difference between WordPress Posts and Pages?",
                       answer="There is no difference between Posts and Pages.", deckId=22)
    CMS_medium10 = Card(question="How can you edit a WordPress comment?",
                        answer="You can edit WordPress comment using the command. From the panel, under the Comments option, select edit to edit a comment.", deckId=22)
    CMS_medium11 = Card(question="Do deactivated plugins slow down a WordPress site?",
                        answer="Even deactivated plugins slow down your website", deckId=22)
    CMS_medium12 = Card(
        question="How many templates can one theme contain?", answer="Unlimited", deckId=22)
    CMS_medium13 = Card(question="How to allow only registered users to comment on WordPress?",
                        answer="If you don't want a comment from a new user on your blog, check the option \"Users must be registered and logged in to comment\" from Discussions under the Settings option.", deckId=22)
    CMS_medium14 = Card(question="How can you create a static page with WordPress?",
                        answer="To create a static page in WordPress, in the page section you have to upload a PHP file to the server in the theme folder, and then select that as your template.", deckId=22)
    CMS_medium15 = Card(question="What are Shortcodes in WordPress and how we can use it?",
                        answer="Shortcodes is a specific code that is used to do control loop.", deckId=22)
    CMS_medium16 = Card(
        question="How many types of plans are available in wordpress by default?", answer="4", deckId=22)
    CMS_medium17 = Card(question="What is the difference between the WordPress Address and Site Address settings located in the General Settings area?",
                        answer="The WordPress Address is where to look for WordPress plugins, while the Site Address is what will be used as the base for creating URLs for web pages.", deckId=22)
    CMS_medium18 = Card(question="What is the Ping of Death?",
                        answer="The Ping of Death is an occurrence when sending packets are reassembled, are too large for the system to understand.", deckId=22)
    CMS_medium19 = Card(question="What is the best way to change table prefix (wp_) before installation in WordPress?",
                        answer="Before Installation: In this way, you have to rename your wp_config.php file according to your need through $table_prefix=’wp_’;.", deckId=22)
    CMS_medium20 = Card(question="What is a filter hook?",
                        answer="A Filter hook in WordPress allows you get and modify WordPress data before it is sent to the database or the browser.", deckId=22)
    CMS_hard1 = Card(question="Where in Wordpress can you discourage search engines from indexing this site?",
                     answer="From the Plugins Section", deckId=23)
    CMS_hard2 = Card(question="What are Importers in WordPress?",
                     answer="Importers are linking files that provide the functionality to export a bulk XML file with any number of records.", deckId=23)
    CMS_hard3 = Card(question="How do you enable debug mode in WP?",
                     answer="You can enable debug mode in WP by editing wp-config.php file and changing WP_DEBUG constant value to true", deckId=23)
    CMS_hard4 = Card(question="What is an action hook?",
                     answer="A hook that is triggered at a specific time when WordPress is running and lets you take an action.", deckId=23)
    CMS_hard5 = Card(question="What is the correct syntax of the usermeta function in Wordpress?",
                     answer="get_user( int $user_id, string $key = '', bool $single = true )", deckId=23)
    CMS_hard6 = Card(question="What should one use for plugin development — custom post types or custom database tables?",
                     answer="custom post type", deckId=23)

    # db.session.add
    db.session.add(SQL_easy1)

    db.session.add(SQL_easy3)
    db.session.add(SQL_easy4)
    db.session.add(SQL_easy5)
    db.session.add(SQL_easy6)
    db.session.add(SQL_easy7)
    db.session.add(SQL_easy8)

    db.session.add(SQL_easy11)
    db.session.add(SQL_easy12)
    db.session.add(SQL_easy13)
    db.session.add(SQL_easy14)
    db.session.add(SQL_easy15)
    db.session.add(SQL_easy16)
    db.session.add(SQL_easy17)
    db.session.add(SQL_easy18)
    db.session.add(SQL_easy19)
    db.session.add(SQL_easy20)
    db.session.add(SQL_medium1)
    db.session.add(SQL_medium2)

    db.session.add(SQL_medium5)
    db.session.add(SQL_medium6)
    db.session.add(SQL_medium7)
    db.session.add(SQL_medium8)
    db.session.add(SQL_medium9)
    db.session.add(SQL_medium10)
    db.session.add(SQL_medium11)
    db.session.add(SQL_medium12)
    db.session.add(SQL_medium13)
    db.session.add(SQL_medium14)
    db.session.add(SQL_medium15)
    db.session.add(SQL_medium16)

    db.session.add(SQL_medium18)

    db.session.add(SQL_hard4)
    db.session.add(SQL_hard5)
    db.session.add(SQL_hard6)

    db.session.add(SQL_hard9)
    db.session.add(SQL_hard10)
    db.session.add(SQL_hard11)
    db.session.add(SQL_hard12)
    db.session.add(SQL_hard13)
    db.session.add(SQL_hard14)
    db.session.add(SQL_hard15)
    db.session.add(SQL_hard16)
    db.session.add(SQL_hard17)
    db.session.add(SQL_hard18)
    db.session.add(SQL_hard19)
    db.session.add(Docker_easy1)
    db.session.add(Docker_easy2)
    db.session.add(Docker_easy3)
    db.session.add(Docker_easy4)
    db.session.add(Docker_easy5)
    db.session.add(Docker_easy6)
    db.session.add(Docker_easy7)
    db.session.add(Docker_easy8)
    db.session.add(Docker_easy9)
    db.session.add(Docker_easy10)
    db.session.add(Docker_easy11)
    db.session.add(Docker_medium1)
    db.session.add(Docker_medium2)
    db.session.add(Docker_medium3)
    db.session.add(Docker_medium4)
    db.session.add(Docker_medium5)
    db.session.add(Docker_medium6)
    db.session.add(Docker_medium7)

    db.session.add(Docker_medium9)
    db.session.add(Docker_medium10)
    db.session.add(Docker_medium11)
    db.session.add(Docker_medium12)
    db.session.add(Docker_medium13)
    db.session.add(Docker_hard1)
    db.session.add(Docker_hard2)
    db.session.add(Docker_hard3)
    db.session.add(Docker_hard4)
    db.session.add(HTML_easy1)
    db.session.add(HTML_easy2)

    db.session.add(HTML_easy4)
    db.session.add(HTML_easy5)
    db.session.add(HTML_easy6)
    db.session.add(HTML_easy7)

    db.session.add(HTML_easy9)
    db.session.add(HTML_easy10)
    db.session.add(HTML_easy11)
    db.session.add(HTML_easy12)
    db.session.add(HTML_easy13)
    db.session.add(HTML_easy14)
    db.session.add(HTML_easy15)
    db.session.add(HTML_easy16)
    db.session.add(HTML_easy17)
    db.session.add(HTML_easy18)
    db.session.add(HTML_easy19)
    db.session.add(HTML_easy20)

    db.session.add(HTML_medium2)

    db.session.add(HTML_medium4)
    db.session.add(HTML_medium5)
    db.session.add(HTML_medium6)
    db.session.add(HTML_medium7)
    db.session.add(HTML_medium8)

    db.session.add(HTML_medium10)

    db.session.add(HTML_medium13)
    db.session.add(HTML_medium14)
    db.session.add(HTML_medium15)
    db.session.add(HTML_medium16)
    db.session.add(HTML_medium17)
    db.session.add(HTML_medium18)
    db.session.add(HTML_medium19)

    db.session.add(HTML_hard2)
    db.session.add(HTML_hard3)
    db.session.add(HTML_hard4)
    db.session.add(HTML_hard5)
    db.session.add(HTML_hard6)
    db.session.add(HTML_hard7)
    db.session.add(HTML_hard8)
    db.session.add(HTML_hard9)
    db.session.add(HTML_hard10)

    db.session.add(Javascript_easy1)

    db.session.add(Javascript_easy3)
    db.session.add(Javascript_easy4)
    db.session.add(Javascript_easy5)
    db.session.add(Javascript_easy6)
    db.session.add(Javascript_easy7)
    db.session.add(Javascript_easy8)
    db.session.add(Javascript_easy9)
    db.session.add(Javascript_easy10)
    db.session.add(Javascript_easy11)
    db.session.add(Javascript_easy12)
    db.session.add(Javascript_easy13)
    db.session.add(Javascript_easy14)
    db.session.add(Javascript_easy15)
    db.session.add(Javascript_easy16)
    db.session.add(Javascript_easy17)
    db.session.add(Javascript_easy18)
    db.session.add(Javascript_easy19)
    db.session.add(Javascript_easy20)
    db.session.add(Linux_easy1)
    db.session.add(Linux_easy2)
    db.session.add(Linux_easy3)
    db.session.add(Linux_easy4)
    db.session.add(Linux_easy5)
    db.session.add(Linux_easy6)
    db.session.add(Linux_easy7)
    db.session.add(Linux_easy8)
    db.session.add(Linux_easy9)
    db.session.add(Linux_easy10)

    db.session.add(Linux_easy12)
    db.session.add(Linux_easy13)
    db.session.add(Linux_easy14)
    db.session.add(Linux_medium1)
    db.session.add(Linux_medium2)
    db.session.add(Linux_medium3)
    db.session.add(Linux_medium4)
    db.session.add(Linux_medium5)
    db.session.add(Linux_medium6)
    db.session.add(Linux_medium7)
    db.session.add(Linux_medium8)
    db.session.add(Linux_medium9)
    db.session.add(Linux_medium10)

    db.session.add(Linux_medium12)
    db.session.add(Linux_medium13)
    db.session.add(Linux_medium14)
    db.session.add(Linux_hard1)
    db.session.add(Linux_hard2)
    db.session.add(Linux_hard3)
    db.session.add(Linux_hard4)
    db.session.add(Linux_hard5)
    db.session.add(Linux_hard6)
    db.session.add(Linux_hard7)
    db.session.add(Linux_hard8)
    db.session.add(Linux_hard9)

    db.session.add(Linux_hard11)
    db.session.add(Linux_hard12)
    db.session.add(Linux_hard13)
    db.session.add(PHP_easy1)
    db.session.add(PHP_easy2)
    db.session.add(PHP_easy3)
    db.session.add(PHP_easy4)
    db.session.add(PHP_easy5)
    db.session.add(PHP_easy6)
    db.session.add(PHP_easy7)
    db.session.add(PHP_easy8)
    db.session.add(PHP_easy9)
    db.session.add(PHP_easy10)
    db.session.add(PHP_easy11)
    db.session.add(PHP_easy12)
    db.session.add(PHP_medium1)
    db.session.add(PHP_medium2)
    db.session.add(PHP_medium3)
    db.session.add(PHP_medium4)
    db.session.add(PHP_medium5)
    db.session.add(PHP_medium6)

    db.session.add(PHP_medium8)

    db.session.add(PHP_medium10)
    db.session.add(PHP_medium11)
    db.session.add(PHP_medium12)

    db.session.add(PHP_medium14)
    db.session.add(PHP_hard1)
    db.session.add(PHP_hard2)
    db.session.add(PHP_hard3)
    db.session.add(PHP_hard4)
    db.session.add(PHP_hard5)
    db.session.add(PHP_hard6)
    db.session.add(Kubernetes_easy1)
    db.session.add(Kubernetes_easy2)
    db.session.add(Kubernetes_easy3)
    db.session.add(Kubernetes_easy4)
    db.session.add(Kubernetes_medium1)
    db.session.add(Kubernetes_medium3)
    db.session.add(Kubernetes_medium2)
    db.session.add(Kubernetes_hard1)
    db.session.add(Kubernetes_hard2)
    db.session.add(Kubernetes_hard3)
    db.session.add(Kubernetes_hard4)
    db.session.add(DevOps_easy1)

    db.session.add(DevOps_easy3)
    db.session.add(DevOps_easy4)
    db.session.add(DevOps_easy5)
    db.session.add(DevOps_easy6)

    db.session.add(DevOps_easy8)
    db.session.add(DevOps_easy9)
    db.session.add(CMS_easy1)
    db.session.add(CMS_easy2)
    db.session.add(CMS_easy3)

    db.session.add(CMS_easy5)
    db.session.add(CMS_easy6)
    db.session.add(CMS_easy7)
    db.session.add(CMS_easy8)
    db.session.add(CMS_easy9)
    db.session.add(CMS_easy10)

    db.session.add(CMS_easy12)
    db.session.add(CMS_easy13)
    db.session.add(CMS_easy14)
    db.session.add(CMS_easy15)
    db.session.add(CMS_easy16)
    db.session.add(CMS_easy17)
    db.session.add(CMS_easy18)
    db.session.add(CMS_medium1)
    db.session.add(CMS_medium2)
    db.session.add(CMS_medium3)
    db.session.add(CMS_medium4)
    db.session.add(CMS_medium5)
    db.session.add(CMS_medium6)
    db.session.add(CMS_medium7)
    db.session.add(CMS_medium8)
    db.session.add(CMS_medium9)
    db.session.add(CMS_medium10)
    db.session.add(CMS_medium11)
    db.session.add(CMS_medium12)
    db.session.add(CMS_medium13)
    db.session.add(CMS_medium14)
    db.session.add(CMS_medium15)
    db.session.add(CMS_medium16)
    db.session.add(CMS_medium17)
    db.session.add(CMS_medium18)
    db.session.add(CMS_medium19)
    db.session.add(CMS_medium20)
    db.session.add(CMS_hard1)
    db.session.add(CMS_hard2)
    db.session.add(CMS_hard3)
    db.session.add(CMS_hard4)
    db.session.add(CMS_hard5)
    db.session.add(CMS_hard6)

    db.session.commit()


def undo_cards():
    db.session.execute('TRUNCATE cards RESTART IDENTITY CASCADE')
    db.session.commit()
