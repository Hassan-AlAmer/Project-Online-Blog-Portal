const selectedBlogReducer = (selectedBlog = null, action) => {
    switch (action.type) {
      case "SELECT_BLOG":
        return action.payload.selectedBlog;
      default:
        return selectedBlog;
    }
  };
  
  export default selectedBlogReducer;
