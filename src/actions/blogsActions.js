export const addBlog = blog => {
    return {
      type: "ADD_BLOG",
      payload: { blog }
    };
  };
  
  export const removeBlog = blog => {
    return {
      type: "REMOVE_BLOG",
      payload: { blog }
    };
  };
  
  export const setBlogs = blogs => {
    return {
      type: "SET_BLOGS",
      payload: { blogs }
    };
  };
