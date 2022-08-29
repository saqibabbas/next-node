const express =  require('express');
const { albumController } = require('../../controllers');
const router = express.Router();

router
    .route('/')
    .get(albumController.getAlbums)
    .post(albumController.saveAlbum)

router
  .route('/:albumId')
  .get(albumController.getAlbum)
  .put(albumController.updateAlbum)
  .delete(albumController.deleteAlbum)

module.exports = router;