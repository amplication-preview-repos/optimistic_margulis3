/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import {
  IsOptional,
  ValidateNested,
  IsDate,
  IsString,
  MaxLength,
} from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { CategorieProduit } from "../../categorieProduit/base/CategorieProduit";
import { Type } from "class-transformer";
import { ConditionnementProduit } from "../../conditionnementProduit/base/ConditionnementProduit";

@ObjectType()
class Produit {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  caracteristiques!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => CategorieProduit,
  })
  @ValidateNested()
  @Type(() => CategorieProduit)
  @IsOptional()
  categorieProduit?: CategorieProduit | null;

  @ApiProperty({
    required: false,
    type: () => ConditionnementProduit,
  })
  @ValidateNested()
  @Type(() => ConditionnementProduit)
  @IsOptional()
  conditionnementProduit?: ConditionnementProduit | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  image!: JsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nom!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nomenclature!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  referenceErp!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Produit as Produit };