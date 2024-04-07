import jasmine from 'jasmine';

export type SpyObj<T> = {
    [k in keyof T]: T[k] & jasmine.Spy;
}