'use server'

import { MOCK } from "./mock";

export async function login(data: any) {
  console.log({ data });
}

export async function search(payload: any) {
  console.log({ payload });
  return MOCK;
}
