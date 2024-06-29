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
import { UtilisateurService } from "../utilisateur.service";
import { UtilisateurCreateInput } from "./UtilisateurCreateInput";
import { Utilisateur } from "./Utilisateur";
import { UtilisateurFindManyArgs } from "./UtilisateurFindManyArgs";
import { UtilisateurWhereUniqueInput } from "./UtilisateurWhereUniqueInput";
import { UtilisateurUpdateInput } from "./UtilisateurUpdateInput";

export class UtilisateurControllerBase {
  constructor(protected readonly service: UtilisateurService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Utilisateur })
  async createUtilisateur(
    @common.Body() data: UtilisateurCreateInput
  ): Promise<Utilisateur> {
    return await this.service.createUtilisateur({
      data: data,
      select: {
        adressesLivraison: true,
        compagnie: true,
        createdAt: true,
        email: true,
        id: true,
        motDePasse: true,
        nom: true,
        profil: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Utilisateur] })
  @ApiNestedQuery(UtilisateurFindManyArgs)
  async utilisateurs(@common.Req() request: Request): Promise<Utilisateur[]> {
    const args = plainToClass(UtilisateurFindManyArgs, request.query);
    return this.service.utilisateurs({
      ...args,
      select: {
        adressesLivraison: true,
        compagnie: true,
        createdAt: true,
        email: true,
        id: true,
        motDePasse: true,
        nom: true,
        profil: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Utilisateur })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async utilisateur(
    @common.Param() params: UtilisateurWhereUniqueInput
  ): Promise<Utilisateur | null> {
    const result = await this.service.utilisateur({
      where: params,
      select: {
        adressesLivraison: true,
        compagnie: true,
        createdAt: true,
        email: true,
        id: true,
        motDePasse: true,
        nom: true,
        profil: true,
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
  @swagger.ApiOkResponse({ type: Utilisateur })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUtilisateur(
    @common.Param() params: UtilisateurWhereUniqueInput,
    @common.Body() data: UtilisateurUpdateInput
  ): Promise<Utilisateur | null> {
    try {
      return await this.service.updateUtilisateur({
        where: params,
        data: data,
        select: {
          adressesLivraison: true,
          compagnie: true,
          createdAt: true,
          email: true,
          id: true,
          motDePasse: true,
          nom: true,
          profil: true,
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
  @swagger.ApiOkResponse({ type: Utilisateur })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUtilisateur(
    @common.Param() params: UtilisateurWhereUniqueInput
  ): Promise<Utilisateur | null> {
    try {
      return await this.service.deleteUtilisateur({
        where: params,
        select: {
          adressesLivraison: true,
          compagnie: true,
          createdAt: true,
          email: true,
          id: true,
          motDePasse: true,
          nom: true,
          profil: true,
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