import img from "../assets/images/sun.svg"

export const weatherTypes : Array<any> =[
    {
    id : 1,
    name : "Clear sky",
    shortName: "Sunny",
    icon : img,
    weatherCodes : [0],
},
    {
    id : 2,
    name : "Mainly clear, partly cloudy",
    shortName: "Cloudy",
    icon : img,
    weatherCodes : [1, 2, 3]
},
    {
    id : 3,
    name : "Fog and depositing rime fog",
    shortName: "Fog",
    icon : img,
    weatherCodes : [45, 48]
},
    {
    id : 4,
    name : "Drizzle: Light, moderate, and dense intensity",
    shortName: "Drizzle",
    icon : img,
    weatherCodes : [51, 53, 55, 56, 57]
},
    {
    id : 5,
    name : "Rain: Slight, moderate and heavy intensity",
    shortName: "Rain",
    icon : img,
    weatherCodes : [61, 63, 65, 66, 67,80, 81, 82]
},
    {
    id : 6,
    name : "Snow fall: Slight, moderate, and heavy intensity",
    shortName: "Snow",
    icon : img,
    weatherCodes : [71, 73, 75]
},
    {
    id : 7,
    name : "Snow showers slight and heavy",
    shortName: "Snow showers",
    icon : img,
    weatherCodes : [85, 86]
},
    {
    id : 8,
    name : "Thunderstorm: Slight or moderate",
    shortName: "Thunderstorm",
    icon : img,
    weatherCodes : [95, 96, 99]
},
    {
    id : 9,
    name : "Snow grains",
    shortName: "Snow grains",
    icon : img,
    weatherCodes : [77]
},
]


export const addressTypes : Array<string> = ["city", "country", "village", "town", "road", "suburb", "state", "street"];


export const times : Array<string> = ["06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];

