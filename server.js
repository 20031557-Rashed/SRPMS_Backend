const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")

const app = express()

/* ------------------------------
   Connect Database
--------------------------------*/
connectDB()

/* ------------------------------
   Middleware
--------------------------------*/
app.use(cors())
app.use(express.json())

/* ------------------------------
   Test Route
--------------------------------*/
app.get("/", (req, res) => {
    res.json({
        message: "Smart Real Estate Portfolio Management API running"
    })
})

app.use("/uploads", express.static("uploads"))

/* ------------------------------
   Routes (we will add later)
--------------------------------*/
app.use("/api/auth", require("./src/routes/authRoutes"))
app.use("/api/properties", require("./src/routes/propertyRoutes"))
app.use("/api/leases", require("./src/routes/leaseRoutes"))
app.use("/api/users", require("./src/routes/userRoutes"))
// app.use("/api/tenants", require("./src/routes/tenantRoutes"))

/* ------------------------------
   Server Start
--------------------------------*/
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})