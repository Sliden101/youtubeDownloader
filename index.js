const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
app.use('/static', express.static('./static'));

app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './' });
})

app.get('/download', (req, res) => {
    var url = req.query.url;
    res.set('Content-Disposition', `attachment; filename="video.mp4"`);
    ytdl(url, {format: 'mp4'}).pipe(res);


});