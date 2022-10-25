import { Avatar, Divider, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import LoadingOutlined from '@sensoro-design/icons/LoadingOutlined';
import InfiniteScroll from 'react-infinite-scroll-component';
import { data as dataProp, data2 } from './data';
import { TagList } from '@lins-material/tag-list';
import './index.less';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<any>>([...dataProp]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setData([...data, ...data2])
     }, 2000)
  };
  const renderDesc = (item: any) => { 
    return (
      <div className='ant-list-item-meta-description-subheading'>
        <div className='title'>
          <span>最近出现</span>
          <span className='desc'>{item.email}</span>
        </div>
        <div className='title'>
          <div>人物标签</div>
          <div className='desc'>
            <TagList
              max={3}
              list={[
                { text: 'tag1' },
                { text: 'tag2' },
                { text: 'tag3' },
                { text: 'tag4' },
              ]}
            />
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    // loadMoreData();
  }, []);
  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={
          <div className='loading-content'>
            <span className='loading-content-icon'><LoadingOutlined></LoadingOutlined></span>
            <span className='loading-content-text'>加载中···</span>
          </div>
          // <Skeleton
          //   avatar
          //   paragraph={{
          //     rows: 1,
          //   }}
          //   active
          // />
        }
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={renderDesc(item)}
              />
              {/* <div>Content</div> */}
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default App;