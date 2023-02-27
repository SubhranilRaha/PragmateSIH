const { DATABASE_URL } = require('./keys');
const { connect } = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await connect(DATABASE_URL);
    console.log('[+] MongoDB Connected');
    return connection;
  } catch (err) {
    if (err instanceof Error) console.error(`[-] Error while connectiong to MongoDB : ${err.message}`);
    process.exit(1);
  }
};

module.exports.connectDB = connectDB;