import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils/util'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getSensitiveEntries())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)

  return (diary != null)
    ? res.send(diary)
    : res.send(404)
})

router.post('/', (req, res) => {
  try {
    console.log('req.body: ', req.body)

    const newDiaryEntry = toNewDiaryEntry(req.body)

    const newDiaryEntrySave = diaryServices.addEntry(newDiaryEntry)

    res.json(newDiaryEntrySave)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
