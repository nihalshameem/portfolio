"use client";
import React, { FC, useEffect, useRef, useState } from "react";

import {
  CertificateDetailsInterface,
  errMessageIns,
  ProjectDetailsInterface,
} from "@/app/utils/commonUtils";
import { coreRequest } from "@/app/utils/coreRequest";
import ProjectPageHead from "@/app/projects/components/ProjectPageHead/ProjectPageHead.lazy";
import ProjectDetail from "@/app/projects/components/ProjectDetail/ProjectDetail";
import Image from "next/image";
import { imagePath } from "@/app/utils/config";
import Link from "next/link";

interface Props {
  slug: string;
}

const CertiDetails: FC<Props> = ({ slug }) => {
  const initialLoad = useRef<boolean>(true);
  const [data, setData] = useState<CertificateDetailsInterface | null>(null);

  useEffect(() => {
    if (initialLoad) {
      initialLoad.current = false;
      const fetchData = async () => {
        try {
          const response = await coreRequest("certificate/" + slug, "GET");
          setData(response.data);
        } catch (error) {
          console.log("🚀 ~ fetchData ~ error:", errMessageIns(error));
        }
      };

      // Call the fetch function
      fetchData();
    }
  }, [slug]);

  if (data) {
    return (
      <>
        <ProjectPageHead title={data.title} content={""} />
        <div className="certificate-details">
          <Image
            src={imagePath + data.image_path}
            alt="main"
            className="main-img"
            width={500}
            height={500}
          />
          <h4>Overview</h4>
          <ul className="overview">
            <li>
              <span> Certificate Name:</span> {data.title}
            </li>
            <li>
              <span> Earned On:</span> {data.earned_on}
            </li>
            {data.expiry_date && (
              <li>
                <span> Expires On:</span> {data.expiry_date}
              </li>
            )}
            <li>
              <span> Issuer:</span> {data.issuer}
            </li>
          </ul>
          <h4>Description</h4>
          <p className="content">{data.desc}</p>
          <h4>Refernce Links</h4>
          {data.certificate_link && data.certificate_link_text && (
            <Link href={data.certificate_link}>
              {data.certificate_link_text}
            </Link>
          )}
          <br />
          <Link href={imagePath + data.file_path} target="_blank">Download Certificate</Link>
        </div>
      </>
    );
  } else {
    return <div>Error fetching data</div>;
  }
};

export default CertiDetails;
