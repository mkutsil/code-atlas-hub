import fs from 'fs';
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults()); 
server.use(jsonServer.bodyParser); 

server.use(async (req, res, next) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    next();
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }
    next();
});

// API Login
server.post('/login', (req, res) => {
    const { userName, password } = req.body;
    
    const dbPath = path.resolve(__dirname, 'db.json');
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    const { users } = db;

    const userFromDb = users.find(user => user.userName === userName && user.password === password);

    if (userFromDb) {
        return res.json(userFromDb);
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

server.use(router);

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
