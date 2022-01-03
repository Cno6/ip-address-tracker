export async function getAddress(ip = '8.8.8.8') {
  const url = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_humYp04Im1Wxit6x6MRx2gvqYkNwj&ipAddress='
  const response = await fetch(url + ip)

  return await response.json()
}