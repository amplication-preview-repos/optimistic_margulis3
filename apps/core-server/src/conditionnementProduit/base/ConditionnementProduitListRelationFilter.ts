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
import { ConditionnementProduitWhereInput } from "./ConditionnementProduitWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ConditionnementProduitListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ConditionnementProduitWhereInput,
  })
  @ValidateNested()
  @Type(() => ConditionnementProduitWhereInput)
  @IsOptional()
  @Field(() => ConditionnementProduitWhereInput, {
    nullable: true,
  })
  every?: ConditionnementProduitWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConditionnementProduitWhereInput,
  })
  @ValidateNested()
  @Type(() => ConditionnementProduitWhereInput)
  @IsOptional()
  @Field(() => ConditionnementProduitWhereInput, {
    nullable: true,
  })
  some?: ConditionnementProduitWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConditionnementProduitWhereInput,
  })
  @ValidateNested()
  @Type(() => ConditionnementProduitWhereInput)
  @IsOptional()
  @Field(() => ConditionnementProduitWhereInput, {
    nullable: true,
  })
  none?: ConditionnementProduitWhereInput;
}
export { ConditionnementProduitListRelationFilter as ConditionnementProduitListRelationFilter };