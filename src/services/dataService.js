const catalog  = 
[
    {
    "title":"GamerPC",
    "category":"Laptop",
    "Price":2000,
    "image":"placeholder",
    "_id": 1,
    },
     {
    "title":"Ergonomic Mouse",
    "category":"Devices",
    "Price":50,
    "image":"placeholder",
    "_id": 2,//This must be unique
    },
    {
    "title":"Ergonomic Keyboard",
    "category":"Devices",
    "Price":60,
    "image":"placeholder",
    "_id": 3,//This must be unique
    },
      {
    "title":"Normal Keyboard",
    "category":"Devices",
    "Price":60,
    "image":"placeholder",
    "_id": 4,//This must be unique
    },

];
class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;