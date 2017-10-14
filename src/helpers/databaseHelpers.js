import Database from "../database/database.json"
import Settings from "../data/settings"

const personAccessors = [
  "form_1p",
  "form_1s",
  "form_2p",
  "form_2s",
  "form_3p",
  "form_3s",
]

export function getRandomEntry (obj) {
  let currentDatabase = Database

  if(!Settings.Subjuntivo){
    currentDatabase = Database.filter(function( obj ) {
      return obj.mood !== 'Subjuntivo'
    })
  }
  if(!Settings.Imperativo){
    currentDatabase = currentDatabase.filter(function( obj ) {
      return obj.mood !== 'Imperativo Afirmativo' && obj.mood !== 'Imperativo Negativo'
    })
  }
  if(!Settings.Presente){
    currentDatabase = currentDatabase.filter(function( obj ) {
      return obj.tense !== 'Presente'
    })
  }
  if(!Settings.Futuro){
    currentDatabase = currentDatabase.filter(function( obj ) {
      return obj.tense !== 'Futuro'
    })
  }
  if(!Settings.Imperfecto){
    currentDatabase = currentDatabase.filter(function( obj ) {
      return obj.tense !== 'Imperfecto'
    })
  }
  if(!Settings.Pretérito){
    currentDatabase = currentDatabase.filter(function( obj ) {
      return obj.tense !== 'Pretérito'
    })
  }
  if(!Settings["Pretérito anterior"]){
    currentDatabase = currentDatabase.filter(function( obj ) {
      return obj.tense !== 'Pretérito anterior'
    })
  }
  if(!Settings.Condicional){
    currentDatabase = currentDatabase.filter(function( obj ) {
      return obj.tense !== 'Condicional'
    })
  }
  if(!Settings["Condicional perfecto"]){
    currentDatabase = currentDatabase.filter(function( obj ) {
      return obj.tense !== 'Condicional perfecto'
    })
  }
  if(!Settings["Presente perfecto"]){
    currentDatabase = currentDatabase.filter(function( obj ) {
      return obj.tense !== 'Presente perfecto'
    })
  }
  if(!Settings["Futuro perfecto"]){
    currentDatabase = currentDatabase.filter(function( obj ) {
      return obj.tense !== 'Futuro perfecto'
    })
  }
  if(!Settings.Pluscuamperfecto){
    currentDatabase = currentDatabase.filter(function( obj ) {
      return obj.tense !== 'Pluscuamperfecto'
    })
  }

  let index = currentDatabase.length * Math.random() << 0
  let entry = currentDatabase[index]
  console.log(currentDatabase.length)
  return entry
}

export function getRandomAccessor() {
  let index = personAccessors.length * Math.random() << 0
  let accessor = personAccessors[index]
  while(accessor == "form_2p"){
    index = personAccessors.length * Math.random() << 0
    accessor = personAccessors[index]
  }
  return accessor
}

export function mapAccessorToPerson(index){
  switch (index) {
    case "form_1s":
      return "yo"
      break
    case "form_2s":
      return "tu"
      break
    case "form_3s":
      return "el"
      break
    case "form_1p":
      return "nosotros"
      break
    case "form_2p":
      return "vosotros"
      break
    case "form_3p":
      return "ellos"
      break
    }
}
