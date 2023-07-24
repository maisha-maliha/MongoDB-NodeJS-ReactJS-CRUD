const { error } = require('console');
const { MongoClient } = require('mongodb');
const uri = 'mongodb://0.0.0.0:27017';

const client = new MongoClient(uri);
let id = 1;
async function getData(){
    try {
        client.connect();
        const data = await client.db('todo').collection('item').find().toArray();
        return JSON.stringify(data);
    }
    catch {
        if(error) console.log ('data base error: ', error);
    } 
    finally {
        client.close();
    }
}
async function sendData(head, body){
    try {
        client.connect();
        const data = await client.db('todo').collection('item');
        await data.insertOne({"title": head, "content": body, "id": id++});
    } finally {
        client.close();
    }
}
async function updateData(id, head, body){
    try {
        client.connect();
        const data = await client.db('todo').collection('item');
        await data.updateOne({"id": id}, {$set:{"title":head, "content":body}});
    } finally {
        client.close();
    }
}
async function deleteData(id){
    try {
        client.connect();
        const data = await client.db('todo').collection('item');
        await data.deleteOne({"id": id});
    } finally {
        client.close();
    }
}

module.exports = {getData, sendData, updateData, deleteData};
