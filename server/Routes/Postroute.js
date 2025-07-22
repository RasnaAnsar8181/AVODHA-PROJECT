const express = require("express")
const records = require("../Controller/PostController")
const router = express.Router()

router.get('/',records.getRecords)
router.post('/',records.postRecords)
router.put('/:id',records.putRecords)
router.get('/:id',records.getRecordById)
router.delete('/:id',records.deleteRecords)

module.exports = router