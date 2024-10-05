// TS4.0+
type Push<T extends readonly any[], V> = [...T, V];
type ReadonlyTuple<T> = Extract<Readonly<T>, readonly any[]>;

interface TupleBuilderAddable<U, T extends readonly any[]> {
    add<V extends U>(v: V): [U] extends [V] ?
        TupleBuilderBuildable<ReadonlyTuple<Push<T, V>>> :
        TupleBuilderAddable<Exclude<U, V>, ReadonlyTuple<Push<T, V>>>;
}
interface TupleBuilderBuildable<T extends readonly any[]> {
    build(): T;
}
function tupleBuilder<U>():
    [U] extends [never] ?
    TupleBuilderBuildable<[]> :
    TupleBuilderAddable<U, []> {
    const tuple: any[] = [];
    const ret = {
        add(v: any) {
            tuple.push(v);
            return ret;
        },
        build() {
            return tuple;
        }
    }
    return ret as any;
}

export default tupleBuilder