const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
)
    .then(() => {
      console.log(chalk.green('MongoDb Connected'));
    })
    .catch((err) => {
      console.log(chalk.red('MongoDb failed to connect'));
    });
