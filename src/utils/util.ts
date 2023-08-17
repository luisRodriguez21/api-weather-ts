import { NewDiary, Weather, Visivility } from '../types'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Invalid comment')
  }

  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Invalid date')
  }

  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Invalid weather')
  }

  return weatherFromRequest
}

const parseVisivility = (visibilityFromRequest: any): Visivility => {
  if (!isString(visibilityFromRequest) || !isVisivility(visibilityFromRequest)) {
    throw new Error('Invalid visivility from request')
  }

  return visibilityFromRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisivility = (param: any): boolean => {
  return Object.values(Visivility).includes(param)
}

const toNewDiaryEntry = (object: any): NewDiary => {
  const newEntry: NewDiary = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisivility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
