import React, { FC } from "react";
import { CallToActionWrapper } from "./CallToAction.styled";
import Link from "next/link";
import { Space } from "antd";

interface CallToActionProps {}

const CallToAction: FC<CallToActionProps> = () => (
  <CallToActionWrapper align="center">
    <div>
      <h4>Call to Action</h4>
      <p>
        Interested in collaborating or hiring me? [
        <Link href={"/contact"}>Get in touch!</Link>]
      </p>
    </div>
  </CallToActionWrapper>
);

export default CallToAction;
