import { action } from "@storybook/addon-actions";
import CourseItem from "../Components/CourseItem";
export default {
  title : "Course",
  component: CourseItem,
  argTypes : {handleClick : {action : "course removed"}}
  
}

const Template = args => <CourseItem  {...args}/>

export const Unselected = Template.bind({});
Unselected.args = {
  name : 'Object Oriented Programming',
  isRequired : true
}