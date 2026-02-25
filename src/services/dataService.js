const catalog  = 
[
    {
        "title":"GamerPC",
        "category":"Laptop",
        "Price":2000,
        "image":"gamer-pc.jpg",
        "_id": 1,
    },
    {
        "title":"Ergonomic Mouse",
        "category":"Devices",
        "Price":50,
        "image":"mouse.jpg",
        "_id": 2,//This must be unique
    },
    {
        "title":"Ergonomic Keyboard",
        "category":"Devices",
        "Price":60,
        "image":"ergonomic-keyboard.jpg",
        "_id": 3,//This must be unique
    },
    {
        "title":"Normal Keyboard",
        "category":"Devices",
        "Price":60,
        "image":"normal-keyboard.jpg",
        "_id": 4,//This must be unique
    },

];
class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;