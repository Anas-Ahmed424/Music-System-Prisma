import prisma from "../DB/db.config.js";

export const fetchMusics = async (req, res) => {
    const musics = await prisma.music.findMany({

    })
    return res.json({status: 200, data: musics})

}

export const showMusic = async (req,res) => {
    const {id} = req.body
    const music = await prisma.music.findFirst({
        where:{
            id:id
        }
    })

    return res.json({status:200, data:music});
}

export const updateMusic = async (req,res) => {

    const {id} = req.params.id
    const {name, type, singer} = req.body;

    await prisma.music.update({
        where:{
            id:id
        },
        data:{
            name:name,
            type:type,
            singer:singer
        }
    })

    return res.json({status:200, message:"music updated successfully" })

}

export const deleteMusic = async (req, res) => {

    const {id} = req.params.id

     await prisma.music.deleteMany({
        where:{
            id:id
        },
    })
    return res.json({status:200, msg:"music deleted successfully"});

}


export const createMusic = async (req,res) => {
    const { name, type, singer} = req.body;



    const music = await prisma.music.create({
        data:{
            name: name,
            type: type,
            singer: singer

        }

    })
        return res.json({status:200, data:music, msg:"music created"})

}
