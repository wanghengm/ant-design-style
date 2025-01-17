import { Row, Col, Timeline } from "antd";

export default () => {
  const label = (
    <div>
      <p className="ant-timeline-item-content-title">12-02</p>
      <p className="ant-timeline-item-content-text">16:01:56</p>
    </div>
  );

  return (
    <Row>
      <Col span={12}>
        <Timeline mode="left">
          <Timeline.Item color="gray" label="16:01:56">
            <p className="ant-timeline-item-content-title">这是一行标题文字</p>
            <p className="ant-timeline-item-content-text">这是一行描述文字</p>
          </Timeline.Item>
          <Timeline.Item color="gray" label="15:01:56">
            <p className="ant-timeline-item-content-title">这是一行标题文字</p>
            <p className="ant-timeline-item-content-text">这是一行描述文字</p>
          </Timeline.Item>
          <Timeline.Item color="gray" label="14:01:56">
            <p className="ant-timeline-item-content-title">这是一行标题文字</p>
            <p className="ant-timeline-item-content-text">这是一行描述文字</p>
          </Timeline.Item>
        </Timeline>
      </Col>
      <Col span={12}>
        <Timeline mode="left">
          <Timeline.Item color="gray" label={label}>
            <p className="ant-timeline-item-content-title">这是一行标题文字</p>
            <p className="ant-timeline-item-content-text">这是一行描述文字</p>
          </Timeline.Item>
          <Timeline.Item color="gray" label="15:01:56">
            <p className="ant-timeline-item-content-title">这是一行标题文字</p>
            <p className="ant-timeline-item-content-text">这是一行描述文字</p>
          </Timeline.Item>
          <Timeline.Item color="gray" label="14:01:56">
            <p className="ant-timeline-item-content-title">这是一行标题文字</p>
            <p className="ant-timeline-item-content-text">这是一行描述文字</p>
          </Timeline.Item>
        </Timeline>
      </Col>
    </Row>
  );
};
