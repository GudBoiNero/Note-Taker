migrate((db) => {
  const collection = new Collection({
    "id": "ndialwo599jsn28",
    "created": "2023-07-26 22:44:45.873Z",
    "updated": "2023-07-26 22:44:45.873Z",
    "name": "buckets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gjhphbzx",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "o9noy45k",
        "name": "notes",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "jsqvojswcgxv43j",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ndialwo599jsn28");

  return dao.deleteCollection(collection);
})
