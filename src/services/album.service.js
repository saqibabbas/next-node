const  Album  = require("../models/album.model");


const getAlbums =async ()=>{
   return await Album.find();
};

const saveAlbum = async (album)=>{
   return await Album.create(album);
}

const getAlbum =async (albumId)=>{
   return await Album.findById(albumId);
};

const deleteAlbum =async (albumId)=>{
   const album= await Album.findById(albumId);
   if(album){
      await album.remove();
      return album;
   }
};

const updateAlbum =async (albumId, albumBody)=>{
   const album= await Album.findById(albumId);
   if(album){
      Object.assign(album, albumBody);
      await album.save();
      return album;
   }
};

module.exports={
    getAlbums,
    saveAlbum,
    getAlbum,
    deleteAlbum,
    updateAlbum
};