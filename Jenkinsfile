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
                sh "chmod +x ./api/scripts/dropdb.sh"
                sh "npm install"
            }
        }
       }
}
