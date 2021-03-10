import { Selector } from '@ngxs/store';

export class <%== classify(name)%>Selectors {
  @Selector([name])
  public static getItems({ items }: <%== classify(name)%>Model): Array<string>{
    return items;
  }
}
