import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:7777/graphql',
  documents: 'src/graphql/queries.ts',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
