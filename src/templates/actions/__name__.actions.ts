export namespace <%= classify(name) %>Actions {
    const prefix = '[<%= dasherize(name) %>] -';

    export class AddItem {
        public static readonly type = `${prefix} Add item`;
            constructor(public readonlye payload: string) { }
        }

    export class ResetState {
        public static readonly type = `${prefix} Reset state`;
    }
}


