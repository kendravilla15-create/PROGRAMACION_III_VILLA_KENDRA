import { createServer } from 'node:http';

const server = createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Bienvenido a GymFit!\n');
    } else if (req.url === '/planes') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Planes de GymFit</h1><p>Básico $25 - Cardio $30 - Premium $50</p>');
    } else if (req.url === '/contacto') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Contacto GymFit</h1><p>Escríbenos a info@gymfit.com</p>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Página no encontrada</h1>');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('GymFit escuchando en 127.0.0.1:3000');
});
