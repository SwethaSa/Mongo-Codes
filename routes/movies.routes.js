import express from 'express';
import { getAllMovies, getMoviesById, createMovies, deleteMovies, updateMovies } from '../services/movies.services.js';
const router = express.Router();


router.get("/", async function (request, response) {

    const movies = await getAllMovies();
    // console.log(movies);
    response.send(movies);

    
})

router.get("/:id", async function(request, response) {
    const {id} = request.params;
    // //console.log(request.params)
    // console.log(id);
    // const movie = movies.find((mv)=>mv.id===id);

    const movie = await getMoviesById(id)
    
    movie ? response.send(movie) :response.status(404).send({Error:"Sorry😕 No Such Data"})
});

router.post("/", async function (request, response) {

    const data = request.body;
    // console.log(data);

    const result = await createMovies(data);

    response.send(result);

})

router.delete("/:id", async function(request, response) {
    const {id} = request.params;
    // //console.log(request.params)
    // console.log(id);
    // const movie = movies.find((mv)=>mv.id===id);

    const result = await deleteMovies(id)
    
    result.deletedCount > 0 ? response.send({Message:"Sorry😕 Movie Deleted Already"}) :response.status(404).send({Error:"Sorry😕 No Such Data"})
});


router.put("/:id", async function(request, response) {
    const {id} = request.params;
    const data = request.body;
    // //console.log(request.params)
    // console.log(id);
    // const movie = movies.find((mv)=>mv.id===id);

    const result = await updateMovies(id, data)
    response.send(result);
});

export default router;


