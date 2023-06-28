// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

/*
第一级目录：存放工作室简介
*/
  a_studio_profile: [
    'a_studio_profile/a_studio_profile-intro',
    {
      label: '个人亮点',
      type: 'category',
      items: [{
            type: 'autogenerated',  //自动识别文件夹内容
            dirName: 'a_studio_profile/personal_highlights'
          }],
      collapsed: false
    }
  ],

/*
第二级目录：存放落地项目
*/
  b_landing_projects: [
    'b_landing_projects/b_landing_projects-intro',
    {
      label: '建筑工程智能放线机器人',
      type: 'category',
      items: [{
            type: 'autogenerated',  //自动识别文件夹内容
            dirName: 'b_landing_projects/no1_intelligent_pay_off_robot'  //1号项目，更改这里的文件夹名称即可
          }],
      collapsed: false
    },

    {
      label: '植物生长架苗盘自动搬运机器人',
      type: 'category',
      items: [{
            type: 'autogenerated',  //自动识别文件夹内容
            dirName: 'b_landing_projects/no2_seedling_tray_automatic_handling_robot'  //2号项目，更改这里的文件夹名称即可
          }],
      collapsed: false
    },

    {
      label: '基于激光SLAM导航的消毒机器人',
      type: 'category',
      items: [{
            type: 'autogenerated',  //自动识别文件夹内容
            dirName: 'b_landing_projects/no3_disinfection_robot'  //3号项目，更改这里的文件夹名称即可
          }],
      collapsed: false
    },

    {
      label: '破冰者--桥梁缆索除冰机器人',
      type: 'category',
      items: [{
            type: 'autogenerated',  //自动识别文件夹内容
            dirName: 'b_landing_projects/no4_bridge_cable_de_icing_robot'  //4号项目，更改这里的文件夹名称即可
          }],
      collapsed: false
    },
    
  ],

/*
第三级目录：存放创客项目
*/
c_maker_projects: [
  'c_maker_projects/c_maker_projects-intro',
  {
    label: '资源',
    type: 'category',
    items: [{
          type: 'autogenerated',
          dirName: 'c_maker_projects/resources'
        }],
    collapsed: true
  }
],

/*
第四级目录：存放ROS开发实践
*/
d_ros_development_practices: [
  'd_ros_development_practices/d_ros_development_practices-intro',
  {
    label: 'ROS实战开发',
    type: 'category',
    items: [{
          type: 'autogenerated',  //自动识别文件夹内容
          dirName: 'd_ros_development_practices/no2_ros_practical_development'  //2号项目，更改这里的文件夹名称即可
        }],
    collapsed: false
  }
],

/*
第五级目录：存放Linux开发实践
*/
e_linux_development_practices: [
  'e_linux_development_practices/e_linux_development_practices-intro',
  {
    label: '资源',
    type: 'category',
    items: [{
          type: 'autogenerated',
          dirName: 'e_linux_development_practices/resources'
        }],
    collapsed: false
  }
],

/*
第六级目录：存放STM32开发实践
*/
f_stm32_development_practices: [
  'f_stm32_development_practices/f_stm32_development_practices-intro',
  {
    label: 'stm32实战开发',
    type: 'category',
    items: [{
          type: 'autogenerated',
          dirName: 'f_stm32_development_practices/no2_stm32_practical_development'
        }],
    collapsed: false
  }
],

/*
第七级目录：存放实时操作系统开发实践
*/
g_freertos_rtthread_development_practices: [
  'g_freertos_rtthread_development_practices/g_freertos_rtthread_development_practices-intro',
  {
    label: '资源',
    type: 'category',
    items: [{
          type: 'autogenerated',
          dirName: 'g_freertos_rtthread_development_practices/resources'
        }],
    collapsed: false
  }
],

/*
第八级目录：存放电路设计
*/
h_circuit_design: [
  'h_circuit_design/h_circuit_design-intro',
  {
    label: '作品分类',
    type: 'category',
    items: [{
          type: 'autogenerated',
          dirName: 'h_circuit_design/no1_classification_of_works'
        }],
    collapsed: false
  }
],

/*
第九级目录：存放机械设计
*/
i_mechanical_design: [
  'i_mechanical_design/i_mechanical_design-intro',
  {
    label: '作品分类',
    type: 'category',
    items: [{
          type: 'autogenerated',
          dirName: 'i_mechanical_design/no1_classification_of_mechanical'
        }],
    collapsed: false
  }
],

/*
第十级目录：存放常用工具
*/
j_commonly_used_tools: [
  'j_commonly_used_tools/j_commonly_used_tools-intro',
  {
    label: '常用网址',
    type: 'category',
    items: [{
          type: 'autogenerated',
          dirName: 'j_commonly_used_tools/no1_frequently_used_URLs'
        }],
    collapsed: false
  }
],

};

module.exports = sidebars;
