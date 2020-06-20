import React from 'react';
import { useFeedPostStyles } from '../../styles';
import UserCard from '../shared/UserCard';
import { MoreIcon, CommentIcon, ShareIcon } from '../../icons';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';

function FeedPost({ post }) {
  const classes = useFeedPostStyles();
  const [showCaption, setCaption] = React.useState(false);
  const { media, id, likes, user, caption } = post;

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
            {/* <LikeButton /> */}
            <Link to={`/p/${id}`}>
              <CommentIcon />
            </Link>
            <ShareIcon />
            {/* <SaveButton /> */}
          </div>
          <Typography className={classes.like} variant='subtitle2'>
            <span>{likes === 1 ? '1 like' : `${likes} likes`}</span>
          </Typography>
          <div className={showCaption ? classes.expanded : classes.collapsed}>
            <Link to={`/${user.username}`}>
              <Typography
                variant='subtitle2'
                component='span'
                className={classes.username}
              >
                {user.username}
              </Typography>
            </Link>
            {showCaption ? (
              <Typography
                variant='body2'
                component='span'
                dangerouslySetInnerHTML={{ __html: caption }}
              />
            ) : (
              <div className={classes.captionWrapper}>
                <HTMLEllipsis
                  unsafeHTML={caption}
                  className={classes.caption}
                  maxLine='0'
                  ellipsis='...'
                  basedOn='letters'
                />
                <Button
                  className={classes.moreButton}
                  onClick={() => setCaption(true)}
                >
                  more
                </Button>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
}

function LikeButton() {}

function SaveButton() {}

export default FeedPost;
