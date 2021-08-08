import app from "./app";

async function main () {
    await app.listen(4000);
    console.log('Sever on port 4000');
};

main();