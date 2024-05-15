import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {copyPastePlugin} from '@superside-oss/sanity-plugin-copy-paste'

export default defineConfig({
  name: 'default',
  title: 'my-blog',

  projectId: 'x2axs8yy',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), copyPastePlugin()],

  schema: {
    types: schemaTypes,
  },
})
