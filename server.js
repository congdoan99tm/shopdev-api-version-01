require('dotenv').config();
const app = require('./src/app')



const PORT = 3051;




const server = app.listen( PORT, () => {
    console.log(`WSV start with port ${PORT}`);
})

process.on('SIGINT', () => {
    server.close( () => console.log(`exits server express`))
})
