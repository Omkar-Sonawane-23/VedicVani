const express = require('express');
const path = require('path');
const { bgChapter, bgSlok } = require('./db/db');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(cors())


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});

app.get('/api/chapter/:chapter/shlok/:shlok', async(req, res) => {
    const chapter  = await bgChapter.findOne({chapter_number: req.params.chapter},{sloks:0})
    const shlok = await bgSlok.findOne({chapter: req.params.chapter, verse: req.params.shlok})
    res.status(200).json({
        chapter: chapter,
        shlok: shlok
    });
    }
    );

app.get('/api/chapter/:chapter', async(req, res) => {
    const chapter = await bgChapter.findOne({chapter_number: req.params.chapter})
    res.status(200).json({
        chapter: chapter
    });
});

