const express = require("express");
const cors = require("cors");
const Users = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    const data = await Users.get();
    const list = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
  });

app.post("/create", async(req,res)=>{
    const data = req.body;
    console.log("Data of Users",{data})
    await Users.add(data);
    // await Users.add({"name":"Admin","age":"age" });
    res.send({msg:"User Added"})
})

   
app.post("/update", async (req, res) => {
    const id = req.body.id;
    console.log("Before deleting id", req.body);
    delete req.body.id;
    console.log("After deleting id", req.body);
    const data = req.body;
    await Users.doc(id).update(data);
    res.send({ msg: "Updated" });
  });

  app.post("/delete", async (req, res) => {
    const id = req.body.id;
    await Users.doc(id).delete();
    res.send({ msg: "Deleted" });
  });

app.listen(4000,()=>{
    console.log("App running on 4000 port")
})