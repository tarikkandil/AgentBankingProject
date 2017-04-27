# AgentBankingWeb

This project was generated with Sopra Banking version 1.0.0.

## Build

Run `mvn clean install` to build the project. The build artifacts will be stored in the `target/` directory.generate the war and copy the dist folder from agent-banking-client into war.

## TODO

- add `<Resource auth="Container" driverClassName="com.mysql.jdbc.Driver" maxIdle="30" maxTotal="100" maxWaitMillis="10000" name="jdbc/datasource" password="root" type="javax.sql.DataSource" url="jdbc:mysql://localhost:3306/agent?useSSL=false" username="root"/>` in context.xml at Servers

- add mysql-connector (you can found it into Shard folder) into your /libs tomcat

