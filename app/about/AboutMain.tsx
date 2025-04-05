"use client";
import React, { FC, useEffect, useRef, useState } from "react";

import About from "./components/About/About.lazy";
import CertificateList from "./components/CertificateList";
import Experience from "./components/Experience/Experience.lazy";
import { coreRequest } from "../utils/coreRequest";
import { errMessageIns } from "../utils/commonUtils";

interface Props {
  certificates?: string;
}

interface DataInterface {
  title: string;
  image_path: string;
  slug: string;
}

const AboutMain: FC<Props> = ({ certificates }) => {
  const initialLoad = useRef<boolean>(true);
  const [data, setData] = useState<DataInterface[]>([]);

  useEffect(() => {
    if (initialLoad) {
      initialLoad.current = false;
      const fetchData = async () => {
        try {
          const response = await coreRequest("certificates", "GET");
          setData(response.data);
        } catch (error) {
          console.log("🚀 ~ fetchData ~ error:", errMessageIns(error));
        }
      };

      // Call the fetch function
      fetchData();
    }
  }, []);

  return (
    <>
      <About />
      {data.length > 0 && <CertificateList certificates={data} />}
      <Experience />
    </>
  );
};

export default AboutMain;
