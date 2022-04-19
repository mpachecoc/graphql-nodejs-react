import { Arg, Mutation, Query, Resolver } from "type-graphql";
import crypto from 'crypto'

import { User } from "../models/User";

@Resolver()
export class UserResolver {
  private data: User[] = []
  
  @Query(() => [User])
  async users() {
    return this.data
  }

  @Mutation(() => User)
  async createUser(
    @Arg('name') name: string
  ) {
    const user = { id: crypto.randomBytes(5).toString(), name }

    this.data.push(user)

    return user
  }
}