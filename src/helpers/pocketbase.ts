import PocketBase from 'pocketbase'

export default async function getPB(): Promise<PocketBase> {
    const pb = new PocketBase("http://127.0.0.1:8090");

    return pb;
} 