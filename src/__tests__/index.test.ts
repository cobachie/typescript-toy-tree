import { main } from '../';

describe('toy-tree', () => {
  let stdout;
  let stderr;
  const exec = (argv) => main(argv, stdout, stderr);

  beforeEach(() => {
    stdout = jest.fn();
    stderr = jest.fn();
  });

  test('fixtures', () => {
    const code = exec(['fixtures']);

    expect(stdout.mock.calls[0][0]).toMatchSnapshot();
    expect(code).toBe(0);
  });

  test('-L 2', () => {
    const code = exec(['fixtures', '-L 2']);

    expect(stdout.mock.calls[0][0]).toMatchSnapshot();
    expect(code).toBe(0);
  });

  test('default directory', () => {
    const code = exec([]);

    expect(stdout.mock.calls[0][0].split('\n')[0]).toBe('.');
    expect(code).toBe(0);
  });

  test('invalid directory', () => {
    const dir = '__INVALID__DIRECTORY__';
    const code = exec([dir]);

    expect(stderr.mock.calls[0][0]).toContain(`Error: "${dir}" does not exist`);
    expect(code).toBe(1);
  });

  test('invalid -L option', () => {
    const code = exec(['fixtures', '-L 0']);

    expect(stderr.mock.calls[0][0]).toContain('Error: Invalid level');
    expect(code).toBe(1);
  });
});
