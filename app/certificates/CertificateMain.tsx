"use client";
import React, { FC, useEffect, useRef, useState } from "react";

import CertificateList from "../about/components/CertificateList";

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

const CertificateMain: FC<Props> = ({ certificates }) => {
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
      <CertificateList certificates={data} />
    </>
  );
};

export default CertificateMain;
