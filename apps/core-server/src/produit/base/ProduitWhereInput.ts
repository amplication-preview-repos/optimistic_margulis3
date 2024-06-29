/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JsonFilter } from "../../util/JsonFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { CategorieProduitWhereUniqueInput } from "../../categorieProduit/base/CategorieProduitWhereUniqueInput";
import { ConditionnementProduitWhereUniqueInput } from "../../conditionnementProduit/base/ConditionnementProduitWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class ProduitWhereInput {
  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  caracteristiques?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => CategorieProduitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategorieProduitWhereUniqueInput)
  @IsOptional()
  @Field(() => CategorieProduitWhereUniqueInput, {
    nullable: true,
  })
  categorieProduit?: CategorieProduitWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ConditionnementProduitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConditionnementProduitWhereUniqueInput)
  @IsOptional()
  @Field(() => ConditionnementProduitWhereUniqueInput, {
    nullable: true,
  })
  conditionnementProduit?: ConditionnementProduitWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  image?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  nom?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  nomenclature?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  referenceErp?: StringNullableFilter;
}

export { ProduitWhereInput as ProduitWhereInput };
