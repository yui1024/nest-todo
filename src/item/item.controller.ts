// item.controller.ts
import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
  } from "@nestjs/common"; // 編集！
  import { ItemService } from "./item.service"; // 追記！
  import { Item } from "../entities/item.entity"; // 追記！
  import { CreateItemDTO } from "./item.dto"; // 追記！
  import { InsertResult, UpdateResult, DeleteResult } from "typeorm"; // 追記！
  
  @Controller("item")
  export class ItemController {
    // サービスの呼び出し
    constructor(private readonly service: ItemService) {}

    // `item`のURIへのGETメソッドでデータ全件取得．サービスの`findAll()`関数を実行．
  @Get()
  async getItemList(): Promise<Item[]> {
    return await this.service.findAll();
  }

  // `item`のURIへのPOSTメソッドでデータ新規登録．
  @Post()
  async addItem(@Body() item: CreateItemDTO): Promise<InsertResult> {
    return await this.service.create(item);
  }

  // `item/id番号`のURIへのGETメソッドでid指定で1件データ取得．
  @Get(":id")
  async getItem(@Param("id") id: string): Promise<Item> {
    return await this.service.find(Number(id));
  }
}

  