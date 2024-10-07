import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { Subscription } from './sub.entity';

@Controller('/subscriptions')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get()
  findAll() {
    return this.subscriptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionService.findOne(+id);
  }

  @Post()
  create(@Body() subscriptionData: Subscription) {
    return this.subscriptionService.create(subscriptionData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() subscriptionData: Partial<Subscription>) {
    return this.subscriptionService.update(+id, subscriptionData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionService.remove(+id);
  }
}
