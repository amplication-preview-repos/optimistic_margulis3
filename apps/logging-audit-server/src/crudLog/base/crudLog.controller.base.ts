/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CrudLogService } from "../crudLog.service";
import { CrudLogCreateInput } from "./CrudLogCreateInput";
import { CrudLog } from "./CrudLog";
import { CrudLogFindManyArgs } from "./CrudLogFindManyArgs";
import { CrudLogWhereUniqueInput } from "./CrudLogWhereUniqueInput";
import { CrudLogUpdateInput } from "./CrudLogUpdateInput";

export class CrudLogControllerBase {
  constructor(protected readonly service: CrudLogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CrudLog })
  async createCrudLog(
    @common.Body() data: CrudLogCreateInput
  ): Promise<CrudLog> {
    return await this.service.createCrudLog({
      data: data,
      select: {
        action: true,
        createdAt: true,
        date: true,
        entite: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CrudLog] })
  @ApiNestedQuery(CrudLogFindManyArgs)
  async crudLogs(@common.Req() request: Request): Promise<CrudLog[]> {
    const args = plainToClass(CrudLogFindManyArgs, request.query);
    return this.service.crudLogs({
      ...args,
      select: {
        action: true,
        createdAt: true,
        date: true,
        entite: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CrudLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async crudLog(
    @common.Param() params: CrudLogWhereUniqueInput
  ): Promise<CrudLog | null> {
    const result = await this.service.crudLog({
      where: params,
      select: {
        action: true,
        createdAt: true,
        date: true,
        entite: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CrudLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCrudLog(
    @common.Param() params: CrudLogWhereUniqueInput,
    @common.Body() data: CrudLogUpdateInput
  ): Promise<CrudLog | null> {
    try {
      return await this.service.updateCrudLog({
        where: params,
        data: data,
        select: {
          action: true,
          createdAt: true,
          date: true,
          entite: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CrudLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCrudLog(
    @common.Param() params: CrudLogWhereUniqueInput
  ): Promise<CrudLog | null> {
    try {
      return await this.service.deleteCrudLog({
        where: params,
        select: {
          action: true,
          createdAt: true,
          date: true,
          entite: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
