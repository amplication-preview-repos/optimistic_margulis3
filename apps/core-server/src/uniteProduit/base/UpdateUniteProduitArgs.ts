/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UniteProduitWhereUniqueInput } from "./UniteProduitWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UniteProduitUpdateInput } from "./UniteProduitUpdateInput";

@ArgsType()
class UpdateUniteProduitArgs {
  @ApiProperty({
    required: true,
    type: () => UniteProduitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UniteProduitWhereUniqueInput)
  @Field(() => UniteProduitWhereUniqueInput, { nullable: false })
  where!: UniteProduitWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UniteProduitUpdateInput,
  })
  @ValidateNested()
  @Type(() => UniteProduitUpdateInput)
  @Field(() => UniteProduitUpdateInput, { nullable: false })
  data!: UniteProduitUpdateInput;
}

export { UpdateUniteProduitArgs as UpdateUniteProduitArgs };
