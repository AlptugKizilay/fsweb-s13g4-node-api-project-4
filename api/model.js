const initialUsers = ()=> {
    return [
        {id:1, kullaniciadi:"admin",password:"root"}
    ]
}

const allUsers = initialUsers();

const getAllUsers = ()=> {
    return allUsers;
}
const getById = () => {
    
}

module.exports = {
    getAllUsers,

}