/**
 * RAMZAN MEMON — PORTFOLIO LOCAL & LOCAL-NETWORK SERVER
 * Zero-dependency native Node.js HTTP server.
 * Supports static assets, streaming PDFs, range requests, and mobile local Wi-Fi testing.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
const ROOT = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.apk': 'application/vnd.android.package-archive',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

function getNetworkIps() {
  const ifaces = os.networkInterfaces();
  const ips = [];
  for (const name of Object.keys(ifaces)) {
    for (const net of ifaces[name]) {
      if ((net.family === 'IPv4' || net.family === 4) && !net.internal) {
        ips.push({ name, address: net.address });
      }
    }
  }
  return ips;
}

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(reqUrl.pathname);

  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  let filePath = path.normalize(path.join(ROOT, pathname));

  // Clean URLs support (e.g. /about -> /about.html)
  if (!path.extname(pathname) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  // Security check: ensure path is within ROOT
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
          <!DOCTYPE html>
          <html>
          <head><title>404 Not Found</title></head>
          <body style="background:#0B0B0D; color:#F5F3EF; font-family:sans-serif; text-align:center; padding:5rem;">
            <h1 style="color:#C7FF4D;">404 — Asset Not Found</h1>
            <p>The requested file does not exist.</p>
            <p><a href="/" style="color:#C7FF4D;">Return to Portfolio</a></p>
          </body>
          </html>
        `);
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
      }
      return;
    }

    if (stats.isDirectory()) {
      res.writeHead(302, { Location: pathname + '/index.html' });
      res.end();
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const totalSize = stats.size;

    // Handle Range requests (essential for streaming and previewing PDFs on mobile)
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;

      if (start >= totalSize || end >= totalSize) {
        res.writeHead(416, {
          'Content-Range': `bytes */${totalSize}`
        });
        return res.end();
      }

      const chunksize = end - start + 1;
      const file = fs.createReadStream(filePath, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${totalSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      file.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': totalSize,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      });
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

server.listen(PORT, HOST, () => {
  const lanIps = getNetworkIps();
  console.log(`=======================================================`);
  console.log(`  RAMZAN MEMON — PORTFOLIO DEVELOPMENT SERVER`);
  console.log(`=======================================================`);
  console.log(`  > Local:            http://localhost:${PORT}`);
  if (lanIps.length > 0) {
    lanIps.forEach(net => {
      console.log(`  > Mobile / Network: http://${net.address}:${PORT}  (${net.name})`);
    });
    console.log(`-------------------------------------------------------`);
    console.log(`  [MOBILE ACCESS] Connect your phone to the same Wi-Fi`);
    console.log(`  and open: http://${lanIps[0].address}:${PORT}`);
  }
  console.log(`=======================================================`);
});

module.exports = server;
