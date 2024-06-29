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
import { ConditionnementProduitWhereUniqueInput } from "./ConditionnementProduitWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ConditionnementProduitUpdateInput } from "./ConditionnementProduitUpdateInput";

@ArgsType()
class UpdateConditionnementProduitArgs {
  @ApiProperty({
    required: true,
    type: () => ConditionnementProduitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConditionnementProduitWhereUniqueInput)
  @Field(() => ConditionnementProduitWhereUniqueInput, { nullable: false })
  where!: ConditionnementProduitWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ConditionnementProduitUpdateInput,
  })
  @ValidateNested()
  @Type(() => ConditionnementProduitUpdateInput)
  @Field(() => ConditionnementProduitUpdateInput, { nullable: false })
  data!: ConditionnementProduitUpdateInput;
}

export { UpdateConditionnementProduitArgs as UpdateConditionnementProduitArgs };