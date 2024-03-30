import express from 'express';
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'

const app = express();
const PORT = 3001;

app.use(express.json());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server runnin on port: ${PORT}`);
})
