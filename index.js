const app = require('express')();
const port = process.env.PORT || 5000;

app.get('/ping', (req, res) => {
    res.status(200)
    res.json({"pong":"🥝 🍓 🍌"})
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})