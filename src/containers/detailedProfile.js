import React, { useContext, useEffect, useState } from "react";
import { Profile } from "../components";
import { ProfileContext } from "../context/profile";
import { DetailedContext } from "../context/detailed";
import { db } from "../firebase";

export function DetailedProfileContainer({ posts }) {
  const { profileData, profileText } = useContext(ProfileContext);
  const [profileUser, setProfileUser] = useState(null);
  const [profileUserPic, setProfileUserPic] = useState(null);
  const [setError] = useState("");
  const { setDetail, setSelectedDetail } = useContext(DetailedContext);

  const updateDetail = (postId) => {
    setDetail(true);
    setSelectedDetail(postId);
  };

  useEffect(() => {
    if (profileData) {
      db.collection("posts")
        .doc(profileData)
        .get()
        .then((doc) => {
          if (doc.exists) {
            let docData = doc.data();

            setProfileUser(docData.username);
            setProfileUserPic(docData.usernamepic);
            console.log(docData);
          } else {
            setError("doc not found");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
  }, [profileData, setError]);

  return (
    <>
      <Profile>
        <Profile.Top>
          <Profile.Avatar src={profileUserPic} />
          <Profile.Username>{profileUser}</Profile.Username>
          <Profile.Stats />
          <Profile.Totals />
        </Profile.Top>
        <Profile.Bottom>
          <Profile.Title />
          <Profile.Posts>
            {posts.map(({ id, post }) => {
              return (
                post.username === profileText && (
                  <Profile.Post
                    updateDetail={updateDetail}
                    postId={id}
                    src={post.imageUrl}
                  />
                )
              );
            })}
          </Profile.Posts>
        </Profile.Bottom>
      </Profile>
    </>
  );
}
