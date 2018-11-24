import React from 'react';
import { render } from 'react-dom';
import { LocaleProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
import './app.less';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
//引入组件
import Box from './src/component/Box.js';
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
render(
    <LocaleProvider locale={zhCN}>
        <Box />
    </LocaleProvider>,
    document.getElementById('root'));