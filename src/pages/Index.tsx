import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ChatBot from '@/components/ChatBot';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('demo');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Bot" size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">AI CHATBOT</h1>
                <p className="text-sm text-muted-foreground">Умный помощник с аналитикой</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Система активна</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Intro Section */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight">
              Демонстрация AI-чатбота
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Интеллектуальная система с полной аналитикой диалогов и метриками эффективности. 
              Минималистичный дизайн, максимальная функциональность.
            </p>
          </div>

          {/* Navigation Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="demo" className="flex items-center gap-2">
                <Icon name="MessageSquare" size={16} />
                Демо чат
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2">
                <Icon name="BarChart3" size={16} />
                Аналитика
              </TabsTrigger>
            </TabsList>

            {/* Demo Chat Tab */}
            <TabsContent value="demo" className="mt-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chat Interface */}
                <div className="lg:col-span-2">
                  <ChatBot />
                </div>
                
                {/* Features Sidebar */}
                <div className="space-y-4">
                  <Card className="animate-slide-in">
                    <CardHeader>
                      <CardTitle className="text-lg">Возможности</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Icon name="Zap" size={16} className="text-primary mt-1" />
                        <div>
                          <h4 className="font-medium">Быстрые ответы</h4>
                          <p className="text-sm text-muted-foreground">Мгновенная обработка запросов</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Brain" size={16} className="text-primary mt-1" />
                        <div>
                          <h4 className="font-medium">ИИ-анализ</h4>
                          <p className="text-sm text-muted-foreground">Глубокое понимание контекста</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Shield" size={16} className="text-primary mt-1" />
                        <div>
                          <h4 className="font-medium">Безопасность</h4>
                          <p className="text-sm text-muted-foreground">Защищенные данные пользователей</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
                    <CardHeader>
                      <CardTitle className="text-lg">Статистика сеанса</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Сообщений отправлено</span>
                        <span className="font-medium">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Время сеанса</span>
                        <span className="font-medium">3:45</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Точность ответов</span>
                        <span className="font-medium text-primary">98%</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="mt-8">
              <AnalyticsDashboard />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Bot" size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">
                AI Chatbot Dashboard © 2024
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Github" size={16} className="mr-2" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="FileText" size={16} className="mr-2" />
                Документация
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;