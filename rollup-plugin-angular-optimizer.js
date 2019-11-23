"use strict";

import {buildOptimizer} from '@angular-devkit/build-optimizer';

export default function angularOptimizer() {

  return {
    name: 'angular-optimizer',
    transform: (content, id) => {

      const {content: code, sourceMap: map} = buildOptimizer({
        content,
        inputFilePath: id,
        emitSourceMap: false,
        strict: true
      });

      if (!code) {
        return null
      }
      if (!map) {
        return code
      }

      return {code, map};
    },
  };
}
