import fs from "fs";

function Watch(dir)
{
    const watchHandle = (action, filePath) =>
    {
        console.log(action, filePath)
    }

    fs.watch(dir, {recursive : true}, watchHandle)

    
}

// while(true)
// {
    Watch("./setup.mjs")
// }