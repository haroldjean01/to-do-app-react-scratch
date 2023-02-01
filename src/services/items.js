import { client, checkError } from './client.js';

export async function getListItems() {
  const response = await client.from('to_do').select();
  console.log('response.data', response.data);
  return checkError(response);
}
getListItems();
