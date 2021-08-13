export default function hendler(req, res){
    const codigo = req.query.codigo
        res.status(200).json({
            id:codigo,
            name: `junior${codigo}`,
            email: `junior${codigo}@.com`
        }) 
}