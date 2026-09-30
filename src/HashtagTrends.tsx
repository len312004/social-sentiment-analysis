import { useState } from 'react';
import { TrendingUp, TrendingDown, Hash, ArrowUpRight } from 'lucide-react';
import { Badge } from './components/ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';

interface HashtagData {
  id: number;
  hashtag: string;
  mentions: number;
  change: number;
  sentiment: 'positive' | 'negative' | 'neutral';
  platforms: string[];
  engagement: number;
}

const hashtagData: HashtagData[] = [
  {
    id: 1,
    hashtag: '#PhilippinesTech',
    mentions: 93900,
    change: 15.2,
    sentiment: 'positive',
    platforms: ['Facebook', 'Instagram', 'X'],
    engagement: 8.4
  },
  {
    id: 2,
    hashtag: '#Manila2024',
    mentions: 67800,
    change: 8.7,
    sentiment: 'positive',
    platforms: ['Instagram', 'X'],
    engagement: 6.2
  },
  {
    id: 3,
    hashtag: '#DigitalPH',
    mentions: 45600,
    change: -2.1,
    sentiment: 'neutral',
    platforms: ['Facebook', 'X'],
    engagement: 4.8
  },
  {
    id: 4,
    hashtag: '#Innovation',
    mentions: 38200,
    change: 12.4,
    sentiment: 'positive',
    platforms: ['Facebook', 'Instagram', 'X'],
    engagement: 7.1
  },
  {
    id: 5,
    hashtag: '#SocialMedia',
    mentions: 32100,
    change: 5.8,
    sentiment: 'positive',
    platforms: ['Instagram', 'X'],
    engagement: 5.9
  },
  {
    id: 6,
    hashtag: '#TrendingNow',
    mentions: 28900,
    change: -1.2,
    sentiment: 'neutral',
    platforms: ['X'],
    engagement: 3.4
  },
  {
    id: 7,
    hashtag: '#Filipino',
    mentions: 25700,
    change: 18.6,
    sentiment: 'positive',
    platforms: ['Facebook', 'Instagram'],
    engagement: 9.2
  },
  {
    id: 8,
    hashtag: '#Culture',
    mentions: 23200,
    change: 7.3,
    sentiment: 'positive',
    platforms: ['Instagram', 'X'],
    engagement: 6.7
  },
  {
    id: 9,
    hashtag: '#Business',
    mentions: 19800,
    change: -3.4,
    sentiment: 'neutral',
    platforms: ['Facebook', 'X'],
    engagement: 4.1
  },
  {
    id: 10,
    hashtag: '#Community',
    mentions: 15200,
    change: 22.1,
    sentiment: 'positive',
    platforms: ['Facebook', 'Instagram'],
    engagement: 8.8
  }
];

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case 'positive': return 'bg-green-100 text-green-800';
    case 'negative': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getPlatformColor = (platform: string) => {
  switch (platform) {
    case 'Facebook': return 'bg-blue-100 text-blue-800';
    case 'Instagram': return 'bg-pink-100 text-pink-800';
    case 'X': return 'bg-gray-100 text-gray-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export function HashtagTrends() {
  const [sortBy, setSortBy] = useState<string>('mentions');
  const [filterPlatform, setFilterPlatform] = useState<string>('all');
  const [selectedHashtag, setSelectedHashtag] = useState<string | null>(null);

  const handleHashtagClick = (hashtag: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(`Clicked hashtag: ${hashtag}`);
    setSelectedHashtag(hashtag);
    // Add a temporary alert to test if clicks are working
    alert(`Clicked on ${hashtag}!`);
    // You can add navigation logic here or emit an event
  };

  const filteredData = hashtagData
    .filter(item => filterPlatform === 'all' || item.platforms.includes(filterPlatform))
    .sort((a, b) => {
      switch (sortBy) {
        case 'mentions': return b.mentions - a.mentions;
        case 'change': return b.change - a.change;
        case 'engagement': return b.engagement - a.engagement;
        default: return b.mentions - a.mentions;
      }
    });

  // Calculate summary metrics
  const totalMentions = filteredData.reduce((sum, item) => sum + item.mentions, 0);
  const risingHashtags = filteredData.filter(item => item.change > 0).length;
  const avgEngagement = filteredData.reduce((sum, item) => sum + item.engagement, 0) / filteredData.length;
  const topGrowth = Math.max(...filteredData.map(item => item.change));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Trending Hashtags</h2>
        <p className="text-gray-600">Most mentioned hashtags and their engagement metrics</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40 bg-gray-100 border-gray-200">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mentions">Most Mentions</SelectItem>
              <SelectItem value="change">Rising</SelectItem>
              <SelectItem value="engagement">Engagement</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={filterPlatform} onValueChange={setFilterPlatform}>
            <SelectTrigger className="w-32 bg-gray-100 border-gray-200">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="Facebook">Facebook</SelectItem>
              <SelectItem value="Instagram">Instagram</SelectItem>
              <SelectItem value="X">X (Twitter)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button variant="outline" size="sm" className="bg-gray-100 border-gray-200 hover:bg-gray-200">
          <ArrowUpRight className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </div>

      {/* Hashtag Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <div 
            key={item.id}
            onClick={(e) => handleHashtagClick(item.hashtag, e)}
            className={`bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95 ${
              selectedHashtag === item.hashtag ? 'ring-2 ring-blue-500 border-blue-500 bg-blue-50' : ''
            }`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleHashtagClick(item.hashtag, e as any);
              }
            }}
          >
            {/* Header with hashtag and trend */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">{item.hashtag}</span>
                {selectedHashtag === item.hashtag && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
              <div className="flex items-center gap-1">
                {item.change > 0 ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
                <span className={`text-sm font-bold ${
                  item.change > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.change > 0 ? '+' : ''}{item.change}%
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Mentions</span>
                <span className="text-lg font-bold text-gray-900">
                  {item.mentions.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Engagement</span>
                <span className="text-lg font-bold text-gray-900">{item.engagement}%</span>
              </div>
            </div>

            {/* Sentiment Badge */}
            <div className="mb-4">
              <Badge 
                className={`text-xs px-2 py-1 rounded-full ${
                  item.sentiment === 'positive' 
                    ? 'bg-green-100 text-green-800' 
                    : item.sentiment === 'negative'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {item.sentiment}
              </Badge>
            </div>

            {/* Platform Pills */}
            <div className="flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
              {item.platforms.map((platform) => (
                <div key={platform} className="flex items-center gap-1">
                  <Badge 
                    className={`text-xs px-2 py-1 rounded-full ${getPlatformColor(platform)}`}
                  >
                    {platform}
                  </Badge>
                  <button 
                    className="text-gray-400 hover:text-gray-600 ml-1 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log(`Remove platform: ${platform}`);
                    }}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Trending Summary */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{totalMentions.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Mentions</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{risingHashtags}</p>
            <p className="text-sm text-gray-600">Rising Hashtags</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">{avgEngagement.toFixed(1)}%</p>
            <p className="text-sm text-gray-600">Avg Engagement</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">+{topGrowth.toFixed(1)}%</p>
            <p className="text-sm text-gray-600">Top Growth</p>
          </div>
        </div>
      </div>
    </div>
  );
}