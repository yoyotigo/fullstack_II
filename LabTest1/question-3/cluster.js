const cluster = require('cluster');

if (cluster.isMaster) {
  console.log(`Master ${process.pid} has started.`);

  // Fork workers.
  for (let i=0; i<2;i++)
  {
      var worker = cluster.fork();
  

  //Receive messages from worker and handle them in master process
  worker.on('message', function(msg)
  {
      console.log(`Master ${process.pid} received message from worker:`, msg);
  });

  //Send message from master to worker
  worker.send(`This is from master ${process.pid}`);
  }

} 
  else if (cluster.isWorker) {
      console.log(`Worker ${process.pid} started`);

      //Send message to master
      process.send(`Hello, from worker ${process.pid}`)
      
      //Receive message from master
      process.on('message', function(msg)
      {
          console.log(`Worker ${process.pid} received message from master.`, msg);
      });
  }

  
