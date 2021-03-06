// item.service.ts
import { Injectable } from "@nestjs/common";
import { Item } from "src/entities/item.entity";
import { Repository, InsertResult, UpdateResult, DeleteResult } from "typeorm"; // 編集！
import { InjectRepository } from "@nestjs/typeorm";
import { CreateItemDTO } from "./item.dto"; // 追記！

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>
  ) {}

  // テーブルの全データを取得する関数を定義
  async findAll(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  // テーブルにアイテムを追加する関数を定義
  async create(item: CreateItemDTO): Promise<InsertResult> {
    return await this.itemRepository.insert(item);
  }

  // idを指定してテーブルから1件のデータを取得する関数を定義
  async find(id: number): Promise<Item> | null {
    return await this.itemRepository.findOne({ id: id });
  }

  // idを指定してテーブルのデータを更新する関数を定義
  async update(id: number, item): Promise<UpdateResult> {
    return await this.itemRepository.update(id, item);
  }

  //  idを指定してテーブルのデータを削除する関数を定義
  async delete(id: number): Promise<DeleteResult> {
    return await this.itemRepository.delete(id);
  }
}
