import { Module } from "@nestjs/common";
import { UserApiTestService } from "./userapitest.service";
import { UserApiTestController } from "./userapitest.controller";
import { UserApiTestResolver } from "./userapitest.resolver";

@Module({
  controllers: [UserApiTestController],
  providers: [UserApiTestService, UserApiTestResolver],
  exports: [UserApiTestService],
})
export class UserApiTestModule {}
