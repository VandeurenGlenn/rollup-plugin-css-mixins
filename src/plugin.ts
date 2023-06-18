import { Plugin, TransformResult } from "rollup"
import { apply } from '@vandeurenglenn/css-mixins/utils'

export declare type CSSMixins = {
  [index: string]: string;
};

const cssMixins: Plugin = (options?: { classes?: CSSMixins, mixins?: CSSMixins }) => ({
  name: 'css-mixins',
  transform: async (code, id): Promise<TransformResult> => {
    return apply(code)
  }
})

export default cssMixins
