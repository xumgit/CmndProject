# CmndProject

## project include knowledge
* Maven
* Spring-Boot_2.1.1.RELEASE
* cas
* sprin-security
* Angularjs 1.7.3 (ui-bootstrap/ui-grid/ng-table/angular-file-upload/...)
* Thymeleaf
* redis
* mongodb
* mail
* swagger2
* zookeeper
* test(python + selenium, katakon, cypress)
* react
* sonar

## MainCmndUrl: http://localhost:8081/navi/index
## AngularJsUrl: http://localhost:8081/test/angularjsproject/index
username: admin  
password: 123456

## if you want run this project, please accroding to follow step install some soft

### Install Redis
first install redis, recommend download stable version and install  
download site: https://redis.io/download  
my computer is window environment with 64 bits:  
cd (install_redis_path)\redis  
then execute command: redis-server.exe redis.windows.conf

### Install MongoDB
first install MongoDB, following url, you can accroding the step install it.   
download site: https://www.runoob.com/mongodb/mongodb-window-install.html  
use System or Administrator rights open cmd, then input follow command:  
start MongoDB server command: net start MongoDB  
stop MongoDB server command: net stop MongoDB  

### Install Rabbitmq-server
fisrt install Rabbitmq-server, please follow url install.  
(first install erLang, then install Rabbitmq-server)   
https://www.cnblogs.com/xumBlog/p/10622390.html  
use System or Administrator rights open cmd, then input follow command:  
cd (Rabbitmq_install_path)\sbin  
start Rabbitmq-server command: rabbitmq-server start  
restart Rabbitmq-server command: rabbitmq-server restart  
stop Rabbitmq-server command: rabbitmq-server stop or ctrl + c  
Enabling maintenance plug-in command: rabbitmq-plugins enable   rabbitmq_management
login: http://localhost:15672/  
username: guest  
password: guest  


