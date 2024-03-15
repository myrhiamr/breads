const router = require('express').Router()
const Bread = require('../models/bread')


// GET retreive all the bread
router.get('/', async (req, res) => {
    try {
        const bread = await Bread.find()
        res.render('index', {
            breads: bread
        })
    } catch (error) {
        console.log('error:', error)
        res.json({ message: 'error getting bread' })
    }
})


// static vs dynamic routes, dynamic first

router.get('/new', (req, res) =>{
    res.render('new')
})

//Get retreive bread by index
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const bread = await Bread.findById(id)
    res.render('show', {
        bread
    })
})

router.get('/:id/edit', async (req, res) => {
    const { id } = req.params
    const bread = await Bread.findById(id)
    res.render('edit', {
        bread
    })
})

// CREATE
router.post('/', async (req, res) => {
    if (!req.body.image) req.body.image = undefined
    if (!req.body.image === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    await Bread.create(req.body)
    
    res.redirect('/bread')
})



// PUT update bread
router.put('/:id', async (req, res) => {
    const { id } = req.params
    if (!req.body.image) req.body.image = undefined
    if (req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    await Bread.findByIdAndUpdate(id, req.body)
    res.redirect(`/bread/${id}`)
})


// Delete bread

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await Bread.findByIdAndDelete(id)
    res.redirect('/bread')
})


module.exports = router