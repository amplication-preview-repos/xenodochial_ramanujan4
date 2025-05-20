import * as graphql from "@nestjs/graphql";
import { UserApiTestService } from "./userapitest.service";

export class UserApiTestResolver {
  constructor(protected readonly service: UserApiTestService) {}
}
