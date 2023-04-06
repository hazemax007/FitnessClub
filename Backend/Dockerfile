FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]

FROM mysql:8.0
ENV MYSQL_DATABASE=fitnesscenter
COPY init.sql /docker-entrypoint-initdb.d/