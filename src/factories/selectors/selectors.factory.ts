import { SelectorsSchema } from './selectors.schema';
import { factoryLoader } from '../../utils/factory-loader';
import { FACTORIES } from '../../utils';
import { Rule } from '@angular-devkit/schematics';

export function selectors(options: SelectorsSchema): Rule {
  return factoryLoader<SelectorsSchema>(options, FACTORIES.SELECTORS);
}
