import { client } from '../index.js';

export async function updateMovies(id, data) {
    return await client.db("mongo").collection("movies").updateOne({ id: id }, { $set: data });
}
export async function deleteMovies(id) {
    return await client.db("mongo").collection("movies").deleteOne({ id: id });
}
export async function createMovies(data) {
    return await client.db("mongo").collection("movies").insertMany(data);
}
export async function getMoviesById(id) {
    return await client.db("mongo").collection("movies").findOne({ id: id });
}
export async function getAllMovies() {
    return await client.db("mongo").collection("movies").find({}).toArray();
}
