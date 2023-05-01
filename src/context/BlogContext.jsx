import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

function BlogContext({ children }) {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetchData()
  }, []);
  const fetchData = async()=>{
    const APIKey = "d7c812e90d4d40149d505264a98aa773"
    const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-04-01&sortBy=publishedAt&apiKey=${APIKey}`)
    const responseData = await response.json()
    setPost(responseData.articles)
  }

  return <Context.Provider value={post}>{children}</Context.Provider>;
}

export default BlogContext;
