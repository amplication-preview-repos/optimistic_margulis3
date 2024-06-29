import { Module } from "@nestjs/common";
import { PointAchatModuleBase } from "./base/pointAchat.module.base";
import { PointAchatService } from "./pointAchat.service";
import { PointAchatController } from "./pointAchat.controller";
import { PointAchatResolver } from "./pointAchat.resolver";

@Module({
  imports: [PointAchatModuleBase],
  controllers: [PointAchatController],
  providers: [PointAchatService, PointAchatResolver],
  exports: [PointAchatService],
})
export class PointAchatModule {}
