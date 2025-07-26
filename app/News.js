import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const newsArticles = [
  {
    id: 1,
    headline: "Major expansion to Google's Asia market",
    description: "Google announced a major push into the Asian mobile market.",
    affects: 'googleValue',
    impact: 30
  },
  {
    id: 2,
    headline: "Tesla announces breakthrough in battery tech",
    description: "New battery could increase range by 30%.",
    affects: 'teslaValue',
    impact: 45
  },
  {
    id: 3,
    headline: "Stock trading games deemed waste of time",
    description: "Study finds no link between trading simulators and real financial literacy.",
    affects: null
  },
  {
    id: 4,
    headline: "Apple hit by class-action lawsuit",
    description: "Users accuse Apple of planned obsolescence.",
    affects: 'appleValue',
    impact: -15
  },
  {
    id: 5,
    headline: "Amazon opens 100th robotic warehouse",
    description: "Efficiency at Amazon hits record highs.",
    affects: 'amazonValue',
    impact: 18
  },
  {
    id: 6,
    headline: "Berkshire Hathaway increases energy sector investments",
    description: "Warren Buffett bets on renewables.",
    affects: 'bhValue',
    impact: 30
  },
  {
    id: 7,
    headline: "Remote work reduces tech hiring",
    description: "Major tech firms pause hiring due to remote shift.",
    affects: null
  },
  {
    id: 8,
    headline: "Tech sector sees all-time high investments",
    description: "VC funding triples compared to last quarter.",
    affects: null
  },
  {
    id: 9,
    headline: "Google fined for privacy violations",
    description: "EU hits Google with record-breaking fine.",
    affects: 'googleValue',
    impact: -25
  },
  {
    id: 10,
    headline: "Tesla recalls 100,000 vehicles",
    description: "Software glitch discovered in self-driving system.",
    affects: 'teslaValue',
    impact: -35
  },
  {
    id: 11,
    headline: "Apple launches new AR headset",
    description: "Early reviews praise Apple's entry into augmented reality.",
    affects: 'appleValue',
    impact: 22
  },
  {
    id: 12,
    headline: "Amazon faces worker strike in Europe",
    description: "Warehouse employees protest working conditions.",
    affects: 'amazonValue',
    impact: -20
  },
  {
    id: 13,
    headline: "Berkshire Hathaway misses earnings target",
    description: "Investments underperform in energy sector.",
    affects: 'bhValue',
    impact: -10
  },
  {
    id: 14,
    headline: "Google's AI search passes beta stage",
    description: "New search tool promises better accuracy.",
    affects: 'googleValue',
    impact: 20
  },
  {
    id: 15,
    headline: "Tesla partners with solar company",
    description: "Joint venture aims to build solar-powered superchargers.",
    affects: 'teslaValue',
    impact: 25
  },
  {
    id: 16,
    headline: "Apple's iPhone 16 sales exceed expectations",
    description: "Strong demand reported in Asia and Europe.",
    affects: 'appleValue',
    impact: 28
  },
  {
    id: 17,
    headline: "Amazon drone delivery hits FAA milestone",
    description: "New regulatory approval for large-scale rollout.",
    affects: 'amazonValue',
    impact: 20
  },
  {
    id: 18,
    headline: "Berkshire Hathaway acquires midwestern utility",
    description: "Energy diversification expands reach.",
    affects: 'bhValue',
    impact: 12
  },
  {
    id: 19,
    headline: "Tech conference showcases startup boom",
    description: "Startups pitch AI, biotech, and fintech innovations.",
    affects: null
  },
  {
    id: 20,
    headline: "Google faces internal revolt over AI ethics",
    description: "Employees protest military contract.",
    affects: 'googleValue',
    impact: -10
  },
  {
    id: 21,
    headline: "Tesla's Cybertruck delayed again",
    description: "Production pushed back due to supply chain issues.",
    affects: 'teslaValue',
    impact: -20
  },
  {
    id: 22,
    headline: "Apple wins patent lawsuit",
    description: "Competitor ordered to pay damages.",
    affects: 'appleValue',
    impact: 15
  },
  {
    id: 23,
    headline: "Amazon stock upgraded by major analyst",
    description: "New price target boosts investor confidence.",
    affects: 'amazonValue',
    impact: 10
  },
  {
    id: 24,
    headline: "Berkshire Hathaway holds annual shareholder meeting",
    description: "Buffett remains bullish despite market volatility.",
    affects: 'bhValue',
    impact: 5
  },
  {
    id: 25,
    headline: "AI job displacement fears rise",
    description: "Report shows sharp drop in entry-level tech roles.",
    affects: null
  },
  {
    id: 26,
    headline: "Google Cloud signs major healthcare deal",
    description: "AI to improve diagnostics in hospitals.",
    affects: 'googleValue',
    impact: 17
  },
  {
    id: 27,
    headline: "Tesla opens factory in India",
    description: "First deliveries expected next year.",
    affects: 'teslaValue',
    impact: 30
  },
  {
    id: 28,
    headline: "Apple's App Store policy under investigation",
    description: "Antitrust regulators eye monopolistic practices.",
    affects: 'appleValue',
    impact: -18
  },
  {
    id: 29,
    headline: "Amazon Prime price hike draws criticism",
    description: "Subscribers voice frustration over new fees.",
    affects: 'amazonValue',
    impact: -12
  },
  {
    id: 30,
    headline: "Berkshire Hathaway praised for climate disclosure",
    description: "Environmental groups applaud transparency.",
    affects: 'bhValue',
    impact: 8
  },
  {
    id: 31,
    headline: "Tech stocks rally after interest rate freeze",
    description: "Fed decision boosts market optimism.",
    affects: null
  },
  {
    id: 32,
    headline: "Google reveals new quantum computing chip",
    description: "Promises exponential speed increases.",
    affects: 'googleValue',
    impact: 35
  },
  {
    id: 33,
    headline: "Tesla sued over autopilot crash",
    description: "Family demands accountability.",
    affects: 'teslaValue',
    impact: -28
  },
  {
    id: 34,
    headline: "Apple expands repair program",
    description: "More parts and tools now available to consumers.",
    affects: 'appleValue',
    impact: 12
  },
  {
    id: 35,
    headline: "Amazon acquires grocery startup",
    description: "Move strengthens food delivery ecosystem.",
    affects: 'amazonValue',
    impact: 14
  },
  {
    id: 36,
    headline: "Berkshire Hathaway divests coal holdings",
    description: "Shift toward cleaner energy continues.",
    affects: 'bhValue',
    impact: 10
  },
  {
    id: 37,
    headline: "Crypto regulation bill passes",
    description: "Tech firms brace for new compliance requirements.",
    affects: null
  },
  {
    id: 38,
    headline: "Google Assistant to support 50 languages",
    description: "Localization improves market penetration.",
    affects: 'googleValue',
    impact: 10
  },
  {
    id: 39,
    headline: "Tesla invests in solid-state battery startup",
    description: "Long-term strategy aims to eliminate lithium shortages.",
    affects: 'teslaValue',
    impact: 15
  },
  {
    id: 40,
    headline: "Apple announces carbon-neutral goal by 2030",
    description: "Bold move earns praise from environmental groups.",
    affects: 'appleValue',
    impact: 20
  }
];

