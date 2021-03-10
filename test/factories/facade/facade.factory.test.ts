import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';

import * as path from 'path';

import { FACTORIES } from '../../../src/utils';
import { propertyNotEmpty } from '../common/properties';
import { FacadeSchema } from '../../../src/factories/facade/facade.schema';

describe('Generate ngxs facade', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner(
    '.',
    path.join(process.cwd(), 'src/collection.json')
  );
  it('should manage name only', () => {
    const options: FacadeSchema = {
      name: 'todos'
    };
    const tree: UnitTestTree = runner.runSchematic(FACTORIES.FACADE, options);
    const files: string[] = tree.files;
    expect(files).toEqual(['/src/todos/todos.facade.spec.ts', '/src/todos/todos.facade.ts']);
  });

  it('should manage name with spec true', () => {
    const options: FacadeSchema = {
      name: 'auth',
      spec: true
    };
    const tree: UnitTestTree = runner.runSchematic(FACTORIES.FACADE, options);
    const files: string[] = tree.files;
    expect(files).toEqual(['/src/auth/auth.facade.spec.ts', '/src/auth/auth.facade.ts']);
  });

  it('should manage name with spec false', () => {
    const options: FacadeSchema = {
      name: 'users',
      spec: false
    };
    const tree: UnitTestTree = runner.runSchematic(FACTORIES.FACADE, options);
    const files: string[] = tree.files;
    expect(files).toEqual(['/src/users/users.facade.ts']);
  });

  it('should error when name is empty', () => {
    propertyNotEmpty(runner, FACTORIES.FACADE, 'name');
  });
});
