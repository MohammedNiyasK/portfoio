// External Dependencies

import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";


// Global Variables

export const collections: {
  form?: mongoDB.Collection;
  projects?: mongoDB.Collection;
  experience?:mongoDB.Collection
} = {};

export const database:{
  db?:mongoDB.Db;
} ={}

// Initialize Connection



   export async function connectToDatabase() {
    dotenv.config();
  
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(
      process.env.DB_CONN_STRING!
    );
  
    await client.connect();
  
      const db: mongoDB.Db = client.db(process.env.DB_NAME);

      database.db = db;
  
    const formCollection: mongoDB.Collection = db.collection(
      process.env.FORM_COLLECTION_NAME!
    );
  
    collections.form = formCollection;
  
    const projectCollection: mongoDB.Collection = db.collection(
      process.env.PROJECT_COLLECTION_NAME!
    );
  
    collections.projects = projectCollection;

    const experienceCollection: mongoDB.Collection = db.collection(
      process.env.EXPERIENCE_COLLECTION_NAME!
    );
  
    collections.experience = experienceCollection;
  
    console.log(
      `succesfully connected to database: ${db.databaseName} and collection: ${formCollection.collectionName}`
    );
  }


