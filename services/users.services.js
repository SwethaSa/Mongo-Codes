import { client } from '../index.js';

export async function createUsers(data) {
    return await client.db("mongo").collection("users").insertOne(data);
}
export async function getUsersByName(username) {
    return await client.db("mongo").collection("users").findOne({ username : username });
}

