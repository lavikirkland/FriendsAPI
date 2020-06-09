# FriendsAPI
Social Media Friends HTTP API Design
  
## Tools  
Database: mySQL  
Package Management Tool: npm  
Framework: Node.js + Express  
Language: Javascript  
Docker Toolbox with Windows 10 Home  
Endpoint Testing: Postman + curl  
Editor/Environment: VSCode + WSL1 with Ubuntu 18.04  
  
## Setup  
Database:   
`sudo service mysql status`    
`sudo service mysql start`    
`mysql -u root -p`    
    
`npm install`    
  
## Database Design    
mySQL    
  
testdb  
  - Users table (Primary Key(id))  
  - Relations table (Primary Key(followerid, followedid))  
  
DDL(Data Definition Language)     
> CREATE DATABASE testdb;  
> USE testdb;  
> SELECT database();  
>   
>DROP TABLE `Users`;  
>  
> CREATE TABLE `Users` (  
>  `id` mediumint(8) unsigned NOT NULL auto_increment,  
>  `lastname` varchar(255) default NULL,  
>  `firstname` varchar(255) default NULL,  
>  `username` TEXT default NULL,  
>  `password` varchar(255),  
>  `email` varchar(255) default NULL,  
>  PRIMARY KEY (`id`)  
>) AUTO_INCREMENT=1;  
>  
>INSERT INTO `Users` (`lastname`,`firstname`,`username`,`password`,`email`) VALUES ("Fernandez","Brooke","et,","VAT65MVG5FD","mi.eleifend.egestas@eratsemper.edu"),("Lara","Owen","interdum","RYF62ROQ7CB","neque.Nullam@felis.org"),("Valenzuela","Rashad","id","CIG29ETB2JB","rhoncus.Nullam.velit@elementum.org"),("Massey","Rashad","amet","KXN15CNT2RO","auctor@consectetueripsum.edu"),("Slater","Galena","eget","WSU03KVL1LA","felis@ipsumdolorsit.co.uk"),("Carlson","Kennan","sapien,","GWI38JAW2YD","a@dignissimlacusAliquam.org"),("Contreras","Quynn","a,","WXG48FZX7HT","tincidunt@elit.net"),("Boyd","Roanna","consequat","MXZ99VMP1BP","libero@nuncrisusvarius.net"),("Bridges","Dorothy","id","CRP74DPK4EH","pede@etnetus.co.uk"),("Thomas","Len","ac","TUZ22LZZ3PS","Aliquam.tincidunt.nunc@NullaaliquetProin.edu");  
>INSERT INTO `Users` (`lastname`,`firstname`,`username`,`password`,`email`) VALUES ("Zimmerman","Simone","Maecenas","TKG93DEN1NW","fermentum.arcu.Vestibulum@Aliquam.edu"),("Wall","Macey","et,","IOG85DZM8XE","sem@eunibh.co.uk"),("Barron","Gisela","aptent","PFR75OXH2LH","Nulla.semper.tellus@aceleifendvitae.net"),("Maddox","Finn","Integer","GKY93NOH2MF","et.nunc.Quisque@tempus.org"),("Christensen","Travis","lectus","BQY38QAU2CI","eu.sem@iaculisnec.net"),("Guerrero","Bevis","molestie","HXC11ZNC2OC","ridiculus.mus.Proin@a.net"),("Donaldson","Sandra","nec,","VGS12OJE5SK","sit.amet@eterosProin.net"),("Dennis","Ryan","eu,","COP29YLC5XN","Integer.in@diamnuncullamcorper.ca"),("Mcknight","Unity","sapien","ASS60YLD6NR","enim.non@Morbiaccumsanlaoreet.edu"),("Terrell","Chloe","tincidunt","HZG78ICC8TB","tincidunt@laoreetposuereenim.edu");  
>INSERT INTO `Users` (`lastname`,`firstname`,`username`,`password`,`email`) VALUES ("Moss","Shad","lacus","CDN78QVA4LC","Nullam@semperrutrumFusce.edu"),("Landry","Jenette","lectus","XSO19AUQ4WF","Nullam.vitae.diam@enimconsequat.net"),("Anthony","Lev","vitae","CCJ56CGD5WT","cursus@Phasellus.edu"),("Bray","Cedric","nisi.","OYA47OPU5DI","vitae.odio@interdumenim.org"),("Franco","Harriet","ornare","ZRC55MOO3GE","Quisque@Cumsociis.net"),("Ramsey","Moses","nisi.","BJM22BWC1HG","venenatis.vel.faucibus@sollicitudin.net"),("Ryan","James","sodales","WPC70VYW8GB","congue.turpis@loremvehicula.org"),("Mayo","Dana","sed","AYX02JUP2SB","Morbi.quis.urna@etipsum.com"),("Hubbard","Joshua","Morbi","PKZ95LPC6WA","sapien@tinciduntduiaugue.ca"),("Bradley","Jocelyn","sem.","MBM38NWR9RD","odio.Etiam.ligula@eu.com");  
>INSERT INTO `Users` (`lastname`,`firstname`,`username`,`password`,`email`) VALUES ("Henry","Timothy","egestas","NPR18AXO3VH","cursus@pedeCum.com"),("Cochran","Norman","mauris,","EOW78QWM1QA","vulputate.ullamcorper@egetvariusultrices.org"),("Holland","Hilel","aliquet","AJB27DLX7WB","Nulla@utmi.net"),("Mitchell","Mannix","eu,","SDU22KJC4NS","netus@massaSuspendisse.com"),("Hickman","Baxter","vitae","XBI59MWM0KR","rhoncus.id@ornareelit.com"),("Levy","Driscoll","cursus","XYH04IJW7JV","nunc.sed@sit.net"),("William","Heather","ac","GBH25HEH9ZU","ut.nulla.Cras@laoreet.edu"),("Adams","Skyler","et","DDF26TOG3RP","dolor.Quisque@SednequeSed.org"),("Chang","Gabriel","et","BKA03WHW9RN","at@Nullam.net"),("Byrd","Brenden","Curabitur","VKV12EHM6JM","et.tristique@magnaCras.ca");  
>INSERT INTO `Users` (`lastname`,`firstname`,`username`,`password`,`email`) VALUES ("Moreno","Quin","vel","ZRI73RDZ9JO","quis.diam@eu.org"),("Powers","Kenneth","Vestibulum","JCG72UUC8SL","ornare@diamnunc.com"),("Key","Winifred","risus.","SVI06FSR2XF","mauris@massaMauris.ca"),("Moran","Shea","nibh.","MHZ61LUP7YJ","libero.et.tristique@mauris.edu"),("Spence","Halla","ridiculus","DMS25EVQ2CG","ipsum@nequetellus.co.uk"),("Bowen","Brett","ante","IKT55RAG3QI","Mauris.molestie@eudoloregestas.net"),("Small","Cole","erat.","GQI43HAU6UK","eu.dui@massa.ca"),("Franco","Elizabeth","urna","PTC58PXM0HS","et.eros.Proin@nibh.co.uk"),("Boone","Kieran","velit","CFP56BZF3DG","faucibus.id.libero@Nam.edu"),("Giles","Jada","neque","JDS76WRQ3KF","enim@at.net");  
>INSERT INTO `Users` (`lastname`,`firstname`,`username`,`password`,`email`) VALUES ("Conner","Lesley","erat","BBI12JWO1MS","Mauris.molestie.pharetra@ac.com"),("Fisher","Chase","Mauris","NDV99LEK8QH","malesuada@Integerin.com"),("Blanchard","Eric","nec","EUY24OFY4VZ","ornare@semPellentesqueut.com"),("Winters","Aphrodite","Duis","RLL01DJZ4FP","sit.amet@dictumplacerat.net"),("Mcgowan","Dai","ornare","UAW88DJY6ZP","Vestibulum.ut@tristiquepellentesquetellus.ca"),("Dodson","Gloria","in","NNN13WRS7BY","tincidunt@pellentesqueSeddictum.net"),("Witt","Wynter","nulla","NJV17CIQ5II","fermentum.arcu.Vestibulum@adipiscing.net"),("David","Winter","ullamcorper","EEA36NAA9JW","amet@Phasellusfermentum.com"),("Kirk","Latifah","ut,","FTZ81NVP5GT","imperdiet.non@sem.edu"),("Hobbs","Sophia","odio.","HPI89VWX3VG","luctus.et@Donectemporest.co.uk");  
>INSERT INTO `Users` (`lastname`,`firstname`,`username`,`password`,`email`) VALUES ("Mcdonald","Echo","Fusce","GZW74BXQ7CC","et.eros.Proin@sedsapien.ca"),("Heath","Ralph","eleifend.","MLU33ZCJ8WK","pulvinar@pede.org"),("Wilkinson","Neville","Suspendisse","ZNU63MVR9PB","augue@temporaugueac.ca"),("Wade","Lesley","elit.","CBT19CTQ9GS","nec.ante@ornarefacilisis.org"),("Newton","Burton","purus","YMO39IRX0BQ","feugiat@justoeu.ca"),("Cameron","Urielle","nonummy","RTZ19AUB6GW","commodo@ornareegestas.org"),("Mccarthy","Griffith","mollis.","SNJ14RZI0IF","metus.Aenean@enim.co.uk"),("Morrison","Baxter","aliquet","OVX37HQB0FD","Aliquam.rutrum@orcisem.org"),("Lewis","Pamela","adipiscing","QEK15FWR5SI","vulputate.eu@euismod.net"),("Wynn","Vivien","gravida.","SYP95EYE0CL","Donec.nibh.enim@aliquet.org");  
>INSERT INTO `Users` (`lastname`,`firstname`,`username`,`password`,`email`) VALUES ("Moon","Brenna","eu","XGZ92EVY1XA","nec@Suspendisse.net"),("Ford","Reed","enim","OIS34LKJ4ZH","lorem.vitae@acipsumPhasellus.edu"),("Guy","Elton","malesuada","TFB54XDN4XK","amet.lorem.semper@Donecest.edu"),("Merrill","Jessamine","urna,","FRS75WYU7HW","quis@anteMaecenasmi.co.uk"),("Peters","Zeus","erat","GBM09NUH6NU","auctor.quis@ipsumleoelementum.net"),("Kemp","Imogene","a","TMJ49ETO3GI","Phasellus.nulla.Integer@Aliquam.net"),("Cummings","Deanna","ultrices","XUQ90FNE4JB","ante.lectus.convallis@Cras.co.uk"),("Lynch","Leo","Phasellus","MYQ21YCC3LZ","ornare.placerat.orci@penatibusetmagnis.edu"),("Guy","Keefe","Nunc","NGP56VVB0CP","nascetur@Sedmalesuadaaugue.edu"),("Berry","Knox","Nullam","SWI19IUS5LC","sodales.elit@Aliquamerat.net");  
>INSERT INTO `Users` (`lastname`,`firstname`,`username`,`password`,`email`) VALUES ("Young","Uriel","vel","UTU98AGQ8QY","metus.Vivamus@sedsapienNunc.co.uk"),("Porter","Imelda","placerat","BCL66LUB5GW","Praesent.eu.dui@arcuiaculisenim.net"),("Cooke","Derek","Nullam","GBV82IRG7RN","sodales@Namconsequatdolor.com"),("Torres","Aline","mollis","JRA33KTT9WK","sem@lobortisClass.org"),("Moran","Mason","enim.","ZXW89CBS9PQ","ullamcorper.eu.euismod@duisemperet.edu"),("Castaneda","Cameron","vel","QIM39RZJ7NZ","in@Nunclaoreet.co.uk"),("Hernandez","Connor","dolor","VAL04GJO5IW","natoque@tempusscelerisque.net"),("Herrera","Tarik","sociosqu","YOV61JPS5SC","interdum.Sed@ipsumSuspendissenon.net"),("Oliver","Kasimir","dolor","IZC53FZN9AR","nunc.sit@ridiculusmus.edu"),("Chandler","Chloe","aliquet","ZVQ28PPX0YE","Nunc.commodo@et.edu");  
>INSERT INTO `Users` (`lastname`,`firstname`,`username`,`password`,`email`) VALUES ("Byrd","Hammett","purus","JMY29GLF5QM","auctor.ullamcorper@fringillaDonec.edu"),("Hunt","Mary","arcu","JVZ73LUO1BW","Vestibulum.ut.eros@vitaevelitegestas.edu"),("Albert","Idola","mattis","KKV95HEZ9SM","fermentum@aliquam.net"),("Garrett","Jessamine","Duis","NZM37SHY6XC","nunc.risus@Donec.co.uk"),("Alford","Hayden","arcu.","OGO16ZCL0ES","tempor.erat@ProinvelitSed.net"),("Gilmore","Courtney","nibh","MDX88URY2LJ","commodo@arcuMorbi.com"),("Gilmore","Griffin","tempus,","XBK23VHA0XH","bibendum.fermentum.metus@Namtempor.com"),("Ayala","Karly","Integer","PFB58BMT5KV","lacus.Mauris@MaurisnullaInteger.co.uk"),("Harding","Murphy","mauris","AKX57THS6OX","auctor.Mauris.vel@urnanec.com"),("Russell","Steven","mi,","CIV78XST3PH","tristique.neque.venenatis@magnaaneque.com");  
>  
>DROP TABLE `Relations`;  
>  
>CREATE TABLE `Relations` (  
>  `followerid` mediumint default NULL,  
>  `followedid` mediumint default NULL  
>);  
>ALTER TABLE Relations ADD PRIMARY KEY (followerid,followedid);  
>  
>INSERT IGNORE INTO `Relations` (`followerid`,`followedid`) VALUES (1,2),(2,3),(2,4);  
>INSERT IGNORE INTO `Relations` (`followerid`,`followedid`) VALUES (1,67),(1,62),(1,96),(1,81),(1,7),(1,79),(1,44),(1,41),(1,9),(1,3);  
>INSERT IGNORE INTO `Relations` (`followerid`,`followedid`) VALUES (1,31),(1,93),(1,71),(1,46),(1,72),(1,45),(1,98),(1,38),(1,18),(1,4);  
>  
>SHOW tables;  
>SHOW COLUMNS FROM Users;  
>SHOW COLUMNS FROM Relations;  
  
