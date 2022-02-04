pipeline {
    agent { 
        docker { 
            image 'node:12.16.2'
            args '-p 3000:3000'
        } 
    }
    stages {
        stage("Build") {
            steps {
                sh "apk add --no-cache mongodb"
                sh "chmod + x ./scripts/dropdb.sh"
                sh "npm install"
            }
        }
        stage("Test") {
            steps {
                sh "npm run test:ci"
            }            
        }        
    }
}
