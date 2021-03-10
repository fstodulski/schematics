import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import * as path from 'path';

import { FACTORIES } from '../../../src/utils';
import { propertyNotEmpty } from '../common/properties';
import { SelectorsSchema } from '../../../src/factories/selectors/selectors.schema';

describe('Generate ngxs selectors', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner(
    '.',
    path.join(process.cwd(), 'src/collection.json')
  );
  it('should manage name only', () => {
    const options: SelectorsSchema = {
      name: 'todos'
    };
    const tree: UnitTestTree = runner.runSchematic(FACTORIES.SELECTORS, options);
    const files: string[] = tree.files;
    expect(files).toEqual([
      '/src/todos/todos.selectors.spec.ts',
      '/src/todos/todos.selectors.ts'
    ]);
  });

  it('should manage name with spec true', () => {
    const options: SelectorsSchema = {
      name: 'auth',
      spec: true
    };
    const tree: UnitTestTree = runner.runSchematic(FACTORIES.SELECTORS, options);
    const files: string[] = tree.files;
    expect(files).toEqual(['/src/auth/auth.selectors.spec.ts', '/src/auth/auth.selectors.ts']);
  });

  it('should manage name with spec false', () => {
    const options: SelectorsSchema = {
      name: 'users',
      spec: false
    };
    const tree: UnitTestTree = runner.runSchematic(FACTORIES.SELECTORS, options);
    const files: string[] = tree.files;
    expect(files).toEqual(['/src/users/users.selectors.ts']);
  });

  it('should error when name is empty', () => {
    propertyNotEmpty(runner, FACTORIES.SELECTORS, 'name');
  });
});
