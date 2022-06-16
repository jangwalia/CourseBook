import { action } from "@storybook/addon-actions";
import CourseList from "../Components/CourseItem";
const coursesList = [
  {id : 1, name : "Object Oriented Programming", isRequired : true},
  {id : 2, name : "React", isRequired : true},
  {id : 3, name : "C++", isRequired : true}
]

export default {
  title : "Courses",
  component: CourseList,
  argTypes : {handleClick : {action : "course removed"}}
  
  
}

const Template = args => <CourseList  {...args}/>

export const FirstCourse = Template.bind({});
FirstCourse.args = {
  name : 'Object Oriented Programming',
  isRequired : true,
  courses  : coursesList
  
}
export const SecondCourse = Template.bind({});
SecondCourse.args = {
  name : 'React',
  isRequired : true,
  courses : coursesList
  
}

export const ThirdCourse = Template.bind({});
ThirdCourse.args = {
  name : 'C++',
  isRequired : true,
  courses : coursesList
  
}