import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  projectId: 'uvq1h6px',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});