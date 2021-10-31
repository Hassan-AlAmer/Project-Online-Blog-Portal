export const selectBlog = selectedBlog => {
    // Return an action
    return {
      type: "SELECT_BLOG",
      payload: { selectedBlog }
    };
  };
