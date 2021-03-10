import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Injectable({
    providedIn: 'root'
})
export class <%== classify(name)%>Facade {

    @Select(<%== classify(name)%>Selectors.getItems)
    public getItems$: Observable<Array<string>>

    @Dispatch()
    public addItem(item: string): <%= classify(name)%>Actions.AddItem {
        return new <%= classify(name)%>Actions.AddItem(item);
    }

    @Dispatch()
    public resetState(): <%== classify(name)%>Actions.ResetState {
        return new <%== classify(name)%>Actions.ResetState();
    }
}
