import { CodegenConfig } from '@graphql-codegen/cli';

const scalars = {
  Date: 'string',
  DateTime: 'string',
};

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    // 실 사용
    'src/graphql/generated.ts': {
      schema: '',
      documents: 'src/graphql/**/*.gql',
      config: { scalars },
      plugins: ['typescript'],
    },
    'graphql/': {
      schema: '',
      documents: 'src/graphql/**/*.gql',
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: `~@/graphql/generated`,
        extension: '.graphql.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },

    // msw
    'src/mocks/graphql/schema/generated.ts': {
      schema: ['src/mocks/graphql/schema/mock.schema.gql'],
      documents: 'src/mocks/**/*.gql',
      config: { scalars },
      plugins: ['typescript'],
    },
    'mocks/': {
      schema: 'src/mocks/graphql/schema/**/mock.schema.gql',
      documents: 'src/mocks/**/*.gql',
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: `~@/mocks/graphql/schema/generated`,
        extension: '.graphql.ts',
      },
      plugins: ['typescript-operations', 'typescript-msw', 'typescript-react-apollo'],
    },
  },
  config: {
    enumsAsTypes: true,
  },
};

export default config;
