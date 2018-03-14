import MyComp1 from './components/comp1';


const components = [
    MyComp1
  ];
  

  const install = Vue => {
    // 全局注册所有的组件
    components.map(component => {
      Vue.component(component.name, component);
      return component;
    });
  };

  
  export default {
    version: '0.0.1'
    , install
    , ...components
  };











