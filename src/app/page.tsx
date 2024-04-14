import React from "react";

import UaCharts from "@/components/charts/UaCharts";
import getChartsData from "@/utils/getChartsData";

export default async function Overview() {
  const data = await getChartsData();
  return (
    <>
      {data && <UaCharts {...data.stats.accesses} />}
    </>
  );
}
