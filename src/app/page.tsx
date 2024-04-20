import React from "react";


import UaCharts from "@/components/charts/UaCharts";
import getChartsData from "@/utils/getChartsData";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

export default async function Overview() {
  const data = await getChartsData();
  return (
    <>
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Accesses Top 5</h2>
        </CardHeader>
        <CardBody>
          <UaCharts {...data.stats.accesses} />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Accesses Top 5</h2>
        </CardHeader>
        <CardBody>
          <UaCharts {...data.stats.accesses} />
        </CardBody>
      </Card>
    </>
  );
}
