import React from "react";
import { mapTime } from "../../mappers/mapTime";

import {
  Background,
  Container,
  Image,
  Caption,
  Comments,
  Comment,
  CommentBox,
  Icons,
  Icon,
  User,
  UserImage,
  ProfileData,
  TopProfile,
  ProfileImage,
  ProfileButtons,
  ProfileInput,
  InputStuff,
  UploadButton,
  ProfileProgress,
  DisplayName,
  Status,
  Stats,
  Stat,
  Statistics,
  Row,
  Item,
  SecondaryIcon,
  Number,
  Text,
  Suggestions,
  SuggestionsText,
  Top,
  Bottom,
  Heading,
  Posts,
  Post,
} from "./styles/detailed";

export default function Detailed({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Detailed.Container = function DetailedContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Detailed.Image = function DetailedImage({ src, children, ...restProps }) {
  return (
    <Image {...restProps}>
      <img src={src} alt="Detailed Post" />
    </Image>
  );
};

Detailed.Caption = function DetailedCaption({
  detailedCaption,
  detailedTime,
  children,
  ...restProps
}) {
  return (
    <Caption {...restProps}>
      <h3>{detailedCaption}</h3>
      <p>{mapTime(detailedTime.seconds)}</p>
    </Caption>
  );
};

Detailed.Comments = function DetailedComments({ children, ...restProps }) {
  return <Comments {...restProps}>{children}</Comments>;
};

Detailed.Comment = function DetailedComment({
  comment,
  children,
  ...restProps
}) {
  return (
    <Comment {...restProps}>
      <h3>{comment.username}</h3>
      <p>
        {comment.text} {children}
      </p>
    </Comment>
  );
};

Detailed.CommentBox = function DetailedCommentBox({
  comment,
  setComment,
  postComment,
  children,
  ...restProps
}) {
  return (
    <CommentBox {...restProps}>
      <input
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button disabled={!comment} type="submit" onClick={(e) => postComment(e)}>
        Post
      </button>
    </CommentBox>
  );
};

Detailed.Icons = function DetailedIcons({ children, ...restProps }) {
  return <Icons {...restProps}>{children}</Icons>;
};

Detailed.Icon = function DetailedIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Detailed.User = function DetailedUser({
  src,
  detailedUserPic,
  children,
  ...restProps
}) {
  return (
    <User {...restProps}>
      <UserImage>
        <img src={src} alt="User Profile Pic" />
      </UserImage>
      <h3>{children}</h3>
    </User>
  );
};

Detailed.ProfileData = function DetailedProfileData({
  children,
  ...restProps
}) {
  return <ProfileData {...restProps}>{children}</ProfileData>;
};

Detailed.TopProfile = function DetailedTopProfile({ children, ...restProps }) {
  return <TopProfile {...restProps}>{children}</TopProfile>;
};

Detailed.ProfileImage = function DetailedProfileImage({
  src,
  children,
  ...restProps
}) {
  return <ProfileImage src={src} alt="Avatar" {...restProps} />;
};

Detailed.ProfileInput = function DetailedProfileInput({
  children,
  ...restProps
}) {
  return <ProfileInput {...restProps}>{children}</ProfileInput>;
};

Detailed.ProfileButtons = function DetailedProfileButtons({
  children,
  ...restProps
}) {
  return <ProfileButtons {...restProps}>{children}</ProfileButtons>;
};

Detailed.InputStuff = function DetailedInputStuff({
  handleChange,
  children,
  ...restProps
}) {
  return (
    <InputStuff {...restProps}>
      <input
        type="file"
        name="file-2[]"
        id="file-2"
        data-multiple-caption="{count} files selected"
        multiple
        onChange={handleChange}
      />
      <label for="file-2">{children}</label>
    </InputStuff>
  );
};

Detailed.UploadButton = function DetailedUploadButton({
  image,
  handleUpload,
  children,
  ...restProps
}) {
  return (
    <UploadButton disabled={!image} onClick={handleUpload} {...restProps}>
      Upload
    </UploadButton>
  );
};

Detailed.ProfileProgress = function DetailedProfileProgress({
  progress,
  children,
  ...restProps
}) {
  return <ProfileProgress value={progress} max="100" {...restProps} />;
};

Detailed.DisplayName = function DetailedDisplayName({
  children,
  ...restProps
}) {
  return <DisplayName {...restProps}>{children}</DisplayName>;
};

Detailed.Status = function DetailedStatus({ children, ...restProps }) {
  return <Status {...restProps}>{children}</Status>;
};

Detailed.Stats = function DetailedStats({ children, ...restProps }) {
  return <Stats {...restProps}>{children}</Stats>;
};

Detailed.Stat = function DetailedStat({
  quantity,
  label,
  children,
  ...restProps
}) {
  return (
    <Stat {...restProps}>
      <h3>{quantity}</h3>
      <p>{label}</p>
    </Stat>
  );
};

Detailed.Statistics = function DetailedStatistics({ children, ...restProps }) {
  return <Statistics {...restProps}>{children}</Statistics>;
};

Detailed.Row = function DetailedRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Detailed.Item = function DetailedItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Detailed.SecondaryIcon = function DetailedSecondaryIcon({
  children,
  ...restProps
}) {
  return <SecondaryIcon {...restProps}>{children}</SecondaryIcon>;
};

Detailed.Number = function DetailedNumber({ number, children, ...restProps }) {
  return <Number {...restProps}>{number}</Number>;
};

Detailed.Text = function DetailedText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Detailed.Suggestions = function DetailedSuggestions({
  children,
  ...restProps
}) {
  return <Suggestions {...restProps}>{children}</Suggestions>;
};

Detailed.SuggestionsText = function DetailedSuggestionsText({
  children,
  ...restProps
}) {
  return (
    <SuggestionsText {...restProps}>
      <h2>Suggestions For You</h2>
      <h3>See All</h3>
    </SuggestionsText>
  );
};

Detailed.Top = function DetailedTop({ children, ...restProps }) {
  return <Top {...restProps}>{children}</Top>;
};

Detailed.Bottom = function DetailedBottom({ children, ...restProps }) {
  return <Bottom {...restProps}>{children}</Bottom>;
};

Detailed.Heading = function DetailedHeading({ children, ...restProps }) {
  return <Heading {...restProps}>Posts</Heading>;
};

Detailed.Posts = function DetailedPosts({ children, ...restProps }) {
  return <Posts {...restProps}>{children}</Posts>;
};

Detailed.Post = function DetailedPost({
  postId,
  updateDetail,
  src,
  children,
  ...restProps
}) {
  return (
    <Post onClick={() => updateDetail(postId)} {...restProps}>
      <img src={src} alt="Users Posts" />
    </Post>
  );
};
