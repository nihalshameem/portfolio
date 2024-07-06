import React, { FC, useState, useEffect } from "react";

import { ExperienceWrapper } from "./Experience.styled";

import { List, Timeline, Row, Col } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

interface ExperienceProps {}

interface TimelineItem {
  date: string;
  description: React.ReactNode;
  color?: string;
  dot?: React.ReactNode;
}

const Experience: FC<ExperienceProps> = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const timelineItems: TimelineItem[] = [
    {
      date: "2022-08-01",
      description: (
        <div className="timelines">
          <h4>Novac Technology Solutions</h4>
          <h5>Chennai — Senior Software Engineering</h5>
          <ul>
            <li>
              Lead developer for full-stack web applications, utilizing Node.js,
              Express.js, Laravel, MySQL, Lumen, and REST API.
            </li>
            <li>
              Design and implement RESTful APIs for seamless front-end to
              back-end communication.
            </li>
            <li>
              Manage and optimize MySQL databases for efficient data storage and
              retrieval.
            </li>
            <li>
              Collaborate with teams to analyze requirements and deliver
              high-quality software solutions.
            </li>
            <li>
              Actively participate in code reviews and continuous improvement
              initiatives.
            </li>
          </ul>
        </div>
      ),
      dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
    },
    {
      date: "2021-05-01",
      description: (
        <div className="timelines">
          <h4>Ellantec</h4>
          <h5>Tirunelveli — Software Developer</h5>
          <ul>
            <li>
              Proficient in Django, Laravel, REST API, React, MySQL, and
              MongoDB.
            </li>
            <li>
              Design and implement RESTful APIs for seamless front-end to
              back-end communication.
            </li>
            <li>
              Develop and maintain web applications utilizing diverse tech
              stack.
            </li>
            <li>Design and implement RESTful APIs for seamless integration.</li>
            <li>
              Manage both relational (MySQL) and NoSQL (MongoDB) databases.
            </li>
          </ul>
        </div>
      ),
      color: "red",
    },
    {
      date: "2020-03-01",
      description: (
        <div className="timelines">
          <h4>IT Flex Solutions</h4>
          <h5>Madurai — Frontend Developer</h5>
          <ul>
            <li>Proficient in HTML, CSS, JavaScript, PHP, and jQuery.</li>
            <li>
              Design and develop user-friendly interfaces and experiences.
            </li>
            <li>
              Implement dynamic and interactive features using JavaScript and
              jQuery.
            </li>
            <li>
              Collaborate with backend developers to integrate frontend with
              server-side logic.
            </li>
          </ul>
        </div>
      ),
      color: "red",
    },
    {
      date: "2019-01-01",
      description: (
        <div className="timelines">
          <h4>Wicmad Technologies</h4>
          <h5>Tirunelveli — Web Designer and developer</h5>
          <ul>
            <li>
              Proficient in HTML, CSS, JavaScript, PHP, Laravel, MySQL, and
              Illustrator.
            </li>
            <li>
              Create visually appealing and responsive web designs using HTML,
              CSS, and Illustrator.
            </li>
            <li>
              Develop interactive web applications with dynamic functionalities
              using JavaScript and PHP.
            </li>
            <li>
              Utilize Laravel framework for efficient backend development and
              MySQL for database management.
            </li>
          </ul>
        </div>
      ),
      color: "red",
    },
  ];

  const getYearDifference = (date1: string, date2: string) => {
    const year1 = new Date(date1).getFullYear();
    const year2 = new Date(date2).getFullYear();
    return Math.abs(year2 - year1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const timelineWithSpacing = timelineItems.map((item, index) => {
    const prevItem = timelineItems[index - 1];
    const yearDifference = prevItem
      ? getYearDifference(item.date, prevItem.date)
      : 0;
    const spacing = 20 + yearDifference * 20; // Base spacing + additional space per year difference

    return {
      key: index,
      color: item.color,
      dot: item.dot,
      children: (
        <div style={{ marginBottom: `${spacing}px` }}>
          <strong>{formatDate(item.date)}</strong>
          <br />
          {item.description}
        </div>
      ),
    };
  });

  return (
    <ExperienceWrapper>
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={18} xl={16}>
          <h4>Experience</h4>
          <Timeline
            mode={isSmallScreen ? "left" : "alternate"}
            items={timelineWithSpacing}
          />
        </Col>
      </Row>
    </ExperienceWrapper>
  );
};

export default Experience;
