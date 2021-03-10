import { State, Selector, StateContext } from '@ngxs/store';

export interface <%= classify(name) %>StateModel {
    items: Array<string>;
}

const initialState: <%= classify(name) %>StateModel {
    items: []
}

@State<<%= classify(name) %>StateModel>({
    name: '<%= camelize(name) %>',
    defaults: initialState,
})
export class <%= classify(name) %>State {

    @Action(<%== classify(name)Actions.AddItem)
    public addItem(
        { patchState }: StateContext<<%= classify(name)%>StateModel>,
        { payload }: <%== classify(name)Actions.AddItem): void {

            patchState({
                items: [...items, payload ]
            });
    }

    @Action(<%== classify(name)Actions.ResetState)
    public resetState(
        { setState }: StateContext<<%= classify(name)%>StateModel>
    ): void {
        setState(initialState);
    }

}
