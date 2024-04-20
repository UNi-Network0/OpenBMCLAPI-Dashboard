import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function Login() {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="flex p-6 min-w-600">
        <CardBody className="space-y-8">
          <h1 className="text-2xl font-bold">Login</h1>
          <Input label="Username" size="lg" labelPlacement="inside" />
          <Input label="Password" size="lg" type="password" />
          <div className="flex space-x-6 justify-center">
            <Button size="lg">Cancel</Button>
            <Button size="lg" color="primary">Submit</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
