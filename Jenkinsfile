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
        stages {"Test") {
            steps {
                sh "npm run test:ci"
            }            
        }        
    }
}
