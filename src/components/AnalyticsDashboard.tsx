import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const AnalyticsDashboard = () => {
  const stats = [
    {
      title: 'Всего диалогов',
      value: '2,847',
      change: '+12%',
      icon: 'MessageSquare',
      positive: true
    },
    {
      title: 'Успешных решений',
      value: '92%',
      change: '+3%',
      icon: 'CheckCircle',
      positive: true
    },
    {
      title: 'Среднее время ответа',
      value: '1.2с',
      change: '-8%',
      icon: 'Clock',
      positive: true
    },
    {
      title: 'Активных пользователей',
      value: '1,234',
      change: '+15%',
      icon: 'Users',
      positive: true
    }
  ];

  const chatTopics = [
    { topic: 'Техническая поддержка', count: 245, percentage: 65 },
    { topic: 'Вопросы по продукту', count: 89, percentage: 23 },
    { topic: 'Биллинг', count: 34, percentage: 9 },
    { topic: 'Другое', count: 12, percentage: 3 }
  ];

  const weeklyData = [
    { day: 'Пн', conversations: 320 },
    { day: 'Вт', conversations: 450 },
    { day: 'Ср', conversations: 380 },
    { day: 'Чт', conversations: 520 },
    { day: 'Пт', conversations: 610 },
    { day: 'Сб', conversations: 280 },
    { day: 'Вс', conversations: 190 }
  ];

  const maxConversations = Math.max(...weeklyData.map(d => d.conversations));

  return (
    <div className="space-y-6">
      {/* Основная статистика */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="animate-fade-in">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon 
                    name={stat.icon as any} 
                    size={16} 
                    className="text-primary" 
                  />
                  <span className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </span>
                </div>
                <Badge 
                  variant={stat.positive ? "default" : "secondary"}
                  className="text-xs"
                >
                  {stat.change}
                </Badge>
              </div>
              <div className="mt-2">
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* График активности по дням */}
        <Card className="animate-slide-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="BarChart3" size={20} />
              Активность по дням недели
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((data) => (
                <div key={data.day} className="flex items-center gap-4">
                  <div className="w-8 text-sm font-medium text-muted-foreground">
                    {data.day}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${(data.conversations / maxConversations) * 100}%` 
                          }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-12">
                        {data.conversations}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Темы обращений */}
        <Card className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="PieChart" size={20} />
              Популярные темы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {chatTopics.map((topic, index) => (
                <div key={topic.topic} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{topic.topic}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {topic.count}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {topic.percentage}%
                      </Badge>
                    </div>
                  </div>
                  <Progress 
                    value={topic.percentage} 
                    className="h-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Метрики эффективности */}
      <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Target" size={20} />
            Метрики эффективности
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">98.5%</div>
              <div className="text-sm text-muted-foreground">Точность ответов</div>
              <Progress value={98.5} className="h-1" />
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">4.8/5</div>
              <div className="text-sm text-muted-foreground">Оценка пользователей</div>
              <Progress value={96} className="h-1" />
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">87%</div>
              <div className="text-sm text-muted-foreground">Автономное решение</div>
              <Progress value={87} className="h-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;