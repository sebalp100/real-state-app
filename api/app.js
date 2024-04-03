import express from 'express';
import cookieParser from 'cookie-parser';
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'
import 'dotenv/config'
import helmet from 'helmet';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server runnin on port: ${PORT}`);
})
