import express from 'express';
import cors from 'cors';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

const app = express();

app.use(cors());
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', (req, res) => res.sendFile(`${process.cwd()}/views/index.html`));

app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
  const { originalname: name, mimetype: type, size } = req.file;
  res.json({
    name,
    type,
    size,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Node.js listening ...');
});
