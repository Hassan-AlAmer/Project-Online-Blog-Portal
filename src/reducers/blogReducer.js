const blogsReducer = (blogs = [], action) => {
    switch (action.type) {
      case "SET_BLOGS":
        return action.payload.blogs;
      case "ADD_BLOG":
        return [...blogs, action.payload.blog];
      case "REMOVE_BLOG":
        let newBlogs = [...blogs];
        newBlogs.splice(blogs.indexOf(action.payload.blog), 1);
        return newBlogs;
      default:
        return blogs;
    }
  };
  
  export default blogsReducer;
