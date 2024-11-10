import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

const api = "https://shop-pd211-awdhcvf3ebdpb7es.polandcentral-01.azurewebsites.net/api"

interface ProductModel {
    title: string;
    price: number;
}

const columns: TableProps<ProductModel>['columns'] = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {tags.map((tag) => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.title}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const ProductList: React.FC = () => {

    const [products, setProducts] = useState<ProductModel[]>();

    useEffect(() => {
        fetch(api + "/products/all").then(res => res.json()).then(data => {
            setProducts(data);
        });
    }, []);

    return (<Table<ProductModel> columns={columns} dataSource={products} />)
};

export default ProductList;
