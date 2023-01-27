import { client } from '../index.js';


export async function getAllMobiles() {
    return await client.db("mongo").collection("mobiles").find({}).toArray();
}

export async function createMobiles(data) {
    return await client.db("mongo").collection("mobiles").insertMany(data);
}