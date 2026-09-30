import { Card, CardContent } from "./ui/card";

interface HashtagTrendsProps {
  searchTopic: string;
}

export function HashtagTrends({ searchTopic }: HashtagTrendsProps) {
  // Simulated hashtag dataset
  const allHashtags = [
    { tag: "#technology", count: 2100 },
    { tag: "#news", count: 1800 },
    { tag: "#borongan", count: 470 },
    { tag: "#education", count: 830 },
    { tag: "#philippines", count: 1500 },
    { tag: "#smartcity", count: 680 },
    { tag: "#ai", count: 2400 },
  ];

  // Filter using searchTopic from Dashboard
  const filtered = searchTopic.trim()
    ? allHashtags.filter(h =>
        h.tag.toLowerCase().includes(searchTopic.toLowerCase())
      )
    : allHashtags;

  return (
    <div className="space-y-4">
      {filtered.length === 0 ? (
        <p className="text-sm text-gray-600">No hashtags found for "{searchTopic}".</p>
      ) : (
        filtered.map((h) => (
          <Card key={h.tag}>
            <CardContent className="py-3 flex justify-between">
              <span className="font-medium">{h.tag}</span>
              <span className="text-gray-600">{h.count} mentions</span>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
