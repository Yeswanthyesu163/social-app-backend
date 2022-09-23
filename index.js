const express = require('express');
const format = require('date-format')

const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello from LCO</h1>");
});

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "Yeswanth163",
        followers: 301,
        follows: 408,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
    const facebookSocial = {
        username: "Yeswanth163",
        followers: 100,
        follows: 70,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json(facebookSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
    const linkedInSocial = {
        username: "Yeswanth_s",
        followers: 1002,
        follows: 1200,
        date: format.asString("dd[MM] - hh:mm:ss", new Date())
    };

    res.status(200).json(linkedInSocial);
});

app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({param: req.params.token})
})

app.listen(PORT,() => {
    console.log(`Server is running at ${PORT}`);
});