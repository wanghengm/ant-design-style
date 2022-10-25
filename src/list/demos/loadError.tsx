import { Avatar, Divider, List, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import LoadingOutlined from '@sensoro-design/icons/LoadingOutlined';
import InfiniteScroll from 'react-infinite-scroll-component';
import { TagList } from '@lins-material/tag-list';
import { data as dataProp, data2 } from './data';
import './index.less';
enum LoadStatus { 
  LOADING = 'loading',
  LOAD_ERROR = 'loadErr',
}
const LoadErr = () => {
  const [loading, setLoading] = useState(false);
  const [loadStatus, setLoadStatus] = useState<LoadStatus>(LoadStatus.LOADING);
  const [data, setData] = useState<Array<any>>([...dataProp]);

  const loadMoreData2 = () => { // 模拟请求
    if (loading) {
      return;
    }
    new Promise(() => {
      setLoading(true);
      throw new Error('抛出错误')
    }).then(() => { 
      setLoading(false);
    }).catch((err) => { 
      console.log(err);
      setLoading(false);
      setTimeout(() => {
        setLoadStatus(LoadStatus.LOAD_ERROR);
      }, 2000)
    })
  };

  const onClick = () => { 
    loadMoreData2();
    setLoadStatus(LoadStatus.LOADING);
  }

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

  const renderLoader = () => { 
    return (
      <div className='loading-content' style={{ textAlign: 'center', padding: '24px' }}>
        {loadStatus === LoadStatus.LOAD_ERROR
          ? <div className='load-error'>加载失败，<Button onClick={onClick} type="link" block>重新加载</Button></div> : <>
            <span className='loading-content-icon'>
              <LoadingOutlined></LoadingOutlined>
            </span>
            <span className='loading-content-text'>加载中···</span>
          </>
        }
      </div>
    )
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
        hasMore={data.length < 50}
        loader={renderLoader()}
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

export default LoadErr;