import { TrendingUp, TrendingDown, Facebook, Instagram, Twitter } from 'lucide-react';
import { Progress } from './ui/progress';

interface PlatformData {
  platform: string;
  mentions: number;
  sentiment: number;
  change: string;
}

interface PlatformOverviewProps {
  data: PlatformData[];
}

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'Facebook':
      return <Facebook className="h-8 w-8 text-blue-600" />;
    case 'Instagram':
      return <Instagram className="h-8 w-8 text-pink-600" />;
    case 'X (Twitter)':
      return <Twitter className="h-8 w-8 text-gray-700" />;
    default:
      return null;
  }
};

const getPlatformColor = (platform: string) => {
  switch (platform) {
    case 'Facebook':
      return 'from-blue-500 to-blue-600';
    case 'Instagram':
      return 'from-pink-500 to-purple-600';
    case 'X (Twitter)':
      return 'from-gray-600 to-gray-700';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

const getSentimentColor = (sentiment: number) => {
  if (sentiment >= 70) return 'text-green-600';
  if (sentiment >= 50) return 'text-yellow-600';
  return 'text-red-600';
};

export function PlatformOverview({ data }: PlatformOverviewProps) {
  const totalMentions = data.reduce((sum, platform) => sum + platform.mentions, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((platform) => {
        const isPositiveChange = platform.change.startsWith('+');
        const changeValue = platform.change.replace(/[+%]/g, '');
        const mentionPercentage = (platform.mentions / totalMentions) * 100;

        return (
          <div 
            key={platform.platform}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${getPlatformColor(platform.platform)}`}>
                  <div className="text-white">
                    {getPlatformIcon(platform.platform)}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{platform.platform}</h3>
                  <p className="text-sm text-gray-500">Social Media Platform</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                {isPositiveChange ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
                <span className={`text-sm font-medium ${
                  isPositiveChange ? 'text-green-600' : 'text-red-600'
                }`}>
                  {platform.change}
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-4">
              {/* Mentions */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Total Mentions</span>
                  <span className="font-semibold text-gray-900">
                    {platform.mentions.toLocaleString()}
                  </span>
                </div>
                <Progress value={mentionPercentage} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">
                  {mentionPercentage.toFixed(1)}% of total mentions
                </p>
              </div>

              {/* Sentiment */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Positive Sentiment</span>
                  <span className={`font-semibold ${getSentimentColor(platform.sentiment)}`}>
                    {platform.sentiment}%
                  </span>
                </div>
                <Progress 
                  value={platform.sentiment} 
                  className="h-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Performance Indicator */}
              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Performance</span>
                  <div className="flex items-center gap-2">
                    {platform.sentiment >= 70 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        Excellent
                      </span>
                    )}
                    {platform.sentiment >= 50 && platform.sentiment < 70 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                        Good
                      </span>
                    )}
                    {platform.sentiment < 50 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                        Needs Attention
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {Math.round(platform.mentions / 7).toLocaleString()}
                  </div>
                  <p className="text-xs text-gray-500">Daily Avg</p>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">
                    {Math.round((platform.mentions * platform.sentiment) / 100).toLocaleString()}
                  </div>
                  <p className="text-xs text-gray-500">Positive</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}