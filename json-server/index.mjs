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
    await new Promise(resolve => setTimeout(resolve, 800));
    next();
});

const SECRET_KEY = 'your-secret-key';

server.use((req, res, next) => {
    if (req.method === 'POST' && (req.path === '/login' || req.path === '/google-login')) {
        return next();
    }

    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

// 🔐 Звичайний логін
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
            avatar: userFromDb.avatar,
        });
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

// 🔐 Google Login
server.post('/google-login', async (req, res) => {
    const { token: googleToken } = req.body;

    if (!googleToken) {
        return res.status(400).json({ message: 'No token provided' });
    }

    const decoded = jwt.decode(googleToken);

    if (!decoded || !decoded.email || !decoded.sub) {
        return res.status(400).json({ message: 'Invalid token structure' });
    }

    const {
        email,
        name,
        picture,
        sub, // це унікальний Google ID
        given_name,
        family_name,
    } = decoded;

    const dbPath = path.resolve(__dirname, 'db.json');
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    const { users, profileFull } = db;

    let userFromDb = users.find(user => user.googleId === sub);

    if (!userFromDb) {
        const newUser = {
            id: Date.now().toString(),
            email,
            userName: name, // або given_name
            firstName: given_name,
            lastName: family_name,
            avatar: picture,
            googleId: sub,
            role: 'user',
        };

        profileFull.push(newUser);
        users.push(newUser);
        fs.writeFileSync(dbPath, JSON.stringify({ ...db, users, profileFull }, null, 2));
        userFromDb = newUser;
    }

    const token = jwt.sign({ userId: userFromDb.id, userName: userFromDb.userName }, SECRET_KEY, {
        expiresIn: '1h',
    });

    return res.json({
        token,
        id: userFromDb.id,
        userName: userFromDb.userName,
        role: userFromDb.role,
        avatar: userFromDb.avatar,
    });
});

server.use(router);
server.listen(8000, () => {
    console.warn('🚀 Server is running on port 8000');
});
