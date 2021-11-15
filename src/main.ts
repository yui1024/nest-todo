// main.ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common"; // 追記！

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 以下追記！
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();