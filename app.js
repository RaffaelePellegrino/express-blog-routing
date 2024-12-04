const express = require('express')
const app = express()
const port = 3000

const postsRouter = require('./routers/posts')

app.use('/img', express.static('img'));

app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// app.get('/bacheca', (req, res) => {
//     res.json({
//         posts: post,
//         count: post.length
//     });
// });
app.use('/posts', postsRouter);


app.listen(port, () => {
    console.log(`Server del blog su http://localhost:${port}`);
});