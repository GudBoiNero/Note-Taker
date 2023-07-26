migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndialwo599jsn28")

  // update
  collection.schema.addField(new SchemaField({
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
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ndialwo599jsn28")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
