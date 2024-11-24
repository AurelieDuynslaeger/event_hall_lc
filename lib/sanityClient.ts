import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'onci81li', 
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-11-24',
});
