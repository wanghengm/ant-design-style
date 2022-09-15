import "../_docs.less";

import { PlusOutlined, FormOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

import "../../space/index.less";

export default () => {
  return (
    <div>
      <div className="demo-inline">
        <Space>
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            大按钮
          </Button>
          <Button size="large" icon={<PlusOutlined />}>
            大按钮
          </Button>
          <Button size="large" icon={<PlusOutlined />} />

          <Button size="large" type="link" icon={<FormOutlined />} />
        </Space>
      </div>
      <div className="demo-inline">
        <Space>
          <Button type="primary" icon={<PlusOutlined />}>
            按钮
          </Button>
          <Button icon={<PlusOutlined />}>按钮</Button>
          <Button icon={<PlusOutlined />} />

          <Button type="link" icon={<FormOutlined />} />
        </Space>
      </div>
      <div className="demo-inline">
        <Space>
          <Button type="primary" size="small" icon={<PlusOutlined />}>
            小按钮
          </Button>
          <Button size="small" icon={<PlusOutlined />}>
            小按钮
          </Button>
          <Button size="small" icon={<PlusOutlined />} />

          <Button size="small" type="link" icon={<FormOutlined />} />
        </Space>
      </div>
    </div>
  );
};