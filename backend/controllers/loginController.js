async function loginContPost(req,res) {
    const {name,username} =req.body
    res.send(`welcome ${name,username}`)
    
}