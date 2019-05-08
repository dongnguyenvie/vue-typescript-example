import { Module, MutationAction, VuexModule } from 'vuex-module-decorators';
import { Text } from '../model';

@Module({
  namespaced: true,
})
class TextModule extends VuexModule {
  // public text: Text | null = null;
  public text: Text | string = 'This is default store text';
  get getText() {
    return this.text;
  }

  @MutationAction
  public async loadText(quantity: number) {
    console.log('quantity: ', quantity);
    const rs = await fetch(
      `https://baconipsum.com/api/?type=all-meat&paras=${quantity}&start-with-lorem=1&format=array`,
    );
    const text = await rs.json();
    return { text };
  }
}

export default TextModule;
