const meow = require('meow');

exports.main = (argv, stdout, stderr) => {
  const cli = meaw(
    `
    Usage
      $ toy-tree <directory>

    Example
      $ toy-tree
      $ toy-tree path/to/dir
`, {
      argv
    }
  );

  const dir = cli.input[0] || ',';

  stdout(dir);

  return 0;
}