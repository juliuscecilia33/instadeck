import React from "react";

import {
  Container,
  Top,
  Avatar,
  Username,
  Bottom,
  Stats,
  Stat,
  Totals,
  Total,
  Icon,
  Title,
  Post,
  Posts,
  Text,
} from "./styles/profile";

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.Top = function ProfileTop({ children, ...restProps }) {
  return <Top {...restProps}>{children}</Top>;
};

Profile.Avatar = function ProfileAvatar({ src, children, ...restProps }) {
  return (
    <Avatar {...restProps}>
      <img src={src} alt="User Profile" />
    </Avatar>
  );
};

Profile.Username = function ProfileUsername({ children, ...restProps }) {
  return <Username {...restProps}>{children}</Username>;
};

Profile.Stats = function ProfileStats({ children, ...restProps }) {
  return (
    <Stats {...restProps}>
      <Stat>
        <h3>{children}</h3>
        <p>Posts</p>
      </Stat>
      <Stat>
        <h3>--</h3>
        <p>Followers</p>
      </Stat>
      <Stat>
        <h3>--</h3>
        <p>Following</p>
      </Stat>
    </Stats>
  );
};

Profile.Totals = function ProfileTotals({ children, ...restProps }) {
  return (
    <Totals {...restProps}>
      <Total>
        <Icon>
          <i class="fas fa-heartbeat"></i>
        </Icon>
        <Text>
          <h3>{children}</h3>
          <p>Total Likes</p>
        </Text>
      </Total>
      <Total>
        <Icon>
          <i class="fas fa-comments"></i>
        </Icon>
        <Text>
          <h3>--</h3>
          <p>Total Comments</p>
        </Text>
      </Total>
    </Totals>
  );
};

Profile.Bottom = function ProfileBottom({ height, children, ...restProps }) {
  return (
    <Bottom height={height} {...restProps}>
      {children}
    </Bottom>
  );
};

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>Posts</Title>;
};

Profile.Posts = function ProfilePosts({ children, ...restProps }) {
  return <Posts {...restProps}>{children}</Posts>;
};

Profile.Post = function ProfilePost({
  updateDetail,
  postId,
  src,
  children,
  ...restProps
}) {
  return (
    <Post onClick={() => updateDetail(postId)} {...restProps}>
      <img src={src} alt="Post" />
    </Post>
  );
};
