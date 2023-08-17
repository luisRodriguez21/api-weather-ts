// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'

// export type Visivility = 'great' | 'good' | 'bad' | 'ok' | 'poor'
/*
  si exportamos enum le quitamos el .d al types/archivo porque se vuelve JS, si es solo para tipos si puede llevar la d
  se puede separar un archivo de types.d.ts y enums.js
*/
export enum Weather {
  Sunny = 'sun',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Visivility {
  Great = 'great',
  Good = 'good',
  Bad = 'bad',
  Ok = 'ok',
  Poor = 'poor'
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visivility
  comment: string
}

// export type InfoSensitive = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'> - por si ocupamos el mismo objeto pero sin un dato en especifico

export type InfoSensitive = Omit<DiaryEntry, 'comment'>

export type NewDiary = Omit<DiaryEntry, 'id'>
