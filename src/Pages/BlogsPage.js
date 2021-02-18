import React from "react";
import Title from "../Components/Title";
import AllBlogs from "../Components/AllBlogs";

function BlogsPage() {
  return (
    <div>
      <div className="b-title">
        <Title title={"Recent Blogs"} span={"Recent Blogs"} />
      </div>
      <div className="BlogsPage">
        {AllBlogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="" />
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogsPage;
