export const CHANGE_NAME = "CHANGE_NAMGE";
export const CHANGE_AGE = "CHANG_AGE";

interface actionChangeName { 
  type: typeof CHANGE_NAME,
  payload: { name: string },
}

interface actionChangeAge {
  type: typeof CHANGE_AGE,
  payload: { age: number },
}

export function changeNameFn(name: string):actionChangeName {
  return {
    type: CHANGE_NAME,
    payload: { name }
  }
}

export function changeAgeFn(age: number):actionChangeAge {
  return {
    type: CHANGE_AGE,
    payload: { age }
  }
}

export type actionChangeInfo = actionChangeName | actionChangeAge;