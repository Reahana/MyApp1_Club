const Member =  require('./Member')

exports.getAllMember =(req,res)=>{
     Member.find()
         .then(members => {
             res.render('index', { members, error: {} })
         })
        .catch(e => {
            console.log(e)
             res.json({
                 messege: "Error"
            })
        })
}
exports.getOneMember =(req,res)=>{
    let { id } = req.params
    Member.findById(id)
        .then(member => {
            res.json(member)
        })
        .catch(e => {
            console.log(e)
            res.json({
                messege: "Error"
            })
        })
}
exports.addMember =(req,res)=>{
    let { name,position, birthday, email,phone,id} = req.body

    let error = {}
    if (!name) {
        error.name = 'Please Provide A Name'
    }
    if (!position) {
        error.position = 'Please Provide A Position'
    }
    if (!birthday) {
        error.birthday = 'Please Provide A Birthday'
    }
    if (!email) {
        error.email = 'Please Provide An Email'
   }
     if (!phone) {
         error.phone = 'Please Provide A Phone Number'
     }
     

    let isError = Object.keys(error).length > 0

    if (isError) {
        Member.find()
            .then(members => {
                return res.render('index', { members, error })
            })
            .catch(e => {
                console.log(e)
                return res.json({
                    messege: "Error"
                })
            })
    }

    if (id) {
        Member.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    name,
                    position,
                    birthday,
                    email,
                    phone
                    
                }
            }
        )
            .then(() => {
                Member.find()
                    .then(members => {
                        res.render('index', { members, error: {} })
                    })
            })
            .catch(e => {
                console.log(e)
                return res.json({
                    messege: "Error"
                })
            })
    }
    else {
        let member = new Member({
            name,
            position,
            birthday,
            email,
            phone
            
        })
     
        member.save()
            .then(m => {
                Member.find()
                    .then(members => {
                        return res.render('index', { members, error: {} })
                    })
            
             })
             .catch(e => {
                console.log(e)
              res.json({
                     messege: "Error"
                })
             })
    }



}
exports.editMember =(req,res)=>{
    let { name,position, birthday,email,phone } = req.body
    let { id } = req.params
    Contact.findOneAndUpdate(
        { _id: id },
        {
            $set: {
            name,
            position,
            birthday,
            email,
             phone
           
            }
        },
        { new: true }
    )
        .then(member => {
            res.json(member)
        })
        .catch(e => {
            console.log(e)
            res.json({
                messege: "Error"
            })
        })
}
exports.deleteMember =(req,res)=>{
    let { id } = req.params
    Member.findOneAndDelete(
        { _id: id }
    )
        .then(() => {
            Member.find()
                .then(members => {
                    return res.render('index', { members, error: {} })
                })

        })
        .catch(e => {
            console.log(e)
            res.json({
                messege: "Error"
            })
        })

}