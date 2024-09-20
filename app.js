require('dotenv').config();
const express = require('express');
let app = express();
const cors = require('cors');

app.disable("x-powered-by");
// Setting up express for text parser
app.use(express.json());
app.use(cors());
//////////////////////////////////////////////////////////////////////
//                              paths                               //
//////////////////////////////////////////////////////////////////////

let routes = require('./routes/v1/main.route');

app.use('/api/v1/', routes);

app.use("*", (req, res) => {
    res.status(404);
    res.send('404 Not Found');
});

try {
    const port = process.env.PORT || 5551;
    let server = app.listen(port);
    server.setTimeout(15000);

    console.log(`🦁 9to5HD Admin App Running ⚡ On at ${port}`);
} catch (err) {
    console.log('err :', err);
    console.log("Failed to connect");
}
