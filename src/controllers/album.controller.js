const { albumService } = require("../services");

const getAlbums = async (req, res) => {
    const albums= await albumService.getAlbums();
    res.status(200).json({
        'data': albums
    });
};

const saveAlbum = async (req, res) => {
    await albumService.saveAlbum(req.body);
    res.status(200).json({
        'data': req.body
    });
};

const getAlbum = async (req, res) => {
    const album= await albumService.getAlbum(req.params.albumId);
    if(album){
        res.status(200).json({
            'data': album
        });
    } else{
        res.status(404);
    }
};

const deleteAlbum = async (req, res) => {
    const album= await albumService.deleteAlbum(req.params.albumId);
    if(album){
        res.status(204).json({
            'data': album
        });
    } else{
        res.status(404);
    }
};

const updateAlbum = async (req, res) => {
    const album= await albumService.updateAlbum(req.params.albumId, req.body);
    if(album){
        res.status(200).json({
            'data': album
        });
    } else{
        res.status(404);
    }
};

module.exports={
    getAlbums,
    saveAlbum,
    getAlbum,
    deleteAlbum,
    updateAlbum
}