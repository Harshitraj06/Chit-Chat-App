const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
      'hhtp://api.chatengine.io/users',
      {username: username, secret:username, first_name:username},
      {Headers: {"private-key": "a14dd659-fd2e-42c6-8041-b8b1520d6ce2"}}
    )
    return res.status(r.status).json(r.data)
  }catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
});
app.listen(3001);