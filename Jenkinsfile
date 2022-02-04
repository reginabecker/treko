pipeline {
    agent {
        docker { image "node:16.13.1-alpine" }
    }
    stages {
        stage("Build") {
            steps {
                sh "npm install"
            }
        }
        stage {"Test") {
            steps {
                sh "npm run test:ci"
            }            
        }        
    }
}
