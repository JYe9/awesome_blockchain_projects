import React from "react";

//INTERNAL IMPORT
import { MainImagePost } from "../MainBody/index";

const YourMedia = ({ AllAppPost, LIKE_POST }) => {
  return (
    <div class="main-content bg-white right-chat-active">
      <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left">
          <div class="row">
            <div class="col-xl-12 col-xxl-12 col-lg-12">
              <div class="row">
                {AllAppPost.map((post, index) => (
                  <>
                    {post.postType == "Image" && (
                      <MainImagePost LIKE_POST={LIKE_POST} post={post} />
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourMedia;
