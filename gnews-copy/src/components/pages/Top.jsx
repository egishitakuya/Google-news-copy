import * as React from "react";
import { DefaultLayout } from "../templetes/DefaultLayout";
import { NewsBox } from "../atoms/NewsBox";

export const Top = () => {
  return (
    <DefaultLayout>
      <NewsBox title="ニュース1" />
      <NewsBox title="ニュース2" />
      <NewsBox title="ニュース3" />
      <NewsBox title="ニュース4" />
      <NewsBox title="ニュース5" />
    </DefaultLayout>
  );
};
