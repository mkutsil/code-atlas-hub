import fs from 'fs';
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';

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
    if (req.method === 'POST' && req.path === '/login') {
        return next();
    }
    
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }
    
    next();
});

// API Login
const SECRET_KEY = 'your-secret-key';

server.post('/login', (req, res) => {
    const { userName, password } = req.body;

    const dbPath = path.resolve(__dirname, 'db.json');
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    const { users } = db;

    const userFromDb = users.find(user => user.userName === userName && user.password === password);

    if (userFromDb) {
        const token = jwt.sign(
            { userId: userFromDb.id, userName: userFromDb.userName },
            SECRET_KEY,
            { expiresIn: '1h' }
        );
        
        return res.json({
            token, 
            id: userFromDb.id,
            userName: userFromDb.userName,
            role: userFromDb.role,
            avatar: userFromDb.avatar
        });
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

server.use(router);

server.listen(8000, () => {
    console.warn('Server is running on port 8000');
});
