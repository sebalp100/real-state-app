import express from 'express';
import cookieParser from 'cookie-parser';
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server runnin on port: ${PORT}`);
})
