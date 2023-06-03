import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";

export const portfolioRouter = express.Router();

portfolioRouter.post("/submit", async (req: Request, res: Response) => {
    try {
        const formData = req.body;
        const result = await collections.form?.insertOne(formData);

        result
            ? res.status(201).send(`Successfully created a new message with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new messge.");
    } catch (error:any) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

portfolioRouter.get("/projects", async (_req: Request, res: Response) => {
    try {
       const projects = (await collections.projects?.find({}).toArray()) ;

        res.status(200).send(projects);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
});

portfolioRouter.get("/experience", async (_req: Request, res: Response) => {
    try {
       const experience = (await collections.experience?.find({}).toArray()) ;

        res.status(200).send(experience);
    } catch (error:any) {
        res.status(500).send(error.message);
    }
});