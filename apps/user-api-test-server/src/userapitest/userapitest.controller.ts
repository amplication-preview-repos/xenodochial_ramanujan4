import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserApiTestService } from "./userapitest.service";

@swagger.ApiTags("userApiTests")
@common.Controller("userApiTests")
export class UserApiTestController {
  constructor(protected readonly service: UserApiTestService) {}
}
