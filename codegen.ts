import { CodegenConfig } from '@graphql-codegen/cli';

const scalars = {
  Date: 'string',
  DateTime: 'string',
};

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    // 실 사용
    'graphql/generated.ts': {
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
    // 'mocks/schema/generated.ts': {
    //   schema: ['mocks/schema/**/mock.schema.gql', 'https://beta.pokeapi.co/graphql/v1beta'],
    //   documents: 'mocks/**/*.gql',
    //   config: { scalars },
    //   plugins: ['typescript'],
    // },
    // 'mocks/': {
    //   schema: 'mocks/schema/**/mock.schema.gql',
    //   documents: 'mocks/**/*.gql',
    //   preset: 'near-operation-file',
    //   presetConfig: {
    //     baseTypesPath: `~mocks/schema/generated`,
    //     extension: '.graphql.ts',
    //   },
    //   plugins: ['typescript-operations', 'typescript-msw', 'typescript-react-apollo'],
    // },
  },
  config: {
    enumsAsTypes: true,
  },
};

export default config;
