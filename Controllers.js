const Member =  require('./Member')

exports.getAllMember =(res,req)=>{
    // Member.find()
    //     .then(members => {
    //         res.render('index', { members, error: {} })
    //     })
    //     .catch(e => {
    //         console.log(e)
    //         res.json({
    //             messege: "Error"
    //         })
    //     })
}
exports.getOneMember =(res,req)=>{
    // let { id } = req.params
    // Member.findById(id)
    //     .then(member => {
    //         res.json(member)
    //     })
    //     .catch(e => {
    //         console.log(e)
    //         res.json({
    //             messege: "Error"
    //         })
    //     })
}
exports.addMember =(res,req)=>{
    let { name,position, birthday, email,phone, id } = req.body

    // let error = {}
    // if (!name) {
    //     error.name = 'Please Provide A Name'
    // }
    // if (!position) {
    //     error.name = 'Please Provide A Position'
    // }
    // if (!birthday) {
    //     error.name = 'Please Provide A Birthday'
    // }
    // if (!phone) {
    //     error.phone = 'Please Provide A Phone Number'
    // }
    // if (!email) {
    //     error.email = 'Please Provide An Email'
    // }

    // let isError = Object.keys(error).length > 0

    // if (isError) {
    //     Member.find()
    //         .then(members => {
    //             return res.render('index', { members, error })
    //         })
    //         .catch(e => {
    //             console.log(e)
    //             return res.json({
    //                 messege: "Error"
    //             })
    //         })
    // }

    // if (id) {
    //     Member.findOneAndUpdate(
    //         { _id: id },
    //         {
    //             $set: {
    //                 name,
    //                 position,
    //                 birthday,
    //                 phone,
    //                 email
    //             }
    //         }
    //     )
    //         .then(() => {
    //             Member.find()
    //                 .then(members => {
    //                     res.render('index', { members, error: {} })
    //                 })
    //         })
    //         .catch(e => {
    //             console.log(e)
    //             return res.json({
    //                 messege: "Error"
    //             })
    //         })
    // }
    // else {
        let member = new Member({
            name,
            position,
            birthday,
            phone,
            email
            
        })

        member.save()
            .then(m => {
                // Member.find()
                    // .then(members => {
                    //     return res.render('index', { members, error: {} })
                    // })
                res.json(m)
            })
            .catch(e => {
                console.log(e)
                return res.json({
                    messege: "Error"
                })
            })
    //}



}
exports.editMember =(res,req)=>{
    // let { name,position, birthday, email,phone } = req.body
    // let { id } = req.params
    // Contact.findOneAndUpdate(
    //     { _id: id },
    //     {
    //         $set: {
    //         name,
    //         position,
    //         birthday,
    //         phone,
    //         email
    //         }
    //     },
    //     { new: true }
    // )
    //     .then(member => {
    //         res.json(member)
    //     })
    //     .catch(e => {
    //         console.log(e)
    //         res.json({
    //             messege: "Error"
    //         })
    //     })
}
exports.deleteMember =(res,req)=>{
    // let { id } = req.params
    // Member.findOneAndDelete(
    //     { _id: id }
    // )
    //     .then(() => {
    //         Member.find()
    //             .then(members => {
    //                 return res.render('index', { members, error: {} })
    //             })

    //     })
    //     .catch(e => {
    //         console.log(e)
    //         res.json({
    //             messege: "Error"
    //         })
    //     })

}