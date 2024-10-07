import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './sub.entity';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionRepository: Repository<Subscription>,
  ) {}

  findAll(): Promise<Subscription[]> {
    return this.subscriptionRepository.find();
  }

  findOne(id: number): Promise<Subscription> {
    return this.subscriptionRepository.findOne({ where: { id } });
  }

  create(user: Subscription): Promise<Subscription> {
    return this.subscriptionRepository.save(user);
  }

  async update(id: number, user: Partial<Subscription>): Promise<void> {
    await this.subscriptionRepository.update(id, user);
  }

  async remove(id: number): Promise<void> {
    await this.subscriptionRepository.delete(id);
  }
}
