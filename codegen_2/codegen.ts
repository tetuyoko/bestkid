import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: ["src/schema.gql"],
  //documents: ["src/*.gql"],
  generates: {
    "dist/schema.gql": {
      plugins: ['schema-ast'],
      config: {
         includeDirectives: true
      },
    },
    "dist/graphql.ts": {
      plugins: ["typescript", "typescript-operations"],
    }
  }
};

export default config;
