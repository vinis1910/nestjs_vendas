import { UUID } from "crypto";

export class ListUsersDTO {
    constructor(readonly id: string, readonly name: string) {}
  }
  