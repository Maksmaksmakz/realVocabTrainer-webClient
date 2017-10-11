const Data = {
  verbs: {
    ser : {
      infinitivo: "ser",
      presente: {
        conjugation: {
          yo: "soy",
          tu:"eres",
          el:"es",
          ella:"es",
          usted:"es",
          nosotros:"somos",
          ellos:"son",
          ustedes:"son",
        },
      },
      perfecto: {
        conjugation: {
          yo: "fui",
          tu:"fuiste",
          el:"fue",
          ella:"fue",
          usted:"fue",
          nosotros:"fuimos",
          ellos:"fueron",
          ustedes:"fueron",
        },
      },
      imperfecto: {
        conjugation: {
          yo:"era",
          tu:"eras",
          el:"era",
          ella:"era",
          usted:"era",
          nosotros:"eramos",
          ellos:"eran",
          ustedes:"eran"
      }
    },
  },
    estar: {
      infinitivo: "estar",
      presente: {
        conjugation: {
          yo:"estoy",
          tu:"estas",
          el:"esta",
          ella:"esta",
          usted:"esta",
          nosotros:"estamos",
          ellos:"estan",
          ustedes:"estan",
        },
      },
      perfecto: {
        conjugation: {
          yo:"estuve",
          tu:"estuviste",
          el:"estuvo",
          ella:"estuvo",
          usted:"estuvo",
          nosotros:"estuvimos",
          ellos:"estuvieron",
          ustedes:"estuvieron",
        },
      },
      imperfecto: {
        conjugation: {
          yo:"estaba",
          tu:"estabas",
          el:"estaba",
          ella:"estaba",
          usted:"estaba",
          nosotros:"estabamos",
          ellos:"estaban",
          ustedes:"estaban",
        }
      },
    }
  },
  Accessors : {
    forms : [
      "presente",
      "perfecto",
      "imperfecto"
    ],
    personas : [
      "yo",
      "tu",
      "el",
      "ella",
      "usted",
      "nosotros",
      "vosotros",
      "ellos",
      "ustedes"
    ]
  }
}
export default Data;
