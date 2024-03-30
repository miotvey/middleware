import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './logger/logger.middleware';
import { ExampleController } from './example.controller'; // Импорт контроллера

@Module({
  imports: [],
  controllers: [ExampleController], // Добавление контроллера
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