export default function News(props) {
  const [visibleArticles, setVisibleArticles] = useState([]);
  const historyRef = useRef([]);

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  const updateStock = (key, change) => {
    const setter = props[`set${capitalize(key)}`];
    if (typeof setter === 'function') {
      setter(prev => prev + change);
    }
  };

  const getNextArticle = () => {
    const recent = historyRef.current.slice(-5).map(a => a.id);
    const eligible = newsArticles.filter(article => !recent.includes(article.id));
    const pool = eligible.length > 0 ? eligible : newsArticles;

    const next = pool[Math.floor(Math.random() * pool.length)];
    historyRef.current.push(next);
    return next;
  };

  useEffect(() => {
    // Initialize 3 articles
    const initialArticles = [];
    for (let i = 0; i < 3; i++) {
      const next = getNextArticle();
      initialArticles.push(next);
    }
    setVisibleArticles(initialArticles);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextArticle = getNextArticle();

      if (nextArticle.affects && nextArticle.impact) {
        updateStock(nextArticle.affects, nextArticle.impact);
      }

      setVisibleArticles(prev => [...prev.slice(1), nextArticle]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderImpactTag = (impact) => {
    const isPositive = impact > 0;
    return (
      <Text style={[styles.impactTag, { color: isPositive ? 'green' : 'red' }]}>
        {isPositive ? '📈 +' : '📉 '}{impact}
      </Text>
    );
  };

  return (
    <View style={styles.wrapper}>
      {visibleArticles.map((article, index) => {
        const hasImpact = article.affects && article.impact !== 0;
        const impactPositive = hasImpact && article.impact > 0;

        return (
          <View
            key={index}
            style={[
              styles.article,
              hasImpact && {
                borderColor: impactPositive ? 'green' : 'red',
                backgroundColor: impactPositive ? '#e6ffef' : '#ffe6e6',
              }
            ]}
          >
            <Text style={styles.headline}>{article.headline}</Text>
            <Text style={styles.description}>{article.description}</Text>
            {hasImpact && renderImpactTag(article.impact)}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    alignItems: 'center',
    width: 300
  },
  article: {
    padding: 12,
    marginVertical: 5,
    width: '90%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1
  },
  headline: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    marginTop: 4
  },
  impactTag: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: '600'
  }
});
