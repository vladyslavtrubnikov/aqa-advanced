import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

const log = console.log;
log(chalk.bgMagenta('Hello') + chalk.green(' Chalk') + chalk.red('!!!'));
