import { client, checkError } from './client.js'

export async function getListItems() {
    const resp = await client.from('to_do')
}