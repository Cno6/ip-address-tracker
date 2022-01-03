import 'babel-polyfill'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {validateIp, addTileLayer, getAddress, addOffset} from './helpers/index'
import icon from '../images/icon-location.svg'

const ipInput = document.querySelector('.search-bar__input')
const btn = document.querySelector('.search-bar__btn')

const ipInfo = document.querySelector('#ip')
const locationInfo = document.querySelector('#location')
const timezoneInfo = document.querySelector('#timezone')
const ispInfo = document.querySelector('#isp')

btn.addEventListener('click', getData)
ipInput.addEventListener('keydown', handleKey)

const markerIcon = L.icon({
  iconUrl: icon,
  iconSize: [30, 40],
})

const mapArea = document.querySelector('.map')
const map = L.map(mapArea, {
  center: [51.505, -0.09],
  zoom: 13,
})
addTileLayer(map)
const marker = L.marker([51.505, -0.09], {icon: markerIcon}).addTo(map)

function getData() {
  if (validateIp(ipInput.value)) {
    getAddress(ipInput.value).then(renderData)
  } else {
    alert('You have to enter a valid IP address')
  }
 
}

function handleKey(event) {
  if (event.key === 'Enter') {
    getData()
  }
}

function renderData(mapData) {
  console.log(mapData);
  ipInfo.innerText = mapData.ip
  locationInfo.innerText = `${mapData.location.country}, ${mapData.location.region}`
  timezoneInfo.innerText = mapData.location.timezone
  ispInfo.innerText = mapData.isp

  map.setView([mapData.location.lat, mapData.location.lng])
  marker.setLatLng([mapData.location.lat, mapData.location.lng])

  if (matchMedia("(max-width: 1023px)").matches) {
    addOffset(map)
  }
  
}

document.addEventListener('DOMContentLoaded', () => {
  getAddress('8.8.8.8').then(renderData)
})
