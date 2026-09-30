import { useState } from 'react';
import { Heart, MessageCircle, Share2, ThumbsUp, ThumbsDown, Meh, MoreHorizontal, Calendar, Filter, Search } from 'lucide-react';
import { Badge } from './components/ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

interface FeedbackItem {
  id: number;
  channel: string;
  platform: string;
  mention: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  author: string;
  timestamp: string;
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
  reach: number;
  confidence: number;
}

const feedbackData: FeedbackItem[] = [
  {
    id: 1,
    channel: 'Twitter/X',
    platform: 'X',
    mention: "Nice product, easy to use! Highly recommend this to everyone looking for quality solutions. 👍 #TechPH",
    sentiment: 'positive',
    author: '@tech_enthusiast_ph',
    timestamp: '2024-09-10T14:30:00Z',
    engagement: { likes: 45, comments: 12, shares: 8 },
    reach: 2340,
    confidence: 94
  },
  {
    id: 2,
    channel: 'Instagram',
    platform: 'Instagram',
    mention: "Best quality product I've ever used!!! The design is amazing and functionality is top-notch. Will definitely buy again! ⭐⭐⭐⭐⭐",
    sentiment: 'positive',
    author: '@manila_lifestyle',
    timestamp: '2024-09-10T13:15:00Z',
    engagement: { likes: 156, comments: 28, shares: 15 },
    reach: 5670,
    confidence: 98
  },
  {
    id: 3,
    channel: 'Twitter/X',
    platform: 'X',
    mention: "My product malfunctioned within 10 mins of use, I want to exchange!! Very disappointed with the quality. Customer service needs improvement.",
    sentiment: 'negative',
    author: '@frustrated_user',
    timestamp: '2024-09-10T12:45:00Z',
    engagement: { likes: 23, comments: 45, shares: 12 },
    reach: 1890,
    confidence: 91
  },
  {
    id: 4,
    channel: 'Facebook',
    platform: 'Facebook',
    mention: "Okay product, nothing special but does the job. Price is reasonable for what you get. Could be improved in some areas.",
    sentiment: 'neutral',
    author: 'Juan Dela Cruz',
    timestamp: '2024-09-10T11:20:00Z',
    engagement: { likes: 12, comments: 6, shares: 2 },
    reach: 890,
    confidence: 87
  },
  {
    id: 5,
    channel: 'Instagram',
    platform: 'Instagram',
    mention: "Love this! Perfect for my daily needs. The customer support team was also very helpful when I had questions. 💕",
    sentiment: 'positive',
    author: '@cebu_blogger',
    timestamp: '2024-09-10T10:30:00Z',
    engagement: { likes: 89, comments: 15, shares: 7 },
    reach: 3450,
    confidence: 96
  },
  {
    id: 6,
    channel: 'Twitter/X',
    platform: 'X',
    mention: "Not sure if I like this or not. Some features are good, others need work. Maybe it's just not for me. 🤷‍♀️",
    sentiment: 'neutral',
    author: '@uncertain_buyer',
    timestamp: '2024-09-10T09:15:00Z',
    engagement: { likes: 8, comments: 18, shares: 3 },
    reach: 670,
    confidence: 82
  },
  {
    id: 7,
    channel: 'Facebook',
    platform: 'Facebook',
    mention: "Excellent service and product quality! Been using for 3 months now and still working perfectly. Highly recommended for Filipino families.",
    sentiment: 'positive',
    author: 'Maria Santos',
    timestamp: '2024-09-10T08:45:00Z',
    engagement: { likes: 67, comments: 22, shares: 11 },
    reach: 2780,
    confidence: 93
  },
  {
    id: 8,
    channel: 'Instagram',
    platform: 'Instagram',
    mention: "Poor experience overall. Product didn't match the description and shipping was delayed. Won't be ordering again. 😞",
    sentiment: 'negative',
    author: '@davao_shopper',
    timestamp: '2024-09-10T07:30:00Z',
    engagement: { likes: 34, comments: 56, shares: 18 },
    reach: 4230,
    confidence: 89
  }
];

