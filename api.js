
const http = require('http');
const { initializeFileManager, readShoppingList, writeShoppingList } = require('./fileManager');

initializeFileManager();

const server = http.createServer((req, res) => {
 
  res.setHeader('Content-Type', 'application/json');

  
  if (req.method === 'GET' && req.url === '/shopping-list') {
    const items = readShoppingList();
    res.writeHead(200);
    res.end(JSON.stringify(items));
  }

 
  else if (req.method === 'POST' && req.url === '/shopping-list') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const newItem = JSON.parse(body);
        if (!newItem.name) {
          throw new Error('Item must have a name');
        }

        const items = readShoppingList();
        items.push(newItem);
        writeShoppingList(items);

        res.writeHead(201);
        res.end(JSON.stringify({ message: 'Item added successfully' }));
      } catch (error) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }

  
  else if (req.method === 'PUT' && req.url.startsWith('/shopping-list/')) {
    const id = parseInt(req.url.split('/')[2], 10);

    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const updatedItem = JSON.parse(body);
        const items = readShoppingList();

        if (id < 0 || id >= items.length) {
          throw new Error('Item not found');
        }

        items[id] = { ...items[id], ...updatedItem };
        writeShoppingList(items);

        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Item updated successfully' }));
      } catch (error) {
        res.writeHead(400);
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }

 
  else if (req.method === 'DELETE' && req.url.startsWith('/shopping-list/')) {
    const id = parseInt(req.url.split('/')[2], 10);
    const items = readShoppingList();

    if (id < 0 || id >= items.length) {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Item not found' }));
      return;
    }

    items.splice(id, 1);
    writeShoppingList(items);

    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Item deleted successfully' }));
  }

  
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
