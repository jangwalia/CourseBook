import { action } from "@storybook/addon-actions";
import Button from "../Components/Button";
export default {
  title : "Button",
  component: Button,
  argTypes : {handleClick : {action : "button Clicked"}}
  
}

const Template1 = args => <Button  {...args}/>


export const Base = Template1.bind({});
Base.args = {
  useClass : 'base',
  label : 'Add Course',
  size : 'md'
 
 
}

export const Cancel = Template1.bind({});
Cancel.args = {
  useClass : 'cancel',
  label : 'Cancel',
  size : 'md'
}

export const Disabled = Template1.bind({});
Disabled.args = {
  useClass : 'disabled',
  label : 'No Text',
  size : 'md'
}

