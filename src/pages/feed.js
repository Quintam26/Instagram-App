import React from "react";
import { useFeedPageStyles } from "../styles";
import Layout from '../components/shared/Layout';
import FeedPost from '../components/feed/FeedPost';
import { defaultPost } from '../data';

function FeedPage() {
  const classes = useFeedPageStyles();

  return <Layout>
    <div className={classes.container}>
      <div>
        {Array.from({ length: 5 }, () => defaultPost).map(post => (
          <FeedPost key={post.id} post={post}/>
        ))}
      </div>
    </div>
  </Layout>;
}

export default FeedPage;
