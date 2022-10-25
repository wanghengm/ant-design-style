import { Avatar, Divider, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import LoadingOutlined from '@sensoro-design/icons/LoadingOutlined';
import InfiniteScroll from 'react-infinite-scroll-component';
import { data as dataProp, data2 } from './data';
import { TagList } from '@lins-material/tag-list';
import './index.less';

const NoMore = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<any>>([...dataProp]);

  const loadMoreData2 = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    new Promise(() => { throw new Error('抛出错误')}).then(() => { 
    }).catch((err) => { 

    })
  };
  const renderDesc = (item: any) => { 
    return (
      <div className='ant-list-item-meta-description-subheading'>
        <div className='title'>
          <span>最近出现</span>
          <span className='desc'>{item.email}</span>
        </div>
        <div className='title'>
          <span>人物标签</span>
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
      id="scrollableDiv2"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData2}
        hasMore={data.length < 10}
        loader={
          <div className='loading-content'  style={{ textAlign: 'center', padding: '24px' }}>
            <span className='loading-content-icon'><LoadingOutlined></LoadingOutlined></span>
            <span className='loading-content-text'>加载中···</span>
          </div>
        }
        endMessage={<Divider plain>没有更多了</Divider>}
        scrollableTarget="scrollableDiv2"
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

export default NoMore;