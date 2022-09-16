import { CartModule } from './cart/cart.module';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { Product } from './models/product.entity';
import { ProductsService } from './models/products.service';
import { User } from './models/user.entity';
import { UsersService } from './models/users.service';
import { ProductsController } from './products.controller';
import { CartController } from './cart/cart.controller';
import { OrdersService } from './models/orders.service';
import { Order } from './models/order.entity';
import { AccountModule } from './account/account.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const settings = require('../ormconfig.json');

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(settings),
    TypeOrmModule.forFeature([Product, User, Order]),
    AdminModule,
    AuthModule,
    CartModule,
    AccountModule,
  ],
  controllers: [AppController, ProductsController, CartController],
  providers: [ProductsService, UsersService, OrdersService],
  exports: [ProductsService, UsersService, OrdersService],
})
export class AppModule {}
