import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Globe, Smartphone, Monitor } from "lucide-react"

const sourceData = [
  { name: "Newsletter", count: 1247, percentage: 36, color: "bg-primary" },
  { name: "Contact Form", count: 892, percentage: 26, color: "bg-chart-2" },
  { name: "Landing Page", count: 654, percentage: 19, color: "bg-chart-3" },
  { name: "Social Media", count: 428, percentage: 12, color: "bg-chart-4" },
  { name: "Direct", count: 200, percentage: 7, color: "bg-chart-5" },
]

const deviceData = [
  { name: "Desktop", percentage: 58, icon: Monitor },
  { name: "Mobile", percentage: 35, icon: Smartphone },
  { name: "Tablet", percentage: 7, icon: Globe },
]

const topCountries = [
  { name: "United States", count: 1247, flag: "🇺🇸" },
  { name: "United Kingdom", count: 892, flag: "🇬🇧" },
  { name: "Germany", count: 654, flag: "🇩🇪" },
  { name: "France", count: 428, flag: "🇫🇷" },
  { name: "Canada", count: 200, flag: "🇨🇦" },
]

export function EmailAnalytics() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Traffic Sources */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base">Traffic Sources</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4">
          {sourceData.map((source) => (
            <div key={source.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-medium text-foreground">{source.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs sm:text-sm text-muted-foreground">{source.count}</span>
                  <Badge variant="secondary" className="text-xs">
                    {source.percentage}%
                  </Badge>
                </div>
              </div>
              <Progress value={source.percentage} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Device Types */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground text-sm sm:text-base">Device Types</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4">
          {deviceData.map((device) => {
            const Icon = device.icon
            return (
              <div key={device.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">{device.name}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {device.percentage}%
                </Badge>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Top Countries */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center space-x-2">
            <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base">Top Countries</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 sm:space-y-3">
          {topCountries.map((country, index) => (
            <div key={country.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-3 min-w-0 flex-1">
                <span className="text-base sm:text-lg">{country.flag}</span>
                <span className="text-xs sm:text-sm font-medium text-foreground truncate">{country.name}</span>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0">
                <span className="text-xs sm:text-sm text-muted-foreground">{country.count}</span>
                <Badge variant="secondary" className="text-xs">
                  #{index + 1}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
