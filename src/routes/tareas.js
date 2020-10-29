const router = require('express').Router();
const Tareas=require('../models/Tareas');

router.get('/traertareas', async (req, res) => {
    const tareas = await Tareas.find();
    res.send(tareas);
});

router.post('/agregartareas', async (req, res) => {
    const {titulo, descripcion} = req.body;
    const tarea = {
        titulo,
        descripcion
    }

    const nuevatarea = new Tareas(tarea);
    const nuevatarea2 = await nuevatarea.save();

    res.send(nuevatarea2);

});

// Actualizar datos de usuario
router.put('/actualizartareas/:id', async (req, res) => {

    const {titulo,descripcion } = req.body;
    const tarea = {
        titulo,
        descripcion
    }
    const tareaActualizada = await Tareas.findByIdAndUpdate(req.params.id, tarea);
    res.send(tareaActualizada);

});

router.delete('/elimartareas/:id', async (req, res) => {
    
    const tareaEliminada = await Tareas.findByIdAndDelete(req.params.id);
    res.send(tareaEliminada);
});

module.exports = router;

