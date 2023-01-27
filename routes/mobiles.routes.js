import express from 'express';
import { getAllMobiles, createMobiles } from '../services/mobiles.services.js';
const router = express.Router();


router.get("/", async function (request, response) {

    const mobiles = await getAllMobiles();
    // console.log(movies);
    response.send(mobiles);

    
});

router.post("/", async function (request, response) {

    const data = request.body;
    // console.log(data);

    const result = await createMobiles(data);

    response.send(result);

})

export default router;


