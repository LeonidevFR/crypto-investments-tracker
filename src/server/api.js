import express from 'express'
const router = express.Router()
import db from './db.js'

router.get('/data', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM public.catto')
    res.json(rows)
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

router.post('/data', async (req, res) => {
  const newData = req.body

  console.log(newData)

  try {
    const { rows } = await db.query('INSERT INTO public.cats (cat) VALUES ($1) RETURNING *', [
      newData.name
    ])
    res.json({ message: 'Donnée créée avec succès', data: rows[0] })
  } catch (error) {
    console.error('Erreur lors de la création de la donnée :', error)
    res.status(500).json({ message: 'Erreur serveur' })
  }
})

export default router
