import React from 'react';
import img from '../Images/null images.jpg';
import { useDispatch, useSelector } from 'react-redux';

const CompleteArticle = () => {
  const dispatch = useDispatch();
  const { selectedArticle } = useSelector(state => state.news);
    const article = {
        article_id: "965e53d84b64639de2cfe25edd1dfc25",
        title: "Ein besonderes Café in Nürnberg will das moderne Asien zeigen - abseits der Klischees",
        link: "https://www.nn.de/freizeit/essen-trinken/ein-besonderes-cafe-in-nurnberg-will-das-moderne-asien-zeigen-abseits-der-klischees-1.14305824",
        keywords: null,
        creator: ["marlene.weyerer@vnp.de (Marlene Weyerer)"],
        video_url: null,
        description: "Nürnberg - Grüne Kuchen, bunte Getränke: Das 'Tonkiner Café' in der Nürnberger Innenstadt ist eine Augenweide. Gleichzeitig will der Betreiber Duy Hoang aber mit seinen originellen Gerichten eine Brücke schlagen.",
        content: "Nürnberg - Grüne Kuchen, bunte Getränke: Das 'Tonkiner Café' in der Nürnberger Innenstadt ist eine Augenweide. Gleichzeitig will der Betreiber Duy Hoang aber mit seinen originellen Gerichten eine Brücke schlagen.",
        pubDate: "2024-06-18 09:00:00",
        image_url: "https://images.nordbayern.de/image/contentid/policy:1.13749822:1699019813/Hippel.jpg?f=1%3A1&h=640&m=FIT&w=640&$p$f$h$m$w=890ca97",
        source_id: "nn_de",
        source_priority: 2872166,
        source_url: "https://www.nn.de",
        source_icon: "https://i.bytvi.com/domain_icons/nn_de.png",
        language: "german",
        country: ["germany"],
        category: ["entertainment"],
        ai_tag: ["tourism"],
        ai_region: ["nuremberg,pennsylvania,united states of america,north america"],
        ai_org: null,
        sentiment: "neutral",
        sentiment_stats: {
            positive: 2.34,
            neutral: 97.37,
            negative: 0.29
        }
    };


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
                        className="w-1/2 h-96 md:h-1/6 rounded shadow-lg object-contain"
                        alt="Article"
                    />
                </div>
                {selectedArticle.video_url && (
                    <div className="flex items-center justify-center mb-7 mt-5">
                        <video
                            src={selectedArticle.video_url}
                            className="w-1/2 h-96 md:h-1/6 rounded shadow-lg object-contain"
                            alt="Article"
                        />
                    </div>
                )}

                <div className="p-6 rounded shadow-lg">
                    <p className="mb-4 text-lg leading-relaxed">{selectedArticle.description}</p>
                    <p className="text-gray-400 mb-4">{selectedArticle.content}</p>

                    <p className="text-gray-400 mb-4">Published on: {formattedPubDate}</p>
                    <p className="text-gray-400 mb-4">Source: <a href={selectedArticle.source_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">{selectedArticle.source_id}</a></p>
                    {/* <p className="text-gray-400 mb-4">Author: {selectedArticle.creator.join(', ')}</p>
                    <p className="text-gray-400 mb-4">Category: {selectedArticle.category.join(', ')}</p> */}
                    <a href={selectedArticle.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more</a>
                </div>
            </div>
        </div>
    );
}

export default CompleteArticle;
