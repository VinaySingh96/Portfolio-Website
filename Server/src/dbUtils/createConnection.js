const mongoose = require('mongoose');
const config = (new (require('../../utils/configHandler'))()).getConfig();

const connectToDatabase = async () => {
  const uri = config.db.uri; // Replace with your database name

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Uncomment the following line if you are using the old URL string parser and topology engine
      // useCreateIndex: true,
      // useFindAndModify: false,
    });
    console.log('-------------> Connected to the database successfully 🗂️');
  } catch (error) {
    console.error('-------------> Error connecting to the database', error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = { connectToDatabase };
