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
                sh "apk update"
                sh "apk add mongodb"
                sh "apk add --no-cache mongodb"
                sh "chmod +x ./api/scripts/dropdb.sh"
                sh "npm install"
            }
        }
       }
}
