/**
 * @packageDocumentation
 * @module std.internal
 */
export interface IPushBack<T> {
    /**
     * Insert an element at the end.
     *
     * @param val Value to insert.
     */
    push_back(val: T): void;
}
export declare namespace IPushBack {
    type ContainerType<Range extends IPushBack<any>> = Range extends IPushBack<any> ? Range : unknown;
    type IteratorType<Range extends IPushBack<any>> = Range extends IPushBack<infer Iterator> ? Iterator : unknown;
}
//# sourceMappingURL=IPushBack.d.ts.map