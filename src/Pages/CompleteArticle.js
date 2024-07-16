import React, { useEffect } from 'react';
import img from '../Images/null images.jpg'; // Correct the path if needed
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedArticle } from '../Features/news/newsSlice'; // Assume there's an action for setting the selected article
import ClipLoader from 'react-spinners/ClipLoader';

const CompleteArticle = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Extract the id from URL using useParams
  const { articles, selectedArticle, loading } = useSelector(state => state.news);

  useEffect(() => {
    console.log(articles)
    if (articles.length > 0) {
      const article = articles.find(article => article.article_id === id);
      if (article) {
        dispatch(setSelectedArticle(article)); // Use an action to set the selected article
      }
    }
  }, [id]);

  // If selectedArticle is not found, return a loading or not found message
  if (!selectedArticle) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      <ClipLoader color="white" loading={loading} size={150} />
    </div>
    );
  }

  // Function to format pubDate if needed
  const formattedPubDate = new Date(selectedArticle.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });

  return (
    <div className="ArticlePage text-slate-300 min-h-screen p-5">
      <div className="container mx-auto max-w-screen-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">{selectedArticle.title}</h1>
        <div className="flex items-center justify-center mb-7 mt-5">
          <img
            src={selectedArticle.image_url ? selectedArticle.image_url : img}
            className="w-1/2 max-h-fit rounded shadow-lg object-contain"
            alt="Article"
          />
        </div>
        {selectedArticle.video_url && (
          <div className="flex items-center justify-center mb-7 mt-5">
            <video
              src={selectedArticle.video_url}
              className="w-1/2 h-96 md:h-1/6 rounded shadow-lg object-contain"
              controls
            />
          </div>
        )}

        <div className="p-6 rounded shadow-lg">
          <p className="mb-4 text-lg leading-relaxed">{selectedArticle.description}</p>
          <p className="text-gray-400 mb-4">{selectedArticle.content}</p>

          <p className="text-gray-400 mb-4">Published on: {formattedPubDate}</p>
          <p className="text-gray-400 mb-4">Source: <a href={selectedArticle.source_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">{selectedArticle.source_id}</a></p> 
           {/* Uncomment and use if needed */}
          {/* <p className="text-gray-400 mb-4">Author: {selectedArticle.creator.join(', ')}</p>
          <p className="text-gray-400 mb-4">Category: {selectedArticle.category.join(', ')}</p> */}
          {/* <a href={selectedArticle.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more</a> */}
         
        </div>
      </div>
    </div>
  );
};

export default CompleteArticle;
