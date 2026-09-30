import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./components/ui/badge";


interface EngagementData {
  ageGroup: string;
  engagements: number;
  comments: number;
  shares: number;
  likes: number;
  platform: string;
  language: string;
}

const engagementData: EngagementData[] = [
  { ageGroup: '18-24', engagements: 1000, comments: 500, shares: 150, likes: 350, platform: 'Instagram', language: 'Filipino' },
  { ageGroup: '25-34', engagements: 3000, comments: 300, shares: 800, likes: 1900, platform: 'Facebook', language: 'English' },
  { ageGroup: '35-44', engagements: 4000, comments: 100, shares: 1200, likes: 2700, platform: 'Facebook', language: 'Filipino' },
  { ageGroup: '45-54', engagements: 2000, comments: 400, shares: 600, likes: 1000, platform: 'X', language: 'English' },
  { ageGroup: '55-65', engagements: 1000, comments: 300, shares: 200, likes: 500, platform: 'Facebook', language: 'Filipino' },
  { ageGroup: '65-70', engagements: 3000, comments: 150, shares: 900, likes: 1950, platform: 'Instagram', language: 'English' },
  { ageGroup: '70+', engagements: 1200, comments: 50, shares: 360, likes: 790, platform: 'Facebook', language: 'Filipino' }
];

const platformData = [
  { name: 'Facebook', value: 45, color: '#1877f2' },
  { name: 'Instagram', value: 32, color: '#e4405f' },
  { name: 'X (Twitter)', value: 23, color: '#1da1f2' }
];

const languageData = [
  { name: 'Filipino', value: 58, color: '#10b981' },
  { name: 'English', value: 42, color: '#3b82f6' }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-medium text-gray-900">{`Age Group: ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.dataKey}: ${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function EngagementMetrics() {


  const [filterAge, setFilterAge] = useState<string>('all');
  const [filterLanguage, setFilterLanguage] = useState<string>('all');
  const [filterPlatform, setFilterPlatform] = useState<string>('all');

  const filteredData = engagementData.filter(item => {
    return (filterAge === 'all' || item.ageGroup === filterAge) &&
           (filterLanguage === 'all' || item.language === filterLanguage) &&
           (filterPlatform === 'all' || item.platform === filterPlatform);
  });

  const chartData = filteredData.map(item => ({
    ageGroup: item.ageGroup,
    Engagements: item.engagements,
    Comments: item.comments,
    Shares: item.shares,
    Likes: item.likes
  }));

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex gap-2">
          <Select value={filterAge} onValueChange={setFilterAge}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Age Group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ages</SelectItem>
              <SelectItem value="18-24">18-24</SelectItem>
              <SelectItem value="25-34">25-34</SelectItem>
              <SelectItem value="35-44">35-44</SelectItem>
              <SelectItem value="45-54">45-54</SelectItem>
              <SelectItem value="55-65">55-65</SelectItem>
              <SelectItem value="65-70">65-70</SelectItem>
              <SelectItem value="70+">70+</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterLanguage} onValueChange={setFilterLanguage}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Languages</SelectItem>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Filipino">Filipino</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterPlatform} onValueChange={setFilterPlatform}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="Facebook">Facebook</SelectItem>
              <SelectItem value="Instagram">Instagram</SelectItem>
              <SelectItem value="X">X (Twitter)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
          <h4 className="font-medium text-gray-900 mb-4">Engagement by Age Group</h4>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="ageGroup" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="Engagements" fill="#3b82f6" name="Total Engagements" />
                <Bar dataKey="Comments" fill="#10b981" name="Comments" />
                <Bar dataKey="Shares" fill="#f59e0b" name="Shares" />
                <Bar dataKey="Likes" fill="#ef4444" name="Likes" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Charts */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h4 className="font-medium text-gray-900 mb-4">Platform Distribution</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1">
              {platformData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h4 className="font-medium text-gray-900 mb-4">Language Distribution</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {languageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1">
              {languageData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h4 className="font-medium text-gray-900">Detailed Breakdown</h4>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Age Group</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Language</TableHead>
                <TableHead className="text-right">Engagements</TableHead>
                <TableHead className="text-right">Comments</TableHead>
                <TableHead className="text-right">Shares</TableHead>
                <TableHead className="text-right">Likes</TableHead>
                <TableHead className="text-right">Engagement Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.ageGroup}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.platform}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{item.language}</Badge>
                  </TableCell>
                  <TableCell className="text-right">{item.engagements.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{item.comments.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{item.shares.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{item.likes.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    {((item.comments + item.shares + item.likes) / item.engagements * 100).toFixed(1)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}