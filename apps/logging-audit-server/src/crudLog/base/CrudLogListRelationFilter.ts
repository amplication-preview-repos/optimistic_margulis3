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
import { CrudLogWhereInput } from "./CrudLogWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CrudLogListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CrudLogWhereInput,
  })
  @ValidateNested()
  @Type(() => CrudLogWhereInput)
  @IsOptional()
  @Field(() => CrudLogWhereInput, {
    nullable: true,
  })
  every?: CrudLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => CrudLogWhereInput,
  })
  @ValidateNested()
  @Type(() => CrudLogWhereInput)
  @IsOptional()
  @Field(() => CrudLogWhereInput, {
    nullable: true,
  })
  some?: CrudLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => CrudLogWhereInput,
  })
  @ValidateNested()
  @Type(() => CrudLogWhereInput)
  @IsOptional()
  @Field(() => CrudLogWhereInput, {
    nullable: true,
  })
  none?: CrudLogWhereInput;
}
export { CrudLogListRelationFilter as CrudLogListRelationFilter };