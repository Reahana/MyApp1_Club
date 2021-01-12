const router = require('express').Router()

const {
    getAllMember,
    getOneMember,
    addMember,
    editMember,
    deleteMember
}= require('./Controllers')

router.get('/',getAllMember)
router.get('/:id', getOneMember)
//router.get('/delete/:id',deleteMember)
router.post('/', addMember)
router.put('/:id', editMember)
 router.delete('/:id',deleteMember)

module.exports=router