import ChartData from '../types/charts';

export default async function getChartsData(): Promise<ChartData> {
  return fetch('https://bmclapi.zeroctagon.top:57820/api/v0/status')
    .then(response => response.json())
    .then(data => {
      // Handle the fetched data here
      // console.log(data);
      return data;
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error(error);
    });
}

