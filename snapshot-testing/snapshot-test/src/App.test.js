import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'


describe("snapshot testing",()=>{
  
  test("snapshot for App component",()=>{

    const renderedcomponent = renderer.create(<App/>).toJSON();
    expect(renderedcomponent).toMatchSnapshot()


  })

})