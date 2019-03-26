const logger = require('morgan'),
      BodyParser = require('body-parser'),
      postRouter = require('./routes/post-routes'),
      userRouter = require('./routes/user-routes'),
      express = require('express'),
      cors = require('cors'),
      app = express();

app.use(cors({
    origin: "http://localhost",
    credentials: true
}));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
postRouter(app);
userRouter(app);

app.listen(3000, function () {
    console.log("listen port: 3000")
});

const WebSocket = require('ws'),
    wss = new WebSocket.Server({ port: 3001});

wss.on('connection', ws => {
    ws.on('message', message => {
        const data = JSON.parse(message);
        if (data === "close"){
            wss.close();
            console.info('close');
        } else {
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN){
                    client.send(data);
                }
            });
        }
    });
    ws.send('Something');
});