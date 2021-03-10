import { Rule } from '@angular-devkit/schematics';
import { factoryLoader } from '../../utils/factory-loader';
import { FACTORIES } from '../../utils';
import { FacadeSchema } from './facade.schema';

export function facade(options: FacadeSchema): Rule {
  return factoryLoader<FacadeSchema>(options, FACTORIES.FACADE);
}
