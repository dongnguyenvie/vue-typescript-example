import { Module, Action, Mutation, VuexModule } from 'vuex-module-decorators';
import { Text } from '../model';

@Module({
  namespaced: true,
})
class TextModule extends VuexModule {
  public text: Text | null = null;
  get getText() {
    return this.text;
  }
  @Mutation
  public setText(payload: Text) {
    this.text = payload;
  }

  @Action({ commit: 'setText' })
  public async loadText(quantity: number) {
    console.log('two quantity: ', quantity);
    const rs = await fetch(
      `https://baconipsum.com/api/?type=all-meat&paras=${quantity}&start-with-lorem=1&format=array`,
    );
    const text = await rs.json();
    return text;
  }
}

export default TextModule;
