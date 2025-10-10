import React from 'react';
import './InsightsGrid.css';

const InsightsGrid = () => {
  const articles = [
    {
      id: 1,
      title: "GPT-4o: A Promising Yet Familiar Evolution",
      description: "The quality of speech synthesis in GPT-4o is outstanding, reminiscent of Google Duplex, albeit with a more successful execution.",
      date: "12.08.2025",
      category: "Article",
      tag: "TECH",
      backgroundImage: "/src/assets/images/gpt4o-article-bg.png"
    },
    {
      id: 2,
      title: "Cheat Sheet for Best LLMS & Best Prompt Techniques",
      description: "Exciting news ahead! We've recognized a need for clarity in prompt engineering. With countless guides out there, it's easy to get lost in the...",
      date: "12.08.2025",
      category: "Whitepaper",
      tag: "TECH",
      backgroundImage: "/src/assets/images/llm-cheatsheet-bg.png"
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      description: "In a world where more people have a keen interest in artificial intelligence, we want to know what AI looks like in the real world...",
      date: "12.08.2025",
      category: "Casestudy",
      tag: "TECH",
      backgroundImage: "/src/assets/images/ai-case-study-bg.png"
    },
    {
      id: 4,
      title: "AI powered next gen industrial automation",
      description: "This episode features a compelling conversation with the leadership team of Ekfrazo Technologies, an AI-first...",
      date: "12.08.2025",
      category: "Webinar",
      tag: "AI",
      backgroundImage: "/src/assets/images/ai-automation-webinar-bg.png"
    },
    {
      id: 5,
      title: "Cheat Sheet for Best LLMS & Best Prompt Techniques",
      description: "Exciting news ahead! We've recognized a need for clarity in prompt engineering. With countless guides out there, it's easy to get lost in the...",
      date: "12.08.2025",
      category: "Webinar",
      tag: "AI",
      backgroundImage: "/src/assets/images/llm-techniques-webinar-bg-256347.png"
    },
    {
      id: 6,
      title: "Where the Next Era of AI is Designed",
      description: "In a world where more people have a keen interest in artificial intelligence, we want to know what AI looks like in the real world...",
      date: "12.08.2025",
      category: "Webinar",
      tag: "AI",
      backgroundImage: "/src/assets/images/next-era-ai-bg.png"
    }
  ];

  return (
    <div className="insights-grid">
      <div className="articles-grid">
        {/* First Row */}
        <div className="articles-row">
          {articles.slice(0, 3).map((article) => (
            <div key={article.id} className="article-card">
              <div 
                className="article-bg"
                style={{ backgroundImage: `url(${article.backgroundImage})` }}
              ></div>
              
              <div className="article-content">
                <div className="article-meta">
                  <span className="date">{article.date}</span>
                  <span className="separator">|</span>
                  <span className="category">{article.category}</span>
                  <span className="separator">|</span>
                  <span className="tag">{article.tag}</span>
                </div>
                
                <div className="article-text">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                </div>
                
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second Row */}
        <div className="articles-row">
          {articles.slice(3, 6).map((article) => (
            <div key={article.id} className="article-card">
              <div 
                className="article-bg"
                style={{ backgroundImage: `url(${article.backgroundImage})` }}
              ></div>
              
              <div className="article-content">
                <div className="article-meta">
                  <span className="date">{article.date}</span>
                  <span className="separator">|</span>
                  <span className="category">{article.category}</span>
                  <span className="separator">|</span>
                  <span className="tag">{article.tag}</span>
                </div>
                
                <div className="article-text">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                </div>
                
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsGrid;
