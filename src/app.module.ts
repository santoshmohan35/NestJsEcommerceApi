import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { CartService } from './modules/cart/cart.service';
import { CartModule } from './modules/cart/cart.module';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { OrdersModule } from './modules/orders/orders.module';
import { SharedModule } from './modules/shared/shared.module';
import { ProductsService } from './modules/products/products.service';
import { OrdersService } from './modules/orders/orders.service';
import { CheckoutService } from './modules/checkout/checkout.service';
import { UsersModule } from './modules/users/users.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProductsModule,
    CartModule,
    CheckoutModule,
    OrdersModule,
    SharedModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CartService,
    PrismaService,
    ProductsService,
    OrdersService,
    CheckoutService
  ],
})
export class AppModule { }
