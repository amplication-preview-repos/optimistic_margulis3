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
import { TemplateNotificationWhereInput } from "./TemplateNotificationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TemplateNotificationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TemplateNotificationWhereInput,
  })
  @ValidateNested()
  @Type(() => TemplateNotificationWhereInput)
  @IsOptional()
  @Field(() => TemplateNotificationWhereInput, {
    nullable: true,
  })
  every?: TemplateNotificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => TemplateNotificationWhereInput,
  })
  @ValidateNested()
  @Type(() => TemplateNotificationWhereInput)
  @IsOptional()
  @Field(() => TemplateNotificationWhereInput, {
    nullable: true,
  })
  some?: TemplateNotificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => TemplateNotificationWhereInput,
  })
  @ValidateNested()
  @Type(() => TemplateNotificationWhereInput)
  @IsOptional()
  @Field(() => TemplateNotificationWhereInput, {
    nullable: true,
  })
  none?: TemplateNotificationWhereInput;
}
export { TemplateNotificationListRelationFilter as TemplateNotificationListRelationFilter };
