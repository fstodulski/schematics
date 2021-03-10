import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { <%= classify(name)Facade%> } from './<%= dasherize(name) %>.facade';
import { <%= classify(name) %>State, <%= classify(name) %>StateModel } from './<%= dasherize(name) %>.state';

describe('<%= classify(name) %> state', () => {
    let store: Store;
    let facade: <%= classify(name)Facade%>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([<%= classify(name) %>State])],
            providers: [<%= classify(name)Facade%>]
        }).compileComponents();

        facade  = new <%= classify(name)Facade%>();
        store = TestBed.get(Store);
    }));

    it('should create an empty state', () => {
        const actual = store.selectSnapshot(<%= classify(name) %>State.getState);
        const expected: <%= classify(name) %>StateModel = {
            items: []
        };
        expect(actual).toEqual(expected);
    });

    it('should add item', () => {
        const actual = store.selectSnapshot(<%= classify(name) %>State.getState);

        facade.addItem('John Dogg');

        const expected: <%= classify(name) %>StateModel = {
            items: ['John Dogg']
        };


    })

});
