const { Pool } = require ("pg")// Import Pool object from PG



     const pool = new Pool() // This will read the .env file and try to connect to our DB

 

    // I'm exporting the query function from the pool
    // everytime in my app I'll ask the pool for sending or receving info, I'll pass trough this method
    module.exports = {
        query:(text, params) => pool.query(text, params)
    }