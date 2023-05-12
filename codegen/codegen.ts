import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: ["http://localhost:8080/v1/graphql", "hoge.gql"],
  documents: ["src/*.gql"],
  generates: {
    "dist/schema.gql": {
      plugins: ['schema-ast'],
    },
    "dist/graphql-operations.ts": {
      plugins: ["typescript", "typescript-operations"],
    }
  }
};

export default config;
