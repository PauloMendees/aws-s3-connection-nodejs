import { app } from "./app";

async function run(){
    app.listen(8080, () => { console.log("Server is running fine on port 8080") })
}

run().catch(console.error)