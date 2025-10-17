import React from 'react';
import './Insights.css';

const Insights = () => {
  const articles = [
    {
      id: 1,
      title: "GPT-4o: A Promising Yet Familiar",
      excerpt: "Impressive Speech Synthesis: The quality of speech synthesis in GPT-4o is outstanding, reminiscent of Google Duplex, albeit with a more...",
      author: "Mark Tuchel",
      date: "Mar 1, 2025",
      readTime: "7 min read",
      backgroundImage: "/src/assets/images/gpt-4o-bg.png",
      category: "Article"
    },
    {
      id: 2,
      title: "Cheat Sheet for Best LLMS",
      excerpt: "#1 – Understand the Prompt Patterns Exciting news ahead! We've recognized a need for clarity in prompt engineering. With",
      author: "Mark Tuchel",
      date: "Mar 1, 2025",
      readTime: "7 min read",
      backgroundImage: "/src/assets/images/llms-bg.png",
      category: "Article"
    },
    {
      id: 3,
      title: "Enhancing Efficiency and Reducing Costs",
      excerpt: "Introduction: Retrieval-Augmented Generation (RAG) systems merge generative models with extensive knowledge",
      author: "Mark Tuchel",
      date: "Mar 1, 2025",
      readTime: "7 min read",
      backgroundImage: "/src/assets/images/rag-bg.png",
      category: "Article"
    },
    {
      id: 4,
      title: "Addressing AI Hallucinations: Ensuring Reliability",
      excerpt: "Introduction: Generative AI has ushered in transformative possibilities, but alongside its advancements lie the spectre of AI",
      author: "Mark Tuchel",
      date: "Mar 1, 2025",
      readTime: "7 min read",
      backgroundImage: "/src/assets/images/ai-hallucinations-bg.png",
      category: "Article"
    }
  ];

  const categories = [
    { name: "Article", active: true },
    { name: "Whitepaper", active: false },
    { name: "Webinar", active: false },
    { name: "Case Study", active: false }
  ];

  return (
    <section className="insights">
      {/* Background Effect */}
      <div className="insights-bg-effect"></div>
      
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Insights</h2>
            <div className="title-line"></div>
          </div>
          <p className="section-description">
            Fuel your strategy with expert analysis and the latest industry breakthroughs.
          </p>
          
          <div className="category-filters">
            {categories.map((category, index) => (
              <button key={index} className={`category-btn ${category.active ? 'active' : ''}`}>
                {category.name}
              </button>
            ))}
            <button className="see-all-btn">
              See All
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="articles-grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <div 
                className="article-bg"
                style={{ backgroundImage: `url(${article.backgroundImage})` }}
              ></div>
              <div className="article-content">
                <div className="article-meta">
                  <h3 className="article-title">{article.title}</h3>
                  <div className="article-info">
                    <div className="author-date">
                      <span className="date">{article.date}</span>
                      <span className="author">By {article.author}</span>
                    </div>
                  </div>
                </div>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-footer">
                  <span className="read-time">{article.readTime}</span>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="section-decoration"></div>
      </div>
    </section>
  );
};

export default Insights;
