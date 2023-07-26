migrate((db) => {
  const collection = new Collection({
    "id": "jsqvojswcgxv43j",
    "created": "2023-07-26 22:44:27.816Z",
    "updated": "2023-07-26 22:44:27.816Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kgqwimlv",
        "name": "contents",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("jsqvojswcgxv43j");

  return dao.deleteCollection(collection);
})
