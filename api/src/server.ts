import express from "express"

import { routes } from "./routes"
import { errorHandling } from "./middlewares/error-handling"

const cors = require('cors');

const PORT = 3333

const app = express()

app.use(cors({ origin: "*" }));
app.use(express.json())
app.use(routes)
app.use(errorHandling)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
