const { read } = require('./read');
const { format } = require('./format');

const meow = require('meow');

exports.main = (argv, stdout, stderr) => {
  const cli = meow(
    `
    Usage
      $ toy-tree <directory>

    Example
      $ toy-tree
      $ toy-tree path/to/dir
`,
    {
      flags: {
        level: {
          type: 'number',
          alias: 'L',
          default: Infinity,
        },
      },
      argv,
    }
  );

  const dir = cli.input[0] || '.';

  let root;
  try {
    root = read(dir);
  } catch (e) {
    stderr(`Error: ${e.message}`);
    return 1;
  }

  const output = format(root);

  stdout(output);

  return 0;
};
