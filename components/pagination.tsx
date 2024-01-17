'use client'

import { useURL } from '@/hooks';
import BasePaginate, { PaginationProps } from 'antd/es/pagination';
import { useState } from 'react';

const Pagination = (props: PaginationProps) => {
  const [current, setCurrent] = useState(props.current || 1);

  const { setQuery } = useURL();

  const onChange: PaginationProps['onChange'] = (page: number) => {
    setCurrent(page);
    setQuery({ page });
  }

  return <BasePaginate {...props} onChange={onChange} current={current} showSizeChanger={false}/>
}

export default Pagination;
