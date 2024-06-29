import * as graphql from "@nestjs/graphql";
import { CrudLogResolverBase } from "./base/crudLog.resolver.base";
import { CrudLog } from "./base/CrudLog";
import { CrudLogService } from "./crudLog.service";

@graphql.Resolver(() => CrudLog)
export class CrudLogResolver extends CrudLogResolverBase {
  constructor(protected readonly service: CrudLogService) {
    super(service);
  }
}
