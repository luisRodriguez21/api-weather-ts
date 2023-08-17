import { DiaryEntry, InfoSensitive, NewDiary } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[] // exception de tipos | obligar a ts tiene que funcionar | cuando se ocupan apis externas

export const getEntries = (): DiaryEntry[] => diaries

export const getSensitiveEntries = (): InfoSensitive[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const findById = (id: number): InfoSensitive | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }

  return undefined
}

export const addEntry = (newDiary: NewDiary): DiaryEntry => {
  const newDiaryEntry = {
    id: diaries.length + 1,
    ...newDiary
  }

  diaries.push(newDiaryEntry)
  return newDiaryEntry
}
