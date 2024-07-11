import Image from "next/image";
import React, { FC } from "react";

import { ProjectDetailWrapper } from "./ProjectDetail.styled";

import { Col, Row } from "antd";

interface ProjectDetailProps {}

const ProjectDetail: FC<ProjectDetailProps> = () => (
  <ProjectDetailWrapper>
    <Image
      src="/images/portfolio/main.png"
      alt="main"
      className="main-img"
      width={500}
      height={500}
    />
    <h4>Overview</h4>
    <ul className="overview">
      <li>
        <span> Project Name:</span> Responsive Portfolio Website
      </li>
      <li>
        <span> Technologies Used:</span> React, Next.js, TypeScript, Tailwind
        CSS
      </li>
      <li>
        <span> Duration:</span> 1 Months
      </li>
      <li>
        <span> Role:</span> Full-Stack Developer
      </li>
    </ul>
    <h4>Project Description</h4>
    <p className="content">
      The Responsive Portfolio Website is a modern and sleek platform designed
      to showcase my expertise in full-stack development. This project
      highlights my ability to create aesthetically pleasing and highly
      functional web applications. The primary goal was to build a responsive
      and user-friendly website that effectively presents my professional
      journey, skills, and portfolio of projects.
    </p>
    <h4>Features</h4>
    <ul className="overview">
      <li>
        <span>Responsive Design:</span> Ensures optimal viewing experience
        across all devices, including desktops, tablets, and mobile phones.{" "}
      </li>
      <li>
        <span>Dynamic Content: </span>Utilizes Next.js for server-side rendering
        and dynamic content generation, providing fast and efficient page
        loading.
      </li>
      <li>
        <span>Dark Mode Toggle:</span>Offers users the option to switch between
        light and dark modes, enhancing usability and personal preference.
      </li>
      <li>
        <span>Interactive Elements:</span>Includes animations and interactive
        components built with React to engage users.{" "}
      </li>
      <li>
        <span>Contact Form:</span>A functional contact form integrated with
        backend services to handle user inquiries.
      </li>
    </ul>
    <h4>Technical Details</h4>
    <ul className="overview">
      <li>
        <span>React & Next.js:</span> Leveraged the power of React for building
        dynamic UI components and Next.js for its robust framework capabilities,
        including server-side rendering and static site generation.
      </li>
      <li>
        <span>TypeScript:</span>Ensured type safety and improved code quality by
        using TypeScript, facilitating easier maintenance and scalability.
      </li>
      <li>
        <span>Tailwind CSS:</span>Employed Tailwind CSS for rapid and efficient
        styling, allowing for a highly customizable and responsive design.
      </li>
      <li>
        <span>Backend Integration:</span>Connected the contact form to a backend
        service (e.g., Node.js with Express) to handle form submissions and send
        email notifications.
      </li>
    </ul>
    <h4>Challenges and Solutions</h4>
    <ul className="overview">
      <li>
        <p>
          <span>Challenge:</span> Implementing responsive design across various
          devices and screen sizes.
        </p>
        <p>
          <span>Solution: </span> Used Tailwind CSS&apos;s responsive utility
          classes to build a fluid and adaptable layout, ensuring consistency
          and usability on all devices.
        </p>
      </li>
      <li>
        <p>
          <span>Challenge:</span> Ensuring optimal performance and fast page
          load times.
        </p>
        <p>
          <span>Solution: </span> Utilized Next.js&apos;s server-side rendering
          and static site generation features to pre-render pages and reduce the
          load on client-side rendering, resulting in faster load times and
          better SEO.
        </p>
      </li>
      <li>
        <p>
          <span>Challenge:</span> Handling CORS issues when calling the contact
          me form API.
        </p>
        <p>
          <span>Solution: </span> Encountered CORS issues when trying to call
          the contact me form API. Resolved this by configuring the Laravel
          package to allow requests from the specific origin, ensuring secure
          and seamless API communication.
        </p>
      </li>
      <li>
        <p>
          <span>Challenge:</span> Hosting limitations with Node.js applications.
        </p>
        <p>
          <span>Solution: </span> The hosting platform initially purchased did
          not support Node.js applications. To overcome this, the site was
          converted to a static website. Additionally, an API subdomain was
          created using Laravel 9 to handle contact form submissions, ensuring
          seamless functionality while adhering to hosting constraints.
        </p>
      </li>
    </ul>
    <h4>Outcome</h4>
    <p className="content">
      The project was a success, achieving its goal of creating a visually
      appealing and functional portfolio website. It effectively showcases my
      skills and projects, providing a professional online presence. The website
      has received positive feedback for its design, usability, and
      responsiveness.
    </p>
    <h4>Screenshots</h4>
    <h5>
      1. <span>Homepage: </span> A welcoming introduction with a brief overview
      and links to various sections of the portfolio.
    </h5>
    <Row gutter={[50, 24]} justify="center">
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <div className="image-container">
          <Image
            src="/images/portfolio/main.png"
            alt="extra1"
            className="extra-img"
            width={500}
            height={500}
          />
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <div className="image-container">
          <Image
            src="/images/portfolio/homepagedark.png"
            alt="extra2"
            className="extra-img"
            width={500}
            height={500}
          />
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <div className="image-container">
          <Image
            src="/images/portfolio/aboutpage.png"
            alt="extra2"
            className="extra-img"
            width={500}
            height={500}
          />
        </div>
      </Col>
    </Row>
    <h5>
      2. <span>Projects Section: </span> Detailed view of individual projects
      with descriptions, technologies used, and visual representations.
    </h5>
    <Row gutter={[50, 24]} justify="center">
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <div className="image-container">
          <Image
            src="/images/portfolio/projectpage.png"
            alt="extra1"
            className="extra-img"
            width={500}
            height={500}
          />
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <div className="image-container">
          <Image
            src="/images/portfolio/projectdetails.png"
            alt="extra1"
            className="extra-img"
            width={500}
            height={500}
          />
        </div>
      </Col>
    </Row>
    <h5>
      3. <span>Contact Page: </span> A straightforward contact form for
      potential clients or employers to reach out.
    </h5>
    <Row gutter={[50, 24]} justify="center">
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
        <div className="image-container">
          <Image
            src="/images/portfolio/contactpage.png"
            alt="extra1"
            className="extra-img"
            width={500}
            height={500}
          />
        </div>
      </Col>
    </Row>
    <h4>Conclusion</h4>
    <p className="content">
      This project demonstrates my ability to design and develop full-stack web
      applications using modern technologies. It highlights my proficiency in
      React, Next.js, TypeScript, and Tailwind CSS, as well as my attention to
      detail in creating responsive and user-friendly web applications.
    </p>
  </ProjectDetailWrapper>
);

export default ProjectDetail;
