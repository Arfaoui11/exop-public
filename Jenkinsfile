node {
	stage('Checkout changes') { 
   		checkout scm
	}
	  	stage('stop containers ') { 
    	sh 'docker-compose -H tcp://192.168.26.135:2375 -f docker-compose.yml down'
   	}
   		

	
   	stage('Deploy') { 
    	sh 'docker-compose -H tcp://192.168.26.135:2375 -f docker-compose.yml up -d --build'
   	}
}
