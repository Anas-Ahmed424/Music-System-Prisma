import prisma from "../DB/db.config.js";

export const fetchUsers = async (req, res) => {
    const Users = await prisma.user.findMany({

        include:{
            music:{

            }
        }

    })
    return res.json({status: 200, data: Users})

}

export const showUser = async (req,res) => {
    const {id} = req.body
    const User = await prisma.user.findFirst({
        where:{
            id:id
        }
    })

    return res.json({status:200, data:User});
}

export const updateUser = async (req,res) => {

    const {id} = req.params
    const {name, email, password} = req.body;

    await prisma.user.update({
        where:{
            id:id
        },
        data:{
            name:name,
            email:email,
            password:password
        }
    })

    return res.json({status:200, message:"User updated successfully" })

}

export const deleteUser = async (req, res) => {

    const {id} = req.params.id

     await prisma.user.deleteMany({
        where:{
            id:id
        },
    })
    return res.json({status:200, msg:"User deleted successfully"});

}


export const createUser = async (req,res) => {
    const { name, email, password, user_id} = req.body;



    const User = await prisma.user.create({
        data:{
            name: name,
            email: email,
            password: password,
            user_id: user_id

        }

    })
        return res.json({status:200, data:User, msg:"User created"})

}
