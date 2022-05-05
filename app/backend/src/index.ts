import dataRouter from './routes/DataRoute';
import server from './server';

server.addRouter(dataRouter)

server.startServer();