## API Functions  
/relations   
POST -> follow -> INSERT IGNORE  
DELETE -> unfollow -> DELETE  
GET -> getFollow -> SELECT  
  
## Pagination    
Offset  
Keyset  
Seek -> limit + after_id  
  
## API test data  
```
req.body =  
{  
	"follower": {  
		"id": 2,  
		"lastname": "Lara",  
		"firstname": "Owen",  
		"username": "interdum",  
		"email": "neque.Nullam@felis.org"  
	},  
	"followed": {  
		"id": 4,  
		"lastname": "Massey",  
    		"firstname": "Rashad",  
    		"username": "amet",  
    		"email": "auctor@consectetueripsum.edu"  
	}  
}  
  
req.query =  
{  
	followerid,  
	followedid, 
	limit,  
	after_id      
}  
```  
  
## Docker   
### Containers:  
mysql: mySQL Database (pulls existing mysql/5.7 image from Docker Hub)  
friends-api: Node.js backend app (build from Dockerfile)  
  
### Files:  
Dockerfile   
docker-compose.yml  
setup.sql
  
### Useful Auxiliary Command Line:  
`docker images`  
`docker ps -a`  
`docker system prune -a`  
`docker <container> start/stop/rm`  
`docker logs <container>`  
`docker exec -it <container> /bin/bash`  
`docker-machine ip default`   
`hostname -i`  
`ifconfig`  
  
Shortcut Procedure(Not fully configured into to one auto build; needs manual data setup; need improvement):  
`docker-compose up --build -d`  
`docker-compose down -v`    
  
###Step-by-Step Docker Command Line Instruction:  
```docker system prune -a  
docker run --name mysql -e MYSQL_ROOT_PASSWORD=123@ABcd -d mysql:5.7 // get existing mysql image and run the container   
docker exec -it mysql /bin/bash // use mysql command line to set up database and import data  
mysql -V //check version  
mysql -u root -p 
// insert data using dummy data DDL above  
docker build -t friends-api .   
docker run --name friends-api --link mysql:db -e DATABASE_HOST=db -p 3000:3000 friends-api  
// Find Docker host IP  
docker-machine ip default   
// testing  
http://192.168.99.100:3000/relations?followerid=1&limit=true
```


## References  
https://medium.com/@joaoh82/setting-up-docker-toolbox-for-windows-home-10-and-wsl-to-work-perfectly-2fd34ed41d51  
https://www.generatedata.com/  
