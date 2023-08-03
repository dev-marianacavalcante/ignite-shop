import { useRouter } from "next/router";
import React from "react";

export default function product() {
  const { query } = useRouter();
  return <h1>product {JSON.stringify(query)}</h1>;
}