const getSentimentIcon = (sentiment: string) => {
  switch (sentiment) {
    case 'positive': return <ThumbsUp className="h-4 w-4 text-green-600" />;
    case 'negative': return <ThumbsDown className="h-4 w-4 text-red-600" />;
    default: return <Meh className="h-4 w-4 text-gray-600" />;
  }
};

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

const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours}h ago`;
  if (diffInHours < 48) return 'Yesterday';
  return date.toLocaleDateString();
};

export function FeedbackTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('timestamp');
  const [filterSentiment, setFilterSentiment] = useState('all');
  const [filterPlatform, setFilterPlatform] = useState('all');

  const filteredData = feedbackData
    .filter(item => {
      const matchesSearch = item.mention.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSentiment = filterSentiment === 'all' || item.sentiment === filterSentiment;
      const matchesPlatform = filterPlatform === 'all' || item.platform === filterPlatform;
      
      return matchesSearch && matchesSentiment && matchesPlatform;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'timestamp': 
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        case 'engagement':
          const aEngagement = a.engagement.likes + a.engagement.comments + a.engagement.shares;
          const bEngagement = b.engagement.likes + b.engagement.comments + b.engagement.shares;
          return bEngagement - aEngagement;
        case 'reach':
          return b.reach - a.reach;
        case 'confidence':
          return b.confidence - a.confidence;
        default:
          return 0;
      }
    });

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search mentions or authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          
          <Select value={filterSentiment} onValueChange={setFilterSentiment}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sentiment</SelectItem>
              <SelectItem value="positive">Positive</SelectItem>
              <SelectItem value="negative">Negative</SelectItem>
              <SelectItem value="neutral">Neutral</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={filterPlatform} onValueChange={setFilterPlatform}>
            <SelectTrigger className="w-32">
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
        
        <div className="flex gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="timestamp">Most Recent</SelectItem>
              <SelectItem value="engagement">Most Engaging</SelectItem>
              <SelectItem value="reach">Highest Reach</SelectItem>
              <SelectItem value="confidence">Highest Confidence</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
        </div>
      </div>

      {/* Results Summary */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">{filteredData.length}</div>
            <p className="text-sm text-gray-600">Total Mentions</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {filteredData.filter(item => item.sentiment === 'positive').length}
            </div>
            <p className="text-sm text-gray-600">Positive</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-600">
              {filteredData.filter(item => item.sentiment === 'negative').length}
            </div>
            <p className="text-sm text-gray-600">Negative</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">
              {filteredData.reduce((sum, item) => sum + item.reach, 0).toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">Total Reach</p>
          </div>
        </div>
      </div>

      {/* Feedback Table */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">Platform</TableHead>
                <TableHead className="min-w-[400px]">Mention</TableHead>
                <TableHead className="w-24">Sentiment</TableHead>
                <TableHead className="w-32">Author</TableHead>
                <TableHead className="w-24">Time</TableHead>
                <TableHead className="w-32">Engagement</TableHead>
                <TableHead className="w-20">Reach</TableHead>
                <TableHead className="w-20">Confidence</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id} className="hover:bg-gray-50">
                  <TableCell>
                    <Badge className={getPlatformColor(item.platform)} variant="secondary">
                      {item.platform}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-[400px]">
                    <p className="text-sm line-clamp-3 leading-relaxed">{item.mention}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getSentimentIcon(item.sentiment)}
                      <Badge className={getSentimentColor(item.sentiment)} variant="secondary">
                        {item.sentiment}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium">{item.author}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-gray-600">
                      {formatTimestamp(item.timestamp)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3 text-red-500" />
                        <span>{item.engagement.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3 text-blue-500" />
                        <span>{item.engagement.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="h-3 w-3 text-green-500" />
                        <span>{item.engagement.shares}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium">{item.reach.toLocaleString()}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium">{item.confidence}%</div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem>Export</DropdownMenuItem>
                        <DropdownMenuItem>Mark as Important</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No mentions found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}