export type TODO_any = any;

// 全ノードの共通型
interface BaseNode<T> {
  type: T;
  name: string;
}

// ファイルはtypeとnameのみを持つ
export interface FileNode extends BaseNode<'file'> {}

// ディレクトリは追加でノードの配列を持つ
export interface DirectoryNode extends BaseNode<'directory'> {
  children: TreeNode[];
}

export interface SymlinkNode extends BaseNode<'symlink'> {
  link: string;
}

// toy-tree で扱う全ノードのいずれかを表すunion型
export type TreeNode = FileNode | DirectoryNode | SymlinkNode;

export interface Options {
  level: number;
}
