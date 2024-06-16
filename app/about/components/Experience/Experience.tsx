import React, { FC } from "react";

import { ExperienceWrapper } from "./Experience.styled";

import { List, Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

interface ExperienceProps {}

interface TimelineItem {
  date: string;
  description: React.ReactNode;
  color?: string;
  dot?: React.ReactNode;
}

const Experience: FC<ExperienceProps> = () => {
  const timelineItems: TimelineItem[] = [
    {
      date: "2022-08-01",
      description: (
        <div className="timelines">
          <h4>Novac Technology Solutions</h4>
          <h5>Chennai — Senior Software Engineering</h5>
          <List>
            <List.Item>
              Lead developer for full-stack web applications, utilizing Node.js,
              Express.js, Laravel, MySQL, Lumen, and REST API.
            </List.Item>
            <List.Item>
              Design and implement RESTful APIs for seamless front-end to
              back-end communication.
            </List.Item>
            <List.Item>
              Manage and optimize MySQL databases for efficient data storage and
              retrieval.
            </List.Item>
            <List.Item>
              Collaborate with teams to analyze requirements and deliver
              high-quality software solutions.
            </List.Item>
            <List.Item>
              Actively participate in code reviews and continuous improvement
              initiatives.
            </List.Item>
          </List>
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
          <List>
            <List.Item>
              Proficient in Django, Laravel, REST API, React, MySQL, and
              MongoDB.
            </List.Item>
            <List.Item>
              Design and implement RESTful APIs for seamless front-end to
              back-end communication.
            </List.Item>
            <List.Item>
              Develop and maintain web applications utilizing diverse tech
              stack.
            </List.Item>
            <List.Item>
              Develop and maintain web applications utilizing diverse tech
              stack.
            </List.Item>
            <List.Item>
              Develop and maintain web applications utilizing diverse tech
              stack.
            </List.Item>
            <List.Item>
              Design and implement RESTful APIs for seamless integration.
            </List.Item>
            <List.Item>
              Manage both relational (MySQL) and NoSQL (MongoDB) databases.
            </List.Item>
          </List>
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
          <List>
            <List.Item>
              Proficient in HTML, CSS, JavaScript, PHP, and jQuery.
            </List.Item>
            <List.Item>
              Design and develop user-friendly interfaces and experiences.
            </List.Item>
            <List.Item>
              Implement dynamic and interactive features using JavaScript and
              jQuery.
            </List.Item>
            <List.Item>
              Collaborate with backend developers to integrate frontend with
              server-side logic.
            </List.Item>
          </List>
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
          <List>
            <List.Item>
              Proficient in HTML, CSS, JavaScript, PHP, Laravel, MySQL, and
              Illustrator.
            </List.Item>
            <List.Item>
              Create visually appealing and responsive web designs using HTML,
              CSS, and Illustrator.
            </List.Item>
            <List.Item>
              Develop interactive web applications with dynamic functionalities
              using JavaScript and PHP.
            </List.Item>
            <List.Item>
              Utilize Laravel framework for efficient backend development and
              MySQL for database management.
            </List.Item>
            <List.Item></List.Item>
          </List>
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

    return (
      <Timeline.Item
        key={index}
        color={item.color}
        dot={item.dot}
        style={{ marginBottom: `${spacing}px` }}
      >
        <strong>{formatDate(item.date)}</strong>
        <br />
        {item.description}
      </Timeline.Item>
    );
  });
  return (
    <ExperienceWrapper>
      <h4>Experience</h4>
      <Timeline mode="alternate">{timelineWithSpacing}</Timeline>
    </ExperienceWrapper>
  );
};

export default Experience;
