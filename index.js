
 import  express from "express";
 import axios from "axios";

 const app = express();
 const port = 3000;

 app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
    try{
    const result =  await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {
        secret : result.data.secret,
        user : result.data.username
    });
   
} catch(error){
    console.log(error.response.data);
    console.log(500);
}
});

app.listen(port, (req, res) => {
    console.log(`server is running on port ${port}`);
});
