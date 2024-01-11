'use client'

import { Button, Field, PasswordField } from "@/components";
import BaseButton from 'antd/es/button';

const Login = () => {
  return (
    <div>
      <Field />
      <PasswordField />
      <BaseButton>submit base</BaseButton>
      <Button type="primary">Submit</Button>
    </div>
  )
};

export default Login;
