export enum ACTIONS_TYPE {
    INC = "INC",
    DEC = "DEC",
    RND = "RND",
}

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionsTypes = ReturnType<InferValueTypes<typeof actions>>;

export const actions = {
    inc: () => ({ type: ACTIONS_TYPE.INC as const }),
    dec: () => ({ type: ACTIONS_TYPE.DEC as const }),
    rnd: (value: number) => ({
        type: ACTIONS_TYPE.RND as const,
        payload: value,
    }),
};
