import Fastify from "fastify";
import mongoose from "mongoose";
import DataModel from "./dataModel.js";
import cors from "@fastify/cors";

const fastify = Fastify({ logger: true });

fastify.register(cors, {
  origin: true
})

let uri = "mongodb+srv://ananthan:ananthan@cluster0.apq2bmf.mongodb.net/BHLTH?retryWrites=true&w=majority"

mongoose.connect(uri)

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

fastify.post("/data", async (request, reply) => {
  const existingData = await DataModel.findOne({ key: "store" });

  if (existingData) {
    existingData.data = request.body.data;
    await existingData.save();
  } else {
    const data = new DataModel({ data: request.body.data });
    await data.save();
  }

  // const data = new DataModel({ key, request.body.data, data: request.body.data });
  // await data.save();

  reply.code(201).send({message : "success"});
});

fastify.get("/data", async (request, reply) => {
 const data = await DataModel.find();
 let result = data[0].data;
 reply.code(200).send({data: result});
});

const start = async () => {
  try {
    await fastify.listen({ port: 3001, host: "0.0.0.0" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
