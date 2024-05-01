
const express = require('express')
const app = express()
const cors=require('cors')
const port = process.env.PORT || 3000;
require('dotenv').config()



//middleware
app.use(express.json())
app.use(cors())
//username:cn20d004
//password:GgKYEx6iCKEZAaoo


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.u2xjpjp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create db
    const db=client.db("itAjliinSite");
    const jobsCollections = db.collection("demoJobs");

    //post a job
    app.post("/post-job", async(req, res) => {
        const body = req.body;
        body.createAt = new Date();
        //console.log(body)
        const result = await jobsCollections.insertOne(body);
        if(result.insertedId){
            return res.status(200).send(result);
        }else{
            return res.status(404).send({
                message: "can not insert! try again later",
                status:false
            })
        }
    })

    //get all jobs
    app.get("/all-jobs", async(req, res) => {
        const jobs = await jobsCollections.find({}).toArray()
        res.send(jobs);
    })

    // get jobs by email
    app.get("/myJobs/:email", async(req, res) => {
      //console.log(req.params.email)
      const jobs = await jobsCollections.find({postedBy : req.params.email}).toArray();
      res.send(jobs)
    })

    // delete a job
    app.delete("/job/:id", async(req, res) =>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const result = await jobsCollections.deleteOne(filter);
      res.send(result)
    })

    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Hello developer!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})