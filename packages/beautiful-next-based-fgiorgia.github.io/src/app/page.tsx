import React from "react";
import mainConfig from "./config/mainConfig";
import { PageConfig } from "beautiful-next-theme/types";
import BaseLayout from "beautiful-next-theme/src/layouts/BaseLayout";

const page: PageConfig = {
  // Add props here
}



const Home: React.FC = () => {
  return (
    <BaseLayout config={mainConfig} page={page}>
      <main>
        <p>Test</p>
      </main>
    </BaseLayout>
  );
}

export default Home
