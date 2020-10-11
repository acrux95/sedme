import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

function AddGoal() {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState(true);

  const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(true);
  };

  return (
    <Form
      id='addGoal'
      form={form}
      layout='vertical'
      initialValues={{
        requiredMark,
      }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
      <Form.Item label='Goal Type' name='requiredMark'>
        <Radio.Group>
          <Radio.Button value='optional'>Curso</Radio.Button>
          <Radio.Button value={true}>Sesión Tecnica</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label='Name' required tooltip='This is a required field'>
        <Input placeholder='Curso de HTML y CSS' />
      </Form.Item>
      <Form.Item
        label='Description'
        required
        tooltip={{
          title: 'Tooltip with customize icon',
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder='In this course you will be guided...' />
      </Form.Item>
      <Form.Item
        label='Link'
        required
        tooltip={{
          title: 'Tooltip with customize icon',
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder='https://www.platzi.com' />
      </Form.Item>
      <Form.Item
        label='Time Duration in hours'
        required
        tooltip={{
          title: 'Tooltip with customize icon',
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder='4' />
      </Form.Item>
      <Form.Item>
        <Button type='primary'>Submit</Button>
      </Form.Item>
    </Form>
  );
}

export default AddGoal;
