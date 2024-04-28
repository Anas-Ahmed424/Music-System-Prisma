import 'dotenv/config';
import express from 'express';
import authenticateToken from "./middleware/authorization.js"

const app = express();
const PORT = process.env.PORT || 3000;

//* Middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

app.get("/", (req,res) => {
    return res.send("Hi Everyone.")
});

app.use(authenticateToken)

import routes from './routes/index.js'
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
