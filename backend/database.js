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
    // console.log(head, body);
    try {
        client.connect();
        const data = await client.db('todo').collection('item');
        const listLenght = (await data.find().toArray()).length;
        await data.insertOne({"title": head, "content": body, "id": listLenght +1});
    } finally {
        client.close();
    }
}
async function updateData(id, head, body){
    // console.log(id, head, body);
    try {
        client.connect();
        const data = await client.db('todo').collection('item');
        await data.updateOne({"id": id}, {$set:{"title":head, "content":body}});
    } finally {
        client.close();
    }
}
async function deleteData(id){
    // console.log(id);
    try {
        client.connect();
        const data = await client.db('todo').collection('item');
        await data.deleteOne({"id": id});
    } finally {
        client.close();
    }
}

module.exports = {getData, sendData, updateData, deleteData};
