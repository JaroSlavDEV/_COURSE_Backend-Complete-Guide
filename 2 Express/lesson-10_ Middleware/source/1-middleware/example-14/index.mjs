import express from 'express';
import path from 'path';
import formidable from 'formidable';
import fs from 'fs-extra';

const port = process.env.PORT || 3000;
const app = express();
const uploadDir = path.join(path.resolve(), 'example-14', 'data');
const staticDir = path.join(path.resolve(), 'example-14', 'public');

app.use(express.static(staticDir));

app.post('/upload', async (req, res) => {
    const form = new formidable.IncomingForm();

    await fs.ensureDir(uploadDir);

    form.uploadDir = uploadDir;

    form.on('fileBegin', (name, file) => {
        const fileName = file.name.toLowerCase().replace(/\s+|_+/g, '-');
        file.path = `${form.uploadDir}/${fileName}`;
    });

    form.parse(req, (err, fields, files) => {
        if (err) {
            res.writeHead(413, { 'content-type': 'text/plain' });
            return res.end(`${err.name}: ${err.message}\n\n`);
        }

        res.sendStatus(204);
    });
});

app.listen(port);
