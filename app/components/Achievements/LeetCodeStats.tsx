"use client"
import { useState, useEffect } from 'react';
import './LeetCodeStats.css';

interface LeetCodeUserData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
}

const LeetCodeStats = () => {
  const [leetCodeData, setLeetCodeData] = useState<LeetCodeUserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Replace with your LeetCode username
  const username = "v1pin";

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        setIsLoading(true);
        
        // Using the LeetCode GraphQL API endpoint
        const response = await fetch("https://leetcode-stats-api.herokuapp.com/" + username);
        
        if (!response.ok) {
          throw new Error("Failed to fetch LeetCode data");
        }
        
        const data = await response.json();
        
        // Map the API response to our interface
        const formattedData: LeetCodeUserData = {
          totalSolved: data.totalSolved,
          totalQuestions: data.totalQuestions,
          easySolved: data.easySolved,
          easyTotal: data.totalEasy,
          mediumSolved: data.mediumSolved,
          mediumTotal: data.totalMedium,
          hardSolved: data.hardSolved,
          hardTotal: data.totalHard,
          acceptanceRate: data.acceptanceRate || 0,
          ranking: data.ranking || 0,
          contributionPoints: data.contributionPoints || 0,
          reputation: data.reputation || 0
        };
        
        setLeetCodeData(formattedData);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching LeetCode data:", err);
        setError("Failed to load LeetCode statistics");
        setIsLoading(false);
        
        // Fallback to sample data in case of error
        setLeetCodeData({
          totalSolved: 387,
          totalQuestions: 2500,
          easySolved: 120,
          easyTotal: 600,
          mediumSolved: 210,
          mediumTotal: 1300,
          hardSolved: 57,
          hardTotal: 600,
          acceptanceRate: 67.2,
          ranking: 56842,
          contributionPoints: 150,
          reputation: 320
        });
      }
    };

    fetchLeetCodeData();
  }, [username]);

  const calculatePercentage = (solved: number, total: number): number => {
    return (solved / total) * 100;
  };

  if (isLoading) {
    return (
      <div className="leetcode-stats loading">
        <p>Loading LeetCode statistics...</p>
      </div>
    );
  }

  if (error || !leetCodeData) {
    return (
      <div className="leetcode-stats error">
        <p>{error || "Something went wrong"}</p>
      </div>
    );
  }

  return (
    <div className="leetcode-stats">
      <div className="leetcode-stats__overview">
        <div className="leetcode-stats__card total">
          <div className="leetcode-stats__number">{leetCodeData.totalSolved}</div>
          <div className="leetcode-stats__label">Problems Solved</div>
          <div className="leetcode-stats__progress-container">
            <div className="leetcode-stats__progress-bar">
              <div 
                className="leetcode-stats__progress" 
                style={{ width: `${calculatePercentage(leetCodeData.totalSolved, leetCodeData.totalQuestions)}%` }}
              ></div>
            </div>
            <div className="leetcode-stats__progress-text">
              {calculatePercentage(leetCodeData.totalSolved, leetCodeData.totalQuestions).toFixed(1)}%
            </div>
          </div>
        </div>

       
        
        <div className="leetcode-stats__card ranking">
          <div className="leetcode-stats__icon">
            <i className="fa-solid fa-ranking-star"></i>
          </div>
          <div className="leetcode-stats__info">
            <div className="leetcode-stats__number">{leetCodeData.ranking.toLocaleString()}</div>
            <div className="leetcode-stats__label">Global Ranking</div>
          </div>
        </div>
        
        <div className="leetcode-stats__card rating">
          <div className="leetcode-stats__icon">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <div className="leetcode-stats__info">
            <div className="leetcode-stats__number">{leetCodeData.contributionPoints}</div>
            <div className="leetcode-stats__label">Contribution Points</div>
          </div>
        </div>
      </div>
      
      <div className="leetcode-stats__breakdown">
        <div className="leetcode-stats__difficulty easy">
          <div className="leetcode-stats__difficulty-header">
            <span className="leetcode-stats__difficulty-name">Easy</span>
            <span className="leetcode-stats__difficulty-count">
              {leetCodeData.easySolved} / {leetCodeData.easyTotal}
            </span>
          </div>
          <div className="leetcode-stats__progress-bar">
            <div 
              className="leetcode-stats__progress leetcode-stats__progress--easy" 
              style={{ width: `${calculatePercentage(leetCodeData.easySolved, leetCodeData.easyTotal)}%` }}
            ></div>
          </div>
        </div>
        
        <div className="leetcode-stats__difficulty medium">
          <div className="leetcode-stats__difficulty-header">
            <span className="leetcode-stats__difficulty-name">Medium</span>
            <span className="leetcode-stats__difficulty-count">
              {leetCodeData.mediumSolved} / {leetCodeData.mediumTotal}
            </span>
          </div>
          <div className="leetcode-stats__progress-bar">
            <div 
              className="leetcode-stats__progress leetcode-stats__progress--medium" 
              style={{ width: `${calculatePercentage(leetCodeData.mediumSolved, leetCodeData.mediumTotal)}%` }}
            ></div>
          </div>
        </div>
        
        <div className="leetcode-stats__difficulty hard">
          <div className="leetcode-stats__difficulty-header">
            <span className="leetcode-stats__difficulty-name">Hard</span>
            <span className="leetcode-stats__difficulty-count">
              {leetCodeData.hardSolved} / {leetCodeData.hardTotal}
            </span>
          </div>
          <div className="leetcode-stats__progress-bar">
            <div 
              className="leetcode-stats__progress leetcode-stats__progress--hard" 
              style={{ width: `${calculatePercentage(leetCodeData.hardSolved, leetCodeData.hardTotal)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeStats;