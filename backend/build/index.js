import 'reflect-metadata';
import app from './app.js';
import { PORT } from './config.js';
import { AppDatabase } from './database.js';
// Connect Database
try {
    await AppDatabase.initialize();
    console.log('Database is connected');
}
catch (err) {
    console.error(err);
}
// Connect Server
app.listen(PORT, () => {
    console.log('Server running in port', PORT);
});
