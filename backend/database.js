const { error } = require('console');
const { MongoClient } = require('mongodb');
const uri = 'mongodb://0.0.0.0:27017';

const client = new MongoClient(uri);

async function getData(){
    try {
        client.connect();
        // console.log('database connected');
        const data = await client.db('todo').collection('item').find().toArray();
        return JSON.stringify(data);
    }
    catch {
        if(error) console.log ('data base error: ', error);
    } 
    finally {
        // console.log('database disconnected');
        client.close();
    }
}
async function sendData(head, body){
    console.log(head, body);
    try {
        client.connect();
        const data = await client.db('todo').collection('item');
        const listLenght = (await data.find().toArray()).length;
        await data.insertOne({"title": head, "content": body, "id": listLenght +1});
    } finally {
        client.close();
    }
}
module.exports = {getData, sendData};
