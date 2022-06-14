import Button from "../Components/Button";
export default {
  title : "Button",
  component: Button
}

const Template = args => <Button {...args}/>

export const Base = Template.bind({});
Base.args = {
  useClass : 'base',
  label : 'Add Course',
  size : 'md'
}

export const Cancel = Template.bind({});
Cancel.args = {
  useClass : 'cancel',
  label : 'Cancel',
  size : 'md'
}
