pipeline {
    agent { 
        docker { 
            image "node:8-alpine"
            args "--network=skynet"
        } 
    }
    stages {
        stage("Build") {
            steps {     
                
                 sh "http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories"
                 sh "http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories"
                 sh "apk update"
                 sh "apk add mongodb=3.4.4-r0"
                 sh "mongo --version"
                sh "apk add --no-cache mongodb"
                sh "chmod +x ./api/scripts/dropdb.sh"
                sh "npm install"
            }
        }
       }
}
