import React from 'react';
import { useFeedPostStyles } from '../../styles';
import UserCard from '../shared/UserCard';
import { MoreIcon, CommentIcon, ShareIcon } from '../../icons';
import { Link } from 'react-router-dom;'
import { Typography } from '@material-ui/core';

function FeedPost({ post }) {
  const classes = useFeedPostStyles();
  const { media, id, likes } = post;

  return (
    <>
      <article className={classes.article}>
        {/* Feed Post Header*/}
        <div className={classes.postHeader}>
          <UserCard />
          <MoreIcon className={classes.moreIcon} />
        </div>
        {/* Feed Post Image*/}
        <div>
          <img src={media} alt='Post media' className={classes.image} />
        </div>
        {/* Feed Post Buttons*/}
        <div className={classes.postButtonWrapper}>
        <div className={classes.postButtons}>
          <LikeButton />
          <Link to={`/p/${id}`}>
            <CommentIcon />
          </Link>
          <ShareIcon />
          <SaveButton />
        </div>
        <Typography className={classes.like} variant="subtitle2">
          <span></span>
        </Typography>
        </div>
      </article>
    </>
  );
}

function LikeButton() {

}

function SaveButton() {

}

export default FeedPost;
