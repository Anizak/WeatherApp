import sun from "../assets/images/sun.svg"
import cloudy from "../assets/images/partly-cloudy.png"
import fog from "../assets/images/haze.png"
import drizzle from "../assets/images/drizzle.png"
import rain from "../assets/images/rain.png"
import snow from "../assets/images/snowfall.png"
import thunder from "../assets/images/storm.png"
import snowgrains from "../assets/images/haze.png"
import night from "../assets/images/night.png"
import cloudyNight from "../assets/images/cloudy-night.png"

export const weatherTypes : Array<any> =[
    {
    id : 1,
    name : "Clear sky",
    shortName: "Sunny",
    icon : sun, 
    nightIcon : night,
    weatherCodes : [0],
},
    {
    id : 2,
    name : "Mainly clear, partly cloudy",
    shortName: "Cloudy",
    icon : cloudy,
    nightIcon: cloudyNight,
    weatherCodes : [1, 2, 3]
},
    {
    id : 3,
    name : "Fog and depositing rime fog",
    shortName: "Fog",
    icon : fog,
    nightIcon: null,
    weatherCodes : [45, 48]
},
    {
    id : 4,
    name : "Drizzle: Light, moderate, and dense intensity",
    shortName: "Drizzle",
    icon : drizzle,
    nightIcon: null,
    weatherCodes : [51, 53, 55, 56, 57]
},
    {
    id : 5,
    name : "Rain: Slight, moderate and heavy intensity",
    shortName: "Rain",
    icon : rain,
    nightIcon: null,
    weatherCodes : [61, 63, 65, 66, 67,80, 81, 82]
},
    {
    id : 6,
    name : "Snow fall: Slight, moderate, and heavy intensity",
    shortName: "Snow",
    icon : snow,
    nightIcon: null,
    weatherCodes : [71, 73, 75,85, 86]
},
  
    {
    id : 7,
    name : "Thunderstorm: Slight or moderate",
    shortName: "Thunderstorm",
    icon : thunder,
    nightIcon: null,
    weatherCodes : [95, 96, 99]
},
    {
    id : 8,
    name : "Snow grains",
    shortName: "Snow grains",
    icon : snowgrains,
    nightIcon: null,
    weatherCodes : [77]
},
]


export const addressTypes : Array<string> = ["city", "country", "village", "town", "road", "suburb", "state", "street"];


export const times : Array<string> = ["06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];

