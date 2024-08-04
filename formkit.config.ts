import { genesisIcons } from '@formkit/icons';
import { rootClasses } from './formkit.theme';
import { createInput, DefaultConfigOptions } from '@formkit/vue';
import CustomExample from './src/components/CustomExample.vue';

const config: DefaultConfigOptions = {
  icons: { ...genesisIcons },
  config: { rootClasses },
  inputs: {
    customExample: createInput(CustomExample, {
      props: ['testId'],
    }),
  },
};

export default config;
