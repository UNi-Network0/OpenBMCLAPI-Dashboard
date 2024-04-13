import React from "react";

import LineChart from "@/components/charts/Line";
import RadarCharts from "@/components/charts/Line";
export default async function Overview() {
  // const data = await getdata()
  // const days = data.stats.days;
  // const currentTime = new Date();
  // const currentHour = currentTime.getHours();
  // const timeData = [currentHour];

  // for (let i = 1; i < days.length; i++) {
  //   const hour = currentHour - i;
  //   timeData.push(hour);
  // }

  // const transformedData = days.map((value: {hits: number,bytes: number}, index:number) => ({
  //   time: timeData[index],
  //   hits: value.hits.toString(),
  //   bytes: formatBytes(value.bytes)
  // }));
  
let data = {
  "BMCLNG": 11,
  "BakaXL": 6800,
  "Dalvik": 42469,
  "FCL": 129397,
  "FileDownloader": 1,
  "Gradle": 1,
  "HMCL": 263438,
  "HMCL-PE": 1,
  "Java": 4,
  "Java-http-client": 117,
  "LauncherX": 23,
  "ML": 11,
  "Mozilla": 330,
  "NsisoLauncher": 1,
  "PCL2": 627523,
  "Pojav": 1,
  "SharpCraftLauncher": 11,
  "[Unknown]": 1034,
  "bmclapi-warden": 2186,
  "got": 1337,
  "minecraft-launcher-lib": 16,
  "openbmclapi-cluster": 26863,
  "voxelum": 38
}
let newdata: { name: string, point: number }[] = [];
Object.entries(data).forEach(([name, point]) => {
  newdata.push({ name, point });
});

  // <LineChart data={transformedData} /> // Pass the data prop correctly
  return (
    <LineChart data={newdata} />
  );
}

async function getdata() {
  try {
    const response = await fetch(
      "https://bmclapi.zeroctagon.top:57820/api/v0/status"
    );
    const data = await response.json();
    return data
  } catch (error) {
    // Handle any errors here
    console.error("error", error);
    return null
  }
}

const bUnits = ['KB', 'MB', 'GB', 'TB']

function formatBytes(bytes: number): string {
	var neg = ''
	if (bytes < 0) {
		neg = '-'
		bytes = -bytes
	}
	if (bytes < 1000) {
		return `${neg}${bytes} B`
	}
	var unit = ''
	for (const u of bUnits) {
		unit = u
		bytes /= 1024
		if (bytes < 1000) {
			break
		}
	}
	return `${neg}${bytes.toFixed(2)} ${unit}`
}